const programData = {
  bootcamp: {
    title: '🚀 Pink Hero Bootcamp',
    tag: 'Буткемп · 8 недель',
    desc: 'Интенсивная программа для девушек с идеей проекта. Ты пройдёшь путь от идеи до MVP с поддержкой ментора.',
    tasks: [
      '1. Разработка идеи и MVP за 2 недели',
      '2. Кодинг-блок: Python, Web Development, базы данных',
      '3. Английский для питча инвесторам (B2+)',
      '4. Менторские сессии 2 раза в неделю',
      '5. Финальный питч перед инвесторами и командой Astana Hub',
      '6. Сертификат и возможность получить грант до $5 000'
    ]
  },
  ai: {
    title: '🤖 Основы Кодинга и AI',
    tag: 'Курс · 45 видеоуроков · Бесплатно',
    desc: 'Идеальный старт для тех, кто никогда не программировал. Python → AI/ML → первый проект.',
    tasks: [
      '1. Python с нуля: переменные, функции, ООП',
      '2. Введение в Data Science и Pandas',
      '3. Машинное обучение: линейная регрессия, классификация',
      '4. Нейронные сети с PyTorch (базовый уровень)',
      '5. Финальный проект: ML-модель на реальных данных',
      '6. Сертификат Pink Coded'
    ]
  },
  marathon: {
    title: '🏃 Pink Coders Marathon',
    tag: 'Марафон · 30 дней',
    desc: 'Ежедневные задания по кодингу и английскому. Поддержка сестёр 24/7. Призы каждую неделю.',
    tasks: [
      '1. Ежедневная задача по кодингу (30 мин)',
      '2. Словарь и чтение IT-текстов на английском',
      '3. Разбор олимпиадных задач',
      '4. Еженедельный созвон с ментором',
      '5. Финальный хакатон участниц марафона',
      '6. Призы: ноутбук, курсы, стажировки'
    ]
  },
  ielts: {
    title: '🇬🇧 IELTS для STEM-девушек',
    tag: 'Курс · 3 месяца',
    desc: 'Академический английский для поступления в технические университеты мира.',
    tasks: ['1. Reading: научные тексты и академические статьи', '2. Writing: эссе и отчёты в STEM-формате', '3. Speaking: презентации и защиты проектов', '4. Listening: лекции и интервью с учёными', '5. Практические тесты с разбором ошибок']
  },
  web: {
    title: '🌐 Web Development',
    tag: 'Курс · 6 недель',
    desc: 'HTML, CSS, JavaScript — создай своё первое веб-приложение.',
    tasks: ['1. HTML структура и семантика', '2. CSS: flexbox, grid, анимации', '3. JavaScript: DOM, события, fetch', '4. React основы', '5. Деплой на Vercel', '6. Финальный проект — твой сайт-портфолио']
  },
  olympiad: {
    title: '🏆 Олимпиадный трек CS/Math',
    tag: 'Трек · 6 месяцев',
    desc: 'Подготовка к EGOI, IMO, IPhO с менторами-победительницами.',
    tasks: ['1. Алгоритмы и структуры данных', '2. Комбинаторика и теория чисел', '3. Разбор задач прошлых олимпиад', '4. Командные тренировки', '5. Пробные соревнования', '6. Индивидуальные сессии с ментором']
  },
  hackathon: {
    title: '⚡ Pink Hackathon Series',
    tag: 'Серия хакатонов · Ежеквартально',
    desc: '48-часовые хакатоны только для девушек с реальными призами и менторами от топ-компаний.',
    tasks: ['1. Формирование команды (2–4 чел)', '2. Тема выбирается за 1 ч до начала', '3. Менторы от Google, Яндекс, Kaspi', '4. Питч жюри на 5 минут', '5. Призовой фонд: 1–2–3 место', '6. Возможность стажировки для победительниц']
  }
};

const roleData = {
  idea: {
    title: '💡 Девушка с идеей проекта',
    desc: 'Ты хочешь запустить IT-проект, но не знаешь с чего начать — это твоё место!',
    perks: ['🚀 Pink Hero Bootcamp — интенсив для запуска проекта', '🤝 Персональный ментор из индустрии', '💰 Грантовая программа до $5 000', '🌐 Сеть партнёров и инвесторов', '📚 Доступ ко всем курсам бесплатно']
  },
  mentor: {
    title: '🤝 Партнёр или ментор',
    desc: 'Ты хочешь помочь следующему поколению девушек в IT или найти талантливых интернов.',
    perks: ['👩 Доступ к пулу 6000+ участниц', '🎯 Целевые программы интернатуры', '📣 Упоминание бренда на платформе', '🏆 Участие в Pink Hackathon как эксперт', '📊 Аналитика по участницам для HR']
  },
  researcher: {
    title: '🔬 Исследовательница',
    desc: 'CS, математика, олимпиады — для тех, кто хочет победить на международных соревнованиях.',
    perks: ['🏆 Олимпиадный трек CS/Math', '👩‍🏫 Менторы — победительницы EGOI, IMO', '🌍 Подготовка к поступлению за рубеж', '🔬 Исследовательские проекты с университетами', '📜 Сертификаты и рекомендательные письма']
  },
  coder: {
    title: '💻 IT-девушка',
    desc: 'Уже кодишь? Найди сестёр, проект и следующую ступень карьеры.',
    perks: ['💼 База стажировок и вакансий', '👯 Комьюнити 6000+ девушек в IT', '⚡ Pink Hackathon Series', '🌐 Международные программы обмена', '🚀 Запуск своего стартапа с поддержкой']
  }
};

