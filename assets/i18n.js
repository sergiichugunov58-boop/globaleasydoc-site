/* ===================================================================
   Словарь переводов. Ключи — плоские строки в формате "раздел.поле".
   Используются в data-i18n / data-i18n-placeholder атрибутах в HTML.
   =================================================================== */
const translations = {
  ru: {
    "nav.services": "Услуги",
    "nav.vnzh": "ВНЖ",
    "nav.prava": "Права",
    "nav.reviews": "Отзывы",
    "nav.faq": "FAQ",
    "common.from": "от",
    "common.more": "Подробнее",
    "common.cta.free_consult": "Бесплатная консультация в WhatsApp",
    "common.cta.telegram": "Написать в Telegram",
    "common.cta.whatsapp_write": "Написать в WhatsApp",
    "form.success": "Заявка отправлена. Мы свяжемся с вами в ближайшее время.",

    "footer.about": "Официальное сопровождение при оформлении ВНЖ, замене водительских прав и других документов в Турции с 2019 года.",
    "footer.services.heading": "Услуги",
    "footer.link.vnzh": "ВНЖ в Турции",
    "footer.link.prava": "Замена прав",
    "footer.link.uslugi": "Дополнительные услуги",
    "footer.contacts.heading": "Контакты",
    "footer.email.note": "[заменить на почту на собственном домене]",
    "footer.address": "[адрес компании]",
    "footer.write.heading": "Написать нам",
    "footer.copyright": "© 2026 Global Easy Doc. Все права защищены.",
    "footer.legalline": "[название юрлица], [страна регистрации], рег. номер [рег. номер]",

    /* ---- Главная ---- */
    "idx.hero.badge": "Официальное сопровождение с 2019 года",
    "idx.hero.title": "ВНЖ в Турции и замена водительских прав — без языка, очередей и лишних рисков",
    "idx.hero.desc": "Ведём клиента от первичной консультации до получения документа на руки. Работаем по договору и объясняем каждый шаг заранее — без обещаний «всё решим» без деталей.",
    "idx.stat.clients": "клиентов с 2019 года",
    "idx.stat.success": "успешных случаев",
    "idx.stat.years": "лет на рынке Турции",

    "idx.services.eyebrow": "Основные направления",
    "idx.services.title": "Две услуги, с которых обычно начинают",
    "idx.service.vnzh.title": "Вид на жительство в Турции (Икамет)",
    "idx.service.vnzh.desc": "Основная услуга компании: подбор программы, сбор и проверка документов, запись и сопровождение на подачу, контроль статуса дела вплоть до получения карты.",
    "idx.service.vnzh.li1": "Рассматриваем сложные случаи, включая предыдущие отказы",
    "idx.service.vnzh.li2": "Оформление на 1, 2 или 3 года",
    "idx.service.vnzh.li3": "Полное сопровождение без знания турецкого языка",
    "idx.service.prava.badge": "Быстрый старт",
    "idx.service.prava.title": "Замена водительских прав",
    "idx.service.prava.desc": "Самый быстрый способ начать работу с нами: без турецкого языка, без очередей, с гарантированным результатом.",
    "idx.services.link_more": "Смотреть остальные услуги (Испания, Польша, Германия и другие)",

    "idx.why.eyebrow": "Почему выбирают нас",
    "idx.why.title": "Работаем официально и объясняем каждый шаг",
    "idx.why.1.title": "Работаем по договору",
    "idx.why.1.desc": "Все услуги оформляются официально, с фиксацией условий и сроков.",
    "idx.why.2.title": "Опыт сложных случаев",
    "idx.why.2.desc": "Беремся за дела, от которых отказываются другие, включая предыдущие отказы.",
    "idx.why.3.title": "Честные сроки",
    "idx.why.3.desc": "Называем реалистичные сроки и открыто говорим о возможных задержках.",
    "idx.why.4.title": "Сопровождение на каждом этапе",
    "idx.why.4.desc": "Ведём клиента от консультации до получения документов на руки.",

    "idx.legal.title": "Официальный статус работы",
    "idx.legal.desc": "Компания работает открыто, с указанием юридических реквизитов и условий сотрудничества до начала работы.",
    "idx.legal.entity.label": "Юридическое лицо",
    "idx.legal.country.label": "Страна регистрации",
    "idx.legal.reg.label": "Регистрационный номер",
    "idx.legal.guarantee.label": "Что гарантируется по договору",
    "idx.legal.guarantee.value": "Объём работ, сроки этапов и условия возврата фиксируются в договоре до старта — без устных договорённостей.",

    "idx.process.eyebrow": "Процесс",
    "idx.process.title": "Как проходит работа с нами",
    "idx.process.1.title": "Консультация",
    "idx.process.1.desc": "Разбираем вашу ситуацию, называем реальные шансы, сроки и стоимость.",
    "idx.process.2.title": "Документы",
    "idx.process.2.desc": "Собираем и проверяем пакет документов, минимизируя риск отказа.",
    "idx.process.3.title": "Запись и подача",
    "idx.process.3.desc": "Бронируем ближайшую дату в миграционной службе и готовим вас к визиту.",
    "idx.process.4.title": "Контроль статуса",
    "idx.process.4.desc": "Отслеживаем движение дела и держим вас в курсе на каждом этапе.",
    "idx.process.5.title": "Получение документа",
    "idx.process.5.desc": "Вы получаете готовый документ на руки, мы остаемся на связи по дальнейшим вопросам.",

    "idx.reviews.eyebrow": "Отзывы",
    "idx.reviews.title": "Что говорят клиенты",
    "review1.name": "Марат К.",
    "review1.country": "Казахстан",
    "review1.service": "Услуга: ВНЖ Турция",
    "review1.text": "У меня уже был один отказ до этого. Ребята разобрали причину, пересобрали документы заново и в этот раз все прошло без проблем.",
    "review2.name": "Виктория С.",
    "review2.country": "Россия",
    "review2.service": "Услуга: Замена прав",
    "review2.text": "Боялась, что без турецкого языка будет сложно. В итоге всё сделали за меня, я только съездила на медосмотр и забрала права.",
    "review3.name": "Амина Т.",
    "review3.country": "Беларусь",
    "review3.service": "Услуга: Банковский счёт + ВНЖ",
    "review3.text": "Понравилось, что на консультации сразу назвали реальные сроки, без приукрашивания. В итоге всё прошло даже немного быстрее.",
    "review.date": "[дата отзыва]",

    "idx.faq.eyebrow": "FAQ",
    "idx.faq.title": "Частые вопросы",
    "idx.faq1.q": "Что если у меня уже был отказ ранее?",
    "idx.faq1.a": "Мы отдельно разбираем причину предыдущего отказа перед тем, как подавать документы повторно. Часто дело в неполном пакете документов или формальной ошибке — это можно исправить.",
    "idx.faq2.q": "Нужно ли мне знать турецкий или английский язык?",
    "idx.faq2.a": "Нет. Мы сопровождаем клиента на всех этапах, включая визиты в госорганы, поэтому знание языка не требуется.",
    "idx.faq3.q": "Что будет, если мне снова откажут?",
    "idx.faq3.a": "Условия на случай отказа фиксируются в договоре до начала работы — включая порядок повторной подачи или возврата части оплаты, в зависимости от причины отказа.",
    "idx.faq4.q": "Какие риски есть в процессе и как вы их снижаете?",
    "idx.faq4.a": "Основной риск — неполный или неверно оформленный пакет документов. Мы проверяем каждый документ перед подачей и заранее сообщаем, если в вашем случае есть нестандартные нюансы.",

    "idx.finalcta.title": "Разберём вашу ситуацию бесплатно",
    "idx.finalcta.desc": "Оставьте заявку — ответим в течение 15 минут и назовём реалистичный план действий: сроки, стоимость и что потребуется с вашей стороны.",
    "form.name.label": "Имя",
    "form.name.placeholder": "Как к вам обращаться",
    "form.phone.label": "Телефон или WhatsApp",
    "form.service.label": "Интересующая услуга",
    "form.service.opt1": "ВНЖ в Турции",
    "form.service.opt2": "Замена водительских прав",
    "form.service.opt3": "Другая услуга",
    "form.submit": "Отправить заявку",
    "form.disclaimer": "Отправляя форму, вы соглашаетесь с условиями обработки данных.",

    /* ---- ВНЖ ---- */
    "vnzh.badge": "Основная услуга",
    "vnzh.hero.desc": "Полное сопровождение оформления ВНЖ: от подбора программы до получения карты на руки. Работаем с обычными и сложными случаями, включая предыдущие отказы.",
    "vnzh.plans.eyebrow": "Варианты оформления",
    "vnzh.plans.title": "На какой срок можно оформить ВНЖ",
    "vnzh.plan1.title": "1 год",
    "vnzh.plan1.desc": "Базовый вариант для первичного оформления или краткосрочного пребывания.",
    "vnzh.plan2.badge": "Популярный выбор",
    "vnzh.plan2.title": "2 года",
    "vnzh.plan2.desc": "Оптимальный баланс срока действия и стоимости продления.",
    "vnzh.plan3.title": "3 года",
    "vnzh.plan3.desc": "Для тех, кто планирует пребывание в Турции на длительный срок.",
    "vnzh.included.title": "Что входит в сопровождение",
    "vnzh.included.li1": "Консультация и подбор оптимальной программы",
    "vnzh.included.li2": "Сбор и проверка полного пакета документов",
    "vnzh.included.li3": "Оформление медицинской страховки (SGK/частная)",
    "vnzh.included.li4": "Запись на подачу в миграционную службу",
    "vnzh.included.li5": "Сопровождение на визит без знания языка",
    "vnzh.included.li6": "Контроль статуса дела до получения карты",
    "vnzh.docs.title": "Какие документы потребуются",
    "vnzh.docs.li1": "Загранпаспорт со сроком действия от [срок]",
    "vnzh.docs.li2": "Фотографии установленного образца",
    "vnzh.docs.li3": "Подтверждение адреса проживания",
    "vnzh.docs.li4": "Финансовое подтверждение (при необходимости)",
    "vnzh.docs.li5": "Полис медицинского страхования",
    "vnzh.docs.note": "Точный список зависит от вашей ситуации — уточняем на бесплатной консультации.",
    "vnzh.faq.eyebrow": "FAQ",
    "vnzh.faq.title": "Вопросы про ВНЖ",
    "vnzh.faq1.q": "Можно ли оформить ВНЖ после отказа?",
    "vnzh.faq1.a": "Да, но перед повторной подачей мы обязательно разбираем причину предыдущего отказа и устраняем её в новом пакете документов.",
    "vnzh.faq2.q": "Сколько времени занимает оформление?",
    "vnzh.faq2.a": "Ориентировочный срок — от [срок]. Точный срок зависит от загруженности миграционной службы в вашем регионе и указывается на консультации.",
    "vnzh.faq3.q": "Нужно ли мне лично присутствовать в Турции?",
    "vnzh.faq3.a": "Личное присутствие требуется только на этапе подачи биометрии и получения карты — всё остальное мы готовим удалённо.",
    "vnzh.cta.title": "Узнайте свои шансы на ВНЖ бесплатно",
    "vnzh.cta.desc": "Ответим в течение 15 минут и предложим план действий под вашу ситуацию.",

    /* ---- Права ---- */
    "prava.hero.title": "Замена водительских прав на турецкие",
    "prava.hero.desc": "Самая быстрая услуга компании: без турецкого языка, без очередей и с гарантированным результатом.",
    "prava.badge.time": "от [срок]",
    "prava.badge.lang": "Без знания турецкого",
    "prava.included.eyebrow": "Что входит",
    "prava.included.title": "Полное сопровождение замены прав",
    "prava.card1.title": "Запись без очереди",
    "prava.card1.desc": "Бронируем ближайшую доступную дату и готовим вас к визиту.",
    "prava.card2.title": "Медицинский осмотр",
    "prava.card2.desc": "Помогаем пройти обязательный медосмотр и получить справку.",
    "prava.card3.title": "Перевод и нотариат",
    "prava.card3.desc": "Оформляем нотариальный перевод оригинальных прав.",
    "prava.card4.title": "Получение прав",
    "prava.card4.desc": "Сопровождаем до момента получения турецких прав на руки.",
    "prava.docs.title": "Что потребуется от вас",
    "prava.docs.li1": "Оригинал действующих водительских прав",
    "prava.docs.li2": "Загранпаспорт",
    "prava.docs.li3": "Действующий ВНЖ или другое подтверждение проживания в Турции",
    "prava.docs.li4": "Фотографии установленного образца",
    "prava.faq.eyebrow": "FAQ",
    "prava.faq.title": "Вопросы про замену прав",
    "prava.faq1.q": "Нужно ли сдавать экзамен по вождению?",
    "prava.faq1.a": "Для граждан большинства стран экзамен не требуется — права меняются на основании действующего иностранного удостоверения и медицинской справки.",
    "prava.faq2.q": "Что если мои права уже недействительны в родной стране?",
    "prava.faq2.a": "Для замены необходимо, чтобы оригинал прав был действителен на момент подачи — этот момент мы уточняем перед началом работы.",
    "prava.cta.title": "Начните с самой быстрой услуги",
    "prava.cta.desc": "Напишите нам — назовём точный срок и стоимость под ваш случай.",

    /* ---- Доп. услуги ---- */
    "uslugi.hero.title": "Дополнительные услуги для релокации в Европу",
    "uslugi.hero.desc": "Помимо Турции, сопровождаем оформление документов в Испании, Польше и Германии — под конкретную задачу переезда, работы или банковских операций.",
    "uslugi.card1.title": "NIE в Испании",
    "uslugi.card1.desc": "Идентификационный номер иностранца — необходим для аренды жилья, банковских операций и оформления документов.",
    "uslugi.card2.title": "Регистрация компании в Польше",
    "uslugi.card2.desc": "Оформление бизнеса для легальной работы в ЕС, включая налоговый номер и полное сопровождение процесса.",
    "uslugi.card3.title": "Регистрация адреса в Германии",
    "uslugi.card3.desc": "Официальная регистрация проживания (Anmeldung) — требуется для банка, страховки и ВНЖ.",
    "uslugi.card4.title": "Страхование в Турции",
    "uslugi.card4.desc": "Обязательное медицинское страхование для ВНЖ, а также страхование имущества (DASK) и автомобиля.",
    "uslugi.card5.title": "Открытие банковского счёта",
    "uslugi.card5.desc": "Оформление счёта в турецком банке с мультивалютной картой и настройкой мобильного банкинга.",
    "uslugi.card6.title": "Не нашли нужную услугу?",
    "uslugi.card6.desc": "Работаем и с нетиповыми запросами — опишите вашу ситуацию, подберём решение индивидуально.",
    "uslugi.card6.link": "Задать вопрос",
    "uslugi.cta.title": "Обсудим, какая услуга подходит именно вам",
    "uslugi.cta.desc": "Бесплатная консультация — разберём цель переезда и предложим маршрут оформления документов.",

    "alt.hero.index": "Панорама Стамбула с видом на Босфор",
    "alt.service.vnzh": "Консультант передаёт клиенту документы на оформление ВНЖ",
    "alt.service.prava": "Руки на руле автомобиля во время поездки по Турции",
    "alt.process.1": "Рукопожатие консультанта и клиента на встрече",
    "alt.process.2": "Подготовка и подписание документов",
    "alt.process.3": "Планирование даты записи в календаре",
    "alt.process.4": "Контроль статуса дела на ноутбуке и телефоне",
    "alt.process.5": "Передача готового документа клиенту",
    "alt.review.1": "Портрет клиента Марата К.",
    "alt.review.2": "Портрет клиентки Виктории С.",
    "alt.review.3": "Портрет клиентки Амины Т."
  },

  en: {
    "nav.services": "Services",
    "nav.vnzh": "Residence permit",
    "nav.prava": "Driving licence",
    "nav.reviews": "Reviews",
    "nav.faq": "FAQ",
    "common.from": "from",
    "common.more": "Learn more",
    "common.cta.free_consult": "Free consultation on WhatsApp",
    "common.cta.telegram": "Message us on Telegram",
    "common.cta.whatsapp_write": "Message us on WhatsApp",
    "form.success": "Request sent. We'll contact you shortly.",

    "footer.about": "Official support for residence permits, driving licence exchange and other documents in Turkey since 2019.",
    "footer.services.heading": "Services",
    "footer.link.vnzh": "Turkish residence permit",
    "footer.link.prava": "Driving licence exchange",
    "footer.link.uslugi": "Additional services",
    "footer.contacts.heading": "Contacts",
    "footer.email.note": "[replace with an email on your own domain]",
    "footer.address": "[company address]",
    "footer.write.heading": "Contact us",
    "footer.copyright": "© 2026 Global Easy Doc. All rights reserved.",
    "footer.legalline": "[legal entity name], [country of registration], reg. number [reg. number]",

    /* ---- Home ---- */
    "idx.hero.badge": "Official support since 2019",
    "idx.hero.title": "Turkish residence permit and driving licence exchange — no language, no queues, no unnecessary risk",
    "idx.hero.desc": "We guide you from the first consultation to receiving your document. We work under contract and explain every step in advance — no vague promises without detail.",
    "idx.stat.clients": "clients since 2019",
    "idx.stat.success": "successful cases",
    "idx.stat.years": "years on the Turkish market",

    "idx.services.eyebrow": "Main services",
    "idx.services.title": "Two services most clients start with",
    "idx.service.vnzh.title": "Turkish residence permit (Ikamet)",
    "idx.service.vnzh.desc": "Our core service: choosing the right program, preparing and checking documents, booking and accompanying the application, and tracking your case until you receive the card.",
    "idx.service.vnzh.li1": "We take on complex cases, including previous refusals",
    "idx.service.vnzh.li2": "Permits for 1, 2 or 3 years",
    "idx.service.vnzh.li3": "Full support with no Turkish language required",
    "idx.service.prava.badge": "Quick start",
    "idx.service.prava.title": "Driving licence exchange",
    "idx.service.prava.desc": "The fastest way to start working with us: no Turkish language, no queues, guaranteed result.",
    "idx.services.link_more": "See all other services (Spain, Poland, Germany and more)",

    "idx.why.eyebrow": "Why clients choose us",
    "idx.why.title": "We work officially and explain every step",
    "idx.why.1.title": "We work under contract",
    "idx.why.1.desc": "All services are formalized officially, with fixed terms and timelines.",
    "idx.why.2.title": "Experience with complex cases",
    "idx.why.2.desc": "We take on cases others turn down, including previous refusals.",
    "idx.why.3.title": "Honest timelines",
    "idx.why.3.desc": "We give realistic timelines and are upfront about possible delays.",
    "idx.why.4.title": "Support at every stage",
    "idx.why.4.desc": "We guide the client from consultation to receiving the documents.",

    "idx.legal.title": "Official operating status",
    "idx.legal.desc": "The company operates openly, with legal details and terms of cooperation disclosed before work begins.",
    "idx.legal.entity.label": "Legal entity",
    "idx.legal.country.label": "Country of registration",
    "idx.legal.reg.label": "Registration number",
    "idx.legal.guarantee.label": "What the contract guarantees",
    "idx.legal.guarantee.value": "Scope of work, stage timelines and refund terms are fixed in the contract before we start — no verbal agreements.",

    "idx.process.eyebrow": "Process",
    "idx.process.title": "How working with us looks",
    "idx.process.1.title": "Consultation",
    "idx.process.1.desc": "We review your situation and give realistic chances, timelines and cost.",
    "idx.process.2.title": "Documents",
    "idx.process.2.desc": "We gather and check your documents, minimizing the risk of refusal.",
    "idx.process.3.title": "Booking and submission",
    "idx.process.3.desc": "We book the earliest slot at the migration office and prepare you for the visit.",
    "idx.process.4.title": "Status tracking",
    "idx.process.4.desc": "We track the progress of your case and keep you informed at every stage.",
    "idx.process.5.title": "Receiving the document",
    "idx.process.5.desc": "You receive the finished document, and we stay in touch for any further questions.",

    "idx.reviews.eyebrow": "Reviews",
    "idx.reviews.title": "What clients say",
    "review1.name": "Marat K.",
    "review1.country": "Kazakhstan",
    "review1.service": "Service: Turkish residence permit",
    "review1.text": "I had already been refused once before. The team figured out the reason, rebuilt the documents from scratch, and this time everything went through without issues.",
    "review2.name": "Victoria S.",
    "review2.country": "Russia",
    "review2.service": "Service: Driving licence exchange",
    "review2.text": "I was worried it would be hard without Turkish. In the end they handled everything for me — I only had to go for the medical check and pick up the licence.",
    "review3.name": "Amina T.",
    "review3.country": "Belarus",
    "review3.service": "Service: Bank account + residence permit",
    "review3.text": "I liked that at the consultation they gave realistic timelines right away, without sugar-coating anything. It ended up going even a bit faster.",
    "review.date": "[review date]",

    "idx.faq.eyebrow": "FAQ",
    "idx.faq.title": "Frequently asked questions",
    "idx.faq1.q": "What if I've already been refused before?",
    "idx.faq1.a": "We separately review the reason for the previous refusal before reapplying. Often it comes down to an incomplete document set or a formal error — that can be fixed.",
    "idx.faq2.q": "Do I need to know Turkish or English?",
    "idx.faq2.a": "No. We accompany the client at every stage, including visits to government offices, so language skills aren't required.",
    "idx.faq3.q": "What happens if I get refused again?",
    "idx.faq3.a": "The terms for a refusal case are fixed in the contract before we start — including the process for reapplying or a partial refund, depending on the reason for refusal.",
    "idx.faq4.q": "What risks are involved and how do you reduce them?",
    "idx.faq4.a": "The main risk is an incomplete or incorrectly prepared document set. We check every document before submission and let you know in advance about any non-standard nuances in your case.",

    "idx.finalcta.title": "Let's review your situation for free",
    "idx.finalcta.desc": "Leave a request — we'll reply within 15 minutes with a realistic action plan: timelines, cost and what's needed from you.",
    "form.name.label": "Name",
    "form.name.placeholder": "How should we address you",
    "form.phone.label": "Phone or WhatsApp",
    "form.service.label": "Service you're interested in",
    "form.service.opt1": "Turkish residence permit",
    "form.service.opt2": "Driving licence exchange",
    "form.service.opt3": "Other service",
    "form.submit": "Submit request",
    "form.disclaimer": "By submitting the form, you agree to our data processing terms.",

    /* ---- Residence permit ---- */
    "vnzh.badge": "Main service",
    "vnzh.hero.desc": "Full support for your residence permit: from choosing a program to receiving the card. We handle both standard and complex cases, including previous refusals.",
    "vnzh.plans.eyebrow": "Application options",
    "vnzh.plans.title": "How long can the residence permit be issued for",
    "vnzh.plan1.title": "1 year",
    "vnzh.plan1.desc": "A basic option for a first application or a short stay.",
    "vnzh.plan2.badge": "Most popular",
    "vnzh.plan2.title": "2 years",
    "vnzh.plan2.desc": "The best balance between validity period and renewal cost.",
    "vnzh.plan3.title": "3 years",
    "vnzh.plan3.desc": "For those planning a long-term stay in Turkey.",
    "vnzh.included.title": "What's included",
    "vnzh.included.li1": "Consultation and selection of the optimal program",
    "vnzh.included.li2": "Collecting and checking the full document set",
    "vnzh.included.li3": "Arranging health insurance (SGK or private)",
    "vnzh.included.li4": "Booking the submission at the migration office",
    "vnzh.included.li5": "Support at the visit with no language required",
    "vnzh.included.li6": "Tracking the case status until you receive the card",
    "vnzh.docs.title": "What documents you'll need",
    "vnzh.docs.li1": "A passport valid for at least [timeframe]",
    "vnzh.docs.li2": "Photos meeting the required format",
    "vnzh.docs.li3": "Proof of your residential address",
    "vnzh.docs.li4": "Proof of financial means (if required)",
    "vnzh.docs.li5": "A health insurance policy",
    "vnzh.docs.note": "The exact list depends on your situation — we clarify it during the free consultation.",
    "vnzh.faq.eyebrow": "FAQ",
    "vnzh.faq.title": "Questions about residence permits",
    "vnzh.faq1.q": "Can I apply for a residence permit after a refusal?",
    "vnzh.faq1.a": "Yes, but before reapplying we always review the reason for the previous refusal and fix it in the new document set.",
    "vnzh.faq2.q": "How long does the process take?",
    "vnzh.faq2.a": "The estimated time is from [timeframe]. The exact time depends on the workload of the migration office in your region and is confirmed at the consultation.",
    "vnzh.faq3.q": "Do I need to be in Turkey in person?",
    "vnzh.faq3.a": "In-person presence is only required for biometrics and receiving the card — we prepare everything else remotely.",
    "vnzh.cta.title": "Find out your chances for free",
    "vnzh.cta.desc": "We'll reply within 15 minutes with a plan tailored to your situation.",

    /* ---- Driving licence ---- */
    "prava.hero.title": "Exchanging your driving licence for a Turkish one",
    "prava.hero.desc": "Our fastest service: no Turkish language, no queues, guaranteed result.",
    "prava.badge.time": "from [timeframe]",
    "prava.badge.lang": "No Turkish required",
    "prava.included.eyebrow": "What's included",
    "prava.included.title": "Full support for your licence exchange",
    "prava.card1.title": "Booking without a queue",
    "prava.card1.desc": "We book the earliest available date and prepare you for the visit.",
    "prava.card2.title": "Medical examination",
    "prava.card2.desc": "We help you complete the mandatory medical exam and get the certificate.",
    "prava.card3.title": "Translation and notarization",
    "prava.card3.desc": "We arrange a notarized translation of your original licence.",
    "prava.card4.title": "Receiving your licence",
    "prava.card4.desc": "We support you until you receive your Turkish licence.",
    "prava.docs.title": "What we'll need from you",
    "prava.docs.li1": "The original of your valid driving licence",
    "prava.docs.li2": "Your passport",
    "prava.docs.li3": "A valid residence permit or other proof of residence in Turkey",
    "prava.docs.li4": "Photos meeting the required format",
    "prava.faq.eyebrow": "FAQ",
    "prava.faq.title": "Questions about licence exchange",
    "prava.faq1.q": "Do I need to take a driving test?",
    "prava.faq1.a": "For citizens of most countries, no test is required — the licence is exchanged based on your valid foreign licence and a medical certificate.",
    "prava.faq2.q": "What if my licence is no longer valid in my home country?",
    "prava.faq2.a": "For the exchange, the original licence needs to be valid at the time of submission — we confirm this before starting the process.",
    "prava.cta.title": "Start with our fastest service",
    "prava.cta.desc": "Message us — we'll give you an exact timeline and price for your case.",

    /* ---- Additional services ---- */
    "uslugi.hero.title": "Additional services for relocating to Europe",
    "uslugi.hero.desc": "Besides Turkey, we support document processing in Spain, Poland and Germany — for relocation, work or banking needs.",
    "uslugi.card1.title": "NIE in Spain",
    "uslugi.card1.desc": "Foreigner identification number — required for renting housing, banking and paperwork.",
    "uslugi.card2.title": "Company registration in Poland",
    "uslugi.card2.desc": "Setting up a business for legal work in the EU, including a tax number and full support.",
    "uslugi.card3.title": "Address registration in Germany",
    "uslugi.card3.desc": "Official residence registration (Anmeldung) — required for banking, insurance and residence permits.",
    "uslugi.card4.title": "Insurance in Turkey",
    "uslugi.card4.desc": "Mandatory health insurance for residence permits, plus property (DASK) and vehicle insurance.",
    "uslugi.card5.title": "Opening a bank account",
    "uslugi.card5.desc": "Opening a Turkish bank account with a multi-currency card and mobile banking setup.",
    "uslugi.card6.title": "Can't find what you need?",
    "uslugi.card6.desc": "We also handle non-standard requests — describe your situation and we'll find a solution.",
    "uslugi.card6.link": "Ask a question",
    "uslugi.cta.title": "Let's discuss which service fits you",
    "uslugi.cta.desc": "Free consultation — we'll discuss your relocation goal and suggest a document path.",

    "alt.hero.index": "Panoramic view of Istanbul across the Bosphorus",
    "alt.service.vnzh": "Consultant handing residence permit documents to a client",
    "alt.service.prava": "Hands on the steering wheel while driving in Turkey",
    "alt.process.1": "Consultant and client shaking hands at a meeting",
    "alt.process.2": "Preparing and signing documents",
    "alt.process.3": "Scheduling an appointment date in a planner",
    "alt.process.4": "Tracking case status on a laptop and phone",
    "alt.process.5": "Handing the finished document to the client",
    "alt.review.1": "Portrait of client Marat K.",
    "alt.review.2": "Portrait of client Victoria S.",
    "alt.review.3": "Portrait of client Amina T."
  }
};

