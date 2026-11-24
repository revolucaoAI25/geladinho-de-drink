// Picolés, paletas e sacolés especiais. tipo: picole (80 ml) · paleta (110 ml) · sacole (120 ml) · sacoleG (200 ml)
export const CATS_PI = [
  { id: 'fruta', nome: 'Picolés de fruta', preco: 5, cor: '#FF8A65', desc: 'Fruta de verdade no palito: o picolé artesanal que compete com qualquer sorveteria.' },
  { id: 'casquinha', nome: 'Cremosos com casquinha', preco: 7, cor: '#6B4330', desc: 'Picolé cremoso mergulhado em chocolate que endurece na hora: o mais desejado da vitrine.' },
  { id: 'paleta', nome: 'Paletas recheadas', preco: 10, cor: '#E83E8C', desc: 'O estilo mexicano: grande, com pedaços e um recheio cremoso escondido no centro.' },
  { id: 'drink', nome: 'Picolés de drink', preco: 8, cor: '#0D6F6B', desc: 'O seu geladinho de drink em versão palito, para festas e eventos de adultos.' },
  { id: 'sacole', nome: 'Sacolés especiais', preco: 7, cor: '#FFC538', desc: 'Recheados, em camadas, degradê e gigantes: o saquinho que parece produto de loja.' },
];

const CASQUINHA = [['250 g de chocolate fracionado (para a casquinha)', 'cobertura', 250], ['50 g de óleo de coco', 'oleoCoco', 50]];

