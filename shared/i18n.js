(function () {
  const STORAGE_KEY = "neonshine-lang";

  const dict = {
    ru: {
      "meta.title.v1": "NeonShine — вариант 1",
      "meta.title.v2": "NeonShine — вариант 2",
      "meta.title.v3": "NeonShine — вариант 3",
      "meta.title.chooser": "NeonShine — выбор варианта",
      "meta.desc":
        "NeonShine — премиальный автодетейлинг в Астане. Мойка, химчистка, полировка, керамика. Запись за 1 клик.",
      "meta.desc.chooser": "Сравнение вариантов лендинга NeonShine",

      "nav.book": "Записаться →",
      "nav.services": "Услуги",
      "nav.why": "Почему мы",
      "nav.contacts": "Контакты",
      "nav.whatsapp": "WhatsApp",

      "hero.lockup": "NeonShine · Астана",
      "hero.kicker": "Астана · детейлинг-студия",
      "hero.stamp": "Астана · Studio",
      "hero.title": "Премиальный детейлинг и уход за вашим авто",
      "hero.line1": "Премиальный",
      "hero.line2": "детейлинг",
      "hero.line3": "и уход за вашим авто",
      "hero.lead": "Вернем вашей машине состояние новой за 24 часа",
      "hero.cta": "Записаться на осмотр",
      "hero.cta.arrow": "Записаться на осмотр →",
      "hero.services": "Смотреть услуги",
      "hero.img": "Спортивный автомобиль в неоновом свете",

      "services.eyebrow": "Каталог",
      "services.title": "Наши услуги",
      "services.sub": "Выберите услугу — сразу откроется WhatsApp с готовым сообщением.",
      "services.sub2": "Одна кнопка — сразу в WhatsApp с готовым текстом.",
      "services.choose": "Выбрать",

      "svc.wash.name": "Трехфазная мойка",
      "svc.wash.desc": "Бережная очистка кузова",
      "svc.wash.price": "от 2 000 ₸",
      "svc.interior.name": "Химчистка салона",
      "svc.interior.desc": "Удаление любых пятен и запахов",
      "svc.interior.price": "от 35 000 ₸",
      "svc.polish.name": "Полировка кузова",
      "svc.polish.desc": "Устранение царапин и голограмм",
      "svc.polish.price": "от 60 000 ₸",
      "svc.ceramic.name": "Керамическое покрытие",
      "svc.ceramic.desc": "Защита кузова на 2 года",
      "svc.ceramic.price": "от 120 000 ₸",

      "why.eyebrow": "Доверие",
      "why.title": "Почему мы",
      "why.1": "Используем только немецкую и американскую автохимию.",
      "why.2": "Опыт мастеров от 5 лет.",
      "why.3": "Камеры в рабочей зоне — можете следить за своим авто онлайн.",
      "why.lab1": "Химия",
      "why.lab2": "Опыт",
      "why.lab3": "Камеры",

      "footer.tag": "Премиальный уход за автомобилями",
      "footer.address": "Адрес",
      "footer.city": "г. Астана",
      "footer.hoursLabel": "Режим работы",
      "footer.hoursLabelShort": "Режим",
      "footer.hours": "Ежедневно с 10:00 до 22:00",
      "footer.hoursShort": "Ежедневно 10:00–22:00",
      "footer.phone": "Телефон",
      "footer.rights": "Все права защищены.",

      "contact.title": "Связаться с нами",
      "contact.close": "Закрыть",
      "contact.call": "Позвонить",
      "contact.copy": "Скопировать номер",
      "contact.copyHint": "В буфер обмена",
      "contact.copied": "Номер скопирован",
      "contact.waHint": "Написать в мессенджер",
      "contact.igHint": "Открыть профиль",

      "wa.inspect": "Здравствуйте! Хочу записаться на бесплатный осмотр автомобиля",
      "wa.service": "Привет! Меня интересует {name} за {price}. Подскажите свободное время?",

      "chooser.title": "Выберите вариант лендинга",
      "chooser.lead": "Три варианта по ТЗ. Ниже — живое превью. На телефоне тоже удобно листать.",
      "chooser.v1": "1 вариант",
      "chooser.v1desc": "Мягкий neon · карточки",
      "chooser.v2": "2 вариант",
      "chooser.v2desc": "Техно · список услуг",
      "chooser.v3": "3 вариант",
      "chooser.v3desc": "Racing red · студия",
      "chooser.preview": "Превью · {n} вариант",
      "chooser.open": "Открыть полностью →",
      "chooser.compare": "Сравнение вариантов",
      "switcher.compare": "Сравнить",
      "lang.ru": "RU",
      "lang.en": "EN",
    },
    en: {
      "meta.title.v1": "NeonShine — variant 1",
      "meta.title.v2": "NeonShine — variant 2",
      "meta.title.v3": "NeonShine — variant 3",
      "meta.title.chooser": "NeonShine — choose a variant",
      "meta.desc":
        "NeonShine — premium auto detailing in Astana. Wash, interior cleaning, polishing, ceramic coating. Book in one tap.",
      "meta.desc.chooser": "Compare NeonShine landing page variants",

      "nav.book": "Book →",
      "nav.services": "Services",
      "nav.why": "Why us",
      "nav.contacts": "Contacts",
      "nav.whatsapp": "WhatsApp",

      "hero.lockup": "NeonShine · Astana",
      "hero.kicker": "Astana · detailing studio",
      "hero.stamp": "Astana · Studio",
      "hero.title": "Premium detailing and care for your car",
      "hero.line1": "Premium",
      "hero.line2": "detailing",
      "hero.line3": "and care for your car",
      "hero.lead": "We’ll make your car look new again in 24 hours",
      "hero.cta": "Book a free inspection",
      "hero.cta.arrow": "Book a free inspection →",
      "hero.services": "View services",
      "hero.img": "Sports car under neon lights",

      "services.eyebrow": "Catalog",
      "services.title": "Our services",
      "services.sub": "Pick a service — WhatsApp opens with a ready message.",
      "services.sub2": "One tap — WhatsApp opens with a ready text.",
      "services.choose": "Select",

      "svc.wash.name": "Three-phase wash",
      "svc.wash.desc": "Gentle body cleaning",
      "svc.wash.price": "from 2,000 ₸",
      "svc.interior.name": "Interior detailing",
      "svc.interior.desc": "Removes stains and odors",
      "svc.interior.price": "from 35,000 ₸",
      "svc.polish.name": "Body polishing",
      "svc.polish.desc": "Removes scratches and holograms",
      "svc.polish.price": "from 60,000 ₸",
      "svc.ceramic.name": "Ceramic coating",
      "svc.ceramic.desc": "Body protection for 2 years",
      "svc.ceramic.price": "from 120,000 ₸",

      "why.eyebrow": "Trust",
      "why.title": "Why us",
      "why.1": "We use only German and American auto chemicals.",
      "why.2": "Technicians with 5+ years of experience.",
      "why.3": "Cameras in the work area — watch your car online.",
      "why.lab1": "Chemistry",
      "why.lab2": "Experience",
      "why.lab3": "Cameras",

      "footer.tag": "Premium car care",
      "footer.address": "Address",
      "footer.city": "Astana",
      "footer.hoursLabel": "Hours",
      "footer.hoursLabelShort": "Hours",
      "footer.hours": "Daily from 10:00 to 22:00",
      "footer.hoursShort": "Daily 10:00–22:00",
      "footer.phone": "Phone",
      "footer.rights": "All rights reserved.",

      "contact.title": "Contact us",
      "contact.close": "Close",
      "contact.call": "Call",
      "contact.copy": "Copy number",
      "contact.copyHint": "To clipboard",
      "contact.copied": "Number copied",
      "contact.waHint": "Message on WhatsApp",
      "contact.igHint": "Open profile",

      "wa.inspect": "Hello! I’d like to book a free car inspection",
      "wa.service": "Hi! I’m interested in {name} for {price}. What times are free?",

      "chooser.title": "Choose a landing variant",
      "chooser.lead": "Three variants from the brief. Live preview below. Easy to browse on mobile too.",
      "chooser.v1": "Variant 1",
      "chooser.v1desc": "Soft neon · cards",
      "chooser.v2": "Variant 2",
      "chooser.v2desc": "Techno · service list",
      "chooser.v3": "Variant 3",
      "chooser.v3desc": "Racing red · studio",
      "chooser.preview": "Preview · variant {n}",
      "chooser.open": "Open full page →",
      "chooser.compare": "Compare variants",
      "switcher.compare": "Compare",
      "lang.ru": "RU",
      "lang.en": "EN",
    },
  };

  function detectLang() {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved === "ru" || saved === "en") return saved;
    } catch (_) {
      /* ignore */
    }
    const nav = (navigator.language || "ru").toLowerCase();
    return nav.startsWith("en") ? "en" : "ru";
  }

  let lang = detectLang();
  const listeners = [];

  function t(key, vars) {
    const table = dict[lang] || dict.ru;
    let value = table[key] ?? dict.ru[key] ?? key;
    if (vars) {
      Object.keys(vars).forEach((k) => {
        value = value.replace(new RegExp(`\\{${k}\\}`, "g"), String(vars[k]));
      });
    }
    return value;
  }

  function apply(root) {
    const scope = root || document;
    scope.querySelectorAll("[data-i18n]").forEach((el) => {
      const key = el.getAttribute("data-i18n");
      if (!key) return;
      const attr = el.getAttribute("data-i18n-attr");
      const value = t(key);
      if (attr) el.setAttribute(attr, value);
      else el.textContent = value;
    });

    document.documentElement.lang = lang;

    const variant = document.body?.getAttribute("data-variant");
    if (variant) document.title = t(`meta.title.v${variant}`);
    else if (document.body?.hasAttribute("data-chooser")) document.title = t("meta.title.chooser");

    const desc = document.querySelector('meta[name="description"]');
    if (desc) {
      desc.setAttribute(
        "content",
        document.body?.hasAttribute("data-chooser") ? t("meta.desc.chooser") : t("meta.desc")
      );
    }

    document.querySelectorAll("[data-lang-btn]").forEach((btn) => {
      btn.classList.toggle("is-active", btn.getAttribute("data-lang-btn") === lang);
    });
  }

  function setLang(next) {
    if (next !== "ru" && next !== "en") return;
    lang = next;
    try {
      localStorage.setItem(STORAGE_KEY, lang);
    } catch (_) {
      /* ignore */
    }
    apply(document);
    listeners.forEach((fn) => {
      try {
        fn(lang);
      } catch (_) {
        /* ignore */
      }
    });
  }

  function mountSwitcher(target) {
    if (!target) return;
    if (target.querySelector(".lang-switch")) return;

    const box = document.createElement("div");
    box.className = "lang-switch";
    box.setAttribute("role", "group");
    box.setAttribute("aria-label", "Language");
    box.innerHTML = `
      <button type="button" data-lang-btn="ru" aria-label="Русский">RU</button>
      <button type="button" data-lang-btn="en" aria-label="English">EN</button>
    `;
    box.addEventListener("click", (e) => {
      const btn = e.target.closest("[data-lang-btn]");
      if (!btn) return;
      setLang(btn.getAttribute("data-lang-btn"));
    });
    target.insertBefore(box, target.firstChild);
    apply(box);
  }

  window.NS_I18N = {
    t,
    apply,
    setLang,
    getLang: () => lang,
    onChange(fn) {
      if (typeof fn === "function") listeners.push(fn);
    },
    mountSwitcher,
  };

  document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll("[data-lang-mount]").forEach((el) => mountSwitcher(el));
    apply(document);
  });

  if (document.readyState !== "loading") {
    document.querySelectorAll("[data-lang-mount]").forEach((el) => mountSwitcher(el));
    apply(document);
  }
})();
