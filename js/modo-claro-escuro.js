export function initThemeSwitcher() {
  const button = document.getElementById('theme-switcher-grid');

  if (!button) {
      return;
  }

  if (document.body.classList.contains('dark')) {
    button.classList.add('night-theme');
  }

  button.addEventListener('click', () => {
    const isDark = document.documentElement.classList.toggle('dark');
    button.classList.toggle('night-theme');
    document.body.classList.toggle('dark');
  });
}