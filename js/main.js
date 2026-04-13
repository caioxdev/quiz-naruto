import { iniciarSwup } from './swup.js';
import { initThemeSwitcher } from './modo-claro-escuro.js';
import { initHeader } from './header.js';

iniciarSwup();

initThemeSwitcher();

initHeader();

document.addEventListener('swup:contentReplaced', () => {
  initThemeSwitcher();
});