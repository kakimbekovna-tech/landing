(function () {
  if (window.self !== window.top) return;

  function render() {
    const active = document.body.getAttribute("data-variant") || "1";
    let bar = document.querySelector(".variant-switcher");
    if (!bar) {
      bar = document.createElement("nav");
      bar.className = "variant-switcher";
      bar.setAttribute("aria-label", "Variant switcher");
      document.body.appendChild(bar);
    }

    const compare = window.NS_I18N?.t?.("switcher.compare") || "Сравнить";
    bar.innerHTML = `
      <a href="/v1/" title="1" aria-label="1" class="${active === "1" ? "is-active" : ""}">1</a>
      <a href="/v2/" title="2" aria-label="2" class="${active === "2" ? "is-active" : ""}">2</a>
      <a href="/v3/" title="3" aria-label="3" class="${active === "3" ? "is-active" : ""}">3</a>
      <a href="/" class="switcher-compare">${compare}</a>
    `;
  }

  function boot() {
    render();
    window.NS_I18N?.onChange?.(render);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", boot);
  } else {
    boot();
  }
})();
