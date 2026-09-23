const ppeRegistry = [
  ['ОГЭ', '6110', 'ГБОУ ЛНР «Алчевская средняя школа № 6»', 'Алчевск'],
  ['ОГЭ', '6357', 'ГБОУ ЛНР «Алчевская средняя школа № 12»', 'Алчевск'],
  ['ОГЭ', '6247', 'ГБОУ ЛНР «Антрацитовская основная школа № 1 – лицей имени Героя Советского Союза Олега Кошевого»', 'Антрацит'],
  ['ОГЭ', '6248', 'ГБОУ ЛНР «Антрацитовская СШ № 2 имени К.В. Младших»', 'Антрацит'],
  ['ОГЭ', '6107', 'ГБОУ ЛНР «Беловодский лицей «Лидер»', 'Беловодск'],
  ['ОГЭ', '6419', 'ГБОУ ЛНР «Белокуракинская школа № 1»', 'Белокуракино'],
  ['ОГЭ', '6330', 'ГБОУ ЛНР «Брянковская специализированная школа № 23»', 'Брянка'],
  ['ОГЭ', '6301', 'ГБОУ ЛНР «Кировская многопрофильная гимназия»', 'Кировск'],
  ['ОГЭ', '6179', 'ГБОУ ЛНР «Краснодонская средняя школа № 2 имени Кавалера ордена Ленина Н.П. Баракова»', 'Краснодон'],
  ['ОГЭ', '6185', 'ГБОУ ЛНР «Краснодонская средняя школа № 8 имени защитника Луганской Народной Республики Виталия Парсанова»', 'Краснодон'],
  ['ОГЭ', '6190', 'ГБОУ ЛНР «Суходольская средняя школа № 17 имени Героя Советского Союза И.А. Земнухова»', 'Суходольск'],
  ['ОГЭ', '6313', 'ГБОУ ЛНР «Краснолучская школа № 4»', 'Красный Луч'],
  ['ОГЭ', '6308', 'ГБОУ ЛНР «Краснолучская гимназия № 1 имени Л. Литвяк»', 'Красный Луч'],
  ['ОГЭ', '6661', 'ГБОУ ЛНР «Луганский учебно-воспитательный комплекс № 51 имени 10-летия Республики»', 'Луганск'],
  ['ОГЭ', '6134', 'ГБОУ ЛНР «Луганская средняя школа № 20 имени А. В. Демехина»', 'Луганск'],
  ['ОГЭ', '6163', 'ГБОУ ЛНР «Луганский учебно-воспитательный комплекс имени летчика-космонавта Г.Т. Берегового»', 'Луганск'],
  ['ОГЭ', '6148', 'ГБОУ ЛНР «Луганская средняя школа № 41»', 'Луганск'],
  ['ОГЭ', '6144', 'ГБОУ ЛНР «Луганская лингвистическая гимназия № 36 имени маршала Г. К. Жукова»', 'Луганск'],
  ['ОГЭ', '6154', 'ГБОУ ЛНР «Луганский учебно-воспитательный комплекс № 50 имени А. В. Федорчука»', 'Луганск'],
  ['ОГЭ', '6146', 'ГБОУ ЛНР «Луганская средняя школа № 38 имени маршала К.Е. Ворошилова»', 'Луганск'],
  ['ОГЭ', '6153', 'ГБОУ ЛНР «Луганская средняя школа № 49 имени Ю.А. Гагарина»', 'Луганск'],
  ['ОГЭ', '6158', 'ГБОУ ЛНР «Луганская средняя школа № 55 имени К.К. Рокоссовского»', 'Луганск'],
  ['ОГЭ', '6141', 'ГБОУ ЛНР «Луганская средняя школа № 28 имени О. П. Фисуненко»', 'Луганск'],
  ['ОГЭ', '6367', 'ГБОУ ЛНР «Георгиевская средняя школа № 1»', 'Георгиевка'],
  ['ОГЭ', '6371', 'ГБОУ ЛНР «Лутугинская средняя школа № 2»', 'Лутугино'],
  ['ОГЭ', '6468', 'ГБОУ ЛНР «Меловская средняя школа»', 'Меловое'],
  ['ОГЭ', '6119', 'ГБОУ ЛНР «Новоайдарская средняя школа»', 'Новоайдар'],
  ['ОГЭ', '6459', 'ГБОУ ЛНР «Новопсковская средняя школа»', 'Новопсков'],
  ['ОГЭ', '6237', 'ГБОУ ЛНР «Комиссаровская средняя школа № 31»', 'Комиссаровка'],
  ['ОГЭ', '6236', 'ГБОУ ЛНР «Зоринская СШ № 10 имени Саши Дегтярева»', 'Зоринск'],
  ['ОГЭ', '6288', 'ГБОУ ЛНР «Ровеньковская гимназия имени писателя Н. Трублаини»', 'Ровеньки'],
  ['ОГЭ', '6284', 'ГБОУ ЛНР «Ровеньковская школа № 6 имени полковника О.В. Анащенко»', 'Ровеньки'],
  ['ОГЭ', '6207', 'ГБОУ ЛНР «Свердловская гимназия № 2»', 'Свердловск'],
  ['ОГЭ', '6220', 'ГБОУ ЛНР «Свердловская специализированная школа № 6 имени Героев 203-й стрелковой Запорожско-Хинганской Краснознаменной ордена Суворова дивизии»', 'Свердловск'],
  ['ОГЭ', '6222', 'ГБОУ ЛНР «Свердловская средняя школа № 8 имени Станислава Синельника»', 'Свердловск'],
  ['ОГЭ', '6177', 'ГБОУ ЛНР «Славяносербская средняя школа имени Дмитрия Степановича Полянского, государственного и партийного деятеля»', 'Славяносербск'],
  ['ОГЭ', '6106', 'ГБОУ ЛНР «Станично-Луганская гимназия»', 'Станица Луганская'],
  ['ОГЭ', '6383', 'ГБОУ ЛНР «Старобельская средняя школа № 4»', 'Старобельск'],
  ['ОГЭ', '6399', 'ГБОУ ЛНР «Стахановская гимназия № 11 имени Кирилла и Мефодия»', 'Стаханов'],
  ['ОГЭ', '6397', 'ГБОУ ЛНР «Стахановская специализированная школа № 9 имени Алексея Стаханова»', 'Стаханов'],
  ['ОГЭ', '6437', 'ГБОУ ЛНР «Сватовская средняя школа № 8»', 'Сватово'],
  ['ОГЭ', '6662', 'ГБОУ ЛНР «Северодонецкая средняя школа № 9»', 'Северодонецк'],
  ['ОГЭ', '6451', 'ГБОУ ЛНР «Троицкая средняя школа № 1»', 'Троицкое'],
  ['ОГЭ', '6298', 'ГБОУ ЛНР «Лисичанская средняя школа 14»', 'Лисичанск'],
  ['ЕГЭ', '6111', 'ГБОУ ЛНР «Алчевская средняя специализированная физико-математическая школа № 22»', 'Алчевск'],
  ['ЕГЭ', '6352', 'ГБОУ ЛНР «Алчевский информационно-технологический лицей»', 'Алчевск'],
  ['ЕГЭ', '6112', 'ГБОУ ЛНР «Антрацитовская СШ № 5 имени воина-интернационалиста Владимира Очкура»', 'Антрацит'],
  ['ЕГЭ', '6439', 'ГБОУ ЛНР «Беловодская средняя школа № 1»', 'Беловодск'],
  ['ЕГЭ', '6424', 'ГБОУ ЛНР «Павловская школа № 12»', 'Павловка'],
  ['ЕГЭ', '6326', 'ГБОУ ЛНР «Брянковская средняя школа № 9»', 'Брянка'],
  ['ЕГЭ', '6293', 'ГБОУ ЛНР «Первомайская специализированная средняя школа № 6 имени Евгения Ищенко»', 'Первомайск'],
  ['ЕГЭ', '6105', 'ГБОУ ЛНР «Краснодонская средняя школа № 1 имени А.М. Горького»', 'Краснодон'],
  ['ЕГЭ', '6184', 'ГБОУ ЛНР «Молодогвардейская средняя школа № 7 имени Героя Советского Союза О.В. Кошевого»', 'Молодогвардейск'],
  ['ЕГЭ', '6113', 'ГБОУ ЛНР «Краснолучская школа № 20»', 'Красный Луч'],
  ['ЕГЭ', '6318', 'ГБОУ ЛНР «Петровская школа № 22 имени генерал-майора М.М. Шаймуратова»', 'Петровское'],
  ['ЕГЭ', '6102', 'ГБОУ ЛНР «Луганская гимназия № 30 имени Н. Т. Фесенко»', 'Луганск'],
  ['ЕГЭ', '6103', 'ГБОУ ЛНР «Луганская специализированная школа № 57 имени Г. С. Петрова»', 'Луганск'],
  ['ЕГЭ', '6139', 'ГБОУ ЛНР «Луганская средняя школа № 26»', 'Луганск'],
  ['ЕГЭ', '6152', 'ГБОУ ЛНР «Луганская средняя школа № 48 имени А. Н. Канищева»', 'Луганск'],
  ['ЕГЭ', '6164', 'ГБОУ ЛНР «Луганский учебно-воспитательный комплекс «Интеллект»', 'Луганск'],
  ['ЕГЭ', '6104', 'ГБОУ ЛНР «Луганская гимназия № 60 имени 200-летия г. Луганска»', 'Луганск'],
  ['ЕГЭ', '6127', 'ГБОУ ЛНР «Луганская средняя школа № 8 имени Н.Ф. Ватутина»', 'Луганск'],
  ['ЕГЭ', '6372', 'ГБОУ ЛНР «Лутугинская средняя школа № 1»', 'Лутугино'],
  ['ЕГЭ', '6418', 'ГБОУ ЛНР «Марковская гимназия»', 'Марковка'],
  ['ЕГЭ', '6438', 'ГБОУ ЛНР «Новоайдарская санаторная школа-интернат»', 'Новоайдар'],
  ['ЕГЭ', '6108', 'ГБОУ ЛНР «Новопсковская газопроводская средняя школа»', 'Новопсков'],
  ['ЕГЭ', '6234', 'ГБОУ ЛНР «Перевальская гимназия № 1»', 'Перевальск'],
  ['ЕГЭ', '6114', 'ГБОУ ЛНР «Ровеньковская школа № 3 имени А.Ф. Бурды»', 'Ровеньки'],
  ['ЕГЭ', '6115', 'ГБОУ ЛНР «Свердловский лицей № 1 имени сестер подпольщиц Лидии и Светланы Бабарицких»', 'Свердловск'],
  ['ЕГЭ', '6219', 'ГБОУ ЛНР «Свердловская средняя школа № 5 имени Героя Советского Союза Гавриила Здановича»', 'Свердловск'],
  ['ЕГЭ', '6167', 'ГБОУ ЛНР «Зимогорьевская гимназия имени Воинов-интернационалистов»', 'Зимогорье'],
  ['ЕГЭ', '6342', 'ГБОУ ЛНР «Станично-Луганская средняя школа имени Грекова П.М.»', 'Станица Луганская'],
  ['ЕГЭ', '6109', 'ГБОУ ЛНР «Старобельская средняя школа № 3»', 'Старобельск'],
  ['ЕГЭ', '6402', 'ГБОУ ЛНР «Стахановская гимназия № 26»', 'Стаханов'],
  ['ЕГЭ', '6425', 'ГБОУ ЛНР «Сватовская гимназия № 7»', 'Сватово'],
  ['ЕГЭ', '6406', 'ГБОУ ЛНР «Северодонецкая средняя школа № 6»', 'Северодонецк'],
  ['ЕГЭ', '6452', 'ГБОУ ЛНР «Троицкая средняя школа № 2»', 'Троицкое'],
  ['ЕГЭ', '6101', 'ФГБОУ ВО «Луганский государственный педагогический университет»', 'Луганск']
];

const organizations = ppeRegistry.map(([exam, ppeCode, name, locality]) => {
  return {
    name,
    code: `ППЭ ${ppeCode} · ${exam} · ${locality}`,
    progress: 0,
    status: 'draft',
    label: 'Не начато',
    updated: 'Нет данных',
    initials: ppeCode.slice(-2)
  };
});

const accounts = {
  republic: { password: 'lnr2026', role: 'republic', name: 'Ирина Глазунова', shortName: 'Ирина', title: 'Республиканский администратор', initials: 'ИГ' },
  ppe6110: { password: 'ppe2026', role: 'ppe', name: 'Елена Смирнова', shortName: 'Елена', title: 'Администратор ППЭ 6110', ppeCode: '6110', initials: 'ЕС' }
};

let currentUser = null;
let currentOrgIndex = 0;
let currentSection = 'rooms';
let sectionDirty = false;
let lastDialogTrigger = null;
let notifications = JSON.parse(localStorage.getItem('ppeNotifications') || '[]');
let reviews = JSON.parse(localStorage.getItem('ppeReviews') || '{}');
let passportData = JSON.parse(localStorage.getItem('ppePassportData') || '{}');
let preferences = JSON.parse(localStorage.getItem('ppePreferences') || '{"theme":"light","fontSize":100}');
let calendarEntries = JSON.parse(localStorage.getItem('ppeCalendarEntries') || '[]');
let managedAccounts = JSON.parse(localStorage.getItem('ppeManagedAccounts') || '[]').filter(account => account.role !== 'municipality');
localStorage.setItem('ppeManagedAccounts', JSON.stringify(managedAccounts));
const sectionTitles = { rooms: 'Аудиторный фонд', equipment: 'Оборудование', cameras: 'Видеонаблюдение', workplaces: 'Защищённые АРМ', staff: 'Ответственные лица', photos: 'Фотоматериалы' };
const issueStateLabels = {
  new: 'Новое',
  in_progress: 'В работе',
  fixed_ppe: 'Исправлено ППЭ',
  verified_municipality: 'Проверено муниципалитетом',
  closed_republic: 'Закрыто республикой',
  reopened: 'Переоткрыто'
};

function activeIssues(code) {
  return (reviews[code]?.comments || []).filter(comment => issueState(comment) !== 'closed_republic');
}

function currentSectionDecision(code, section) {
  if (passportData[code]?._submission?.status !== 'submitted') return '';
  return reviews[code]?.sectionStatus?.[section] || '';
}

function sectionCompletionErrors(section, saved) {
  if (!saved?.savedAtIso) return ['Раздел не сохранён'];
  const errors = [...(saved.validationErrors || [])];
  if (section === 'photos') {
    if (!(saved.photos || []).length) errors.push('Не загружены обязательные файлы');
    if ((saved.photos || []).some(photo => photo.available === false)) errors.push('Один или несколько файлов недоступны');
    return errors;
  }
  if (!(saved.values || []).length && !(saved.rows || []).length && !(saved.specialists || []).length) errors.push('Отсутствуют данные');
  (saved.values || []).forEach((value, index) => {
    if (!String(value ?? '').trim()) errors.push(`Не заполнено поле «${saved.fieldLabels?.[index] || `Поле ${index + 1}`}»`);
  });
  (saved.rows || []).forEach(row => Object.entries(row.fieldValues || {}).forEach(([field, value]) => {
    if (!String(value ?? '').trim()) errors.push(`Строка ${row.rowId}: не заполнено поле «${field}»`);
  }));
  if (section === 'rooms' && !(saved.rows || []).length) errors.push('Не добавлено ни одного помещения');
  if (section === 'equipment') {
    const required = ['computers', 'printers', 'scanners'];
    required.forEach(tableKey => { if (!(saved.rows || []).some(row => row.tableKey === tableKey)) errors.push(`Не заполнена обязательная категория «${tableKey}»`); });
  }
  if (section === 'staff') {
    const active = (saved.specialists || []).filter(item => item.status === 'active');
    if (!active.length) errors.push('Не добавлен действующий технический специалист');
    active.forEach(item => ['fullName', 'position', 'workplace', 'phone', 'experience'].forEach(key => {
      const labels = { fullName: 'ФИО', position: 'Должность', workplace: 'Место работы', phone: 'Телефон', experience: 'Опыт проведения ГИА' };
      if (!String(item[key] || '').trim()) errors.push(`Специалист ${item.id}: не заполнено поле «${labels[key]}»`);
    }));
  }
  return [...new Set(errors)];
}

function renderSectionErrors(section, saved = displayedSectionData(organizationCode(organizations[currentOrgIndex]), section)) {
  const errors = sectionCompletionErrors(section, saved);
  if (!errors.length) return '';
  return `<div class="section-error-list" role="alert"><strong>Проверьте заполнение:</strong><ul>${errors.map(error => `<li>${escapeHtml(error)}</li>`).join('')}</ul></div>`;
}

function refreshOrganizationState(org) {
  const code = organizationCode(org);
  const record = passportData[code] || {};
  const completed = Object.keys(sectionTitles).filter(section => sectionCompletionErrors(section, record[section]).length === 0);
  const savedDates = Object.keys(sectionTitles).map(section => record[section]?.savedAtIso).filter(Boolean).sort();
  const review = reviews[code] || {};
  const issues = activeIssues(code);
  const accepted = Object.keys(sectionTitles).filter(section => currentSectionDecision(code, section) === 'accepted');
  const missedDeadline = calendarEntries.some(entry => organizationMissedDeadline(org, entry));
  org.progress = Math.round(completed.length / Object.keys(sectionTitles).length * 100);
  org.updated = savedDates.length ? new Date(savedDates.at(-1)).toLocaleDateString('ru-RU') : 'Нет данных';
  org.status = 'draft';
  org.label = org.progress ? 'Черновик' : 'Не начато';
  if (record._submission?.status === 'submitted') {
    org.status = 'submitted';
    org.label = accepted.length === Object.keys(sectionTitles).length && !issues.length ? 'Паспорт принят' : 'На проверке';
  }
  if (record._submission?.status === 'changes_pending') org.label = 'Есть изменения после отправки';
  if (issues.length || review.returned || missedDeadline) {
    org.status = 'issue';
    org.label = missedDeadline || review.deadline ? 'Нарушен срок' : 'На доработке';
  } else if (review.deadline) {
    org.status = 'issue';
    org.label = 'Нарушен срок';
  } else if (accepted.length === Object.keys(sectionTitles).length && record._submission?.status === 'submitted') {
    org.status = 'ready';
    org.label = 'Паспорт принят';
    org.progress = 100;
  }
}

