import { createHmac, randomBytes, scrypt as scryptCallback, timingSafeEqual } from 'node:crypto';
import { promisify } from 'node:util';
import { Driver } from '@ydbjs/core';
import { query } from '@ydbjs/query';
import { MetadataCredentialsProvider } from '@ydbjs/auth/metadata';

const scrypt = promisify(scryptCallback);
const database = process.env.YDB_CONNECTION_STRING;
const origin = process.env.SITE_ORIGIN || 'https://kskul1.github.io';
const diskToken = process.env.YANDEX_DISK_TOKEN;
const signingKey = process.env.SESSION_SECRET;
let sqlPromise;

function json(statusCode, data) {
  return { statusCode, headers: { 'Content-Type': 'application/json; charset=utf-8', 'Cache-Control': 'no-store', 'Access-Control-Allow-Origin': origin, 'Vary': 'Origin', 'Access-Control-Allow-Headers': 'Content-Type, Authorization', 'Access-Control-Allow-Methods': 'GET, POST, OPTIONS' }, body: JSON.stringify(data) };
}

async function getSql() {
  if (!sqlPromise) sqlPromise = (async () => {
    if (!database) throw new Error('YDB_CONNECTION_STRING is required');
    const driver = new Driver(database, { credentialsProvider: new MetadataCredentialsProvider({ endpoint: 'http://169.254.169.254/computeMetadata/v1/instance/service-accounts/default/token', flavor: 'Google' }) });
    await driver.ready();
    return query(driver);
  })().catch(error => { sqlPromise = null; throw error; });
  return sqlPromise;
}

function sign(payload) {
  const encoded = Buffer.from(JSON.stringify(payload)).toString('base64url');
  const signature = createHmac('sha256', signingKey).update(encoded).digest('base64url');
  return `${encoded}.${signature}`;
}

function verify(token) {
  if (!signingKey || !token || !token.includes('.')) return null;
  const [payload, signature] = token.split('.');
  const expected = createHmac('sha256', signingKey).update(payload).digest();
  let supplied;
  try { supplied = Buffer.from(signature, 'base64url'); } catch { return null; }
  if (supplied.length !== expected.length || !timingSafeEqual(supplied, expected)) return null;
  try {
    const claims = JSON.parse(Buffer.from(payload, 'base64url').toString());
    if (claims.expires <= Date.now() || !['republic', 'ppe'].includes(claims.role)) return null;
    return claims;
  } catch { return null; }
}

async function passwordHash(password, salt = randomBytes(16).toString('hex')) {
  return `${salt}:${(await scrypt(password, salt, 64)).toString('hex')}`;
}

async function passwordMatches(password, hash) {
  if (typeof hash !== 'string' || !/^[a-f0-9]{32}:[a-f0-9]{128}$/.test(hash)) return false;
  const [salt, expected] = hash.split(':');
  return timingSafeEqual(await scrypt(password, salt, 64), Buffer.from(expected, 'hex'));
}

async function read(sql, kind, key) {
  const [rows] = await sql`SELECT payload, revision FROM records WHERE kind = ${kind} AND key = ${key}`;
  return rows?.length ? { data: JSON.parse(rows[0].payload), revision: Number(rows[0].revision) } : { data: null, revision: 0 };
}

async function list(sql, kind) {
  const [rows] = await sql`SELECT key, payload, revision FROM records WHERE kind = ${kind}`;
  return (rows || []).map(row => ({ key: row.key, data: JSON.parse(row.payload), revision: Number(row.revision) }));
}

// Serializable transaction ensures that concurrent edits to the same document cannot silently overwrite each other.
async function write(sql, kind, key, data, revision) {
  return sql.begin(async tx => {
    const [rows] = await tx`SELECT revision FROM records WHERE kind = ${kind} AND key = ${key}`;
    const actual = rows?.length ? Number(rows[0].revision) : 0;
    if (actual !== revision) return { conflict: true, revision: actual };
    const next = actual + 1;
    await tx`UPSERT INTO records (kind, key, payload, revision) VALUES (${kind}, ${key}, ${JSON.stringify(data)}, ${next})`;
    return { revision: next };
  });
}

