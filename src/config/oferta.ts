/**
 * Conteúdo editável da oferta: nome, preços, especialista, imagens e depoimentos.
 * Imagem vazia ('') = o funil mostra uma ilustração provisória no lugar.
 */

export const marca = {
  nome: 'Geladinhos de Drinks Lucrativos',
  curto: 'Geladinhos de Drinks',
  metodo: 'Método Drink no Saquinho',
  suporte: process.env.NEXT_PUBLIC_SUPORTE_EMAIL || 'suporte@geladinhosdedrinks.com.br',
};

/** Checkout da Kiwify (variável NEXT_PUBLIC_CHECKOUT na Vercel). */
export const checkout = process.env.NEXT_PUBLIC_CHECKOUT ?? '';

export const preco = 29;
export const precoDe = 197;
export const parcelas = 'ou em até 9x no cartão';
export const garantiaDias = 7;

export const especialista = {
  nome: 'Bruna Martins',
  papel: 'Criadora do Método Drink no Saquinho',
  foto: '', // '/img/especialista.webp'
  historia: [
    'Comecei fazendo geladinho de caipirinha para um churrasco de família, no verão. No fim da tarde, três pessoas já tinham me pedido para fazer mais, pagando.',
    'Só que as primeiras receitas davam errado: com álcool demais, o geladinho virava raspadinha mole e derretia no caminho. Foram semanas testando proporção, açúcar e fruta até chegar na fórmula que congela firme e mantém o gosto do drink.',
    'Daí em diante foi encomenda de condomínio, festa, aniversário e praia. Montei um cardápio, aprendi a calcular o preço de cada unidade e transformei isso numa renda de verdade no verão.',
    'Hoje eu ensino exatamente o que eu faço, do primeiro lote ao cardápio pronto, para você começar na sua cozinha e aproveitar o verão para ganhar dinheiro.',
  ],
};

/** Contas da tela "o custo é acessível" (valores por unidade, em reais). */
export const contas = { custoUnidade: 1.8, precoVenda: 7, porDia: 15, dias: 30 };

export const imagens = {
  logo: '/img/logo.webp',
  abertura: '', // pôster da oferta
  facil: '', // especialista preparando os geladinhos
  custo: '', // ingredientes e materiais na mesa
  mockup: '', // material no celular/tablet
  galeria: [
    { img: '', aluno: 'Aluna Patrícia', foto: '', legenda: 'Geladinhos da aluna Patrícia' },
    { img: '', aluno: 'Aluno Diego', foto: '', legenda: 'Geladinhos do aluno Diego' },
    { img: '', aluno: 'Aluna Larissa', foto: '', legenda: 'Geladinhos da aluna Larissa' },
    { img: '', aluno: 'Aluna Simone', foto: '', legenda: 'Geladinhos da aluna Simone' },
  ],
  sabores: [
    { nome: 'Caipirinha de Limão', img: '', cor: '#9ED43A', pedaco: '#4F7F18' },
    { nome: 'Maracujá Tropical', img: '', cor: '#FFA928', pedaco: '#3A2A12' },
    { nome: 'Morango com Vodka', img: '', cor: '#E83E8C', pedaco: '#8C1E4E' },
    { nome: 'Piña Colada', img: '', cor: '#FFE19A', pedaco: '#E3A92B' },
    { nome: 'Mojito', img: '', cor: '#C6EC8C', pedaco: '#2F7A3A' },
    { nome: 'Sex on the Beach', img: '', cor: '#FF7A4D', pedaco: '#B8304A' },
  ],
};

/** Conversas de WhatsApp (renderizadas como print). Troque por prints reais quando tiver. */
export const conversas = [
  {
    nome: 'Patrícia',
    hora: '19:42',
    msgs: [
      { de: 'ela', t: 'Bruna!! fiz a primeira leva de caipirinha seguindo a receita 😍' },
      { de: 'ela', foto: true, legenda: 'geladinhos de caipirinha' },
      { de: 'ela', t: 'levei 30 pro condomínio no sábado e acabou em 2 horas, tô chocada' },
      { de: 'ela', t: 'já tenho encomenda de 50 pra uma festa semana que vem 🙏' },
      { de: 'eu', t: 'Que orgulho, Paty!! Ficaram lindos 😍' },
      { de: 'eu', t: 'É só o começo, bora aproveitar o verão 🔥' },
    ],
  },
  {
    nome: 'Larissa',
    hora: '21:08',
    msgs: [
      { de: 'ela', t: 'oi Bruna, passando pra agradecer' },
      { de: 'ela', t: 'eu nunca tinha feito nem geladinho comum e consegui de primeira, a explicação é muito fácil' },
      { de: 'ela', foto: true, legenda: 'geladinhos de morango e maracujá' },
      { de: 'ela', t: 'meu marido levou pro trabalho e vendeu tudo, voltou com R$ 210 no bolso 😂' },
      { de: 'eu', t: 'Aaaah que demais, Lari! 💛' },
    ],
  },
];

/** Comentários da comunidade (seção da oferta). */
export const comentarios = [
  { nome: 'Renata Alves', user: '@renata.alves', t: 'Material muito bem explicado. Fiz o de piña colada pra um aniversário e todo mundo pediu o contato.' },
  { nome: 'Diego Ferreira', user: '@diegoferr', t: 'Comecei vendendo na praia no fim de semana, a calculadora de preço ajudou demais. Recomendo.' },
  { nome: 'Simone Costa', user: '@simone.costa', t: 'Achei que ia ser difícil por causa do álcool, mas com a fórmula congela certinho. Já estou no terceiro lote.' },
];

export const BONUS = [
  { t: 'Guia do Geladinho Perfeito', d: 'como evitar os erros que deixam o geladinho mole, aguado ou com gelo grosso, e como conservar por mais tempo.' },
  { t: 'Embalagens que Valorizam seu Geladinho', d: 'tamanhos, saquinhos, etiquetas e a apresentação que deixa o produto com cara de gourmet.' },
  { t: 'Cardápio dos 10 Primeiros Sabores', d: 'os sabores certos para começar, sem precisar produzir as 30 receitas de uma vez.' },
  { t: 'Plano de 7 Dias para Começar a Vender', d: 'do primeiro teste à primeira venda, com o que fazer em cada dia.' },
];

export const APRENDE = [
  'As **30 receitas** de geladinhos de drinks, com medidas, rendimento e passo a passo',
  'A **Fórmula Drink que Congela**: a proporção certa de álcool para o geladinho ficar firme e com gosto de drink',
  'Como deixar o geladinho **cremoso e sem gelo grosso**, mesmo no freezer de casa',
  'Montagem, embalagem e etiqueta para ter um **geladinho de vitrine**',
  'Como **calcular o custo** de cada unidade e definir o preço com lucro',
  'Onde e como vender: **condomínio, praia, festas, encomendas e WhatsApp**',
  'Cardápio e mensagens prontas para **divulgar e fechar as primeiras vendas**',
  '**Acesso vitalício**, para consultar sempre que quiser',
];