const newsData = [
  { title: 'Девушка из Атырау выиграла международную олимпиаду по кодингу', date: '15 фев 2026', body: 'Айгерим Сейткали, 17 лет, из Атырау стала победительницей EGOI 2025 — Европейской олимпиады по информатике для девушек. Айгерим занималась в рамках Олимпиадного трека Pink Coded с ментором Данарой Ахметовой. После победы Айгерим получила стипендию MIT и предложения от Google и DeepMind.\n\n«Ещё год назад я не знала, что такое алгоритм. Pink Coded изменила всё — здесь я нашла сестёр, ментора и поверила в себя», — говорит Айгерим.\n\nЭто третья победа участниц Pink Coded на международных олимпиадах за последний год.' },
  { title: 'Pink Coded запускает Digital Bridge — платформу для девушек из регионов', date: '10 фев 2026', body: 'Новый раздел Digital Bridge помогает девушкам из сельских и отдалённых районов Казахстана и СНГ получить доступ к менторам, курсам и международным возможностям.\n\nПлатформа включает: AI-матчинг с ментором за 60 секунд, региональные виртуальные хабы для каждой области Казахстана, геймифицированный трек обучения с бейджами и сертификатами.\n\n«Каждая девушка заслуживает доступа к знаниям и поддержке, независимо от того, где она живёт», — говорит основательница Pink Coded.' },
  { title: 'Партнёрство с Astana Hub: 50 мест на стажировки для участниц', date: '5 фев 2026', body: 'Pink Coded и Astana Hub подписали соглашение о партнёрстве, которое открывает 50 мест на оплачиваемые стажировки в казахстанских стартапах для участниц сообщества.\n\nПрограмма стажировок рассчитана на 3 месяца и включает работу над реальными продуктами в командах Astana Hub. Участницы получат ежемесячную стипендию и менторскую поддержку.\n\nЗаявки принимаются до 1 марта 2026.' },
  { title: '500 девушек из Узбекистана присоединились за первый месяц', date: '1 фев 2026', body: 'После запуска узбекскоязычной версии платформы к Pink Coded присоединились более 500 девушек из Узбекистана — в основном из Ташкента, Самарканда и Намангана.\n\nМы открываем региональные хабы: Ташкент Hub (запуск 15 марта) и Самарканд Hub (запуск апрель 2026). В каждом хабе будут локальные менторы, еженедельные встречи и программы на узбекском языке.\n\n«Девушки из Узбекистана такие же талантливые, как и везде — им просто нужны возможности», — комментирует команда платформы.' }
];

const postData = [
  { title: 'Как я выучила Python за 30 дней и получила стажировку в Яндексе', author: 'Аяулым К., Алматы', date: '12 фев 2026', body: 'Привет, девочки! Делюсь своей историей — может, кому-то поможет.\n\nЯ начала изучать Python с нуля в январе 2025. Использовала курс «Основы Кодинга и AI» от Pink Coded + CS50 от Harvard (бесплатно на edX). Каждый день уделяла 1–2 часа вечером после учёбы.\n\nЧерез месяц я уже решала задачи на LeetCode (easy level). Через 3 месяца отправила резюме на стажировку в Яндекс — и прошла! Собеседование прошло легко, потому что я практиковалась на реальных проектах в рамках марафона Pink Coded.\n\nМой совет: не бойся начинать, даже если кажется, что ты ничего не знаешь. Каждый день по чуть-чуть — и через месяц ты не узнаешь себя. 💕' },
  { title: 'Поступила в MIT — вот полный гайд для девушек из Казахстана', author: 'Дана С., Шымкент', date: '8 фев 2026', body: 'Я Дана, мне 19 лет, я из Шымкента и я поступила в MIT на Computer Science. Вот полный гайд для тех, кто хочет повторить.\n\n📋 Документы:\n— Common App / QuestBridge\n— SAT (я набрала 1580) или ACT\n— IELTS 8.0 (готовилась по программе Pink Coded)\n— 3 рекомендательных письма\n\n✍️ Эссе:\nГлавное эссе на тему «Расскажи о себе» — пиши честно, с конкретными деталями. Я писала о том, как создала сайт для родителей в селе.\n\n🏆 Активности:\n— 2 место на республиканской олимпиаде по информатике\n— Победа в Pink Hackathon\n— Проект через Pink Coded\n\nЗадавайте вопросы в комментариях! Я отвечу всем 💕' },
  { title: 'Топ-5 бесплатных ресурсов для изучения Machine Learning с нуля', author: 'Зарина М., Нур-Султан', date: '5 фев 2026', body: 'Привет! Собрала для вас проверенные бесплатные ресурсы по ML:\n\n1. 🎓 CS229 от Stanford (YouTube) — лекции Andrew Ng, лучшее введение в ML\n2. 📚 fast.ai — практический курс, учишь через практику, не теорию\n3. 🤗 Hugging Face Course — если хочешь NLP и трансформеры\n4. 💻 Kaggle Learn — мини-курсы + реальные датасеты и соревнования\n5. 📖 «Hands-On Machine Learning» (Aurélien Géron) — лучшая книга, PDF есть бесплатно\n\nВсе ресурсы я лично прошла перед тем, как получить предложение о работе от Google Brain. Если есть вопросы — пишите! 💕' },
  { title: 'Как я подняла английский до IELTS 7.5 для поступления в STEM', author: 'Мадина Т., Караганда', date: '3 фев 2026', body: 'Я готовилась без дорогих школ: выбрала чёткий план, каждый день читала академические тексты, вела vocabulary notebook и тренировала speaking по таймеру.\n\nБольше всего помогли: Cambridge tests, YouTube-разборы Writing Task 2 и еженедельные созвоны с подругами из Pink Coded.\n\nГлавный совет — не учить язык абстрактно. Нужна цель: олимпиада, грант, университет, стажировка. Тогда прогресс становится измеримым.' },
  { title: 'Мы собрали MVP за 12 дней и получили первый грант на проект', author: 'Асель Н., Астана', date: '29 янв 2026', body: 'Наша команда начала с проблемы, а не с технологий. За первые два дня мы описали пользователя, затем собрали простой прототип и лендинг.\n\nПосле этого распределили роли: одна отвечает за фронтенд, одна за контент, одна за презентацию. Такой темп помог нам быстро показать идею и получить финансирование на доработку.\n\nЕсли у вас есть проект, не ждите идеального момента — соберите первую рабочую версию как можно раньше.' },
  { title: 'Как тренироваться по математике и алгоритмам перед олимпиадой', author: 'Аружан Б., Тараз', date: '25 янв 2026', body: 'Я делю неделю на блоки: теория чисел, комбинаторика, графы, один день на контест и один день на разбор ошибок.\n\nОчень помогает вести журнал ошибок: не просто решать задачи, а фиксировать, почему именно ты ошиблась и как заметить это в следующий раз.\n\nЕсли готовишься к олимпиадам, качество разбора важнее, чем просто количество решённых задач.' }
];

const eventInfo = {
  hackathon: { title: '⚡ Pink Hackathon Almaty 2026', info: '📅 1 марта 2026, 09:00\n📍 Алматы, Astana Hub\n👩 150 мест · Призы 2 000 000 тг' },
  python: { title: '🐍 Вебинар: Python для начинающих', info: '📅 10 марта 2026, 18:00–20:00\n🌐 Онлайн (Zoom)\n👩 500 мест · Бесплатно' },
  abroad: { title: '✈️ Воркшоп: Поступление за рубеж', info: '📅 20 марта 2026, 15:00–18:00\n🌐 Онлайн + Нур-Султан\n👩 200 мест' }
};