function refreshAllOrganizationStates() {
  organizations.forEach(refreshOrganizationState);
}

function confirmDiscardChanges() {
  if (!sectionDirty) return true;
  if (!window.confirm('В разделе есть несохранённые изменения. Выйти без сохранения?')) return false;
  sectionDirty = false;
  return true;
}

function organizationCode(org) {
  return org.code.split(' · ')[0].replace('ППЭ ', '');
}

function organizationLocality(org) {
  return org.code.split(' · ')[2];
}

const municipalityByLocality = {
  'Алчевск': 'Городской округ г. Алчевск', 'Антрацит': 'Антрацитовский муниципальный округ', 'Беловодск': 'Беловодский муниципальный округ',
  'Белокуракино': 'Белокуракинский муниципальный округ', 'Павловка': 'Белокуракинский муниципальный округ', 'Брянка': 'Городской округ г. Брянка',
  'Кировск': 'Городской округ г. Кировск', 'Первомайск': 'Городской округ г. Первомайск', 'Краснодон': 'Краснодонский муниципальный округ',
  'Молодогвардейск': 'Краснодонский муниципальный округ', 'Суходольск': 'Краснодонский муниципальный округ', 'Красный Луч': 'Городской округ г. Красный Луч',
  'Петровское': 'Городской округ г. Красный Луч', 'Луганск': 'Городской округ г. Луганск', 'Георгиевка': 'Лутугинский муниципальный округ',
  'Лутугино': 'Лутугинский муниципальный округ', 'Марковка': 'Марковский муниципальный округ', 'Меловое': 'Меловский муниципальный округ',
  'Новоайдар': 'Новоайдарский муниципальный округ', 'Новопсков': 'Новопсковский муниципальный округ', 'Комиссаровка': 'Перевальский муниципальный округ',
  'Зоринск': 'Перевальский муниципальный округ', 'Перевальск': 'Перевальский муниципальный округ', 'Ровеньки': 'Городской округ г. Ровеньки',
  'Свердловск': 'Свердловский муниципальный округ', 'Славяносербск': 'Славяносербский муниципальный округ', 'Зимогорье': 'Славяносербский муниципальный округ',
  'Станица Луганская': 'Станично-Луганский муниципальный округ', 'Старобельск': 'Старобельский муниципальный округ', 'Стаханов': 'Городской округ г. Стаханов',
  'Сватово': 'Сватовский муниципальный округ', 'Северодонецк': 'Городской округ г. Северодонецк', 'Троицкое': 'Троицкий муниципальный округ',
  'Лисичанск': 'Городской округ г. Лисичанск'
};

function organizationMunicipality(org) {
  return municipalityByLocality[organizationLocality(org)] || organizationLocality(org);
}

function allowedOrganizations() {
  if (!currentUser || currentUser.role === 'republic') return organizations;
  return organizations.filter(org => organizationCode(org) === currentUser.ppeCode);
}

function equipmentTable(headers, tableKey) {
  const columns = headers.length;
  const table = `<div class="equipment-table columns-${columns}" data-table-key="${tableKey}" data-section="equipment"><div class="equipment-row equipment-header">${headers.map(header => `<span>${header}</span>`).join('')}<span></span></div></div>`;
  return `<div class="equipment-scroll">${table}</div><button class="add-row"><svg><use href="#i-plus"/></svg> Добавить строку</button>`;
}

const sectionTemplates = {
  rooms: () => `
    <article class="form-card">
       <div class="form-card-head"><div><h2>Аудиторный фонд</h2><p>Добавьте помещения, планируемые к использованию в период ГИА</p></div><span class="status warning">Не заполнено</span></div>
       <div class="form-card-body">
         <div class="room-table auditorium-table" data-table-key="auditoriums" data-section="rooms">
           <div class="room-row header"><span>Назначение</span><span>Номер кабинета школы</span><span>Этаж школы</span><span>Количество</span><span></span></div>
         </div>
         <div class="empty-hint">Строк пока нет. Нажмите «Добавить тип аудитории».</div>
         <button class="add-row"><svg><use href="#i-plus"/></svg> Добавить тип аудитории</button>
      </div>
    </article>
    <article class="form-card"><div class="form-card-head"><div><h2>Общие сведения о здании</h2><p>Доступность и вместимость пункта</p></div></div><div class="form-card-body"><div class="form-grid">
       ${field('Проектная вместимость, человек', '', false, 'Введите количество', 'number')}
       ${field('Этажность здания', '', false, 'Введите количество этажей', 'number')}
       ${field('Доступность для маломобильных групп', '', true, 'Опишите средства доступности')}
       ${field('Этажи, задействованные для организации ППЭ', '', true, 'Например: 1, 2')}
    </div></div></article>`,
  equipment: () => `
    <article class="form-card"><div class="form-card-head"><div><h2>Компьютеры</h2><p>Основные рабочие места ППЭ</p></div></div><div class="form-card-body">${equipmentTable(['Количество', 'Модель', 'Процессор', 'Оперативная память'], 'computers')}</div></article>
    <article class="form-card"><div class="form-card-head"><div><h2>Резервные компьютеры</h2><p>Техника для замены основных рабочих мест</p></div></div><div class="form-card-body">${equipmentTable(['Количество', 'Модель', 'Процессор', 'Оперативная память'], 'reserveComputers')}</div></article>
    <article class="form-card"><div class="form-card-head"><div><h2>Принтеры</h2><p>Печатная техника ППЭ</p></div></div><div class="form-card-body">${equipmentTable(['Количество', 'Модель', 'Кол-во листов в минуту'], 'printers')}</div></article>
    <article class="form-card"><div class="form-card-head"><div><h2>Сканеры</h2><p>Оборудование для сканирования материалов</p></div></div><div class="form-card-body">${equipmentTable(['Количество', 'Модель', 'Кол-во листов в минуту'], 'scanners')}</div></article>
    <article class="form-card"><div class="form-card-head"><div><h2>МФУ</h2><p>Многофункциональные устройства</p></div></div><div class="form-card-body">${equipmentTable(['Количество', 'Модель', 'Кол-во листов в минуту'], 'mfu')}</div></article>
    <article class="form-card"><div class="form-card-head"><div><h2>Дополнительное оборудование</h2><p>Инвентарь, необходимый для проведения экзаменов</p></div></div><div class="form-card-body">${equipmentTable(['Оборудование', 'Количество', 'Модель'], 'additional')}</div></article>`,
  cameras: () => `
    <article class="form-card"><div class="form-card-head"><div><h2>Система видеонаблюдения</h2><p>Камеры, используемые для проведения ГИА</p></div><span class="status warning">Не заполнено</span></div><div class="form-card-body"><div class="form-grid">
       ${field('Количество камер', '', false, 'Введите количество', 'number')}${field('Модель камеры', '', false, 'Введите модель')}${field('Разрешение записи', '', false, 'Введите разрешение')}${field('Модель сервера', '', false, 'Введите модель')}${field('Зоны покрытия', '', true, 'Перечислите зоны')}${field('Ответственный за систему', '', false, 'Введите ФИО')}${field('Номер телефона ответственного', '', true, 'Введите телефон', 'tel')}
    </div></div></article>`,
  workplaces: () => `
     <article class="form-card"><div class="form-card-head"><div><h2>Защищённые рабочие места</h2><p>АРМ, подключённые к защищённой сети передачи данных</p></div><span class="status warning">Не заполнено</span></div><div class="form-card-body">
       <div class="notice attestation-notice hidden" id="attestationNotice"><svg><use href="#i-alert"/></svg><div><strong id="attestationState"></strong><br><span id="attestationStateText"></span></div></div>
       <div class="form-grid">${field('Количество аттестованных АРМ', '', false, 'Введите количество', 'number')}${field('Место расположения аттестованных АРМ', '', false, 'Введите кабинет')}${field('Номера аттестатов', '', true, 'Введите номера аттестатов')}<div class="field full"><label><span>Срок действия аттестации</span></label><input id="attestationExpiry" type="date" aria-label="Срок действия аттестации"></div></div>
    </div></article>`,
  staff: () => `
     <article class="form-card"><div class="form-card-head"><div><h2>Руководитель ППЭ</h2><p>Основное ответственное лицо</p></div></div><div class="form-card-body"><div class="form-grid">${field('ФИО', '', true, 'Введите ФИО')}${field('Должность', '', false, 'Введите должность')}${field('Место работы', '', true, 'Введите организацию')}${field('Телефон', '', false, 'Введите телефон', 'tel')}${field('Электронная почта', '', false, 'Введите email', 'email')}${field('Электронная почта учреждения', '', false, 'Введите email учреждения', 'email')}</div></div></article>
     <article class="form-card"><div class="form-card-head"><div><h2>Технические специалисты</h2><p>Добавьте назначенных специалистов</p></div><button class="btn secondary add-staff-row"><svg><use href="#i-plus"/></svg>Добавить</button></div><div class="form-card-body"><div class="room-table staff-table" data-table-key="specialists" data-section="staff">
       <div class="room-row header staff-row"><span>ФИО</span><span>Должность</span><span>Место работы</span><span>Телефон</span><span>Опыт проведения ГИА</span><span>Статус</span><span></span></div>
     </div></div></article>`,
  photos: () => `
    <article class="form-card"><div class="form-card-head"><div><h2>Фотоматериалы</h2><p>Фотографии аудиторий, входной группы и оборудования</p></div><span class="status warning" id="photoCount">Файлы не загружены</span></div><div class="form-card-body">
       <label class="upload-zone" id="uploadZone"><input id="fileInput" type="file" accept="image/*,.jpg,.jpeg,.png,.tif,.tiff,.pdf,.webp,.bmp" multiple hidden><div><svg><use href="#i-upload"/></svg><strong>Перетащите файлы сюда</strong><small>JPG, JPEG, PNG, TIFF, PDF и другие форматы</small></div></label>
      <div class="photo-grid" id="photoGrid"></div>
    </div></article>`
};

function field(label, value = '', full = false, placeholder = 'Введите значение', type = 'text') {
  const constraints = type === 'number' ? ' min="0" step="1"' : type === 'tel' ? ' inputmode="tel" pattern="[+0-9 ()-]{6,}"' : '';
  return `<div class="field${full ? ' full' : ''}"><label><span>${label}</span><button class="comment-btn" type="button"><svg><use href="#i-message"/></svg>Комментарий</button></label><input type="${type}" aria-label="${label}" value="${value}" placeholder="${placeholder}"${constraints}><div class="comment-box"><textarea aria-label="Комментарий к полю «${label}»" placeholder="Напишите комментарий к полю..."></textarea><div class="comment-actions"><button class="cancel-comment" type="button">Отмена</button><button class="save-comment" type="button">Сохранить</button></div></div></div>`;
}

const orgTable = document.getElementById('orgTable');
const passportView = document.getElementById('passportView');
const issuesView = document.getElementById('issuesView');
const settingsView = document.getElementById('settingsView');
const calendarView = document.getElementById('calendarView');
const administrationView = document.getElementById('administrationView');
const dashboardSections = [...document.querySelectorAll('.page-head, .metrics-grid, .dashboard-grid')];
let currentFilter = 'all';

function renderOrganizations() {
  refreshAllOrganizationStates();
  const query = document.getElementById('orgSearch').value.toLowerCase();
  const available = allowedOrganizations();
  const overdueCodes = new Set(currentDeadlineViolations().map(item => organizationCode(item.org)));
  const filtered = available.filter(org => {
    const matchesFilter = currentFilter === 'all' || currentFilter === 'attention' && (org.status === 'issue' || overdueCodes.has(organizationCode(org))) || org.status === currentFilter;
    return matchesFilter && `${org.name} ${org.code}`.toLowerCase().includes(query);
  });
  document.querySelector('[data-filter="all"] span').textContent = available.length;
  document.querySelector('[data-filter="issue"] span').textContent = available.filter(org => org.status === 'issue').length;
  document.querySelector('[data-filter="ready"] span').textContent = available.filter(org => org.status === 'ready').length;
  orgTable.innerHTML = filtered.map(org => `<tr data-index="${organizations.indexOf(org)}" tabindex="0" aria-label="Открыть паспорт ${escapeHtml(org.name)}">
    <td><div class="org-cell"><span class="org-symbol">${org.initials}</span><div><strong>${org.name}</strong><small>${org.code}</small></div></div></td>
    <td><div class="progress-cell"><div class="bar"><i style="width:${org.progress}%"></i></div><b>${org.progress}%</b></div></td>
    <td><span class="status ${org.label === 'Готов к проверке' ? 'success' : org.label === 'Нарушен срок' ? 'danger' : 'warning'}">${org.label}</span></td>
    <td class="updated">${org.updated}</td><td><button class="row-more" aria-label="Открыть паспорт ${escapeHtml(org.name)}"><svg><use href="#i-chevron"/></svg></button></td></tr>`).join('') || '<tr><td colspan="5">Организации не найдены</td></tr>';
  orgTable.querySelectorAll('tr[data-index]').forEach(row => {
    row.addEventListener('click', openPassport);
    row.addEventListener('keydown', event => { if (event.key === 'Enter' || event.key === ' ') { event.preventDefault(); openPassport({ currentTarget: row }); } });
    row.querySelector('.row-more')?.addEventListener('click', event => { event.stopPropagation(); openPassport({ currentTarget: row }); });
  });
  renderDashboardMetrics();
}

function equipmentSummary(source) {
  let total = 0;
  let organizationsWithEquipment = 0;
  source.forEach(org => {
    const rows = passportData[organizationCode(org)]?.equipment?.rows || [];
    if (rows.length) organizationsWithEquipment += 1;
    rows.forEach(row => {
      const quantity = Object.entries(row.fieldValues || {}).find(([label]) => label.toLowerCase().includes('количество'))?.[1];
      total += Math.max(0, Number(quantity) || 0);
    });
  });
  return { total, percent: source.length ? Math.round(organizationsWithEquipment / source.length * 100) : 0 };
}

function renderDashboardMetrics() {
  if (!currentUser) return;
  const source = allowedOrganizations();
  const ready = source.filter(org => org.status === 'ready').length;
  const issue = source.filter(org => org.status === 'issue').length;
  const overdue = new Set(currentDeadlineViolations().map(item => organizationCode(item.org))).size;
  const attention = new Set([...source.filter(org => org.status === 'issue').map(organizationCode), ...currentDeadlineViolations().map(item => organizationCode(item.org))]).size;
  const percent = source.length ? Math.round(source.reduce((sum, org) => sum + org.progress, 0) / source.length) : 0;
  const equipment = equipmentSummary(source);
  document.getElementById('readinessPercent').innerHTML = `${percent}<span>%</span>`;
  document.getElementById('readinessRing').style.setProperty('--value', percent);
  document.querySelector('#readinessRing b').textContent = `${percent}%`;
  document.getElementById('readinessSummary').textContent = `${ready} из ${source.length} ППЭ приняты`;
  document.getElementById('completedCount').textContent = ready;
  document.getElementById('completedTotal').textContent = `/ ${source.length}`;
  document.getElementById('completedBar').style.width = `${source.length ? ready / source.length * 100 : 0}%`;
  document.getElementById('completedNote').textContent = issue ? `${issue} с активными замечаниями` : 'Активных замечаний нет';
  document.getElementById('attentionCount').textContent = attention;
  document.getElementById('overdueCount').textContent = overdue;
  document.getElementById('issueCount').textContent = issue;
  document.getElementById('equipmentPercent').textContent = equipment.percent;
  document.getElementById('equipmentBar').style.width = `${equipment.percent}%`;
  document.getElementById('equipmentNote').textContent = equipment.total ? `${equipment.total} единиц учтено` : 'Оборудование пока не внесено';
}

function renderActivity() {
  const list = document.getElementById('activityList');
  if (!list) return;
  const entries = userNotifications().slice(0, 5);
  list.innerHTML = entries.length ? entries.map(item => `<button class="activity activity-button" data-notification-id="${escapeHtml(item.id)}"><div class="activity-icon ${item.deadlineEntryId ? 'amber' : item.changeCode ? 'blue' : 'green'}"><svg><use href="#${item.deadlineEntryId ? 'i-clock' : item.changeCode ? 'i-edit' : 'i-message'}"/></svg></div><div><strong>${escapeHtml(item.title)}</strong><p>${escapeHtml(item.text)}</p><span>${escapeHtml(item.date)}</span></div></button>`).join('') : '<div class="timeline-empty">Событий пока нет</div>';
  list.querySelectorAll('[data-notification-id]').forEach(button => button.addEventListener('click', () => openNotification(button.dataset.notificationId)));
}

