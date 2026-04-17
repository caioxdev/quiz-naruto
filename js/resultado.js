export function initResultado() {
  const dados = sessionStorage.getItem('personagem');

  if (!dados) {
    window.location.href = '/index.html';
    return;
  }

  const personagem = JSON.parse(dados);

  const imgPersonagem = document.getElementById('img-personagem');
  const nomePersonagem = document.getElementById('nome-personagem');
  const descricao = document.getElementById('descricao');
  const citacao = document.getElementById('citacao');
  const chakraValor = document.getElementById('chakra-valor');
  const afinidadeValor = document.getElementById('afinidade-valor');
  const btnTentarNovamente = document.getElementById('btn-tentar-novamente');

  imgPersonagem.src = personagem.imagem;
  imgPersonagem.alt = personagem.nome;
  nomePersonagem.textContent = personagem.nome;
  descricao.textContent = personagem.descricao;
  citacao.textContent = personagem.citacao;
  chakraValor.textContent = personagem.chakra;
  afinidadeValor.textContent = personagem.afinidade;

  btnTentarNovamente.onclick = () => {
    sessionStorage.removeItem('personagem');
    window.location.href = 'quiz.html';
  };
}