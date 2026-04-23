const tema = 'naruto-quiz-theme';

export function initThemeSwitcher() {
  const button = document.getElementById('theme-switcher-grid');

  if (!button) {
      return;
  }

  const temaSalvo = sessionStorage.getItem(tema);
  if (temaSalvo === 'dark') {
    document.documentElement.classList.add('dark');
    document.body.classList.add('dark');
    button.classList.add('night-theme');
  }

  button.addEventListener('click', () => {
    const isDark = document.documentElement.classList.toggle('dark');
    document.body.classList.toggle('dark');
    button.classList.toggle('night-theme');

    sessionStorage.setItem(tema, isDark ? 'dark' : 'light');
  });
}