function openPassport(event) {
  if (!passportView.classList.contains('hidden') && !confirmDiscardChanges()) return false;
  let index = Number(event?.currentTarget?.dataset.index);
  if (!Number.isInteger(index)) {
    if (currentUser?.role === 'ppe') index = organizations.findIndex(org => organizationCode(org) === currentUser.ppeCode);
    else index = allowedOrganizations().includes(organizations[currentOrgIndex]) ? currentOrgIndex : organizations.indexOf(allowedOrganizations()[0]);
  }
  const selected = organizations[index];
  if (selected && allowedOrganizations().includes(selected)) {
    currentOrgIndex = index;
    const [ppe, exam, locality] = selected.code.split(' · ');
    document.getElementById('passportCode').textContent = `${ppe} · ${exam} · ЛУГАНСКАЯ НАРОДНАЯ РЕСПУБЛИКА`;
    document.getElementById('passportName').textContent = selected.name;
    document.getElementById('passportMeta').textContent = `${locality} · По приказу МОН ЛНР № 1820-од от 21.11.2025`;
    refreshOrganizationState(selected);
    const status = document.getElementById('passportStatus');
    status.className = `status ${selected.status === 'ready' ? 'success' : selected.label === 'Нарушен срок' || selected.label === 'На доработке' ? 'danger' : 'warning'}`;
    status.textContent = `${selected.label} · ${selected.progress}%`;
    renderSubmissionState();
    updatePassportNavigation();
  } else if (selected) { showToast('Нет доступа к этому ППЭ'); return; }
  dashboardSections.forEach(el => el.classList.add('hidden'));
  document.getElementById('municipalitySection').classList.add('hidden');
  issuesView.classList.add('hidden');
  settingsView.classList.add('hidden');
  calendarView.classList.add('hidden');
  administrationView.classList.add('hidden');
  passportView.classList.remove('hidden');
  document.querySelector('.nav-item.active')?.classList.remove('active');
  document.querySelector('[data-view="passport"]').classList.add('active');
  document.querySelector('#passportNav button.active')?.classList.remove('active');
  document.querySelector('#passportNav [data-section="rooms"]').classList.add('active');
  renderSection('rooms');
  window.scrollTo({ top: 0, behavior: 'smooth' });
  return true;
}

function openDashboard() {
  if (!passportView.classList.contains('hidden') && !confirmDiscardChanges()) return false;
  passportView.classList.add('hidden');
  issuesView.classList.add('hidden');
  settingsView.classList.add('hidden');
  calendarView.classList.add('hidden');
  administrationView.classList.add('hidden');
  dashboardSections.forEach(el => el.classList.remove('hidden'));
  document.querySelector('.nav-item.active')?.classList.remove('active');
  document.querySelector('[data-view="dashboard"]').classList.add('active');
  document.getElementById('municipalitySection').classList.toggle('hidden', currentUser?.role !== 'republic');
  renderOrganizations();
  renderMunicipalities();
  renderActivity();
  return true;
}

function issueOrganizations() {
  return allowedOrganizations().filter(org => {
    const review = reviews[organizationCode(org)];
    return org.status === 'issue' || review?.deadline || review?.mismatch || review?.returned || activeIssues(organizationCode(org)).length;
  });
}

function issueState(comment) {
  return comment.state || (comment.closed ? 'closed_republic' : 'new');
}

function currentPassportVersion(code) {
  return passportData[code]?._submission?.version || 0;
}

function submissionForVersion(code, version) {
  const record = passportData[code];
  if (!record) return null;
  return [...(record._submissions || []), record._submission].find(submission => submission?.version === Number(version)) || null;
}

function issueTargetChanged(code, comment) {
  const previous = submissionForVersion(code, comment.passportVersion);
  const current = passportData[code]?._submission;
  if (!previous?.snapshot || !current?.snapshot || current.version <= Number(comment.passportVersion || 0)) return false;
  const previousSection = previous.snapshot[comment.section];
  const currentSectionData = current.snapshot[comment.section];
  if (!previousSection || !currentSectionData) return false;
  if (comment.targetType === 'row') {
    const previousRow = (previousSection.rows || []).find(row => String(row.rowId) === String(comment.target));
    const currentRow = (currentSectionData.rows || []).find(row => String(row.rowId) === String(comment.target));
    return JSON.stringify(previousRow || null) !== JSON.stringify(currentRow || null);
  }
  const previousIndex = (previousSection.fieldLabels || []).indexOf(comment.target);
  const currentIndex = (currentSectionData.fieldLabels || []).indexOf(comment.target);
  if (previousIndex < 0 || currentIndex < 0) return false;
  return previousSection.values?.[previousIndex] !== currentSectionData.values?.[currentIndex];
}

function issueStateActions(code, comment) {
  const state = issueState(comment);
  if (currentUser?.role === 'ppe') {
    if (state === 'new' || state === 'reopened') return `<button class="issue-state-action" data-code="${code}" data-issue-id="${escapeHtml(comment.id)}" data-state="in_progress">Взять в работу</button>`;
    if (state === 'in_progress') return `<button class="issue-state-action" data-code="${code}" data-issue-id="${escapeHtml(comment.id)}" data-state="fixed_ppe">Отметить исправленным</button>`;
    return '';
  }
  if (currentUser?.role !== 'republic') return '';
  if (state === 'closed_republic') return `<button class="issue-state-action" data-code="${code}" data-issue-id="${escapeHtml(comment.id)}" data-state="reopened">Переоткрыть</button>`;
  return state === 'fixed_ppe' ? `<button class="close-issue-comment" data-code="${code}" data-issue-id="${escapeHtml(comment.id)}">Проверить и закрыть</button>` : '';
}

function renderIssues() {
  const items = issueOrganizations();
  document.getElementById('issuesTotal').textContent = items.length;
  document.querySelector('[data-view="issues"] b').textContent = items.length;
  document.getElementById('issuesSubtitle').textContent = currentUser?.role === 'republic' ? 'Все замечания по паспортам ППЭ республики' : `Замечания по паспорту ППЭ ${currentUser?.ppeCode}`;
  document.getElementById('issuesList').innerHTML = items.length ? items.map(org => {
    const code = organizationCode(org);
    const review = reviews[code] || {};
    const flags = [org.status === 'issue' && org.label, review.deadline && 'Нарушение срока', review.mismatch && 'Есть несоответствие', review.returned && 'Возвращено на доработку'].filter(Boolean);
    const comments = review.comments || [];
    comments.forEach((comment, index) => { comment.id ||= `legacy-issue-${code}-${index}`; });
    return `<article class="issue-card"><div class="issue-card-main"><span class="org-symbol">${org.initials}</span><div><div class="issue-card-title"><strong>${escapeHtml(org.name)}</strong><small>${escapeHtml(org.code)}</small></div><div class="issue-tags">${[...new Set(flags)].map(flag => `<span>${escapeHtml(flag)}</span>`).join('')}</div>${comments.length ? `<div class="issue-comments">${comments.map(comment => {
      const state = issueState(comment);
      const target = comment.target ? `${comment.targetType === 'row' ? 'Строка' : 'Поле'}: ${comment.target}` : 'Общая привязка';
       const closure = comment.closure ? `<small class="issue-closure">${state === 'closed_republic' ? 'Закрыто' : 'Предыдущее закрытие'}: ${escapeHtml(comment.closure.author)} · ${escapeHtml(comment.closure.date)} · версия ${escapeHtml(String(comment.closure.passportVersion))}<br>${escapeHtml(comment.closure.comment)}</small>` : '';
      return `<div class="issue-comment-entry ${state === 'closed_republic' ? 'closed' : ''}"><svg><use href="#i-message"/></svg><p><strong>${escapeHtml(comment.text)}</strong><span>${escapeHtml(sectionTitles[comment.section] || 'Общее')} · ${escapeHtml(target)} · версия ${escapeHtml(String(comment.passportVersion ?? '—'))}</span><span>${escapeHtml(comment.date || '')}${comment.correctionDeadline ? ` · исправить до ${escapeHtml(comment.correctionDeadline)}` : ''}</span>${closure}</p><div class="issue-comment-controls"><b class="issue-state ${state}">${escapeHtml(issueStateLabels[state] || state)}</b>${issueStateActions(code, comment)}</div></div>`;
    }).join('')}</div>` : '<p class="issue-placeholder">Требуется проверить данные паспорта.</p>'}</div></div><button class="btn secondary open-issue" data-index="${organizations.indexOf(org)}">Открыть паспорт<svg><use href="#i-chevron"/></svg></button></article>`;
  }).join('') : '<div class="issues-empty"><svg><use href="#i-check"/></svg><strong>Замечаний нет</strong><span>Все доступные паспорта прошли проверку.</span></div>';
  document.querySelectorAll('.open-issue').forEach(button => button.addEventListener('click', event => openPassport({ currentTarget: event.currentTarget })));
  document.querySelectorAll('.close-issue-comment').forEach(button => button.addEventListener('click', () => { lastDialogTrigger = button; openIssueClosure(button.dataset.code, button.dataset.issueId); }));
  document.querySelectorAll('.issue-state-action').forEach(button => button.addEventListener('click', () => setIssueState(button.dataset.code, button.dataset.issueId, button.dataset.state)));
}

function findReviewIssue(code, issueId) {
  const record = reviews[code];
  if (!record) return null;
  record.comments ||= [];
  record.comments.forEach((comment, index) => { comment.id ||= `legacy-issue-${code}-${index}`; });
  return record.comments.find(comment => comment.id === issueId) || null;
}

function syncIssueOrganization(code) {
  const org = organizations.find(item => organizationCode(item) === code);
  const record = reviews[code];
  if (!org || !record) return;
  if (!(record.comments || []).some(comment => issueState(comment) !== 'closed_republic')) record.returned = false;
  refreshOrganizationState(org);
}

function setIssueState(code, issueId, state) {
  const comment = findReviewIssue(code, issueId);
  if (!comment || !issueStateLabels[state]) return;
  if (currentUser?.role === 'ppe' && !['in_progress', 'fixed_ppe'].includes(state)) return;
  if (currentUser?.role === 'republic' && state !== 'reopened') return;
  if (currentUser?.role === 'ppe' && state === 'fixed_ppe' && currentPassportVersion(code) <= Number(comment.passportVersion || 0)) {
    showToast('Сначала исправьте данные и отправьте новую версию паспорта');
    return;
  }
  if (currentUser?.role === 'ppe' && state === 'fixed_ppe' && !issueTargetChanged(code, comment)) {
    showToast('Связанное поле или строка не изменены в новой версии');
    return;
  }
  comment.state = state;
  comment.closed = false;
  if (state === 'reopened') reviews[code].returned = true;
  comment.stateHistory ||= [];
  comment.stateHistory.push({ state, author: currentUser.name, authorLogin: currentUser.login, date: new Date().toLocaleString('ru-RU'), dateIso: new Date().toISOString() });
  syncIssueOrganization(code);
  saveReviews();
  renderIssues();
  renderOrganizations();
  showToast(`Статус замечания: ${issueStateLabels[state]}`);
}

let pendingIssueClosure = null;

function openIssueClosure(code, issueId) {
  const comment = findReviewIssue(code, issueId);
  if (!comment || currentUser?.role !== 'republic') return;
  if (issueState(comment) !== 'fixed_ppe' || currentPassportVersion(code) <= Number(comment.passportVersion || 0)) {
    showToast('Закрытие доступно после исправления ППЭ и отправки новой версии');
    return;
  }
  if (!issueTargetChanged(code, comment)) {
    showToast('Связанное поле или строка не изменены в новой версии');
    return;
  }
  pendingIssueClosure = { code, issueId };
  document.getElementById('issueClosureContext').textContent = `${sectionTitles[comment.section] || 'Общее'} · ${comment.targetType === 'row' ? 'строка' : 'поле'}: ${comment.target || 'не указано'} · версия ${currentPassportVersion(code)}`;
  document.getElementById('issueClosureField').value = comment.target || '';
  document.getElementById('issueClosureComment').value = '';
  document.getElementById('issueClosureDialog').classList.remove('hidden');
  document.getElementById('issueClosureComment').focus();
}

function closeIssueClosureDialog() {
  document.getElementById('issueClosureDialog').classList.add('hidden');
  pendingIssueClosure = null;
  lastDialogTrigger?.focus();
  lastDialogTrigger = null;
}

function closeReviewComment() {
  const closureComment = document.getElementById('issueClosureComment').value.trim();
  const closureField = document.getElementById('issueClosureField').value.trim();
  if (!pendingIssueClosure || !closureComment || !closureField || !currentUser) {
    showToast('Укажите связанное поле или строку и комментарий к закрытию');
    return;
  }
  const { code, issueId } = pendingIssueClosure;
  const comment = findReviewIssue(code, issueId);
  if (!comment) return;
  const closedAt = new Date();
  comment.state = 'closed_republic';
  comment.closed = true;
  comment.closedAt = closedAt.toLocaleString('ru-RU');
  comment.closure = {
    author: currentUser.name,
    authorLogin: currentUser.login,
    date: closedAt.toLocaleString('ru-RU'),
    dateIso: closedAt.toISOString(),
    comment: closureComment,
    section: comment.section,
    field: closureField,
    targetType: comment.targetType || 'field',
    passportVersion: currentPassportVersion(code)
  };
  comment.stateHistory ||= [];
  comment.stateHistory.push({ state: 'closed_republic', author: currentUser.name, authorLogin: currentUser.login, date: comment.closedAt, dateIso: closedAt.toISOString(), comment: closureComment });
  const record = reviews[code];
  if (!(record.comments || []).some(item => issueState(item) !== 'closed_republic')) record.returned = false;
  syncIssueOrganization(code);
  saveReviews();
  closeIssueClosureDialog();
  renderIssues();
  renderOrganizations();
  showToast('Замечание закрыто республикой');
}

function openIssues() {
  if (!passportView.classList.contains('hidden') && !confirmDiscardChanges()) return false;
  passportView.classList.add('hidden');
  settingsView.classList.add('hidden');
  calendarView.classList.add('hidden');
  administrationView.classList.add('hidden');
  dashboardSections.forEach(el => el.classList.add('hidden'));
  document.getElementById('municipalitySection').classList.add('hidden');
  issuesView.classList.remove('hidden');
  renderIssues();
  document.querySelector('.nav-item.active')?.classList.remove('active');
  document.querySelector('[data-view="issues"]').classList.add('active');
}

function openSettings() {
  if (!passportView.classList.contains('hidden') && !confirmDiscardChanges()) return false;
  passportView.classList.add('hidden');
  issuesView.classList.add('hidden');
  calendarView.classList.add('hidden');
  administrationView.classList.add('hidden');
  dashboardSections.forEach(el => el.classList.add('hidden'));
  document.getElementById('municipalitySection').classList.add('hidden');
  settingsView.classList.remove('hidden');
  document.querySelector('.nav-item.active')?.classList.remove('active');
  document.querySelector('[data-view="settings"]').classList.add('active');
}

function sectionsForEntry(entry) {
  return entry.section === 'all' ? Object.keys(sectionTitles) : [entry.section];
}

function organizationMissedDeadline(org, entry) {
  if (entry.type !== 'deadline' || new Date(entry.date).getTime() > Date.now()) return false;
  const code = organizationCode(org);
  return sectionsForEntry(entry).some(section => sectionCompletionErrors(section, passportData[code]?.[section]).length > 0);
}

function deadlineViolations(entry, source = organizations) {
  return source.filter(org => organizationMissedDeadline(org, entry));
}

function currentDeadlineViolations() {
  if (!currentUser) return [];
  const available = allowedOrganizations();
  return calendarEntries.flatMap(entry => deadlineViolations(entry, available).map(org => ({ entry, org })));
}

function checkDeadlineViolations() {
  let changed = false;
  const activeKeys = new Set();
  calendarEntries.filter(entry => entry.type === 'deadline').forEach(entry => {
    deadlineViolations(entry).forEach(org => {
      const code = organizationCode(org);
      activeKeys.add(`${entry.id}:${code}`);
      if (notifications.some(item => item.deadlineEntryId === entry.id && item.ppeCode === code)) return;
      const section = entry.section === 'all' ? 'всех разделов паспорта' : `раздела «${sectionTitles[entry.section]}»`;
      notifications.unshift({
        id: Date.now() + Math.random(),
        title: `Нарушен срок по ППЭ ${code}`,
        text: `Не сохранены данные ${section}. Внесите и сохраните информацию в кратчайшие сроки.`,
        ppeCode: code,
        municipality: organizationMunicipality(org),
        deadlineEntryId: entry.id,
        date: new Date().toLocaleString('ru-RU'),
        readBy: []
      });
      changed = true;
    });
  });
  notifications.forEach(item => {
    if (item.deadlineEntryId && !activeKeys.has(`${item.deadlineEntryId}:${item.ppeCode}`) && !item.resolved) {
      item.resolved = true;
      changed = true;
    }
  });
  organizations.forEach(org => {
    const code = organizationCode(org);
    if (!reviews[code]) return;
    const missed = [...activeKeys].some(key => key.endsWith(`:${code}`));
    if (Boolean(reviews[code].deadline) !== missed) {
      reviews[code].deadline = missed;
      changed = true;
    }
  });
  if (changed) saveReviews();
  if (changed) localStorage.setItem('ppeNotifications', JSON.stringify(notifications));
  if (currentUser) {
    renderNotifications();
    renderCalendar();
  }
}

function calendarTypeLabel(type) {
  return type === 'deadline' ? 'Срок сдачи' : type === 'announcement' ? 'Объявление' : 'Событие';
}

