export const initHeader = () => {
  const header = document.querySelector("header");

  window.addEventListener("scroll", () => {
    header.classList.toggle("scrolled", window.scrollY > 0);
  });
};

export const restaurarActive = () => {
  const itens = document.querySelectorAll(".item-nav");

  const urlAtual = window.location.href;
  const isQuiz = urlAtual.includes('quiz');
  const isResultado = urlAtual.includes('resultado');

  itens.forEach((item) => {
    item.classList.remove('active');
    const pagina = item.getAttribute('data-page');

    if (isQuiz && pagina === 'quiz') {
      item.classList.add('active');
    }
    else if (isResultado && pagina === 'resultado') {
      item.classList.add('active');
    }
    else if (!isQuiz && !isResultado && pagina === 'index') {
      item.classList.add('active');
    }
  });
};

export const activeNav = () => {
  const itens = document.querySelectorAll('.item-nav');
  itens.forEach(item => {
    item.classList.remove('active');
    if (item.getAttribute('data-page') === 'quiz') {
      item.classList.add('active');
    }
  });
};