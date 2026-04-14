import { iniciarSwup } from './swup.js';
import { initThemeSwitcher } from './modo-claro-escuro.js';
import { initHeader, restaurarActive, activeNav } from './header.js';

const swup = iniciarSwup();

initThemeSwitcher();
initHeader();

document.addEventListener('DOMContentLoaded', () => {
  restaurarActive();
});

const botao = document.querySelector('.btn-iniciar');

if (botao) {
  botao.addEventListener('click', (event) => {
    event.preventDefault();
    activeNav();
    window.location.href = '../pages/quiz.html';
  });
}


swup.hooks.on('page:view', () => {
  initThemeSwitcher();
  initHeader();
  restaurarActive();
})