function renderCalendar() {
  const canManage = currentUser?.role === 'republic';
  document.getElementById('calendarCompose').classList.toggle('hidden', !canManage);
  document.getElementById('calendarRole').textContent = canManage ? 'Управление календарём' : 'Режим просмотра';
  const violations = currentDeadlineViolations();
  const alertCount = document.getElementById('calendarAlertCount');
  alertCount.textContent = violations.length;
  alertCount.classList.toggle('hidden', violations.length === 0);
  const sorted = [...calendarEntries].sort((a, b) => new Date(a.date) - new Date(b.date));
  document.getElementById('calendarList').innerHTML = sorted.length ? sorted.map(entry => {
    const entryViolations = violations.filter(item => item.entry.id === entry.id);
    const isPast = new Date(entry.date).getTime() < Date.now();
    const section = entry.section === 'all' ? 'Весь паспорт' : sectionTitles[entry.section];
    return `<article class="calendar-card ${entry.type}${entryViolations.length ? ' overdue' : ''}"><div class="calendar-date"><strong>${new Date(entry.date).toLocaleDateString('ru-RU', { day: '2-digit', month: 'short' })}</strong><span>${new Date(entry.date).toLocaleTimeString('ru-RU', { hour: '2-digit', minute: '2-digit' })}</span></div><div class="calendar-card-body"><div class="calendar-meta"><span>${calendarTypeLabel(entry.type)}</span><b>${escapeHtml(section)}</b>${isPast ? `<em>${entry.type === 'deadline' ? 'Срок наступил' : 'Событие прошло'}</em>` : ''}</div><h2>${escapeHtml(entry.title)}</h2>${entry.description ? `<p>${escapeHtml(entry.description)}</p>` : ''}${entryViolations.length ? `<div class="calendar-warning"><svg><use href="#i-alert"/></svg><strong>Требуется срочно заполнить данные: ${entryViolations.length} ППЭ</strong></div>` : ''}</div>${canManage ? `<button class="calendar-delete" data-calendar-id="${entry.id}" aria-label="Удалить запись «${escapeHtml(entry.title)}»">×</button>` : ''}</article>`;
  }).join('') : '<div class="issues-empty"><svg><use href="#i-calendar"/></svg><strong>Календарь пока пуст</strong><span>События и сроки появятся здесь.</span></div>';
  document.querySelectorAll('.calendar-delete').forEach(button => button.addEventListener('click', () => {
    if (!window.confirm('Удалить запись календаря?')) return;
    calendarEntries = calendarEntries.filter(entry => entry.id !== button.dataset.calendarId);
    notifications = notifications.filter(item => item.deadlineEntryId !== button.dataset.calendarId);
    localStorage.setItem('ppeCalendarEntries', JSON.stringify(calendarEntries));
    localStorage.setItem('ppeNotifications', JSON.stringify(notifications));
    renderCalendar();
    showToast('Запись удалена');
  }));
  renderDeadlineTimeline();
}

function renderDeadlineTimeline() {
  const timeline = document.getElementById('deadlineTimeline');
  const deadlines = [...calendarEntries].filter(entry => entry.type === 'deadline').sort((a, b) => new Date(a.date) - new Date(b.date));
  const next = deadlines.find(entry => new Date(entry.date).getTime() >= Date.now());
  const days = next ? Math.ceil((new Date(next.date).getTime() - Date.now()) / 86400000) : null;
  document.getElementById('deadlineDays').textContent = days ?? '—';
  document.getElementById('deadlineDaysLabel').textContent = days === 1 ? 'день' : days !== null && days >= 2 && days <= 4 ? 'дня' : 'дней';
  document.getElementById('deadlineCaption').textContent = next ? `До «${next.title}»` : 'Предстоящих сроков нет';
  document.getElementById('sidebarDeadlineDate').textContent = next ? `до ${new Date(next.date).toLocaleDateString('ru-RU', { day: 'numeric', month: 'long' })}` : 'Не задан';
  document.getElementById('sidebarDeadlineRemaining').textContent = next ? `Осталось ${days} ${days === 1 ? 'день' : days >= 2 && days <= 4 ? 'дня' : 'дней'}` : 'Добавьте срок в календаре';
  document.getElementById('sidebarDeadlineProgress').style.width = next ? `${Math.max(5, Math.min(100, 100 - days * 3))}%` : '0%';
  timeline.innerHTML = deadlines.length ? deadlines.slice(0, 5).map(entry => {
    const violations = deadlineViolations(entry, currentUser ? allowedOrganizations() : organizations).length;
    const past = new Date(entry.date).getTime() < Date.now();
    return `<div class="timeline-item ${past ? violations ? 'late' : 'done' : 'current'}"><i>${past && !violations ? '<svg><use href="#i-check"/></svg>' : ''}</i><div><strong>${escapeHtml(entry.title)}</strong><span>${new Date(entry.date).toLocaleString('ru-RU', { day: 'numeric', month: 'long', hour: '2-digit', minute: '2-digit' })} · ${entry.section === 'all' ? 'весь паспорт' : sectionTitles[entry.section]}</span>${violations ? `<em>${violations} ППЭ нарушили срок</em>` : ''}</div></div>`;
  }).join('') : '<div class="timeline-empty">Сроки добавляются в разделе «Календарь»</div>';
}

function openCalendar() {
  if (!passportView.classList.contains('hidden') && !confirmDiscardChanges()) return false;
  passportView.classList.add('hidden');
  issuesView.classList.add('hidden');
  settingsView.classList.add('hidden');
  administrationView.classList.add('hidden');
  dashboardSections.forEach(el => el.classList.add('hidden'));
  document.getElementById('municipalitySection').classList.add('hidden');
  calendarView.classList.remove('hidden');
  renderCalendar();
  document.querySelector('.nav-item.active')?.classList.remove('active');
  document.querySelector('[data-view="calendar"]').classList.add('active');
}

function addCalendarEntry() {
  if (currentUser?.role !== 'republic') return;
  const type = document.getElementById('calendarType').value;
  const date = document.getElementById('calendarDate').value;
  const section = document.getElementById('calendarSection').value;
  const title = document.getElementById('calendarTitle').value.trim();
  const description = document.getElementById('calendarDescription').value.trim();
  if (!date || !title) {
    showToast('Укажите название, дату и время');
    return;
  }
  calendarEntries.push({ id: `${Date.now()}-${Math.random().toString(16).slice(2)}`, type, date, section, title, description, createdAt: new Date().toISOString() });
  localStorage.setItem('ppeCalendarEntries', JSON.stringify(calendarEntries));
  document.getElementById('calendarTitle').value = '';
  document.getElementById('calendarDescription').value = '';
  renderCalendar();
  checkDeadlineViolations();
  showToast('Запись добавлена в календарь');
}

function transliterate(value) {
  const letters = { а: 'a', б: 'b', в: 'v', г: 'g', д: 'd', е: 'e', ё: 'e', ж: 'zh', з: 'z', и: 'i', й: 'y', к: 'k', л: 'l', м: 'm', н: 'n', о: 'o', п: 'p', р: 'r', с: 's', т: 't', у: 'u', ф: 'f', х: 'h', ц: 'ts', ч: 'ch', ш: 'sh', щ: 'sch', ъ: '', ы: 'y', ь: '', э: 'e', ю: 'yu', я: 'ya' };
  return value.toLowerCase().split('').map(character => letters[character] ?? character).join('').replace(/[^a-z0-9]+/g, '').slice(0, 24);
}

function uniqueAccountLogin(surname, name) {
  const base = `${transliterate(surname)}.${transliterate(name).slice(0, 1) || 'user'}`;
  let login = base;
  let suffix = 2;
  while (accounts[login] || managedAccounts.some(account => account.login === login)) login = `${base}${suffix++}`;
  return login;
}

function generatePassword(length = 12) {
  const alphabet = 'ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz23456789!@#$%';
  const values = new Uint32Array(length);
  crypto.getRandomValues(values);
  return [...values].map(value => alphabet[value % alphabet.length]).join('');
}

function renderManagedAccounts() {
  document.getElementById('managedAccountsCount').textContent = `${managedAccounts.length} ${managedAccounts.length === 1 ? 'запись' : managedAccounts.length > 1 && managedAccounts.length < 5 ? 'записи' : 'записей'}`;
  document.getElementById('managedAccountsList').innerHTML = managedAccounts.length ? managedAccounts.map(account => `<article class="managed-account"><span class="org-symbol">${escapeHtml(account.initials)}</span><div class="managed-account-person"><strong>${escapeHtml(account.name)}</strong><span>${escapeHtml(account.title)}</span><small>${escapeHtml(roleTitle(account.role))}${account.role === 'ppe' ? ` · ППЭ ${escapeHtml(account.ppeCode || 'не привязан')}` : ''}</small></div><div><span>Электронная почта</span><strong>${escapeHtml(account.email)}</strong></div><div><span>Логин</span><strong class="credential-value">${escapeHtml(account.login)}</strong></div><div class="managed-password"><span>Пароль</span><small>Показывается только при создании или смене</small></div><button class="btn secondary regenerate-password" data-login="${escapeHtml(account.login)}">Сменить пароль</button></article>`).join('') : '<div class="issues-empty managed-empty"><svg><use href="#i-building"/></svg><strong>Учётных записей пока нет</strong><span>Заполните форму выше, чтобы создать первую запись.</span></div>';
  document.querySelectorAll('.regenerate-password').forEach(button => button.addEventListener('click', () => regenerateAccountPassword(button.dataset.login)));
}

function roleTitle(role) {
  return role === 'ppe' ? 'Администратор ППЭ' : 'Администратор республиканского уровня';
}

function populateAccountScopes() {
  document.getElementById('accountPpe').innerHTML = organizations.map(org => `<option value="${organizationCode(org)}">${escapeHtml(org.code)} · ${escapeHtml(org.name)}</option>`).join('');
}

function updateAccountScopeFields() {
  const role = document.getElementById('accountRole').value;
  document.getElementById('accountPpeWrap').classList.toggle('hidden', role !== 'ppe');
}

function openAdministration() {
  if (!passportView.classList.contains('hidden') && !confirmDiscardChanges()) return false;
  if (currentUser?.role !== 'republic') {
    openDashboard();
    return;
  }
  passportView.classList.add('hidden');
  issuesView.classList.add('hidden');
  settingsView.classList.add('hidden');
  calendarView.classList.add('hidden');
  dashboardSections.forEach(element => element.classList.add('hidden'));
  document.getElementById('municipalitySection').classList.add('hidden');
  administrationView.classList.remove('hidden');
  renderManagedAccounts();
  document.querySelector('.nav-item.active')?.classList.remove('active');
  document.querySelector('[data-view="administration"]').classList.add('active');
}

function createManagedAccount() {
  if (currentUser?.role !== 'republic') return;
  const surname = document.getElementById('accountSurname').value.trim();
  const name = document.getElementById('accountName').value.trim();
  const title = document.getElementById('accountPosition').value.trim();
  const role = document.getElementById('accountRole').value;
  const ppeCode = role === 'ppe' ? document.getElementById('accountPpe').value : undefined;
  const emailInput = document.getElementById('accountEmail');
  const email = emailInput.value.trim().toLowerCase();
  if (!surname || !name || !title || !email || !emailInput.checkValidity() || role === 'ppe' && !ppeCode) {
    showToast('Заполните все поля и проверьте адрес почты');
    return;
  }
  if (managedAccounts.some(account => account.email === email)) {
    showToast('Учётная запись с этой почтой уже существует');
    return;
  }
  const login = uniqueAccountLogin(surname, name);
  const password = generatePassword();
  const account = {
    login,
    password,
    role,
    surname,
    firstName: name,
    name: `${surname} ${name}`,
    shortName: name,
    title,
    email,
    ppeCode,
    initials: `${surname[0]}${name[0]}`.toUpperCase(),
    createdAt: new Date().toISOString()
  };
  managedAccounts.unshift(account);
  localStorage.setItem('ppeManagedAccounts', JSON.stringify(managedAccounts));
  document.getElementById('generatedEmail').textContent = email;
  document.getElementById('generatedLogin').textContent = login;
  document.getElementById('generatedPassword').textContent = password;
  document.getElementById('generatedCredentials').classList.remove('hidden');
  ['accountSurname', 'accountName', 'accountPosition', 'accountEmail'].forEach(id => { document.getElementById(id).value = ''; });
  renderManagedAccounts();
  showToast('Учётная запись создана');
}

function regenerateAccountPassword(login) {
  const account = managedAccounts.find(item => item.login === login);
  if (!account) return;
  account.password = generatePassword();
  delete account.previousPassword;
  localStorage.setItem('ppeManagedAccounts', JSON.stringify(managedAccounts));
  renderManagedAccounts();
  document.getElementById('generatedEmail').textContent = account.email;
  document.getElementById('generatedLogin').textContent = login;
  document.getElementById('generatedPassword').textContent = account.password;
  document.getElementById('generatedCredentials').classList.remove('hidden');
  showToast(`Пароль изменён для ${login}`);
}

function escapeHtml(value) {
  const element = document.createElement('div');
  element.textContent = String(value);
  return element.innerHTML;
}

function applyPreferences() {
  document.body.classList.toggle('dark-theme', preferences.theme === 'dark');
  document.body.style.zoom = `${preferences.fontSize}%`;
  document.getElementById('themeRange').value = preferences.theme === 'dark' ? '1' : '0';
  document.getElementById('themeValue').textContent = preferences.theme === 'dark' ? 'Тёмная' : 'Светлая';
  document.getElementById('fontRange').value = preferences.fontSize;
  document.getElementById('fontValue').textContent = `${preferences.fontSize}%`;
}

function savePreferences() {
  localStorage.setItem('ppePreferences', JSON.stringify(preferences));
  applyPreferences();
}

function displayedSectionData(code, section) {
  if (currentUser?.role === 'republic' && passportData[code]?._submission?.snapshot?.[section]) return passportData[code]._submission.snapshot[section];
  return passportData[code]?.[section];
}

function updatePassportNavigation() {
  const org = organizations[currentOrgIndex];
  if (!org) return;
  const code = organizationCode(org);
  document.querySelectorAll('#passportNav [data-section]').forEach(button => {
    const section = button.dataset.section;
    const saved = displayedSectionData(code, section);
    const errors = sectionCompletionErrors(section, saved);
    const issueCount = activeIssues(code).filter(comment => comment.section === section).length;
    const accepted = currentSectionDecision(code, section) === 'accepted';
    const label = button.querySelector('small');
    label.textContent = accepted ? 'Принято' : issueCount ? `${issueCount} замеч.` : !saved?.savedAtIso && currentUser?.role !== 'republic' ? 'Не заполнено' : errors.length ? `${errors.length} ошибок` : 'Заполнено';
    label.className = accepted ? 'nav-success' : issueCount || errors.length ? 'nav-warning' : 'nav-success';
  });
}

function updateRenderedSectionStatus() {
  const code = organizationCode(organizations[currentOrgIndex]);
  const errors = sectionCompletionErrors(currentSection, displayedSectionData(code, currentSection));
  document.querySelectorAll('#passportContent .form-card-head > .status').forEach(status => {
    status.textContent = errors.length ? `${errors.length} ошибок` : 'Раздел заполнен';
    status.className = `status ${errors.length ? 'warning' : 'success'}`;
  });
}

function renderSection(section) {
  if (section !== currentSection && !confirmDiscardChanges()) return false;
  currentSection = section;
  sectionDirty = false;
  const code = organizationCode(organizations[currentOrgIndex]);
  const target = document.getElementById('passportContent');
  const review = reviews[code] || {};
  const sectionSaved = passportData[code]?.[section] || {};
  const canComment = ['ppe', 'republic'].includes(currentUser?.role);
  const reviewControls = currentUser?.role === 'republic' ? `
    <div class="review-toolbar">
       <div><strong>Замечание к разделу «${sectionTitles[section]}»</strong><span>Для возврата укажите комментарий, поле или строку и срок исправления</span></div>
      <div class="review-actions">
        <button class="review-decision accept${currentSectionDecision(code, section) === 'accepted' ? ' active' : ''}" data-decision="accepted"><svg><use href="#i-check"/></svg>Информация принята</button>
        <button class="review-decision return-btn${currentSectionDecision(code, section) === 'revision' ? ' active' : ''}" data-decision="revision"><svg><use href="#i-edit"/></svg>Вернуть на доработку</button>
        <button class="review-decision deadline${currentSectionDecision(code, section) === 'deadline' ? ' active' : ''}" data-decision="deadline"><svg><use href="#i-clock"/></svg>Нарушение сроков</button>
      </div>
      <div class="review-issue-fields">
        <label><span>Раздел</span><input value="${sectionTitles[section]}" disabled></label>
        <label><span>Привязка</span><select id="reviewTargetType"><option value="field">Поле</option><option value="row">Строка</option></select></label>
        <label class="review-target"><span>Поле или идентификатор строки</span><input id="reviewTarget" placeholder="Например, Количество камер или row-..."></label>
        <label><span>Срок исправления</span><input id="reviewDeadline" type="date" min="${new Date().toISOString().slice(0, 10)}"></label>
      </div>
      <div class="review-compose"><textarea id="reviewComment" placeholder="Опишите, что необходимо исправить..."></textarea><button class="btn primary" id="addReviewComment">Добавить замечание</button></div>
     </div>` : '';
  target.innerHTML = `
    ${renderSectionErrors(section)}${reviewControls}${renderReviewFeed(section)}${renderChangeNotice(section)}${renderSectionComments(section)}${sectionTemplates[section]()}
    <div class="section-save-bar">
      <div><strong id="sectionSaveStatus">Нет несохранённых изменений</strong><span>Данные сохраняются только после нажатия кнопки</span></div>
      <button class="btn primary" id="saveSection" disabled><svg><use href="#i-check"/></svg>Сохранить</button>
    </div>`;
  restoreSectionData();
  bindDynamicControls();
  applyPassportPermissions();
  updateRenderedSectionStatus();
  updatePassportNavigation();
  return true;
}

function renderChangeNotice(section) {
  const code = organizationCode(organizations[currentOrgIndex]);
  const saved = passportData[code]?.[section];
  const review = reviews[code] || {};
  if (!saved?.changeDetected || saved.changeAcknowledged || currentSectionDecision(code, section) === 'accepted') return '';
  return `<div class="notice data-change-notice"><svg><use href="#i-alert"/></svg><div><strong>Проверьте ${escapeHtml(sectionTitles[section])}.</strong><br>Указанные данные отличаются от данных, переданных ранее.</div></div>`;
}