function scoped(claims, kind, key, writing = false) {
  if (kind === 'passport' || kind === 'review') return /^\d{4}$/.test(key) && (claims.role === 'republic' ? !writing || kind === 'review' : claims.ppeCode === key && (!writing || kind === 'passport'));
  if (kind === 'calendar') return key === 'all' && (claims.role === 'republic' || !writing);
  if (kind === 'notification') return key === claims.login;
  return false;
}

async function diskRequest(path, options = {}) {
  if (!diskToken) throw new Error('YANDEX_DISK_TOKEN is required');
  const response = await fetch(`https://cloud-api.yandex.net/v1/disk/resources${path}`, { ...options, headers: { Authorization: `OAuth ${diskToken}`, ...(options.headers || {}) } });
  if (!response.ok) throw new Error(`Yandex Disk request failed: ${response.status}`);
  return response.json();
}

async function ensureDiskFolder() {
  if (!diskToken) throw new Error('YANDEX_DISK_TOKEN is required');
  const response = await fetch('https://cloud-api.yandex.net/v1/disk/resources?path=app%3A%2Fppe-passport', { method: 'PUT', headers: { Authorization: `OAuth ${diskToken}` } });
  if (![201, 202, 409].includes(response.status)) throw new Error(`Cannot create Disk folder: ${response.status}`);
}

function bodyFrom(event) {
  const text = event.isBase64Encoded ? Buffer.from(event.body || '', 'base64').toString('utf8') : event.body || '{}';
  if (Buffer.byteLength(text) > 8 * 1024 * 1024) throw Object.assign(new Error('Запрос слишком большой'), { status: 413 });
  try { return JSON.parse(text); } catch { throw Object.assign(new Error('Некорректный JSON'), { status: 400 }); }
}

