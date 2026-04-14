import { iniciarSwup } from "./swup.js";
import { initThemeSwitcher } from "./modo-claro-escuro.js";
import { initHeader, restaurarActive } from "./header.js";
import { initQuiz } from './jogo.js';

const swup = iniciarSwup();

function initAll() {
  initThemeSwitcher();
  initHeader();
  restaurarActive();
  initQuiz();
}

initAll();

swup.hooks.on('page:view', () => {
  initAll();
});