function renderSectionComments(section) {
  const code = organizationCode(organizations[currentOrgIndex]);
  const saved = passportData[code]?.[section] || {};
  const comments = saved.comments || [];
  const changes = saved.changeDetails || [];
  const canComment = ['ppe', 'republic'].includes(currentUser?.role);
  const commentMarkup = comment => `<div class="section-comment"><div><strong>${escapeHtml(comment.author || roleTitle(comment.role))}</strong><span>${escapeHtml(roleTitle(comment.role))} · ${escapeHtml(comment.date || '')} · версия ${escapeHtml(String(comment.passportVersion || '—'))}</span><p>${escapeHtml(comment.text)}</p></div>${canComment && comment.role === currentUser?.role ? `<button class="delete-section-comment" data-comment-id="${escapeHtml(comment.id)}" title="Удалить комментарий">×</button>` : ''}</div>`;
  const changesMarkup = changes.map(change => {
    const related = comments.filter(comment => comment.changeId === change.id);
    return `<article class="change-comment-card"><div class="change-context"><strong>${escapeHtml(change.field)}</strong><span>${change.rowId ? `Строка ${escapeHtml(change.rowId)} · ` : ''}версия ${escapeHtml(String(change.passportVersion))} · изменил ${escapeHtml(change.author || 'неизвестный пользователь')} · ${escapeHtml(new Date(change.changedAt).toLocaleString('ru-RU'))}</span><div><del>${escapeHtml(change.oldValue || 'не заполнено')}</del><b>→</b><ins>${escapeHtml(change.newValue || 'не заполнено')}</ins></div></div>${related.map(commentMarkup).join('')}${canComment ? `<div class="section-comment-compose"><textarea data-change-input="${escapeHtml(change.id)}" placeholder="Укажите причину этого изменения..."></textarea><button class="btn secondary save-change-comment" data-change-id="${escapeHtml(change.id)}">Добавить причину</button></div>` : ''}</article>`;
  }).join('');
  const legacy = comments.filter(comment => !comment.changeId);
  return `<div class="section-comments"><div class="section-comments-head"><strong>Комментарии к конкретным изменениям</strong><span>Поле, прежнее и новое значение, строка и версия паспорта</span></div>${changesMarkup || '<p class="section-comments-empty">После повторного сохранения здесь появится перечень изменённых данных.</p>'}${legacy.length ? `<div class="section-comments-list">${legacy.map(commentMarkup).join('')}</div>` : ''}</div>`;
}

function saveSectionChangeComment(changeId) {
  const input = document.querySelector(`[data-change-input="${CSS.escape(changeId)}"]`);
  const text = input?.value.trim();
  if (!text || !currentUser) return;
  const code = organizationCode(organizations[currentOrgIndex]);
  passportData[code] ||= {};
  passportData[code][currentSection] ||= { values: [] };
  const section = passportData[code][currentSection];
  const change = section.changeDetails?.find(item => item.id === changeId);
  if (!change) return;
  section.comments ||= [];
  section.comments.push({
    id: newId('comment'), changeId,
    text,
    field: change.field,
    rowId: change.rowId || null,
    oldValue: change.oldValue,
    newValue: change.newValue,
    passportVersion: change.passportVersion,
    role: currentUser.role,
    author: currentUser.name,
    date: new Date().toLocaleString('ru-RU'),
    createdAtIso: new Date().toISOString()
  });
  localStorage.setItem('ppePassportData', JSON.stringify(passportData));
  renderSection(currentSection);
  showToast('Комментарий добавлен');
}

function buildChangeDetails(previous, current) {
  const details = [];
  const passportVersion = (passportData[organizationCode(organizations[currentOrgIndex])]?._submission?.version || 0) + 1;
  const add = (field, oldValue, newValue, rowId = null) => {
    if (String(oldValue ?? '') === String(newValue ?? '')) return;
    details.push({ id: newId('change'), field, oldValue: String(oldValue ?? ''), newValue: String(newValue ?? ''), rowId, passportVersion, author: currentUser?.name || '', changedAt: new Date().toISOString() });
  };
  current.values.forEach((value, index) => add(current.fieldLabels[index] || `Поле ${index + 1}`, previous.values?.[index], value));
  const compareRecords = (oldRecords, newRecords, idKey, title) => {
    const oldMap = new Map((oldRecords || []).map(item => [item[idKey], item]));
    const newMap = new Map((newRecords || []).map(item => [item[idKey], item]));
    newMap.forEach((item, id) => {
      const old = oldMap.get(id);
      if (!old) add(title, '', Object.values(item.fieldValues || {}).join(' · ') || item.fullName || item.name || 'Добавлено', id);
      else Object.entries(item.fieldValues || {}).forEach(([field, value]) => add(field, old.fieldValues?.[field], value, id));
      if (old && item.status !== old.status) add('Статус специалиста', old.status === 'deleted' ? 'Удален пользователем ППЭ' : 'Действующий', item.status === 'deleted' ? 'Удален пользователем ППЭ' : 'Действующий', id);
      if (old && item.fullName !== undefined) ['fullName', 'position', 'workplace', 'phone', 'experience'].forEach(key => add({ fullName: 'ФИО', position: 'Должность', workplace: 'Место работы', phone: 'Телефон', experience: 'Опыт проведения ГИА' }[key], old[key], item[key], id));
    });
    oldMap.forEach((item, id) => { if (!newMap.has(id)) add(title, Object.values(item.fieldValues || {}).join(' · ') || item.fullName || item.name || 'Запись', 'Удалено', id); });
  };
  compareRecords(previous.rows, current.rows, 'rowId', 'Строка данных');
  compareRecords(previous.specialists, current.specialists, 'id', 'Специалист');
  compareRecords(previous.photos, current.photos, 'fileId', 'Файл');
  return details;
}

function deleteSectionChangeComment(commentId) {
  const code = organizationCode(organizations[currentOrgIndex]);
  const section = passportData[code]?.[currentSection];
  if (!section?.comments) return;
  section.comments = section.comments.filter(comment => !(comment.id === commentId && comment.role === currentUser?.role));
  localStorage.setItem('ppePassportData', JSON.stringify(passportData));
  renderSection(currentSection);
  showToast('Комментарий удалён');
}

function sectionDataControls() {
  return [...document.querySelectorAll('#passportContent input:not([type="file"]), #passportContent textarea, #passportContent select')]
    .filter(control => !control.closest('.review-toolbar') && !control.closest('.comment-box') && !control.closest('.section-comments') && !control.closest('[data-table-key]'));
}

function restoreSectionData() {
  const code = organizationCode(organizations[currentOrgIndex]);
  const saved = displayedSectionData(code, currentSection);
  if (!saved) return;
  normalizeLegacySection(saved);
  restoreStructuredRows(saved);
  sectionDataControls().forEach((control, index) => {
    const value = saved.values?.[index];
    if (value === undefined) return;
    if (control.type === 'checkbox' || control.type === 'radio') control.checked = value;
    else control.value = value;
  });
  if (currentSection === 'photos' && saved.photos?.length) {
    const grid = document.getElementById('photoGrid');
    saved.photos.forEach(photo => appendStoredFile(grid, photo));
  }
  const status = document.getElementById('sectionSaveStatus');
  status.textContent = saved.savedAt ? `Сохранено ${saved.savedAt}` : 'Данные сохранены';
}

function normalizeLegacySection(saved) {
  if (!saved.rows?.length && saved.rowCounts?.length && ['rooms', 'equipment'].includes(currentSection)) {
    let cursor = 0;
    saved.rows = [];
    dataTables().forEach((table, tableIndex) => {
      const labels = rowLabels(table);
      const count = Number(saved.rowCounts[tableIndex]) || 0;
      for (let index = 0; index < count; index += 1) {
        const fieldValues = Object.fromEntries(labels.map(label => [label, saved.values?.[cursor++] ?? '']));
        saved.rows.push({ rowId: newId('row'), section: currentSection, tableKey: table.dataset.tableKey, fieldValues, createdBy: 'legacy-import', createdAt: saved.savedAtIso || new Date().toISOString(), updatedAt: saved.savedAtIso || new Date().toISOString() });
      }
    });
    saved.values = (saved.values || []).slice(cursor);
  }
  if (currentSection === 'staff' && !saved.specialists?.length && (saved.values || []).length > 6) {
    const legacy = saved.values.slice(6);
    saved.values = saved.values.slice(0, 6);
    saved.specialists = [];
    for (let index = 0; index < legacy.length; index += 4) {
      const person = String(legacy[index] || '');
      const separator = person.lastIndexOf(',');
      saved.specialists.push({
        id: newId('specialist'), fullName: separator > 0 ? person.slice(0, separator).trim() : person, position: separator > 0 ? person.slice(separator + 1).trim() : '',
        workplace: legacy[index + 1] || '', phone: legacy[index + 2] || '', experience: legacy[index + 3] || '', createdAt: saved.savedAtIso || new Date().toISOString(), createdBy: 'legacy-import', updatedAt: saved.savedAtIso || new Date().toISOString(), updatedBy: 'Миграция данных', status: 'active'
      });
    }
  }
}

function markSectionDirty() {
  const button = document.getElementById('saveSection');
  if (!button || currentUser?.role !== 'ppe') return;
  button.disabled = false;
  sectionDirty = true;
  document.getElementById('sectionSaveStatus').textContent = 'Есть несохранённые изменения';
  button.closest('.section-save-bar').classList.add('dirty');
}

function saveSectionData() {
  const code = organizationCode(organizations[currentOrgIndex]);
  const previous = passportData[code]?.[currentSection];
  const previousSubmissionStatus = passportData[code]?._submission?.status;
  const values = sectionDataControls().map(control => control.type === 'checkbox' || control.type === 'radio' ? control.checked : control.value);
  const rows = collectStructuredRows();
  const specialists = collectSpecialists();
  const controls = sectionDataControls();
  const fieldLabels = controls.map((control, index) => control.getAttribute('aria-label') || control.closest('.field')?.querySelector('label span')?.textContent?.trim() || `Поле ${index + 1}`);
  const validationErrors = controls.flatMap((control, index) => {
    const value = typeof values[index] === 'string' ? values[index].trim() : values[index];
    if (value === '' || value === undefined || value === null) return [`${fieldLabels[index]}: поле не заполнено`];
    if (control.type === 'number' && Number(value) < 0) return [`${fieldLabels[index]}: отрицательное значение недопустимо`];
    if (!control.checkValidity()) return [`${fieldLabels[index]}: значение введено некорректно`];
    return [];
  });
  rows.forEach(row => Object.entries(row.fieldValues || {}).forEach(([fieldName, value]) => {
    if (!String(value).trim()) validationErrors.push(`Строка ${row.rowId}, ${fieldName}: поле не заполнено`);
    if (fieldName.toLowerCase().includes('количество') && Number(value) < 0) validationErrors.push(`Строка ${row.rowId}, ${fieldName}: отрицательное значение недопустимо`);
  }));
  specialists.filter(item => item.status === 'active').forEach(item => ['fullName', 'position', 'workplace', 'phone', 'experience'].forEach(key => {
    const labels = { fullName: 'ФИО', position: 'Должность', workplace: 'Место работы', phone: 'Телефон', experience: 'Опыт проведения ГИА' };
    if (!String(item[key] || '').trim()) validationErrors.push(`Специалист ${item.id}: не заполнено поле «${labels[key]}»`);
  }));
  const photos = currentSection === 'photos' ? [...document.querySelectorAll('#photoGrid .photo.user-photo')].map(card => JSON.parse(card.dataset.fileMetadata)) : undefined;
  const changed = Boolean(previous) && JSON.stringify({ values: previous.values || [], rows: previous.rows || [], specialists: previous.specialists || [], photos: previous.photos || [] }) !== JSON.stringify({ values, rows, specialists, photos: photos || [] });
  const savedAt = new Date().toLocaleString('ru-RU');
  passportData[code] ||= {};
  const changeDetails = changed ? buildChangeDetails(previous, { values, fieldLabels, rows, specialists, photos: photos || [] }) : previous?.changeDetails || [];
  passportData[code][currentSection] = {
    ...(previous || {}),
    values, photos, rows, specialists, fieldLabels, validationErrors, changeDetails, savedAt, savedAtIso: new Date().toISOString(),
    previousValues: changed ? previous.values : previous?.previousValues,
    changeDetected: changed ? true : previous?.changeDetected || false,
    changeAcknowledged: changed ? false : previous?.changeAcknowledged || false,
    changedAtIso: changed ? new Date().toISOString() : previous?.changedAtIso,
    comments: previous?.comments || []
  };
  if (changed && passportData[code]._submission) passportData[code]._submission.status = 'changes_pending';
  try {
    localStorage.setItem('ppePassportData', JSON.stringify(passportData));
  } catch {
    if (previous) passportData[code][currentSection] = previous;
    else delete passportData[code][currentSection];
    if (passportData[code]._submission) passportData[code]._submission.status = previousSubmissionStatus;
    showToast('Не удалось сохранить: хранилище заполнено');
    return;
  }
  if (currentSection === 'photos') {
    const retainedIds = new Set((photos || []).map(photo => photo.fileId));
    (previous?.photos || []).filter(photo => photo.fileId && !retainedIds.has(photo.fileId) && !fileReferencedBySubmission(code, photo.fileId)).forEach(photo => deleteStoredFile(photo.fileId));
  }
  if (currentSection === 'workplaces') syncAttestationNotification(code, values.at(-1));
  const button = document.getElementById('saveSection');
  button.disabled = true;
  sectionDirty = false;
  button.closest('.section-save-bar').classList.remove('dirty');
  document.getElementById('sectionSaveStatus').textContent = `Сохранено ${savedAt}`;
  if (changed) {
    const section = sectionTitles[currentSection];
    const existing = notifications.some(item => item.changeCode === code && item.changeSection === currentSection && !item.resolved);
    if (!existing) {
      notifications.unshift({
        id: Date.now() + Math.random(),
        title: `Проверьте ${section}`,
        text: 'Указанные данные отличаются от данных, переданных ранее.',
        ppeCode: code,
        municipality: organizationMunicipality(organizations[currentOrgIndex]),
        changeCode: code,
        changeSection: currentSection,
        date: new Date().toLocaleString('ru-RU'),
        readBy: []
      });
      localStorage.setItem('ppeNotifications', JSON.stringify(notifications));
    }
    renderNotifications();
    if (passportData[code]._submission) {
      const org = organizations[currentOrgIndex];
      org.status = 'issue';
      org.label = 'Есть изменения после отправки';
      org.progress = Math.min(org.progress, 99);
      document.getElementById('passportStatus').className = 'status warning';
      document.getElementById('passportStatus').textContent = 'Есть изменения после отправки';
    }
    renderSection(currentSection);
    renderSubmissionState();
  }
  checkDeadlineViolations();
  refreshOrganizationState(organizations[currentOrgIndex]);
  updatePassportNavigation();
  updateRenderedSectionStatus();
  renderOrganizations();
  showToast(validationErrors.length ? `Черновик сохранён: ошибок ${validationErrors.length}` : 'Раздел заполнен и сохранён');
}

function syncAttestationNotification(code, value) {
  const date = value ? new Date(`${value}T00:00:00`) : new Date('invalid');
  const months = (date - new Date()) / (1000 * 60 * 60 * 24 * 30.4375);
  const expired = Number.isFinite(months) && months < 0;
  const expiring = Number.isFinite(months) && months >= 0 && months <= 1;
  const existing = notifications.find(item => item.attestationCode === code);
  notifications = notifications.filter(item => item.attestationCode !== code);
  if (expired || expiring) {
    const title = expired ? `Срок аттестации АРМ ППЭ ${code} истёк` : `Срок аттестации АРМ ППЭ ${code} истекает`;
    notifications.unshift({
      id: existing?.title === title ? existing.id : newId('notification'),
      title,
      text: expired ? 'Укажите новый срок действия аттестации.' : 'До окончания срока действия аттестации остался месяц или меньше.',
      ppeCode: code,
      attestationCode: code,
      section: 'workplaces',
      date: new Date().toLocaleString('ru-RU'),
      readBy: existing?.title === title ? existing.readBy || [] : []
    });
  }
  localStorage.setItem('ppeNotifications', JSON.stringify(notifications));
  renderNotifications();
}

function fileReferencedBySubmission(code, fileId) {
  const record = passportData[code] || {};
  const submissions = [...(record._submissions || []), ...(record._submission ? [record._submission] : [])];
  return submissions.some(submission => Object.values(submission.snapshot || {}).some(section => (section?.photos || []).some(photo => photo.fileId === fileId)));
}

function dataTables() {
  return [...document.querySelectorAll('#passportContent .auditorium-table, #passportContent .equipment-table')];
}

function dataRowSelector(table) {
  return table.classList.contains('equipment-table') ? '.equipment-row:not(.equipment-header)' : '.room-row:not(.header)';
}

function newId(prefix) {
  return `${prefix}-${Date.now()}-${crypto.getRandomValues(new Uint32Array(1))[0].toString(16)}`;
}

function rowLabels(table) {
  return [...table.querySelectorAll('.header span, .equipment-header span')].slice(0, -1).map(span => span.textContent.trim());
}

function createDataRow(table, data = {}) {
  const equipment = table.classList.contains('equipment-table');
  const labels = rowLabels(table);
  const now = new Date().toISOString();
  const row = document.createElement('div');
  row.className = equipment ? 'equipment-row user-row' : 'room-row user-row';
  row.dataset.rowId = data.rowId || newId('row');
  row.dataset.createdBy = data.createdBy || currentUser?.login || '';
  row.dataset.createdAt = data.createdAt || now;
  row.dataset.updatedAt = data.updatedAt || now;
  labels.forEach((label, index) => {
    const input = document.createElement('input');
    const numeric = label.toLowerCase().includes('количество') || label.toLowerCase().includes('листов');
    input.type = numeric ? 'number' : 'text';
    if (numeric) input.min = '0';
    input.className = equipment ? '' : index === 3 ? 'room-count' : 'room-text';
    input.placeholder = label;
    input.setAttribute('aria-label', label);
    input.value = data.fieldValues?.[label] ?? '';
    input.addEventListener('input', markSectionDirty);
    row.append(input);
  });
  const actions = document.createElement('span');
  actions.className = 'row-actions';
  actions.innerHTML = '<button class="comment-trigger" type="button" title="Комментарий"><svg><use href="#i-message"/></svg></button><button class="remove-row" type="button" title="Удалить строку">×</button>';
  actions.querySelector('.comment-trigger').addEventListener('click', event => { event.stopPropagation(); openRowComment(event.currentTarget); });
  actions.querySelector('.remove-row').addEventListener('click', () => {
    if (!window.confirm('Удалить строку? Изменение вступит в силу после сохранения раздела.')) return;
    row.remove();
    markSectionDirty();
  });
  row.append(actions);
  table.append(row);
  table.closest('.form-card-body')?.querySelector('.empty-hint')?.classList.add('hidden');
  return row;
}