export async function handler(event) {
  if (event.httpMethod === 'OPTIONS') return json(204, {});
  const headers = Object.fromEntries(Object.entries(event.headers || {}).map(([key, value]) => [key.toLowerCase(), value]));
  if (headers.origin && headers.origin !== origin) return json(403, { error: 'Origin not allowed' });
  if (!signingKey || signingKey.length < 32) return json(503, { error: 'SESSION_SECRET is not configured' });
  try {
    const sql = await getSql();
    const path = event.path || '/';
    const method = event.httpMethod;
    if (path.endsWith('/health') && method === 'GET') {
      await sql`SELECT 1 AS ok`;
      return json(200, { ok: true });
    }
    if (path.endsWith('/login') && method === 'POST') {
      const { login, password } = bodyFrom(event);
      if (typeof login !== 'string' || typeof password !== 'string' || login.length > 100 || password.length > 200) return json(400, { error: 'Invalid credentials' });
      const normalized = login.trim().toLowerCase();
      let account;
      if (normalized === process.env.ADMIN_LOGIN) {
        account = { login: normalized, role: 'republic', passwordHash: process.env.ADMIN_PASSWORD_HASH, name: process.env.ADMIN_NAME || 'Республиканский администратор', shortName: 'Администратор', title: 'Республиканский администратор', initials: 'РА' };
      } else {
        const accounts = await read(sql, 'account', normalized);
        account = accounts.data;
      }
      if (!account || !await passwordMatches(password, account.passwordHash)) return json(401, { error: 'Неверный логин или пароль' });
      const { passwordHash: ignored, ...publicAccount } = account;
      return json(200, { token: sign({ login: normalized, role: account.role, ppeCode: account.ppeCode, expires: Date.now() + 8 * 3600 * 1000 }), account: publicAccount });
    }
    const claims = verify((headers.authorization || '').replace(/^Bearer /i, ''));
    if (!claims) return json(401, { error: 'Требуется вход в систему' });
    if (path.endsWith('/snapshot') && method === 'GET') {
      const documents = await Promise.all(['passport', 'review', 'calendar', 'notification'].map(kind => list(sql, kind)));
      return json(200, Object.fromEntries(['passport', 'review', 'calendar', 'notification'].map((kind, i) => [kind, documents[i].filter(item => scoped(claims, kind, item.key))])));
    }
    if (path.endsWith('/document') && method === 'POST') {
      const { kind, key, data, revision } = bodyFrom(event);
      if (typeof key !== 'string' || !Number.isSafeInteger(revision) || revision < 0 || typeof data !== 'object' || data === null || !scoped(claims, kind, key, true)) return json(403, { error: 'Нет прав для изменения записи' });
      if (Buffer.byteLength(JSON.stringify(data)) > 500_000) return json(413, { error: 'Запись слишком большая' });
      const result = await write(sql, kind, key, data, revision);
      return json(result.conflict ? 409 : 200, result);
    }
    if (path.endsWith('/account') && method === 'POST') {
      if (claims.role !== 'republic') return json(403, { error: 'Нет доступа' });
      const { account, password } = bodyFrom(event);
      if (!account || !/^[a-z0-9.]{3,50}$/.test(account.login || '') || !['republic', 'ppe'].includes(account.role) || account.role === 'ppe' && !/^\d{4}$/.test(account.ppeCode || '') || typeof password !== 'string' || password.length < 12) return json(400, { error: 'Некорректная учётная запись' });
      const { data, revision } = await read(sql, 'account', account.login);
      if (data || account.login === process.env.ADMIN_LOGIN) return json(409, { error: 'Логин уже занят' });
      const safe = { login: account.login, role: account.role, ppeCode: account.ppeCode, name: String(account.name || '').slice(0, 150), shortName: String(account.shortName || '').slice(0, 80), title: String(account.title || '').slice(0, 150), initials: String(account.initials || '').slice(0, 8), email: String(account.email || '').slice(0, 150), passwordHash: await passwordHash(password) };
      const result = await write(sql, 'account', account.login, safe, revision);
      return json(result.conflict ? 409 : 200, result);
    }
    if (path.endsWith('/accounts') && method === 'GET') {
      if (claims.role !== 'republic') return json(403, { error: 'Нет доступа' });
      const accounts = await list(sql, 'account');
      return json(200, { accounts: accounts.map(({ key, data, revision }) => {
        const { passwordHash: ignored, ...publicAccount } = data;
        return { key, account: publicAccount, revision };
      }) });
    }
    if (path.endsWith('/file/upload') && method === 'POST') {
      if (claims.role !== 'ppe') return json(403, { error: 'Нет доступа' });
      const { fileId, base64, type } = bodyFrom(event);
      if (!/^file-[a-zA-Z0-9_-]{8,100}$/.test(fileId || '') || typeof base64 !== 'string' || !/^(image\/(jpeg|png|webp|tiff|bmp)|application\/pdf)$/.test(type || '')) return json(400, { error: 'Некорректный файл' });
      const bytes = Buffer.from(base64, 'base64');
      if (!bytes.length || bytes.length > 5 * 1024 * 1024) return json(413, { error: 'Максимальный размер файла — 5 МБ' });
      await ensureDiskFolder();
      const diskPath = `app:/ppe-passport/${claims.ppeCode}-${fileId}`;
      const link = await diskRequest(`/upload?path=${encodeURIComponent(diskPath)}&overwrite=false`);
      const result = await fetch(link.href, { method: 'PUT', body: bytes, headers: { 'Content-Type': type } });
      if (![201, 202].includes(result.status)) throw new Error(`Disk upload failed: ${result.status}`);
      return json(200, { fileId });
    }
    if (path.endsWith('/file/download') && method === 'POST') {
      const { ppeCode, fileId } = bodyFrom(event);
      if (!/^\d{4}$/.test(ppeCode || '') || !/^file-[a-zA-Z0-9_-]{8,100}$/.test(fileId || '') || claims.role !== 'republic' && claims.ppeCode !== ppeCode) return json(403, { error: 'Нет доступа' });
      const passport = (await read(sql, 'passport', ppeCode)).data;
      const referenced = (passport?.photos?.photos || []).some(photo => photo.fileId === fileId) || (passport?._submission?.snapshot?.photos?.photos || []).some(photo => photo.fileId === fileId);
      if (!referenced) return json(404, { error: 'Файл не найден в паспорте' });
      const link = await diskRequest(`/download?path=${encodeURIComponent(`app:/ppe-passport/${ppeCode}-${fileId}`)}`);
      const result = await fetch(link.href);
      if (!result.ok) throw new Error(`Disk download failed: ${result.status}`);
      const bytes = Buffer.from(await result.arrayBuffer());
      if (bytes.length > 5 * 1024 * 1024) return json(413, { error: 'Файл слишком большой для загрузки через функцию' });
      return json(200, { base64: bytes.toString('base64') });
    }
    return json(404, { error: 'Not found' });
  } catch (error) {
    console.error(error);
    return json(error.status || 500, { error: error.status ? error.message : 'Ошибка сервера. Проверьте журналы функции.' });
  }
}
