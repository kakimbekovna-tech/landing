(function () {
  const frame = document.getElementById("previewFrame");
  const label = document.getElementById("previewLabel");
  const openFull = document.getElementById("openFull");
  const buttons = [...document.querySelectorAll(".variant-btn")];
  const modal = document.getElementById("compareModal");

  const paths = {
    1: "/v1/",
    2: "/v2/",
    3: "/v3/",
  };

  let current = "1";

  function t(key, vars) {
    return window.NS_I18N?.t?.(key, vars) ?? key;
  }

  function setVariant(id) {
    const key = String(id);
    current = key;
    const path = paths[key] || paths["1"];

    buttons.forEach((btn) => {
      const active = btn.dataset.variant === key;
      btn.classList.toggle("is-active", active);
      btn.setAttribute("aria-selected", active ? "true" : "false");
    });

    if (frame) frame.src = path;
    if (label) label.textContent = t("chooser.preview", { n: key });
    if (openFull) openFull.href = path;

    try {
      localStorage.setItem("neonshine-variant", key);
    } catch (_) {
      /* ignore */
    }
  }

  buttons.forEach((btn) => {
    btn.addEventListener("click", () => setVariant(btn.dataset.variant));
  });

  let saved = "1";
  try {
    saved = localStorage.getItem("neonshine-variant") || "1";
  } catch (_) {
    saved = "1";
  }

  function boot() {
    setVariant(saved);
    window.NS_I18N?.onChange?.(() => {
      if (label) label.textContent = t("chooser.preview", { n: current });
      if (frame) frame.src = paths[current] || paths["1"];
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", boot);
  } else {
    boot();
  }

  if (modal && typeof modal.showModal === "function" && !modal.open) {
    modal.showModal();
  }
})();