function createSpecialistRow(data = {}) {
  const table = document.querySelector('.staff-table');
  if (!table) return null;
  const now = new Date().toISOString();
  const specialist = {
    id: data.id || newId('specialist'),
    fullName: data.fullName || '', position: data.position || '', workplace: data.workplace || '', phone: data.phone || '', experience: data.experience || '',
    createdAt: data.createdAt || now, createdBy: data.createdBy || currentUser?.login || '', updatedAt: data.updatedAt || now,
    updatedBy: data.updatedBy || currentUser?.name || '', status: data.status || 'active'
  };
  const row = document.createElement('div');
  row.className = `room-row staff-row specialist-row${specialist.status === 'deleted' ? ' deleted' : ''}`;
  row.dataset.specialistId = specialist.id;
  row.dataset.createdAt = specialist.createdAt;
  row.dataset.createdBy = specialist.createdBy;
  row.dataset.updatedAt = specialist.updatedAt;
  row.dataset.updatedBy = specialist.updatedBy;
  row.dataset.status = specialist.status;
  [['fullName', 'ФИО'], ['position', 'Должность'], ['workplace', 'Место работы'], ['phone', 'Телефон'], ['experience', 'Опыт проведения ГИА']].forEach(([key, label]) => {
    const input = document.createElement('input');
    input.className = 'room-text'; input.dataset.field = key; input.value = specialist[key]; input.placeholder = label; input.setAttribute('aria-label', label);
    input.disabled = specialist.status === 'deleted'; input.addEventListener('input', markSectionDirty); row.append(input);
  });
  const status = document.createElement('span');
  status.className = 'specialist-status'; status.textContent = specialist.status === 'deleted' ? 'Удален пользователем ППЭ' : 'Действующий'; row.append(status);
  const action = document.createElement('button');
  action.type = 'button'; action.className = 'remove-specialist'; action.textContent = specialist.status === 'deleted' ? '↺' : '×'; action.title = specialist.status === 'deleted' ? 'Восстановить' : 'Удалить специалиста';
  action.addEventListener('click', () => toggleSpecialistStatus(row)); row.append(action);
  table.append(row);
  return row;
}

function toggleSpecialistStatus(row) {
  const deleted = row.dataset.status !== 'deleted';
  row.dataset.status = deleted ? 'deleted' : 'active';
  row.dataset.updatedAt = new Date().toISOString();
  row.dataset.updatedBy = currentUser?.name || '';
  row.classList.toggle('deleted', deleted);
  row.querySelectorAll('input').forEach(input => { input.disabled = deleted; });
  row.querySelector('.specialist-status').textContent = deleted ? 'Удален пользователем ППЭ' : 'Действующий';
  const action = row.querySelector('.remove-specialist'); action.textContent = deleted ? '↺' : '×'; action.title = deleted ? 'Восстановить' : 'Удалить специалиста';
  markSectionDirty();
}

function collectStructuredRows() {
  return dataTables().flatMap(table => [...table.querySelectorAll(dataRowSelector(table))].map(row => {
    const previous = passportData[organizationCode(organizations[currentOrgIndex])]?.[currentSection]?.rows?.find(item => item.rowId === row.dataset.rowId);
    const fieldValues = Object.fromEntries([...row.querySelectorAll('input')].map(input => [input.getAttribute('aria-label'), input.value]));
    const changed = JSON.stringify(previous?.fieldValues) !== JSON.stringify(fieldValues);
    return { rowId: row.dataset.rowId, section: currentSection, tableKey: table.dataset.tableKey, fieldValues, createdBy: row.dataset.createdBy, createdAt: row.dataset.createdAt, updatedAt: changed ? new Date().toISOString() : row.dataset.updatedAt };
  }));
}

function collectSpecialists() {
  const previousItems = passportData[organizationCode(organizations[currentOrgIndex])]?.[currentSection]?.specialists || [];
  return [...document.querySelectorAll('.specialist-row')].map(row => {
    const item = {
      id: row.dataset.specialistId, fullName: row.querySelector('[data-field="fullName"]').value, position: row.querySelector('[data-field="position"]').value,
      workplace: row.querySelector('[data-field="workplace"]').value, phone: row.querySelector('[data-field="phone"]').value, experience: row.querySelector('[data-field="experience"]').value,
      createdAt: row.dataset.createdAt, createdBy: row.dataset.createdBy, status: row.dataset.status
    };
    const previous = previousItems.find(entry => entry.id === item.id);
    const changed = !previous || ['fullName', 'position', 'workplace', 'phone', 'experience', 'status'].some(key => previous[key] !== item[key]);
    return { ...item, updatedAt: changed ? new Date().toISOString() : previous.updatedAt, updatedBy: changed ? currentUser?.name || '' : previous.updatedBy };
  });
}

function restoreStructuredRows(saved) {
  (saved.rows || []).forEach(item => {
    const table = document.querySelector(`[data-table-key="${item.tableKey}"]`);
    if (table) createDataRow(table, item);
  });
  (saved.specialists || []).forEach(createSpecialistRow);
}

function addPassportRow(button) {
  const table = button.closest('.form-card')?.querySelector('.auditorium-table, .equipment-table');
  if (!table) return;
  const row = createDataRow(table);
  if (!row) return;
  markSectionDirty();
  row.querySelector('input')?.focus();
}

function renderReviewFeed(section) {
  const record = reviews[organizationCode(organizations[currentOrgIndex])];
  const comments = record?.comments?.filter(comment => comment.section === section && !comment.closed) || [];
  if (!comments.length) return '';
  return `<div class="review-feed">${comments.map(comment => `<div class="review-comment"><svg><use href="#i-message"/></svg><div><strong>${escapeHtml(comment.text)}</strong><span>Республиканский администратор · ${escapeHtml(comment.date)}</span></div></div>`).join('')}</div>`;
}

function applyPassportPermissions() {
  const canEdit = currentUser?.role === 'ppe' && organizationCode(organizations[currentOrgIndex]) === currentUser.ppeCode;
  const target = document.getElementById('passportContent');
  target.classList.toggle('readonly-mode', !canEdit);
  target.querySelectorAll('input, textarea, select').forEach(control => {
    const republicanComment = currentUser?.role === 'republic' && control.closest('.comment-box');
    const sectionComment = control.closest('.section-comments');
    if (!control.closest('.review-toolbar') && !sectionComment) control.disabled = !canEdit && !republicanComment;
    if (sectionComment) control.disabled = !['ppe', 'republic'].includes(currentUser?.role);
  });
  target.querySelectorAll('.comment-btn, .comment-trigger').forEach(button => button.classList.toggle('hidden', currentUser?.role !== 'republic'));
  target.querySelectorAll('.add-row, .add-staff-row, .remove-row, .remove-photo, .remove-specialist').forEach(button => button.classList.toggle('hidden', !canEdit));
  document.querySelector('.section-save-bar')?.classList.toggle('hidden', !canEdit);
  document.getElementById('submitPassport').classList.toggle('hidden', !canEdit);
}

function bindDynamicControls() {
  sectionDataControls().forEach(control => control.addEventListener('input', markSectionDirty));
  document.getElementById('saveSection')?.addEventListener('click', saveSectionData);
  document.querySelectorAll('.add-row').forEach(button => button.addEventListener('click', () => addPassportRow(button)));
  document.querySelectorAll('.save-change-comment').forEach(button => button.addEventListener('click', () => saveSectionChangeComment(button.dataset.changeId)));
  document.querySelectorAll('.delete-section-comment').forEach(button => button.addEventListener('click', () => deleteSectionChangeComment(button.dataset.commentId)));
  document.querySelector('.add-staff-row')?.addEventListener('click', () => {
    const row = createSpecialistRow();
    markSectionDirty();
    row?.querySelector('input')?.focus();
  });
  const expiry = document.getElementById('attestationExpiry');
  const attestationNotice = document.getElementById('attestationNotice');
  if (expiry && attestationNotice) {
    const updateAttestation = () => {
      const date = expiry.value ? new Date(`${expiry.value}T00:00:00`) : new Date('invalid');
      const months = (date - new Date()) / (1000 * 60 * 60 * 24 * 30.4375);
      const expired = Number.isFinite(months) && months < 0;
      const expiring = Number.isFinite(months) && months >= 0 && months <= 1;
      const shouldNotify = expired || expiring;
      attestationNotice.classList.toggle('hidden', !shouldNotify);
      document.getElementById('attestationState').textContent = expired ? 'Срок действия аттестата истек.' : 'Срок действия аттестата истекает в течение месяца.';
      document.getElementById('attestationStateText').textContent = expired ? 'Загрузите действующий аттестат.' : 'Подготовьте и загрузите новый аттестат.';
    };
    expiry.addEventListener('input', updateAttestation); updateAttestation();
  }
  const generalRooms = document.getElementById('generalRooms');
  const capacityValue = document.getElementById('capacityValue');
  if (generalRooms && capacityValue) {
    const updateCapacity = () => {
      const rooms = Math.max(0, Number(generalRooms.value) || 0);
      capacityValue.textContent = rooms * 15;
    };
    updateCapacity();
    generalRooms.addEventListener('input', updateCapacity);
  }
  document.querySelectorAll('.review-decision').forEach(button => button.addEventListener('click', () => applySectionDecision(button.dataset.decision)));
  document.getElementById('addReviewComment')?.addEventListener('click', () => {
    const input = document.getElementById('reviewComment');
    const target = document.getElementById('reviewTarget')?.value.trim();
    const correctionDeadline = document.getElementById('reviewDeadline')?.value;
    if (!input.value.trim() || !target || !correctionDeadline) {
      showToast('Укажите комментарий, поле или строку и срок исправления');
      return;
    }
    if (!saveReviewComment(input.value.trim(), currentSection, { target, targetType: document.getElementById('reviewTargetType').value, correctionDeadline })) return;
    renderSection(currentSection);
    showToast('Замечание добавлено');
  });
  document.querySelectorAll('.comment-btn, .comment-trigger').forEach(button => button.addEventListener('click', e => {
    e.stopPropagation();
    const fieldEl = button.closest('.field');
    if (fieldEl) fieldEl.querySelector('.comment-box').classList.toggle('open');
    else openRowComment(button);
  }));
  document.querySelectorAll('.cancel-comment').forEach(button => button.addEventListener('click', () => button.closest('.comment-box').classList.remove('open')));
  document.querySelectorAll('.save-comment').forEach(button => button.addEventListener('click', () => {
    const fieldElement = button.closest('.field');
    const text = fieldElement.querySelector('.comment-box textarea').value.trim();
    const fieldName = fieldElement.querySelector('label span').textContent;
    const correctionDeadline = document.getElementById('reviewDeadline')?.value;
    if (!text || !correctionDeadline) {
      showToast('Введите текст и укажите срок исправления в панели проверки');
      return;
    }
    if (currentUser?.role === 'republic' && !saveReviewComment(text, currentSection, { target: fieldName, targetType: 'field', correctionDeadline })) return;
    fieldElement.querySelector('.comment-btn').classList.add('has-comment');
    button.closest('.comment-box').classList.remove('open');
    showToast('Комментарий сохранён');
  }));
  const upload = document.getElementById('uploadZone');
  const input = document.getElementById('fileInput');
  if (upload && input) {
    input.addEventListener('change', () => addPhotos(input.files));
    ['dragenter', 'dragover'].forEach(type => upload.addEventListener(type, e => { e.preventDefault(); upload.classList.add('drag'); }));
    ['dragleave', 'drop'].forEach(type => upload.addEventListener(type, e => { e.preventDefault(); upload.classList.remove('drag'); }));
    upload.addEventListener('drop', e => addPhotos(e.dataTransfer.files));
  }
}

function applySectionDecision(decision) {
  const org = organizations[currentOrgIndex];
  const code = organizationCode(org);
  const record = reviews[code] || { comments: [] };
  const submission = passportData[code]?._submission;
  if (!submission || submission.status === 'changes_pending') {
    showToast('Решение доступно только по последней отправленной версии паспорта');
    return;
  }
  reviews[code] = record;
  record.sectionStatus ||= {};
  record.resolvedSections ||= [];
  if (decision === 'revision') {
    const text = document.getElementById('reviewComment')?.value.trim();
    const target = document.getElementById('reviewTarget')?.value.trim();
    const targetType = document.getElementById('reviewTargetType')?.value;
    const correctionDeadline = document.getElementById('reviewDeadline')?.value;
    if (!text || !target || !targetType || !correctionDeadline) {
      showToast('Возврат невозможен: укажите комментарий, поле или строку и срок исправления');
      return;
    }
    if (!saveReviewComment(text, currentSection, { target, targetType, correctionDeadline })) return;
  }
  if (decision === 'accepted') {
    if (sectionCompletionErrors(currentSection, submission.snapshot?.[currentSection]).length) {
      showToast('Нельзя принять незаполненный раздел отправленной версии');
      return;
    }
    if (activeIssues(code).some(comment => comment.section === currentSection)) {
      showToast('Сначала закройте активные замечания этого раздела');
      return;
    }
  }
  if (decision === 'deadline') {
    const violation = currentDeadlineViolations().some(item => item.org === org && sectionsForEntry(item.entry).includes(currentSection));
    if (!violation) {
      showToast('Для этого раздела нет нарушенного срока в календаре');
      return;
    }
  }
  record.sectionStatus[currentSection] = decision;
  if (decision === 'accepted' && !record.resolvedSections.includes(currentSection)) record.resolvedSections.push(currentSection);
  if (decision !== 'accepted') record.resolvedSections = record.resolvedSections.filter(section => section !== currentSection);
  if (decision === 'revision') {
    record.returned = true;
  } else if (decision === 'deadline') {
    record.deadline = true;
  } else {
    if (passportData[code]?.[currentSection]) {
      passportData[code][currentSection].changeAcknowledged = true;
      localStorage.setItem('ppePassportData', JSON.stringify(passportData));
    }
    notifications = notifications.filter(item => !(item.changeCode === code && item.changeSection === currentSection));
    localStorage.setItem('ppeNotifications', JSON.stringify(notifications));
    record.deadline = currentDeadlineViolations().some(item => item.org === org);
  }
  reviews[code] = record;
  record.returned = activeIssues(code).length > 0;
  refreshOrganizationState(org);
  saveReviews();
  const labels = { accepted: 'Информация принята', revision: 'Возвращено на доработку', deadline: 'Нарушение сроков' };
  addNotification(`${labels[decision]}: ППЭ ${code}`, `Раздел «${sectionTitles[currentSection]}»: ${labels[decision].toLowerCase()}.`);
  renderOrganizations();
  renderIssues();
  renderCalendar();
  renderSection(currentSection);
  showToast(labels[decision]);
}

let pendingRowComment = null;

function openRowComment(button) {
  if (currentUser?.role !== 'republic') return;
  const row = button.closest('.room-row, .equipment-row');
  const values = row ? [...row.querySelectorAll('input')].map(input => input.value).filter(Boolean) : [];
  pendingRowComment = { context: values.join(' · ') || 'Строка данных', target: row?.dataset.rowId || values.join(' · ') || 'Строка данных' };
  document.getElementById('rowCommentContext').textContent = `${sectionTitles[currentSection]}: ${pendingRowComment.context}`;
  document.getElementById('rowCommentText').value = '';
  const deadline = document.getElementById('rowCommentDeadline');
  deadline.min = new Date().toISOString().slice(0, 10);
  deadline.value = document.getElementById('reviewDeadline')?.value || '';
  document.getElementById('rowCommentDialog').classList.remove('hidden');
  lastDialogTrigger = button;
  document.getElementById('rowCommentText').focus();
}

function closeRowComment() {
  document.getElementById('rowCommentDialog').classList.add('hidden');
  pendingRowComment = null;
  lastDialogTrigger?.focus();
  lastDialogTrigger = null;
}

function saveRowComment() {
  const text = document.getElementById('rowCommentText').value.trim();
  const correctionDeadline = document.getElementById('rowCommentDeadline').value;
  if (!text || !correctionDeadline || !pendingRowComment) {
    showToast('Введите текст замечания и срок исправления');
    return;
  }
  if (!saveReviewComment(text, currentSection, { target: pendingRowComment.target, targetType: 'row', correctionDeadline })) return;
  closeRowComment();
  renderSection(currentSection);
  showToast('Комментарий к строке отправлен');
}

function saveReviews() {
  localStorage.setItem('ppeReviews', JSON.stringify(reviews));
}

function saveReviewComment(text, section, details = {}) {
  const code = organizationCode(organizations[currentOrgIndex]);
  if (currentUser?.role !== 'republic' || !passportData[code]?._submission || passportData[code]._submission.status !== 'submitted') {
    showToast('Замечание можно создать только по отправленной версии паспорта');
    return false;
  }
  const record = reviews[code] || { comments: [] };
  record.comments = record.comments || [];
  if (!text.trim() || !details.target || !details.correctionDeadline) {
    showToast('Для замечания обязательны текст, привязка и срок исправления');
    return false;
  }
  if (record.comments.some(comment => issueState(comment) !== 'closed_republic' && comment.section === section && comment.target === details.target && comment.text === text)) {
    showToast('Такое активное замечание уже существует');
    return false;
  }
  const createdAt = new Date();
  record.comments.push({
    id: newId('issue'),
    text,
    section,
    target: details.target || '',
    targetType: details.targetType || 'field',
    correctionDeadline: details.correctionDeadline || '',
    passportVersion: currentPassportVersion(code),
    state: 'new',
    closed: false,
    author: currentUser?.name || '',
    authorLogin: currentUser?.login || '',
    date: createdAt.toLocaleString('ru-RU'),
    dateIso: createdAt.toISOString(),
    stateHistory: [{ state: 'new', author: currentUser?.name || '', authorLogin: currentUser?.login || '', date: createdAt.toLocaleString('ru-RU'), dateIso: createdAt.toISOString() }]
  });
  reviews[code] = record;
  record.returned = true;
  record.sectionStatus ||= {};
  record.sectionStatus[section] = 'revision';
  syncIssueOrganization(code);
  saveReviews();
  renderIssues();
  addNotification(`Новый комментарий по ППЭ ${code}`, text);
  renderOrganizations();
  updatePassportNavigation();
  return true;
}

