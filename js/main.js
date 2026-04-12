import { iniciarSwup } from './swup.js';
import { initThemeSwitcher } from './modo-claro-escuro.js';

iniciarSwup();

initThemeSwitcher();

document.addEventListener('swup:contentReplaced', () => {
  initThemeSwitcher();
});