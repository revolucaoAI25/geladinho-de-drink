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
  foto: '/img/fotos/bruna-especialista.webp',
  avatar: '/img/fotos/bruna-avatar.webp',
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
  icone: '/img/icone.png',
  abertura: '/img/capas/cartaz-abertura.webp', // cartaz da abertura (900x1125)
  cartazOferta: '/img/capas/cartaz-oferta.webp', // cartaz do meio da oferta (900x1125)
  produto: '/img/capas/produto.webp', // capa do treinamento (800x1000)
  bonus: ['/img/capas/bonus-1.webp', '/img/capas/bonus-2.webp', '/img/capas/bonus-3.webp', '/img/capas/bonus-4.webp'],
  facil: '/img/fotos/bruna-cozinha.webp',
  custo: '/img/fotos/ingredientes.webp',
  geladinhos: '/img/fotos/geladinhos.webp',
  galeria: [
    { img: '/img/galeria/patricia.webp', aluno: 'Aluna Patrícia', foto: '/img/alunos/patricia.webp', legenda: 'Patrícia vendeu 30 no condomínio em 2 horas' },
    { img: '/img/galeria/joyce.webp', aluno: 'Aluna Joyce', foto: '/img/alunos/joyce.webp', legenda: 'Joyce faturou R$ 640 num fim de semana de praia' },
    { img: '/img/galeria/larissa.webp', aluno: 'Aluna Larissa', foto: '/img/alunos/larissa.webp', legenda: 'O estoque da Larissa, separado por sabor' },
    { img: '/img/galeria/renata.webp', aluno: 'Aluna Renata', foto: '/img/alunos/renata.webp', legenda: 'Renata entregou 80 numa festa de aniversário' },
  ],
  sabores: [
    { nome: 'Caipirinha de Limão', img: '/img/sabores/caipirinha.webp', cor: '#9ED43A', pedaco: '#4F7F18' },
    { nome: 'Maracujá Tropical', img: '/img/sabores/maracuja.webp', cor: '#FFA928', pedaco: '#3A2A12' },
    { nome: 'Morango com Vodka', img: '/img/sabores/morango.webp', cor: '#E83E8C', pedaco: '#8C1E4E' },
    { nome: 'Piña Colada', img: '/img/sabores/pina-colada.webp', cor: '#FFE19A', pedaco: '#E3A92B' },
    { nome: 'Mojito', img: '/img/sabores/mojito.webp', cor: '#C6EC8C', pedaco: '#2F7A3A' },
    { nome: 'Blue Lagoon', img: '/img/sabores/blue-lagoon.webp', cor: '#2CB7E8', pedaco: '#0E6E93' },
    { nome: 'Sex on the Beach', img: '/img/sabores/sex-on-the-beach.webp', cor: '#FF7A4D', pedaco: '#B8304A' },
    { nome: 'Melancia com Vodka', img: '/img/sabores/melancia.webp', cor: '#F2617A', pedaco: '#3A2A2A' },
    { nome: 'Frutas Vermelhas com Gin', img: '/img/sabores/frutas-vermelhas.webp', cor: '#7B1E4A', pedaco: '#3A0F25' },
    { nome: 'Batida de Coco', img: '/img/sabores/batida-de-coco.webp', cor: '#F6F1E7', pedaco: '#C9A36B' },
  ],
};

/** Prints de conversas no WhatsApp (passam sozinhos na tela de depoimentos). */
export const prints = [
  { img: '/img/whats/1-patricia.webp', nome: 'Patrícia' },
  { img: '/img/whats/5-camila.webp', nome: 'Camila' },
  { img: '/img/whats/2-larissa.webp', nome: 'Larissa' },
  { img: '/img/whats/4-joyce.webp', nome: 'Joyce' },
  { img: '/img/whats/6-fernanda.webp', nome: 'Fernanda' },
  { img: '/img/whats/3-renata.webp', nome: 'Renata' },
];

/** Avaliações da página de oferta. dist = % de 5, 4, 3, 2 e 1 estrela. */
export const avaliacoes = { media: '4,9', total: 1287, dist: [93, 5, 1, 0, 1] };

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
