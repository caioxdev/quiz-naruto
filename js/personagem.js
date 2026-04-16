export class Personagem {
  constructor(id, nome, descricao, imagem, chakra, afinidade, citacao) {
    this.id = id;
    this.nome = nome;
    this.descricao = descricao;
    this.imagem = imagem;
    this.chakra = chakra;
    this.afinidade = afinidade;
    this.citacao = citacao;
    this.pontuacao = 0;
  }

  adicionarPonto(pontos) {
    this.pontuacao += pontos;
  }

  resetar() {
    this.pontuacao = 0;
  }
}

export const personagens = {
  naruto: new Personagem(
    'naruto',
    'Naruto Uzumaki',
    'Sua determinação é inabalável e seu coração transborda vontade do fogo. Você nunca volta atrás em sua palavra e protege seus amigos a qualquer custo.',
    '../assets/imagens/personagens/naruto.webp',
    'Imensurável',
    'Vento',
    '"Eu nunca volto atrás na minha palavra... esse é o meu jeito ninja!"'
  ),
  sasuke: new Personagem(
    'sasuke',
    'Sasuke Uchiha',
    'Você carrega o peso do passado com frieza e determinação. Seu poder nasce da dor, mas sua lealdade, quando existe, é absoluta.',
    '../assets/imagens/personagens/sasuke.webp',
    'Excepcional',
    'Fogo',
    '"Eu vou restaurar o meu clã e matar um certo alguém."'
  ),
  jiraya: new Personagem(
    'jiraya',
    'Jiraya',
    'Você é sábio, livre e cheio de vida. Por trás da leveza e do humor, esconde uma força e uma lealdade que poucos conseguem superar.',
    '../assets/imagens/personagens/jiraya.webp',
    'Imenso',
    'Água',
    '"Um homem sábio não se curva ao destino — ele o reescreve."'
  ),
  itachi: new Personagem(
    'itachi',
    'Itachi Uchiha',
    'Você age nas sombras, carregando fardos que ninguém conhece. Sua inteligência e sacrifício silencioso protegem quem você ama, mesmo que nunca saibam.',
    '../assets/imagens/personagens/itachi.webp',
    'Imensurável',
    'Fogo',
    '"Perdoe-me, Sasuke... isso é a última vez."'
  ),
  shikamaru: new Personagem(
    'shikamaru',
    'Shikamaru Nara',
    'Você enxerga dez passos à frente e prefere agir com precisão a desperdiçar energia. Por trás da preguiça, existe uma mente que raramente erra.',
    '../assets/imagens/personagens/shikamaru.webp',
    'Médio',
    'Sombra',
    '"Que trabalheira... mas alguém tem que fazer."'
  )
}