function returnForRevision() {
  const org = organizations[currentOrgIndex];
  const code = organizationCode(org);
  const record = reviews[code] || { comments: [] };
  record.returned = true;
  reviews[code] = record;
  org.status = 'issue';
  org.label = 'На доработке';
  org.progress = Math.min(org.progress, 92);
  saveReviews();
  addNotification(`Паспорт ППЭ ${code} возвращён на доработку`, 'Республиканский администратор вернул информацию на доработку. Проверьте замечания и повторно отправьте паспорт.');
  document.getElementById('passportStatus').className = 'status danger';
  document.getElementById('passportStatus').textContent = 'Возвращено на доработку';
  renderOrganizations();
  renderIssues();
  showToast('Информация возвращена на доработку');
}

function addNotification(title, text) {
  const org = organizations[currentOrgIndex];
  notifications.unshift({ id: newId('notification'), title, text, ppeCode: organizationCode(org), municipality: organizationMunicipality(org), date: new Date().toLocaleString('ru-RU'), readBy: [] });
  localStorage.setItem('ppeNotifications', JSON.stringify(notifications));
  renderNotifications();
}

function userNotifications() {
  if (!currentUser) return [];
  const active = notifications.filter(item => !item.resolved);
  if (currentUser.role === 'republic') return active;
  return active.filter(item => item.ppeCode === currentUser.ppeCode);
}

function renderNotifications() {
  if (!currentUser) return;
  const list = userNotifications();
  const userKey = currentUser.login;
  list.forEach(item => { if (!Array.isArray(item.readBy)) item.readBy = []; });
  const unread = list.filter(item => !item.readBy.includes(userKey));
  const count = document.getElementById('notificationCount');
  count.textContent = unread.length > 99 ? '99+' : unread.length;
  count.classList.toggle('hidden', unread.length === 0);
  const hasDeadlineAlert = currentDeadlineViolations().length > 0;
  document.getElementById('notificationDot').classList.toggle('hidden', !hasDeadlineAlert);
  document.getElementById('notificationBtn').classList.toggle('deadline-alert', hasDeadlineAlert);
  document.getElementById('notificationsList').innerHTML = list.length ? list.map(item => `<button class="notification-entry${unread.includes(item) ? ' unread' : ''}" data-notification-id="${escapeHtml(item.id)}"><strong>${escapeHtml(item.title)}</strong><p>${escapeHtml(item.text)}</p><span>${escapeHtml(item.date)}</span></button>`).join('') : '<div class="notifications-empty">Новых уведомлений нет</div>';
  document.querySelectorAll('#notificationsList [data-notification-id]').forEach(button => button.addEventListener('click', () => openNotification(button.dataset.notificationId)));
  renderActivity();
}

function openNotification(id) {
  const item = notifications.find(entry => String(entry.id) === String(id));
  if (!item || !currentUser) return;
  const userKey = currentUser.login;
  item.readBy ||= [];
  if (!item.readBy.includes(userKey)) item.readBy.push(userKey);
  localStorage.setItem('ppeNotifications', JSON.stringify(notifications));
  const index = organizations.findIndex(org => organizationCode(org) === item.ppeCode);
  if (index >= 0 && allowedOrganizations().includes(organizations[index])) {
    currentOrgIndex = index;
    document.getElementById('notificationsPanel').classList.add('hidden');
    document.getElementById('notificationBtn').setAttribute('aria-expanded', 'false');
    if (!openPassport({ currentTarget: { dataset: { index } } })) return;
    const section = item.section || item.changeSection || calendarEntries.find(entry => entry.id === item.deadlineEntryId)?.section;
    if (section && section !== 'all' && sectionTitles[section]) {
      document.querySelector('#passportNav button.active')?.classList.remove('active');
      document.querySelector(`#passportNav [data-section="${section}"]`)?.classList.add('active');
      renderSection(section);
    }
  } else openIssues();
  renderNotifications();
}

function markNotificationsRead() {
  const userKey = currentUser.login;
  userNotifications().forEach(item => {
    if (!Array.isArray(item.readBy)) item.readBy = [];
    if (!item.readBy.includes(userKey)) item.readBy.push(userKey);
  });
  localStorage.setItem('ppeNotifications', JSON.stringify(notifications));
  renderNotifications();
}

function openFileStorage() {
  return new Promise((resolve, reject) => {
    const request = indexedDB.open('ppePassportFiles', 1);
    request.onupgradeneeded = () => request.result.createObjectStore('files', { keyPath: 'id' });
    request.onsuccess = () => resolve(request.result);
    request.onerror = () => reject(request.error);
  });
}

async function storeFile(id, blob) {
  const db = await openFileStorage();
  return new Promise((resolve, reject) => {
    const transaction = db.transaction('files', 'readwrite');
    transaction.objectStore('files').put({ id, blob });
    transaction.oncomplete = () => { db.close(); resolve(); };
    transaction.onerror = () => { db.close(); reject(transaction.error); };
  });
}

async function readStoredFile(id) {
  if (!id) return null;
  const db = await openFileStorage();
  return new Promise((resolve, reject) => {
    const request = db.transaction('files').objectStore('files').get(id);
    request.onsuccess = () => { db.close(); resolve(request.result?.blob || null); };
    request.onerror = () => { db.close(); reject(request.error); };
  });
}

async function deleteStoredFile(id) {
  const db = await openFileStorage();
  return new Promise(resolve => {
    const transaction = db.transaction('files', 'readwrite');
    transaction.objectStore('files').delete(id);
    transaction.oncomplete = transaction.onerror = () => { db.close(); resolve(); };
  });
}

async function fileChecksum(file) {
  const hash = await crypto.subtle.digest('SHA-256', await file.arrayBuffer());
  return [...new Uint8Array(hash)].map(byte => byte.toString(16).padStart(2, '0')).join('');
}

async function addPhotos(files) {
  const grid = document.getElementById('photoGrid');
  const allowedTypes = new Set(['image/jpeg', 'image/png', 'image/tiff', 'image/webp', 'image/bmp', 'application/pdf']);
  const existing = grid.querySelectorAll('.user-photo').length;
  const accepted = [...files].filter(file => {
    if (!allowedTypes.has(file.type) || file.size > 20 * 1024 * 1024) {
      showToast(`Файл «${file.name}» отклонён: неподдерживаемый формат или размер больше 20 МБ`);
      return false;
    }
    return true;
  }).slice(0, Math.max(0, 30 - existing));
  if (accepted.length < files.length && existing + accepted.length >= 30) showToast('Можно загрузить не более 30 файлов');
  for (const file of accepted) {
    const fileId = newId('file');
    try {
      const checksum = await fileChecksum(file);
      await storeFile(fileId, file);
      appendStoredFile(grid, {
        fileId,
        link: `indexeddb://ppe-files/${fileId}`,
        name: file.name,
        size: file.size,
        type: file.type || 'application/octet-stream',
        uploadedAt: new Date().toISOString(),
        uploadedBy: currentUser?.name || '',
        checksum,
        verificationStatus: 'Ожидает проверки'
      }, file);
      markSectionDirty();
    } catch {
      showToast(`Не удалось сохранить файл «${file.name}»`);
    }
  }
  if (accepted.length) showToast(`Добавлено файлов: ${accepted.length}`);
}

async function appendStoredFile(grid, sourceMetadata, suppliedBlob = null) {
  let metadata = { ...sourceMetadata };
  let blob = suppliedBlob;
  if (!metadata.fileId && metadata.src) {
    try {
      blob = await (await fetch(metadata.src)).blob();
      const fileId = newId('file');
      await storeFile(fileId, blob);
      metadata = {
        fileId, link: `indexeddb://ppe-files/${fileId}`, name: metadata.name || 'Файл', size: blob.size, type: blob.type || 'application/octet-stream',
        uploadedAt: new Date().toISOString(), uploadedBy: 'Перенесено из прежней версии', checksum: await fileChecksum(blob), verificationStatus: 'Ожидает проверки'
      };
    } catch { blob = null; }
  }
  if (!blob) {
    try { blob = await readStoredFile(metadata.fileId); } catch { blob = null; }
  }
  const card = document.createElement('div');
  card.className = 'photo user-photo';
  card.dataset.fileMetadata = JSON.stringify(metadata);
  const objectUrl = blob ? URL.createObjectURL(blob) : '';
  const preview = metadata.type === 'application/pdf' || /\.pdf$/i.test(metadata.name) ? document.createElement('a') : document.createElement('img');
  if (preview.tagName === 'A') { preview.href = objectUrl; preview.textContent = objectUrl ? 'Открыть PDF' : 'Файл недоступен'; preview.target = '_blank'; }
  else { preview.src = objectUrl; preview.alt = metadata.name || 'Загруженный файл'; }
  const caption = document.createElement('span');
  caption.textContent = `${metadata.name} · ${formatFileSize(metadata.size)} · ${metadata.verificationStatus}`;
  card.append(preview, caption);
  const remove = document.createElement('button');
  remove.className = 'remove-photo'; remove.type = 'button'; remove.textContent = '×'; remove.title = 'Удалить файл';
  remove.setAttribute('aria-label', `Удалить файл ${metadata.name || ''}`);
  remove.addEventListener('click', () => {
    if (!window.confirm(`Удалить файл «${metadata.name}» из текущего черновика?`)) return;
    if (objectUrl) URL.revokeObjectURL(objectUrl);
    card.remove();
    updatePhotoCount();
    markSectionDirty();
  });
  card.append(remove);
  remove.classList.toggle('hidden', currentUser?.role !== 'ppe');
  grid.prepend(card);
  updatePhotoCount();
}

function formatFileSize(size) {
  const bytes = Number(size) || 0;
  if (bytes < 1024) return `${bytes} Б`;
  if (bytes < 1024 * 1024) return `${Math.round(bytes / 1024)} КБ`;
  return `${(bytes / 1024 / 1024).toFixed(1)} МБ`;
}

function updatePhotoCount() {
  const count = document.querySelectorAll('#photoGrid .user-photo').length;
  const label = document.getElementById('photoCount');
  if (!label) return;
  label.textContent = count ? `${count} файл(ов)` : 'Файлы не загружены';
  label.className = `status ${count ? 'success' : 'warning'}`;
}

function showToast(text) {
  const toast = document.getElementById('toast');
  toast.querySelector('span').textContent = text;
  toast.classList.add('show');
  clearTimeout(window.toastTimer);
  window.toastTimer = setTimeout(() => toast.classList.remove('show'), 2600);
}

function renderMunicipalities() {
  refreshAllOrganizationStates();
  const groups = organizations.reduce((result, org) => {
    const municipality = organizationMunicipality(org);
    result[municipality] ||= [];
    result[municipality].push(org);
    return result;
  }, {});
  document.getElementById('municipalityGrid').innerHTML = Object.entries(groups).sort(([a], [b]) => a.localeCompare(b, 'ru')).map(([municipality, items]) => {
    const ready = items.filter(item => item.status === 'ready').length;
    const percent = Math.round(ready / items.length * 100);
    return `<article class="municipality-card"><div><strong>${municipality}</strong><b>${percent}%</b></div><span>${ready} из ${items.length} ППЭ готовы</span><div class="bar"><i style="width:${percent}%"></i></div></article>`;
  }).join('');
}

function showDashboardList(filter) {
  if (!openDashboard()) return;
  currentFilter = filter;
  document.querySelector('.filter.active')?.classList.remove('active');
  const matchingFilter = document.querySelector(`[data-filter="${filter}"]`);
  matchingFilter?.classList.add('active');
  renderOrganizations();
  document.querySelector('.organizations-panel').scrollIntoView({ behavior: 'smooth' });
}

function xmlCell(value) {
  return `<Cell><Data ss:Type="String">${escapeHtml(value ?? '')}</Data></Cell>`;
}

function downloadRepublicReport() {
  if (currentUser?.role !== 'republic') {
    showToast('Отчёт доступен республиканскому администратору');
    return;
  }
  const rows = organizations.map(org => {
    const code = organizationCode(org);
    const saved = passportData[code] || {};
    const review = reviews[code] || {};
    const comments = (review.comments || []).map(comment => `${sectionTitles[comment.section] || 'Общее'}: ${comment.text}`).join('; ');
    const savedSections = Object.keys(saved).map(section => sectionTitles[section]).filter(Boolean).join(', ');
    const overdue = currentDeadlineViolations().filter(item => item.org === org).map(item => item.entry.title).join(', ');
    return [organizationMunicipality(org), code, org.code.split(' · ')[1], org.name, organizationLocality(org), `${org.progress}%`, org.label, savedSections, comments, overdue];
  });
  const headers = ['Муниципалитет', 'Код ППЭ', 'Экзамен', 'Организация', 'Населённый пункт', 'Заполнено', 'Статус', 'Сохранённые разделы', 'Комментарии и замечания', 'Нарушенные сроки'];
  const sheetRows = [headers, ...rows].map(row => `<Row>${row.map(xmlCell).join('')}</Row>`).join('');
  const workbook = `<?xml version="1.0"?><Workbook xmlns="urn:schemas-microsoft-com:office:spreadsheet" xmlns:ss="urn:schemas-microsoft-com:office:spreadsheet"><Worksheet ss:Name="ППЭ"><Table>${sheetRows}</Table></Worksheet></Workbook>`;
  const link = document.createElement('a');
  link.href = URL.createObjectURL(new Blob([workbook], { type: 'application/vnd.ms-excel;charset=utf-8' }));
  link.download = `otchet-ppe-${new Date().toISOString().slice(0, 10)}.xls`;
  link.click();
  setTimeout(() => URL.revokeObjectURL(link.href), 1000);
  showToast('Отчёт XLS сформирован');
}

function downloadPpeReport() {
  const org = organizations[currentOrgIndex];
  if (!org) return;
  const code = organizationCode(org);
  const saved = passportData[code] || {};
  const sheets = Object.entries(sectionTitles).filter(([section]) => section !== 'photos').map(([section, title]) => {
    const sectionData = saved[section] || {};
    const scalarRows = (sectionData.values || []).map((value, index) => [sectionData.fieldLabels?.[index] || `Поле ${index + 1}`, value]);
    const structuredRows = (sectionData.rows || []).flatMap(row => Object.entries(row.fieldValues || {}).map(([field, value]) => [`${row.tableKey} · ${row.rowId} · ${field}`, value]));
    const specialistRows = (sectionData.specialists || []).flatMap(item => [['Специалист · ФИО', item.fullName], ['Специалист · Должность', item.position], ['Специалист · Место работы', item.workplace], ['Специалист · Телефон', item.phone], ['Специалист · Опыт ГИА', item.experience], ['Специалист · Статус', item.status === 'deleted' ? 'Удален пользователем ППЭ' : 'Действующий']]);
    const rows = [...scalarRows, ...structuredRows, ...specialistRows];
    if (!rows.length) rows.push(['Статус', 'Нет сохранённых изменений']);
    const sheetRows = [['Параметр', 'Значение'], ...rows].map(row => `<Row>${row.map(xmlCell).join('')}</Row>`).join('');
    return `<Worksheet ss:Name="${escapeHtml(title.slice(0, 31))}"><Table>${sheetRows}</Table></Worksheet>`;
  }).join('');
  const workbook = `<?xml version="1.0"?><Workbook xmlns="urn:schemas-microsoft-com:office:spreadsheet" xmlns:ss="urn:schemas-microsoft-com:office:spreadsheet">${sheets}</Workbook>`;
  const link = document.createElement('a');
  link.href = URL.createObjectURL(new Blob([workbook], { type: 'application/vnd.ms-excel;charset=utf-8' }));
  link.download = `otchet-ppe-${code}-${new Date().toISOString().slice(0, 10)}.xls`;
  link.click();
  setTimeout(() => URL.revokeObjectURL(link.href), 1000);
  showToast('Подробный отчёт XLS сформирован');
}

function submissionSnapshot(record) {
  return Object.keys(sectionTitles).reduce((snapshot, section) => {
    const saved = record[section];
    snapshot[section] = saved ? {
      values: [...(saved.values || [])],
      fieldLabels: [...(saved.fieldLabels || [])],
      rows: structuredClone(saved.rows || []),
      specialists: structuredClone(saved.specialists || []),
      photos: (saved.photos || []).map(photo => ({ fileId: photo.fileId, name: photo.name, size: photo.size, type: photo.type, checksum: photo.checksum, verificationStatus: photo.verificationStatus })),
      savedAtIso: saved.savedAtIso,
      validationErrors: [...(saved.validationErrors || [])]
    } : null;
    return snapshot;
  }, {});
}

