import { randomBytes, scrypt as scryptCallback } from 'node:crypto';
import { promisify } from 'node:util';
import { createInterface } from 'node:readline';

const prompt = createInterface({ input: process.stdin, output: process.stdout });
const password = await new Promise(resolve => prompt.question('Пароль администратора (минимум 16 символов): ', resolve));
prompt.close();
if (password.length < 16) throw new Error('Пароль должен содержать не менее 16 символов');
const salt = randomBytes(16).toString('hex');
const digest = await promisify(scryptCallback)(password, salt, 64);
console.log(`ADMIN_PASSWORD_HASH=${salt}:${digest.toString('hex')}`);