/* Заголовки и мета-описания страниц по data-page */
const pageMeta = {
  index: {
    ru: { title: "Global Easy Doc — ВНЖ в Турции и замена водительских прав", description: "Официальное сопровождение при получении ВНЖ в Турции и замене водительских прав. Работаем с 2019 года, 2 300+ клиентов, 98% успешных случаев." },
    en: { title: "Global Easy Doc — Turkish residence permit and driving licence exchange", description: "Official support for Turkish residence permits and driving licence exchange. Working since 2019, 2,300+ clients, 98% success rate." }
  },
  vnzh: {
    ru: { title: "ВНЖ в Турции — Global Easy Doc", description: "Официальное оформление вида на жительство (икамет) в Турции. Сопровождение сложных случаев и предыдущих отказов." },
    en: { title: "Turkish residence permit — Global Easy Doc", description: "Official support for obtaining a residence permit (ikamet) in Turkey. We handle complex cases and previous refusals." }
  },
  prava: {
    ru: { title: "Замена водительских прав в Турции — Global Easy Doc", description: "Быстрая замена иностранных водительских прав на турецкие. Без языка, без очередей, с гарантированным результатом." },
    en: { title: "Driving licence exchange in Turkey — Global Easy Doc", description: "Fast exchange of a foreign driving licence for a Turkish one. No language required, no queues, guaranteed result." }
  },
  uslugi: {
    ru: { title: "Дополнительные услуги — Global Easy Doc", description: "ВНЖ Испании, регистрация компании в Польше, документы в Германии и другие услуги для релокации в Европу." },
    en: { title: "Additional services — Global Easy Doc", description: "Spain NIE, company registration in Poland, documents in Germany and other relocation services in Europe." }
  }
};

