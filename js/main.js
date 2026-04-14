import { iniciarSwup } from "./swup.js";
import { initThemeSwitcher } from "./modo-claro-escuro.js";
import { initHeader, restaurarActive } from "./header.js";

const swup = iniciarSwup();

function initAll() {
  initThemeSwitcher();
  initHeader();
  restaurarActive();
}

initAll();

swup.hooks.on('page:view', () => {
  initAll();
});