export function initThemeSwitcher() {
  const button = document.getElementById('theme-switcher-grid');

  if (!button)
      return;

  button.addEventListener('click', () => {
    button.classList.toggle('night-theme');
    document.body.classList.toggle('dark');
  });
}