const practiceTasks = {
  sum: {
    difficulty: '🟢 Лёгкая',
    title: 'Сумма двух чисел',
    text: 'Считай из ввода два целых числа и выведи их сумму.',
    input: '2 5',
    output: '7',
    starter: `const [a, b] = readline().split(' ').map(Number);\nprint(a + b);`
  },
  max3: {
    difficulty: '🟡 Средняя',
    title: 'Максимум из трёх',
    text: 'Считай три числа из одной строки и выведи наибольшее из них.',
    input: '4 9 2',
    output: '9',
    starter: `const nums = readline().split(' ').map(Number);\nprint(Math.max(...nums));`
  },
  even: {
    difficulty: '🟢 Лёгкая',
    title: 'Проверка на чётность',
    text: 'Считай одно число. Если оно чётное, выведи EVEN, иначе ODD.',
    input: '11',
    output: 'ODD',
    starter: `const n = Number(readline());\nprint(n % 2 === 0 ? 'EVEN' : 'ODD');`
  }
};

let currentPracticeTask = 'sum';

function scrollToSection(selector) {
  document.querySelector(selector)?.scrollIntoView({ behavior: 'smooth' });
  closeAllDropdowns();
}

function openModal(id) {
  document.getElementById(id)?.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeModal(id) {
  document.getElementById(id)?.classList.remove('open');
  document.body.style.overflow = '';
}

function showToast(icon, title, msg) {
  const t = document.getElementById('toast');
  if (!t) return;
  document.getElementById('toastIcon').textContent = icon;
  document.getElementById('toastTitle').textContent = title;
  document.getElementById('toastMsg').textContent = msg;
  t.classList.add('show');
  setTimeout(() => t.classList.remove('show'), 4000);
}

function toggleDropdown(id, btn) {
  const dd = document.getElementById(id);
  const allDDs = document.querySelectorAll('.dropdown');
  const allBtns = document.querySelectorAll('.nav-btn');
  allDDs.forEach((d) => { if (d.id !== id) d.classList.remove('open'); });
  allBtns.forEach((b) => { if (b !== btn) b.classList.remove('open'); });
  dd?.classList.toggle('open');
  btn.classList.toggle('open');
}

function closeAllDropdowns() {
  document.querySelectorAll('.dropdown').forEach((d) => d.classList.remove('open'));
  document.querySelectorAll('.nav-btn').forEach((b) => b.classList.remove('open'));
}

function toggleMobileMenu() {
  document.getElementById('mobileMenu')?.classList.toggle('open');
}

function closeMobileMenu() {
  document.getElementById('mobileMenu')?.classList.remove('open');
}

function changeLang(lang) {
  const t = {
    ru: {
      join: 'Присоединиться ✨',
      navDirections: 'Направления <span class="arrow">▾</span>',
      navTechpark: 'Технопарк <span class="arrow">▾</span>',
      navPrograms: 'Программы',
      navPractice: 'Practice Lab',
      navNews: 'Новости',
      navEvents: 'События',
      navCommunity: 'Комьюнити',
      navLive: 'Live Campus',
      navGrants: 'Возможности',
      mobileRoles: '🎯 Выбрать роль',
      mobilePrograms: '📚 Программы',
      mobilePractice: '💻 Practice Lab',
      mobileNews: '📰 Новости',
      mobileEvents: '📅 События',
      mobileCommunity: '💬 Комьюнити',
      mobileBridge: '🌉 Digital Bridge',
      mobileLive: '🎥 Live Campus',
      mobileGrants: '💸 Возможности',
      mobileJoin: '✨ Присоединиться',
      heroBadge: '🌸 Сообщество для девушек в IT · Казахстан и СНГ',
      heroTitle: 'Превращай идеи<br>в код и проекты',
      heroSubtitle: 'Кодинг, английский, олимпиады, хакатоны и поступление за рубеж — всё это с поддержкой сестёр из твоего региона',
      heroPrimaryBtn: 'Начать сейчас 🚀',
      heroSecondaryBtn: 'Посмотреть программы',
      rolesTag: '🎯 Твой путь',
      rolesTitle: 'Кто ты в Pink Coded?',
      rolesSubtitle: 'Присоединяйся к сообществу, где девушки превращают идеи в код и проекты — выбери свою роль',
      programsTag: '📚 Обучение',
      programsTitle: 'Популярные программы',
      programsSubtitle: 'Развиваем навыки кодинга и английского в Центральной Азии, соединяя девушек с возможностями в проектах, олимпиадах и хакатонах',
      practiceTag: '💻 Practice Lab',
      practiceTitle: 'Задачи по кодингу как в Stepik, но прямо на сайте',
      practiceSubtitle: 'Выбирай задачу, пиши решение в редакторе, запускай код и сразу смотри: вывод совпал или нет. Сейчас доступен браузерный мини-компилятор для JavaScript.',
      tabBtnAll: 'Все программы',
      tabBtnCoding: '💻 Кодинг',
      tabBtnEnglish: '🇬🇧 Английский',
      tabBtnOlympiad: '🏆 Олимпиады',
      seeAllPrograms: 'Все программы →',
      newsTag: '📰 Новости',
      newsTitle: 'Последние новости',
      newsSubtitle: 'Следи за успехами наших участниц и обновлениями программ',
      eventsTag: '📅 События',
      eventsTitle: 'Предстоящие мероприятия',
      eventsSubtitle: 'Хакатоны, воркшопы и вебинары — участвуй вживую или онлайн',
      communityTag: '💬 Комьюнити',
      communityTitle: 'Комьюнити и знания',
      communitySubtitle: 'Читай посты, делись опытом, учись у других девушек в IT',
      liveTag: '🎥 Live Campus',
      liveTitle: 'Живые комнаты для уроков, созвонов и менторства',
      liveSubtitle: 'Внутри платформы можно проводить видео-встречи, мини-уроки, code review и групповые созвоны без перехода в Zoom',
      opportunitiesTag: '💸 Возможности и заработок',
      opportunitiesTitle: 'Компании могут оставлять задания, гранты и оплачиваемые треки',
      opportunitiesSubtitle: 'Партнёры, большие компании и менторы публикуют реальные задачи, мини-проекты и гранты, а участницы получают оплату, опыт и шанс на долгосрочное сотрудничество',
      opportunitiesStripTitle: 'Для компаний и сильных менторов',
      opportunitiesStripText: 'Вы можете публиковать задачи, оплачиваемые челленджи, учебные кейсы и гранты, чтобы находить талантливых девушек и собирать команды вокруг реальных продуктов.',
      bridgeTag: '🌉 Digital Bridge',
      bridgeTitle: 'Твой путь в Digital Bridge',
      bridgeSubtitle: '4 шага от новичка до участницы международных программ',
      footerProgramsTitle: 'Программы',
      footerCommunityTitle: 'Сообщество',
      footerContactsTitle: 'Контакты'
    },
    kk: {
      join: 'Қосылу ✨',
      navDirections: 'Бағыттар <span class="arrow">▾</span>',
      navTechpark: 'Технопарк <span class="arrow">▾</span>',
      navPrograms: 'Бағдарламалар',
      navPractice: 'Practice Lab',
      navNews: 'Жаңалықтар',
      navEvents: 'Оқиғалар',
      navCommunity: 'Қауымдастық',
      navLive: 'Live Campus',
      navGrants: 'Мүмкіндіктер',
      mobileRoles: '🎯 Рөлді таңдау',
      mobilePrograms: '📚 Бағдарламалар',
      mobilePractice: '💻 Practice Lab',
      mobileNews: '📰 Жаңалықтар',
      mobileEvents: '📅 Оқиғалар',
      mobileCommunity: '💬 Қауымдастық',
      mobileBridge: '🌉 Digital Bridge',
      mobileLive: '🎥 Live Campus',
      mobileGrants: '💸 Мүмкіндіктер',
      mobileJoin: '✨ Қосылу',
      heroBadge: '🌸 IT саласындағы қыздарға арналған қауымдастық · Қазақстан және ТМД',
      heroTitle: 'Идеяларды<br>код пен жобаға айналдыр',
      heroSubtitle: 'Кодинг, ағылшын тілі, олимпиадалар, хакатондар және шетелге түсу — барлығы өз аймағыңдағы қыздардың қолдауымен',
      heroPrimaryBtn: 'Қазір бастау 🚀',
      heroSecondaryBtn: 'Бағдарламаларды көру',
      rolesTag: '🎯 Сенің жолың',
      rolesTitle: 'Pink Coded-та сен кімсің?',
      rolesSubtitle: 'Идеяны код пен жобаға айналдыратын қыздар қауымына қосыл — өз рөліңді таңда',
      programsTag: '📚 Оқу',
      programsTitle: 'Танымал бағдарламалар',
      programsSubtitle: 'Орталық Азияда кодинг пен ағылшын дағдыларын дамытып, қыздарды жобалар, олимпиадалар және хакатондардағы мүмкіндіктермен байланыстырамыз',
      practiceTag: '💻 Practice Lab',
      practiceTitle: 'Stepik секілді кодинг тапсырмалары — тікелей сайт ішінде',
      practiceSubtitle: 'Тапсырманы таңда, редакторға код жаз, іске қос та нәтижені бірден көр. Қазір JavaScript үшін браузерлік мини-компилятор қосылған.',
      tabBtnAll: 'Барлық бағдарламалар',
      tabBtnCoding: '💻 Кодинг',
      tabBtnEnglish: '🇬🇧 Ағылшын',
      tabBtnOlympiad: '🏆 Олимпиадалар',
      seeAllPrograms: 'Барлық бағдарламалар →',
      newsTag: '📰 Жаңалықтар',
      newsTitle: 'Соңғы жаңалықтар',
      newsSubtitle: 'Қатысушыларымыздың жетістіктері мен бағдарлама жаңартуларын бақыла',
      eventsTag: '📅 Оқиғалар',
      eventsTitle: 'Алдағы іс-шаралар',
      eventsSubtitle: 'Хакатондар, воркшоптар және вебинарлар — офлайн не онлайн қатыс',
      communityTag: '💬 Қауымдастық',
      communityTitle: 'Қауымдастық пен білім',
      communitySubtitle: 'Посттар оқы, тәжірибе бөліс, IT саласындағы басқа қыздардан үйрен',
      liveTag: '🎥 Live Campus',
      liveTitle: 'Сабақтар, қоңыраулар және менторлыққа арналған тірі бөлмелер',
      liveSubtitle: 'Платформа ішінде Zoom-ға өтпей-ақ видео-кездесулер, шағын сабақтар, code review және топтық қоңыраулар өткізуге болады',
      opportunitiesTag: '💸 Мүмкіндіктер мен табыс',
      opportunitiesTitle: 'Компаниялар тапсырмалар, гранттар және ақылы тректер қалдыра алады',
      opportunitiesSubtitle: 'Серіктестер, ірі компаниялар мен менторлар нақты тапсырмалар, мини-жобалар мен гранттар жариялайды, ал қатысушылар төлем, тәжірибе және ұзақ серіктестік мүмкіндігін алады',
      opportunitiesStripTitle: 'Компаниялар мен күшті менторлар үшін',
      opportunitiesStripText: 'Сіз талантты қыздарды тауып, нақты өнімдер айналасында команда жинау үшін тапсырмалар, ақылы челлендждер, оқу кейстері мен гранттар жариялай аласыз.',
      bridgeTag: '🌉 Digital Bridge',
      bridgeTitle: 'Digital Bridge-тағы жолың',
      bridgeSubtitle: 'Жаңадан бастаушыдан халықаралық бағдарламалар қатысушысына дейінгі 4 қадам',
      footerProgramsTitle: 'Бағдарламалар',
      footerCommunityTitle: 'Қауымдастық',
      footerContactsTitle: 'Байланыс'
    },
    en: {
      join: 'Join ✨',
      navDirections: 'Tracks <span class="arrow">▾</span>',
      navTechpark: 'Tech Park <span class="arrow">▾</span>',
      navPrograms: 'Programs',
      navPractice: 'Practice Lab',
      navNews: 'News',
      navEvents: 'Events',
      navCommunity: 'Community',
      navLive: 'Live Campus',
      navGrants: 'Opportunities',
      mobileRoles: '🎯 Choose role',
      mobilePrograms: '📚 Programs',
      mobilePractice: '💻 Practice Lab',
      mobileNews: '📰 News',
      mobileEvents: '📅 Events',
      mobileCommunity: '💬 Community',
      mobileBridge: '🌉 Digital Bridge',
      mobileLive: '🎥 Live Campus',
      mobileGrants: '💸 Opportunities',
      mobileJoin: '✨ Join',
      heroBadge: '🌸 Community for girls in IT · Kazakhstan and CIS',
      heroTitle: 'Turn ideas<br>into code and projects',
      heroSubtitle: 'Coding, English, olympiads, hackathons, and studying abroad — all with support from sisters in your region',
      heroPrimaryBtn: 'Start now 🚀',
      heroSecondaryBtn: 'View programs',
      rolesTag: '🎯 Your path',
      rolesTitle: 'Who are you in Pink Coded?',
      rolesSubtitle: 'Join a community where girls turn ideas into code and projects — choose your role',
      programsTag: '📚 Learning',
      programsTitle: 'Popular programs',
      programsSubtitle: 'We build coding and English skills across Central Asia, connecting girls with opportunities in projects, olympiads, and hackathons',
      practiceTag: '💻 Practice Lab',
      practiceTitle: 'Coding tasks like Stepik, right on the site',
      practiceSubtitle: 'Choose a task, write a solution in the editor, run the code, and instantly see whether the output matches. A browser-based mini-compiler for JavaScript is available now.',
      tabBtnAll: 'All programs',
      tabBtnCoding: '💻 Coding',
      tabBtnEnglish: '🇬🇧 English',
      tabBtnOlympiad: '🏆 Olympiads',
      seeAllPrograms: 'All programs →',
      newsTag: '📰 News',
      newsTitle: 'Latest news',
      newsSubtitle: 'Follow the achievements of our members and program updates',
      eventsTag: '📅 Events',
      eventsTitle: 'Upcoming events',
      eventsSubtitle: 'Hackathons, workshops, and webinars — join offline or online',
      communityTag: '💬 Community',
      communityTitle: 'Community and knowledge',
      communitySubtitle: 'Read posts, share experience, and learn from other girls in IT',
      liveTag: '🎥 Live Campus',
      liveTitle: 'Live rooms for lessons, calls, and mentoring',
      liveSubtitle: 'Run video meetings, mini-lessons, code reviews, and group calls inside the platform without switching to Zoom',
      opportunitiesTag: '💸 Opportunities and earnings',
      opportunitiesTitle: 'Companies can post tasks, grants, and paid tracks',
      opportunitiesSubtitle: 'Partners, large companies, and mentors publish real tasks, mini-projects, and grants, while members get paid, gain experience, and build long-term collaborations',
      opportunitiesStripTitle: 'For companies and strong mentors',
      opportunitiesStripText: 'You can publish tasks, paid challenges, educational cases, and grants to find talented girls and build teams around real products.',
      bridgeTag: '🌉 Digital Bridge',
      bridgeTitle: 'Your path in Digital Bridge',
      bridgeSubtitle: '4 steps from beginner to participant in international programs',
      footerProgramsTitle: 'Programs',
      footerCommunityTitle: 'Community',
      footerContactsTitle: 'Contacts'
    }
  };
  const l = t[lang] || t.ru;
  const langMeta = {
    ru: {
      joinCountryLabel: 'Страна *',
      joinRegionLabel: 'Регион / город',
      practiceTitle: 'Задачи по кодингу прямо на сайте',
      practiceSubtitle: 'Выбирай задачу, пиши решение в редакторе, запускай код и сразу смотри результат. Сейчас доступен браузерный мини-компилятор для JavaScript.',
      navHackathons: 'Хакатоны',
      mobileHackathons: '🏁 Хакатоны',
      hackathonsTag: '🏁 Хакатоны',
      hackathonsTitle: 'Международные, республиканские и региональные хакатоны',
      hackathonsSubtitle: 'Выбирай формат по масштабу, теме и локации: от локальных спринтов до международных соревнований с призами и стажировками.',
      hackathonTabAll: 'Все',
      hackathonTabIntl: '🌍 Международные',
      hackathonTabNational: '🇰🇿 Республиканские',
      hackathonTabRegional: '📍 Региональные'
    },
    kk: {
      joinCountryLabel: 'Ел *',
      joinRegionLabel: 'Аймақ / қала',
      practiceTitle: 'Кодинг тапсырмалары тікелей сайт ішінде',
      practiceSubtitle: 'Тапсырманы таңда, редакторге шешім жаз, кодты іске қос және нәтижені бірден көр. Қазір JavaScript үшін браузерлік мини-компилятор бар.',
      navHackathons: 'Хакатондар',
      mobileHackathons: '🏁 Хакатондар',
      hackathonsTag: '🏁 Хакатондар',
      hackathonsTitle: 'Халықаралық, республикалық және өңірлік хакатондар',
      hackathonsSubtitle: 'Масштаб, тақырып және локация бойынша таңда: жергілікті спринттерден бастап сыйақысы мен тағылымдамасы бар халықаралық жарыстарға дейін.',
      hackathonTabAll: 'Барлығы',
      hackathonTabIntl: '🌍 Халықаралық',
      hackathonTabNational: '🇰🇿 Республикалық',
      hackathonTabRegional: '📍 Өңірлік'
    },
    en: {
      joinCountryLabel: 'Country *',
      joinRegionLabel: 'Region / city',
      practiceTitle: 'Coding tasks right on the site',
      practiceSubtitle: 'Choose a task, write a solution in the editor, run the code, and instantly see the result. A browser-based mini-compiler for JavaScript is available now.',
      navHackathons: 'Hackathons',
      mobileHackathons: '🏁 Hackathons',
      hackathonsTag: '🏁 Hackathons',
      hackathonsTitle: 'International, national, and regional hackathons',
      hackathonsSubtitle: 'Choose by scale, topic, and location: from local sprints to international competitions with prizes and internships.',
      hackathonTabAll: 'All',
      hackathonTabIntl: '🌍 International',
      hackathonTabNational: '🇰🇿 National',
      hackathonTabRegional: '📍 Regional'
    }
  };
  Object.assign(l, langMeta[lang] || langMeta.ru);

  document.querySelectorAll('.btn-join').forEach((b) => { b.textContent = l.join; });

  const htmlTargets = ['navDirections', 'navTechpark', 'heroBadge', 'heroTitle'];
  const textTargets = [
    'navPrograms', 'navPractice', 'navHackathons', 'navNews', 'navEvents', 'navCommunity', 'navLive', 'navGrants',
    'mobileRoles', 'mobilePrograms', 'mobilePractice', 'mobileHackathons', 'mobileNews', 'mobileEvents', 'mobileCommunity', 'mobileBridge', 'mobileLive', 'mobileGrants', 'mobileJoin',
    'heroSubtitle', 'heroPrimaryBtn', 'heroSecondaryBtn',
    'rolesTag', 'rolesTitle', 'rolesSubtitle',
    'programsTag', 'programsTitle', 'programsSubtitle', 'practiceTag', 'practiceTitle', 'practiceSubtitle', 'tabBtnAll', 'tabBtnCoding', 'tabBtnEnglish', 'tabBtnOlympiad', 'seeAllPrograms',
    'hackathonsTag', 'hackathonsTitle', 'hackathonsSubtitle', 'hackathonTabAll', 'hackathonTabIntl', 'hackathonTabNational', 'hackathonTabRegional',
    'newsTag', 'newsTitle', 'newsSubtitle',
    'eventsTag', 'eventsTitle', 'eventsSubtitle',
    'communityTag', 'communityTitle', 'communitySubtitle', 'liveTag', 'liveTitle', 'liveSubtitle',
    'opportunitiesTag', 'opportunitiesTitle', 'opportunitiesSubtitle', 'opportunitiesStripTitle', 'opportunitiesStripText',
    'bridgeTag', 'bridgeTitle', 'bridgeSubtitle',
    'joinCountryLabel', 'joinRegionLabel',
    'footerProgramsTitle', 'footerCommunityTitle', 'footerContactsTitle'
  ];

  htmlTargets.forEach((id) => {
    const el = document.getElementById(id);
    if (el && l[id]) el.innerHTML = l[id];
  });

  textTargets.forEach((id) => {
    const el = document.getElementById(id);
    if (el && l[id]) el.textContent = l[id];
  });

  updateRegionsByCountry(undefined, lang);
}

function switchTab(id) {
  document.querySelectorAll('.tab-btn').forEach((b) => b.classList.remove('active'));
  document.querySelectorAll('.tab-content').forEach((c) => c.classList.remove('active'));
  const btn = [...document.querySelectorAll('.tab-btn')].find((b) => b.getAttribute('onclick')?.includes(id));
  if (btn) btn.classList.add('active');
  const tab = document.getElementById(`tab-${id}`);
  if (tab) tab.classList.add('active');
}

function setPracticeStatus(message, type = '') {
  const status = document.getElementById('practiceStatus');
  if (!status) return;
  status.textContent = message;
  status.classList.remove('success', 'error');
  if (type) status.classList.add(type);
}

function loadPracticeTask(taskKey) {
  const task = practiceTasks[taskKey];
  if (!task) return;
  currentPracticeTask = taskKey;
  document.getElementById('practiceDifficulty').textContent = task.difficulty;
  document.getElementById('practiceProblemTitle').textContent = task.title;
  document.getElementById('practiceProblemText').textContent = task.text;
  document.getElementById('practiceExampleInput').textContent = task.input;
  document.getElementById('practiceExampleOutput').textContent = task.output;
  document.getElementById('practiceInput').value = task.input;
  document.getElementById('practiceOutput').value = '';
  document.getElementById('practiceCode').value = task.starter;
  setPracticeStatus('Задача загружена. Запусти код или проверь решение.');
}

function selectPracticeTask(taskKey) {
  document.querySelectorAll('.practice-task-btn').forEach((btn) => btn.classList.remove('active'));
  document.querySelector(`.practice-task-btn[data-task="${taskKey}"]`)?.classList.add('active');
  loadPracticeTask(taskKey);
}

function filterHackathons(scope, event) {
  document.querySelectorAll('#hackathons .tab-btn').forEach((btn) => btn.classList.remove('active'));
  event?.currentTarget?.classList.add('active');
  document.querySelectorAll('.hackathon-card').forEach((card) => {
    const visible = scope === 'all' || card.dataset.scope === scope;
    card.hidden = !visible;
  });
}

function resetPracticeCode() {
  loadPracticeTask(currentPracticeTask);
}

function executePracticeCode(code, input) {
  const lines = input.split('\n');
  let index = 0;
  const output = [];
  const readline = () => (index < lines.length ? lines[index++] : '');
  const print = (...args) => output.push(args.join(' '));
  const consoleMock = { log: (...args) => output.push(args.join(' ')) };

  const runner = new Function('readline', 'print', 'console', `"use strict";\n${code}`);
  runner(readline, print, consoleMock);
  return output.join('\n');
}

function runPracticeCode() {
  const code = document.getElementById('practiceCode').value;
  const input = document.getElementById('practiceInput').value;
  try {
    const result = executePracticeCode(code, input);
    document.getElementById('practiceOutput').value = result;
    setPracticeStatus('Код выполнен. Проверь вывод или нажми «Проверить решение».');
  } catch (error) {
    document.getElementById('practiceOutput').value = String(error.message || error);
    setPracticeStatus('Ошибка выполнения. Проверь синтаксис и логику кода.', 'error');
  }
}

function normalizeOutput(text) {
  return text.replace(/\r/g, '').trim();
}

function checkPracticeCode() {
  const code = document.getElementById('practiceCode').value;
  const input = document.getElementById('practiceInput').value;
  const expected = practiceTasks[currentPracticeTask].output;
  try {
    const result = executePracticeCode(code, input);
    document.getElementById('practiceOutput').value = result;
    if (normalizeOutput(result) === normalizeOutput(expected)) {
      setPracticeStatus('Правильно! Вывод совпадает с ожидаемым.', 'success');
    } else {
      setPracticeStatus(`Неправильно. Ожидалось: ${expected}`, 'error');
    }
  } catch (error) {
    document.getElementById('practiceOutput').value = String(error.message || error);
    setPracticeStatus('Ошибка выполнения. Исправь код и попробуй снова.', 'error');
  }
}

function openRoleModal(role) {
  const d = roleData[role];
  if (!d) return;
  document.getElementById('roleModalTitle').textContent = d.title;
  document.getElementById('roleModalContent').innerHTML = `
    <p style="color:var(--text-mid);margin-bottom:20px;">${d.desc}</p>
    <h4 style="font-size:14px;font-weight:800;margin-bottom:12px;color:var(--text);">Что тебя ждёт:</h4>
    <ul style="list-style:none;display:flex;flex-direction:column;gap:8px;margin-bottom:24px;">
      ${d.perks.map((p) => `<li style="display:flex;align-items:flex-start;gap:8px;font-size:14px;color:var(--text-mid);">${p}</li>`).join('')}
    </ul>
    <button class="btn-primary" style="width:100%;" onclick="closeModal('modalRole');openJoinWithRole('${role}')">Присоединиться в этой роли 🚀</button>`;
  openModal('modalRole');
}

function openProgramModal(key) {
  const d = programData[key];
  if (!d) return;
  document.getElementById('progModalTitle').textContent = d.title;
  document.getElementById('progModalContent').innerHTML = `
    <span class="card-tag tag-lav" style="margin-bottom:12px;display:inline-block;">${d.tag}</span>
    <p style="color:var(--text-mid);margin-bottom:20px;font-size:15px;">${d.desc}</p>
    <h4 style="font-size:14px;font-weight:800;margin-bottom:12px;">Что тебя ждёт:</h4>
    <ul style="list-style:none;display:flex;flex-direction:column;gap:8px;margin-bottom:8px;">
      ${d.tasks.map((t) => `<li style="font-size:14px;color:var(--text-mid);padding:4px 0;">${t}</li>`).join('')}
    </ul>`;
  document.getElementById('progApplyWrap').style.display = 'block';
  document.getElementById('progSuccess').style.display = 'none';
  document.getElementById('progName').value = '';
  document.getElementById('progEmail').value = '';
  document.getElementById('progMotivation').value = '';
  openModal('modalProgram');
}

function submitProgram() {
  const name = document.getElementById('progName').value.trim();
  const email = document.getElementById('progEmail').value.trim();
  if (!name || !email || !email.includes('@')) {
    showToast('⚠️', 'Заполни форму', 'Введи имя и корректный email');
    return;
  }
  saveProgress('lastApply', { name, email, date: new Date().toISOString() });
  document.getElementById('progApplyWrap').style.display = 'none';
  document.getElementById('progSuccess').style.display = 'block';
  showToast('🎉', 'Заявка принята!', 'Проверь почту — мы написали тебе 💕');
}

function openEventModal(key) {
  const d = eventInfo[key];
  if (!d) return;
  document.getElementById('eventModalTitle').textContent = d.title;
  document.getElementById('eventModalContent').innerHTML = `<p style="white-space:pre-line;color:var(--text-mid);margin-bottom:20px;">${d.info}</p>`;
  document.getElementById('eventRegWrap').style.display = 'block';
  document.getElementById('evSuccess').style.display = 'none';
  document.getElementById('evName').value = '';
  document.getElementById('evEmail').value = '';
  document.getElementById('evTg').value = '';
  openModal('modalEvent');
}

function submitEvent() {
  const name = document.getElementById('evName').value.trim();
  const email = document.getElementById('evEmail').value.trim();
  if (!name || !email || !email.includes('@')) {
    showToast('⚠️', 'Заполни форму', 'Введи имя и корректный email');
    return;
  }
  document.getElementById('eventRegWrap').style.display = 'none';
  document.getElementById('evSuccess').style.display = 'block';
  showToast('🎉', 'Зарегистрирована!', 'Напоминание придёт за день до события 📅');
}

function updateRegionsByCountry(countryOverride, langOverride) {
  const countrySelect = document.getElementById('joinCountry');
  const regionSelect = document.getElementById('joinRegion');
  if (!countrySelect || !regionSelect) return;

  const langSelect = document.querySelector('.lang-select');
  const lang = langOverride || langSelect?.value || 'ru';
  const country = countryOverride ?? countrySelect.value;
  const previousValue = regionSelect.value;

  const regionText = {
    ru: {
      chooseCountry: 'Выбери страну',
      chooseRegion: 'Выбери регион',
      pickCountryFirst: 'Сначала выбери страну',
      countries: {
        kazakhstan: 'Казахстан',
        uzbekistan: 'Узбекистан',
        kyrgyzstan: 'Кыргызстан',
        other_cis: 'Другая страна СНГ'
      },
      regions: {
        kazakhstan: ['Алматы', 'Астана', 'Шымкент', 'Атырау', 'Караганда', 'Туркестанская область', 'Другой регион Казахстана'],
        uzbekistan: ['Ташкент', 'Самарканд', 'Наманган', 'Фергана', 'Другой регион Узбекистана'],
        kyrgyzstan: ['Бишкек', 'Ош', 'Джалал-Абад', 'Другой регион Кыргызстана'],
        other_cis: ['Азербайджан', 'Таджикистан', 'Туркменистан', 'Армения', 'Другая страна / регион СНГ']
      }
    },
    kk: {
      chooseCountry: 'Елді таңда',
      chooseRegion: 'Аймақты таңда',
      pickCountryFirst: 'Алдымен елді таңда',
      countries: {
        kazakhstan: 'Қазақстан',
        uzbekistan: 'Өзбекстан',
        kyrgyzstan: 'Қырғызстан',
        other_cis: 'ТМД-ның басқа елі'
      },
      regions: {
        kazakhstan: ['Алматы', 'Астана', 'Шымкент', 'Атырау', 'Қарағанды', 'Түркістан облысы', 'Қазақстанның басқа өңірі'],
        uzbekistan: ['Ташкент', 'Самарқанд', 'Наманган', 'Ферғана', 'Өзбекстанның басқа өңірі'],
        kyrgyzstan: ['Бішкек', 'Ош', 'Жалал-Абад', 'Қырғызстанның басқа өңірі'],
        other_cis: ['Әзербайжан', 'Тәжікстан', 'Түрікменстан', 'Армения', 'ТМД-ның басқа елі / өңірі']
      }
    },
    en: {
      chooseCountry: 'Choose country',
      chooseRegion: 'Choose region',
      pickCountryFirst: 'Select a country first',
      countries: {
        kazakhstan: 'Kazakhstan',
        uzbekistan: 'Uzbekistan',
        kyrgyzstan: 'Kyrgyzstan',
        other_cis: 'Other CIS country'
      },
      regions: {
        kazakhstan: ['Almaty', 'Astana', 'Shymkent', 'Atyrau', 'Karaganda', 'Turkistan Region', 'Other region of Kazakhstan'],
        uzbekistan: ['Tashkent', 'Samarkand', 'Namangan', 'Fergana', 'Other region of Uzbekistan'],
        kyrgyzstan: ['Bishkek', 'Osh', 'Jalal-Abad', 'Other region of Kyrgyzstan'],
        other_cis: ['Azerbaijan', 'Tajikistan', 'Turkmenistan', 'Armenia', 'Other CIS country / region']
      }
    }
  };

  const ui = regionText[lang] || regionText.ru;
  countrySelect.options[0].textContent = ui.chooseCountry;
  Array.from(countrySelect.options).slice(1).forEach((option) => {
    if (ui.countries[option.value]) option.textContent = ui.countries[option.value];
  });

  if (!country || !ui.regions[country]) {
    regionSelect.innerHTML = `<option value="">${ui.pickCountryFirst}</option>`;
    return;
  }

  regionSelect.innerHTML = [`<option value="">${ui.chooseRegion}</option>`]
    .concat(ui.regions[country].map((region) => `<option value="${region}">${region}</option>`))
    .join('');

  if (ui.regions[country].includes(previousValue)) {
    regionSelect.value = previousValue;
  }
}

function submitJoinForm() {
  const name = document.getElementById('joinName').value.trim();
  const age = document.getElementById('joinAge').value;
  const country = document.getElementById('joinCountry')?.value || '';
  const email = document.getElementById('joinEmail').value.trim();
  let ok = true;
  ['joinName', 'joinAge', 'joinEmail'].forEach((id) => {
    const err = document.getElementById(`err-${id}`);
    if (err) err.style.display = 'none';
    document.getElementById(id).classList.remove('error');
  });
  if (document.getElementById('joinCountry')) {
    document.getElementById('joinCountry').classList.remove('error');
  }
  if (!name) { showError('joinName'); ok = false; }
  if (!age) { showError('joinAge'); ok = false; }
  if (!country && document.getElementById('joinCountry')) {
    document.getElementById('joinCountry').classList.add('error');
    ok = false;
  }
  if (!email || !email.includes('@')) { showError('joinEmail'); ok = false; }
  if (!ok) return;
  saveProgress('user', { name, age, country, email, joined: new Date().toISOString() });
  document.getElementById('joinFormWrap').style.display = 'none';
  document.getElementById('joinSuccess').style.display = 'block';
  showToast('🎉', 'Добро пожаловать!', `Привет, ${name}! Ты теперь часть сообщества 💕`);
}

function showError(id) {
  document.getElementById(id).classList.add('error');
  document.getElementById(`err-${id}`).style.display = 'block';
}

function openNewsModal(i) {
  const d = newsData[i];
  if (!d) return;
  document.getElementById('newsModalTitle').textContent = d.title;
  document.getElementById('newsModalContent').innerHTML = `
    <p style="font-size:12px;color:var(--text-light);margin-bottom:16px;font-weight:700;">📅 ${d.date}</p>
    <div style="font-size:15px;color:var(--text-mid);line-height:1.8;white-space:pre-line;">${d.body}</div>
    <div style="margin-top:24px;padding-top:20px;border-top:1px solid var(--border);">
      <button class="btn-secondary" onclick="closeModal('modalNews')">← Назад к новостям</button>
    </div>`;
  openModal('modalNews');
}

function openAllNewsModal() {
  document.getElementById('newsModalTitle').textContent = '📰 Все новости';
  document.getElementById('newsModalContent').innerHTML = newsData.map((d, i) => `
    <div style="padding:16px 0;border-bottom:1px solid var(--border);cursor:pointer;" onclick="openNewsModal(${i})">
      <div style="font-size:11px;color:var(--text-light);font-weight:700;margin-bottom:6px;">📅 ${d.date}</div>
      <div style="font-size:15px;font-weight:800;color:var(--text);">${d.title}</div>
      <div style="font-size:13px;color:var(--text-mid);margin-top:4px;">${d.body.substring(0,100)}...</div>
    </div>`).join('');
  openModal('modalNews');
}

function filterPosts(cat, event) {
  document.querySelectorAll('.cat-item').forEach((c) => c.classList.remove('active'));
  event.currentTarget.classList.add('active');
  let visibleCount = 0;
  document.querySelectorAll('.post-card').forEach((p) => {
    const isVisible = cat === 'all' || p.dataset.cat === cat;
    p.style.display = isVisible ? 'block' : 'none';
    if (isVisible) visibleCount += 1;
  });
  const empty = document.getElementById('postsEmpty');
  if (empty) empty.style.display = visibleCount === 0 ? 'block' : 'none';
}

function openPostModal(i) {
  const d = postData[i];
  if (!d) return;
  document.getElementById('postModalTitle').textContent = d.title;
  document.getElementById('postModalContent').innerHTML = `
    <div style="display:flex;gap:16px;align-items:center;margin-bottom:16px;">
      <div style="width:44px;height:44px;background:linear-gradient(135deg,var(--pink),var(--lavender));border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:20px;flex-shrink:0;">👩</div>
      <div><div style="font-weight:800;font-size:14px;">${d.author}</div><div style="font-size:12px;color:var(--text-light);">📅 ${d.date}</div></div>
    </div>
    <div style="font-size:15px;color:var(--text-mid);line-height:1.8;white-space:pre-line;">${d.body}</div>
    <div style="margin-top:24px;display:flex;gap:12px;">
      <button onclick="showToast('❤️','Лайк!','Ты лайкнула этот пост 💕')" style="background:var(--pink-pale);color:var(--pink);border:none;padding:8px 16px;border-radius:10px;font-weight:700;cursor:pointer;">❤️ Лайкнуть</button>
      <button onclick="showToast('💬','Комментарий','Функция будет доступна после регистрации')" style="background:var(--lav-soft);color:var(--purple-mid);border:none;padding:8px 16px;border-radius:10px;font-weight:700;cursor:pointer;">💬 Комментировать</button>
    </div>`;
  openModal('modalPost');
}

function saveProgress(key, val) {
  try { localStorage.setItem(`pc_${key}`, JSON.stringify(val)); } catch (e) {}
}

function getProgress(key) {
  try {
    const d = localStorage.getItem(`pc_${key}`);
    return d ? JSON.parse(d) : null;
  } catch (e) {
    return null;
  }
}

function initProgressBars() {
  const progs = [{ id:'prog1-progress', key:'bootcamp', pct:0 }, { id:'prog2-progress', key:'ai', pct:30 }, { id:'prog3-progress', key:'marathon', pct:60 }];
  progs.forEach((p) => {
    const el = document.getElementById(p.id);
    if (!el) return;
    const saved = getProgress(`prog_${p.key}`);
    const pct = saved?.pct || p.pct;
    if (pct > 0) {
      el.innerHTML = `<div class="progress-bar"><div class="progress-fill" style="width:${pct}%"></div></div><div class="progress-text">${pct}% пройдено</div>`;
    }
  });
}

function showSection(section) {
  const map = {
    projects: '#community',
    partners: '#roles',
    members: '#community',
    sponsors: '#programs',
    research: '#programs',
    regional: '#bridge'
  };
  scrollToSection(map[section] || '#hero');
}

function reorderMiddleSections() {
  const practiceLab = document.getElementById('practiceLab');
  const opportunities = document.getElementById('opportunities');
  const liveCampus = document.getElementById('liveCampus');
  const hackathons = document.getElementById('hackathons');
  const community = document.getElementById('community');
  const news = document.getElementById('news');
  if (!practiceLab || !opportunities || !liveCampus || !community || !news) return;

  practiceLab.insertAdjacentElement('afterend', opportunities);
  opportunities.insertAdjacentElement('afterend', liveCampus);
  if (hackathons) {
    liveCampus.insertAdjacentElement('afterend', hackathons);
    hackathons.insertAdjacentElement('afterend', news);
  } else {
    liveCampus.insertAdjacentElement('afterend', news);
  }
  news.insertAdjacentElement('afterend', community);
}

function openJoinWithRole(role) {
  openModal('modalJoin');
  setTimeout(() => { document.getElementById('joinRole').value = role; }, 100);
}

document.addEventListener('click', (e) => {
  if (!e.target.closest('.nav-item')) closeAllDropdowns();
});

document.querySelectorAll('.overlay').forEach((o) => {
  o.addEventListener('click', (e) => { if (e.target === o) closeModal(o.id); });
});

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    document.querySelectorAll('.overlay.open').forEach((o) => closeModal(o.id));
    closeMobileMenu();
  }
});

window.addEventListener('DOMContentLoaded', () => {
  initProgressBars();
  loadPracticeTask(currentPracticeTask);
  reorderMiddleSections();
  updateRegionsByCountry();
  const user = getProgress('user');
  if (user && user.name) {
    document.querySelectorAll('.btn-join').forEach((b) => {
      b.textContent = `Привет, ${user.name.split(' ')[0]}! ✨`;
    });
  }
});
