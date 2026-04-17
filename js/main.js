import { iniciarSwup } from "./swup.js";
import { initThemeSwitcher } from "./modo-claro-escuro.js";
import { initHeader, restaurarActive } from "./header.js";
import { initQuiz } from './jogo.js';
import { initResultado } from './resultado.js';

const swup = iniciarSwup();

function initAll() {
  initThemeSwitcher();
  initHeader();
  restaurarActive();

  if (document.getElementById('btn-proxima-pergunta'))
    initQuiz();

  if (document.getElementById('nome-personagem'))
    initResultado();
}

initAll();

swup.hooks.on('page:view', () => {
  initAll();
});