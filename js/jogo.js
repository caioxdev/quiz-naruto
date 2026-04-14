let button, numeroQuestao, barraProgresso;
const totalQuestoes = 10;
let questaoAtual = 1;

function atualizarBarraNumeroQuestao(questao) {
  const porcentagem = (questao / totalQuestoes) * 100;
  barraProgresso.style.width = `${porcentagem}%`;
  numeroQuestao.textContent = String(questao).padStart(2, '0');
}

function proximaPergunta() {
  if (questaoAtual < totalQuestoes) {
    questaoAtual++;
    atualizarBarraNumeroQuestao(questaoAtual);
  }
}

export function initQuiz() {
  questaoAtual = 1;

  button = document.getElementById('btn-proxima-pergunta');
  numeroQuestao = document.getElementById('numero-questao');
  barraProgresso = document.querySelector('.barra-progresso');

  atualizarBarraNumeroQuestao(questaoAtual);

  button.removeEventListener('click', proximaPergunta);
  button.addEventListener('click', proximaPergunta);
}