export const RECEITAS_PI = [
  // ---------------- FRUTA ----------------
  {
    cat: 'fruta', tipo: 'picole', nome: 'Morango com Pedaços', foto: null, cor: '#E8364E', tempo: 15, nivel: 'Muito fácil',
    desc: 'Vermelho intenso e cheio de fruta. O picolé de fruta mais vendido do Brasil.',
    ing: [['400 g de morangos (300 g para bater + 100 g em cubinhos)', 'morango', 400], ['350 ml de água filtrada', 'agua', 350], ['170 g de açúcar', 'acucar', 170], ['20 ml de suco de limão', 'sucoLimao', 20]],
    prep: ['Bata 300 g de morangos com a água, o açúcar e o limão.', 'Distribua os cubinhos de morango nas cavidades da forma.', 'Complete com a mistura, deixando 0,5 cm livre na borda.', 'Coloque os palitos (veja a técnica na Parte 1) e congele por 6 horas.'],
    dica: 'Para os pedaços aparecerem por fora, coloque-os **antes** do líquido, encostados nas paredes da forma.',
  },
  {
    cat: 'fruta', tipo: 'picole', nome: 'Manga com Limão', foto: null, cor: '#FFA62B', tempo: 15, nivel: 'Muito fácil',
    desc: 'Manga aveludada com um toque azedinho de limão. Cor de pôr do sol.',
    ing: [['500 g de polpa de manga madura', 'manga', 500], ['300 ml de água filtrada', 'agua', 300], ['130 g de açúcar', 'acucar', 130], ['40 ml de suco de limão', 'sucoLimao', 40]],
    prep: ['Bata todos os ingredientes até ficar liso.', 'Coe se a manga tiver fiapos.', 'Encha as formas e coloque os palitos.', 'Congele por 6 horas.'],
    dica: 'Picolé precisa de mais polpa que o sacolé: é a fibra da fruta que deixa ele firme no palito sem quebrar.',
  },
  {
    cat: 'fruta', tipo: 'picole', nome: 'Abacaxi com Coco', foto: null, cor: '#F6E9A8', tempo: 15, nivel: 'Fácil',
    desc: 'Tropical e levemente cremoso, com pedaços de abacaxi.',
    ing: [['450 g de abacaxi (350 g para bater + 100 g em cubinhos)', 'abacaxi', 450], ['200 ml de leite de coco', 'leiteCoco', 200], ['200 ml de água filtrada', 'agua', 200], ['130 g de açúcar', 'acucar', 130], ['30 g de coco ralado', 'cocoRalado', 30]],
    prep: ['Bata 350 g de abacaxi com o leite de coco, a água e o açúcar.', 'Misture o coco ralado e os cubinhos.', 'Encha as formas mexendo, coloque os palitos.', 'Congele por 6 horas.'],
    dica: 'O leite de coco deixa o picolé de fruta mais macio na mordida.',
  },
  {
    cat: 'fruta', tipo: 'picole', nome: 'Limão-Siciliano', foto: null, cor: '#F4EFA0', tempo: 15, nivel: 'Muito fácil',
    desc: 'Cítrico, perfumado e com raspas. O picolé “refrescante de verdade”.',
    ing: [['180 ml de suco de limão-siciliano (4 limões)', 'sucoSiciliano', 180], ['600 ml de água filtrada', 'agua', 600], ['230 g de açúcar', 'acucar', 230], ['Raspas de 2 limões-sicilianos', 'agua', 0]],
    prep: ['Dissolva o açúcar na água morna e deixe esfriar.', 'Junte o suco e as raspas.', 'Encha as formas e coloque os palitos.', 'Congele por 6 horas.'],
    dica: 'Dissolver o açúcar em água morna evita grãos no fundo e deixa o picolé mais liso.',
  },

  // ---------------- CREMOSOS COM CASQUINHA ----------------
  {
    cat: 'casquinha', tipo: 'picole', nome: 'Ninho com Casquinha de Chocolate', foto: null, cor: '#4A2A1A', tempo: 35, nivel: 'Médio', destaque: 'Mais vendido',
    desc: 'Creme de leite Ninho por dentro, casquinha de chocolate que estala por fora.',
    ing: [['700 ml de leite integral', 'leite', 700], ['1 lata de leite condensado (395 g)', 'leiteCond', 395], ['80 g de leite em pó Ninho', 'ninho', 80], ['25 g de amido de milho', 'maisena', 25], ...CASQUINHA],
    prep: ['Cozinhe leite, leite condensado e amido até engrossar; fora do fogo, bata com o Ninho.', 'Esfrie rápido, encha as formas e coloque os palitos. Congele 8 horas.', 'Desenforme e deixe os picolés 15 minutos no freezer sobre papel-manteiga.', 'Banhe na casquinha (técnica na Parte 1) e volte ao freezer por 5 minutos antes de embalar.'],
    dica: 'O picolé precisa estar **muito gelado** na hora do banho: é o choque de temperatura que faz a casquinha endurecer em segundos.',
  },
  {
    cat: 'casquinha', tipo: 'picole', nome: 'Coco com Casquinha', foto: null, cor: '#6B4330', tempo: 35, nivel: 'Médio',
    desc: 'Picolé de coco cremoso com casquinha de chocolate: o “prestígio” de palito.',
    ing: [['500 ml de leite integral', 'leite', 500], ['200 ml de leite de coco', 'leiteCoco', 200], ['1 lata de leite condensado (395 g)', 'leiteCond', 395], ['50 g de coco ralado', 'cocoRalado', 50], ['20 g de amido de milho', 'maisena', 20], ...CASQUINHA],
    prep: ['Cozinhe leite, leite de coco, leite condensado e amido até engrossar.', 'Misture o coco ralado, esfrie e encha as formas. Congele 8 horas.', 'Desenforme e deixe 15 minutos no freezer.', 'Banhe na casquinha e volte ao freezer por 5 minutos.'],
    dica: 'Use chocolate meio amargo na casquinha: o contraste com o coco doce fica perfeito.',
  },
  {
    cat: 'casquinha', tipo: 'picole', nome: 'Chocolate Trufado', foto: null, cor: '#3B2216', tempo: 35, nivel: 'Médio',
    desc: 'Chocolate cremoso por dentro e por fora. Para quem é “chocólatra”.',
    ing: [['700 ml de leite integral', 'leite', 700], ['1 lata de leite condensado (395 g)', 'leiteCond', 395], ['60 g de chocolate em pó 50%', 'chocPo', 60], ['25 g de amido de milho', 'maisena', 25], ...CASQUINHA],
    prep: ['Dissolva chocolate e amido no leite frio, junte o leite condensado e cozinhe até engrossar.', 'Esfrie, encha as formas e congele 8 horas.', 'Desenforme e deixe 15 minutos no freezer.', 'Banhe na casquinha e, ainda mole, salpique granulado ou castanha picada.'],
    dica: 'Salpique o acabamento nos primeiros 5 segundos: depois disso a casquinha já endureceu.',
  },
  {
    cat: 'casquinha', tipo: 'picole', nome: 'Morango com Casquinha Branca', foto: null, cor: '#F7A8B8', tempo: 35, nivel: 'Médio',
    desc: 'Morango cremoso com casquinha de chocolate branco. Lindo na foto.',
    ing: [['400 g de morangos', 'morango', 400], ['1 lata de leite condensado (395 g)', 'leiteCond', 395], ['400 ml de leite integral', 'leite', 400], ['200 g de creme de leite', 'cremeLeite', 200], ['250 g de chocolate branco fracionado', 'cobertura', 250], ['50 g de óleo de coco', 'oleoCoco', 50]],
    prep: ['Bata morangos, leite condensado, leite e creme de leite.', 'Encha as formas e congele 8 horas.', 'Desenforme e deixe 15 minutos no freezer.', 'Banhe no chocolate branco e decore com fios de chocolate ao leite.'],
    dica: 'Chocolate branco queima fácil: derreta de 20 em 20 segundos no micro-ondas, mexendo entre uma e outra.',
  },

  // ---------------- PALETAS RECHEADAS ----------------
  {
    cat: 'paleta', tipo: 'paleta', nome: 'Paleta de Morango com Leite Condensado', foto: null, cor: '#E8364E', tempo: 40, nivel: 'Médio', destaque: 'Mais pedida',
    desc: 'Morango em pedaços com recheio de leite condensado cozido no centro.',
    ing: [['500 g de morangos (400 g para bater + 100 g em pedaços)', 'morango', 500], ['400 ml de leite integral', 'leite', 400], ['200 g de leite condensado (para a base)', 'leiteCond', 200], ['200 g de creme de leite', 'cremeLeite', 200], ['200 g de leite condensado cozido (recheio)', 'leiteCond', 200]],
    prep: ['Bata 400 g de morango com leite, leite condensado e creme de leite.', 'Coloque pedaços de morango na forma e encha **um terço** com a base. Congele 40 minutos.', 'Com saco de confeitar, faça um “cordão” de recheio no centro e coloque o palito.', 'Complete com a base e congele 8 horas.'],
    dica: 'Recheio cozido (doce de leite de lata ou leite condensado cozido na pressão) não congela duro: fica cremoso no meio da paleta.',
  },
  {
    cat: 'paleta', tipo: 'paleta', nome: 'Paleta de Ninho com Creme de Avelã', foto: null, cor: '#F4EBDD', tempo: 40, nivel: 'Médio',
    desc: 'A paleta mais famosa das paleterias: Ninho cremoso com coração de avelã.',
    ing: [['700 ml de leite integral', 'leite', 700], ['1 lata de leite condensado (395 g)', 'leiteCond', 395], ['100 g de leite em pó Ninho', 'ninho', 100], ['25 g de amido de milho', 'maisena', 25], ['200 g de creme de avelã (recheio)', 'avela', 200]],
    prep: ['Faça a base de Ninho (cozida) e deixe gelar.', 'Encha um terço da forma e congele 40 minutos.', 'Faça o cordão de creme de avelã no centro e coloque o palito.', 'Complete com a base e congele 8 horas.'],
    dica: 'Deixe o creme de avelã em temperatura ambiente: frio, ele não passa pelo bico do saco de confeitar.',
  },
  {
    cat: 'paleta', tipo: 'paleta', nome: 'Paleta de Maracujá com Brigadeiro', foto: null, cor: '#FCD96B', tempo: 45, nivel: 'Médio',
    desc: 'Mousse de maracujá com recheio de brigadeiro mole. Doce e azedinho na mesma mordida.',
    ing: [['1 lata de leite condensado (395 g)', 'leiteCond', 395], ['250 ml de polpa de maracujá', 'polpaMaracuja', 250], ['200 g de creme de leite', 'cremeLeite', 200], ['400 ml de leite integral', 'leite', 400], ['Brigadeiro mole: 200 g de leite condensado + 20 g de chocolate em pó', 'leiteCond', 200], ['', 'chocPo', 20]],
    prep: ['Bata leite condensado, polpa, creme de leite e leite.', 'Brigadeiro mole: cozinhe leite condensado e chocolate por 5 minutos (bem mole) e esfrie.', 'Encha um terço da forma, congele 40 minutos, faça o cordão de brigadeiro e coloque o palito.', 'Complete com o mousse e congele 8 horas.'],
    dica: 'Brigadeiro para recheio é bem mais mole que o de enrolar: tire do fogo quando começar a engrossar.',
  },
  {
    cat: 'paleta', tipo: 'paleta', nome: 'Paleta de Cookies com Doce de Leite', foto: null, cor: '#E9E4DE', tempo: 40, nivel: 'Médio',
    desc: 'Creme branco com biscoito recheado e coração de doce de leite.',
    ing: [['700 ml de leite integral', 'leite', 700], ['1 lata de leite condensado (395 g)', 'leiteCond', 395], ['50 g de leite em pó Ninho', 'ninho', 50], ['20 g de amido de milho', 'maisena', 20], ['1 pacote de biscoito tipo Oreo (90 g)', 'oreo', 90], ['200 g de doce de leite (recheio)', 'doceLeite', 200]],
    prep: ['Faça a base cozida com Ninho e deixe gelar.', 'Misture o biscoito quebrado só na hora de encher.', 'Encha um terço, congele 40 minutos, faça o cordão de doce de leite e coloque o palito.', 'Complete e congele 8 horas.'],
    dica: 'Coloque meio biscoito inteiro encostado na parede da forma: ele aparece na paleta e vende pela foto.',
  },

  // ---------------- PICOLÉS DE DRINK ----------------
  {
    cat: 'drink', tipo: 'picole', nome: 'Picolé de Caipirinha', foto: null, cor: '#B5DD63', tempo: 20, nivel: 'Fácil',
    desc: 'O clássico brasileiro no palito, com rodela de limão aparecendo.',
    ing: [['650 ml de água filtrada', 'agua', 650], ['220 g de açúcar', 'acucar', 220], ['170 ml de suco de limão', 'sucoLimao', 170], ['2 limões em rodelas finas', 'limaoPedaco', 2], ['80 ml de cachaça', 'cachaca', 80]],
    prep: ['Dissolva o açúcar na água e junte o suco de limão.', 'Coloque uma rodela fina de limão encostada na parede de cada cavidade.', 'Junte a cachaça à mistura fria e encha as formas.', 'Coloque os palitos e congele por **no mínimo 10 horas**.'],
    dica: 'No palito, use **menos bebida** que no sacolé (80 ml por litro, ≈ 3%): mais que isso, o picolé fica mole e escorrega do palito.',
  },
  {
    cat: 'drink', tipo: 'picole', nome: 'Picolé de Piña Colada', foto: null, cor: '#F6E9C0', tempo: 20, nivel: 'Fácil',
    desc: 'Abacaxi, coco e rum: cremoso e firme no palito.',
    ing: [['400 g de abacaxi', 'abacaxi', 400], ['200 ml de leite de coco', 'leiteCoco', 200], ['200 g de leite condensado', 'leiteCond', 200], ['250 ml de leite integral', 'leite', 250], ['80 ml de rum branco', 'rum', 80]],
    prep: ['Bata o abacaxi com o leite de coco, o leite condensado e o leite.', 'Junte o rum à mistura fria.', 'Encha as formas e coloque os palitos.', 'Congele por no mínimo 10 horas.'],
    dica: 'A gordura do coco ajuda o picolé de drink a firmar. É o sabor alcoólico mais fácil de fazer no palito.',
  },
  {
    cat: 'drink', tipo: 'picole', nome: 'Picolé de Morango com Espumante', foto: null, cor: '#F59AB0', tempo: 20, nivel: 'Fácil', destaque: 'Para festas',
    desc: 'Morango com espumante: elegante, rosado e perfeito para casamentos e réveillon.',
    ing: [['400 g de morangos', 'morango', 400], ['250 ml de espumante brut', 'espumante', 250], ['250 ml de água filtrada', 'agua', 250], ['170 g de açúcar', 'acucar', 170], ['20 ml de suco de limão', 'sucoLimao', 20]],
    prep: ['Bata os morangos com a água, o açúcar e o limão.', 'Junte o espumante **devagar** (ele espuma) e misture com colher.', 'Encha as formas e coloque os palitos.', 'Congele por no mínimo 10 horas.'],
    dica: 'Venda em festas de casamento e réveillon como “picolé de brinde”. Tem preço de doce fino.',
  },

  // ---------------- SACOLÉS ESPECIAIS ----------------
  {
    cat: 'sacole', tipo: 'sacole', nome: 'Sacolé Trufado de Brigadeiro', foto: null, cor: '#5A3420', tempo: 35, nivel: 'Médio',
    desc: 'Casquinha de chocolate por dentro do saquinho e creme de brigadeiro.',
    ing: [['800 ml de leite integral', 'leite', 800], ['1 lata de leite condensado (395 g)', 'leiteCond', 395], ['50 g de chocolate em pó 50%', 'chocPo', 50], ['20 g de amido de milho', 'maisena', 20], ['200 g de chocolate fracionado (parede trufada)', 'cobertura', 200]],
    prep: ['Faça a base de brigadeiro (cozida) e deixe gelar.', 'Pincele o chocolate derretido por dentro dos saquinhos e leve ao freezer por 10 minutos.', 'Encha com o creme frio.', 'Feche e congele.'],
    dica: 'Pincel de silicone e chocolate a uns 35 °C: a camada fica fina e por igual.',
  },
  {
    cat: 'sacole', tipo: 'sacole', nome: 'Sacolé Recheado de Ninho com Avelã', foto: null, cor: '#F4EBDD', tempo: 40, nivel: 'Médio',
    desc: 'Ninho cremoso com um núcleo de creme de avelã que aparece na mordida.',
    ing: [['800 ml de leite integral', 'leite', 800], ['1 lata de leite condensado (395 g)', 'leiteCond', 395], ['80 g de leite em pó Ninho', 'ninho', 80], ['25 g de amido de milho', 'maisena', 25], ['200 g de creme de avelã (núcleo)', 'avela', 200]],
    prep: ['Faça a base de Ninho e deixe gelar.', 'Encha os saquinhos até a metade e congele **em pé** por 1 hora.', 'Com saco de confeitar, coloque 1 colher (sopa) de creme de avelã no centro.', 'Complete com a base, feche e congele.'],
    dica: 'Para os saquinhos ficarem em pé, use uma garrafa PET cortada ou um escorredor de talheres como suporte.',
  },
  {
    cat: 'sacole', tipo: 'sacole', nome: 'Sacolé Tropical em 3 Camadas', foto: null, cor: '#FFB627', tempo: 45, nivel: 'Médio', destaque: 'Mais fotogênico',
    desc: 'Kiwi, manga e morango em três faixas de cor. Vende pela foto.',
    ing: [['200 g de kiwi', 'kiwi', 200], ['250 g de manga', 'manga', 250], ['250 g de morangos', 'morango', 250], ['450 ml de água filtrada (150 ml por fruta)', 'agua', 450], ['200 g de açúcar (≈ 65 g por fruta)', 'acucar', 200]],
    prep: ['Bata cada fruta separada com 150 ml de água e ≈ 65 g de açúcar.', 'Encha 1/3 do saquinho com o morango e congele em pé por 40 minutos.', 'Junte a camada de manga e congele mais 40 minutos.', 'Complete com o kiwi, feche e congele.'],
    dica: 'Comece pela cor mais escura embaixo. As camadas ficam mais nítidas se a de baixo estiver **firme** antes de colocar a próxima.',
  },
  {
    cat: 'sacole', tipo: 'sacole', nome: 'Sacolé Degradê Pink Lemonade', foto: null, cor: '#F27B9B', tempo: 20, nivel: 'Fácil',
    desc: 'Groselha no fundo e limonada por cima: degradê rosa que impressiona.',
    ing: [['750 ml de água filtrada', 'agua', 750], ['170 g de açúcar', 'acucar', 170], ['180 ml de suco de limão', 'sucoLimao', 180], ['120 ml de xarope de groselha', 'groselha', 120]],
    prep: ['Faça a limonada: água, açúcar e limão.', 'Coloque 1 colher (sopa) de groselha no fundo de cada saquinho.', 'Encha **devagar pela parede** com a limonada gelada: a groselha, mais densa, fica embaixo.', 'Congele em pé por 2 horas e depois deite.'],
    dica: 'O degradê funciona porque o xarope é mais pesado (denso) que a limonada. Se misturar demais, foi porque o líquido entrou rápido.',
  },
  {
    cat: 'sacole', tipo: 'sacoleG', nome: 'Sacolé Gigante de Açaí com Ninho', foto: null, cor: '#4B1E4A', tempo: 20, nivel: 'Fácil',
    desc: 'Saquinho grande (200 ml) de açaí com camadas de creme de Ninho.',
    ing: [['400 g de polpa de açaí', 'acai', 400], ['2 bananas (≈ 200 g)', 'banana', 200], ['150 ml de água filtrada', 'agua', 150], ['150 g de açúcar', 'acucar', 150], ['200 ml de suco de uva integral', 'sucoUva', 200], ['Creme de Ninho: 200 g de leite condensado + 60 g de Ninho', 'leiteCond', 200], ['', 'ninho', 60], ['200 ml de leite integral', 'leite', 200]],
    prep: ['Bata açaí, banana, água, açúcar e suco de uva.', 'Misture leite condensado, Ninho e leite para o creme.', 'Em saquinhos 7×25 cm, alterne camadas de açaí e creme (3 a 4 camadas).', 'Feche e congele deitado.'],
    dica: 'Tamanho maior, preço maior: o “gigante” é vendido como lanche, não como sobremesa.',
  },
];

const slug = (s) => s.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
/** Foto de cada receita: img/pi-<nome>.jpg (até chegar, a página mostra um painel de cor). */
RECEITAS_PI.forEach((r) => (r.foto = r.foto || `pi-${slug(r.nome)}.jpg`));
