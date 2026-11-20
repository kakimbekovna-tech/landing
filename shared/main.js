(function () {
  const cfg = window.NEONSHINE || {};
  const waNumber = String(cfg.whatsapp || "").replace(/\D/g, "");
  const phoneDisplay = cfg.phoneDisplay || cfg.phoneTel || "";
  const phoneTel = cfg.phoneTel || "";
  const instagram = cfg.instagram || "#";

  function waUrl(text) {
    const encoded = encodeURIComponent(text);
    return `https://wa.me/${waNumber}?text=${encoded}`;
  }

  const messages = {
    inspect: "Здравствуйте! Хочу записаться на бесплатный осмотр автомобиля",
    service(name, price) {
      return `Привет! Меня интересует ${name} за ${price}. Подскажите свободное время?`;
    },
  };

  document.querySelectorAll("[data-wa]").forEach((el) => {
    const kind = el.getAttribute("data-wa");
    let text = messages.inspect;

    if (kind === "service") {
      const name = el.getAttribute("data-service") || "услуга";
      const price = el.getAttribute("data-price") || "";
      text = messages.service(name, price);
    }

    el.setAttribute("href", waUrl(text));
    el.setAttribute("target", "_blank");
    el.setAttribute("rel", "noopener noreferrer");
  });

  document.querySelectorAll("[data-phone-link]").forEach((el) => {
    if (phoneTel) el.setAttribute("href", `tel:${phoneTel}`);
    if (phoneDisplay) el.textContent = phoneDisplay;
  });

  const ig = document.querySelector("[data-instagram]");
  if (ig && cfg.instagram) {
    ig.setAttribute("href", cfg.instagram);
  }

  const year = document.querySelector("[data-year]");
  if (year) year.textContent = String(new Date().getFullYear());

  /* Desktop: телефон → модалка контактов; mobile: обычный tel: */
  function isDesktopCall() {
    return window.matchMedia("(hover: hover) and (pointer: fine)").matches;
  }

  function ensureContactModal() {
    let dialog = document.getElementById("ns-contact-modal");
    if (dialog) return dialog;

    dialog = document.createElement("dialog");
    dialog.id = "ns-contact-modal";
    dialog.className = "ns-contact-modal";
    dialog.innerHTML = `
      <div class="ns-contact-inner">
        <div class="ns-contact-head">
          <div>
            <p class="ns-contact-kicker">NeonShine</p>
            <h2>Связаться с нами</h2>
          </div>
          <button type="button" class="ns-contact-close" aria-label="Закрыть">×</button>
        </div>
        <ul class="ns-contact-list">
          <li>
            <a data-cm-call href="tel:${phoneTel}">
              <span class="ns-contact-ico" aria-hidden="true">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1.1-.2 1.2.4 2.5.6 3.8.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1C10.6 21 3 13.4 3 4c0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.6.6 3.8.1.4 0 .8-.3 1.1L6.6 10.8Z" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"/></svg>
              </span>
              <span class="ns-contact-meta">
                <strong data-cm-phone>${phoneDisplay}</strong>
                <span>Позвонить</span>
              </span>
            </a>
          </li>
          <li>
            <button type="button" data-cm-copy>
              <span class="ns-contact-ico" aria-hidden="true">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none"><rect x="8" y="8" width="12" height="12" rx="2" stroke="currentColor" stroke-width="1.6"/><path d="M6 16H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" stroke="currentColor" stroke-width="1.6"/></svg>
              </span>
              <span class="ns-contact-meta">
                <strong>Скопировать номер</strong>
                <span>В буфер обмена</span>
              </span>
            </button>
          </li>
          <li>
            <a data-cm-wa href="${waUrl(messages.inspect)}" target="_blank" rel="noopener noreferrer">
              <span class="ns-contact-ico wa" aria-hidden="true">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 3a9 9 0 0 0-7.8 13.5L3 21l4.7-1.2A9 9 0 1 0 12 3Zm4.9 12.9c-.2.6-1.2 1.1-2 1.2-.5.1-1.2.1-3.5-.7-2.8-1.1-4.6-3.9-4.8-4.1-.2-.2-1.4-1.9-1.4-3.6 0-1.7.9-2.5 1.2-2.9.3-.3.7-.4 1-.4h.7c.2 0 .5 0 .7.6.2.6.8 2 .9 2.1.1.2.1.3 0 .5-.1.2-.2.3-.3.5-.2.2-.3.3-.5.5-.2.2-.3.3-.1.6.2.3.8 1.3 1.7 2.1 1.2 1 2.2 1.4 2.5 1.5.3.1.5.1.7-.1.2-.2.7-.8.9-1.1.2-.3.4-.2.7-.1.3.1 1.9.9 2.2 1 .3.2.5.2.6.3.1.2.1 1-.1 1.6Z"/></svg>
              </span>
              <span class="ns-contact-meta">
                <strong>WhatsApp</strong>
                <span>Написать в мессенджер</span>
              </span>
            </a>
          </li>
          <li>
            <a data-cm-ig href="${instagram}" target="_blank" rel="noopener noreferrer">
              <span class="ns-contact-ico ig" aria-hidden="true">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none"><rect x="3" y="3" width="18" height="18" rx="5" stroke="currentColor" stroke-width="1.6"/><circle cx="12" cy="12" r="4.2" stroke="currentColor" stroke-width="1.6"/><circle cx="17.2" cy="6.8" r="1.1" fill="currentColor"/></svg>
              </span>
              <span class="ns-contact-meta">
                <strong>Instagram</strong>
                <span>Открыть профиль</span>
              </span>
            </a>
          </li>
        </ul>
        <p class="ns-contact-toast" data-cm-toast aria-live="polite"></p>
      </div>
    `;

    document.body.appendChild(dialog);

    dialog.querySelector(".ns-contact-close")?.addEventListener("click", () => dialog.close());
    dialog.addEventListener("click", (e) => {
      if (e.target === dialog) dialog.close();
    });

    dialog.querySelector("[data-cm-copy]")?.addEventListener("click", async () => {
      const value = phoneTel || phoneDisplay;
      const toast = dialog.querySelector("[data-cm-toast]");
      try {
        await navigator.clipboard.writeText(value);
        if (toast) {
          toast.textContent = "Номер скопирован";
          toast.classList.add("is-on");
          setTimeout(() => toast.classList.remove("is-on"), 1800);
        }
      } catch (_) {
        if (toast) {
          toast.textContent = value;
          toast.classList.add("is-on");
        }
      }
    });

    return dialog;
  }

  document.querySelectorAll("[data-phone-link]").forEach((el) => {
    el.addEventListener("click", (e) => {
      if (!isDesktopCall()) return;
      e.preventDefault();
      const dialog = ensureContactModal();
      if (typeof dialog.showModal === "function") dialog.showModal();
      else dialog.setAttribute("open", "");
    });
  });
})();
