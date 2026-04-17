import { personagens } from './personagem.js';
import { perguntas } from './perguntas.js';

let button, numeroQuestao, barraProgresso;
const totalQuestoes = 10;
let questaoAtual = 0;
let respostaSelecionada = null;

function atualizarBarraNumeroQuestao(index) {
  const porcentagem = ((index + 1) / totalQuestoes) * 100;
  barraProgresso.style.width = `${porcentagem}%`;
  numeroQuestao.textContent = String(index + 1).padStart(2, '0');
}

function carregarPergunta(index) {
  const pergunta = perguntas[index];
  const cards = document.querySelectorAll('.card-resposta');
  const tituloPergunta = document.querySelector('#pergunta h2');

  tituloPergunta.textContent = pergunta.texto;
  respostaSelecionada = null;

  cards.forEach((card, i) => {
    const opcao = pergunta.opcoes[i];
    const textoResposta = card.querySelector('.texto-resposta');

    textoResposta.textContent = opcao.texto;
    card.classList.remove('selecionado');

    card.onclick = () => {
      cards.forEach((c) => c.classList.remove('selecionado'));
      card.classList.add('selecionado');
      respostaSelecionada = opcao;
    }
  });
}

function calcularResultado() {
  return Object.values(personagem).reduce((melhor, atual) => {
    (atual.pontuacao > melhor.pontuacao) ? atual : melhor;
  });
}

function resetarJogo() {
  Object.values(personagens).forEach((p) => p.resetar());
}

function proximaPergunta() {
  if (!respostaSelecionada)
    return;

  if (questaoAtual < totalQuestoes - 1) {
    questaoAtual++;
    atualizarBarraNumeroQuestao(questaoAtual);
    carregarPergunta(questaoAtual);
  } else {
    const resultado = calcularResultado();
    sessionStorage.setItem('personagem', JSON.stringify(resultado));
    window.location.href('/pages/resultado.html');
  }
}

export function initQuiz() {
  questaoAtual = 0;
  respostaSelecionada = null;

  button = document.getElementById('btn-proxima-pergunta');
  numeroQuestao = document.getElementById('numero-questao');
  barraProgresso = document.querySelector('.barra-progresso');

  resetarJogo();
  carregarPergunta(0);
  atualizarBarraNumeroQuestao(0);

  button.removeEventListener('click', proximaPergunta);
  button.addEventListener('click', proximaPergunta);
}