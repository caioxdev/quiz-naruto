import { swup } from './main.js'

export function initResultado() {
  const dados = sessionStorage.getItem('personagem');

  if (!dados) {
    window.location.href = '/index.html';
    return;
  }

  const personagem = JSON.parse(dados);

  const cores = {
    naruto: 'linear-gradient(180deg, #E97B58 25.96%, #FFF 88.85%)',
    sasuke: 'linear-gradient(180deg, #7D7F9C 25.96%, #FFF 88.85%)',
    jiraya: 'linear-gradient(180deg, #993A41 25.96%, #FFF 88.85%)',
    itachi: 'linear-gradient(180deg, #7D3A53 25.96%, #FFF 88.85%)',
    shikamaru: 'linear-gradient(180deg, #839271 25.96%, #FFF 88.85%)'
  };

  const conteudoEsq = document.getElementById('conteudo-esq');
  conteudoEsq.style.background = cores[personagem.id];

  const imgPersonagem = document.getElementById('img-personagem');
  const nomePersonagem = document.getElementById('nome-personagem');
  const pontuacaoValor = document.getElementById('pontos');
  const descricao = document.getElementById('descricao');
  const citacao = document.getElementById('citacao');
  const chakraValor = document.getElementById('chakra-valor');
  const afinidadeValor = document.getElementById('afinidade-valor');
  const btnTentarNovamente = document.getElementById('btn-tentar-novamente');

  imgPersonagem.src = personagem.imagem;
  imgPersonagem.alt = personagem.nome;
  nomePersonagem.textContent = personagem.nome;
  pontuacaoValor.textContent = personagem.pontuacao + ' pontos';
  descricao.textContent = personagem.descricao;
  citacao.textContent = personagem.citacao;
  chakraValor.textContent = personagem.chakra;
  afinidadeValor.textContent = personagem.afinidade;

  btnTentarNovamente.onclick = () => {
    sessionStorage.removeItem('personagem');
    swup.navigate('quiz.html');
  };
}