(function () {
  if (window.self !== window.top) return;

  const active = document.body.getAttribute("data-variant") || "1";
  const bar = document.createElement("nav");
  bar.className = "variant-switcher";
  bar.setAttribute("aria-label", "Выбор варианта лендинга");
  bar.innerHTML = `
    <a href="/v1/" title="1 вариант" aria-label="1 вариант" class="${active === "1" ? "is-active" : ""}">1</a>
    <a href="/v2/" title="2 вариант" aria-label="2 вариант" class="${active === "2" ? "is-active" : ""}">2</a>
    <a href="/v3/" title="3 вариант" aria-label="3 вариант" class="${active === "3" ? "is-active" : ""}">3</a>
    <a href="/" class="switcher-compare">Сравнить</a>
  `;
  document.body.appendChild(bar);
})();