/* Применить выбранный язык ко всей странице */
function applyLanguage(lang) {
  const dict = translations[lang] || translations.ru;

  document.documentElement.setAttribute('lang', lang);

  document.querySelectorAll('[data-i18n]').forEach((el) => {
    const key = el.getAttribute('data-i18n');
    if (dict[key] !== undefined) el.textContent = dict[key];
  });

  document.querySelectorAll('[data-i18n-placeholder]').forEach((el) => {
    const key = el.getAttribute('data-i18n-placeholder');
    if (dict[key] !== undefined) el.setAttribute('placeholder', dict[key]);
  });

  document.querySelectorAll('[data-i18n-alt]').forEach((el) => {
    const key = el.getAttribute('data-i18n-alt');
    if (dict[key] !== undefined) el.setAttribute('alt', dict[key]);
  });

  const page = document.body.getAttribute('data-page');
  if (page && pageMeta[page] && pageMeta[page][lang]) {
    document.title = pageMeta[page][lang].title;
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) metaDesc.setAttribute('content', pageMeta[page][lang].description);
  }

  document.querySelectorAll('.lang-btn').forEach((btn) => {
    btn.classList.toggle('active', btn.getAttribute('data-lang') === lang);
  });

  window.__currentLang = lang;
  localStorage.setItem('gedLang', lang);
}

/* Инициализация: язык из localStorage (по умолчанию — русский) + обработчики кнопок */
function initLanguage() {
  const saved = localStorage.getItem('gedLang') || 'ru';
  applyLanguage(saved);
  document.querySelectorAll('.lang-btn').forEach((btn) => {
    btn.addEventListener('click', () => applyLanguage(btn.getAttribute('data-lang')));
  });
}

document.addEventListener('DOMContentLoaded', initLanguage);
