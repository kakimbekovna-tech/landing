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

  function setVariant(id) {
    const key = String(id);
    const path = paths[key] || paths["1"];

    buttons.forEach((btn) => {
      const active = btn.dataset.variant === key;
      btn.classList.toggle("is-active", active);
      btn.setAttribute("aria-selected", active ? "true" : "false");
    });

    if (frame) frame.src = path;
    if (label) label.textContent = `Превью · ${key} вариант`;
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
  setVariant(saved);

  if (modal && typeof modal.showModal === "function" && !modal.open) {
    modal.showModal();
  }
})();