function submissionChanges(record, previousSnapshot) {
  if (!previousSnapshot) return Object.keys(sectionTitles).map(section => `${sectionTitles[section]}: первичная отправка`);
  const currentSnapshot = submissionSnapshot(record);
  return Object.keys(sectionTitles).flatMap(section => {
    const current = currentSnapshot[section];
    const previous = previousSnapshot[section];
    const comparable = saved => saved ? { ...saved, savedAtIso: undefined } : null;
    if (JSON.stringify(comparable(current)) === JSON.stringify(comparable(previous))) return [];
    const changedFields = (current?.values || []).reduce((result, value, index) => {
      if (value !== previous?.values?.[index]) result.push(current.fieldLabels?.[index] || `поле ${index + 1}`);
      return result;
    }, []);
    const structuralChange = JSON.stringify(current?.rows || []) !== JSON.stringify(previous?.rows || []) || JSON.stringify(current?.specialists || []) !== JSON.stringify(previous?.specialists || []) || JSON.stringify(current?.photos || []) !== JSON.stringify(previous?.photos || []);
    const details = [...changedFields, ...(structuralChange ? ['состав строк или документов'] : [])];
    return [`${sectionTitles[section]}: ${details.length ? details.join(', ') : 'данные раздела'}`];
  });
}

function validatePassportForSubmission() {
  const code = organizationCode(organizations[currentOrgIndex]);
  const record = passportData[code] || {};
  const errors = [];
  if (!document.getElementById('saveSection')?.disabled) errors.push(`В разделе «${sectionTitles[currentSection]}» есть несохранённые изменения.`);
  Object.keys(sectionTitles).forEach(section => {
    const saved = record[section];
    const title = sectionTitles[section];
    if (!saved?.savedAtIso) {
      errors.push(`Раздел «${title}» не сохранён.`);
      return;
    }
    if (section === 'photos') {
      if (!(saved.photos || []).length) errors.push('В разделе «Фотоматериалы» не загружены обязательные документы или файлы.');
    } else {
      if (!(saved.values || []).length && !(saved.rows || []).length && !(saved.specialists || []).length) errors.push(`В разделе «${title}» отсутствуют данные.`);
      (saved.values || []).forEach((value, index) => {
        const label = saved.fieldLabels?.[index] || `Поле ${index + 1}`;
        if (typeof value === 'string' && !value.trim()) errors.push(`Раздел «${title}»: не заполнено поле «${label}».`);
        if (typeof value === 'string' && /^-\d+(?:[.,]\d+)?$/.test(value.trim())) errors.push(`Раздел «${title}»: поле «${label}» содержит отрицательное значение.`);
      });
      (saved.rows || []).forEach(row => Object.entries(row.fieldValues || {}).forEach(([field, value]) => {
        if (!String(value).trim()) errors.push(`Раздел «${title}», строка ${row.rowId}: не заполнено поле «${field}».`);
        if (/^-\d+(?:[.,]\d+)?$/.test(String(value).trim())) errors.push(`Раздел «${title}», строка ${row.rowId}: поле «${field}» содержит отрицательное значение.`);
      }));
      if (section === 'rooms' && !(saved.rows || []).length) errors.push('В разделе «Аудиторный фонд» не добавлено ни одного помещения.');
      if (section === 'equipment' && !(saved.rows || []).length) errors.push('В разделе «Оборудование» не добавлено ни одной единицы оборудования.');
      if (section === 'equipment') ['computers', 'printers', 'scanners'].forEach(tableKey => {
        if (!(saved.rows || []).some(row => row.tableKey === tableKey)) errors.push(`Раздел «Оборудование»: не заполнена обязательная категория «${tableKey}».`);
      });
      if (section === 'staff') {
        const activeSpecialists = (saved.specialists || []).filter(item => item.status === 'active');
        if (!activeSpecialists.length) errors.push('В разделе «Ответственные лица» не добавлено ни одного действующего технического специалиста.');
        activeSpecialists.forEach(item => ['fullName', 'position', 'workplace', 'phone', 'experience'].forEach(key => {
          if (!String(item[key] || '').trim()) errors.push(`Раздел «${title}», специалист ${item.id}: не заполнено поле «${{ fullName: 'ФИО', position: 'Должность', workplace: 'Место работы', phone: 'Телефон', experience: 'Опыт проведения ГИА' }[key]}».`);
        }));
      }
    }
    (saved.validationErrors || []).forEach(error => errors.push(`Раздел «${title}»: ${error}.`));
    if (saved.changeDetected && !saved.changeAcknowledged) {
      const unexplained = (saved.changeDetails || []).filter(change => !(saved.comments || []).some(comment => comment.role === 'ppe' && comment.changeId === change.id));
      const legacyExplanation = !(saved.changeDetails || []).length && (saved.comments || []).some(comment => comment.role === 'ppe' && (!saved.changedAtIso || comment.createdAtIso >= saved.changedAtIso));
      if (unexplained.length && !legacyExplanation) errors.push(`Изменения в разделе «${title}» не подтверждены комментариями: ${unexplained.map(change => change.field).join(', ')}.`);
    }
  });
  return [...new Set(errors)];
}

function renderSubmissionState(errors = []) {
  const panel = document.getElementById('submissionPanel');
  if (!panel) return;
  document.getElementById('submitPassport').textContent = 'Отправить на проверку';
  const code = organizationCode(organizations[currentOrgIndex]);
  const submission = passportData[code]?._submission;
  if (errors.length) {
    panel.className = 'submission-panel validation-failed';
    panel.innerHTML = `<strong>Паспорт не отправлен</strong><span>Исправьте следующие ошибки:</span><ul>${errors.map(error => `<li>${escapeHtml(error)}</li>`).join('')}</ul>`;
    panel.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    return;
  }
  if (!submission) {
    panel.className = 'submission-panel hidden';
    panel.innerHTML = '';
    return;
  }
  const pending = submission.status === 'changes_pending';
  panel.className = `submission-panel ${pending ? 'validation-pending' : 'submitted'}`;
  panel.innerHTML = `<div><strong>${pending ? 'Есть изменения после отправки' : 'Отправлено республиканскому администратору'}</strong><span>Последняя отправленная версия ${submission.version} · ${escapeHtml(submission.sentAt)} · отправил ${escapeHtml(submission.sentBy)}</span></div><div><strong>Изменения в отправленной версии</strong><ul>${submission.changes.map(change => `<li>${escapeHtml(change)}</li>`).join('')}</ul></div>`;
  document.getElementById('submitPassport').textContent = 'Отправить новую версию';
}

async function submitPassportForReview() {
  if (currentUser?.role !== 'ppe') return;
  const errors = validatePassportForSubmission();
  if (errors.length) {
    renderSubmissionState(errors);
    showToast(`Паспорт не отправлен: ошибок ${errors.length}`);
    return;
  }
  const org = organizations[currentOrgIndex];
  const code = organizationCode(org);
  const record = passportData[code];
  const recordBeforeSubmission = JSON.stringify(record);
  const previous = record._submission;
  const sentAt = new Date();
  const changes = submissionChanges(record, previous?.snapshot);
  if (previous && !changes.length) {
    showToast('Новая версия не отправлена: сохранённых изменений нет');
    return;
  }
  const missingFiles = [];
  for (const photo of record.photos?.photos || []) {
    try { if (!await readStoredFile(photo.fileId)) missingFiles.push(photo.name); } catch { missingFiles.push(photo.name); }
  }
  if (missingFiles.length) {
    renderSubmissionState([`Недоступны файлы: ${missingFiles.join(', ')}. Загрузите их повторно.`]);
    return;
  }
  const version = (previous?.version || 0) + 1;
  if (!window.confirm(`Отправить паспорт версии ${version} республиканскому администратору? После отправки снимок версии изменить нельзя.`)) return;
  record._submissions ||= [];
  if (previous) record._submissions.push(structuredClone(previous));
  record._submission = {
    version,
    sentBy: currentUser.name,
    sentByLogin: currentUser.login,
    sentAt: sentAt.toLocaleString('ru-RU'),
    sentAtIso: sentAt.toISOString(),
    changes,
    snapshot: submissionSnapshot(record),
    status: 'submitted'
  };
  Object.keys(sectionTitles).forEach(section => {
    record[section].changeDetected = false;
    record[section].changeAcknowledged = false;
  });
  try {
    localStorage.setItem('ppePassportData', JSON.stringify(passportData));
  } catch {
    passportData[code] = JSON.parse(recordBeforeSubmission);
    renderSubmissionState(['Не удалось сохранить отправку: хранилище браузера заполнено. Удалите лишние файлы и повторите попытку.']);
    showToast('Паспорт не отправлен: не удалось сохранить версию');
    return;
  }
  if (reviews[code]) reviews[code].returned = activeIssues(code).length > 0;
  if (reviews[code]) {
    reviews[code].sectionStatus = {};
    reviews[code].resolvedSections = [];
  }
  saveReviews();
  addNotification(`Паспорт ППЭ ${code} отправлен`, `${currentUser.name} отправил версию ${record._submission.version}. Изменения: ${record._submission.changes.join('; ')}`);
  refreshOrganizationState(org);
  document.getElementById('passportStatus').className = `status ${org.status === 'issue' ? 'danger' : 'success'}`;
  document.getElementById('passportStatus').textContent = org.label;
  renderSubmissionState();
  renderOrganizations();
  showToast(`Версия ${record._submission.version} отправлена республиканскому администратору`);
}

function applySavedReviews() {
  refreshAllOrganizationStates();
}

function applyRoleUI() {
  const available = allowedOrganizations();
  currentOrgIndex = organizations.indexOf(available[0]);
  document.getElementById('sidebarName').textContent = currentUser.name;
  document.getElementById('sidebarRole').textContent = currentUser.title;
  document.getElementById('sidebarAvatar').textContent = currentUser.initials;
  document.getElementById('topAvatar').textContent = currentUser.initials;
  document.getElementById('greeting').textContent = `Добрый день, ${currentUser.shortName}`;
  document.getElementById('currentDate').textContent = new Date().toLocaleDateString('ru-RU', { day: 'numeric', month: 'long', year: 'numeric' });
  const republicScope = document.querySelector('[data-scope="republic"]');
  const schoolScope = document.querySelector('[data-scope="school"]');
  document.querySelector('.scope-btn.active')?.classList.remove('active');
  republicScope.classList.toggle('hidden', currentUser.role !== 'republic');
  schoolScope.classList.toggle('hidden', currentUser.role !== 'ppe');
  schoolScope.textContent = 'Мой ППЭ';
  (currentUser.role === 'republic' ? republicScope : schoolScope).classList.add('active');
  document.querySelector('[data-view="passport"] span').textContent = currentUser.role === 'ppe' ? 'Мой паспорт' : 'Паспорта ППЭ';
  document.querySelector('.organizations-panel .panel-head p').textContent = currentUser.role === 'republic' ? 'Все ППЭ Луганской Народной Республики' : 'Паспорт вашей образовательной организации';
  document.getElementById('administrationNav').classList.toggle('hidden', currentUser.role !== 'republic');
  document.getElementById('exportBtn').classList.toggle('hidden', currentUser.role !== 'republic');
  document.getElementById('municipalitySection').classList.toggle('hidden', currentUser.role !== 'republic');
  renderOrganizations();
  renderMunicipalities();
  renderIssues();
  renderCalendar();
  renderDeadlineTimeline();
  renderNotifications();
  openDashboard();
}

function login(loginValue, passwordValue) {
  const normalizedLogin = loginValue.trim().toLowerCase();
  const account = accounts[normalizedLogin] || managedAccounts.find(item => item.login === normalizedLogin);
  if (!account || account.password !== passwordValue) {
    document.getElementById('loginError').textContent = 'Неверный логин или пароль';
    return;
  }
  currentUser = { ...account, login: normalizedLogin };
  document.getElementById('loginError').textContent = '';
  document.getElementById('loginScreen').classList.add('hidden');
  document.getElementById('appShell').classList.remove('auth-locked');
  applyRoleUI();
  checkDeadlineViolations();
}

function logout() {
  if (!confirmDiscardChanges()) return;
  currentUser = null;
  passportView.classList.add('hidden');
  document.getElementById('appShell').classList.add('auth-locked');
  document.getElementById('loginScreen').classList.remove('hidden');
  document.getElementById('loginForm').reset();
  document.getElementById('notificationsPanel').classList.add('hidden');
}

document.querySelectorAll('.filter').forEach(button => button.addEventListener('click', () => {
  document.querySelector('.filter.active').classList.remove('active');
  button.classList.add('active');
  currentFilter = button.dataset.filter;
  renderOrganizations();
}));
document.getElementById('orgSearch').addEventListener('input', renderOrganizations);
document.getElementById('showAll').addEventListener('click', () => { currentFilter = 'all'; document.getElementById('orgSearch').value = ''; renderOrganizations(); });
document.getElementById('exportBtn').addEventListener('click', downloadRepublicReport);
document.getElementById('downloadPpeReport').addEventListener('click', downloadPpeReport);
document.getElementById('completedMetric').addEventListener('click', () => showDashboardList('ready'));
document.getElementById('attentionMetric').addEventListener('click', () => showDashboardList('attention'));
document.querySelectorAll('.metric-action').forEach(card => card.addEventListener('keydown', event => { if (event.key === 'Enter' || event.key === ' ') card.click(); }));
document.getElementById('backDashboard').addEventListener('click', openDashboard);
document.querySelectorAll('#passportNav button').forEach(button => button.addEventListener('click', () => {
  if (!renderSection(button.dataset.section)) return;
  document.querySelector('#passportNav button.active')?.classList.remove('active');
  button.classList.add('active');
}));
document.querySelectorAll('.scope-btn').forEach(button => button.addEventListener('click', () => {
  const opened = button.dataset.scope === 'school' && currentUser?.role === 'ppe' ? openPassport() : openDashboard();
  if (opened === false) return;
  document.querySelector('.scope-btn.active')?.classList.remove('active');
  button.classList.add('active');
  if (!(button.dataset.scope === 'school' && currentUser?.role === 'ppe')) {
    if (button.dataset.scope === 'school') document.querySelector('.organizations-panel').scrollIntoView({ behavior: 'smooth' });
  }
}));
document.querySelectorAll('.nav-item[data-view]').forEach(button => button.addEventListener('click', () => {
  if (button.dataset.view === 'passport') openPassport();
  else if (button.dataset.view === 'issues') openIssues();
  else if (button.dataset.view === 'calendar') openCalendar();
  else if (button.dataset.view === 'administration') openAdministration();
  else if (button.dataset.view === 'settings') openSettings();
  else openDashboard();
  closeMobileMenu();
}));

document.getElementById('themeRange').addEventListener('input', event => {
  preferences.theme = event.target.value === '1' ? 'dark' : 'light';
  savePreferences();
});
document.getElementById('fontRange').addEventListener('input', event => {
  preferences.fontSize = Number(event.target.value);
  savePreferences();
});
document.getElementById('addCalendarEntry').addEventListener('click', addCalendarEntry);
document.getElementById('generateCredentials').addEventListener('click', createManagedAccount);
document.getElementById('accountRole').addEventListener('change', updateAccountScopeFields);
document.getElementById('closeRowComment').addEventListener('click', closeRowComment);
document.getElementById('cancelRowComment').addEventListener('click', closeRowComment);
document.getElementById('saveRowComment').addEventListener('click', saveRowComment);
document.getElementById('rowCommentDialog').addEventListener('click', event => { if (event.target.id === 'rowCommentDialog') closeRowComment(); });
document.getElementById('closeIssueClosure').addEventListener('click', closeIssueClosureDialog);
document.getElementById('cancelIssueClosure').addEventListener('click', closeIssueClosureDialog);
document.getElementById('confirmIssueClosure').addEventListener('click', closeReviewComment);
document.getElementById('issueClosureDialog').addEventListener('click', event => { if (event.target.id === 'issueClosureDialog') closeIssueClosureDialog(); });

document.getElementById('loginForm').addEventListener('submit', event => {
  event.preventDefault();
  login(document.getElementById('loginInput').value, document.getElementById('passwordInput').value);
});
document.querySelectorAll('.demo-accounts button').forEach(button => button.addEventListener('click', () => {
  document.getElementById('loginInput').value = button.dataset.login;
  document.getElementById('passwordInput').value = button.dataset.password;
  login(button.dataset.login, button.dataset.password);
}));
document.getElementById('logoutBtn').addEventListener('click', logout);
document.getElementById('notificationBtn').addEventListener('click', event => {
  const panel = document.getElementById('notificationsPanel');
  panel.classList.toggle('hidden');
  event.currentTarget.setAttribute('aria-expanded', String(!panel.classList.contains('hidden')));
});
document.getElementById('clearNotifications').addEventListener('click', markNotificationsRead);
document.getElementById('submitPassport').addEventListener('click', submitPassportForReview);
document.getElementById('globalSearch').addEventListener('input', event => {
  document.getElementById('orgSearch').value = event.target.value;
  currentFilter = 'all';
  if (!openDashboard()) return;
  renderOrganizations();
});
document.getElementById('currentDateButton').addEventListener('click', openCalendar);
document.getElementById('showNotifications').addEventListener('click', () => {
  const panel = document.getElementById('notificationsPanel');
  panel.classList.remove('hidden');
  document.getElementById('notificationBtn').setAttribute('aria-expanded', 'true');
  document.getElementById('notificationBtn').focus();
});
document.querySelectorAll('.dialog-overlay').forEach(dialog => dialog.addEventListener('keydown', event => {
  if (event.key !== 'Escape') return;
  if (dialog.id === 'rowCommentDialog') closeRowComment();
  if (dialog.id === 'issueClosureDialog') closeIssueClosureDialog();
}));
window.addEventListener('beforeunload', event => {
  if (!sectionDirty) return;
  event.preventDefault();
  event.returnValue = '';
});

const sidebar = document.getElementById('sidebar');
const overlay = document.getElementById('overlay');
document.getElementById('mobileMenu').addEventListener('click', () => { sidebar.classList.add('open'); overlay.classList.add('show'); });
overlay.addEventListener('click', closeMobileMenu);
function closeMobileMenu() { sidebar.classList.remove('open'); overlay.classList.remove('show'); }

applySavedReviews();
applyPreferences();
populateAccountScopes();
updateAccountScopeFields();
renderDeadlineTimeline();
setInterval(checkDeadlineViolations, 60000);
