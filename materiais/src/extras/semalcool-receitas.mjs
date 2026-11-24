// 30 geladinhos gourmet sem álcool (120 ml). [texto, id, quantidade]
export const CATS_SA = [
  { id: 'cremoso', nome: 'Cremosos clássicos', preco: 6, cor: '#F2D3A8', desc: 'Os campeões de venda de qualquer bairro: textura de sorvete, sabor de doce de festa.' },
  { id: 'gourmet', nome: 'Gourmet premium', preco: 7, cor: '#E83E8C', desc: 'Sabores de confeitaria que justificam preço maior e viram foto no Instagram.' },
  { id: 'fruta', nome: 'Frutas de verdade', preco: 5, cor: '#9ED43A', desc: 'Leves, refrescantes e baratos de produzir. Vendem muito no calor e para quem evita leite.' },
  { id: 'brasil', nome: 'Brasileiríssimos', preco: 5, cor: '#FFC538', desc: 'Os sabores de infância que todo mundo reconhece e que quase ninguém vende bem feito.' },
];

export const RECEITAS_SA = [
  // ---------------- CREMOSOS CLÁSSICOS ----------------
  {
    cat: 'cremoso', nome: 'Ninho com Creme de Avelã', foto: null, cor: '#F4EBDD', tempo: 25, nivel: 'Fácil', destaque: 'Campeão de vendas',
    desc: 'O sabor mais pedido do Brasil: leite Ninho bem cremoso com listras de creme de avelã na parede do saquinho.',
    ing: [['700 ml de leite integral', 'leite', 700], ['1 lata de leite condensado (395 g)', 'leiteCond', 395], ['200 g de creme de leite', 'cremeLeite', 200], ['80 g de leite em pó Ninho', 'ninho', 80], ['25 g de amido de milho', 'maisena', 25], ['80 g de creme de avelã (tipo Nutella)', 'avela', 80]],
    prep: ['Faça a base cremosa: leve leite, leite condensado e amido ao fogo médio, mexendo até engrossar levemente (5 a 6 min após ferver).', 'Desligue, junte o creme de leite e o Ninho e bata 1 minuto no liquidificador.', 'Esfrie rápido em banho-maria com gelo e leve à geladeira por 2 horas.', 'Com uma colher, passe **listras de creme de avelã** por dentro do saquinho antes de encher.', 'Encha com 120 ml da base fria, feche e congele deitado.'],
    dica: 'Amorne o creme de avelã por 10 segundos no micro-ondas: ele escorre melhor e as listras ficam finas e bonitas.',
  },
  {
    cat: 'cremoso', nome: 'Brigadeiro', foto: null, cor: '#5A3420', tempo: 25, nivel: 'Fácil',
    desc: 'Chocolate intenso, cremoso e com granulado: gosto de festa de aniversário.',
    ing: [['800 ml de leite integral', 'leite', 800], ['1 lata de leite condensado (395 g)', 'leiteCond', 395], ['200 g de creme de leite', 'cremeLeite', 200], ['50 g de chocolate em pó 50%', 'chocPo', 50], ['20 g de amido de milho', 'maisena', 20], ['30 g de granulado de chocolate', 'granulado', 30]],
    prep: ['Dissolva o chocolate e o amido no leite frio, sem empelotar.', 'Junte o leite condensado e cozinhe em fogo médio, mexendo, até engrossar (cerca de 8 min).', 'Fora do fogo, misture o creme de leite e bata 1 minuto.', 'Esfrie rápido e leve à geladeira por 2 horas.', 'Coloque 1 colher (chá) de granulado no fundo do saquinho, encha e congele.'],
    dica: 'Chocolate 50% dá cor e sabor de brigadeiro de verdade. Achocolatado deixa o geladinho doce demais e sem gosto de chocolate.',
  },
  {
    cat: 'cremoso', nome: 'Morango com Leite Condensado', foto: null, cor: '#F7A8B8', tempo: 20, nivel: 'Muito fácil',
    desc: 'Rosa, cremoso e com pedaços de morango. Agrada criança e adulto.',
    ing: [['400 g de morangos (300 g para bater + 100 g em cubinhos)', 'morango', 400], ['1 lata de leite condensado (395 g)', 'leiteCond', 395], ['600 ml de leite integral', 'leite', 600], ['200 g de creme de leite', 'cremeLeite', 200]],
    prep: ['Bata 300 g de morango com o leite e o leite condensado.', 'Junte o creme de leite e bata mais 20 segundos.', 'Misture os morangos em cubinhos.', 'Encha os saquinhos mexendo a jarra para distribuir os pedaços e congele.'],
    dica: 'Este não precisa ir ao fogo: a fruta crua deixa a cor mais viva. Use morangos bem lavados e higienizados.',
  },
  {
    cat: 'cremoso', nome: 'Mousse de Maracujá', foto: null, cor: '#FCD96B', tempo: 15, nivel: 'Muito fácil',
    desc: 'Azedinho, cremoso e com sementes aparecendo. Sabor de sobremesa de domingo.',
    ing: [['1 lata de leite condensado (395 g)', 'leiteCond', 395], ['250 ml de polpa de maracujá', 'polpaMaracuja', 250], ['200 g de creme de leite', 'cremeLeite', 200], ['500 ml de leite integral', 'leite', 500], ['Sementes de 1 maracujá', 'agua', 0]],
    prep: ['Bata a polpa (sem sementes) com o leite condensado por 1 minuto.', 'Junte o leite e o creme de leite e bata mais 20 segundos.', 'Misture as sementes com colher.', 'Encha e congele.'],
    dica: 'O ácido do maracujá engrossa o leite condensado. Se a mistura ficar firme demais para encher, junte mais 50 ml de leite.',
  },
  {
    cat: 'cremoso', nome: 'Beijinho de Coco', foto: null, cor: '#FFFFFF', tempo: 25, nivel: 'Fácil',
    desc: 'Coco cremoso com coco ralado: o doce de festa que virou geladinho.',
    ing: [['600 ml de leite integral', 'leite', 600], ['200 ml de leite de coco', 'leiteCoco', 200], ['1 lata de leite condensado (395 g)', 'leiteCond', 395], ['200 g de creme de leite', 'cremeLeite', 200], ['50 g de coco ralado', 'cocoRalado', 50], ['15 g de amido de milho', 'maisena', 15]],
    prep: ['Cozinhe leite, leite de coco, leite condensado e amido até engrossar levemente.', 'Fora do fogo, junte o creme de leite e bata.', 'Misture o coco ralado.', 'Esfrie, leve à geladeira 2 horas, encha e congele.'],
    dica: 'Toste metade do coco ralado numa frigideira seca por 2 minutos: o sabor fica muito mais intenso.',
  },
  {
    cat: 'cremoso', nome: 'Paçoca', foto: null, cor: '#D9B38C', tempo: 15, nivel: 'Muito fácil',
    desc: 'Cremoso de amendoim com pedacinhos de paçoca. Vende muito em festa junina e no frio também.',
    ing: [['6 paçocas (≈ 130 g)', 'pacoca', 130], ['1 lata de leite condensado (395 g)', 'leiteCond', 395], ['700 ml de leite integral', 'leite', 700], ['200 g de creme de leite', 'cremeLeite', 200]],
    prep: ['Bata 4 paçocas com o leite e o leite condensado por 1 minuto.', 'Junte o creme de leite e bata mais 20 segundos.', 'Esfarele as 2 paçocas restantes e misture.', 'Encha e congele.'],
    dica: 'Paçoca de rolha esfarela por igual e deixa o geladinho com textura mais fina.',
  },
  {
    cat: 'cremoso', nome: 'Doce de Leite', foto: null, cor: '#C98A4B', tempo: 15, nivel: 'Muito fácil',
    desc: 'Caramelado e aveludado, com fio de doce de leite por dentro.',
    ing: [['400 g de doce de leite', 'doceLeite', 400], ['800 ml de leite integral', 'leite', 800], ['200 g de creme de leite', 'cremeLeite', 200], ['50 g de doce de leite para os fios', 'doceLeite', 50]],
    prep: ['Bata 400 g de doce de leite com o leite até ficar liso.', 'Junte o creme de leite e bata mais 20 segundos.', 'Passe um fio de doce de leite na parede do saquinho.', 'Encha e congele.'],
    dica: 'Uma pitada de sal na mistura vira “doce de leite salgado”, que dá para vender como sabor especial.',
  },
  {
    cat: 'cremoso', nome: 'Mousse de Limão', foto: null, cor: '#E6F2C8', tempo: 15, nivel: 'Muito fácil',
    desc: 'Cremoso, azedinho e com raspas verdes: o mais refrescante dos cremosos.',
    ing: [['1 lata de leite condensado (395 g)', 'leiteCond', 395], ['150 ml de suco de limão (5 a 6 limões)', 'sucoLimao', 150], ['200 g de creme de leite', 'cremeLeite', 200], ['550 ml de leite integral', 'leite', 550], ['Raspas de 2 limões', 'agua', 0]],
    prep: ['Bata o leite condensado com o suco de limão por 1 minuto.', 'Junte o leite e o creme de leite e bata mais 20 segundos.', 'Misture as raspas.', 'Encha e congele.'],
    dica: 'Rale só a parte verde da casca. A parte branca deixa o geladinho amargo depois de congelado.',
  },

  // ---------------- GOURMET PREMIUM ----------------
  {
    cat: 'gourmet', nome: 'Ninho Trufado com Morango', foto: null, cor: '#F8D6DC', tempo: 30, nivel: 'Médio', destaque: 'Mais fotogênico',
    desc: 'Base de Ninho, pedaços de morango e parede de chocolate: o geladinho que vira foto.',
    ing: [['700 ml de leite integral', 'leite', 700], ['1 lata de leite condensado (395 g)', 'leiteCond', 395], ['200 g de creme de leite', 'cremeLeite', 200], ['80 g de leite em pó Ninho', 'ninho', 80], ['25 g de amido de milho', 'maisena', 25], ['150 g de morangos em cubinhos', 'morango', 150], ['100 g de chocolate fracionado ao leite', 'cobertura', 100]],
    prep: ['Prepare a base de Ninho como no sabor Ninho com Creme de Avelã e deixe gelar.', 'Derreta o chocolate e, com um pincel, **pinte a parede interna** do saquinho. Leve ao freezer por 10 minutos.', 'Misture os morangos na base fria.', 'Encha os saquinhos trufados e congele.'],
    dica: 'O truque da parede trufada está nas páginas de técnicas. Uma camada fina basta: grossa demais, ela quebra ao morder.',
  },
  {
    cat: 'gourmet', nome: 'Cookies and Cream', foto: null, cor: '#E9E4DE', tempo: 20, nivel: 'Fácil',
    desc: 'Creme branco com pedaços de biscoito recheado de chocolate.',
    ing: [['700 ml de leite integral', 'leite', 700], ['1 lata de leite condensado (395 g)', 'leiteCond', 395], ['200 g de creme de leite', 'cremeLeite', 200], ['50 g de leite em pó Ninho', 'ninho', 50], ['15 g de amido de milho', 'maisena', 15], ['2 pacotes de biscoito tipo Oreo (180 g)', 'oreo', 180]],
    prep: ['Cozinhe leite, leite condensado e amido até engrossar levemente.', 'Junte o creme de leite e o Ninho e bata.', 'Esfrie e leve à geladeira.', 'Quebre os biscoitos em pedaços médios (não triture) e misture só na hora de encher.'],
    dica: 'Misture o biscoito por último: se ficar muito tempo na base, ele amolece e deixa o geladinho cinza.',
  },
  {
    cat: 'gourmet', nome: 'Prestígio', foto: null, cor: '#6B4330', tempo: 30, nivel: 'Médio',
    desc: 'Coco cremoso por dentro e chocolate por fora, como o chocolate famoso.',
    ing: [['600 ml de leite integral', 'leite', 600], ['200 ml de leite de coco', 'leiteCoco', 200], ['1 lata de leite condensado (395 g)', 'leiteCond', 395], ['200 g de creme de leite', 'cremeLeite', 200], ['60 g de coco ralado', 'cocoRalado', 60], ['15 g de amido de milho', 'maisena', 15], ['80 g de chocolate fracionado meio amargo', 'cobertura', 80]],
    prep: ['Faça a base de coco (como o Beijinho) e deixe gelar.', 'Pinte a parede interna dos saquinhos com o chocolate derretido e leve ao freezer 10 minutos.', 'Encha com a base de coco.', 'Feche e congele.'],
    dica: 'Chocolate fracionado (de cobertura) não precisa de temperagem e endurece rápido. É o certo para essa técnica.',
  },
  {
    cat: 'gourmet', nome: 'Romeu e Julieta', foto: null, cor: '#F3E3C8', tempo: 25, nivel: 'Médio',
    desc: 'Creme de queijo com goiabada derretida: o clássico mineiro em versão gelada.',
    ing: [['700 ml de leite integral', 'leite', 700], ['1 lata de leite condensado (395 g)', 'leiteCond', 395], ['200 g de requeijão cremoso', 'requeijao', 200], ['15 g de amido de milho', 'maisena', 15], ['200 g de goiabada', 'goiabada', 200], ['50 ml de água (para a calda)', 'agua', 50]],
    prep: ['Cozinhe leite, leite condensado e amido até engrossar. Fora do fogo, bata com o requeijão.', 'Derreta a goiabada com a água em fogo baixo até virar calda. Deixe esfriar.', 'Coloque 1 colher de calda de goiabada no saquinho.', 'Complete com o creme de queijo frio e congele.'],
    dica: 'Requeijão em copo é mais barato que cream cheese e dá o mesmo sabor de queijo.',
  },
  {
    cat: 'gourmet', nome: 'Pudim de Leite', foto: null, cor: '#F2C46D', tempo: 35, nivel: 'Médio',
    desc: 'Sabor de pudim com calda de caramelo no fundo do saquinho.',
    ing: [['800 ml de leite integral', 'leite', 800], ['1 lata de leite condensado (395 g)', 'leiteCond', 395], ['3 gemas', 'ovo', 3], ['15 g de amido de milho', 'maisena', 15], ['150 g de açúcar (para o caramelo)', 'acucar', 150], ['100 ml de água quente (para o caramelo)', 'agua', 100]],
    prep: ['Bata leite, leite condensado, gemas e amido e cozinhe mexendo até engrossar e ferver por 1 minuto.', 'Esfrie rápido e leve à geladeira.', 'Caramelo: derreta o açúcar até dourar, junte a água quente com cuidado e cozinhe até dissolver. Esfrie.', 'Coloque 1 colher de caramelo no saquinho, complete com o creme e congele.'],
    dica: 'As gemas **sempre cozidas**, nunca cruas: o creme precisa ferver para ficar seguro.',
  },
  {
    cat: 'gourmet', nome: 'Banoffee', foto: null, cor: '#D8B07A', tempo: 20, nivel: 'Fácil',
    desc: 'Banana, doce de leite e canela: o doce inglês que virou febre.',
    ing: [['3 bananas maduras (≈ 300 g)', 'banana', 300], ['300 g de doce de leite', 'doceLeite', 300], ['600 ml de leite integral', 'leite', 600], ['200 g de creme de leite', 'cremeLeite', 200], ['1 pitada de canela', 'canela', 1]],
    prep: ['Bata 2 bananas com o leite e 250 g de doce de leite.', 'Junte o creme de leite e a canela e bata mais 20 segundos.', 'Pique a banana restante em cubinhos e misture.', 'Passe um fio de doce de leite no saquinho, encha e congele.'],
    dica: 'Banana bem madura (com pintinhas pretas) dá mais doçura e sabor, e não escurece tanto.',
  },
  {
    cat: 'gourmet', nome: 'Cheesecake de Frutas Vermelhas', foto: null, cor: '#B8335A', tempo: 30, nivel: 'Médio',
    desc: 'Creme de queijo, calda de frutas vermelhas e farofa de biscoito.',
    ing: [['600 ml de leite integral', 'leite', 600], ['1 lata de leite condensado (395 g)', 'leiteCond', 395], ['150 g de cream cheese', 'creamCheese', 150], ['30 ml de suco de limão', 'sucoLimao', 30], ['150 g de frutas vermelhas congeladas', 'frutasVermelhas', 150], ['50 g de açúcar (para a calda)', 'acucar', 50], ['60 g de biscoito maisena triturado', 'biscoitoMaisena', 60]],
    prep: ['Bata leite, leite condensado, cream cheese e limão até ficar liso.', 'Calda: cozinhe as frutas com o açúcar por 8 minutos. Esfrie.', 'Coloque 1 colher de farofa de biscoito e 1 de calda no saquinho.', 'Complete com o creme e congele.'],
    dica: 'Cream cheese em temperatura ambiente bate sem pelotas.',
  },
  {
    cat: 'gourmet', nome: 'Chocolate com Avelã Crocante', foto: null, cor: '#4A2A1A', tempo: 25, nivel: 'Fácil',
    desc: 'Chocolate cremoso com creme de avelã e flocos crocantes.',
    ing: [['800 ml de leite integral', 'leite', 800], ['1 lata de leite condensado (395 g)', 'leiteCond', 395], ['40 g de chocolate em pó 50%', 'chocPo', 40], ['100 g de creme de avelã', 'avela', 100], ['20 g de amido de milho', 'maisena', 20], ['30 g de flocos de arroz crocantes', 'flocosArroz', 30]],
    prep: ['Cozinhe leite, leite condensado, chocolate e amido até engrossar.', 'Fora do fogo, junte o creme de avelã e bata.', 'Esfrie e leve à geladeira.', 'Misture os flocos na hora de encher (para continuarem crocantes) e congele.'],
    dica: 'Flocos de arroz ficam crocantes mesmo congelados. Cereal comum amolece em poucas horas.',
  },

  // ---------------- FRUTAS ----------------
  {
    cat: 'fruta', nome: 'Limão com Hortelã', foto: null, cor: '#CDEB8B', tempo: 15, nivel: 'Muito fácil',
    desc: 'Limonada com hortelã e pedacinhos de limão. O mais barato do cardápio.',
    ing: [['750 ml de água filtrada gelada', 'agua', 750], ['200 g de açúcar', 'acucar', 200], ['200 ml de suco de limão', 'sucoLimao', 200], ['15 folhas de hortelã', 'folha', 15], ['1 limão em cubinhos, sem o miolo', 'limaoPedaco', 1]],
    prep: ['Dissolva o açúcar na água gelada.', 'Junte o suco de limão e prove: precisa estar mais doce que uma limonada.', 'Junte a hortelã picada fininha e os cubinhos de limão.', 'Encha mexendo a jarra e congele.'],
    dica: 'Bata 5 folhas de hortelã com um pouco da água: a cor fica verdinha por igual.',
  },
  {
    cat: 'fruta', nome: 'Maracujá', foto: null, cor: '#FFB627', tempo: 15, nivel: 'Muito fácil',
    desc: 'Amarelo forte, sementes pretas, sabor intenso.',
    ing: [['550 ml de água filtrada gelada', 'agua', 550], ['220 g de açúcar', 'acucar', 220], ['300 ml de polpa de maracujá com sementes', 'polpaMaracuja', 300]],
    prep: ['Dissolva o açúcar na água.', 'Misture a polpa com colher (não bata, para não quebrar as sementes).', 'Prove e ajuste o açúcar.', 'Encha mexendo e congele.'],
    dica: 'Fora de época, a polpa congelada sai mais barata. Junte as sementes de 1 fruta fresca para o visual.',
  },
  {
    cat: 'fruta', nome: 'Morango com Pedaços', foto: null, cor: '#E8364E', tempo: 15, nivel: 'Muito fácil',
    desc: 'Vermelho vivo e cheio de pedaços de fruta.',
    ing: [['400 g de morangos para bater', 'morango', 400], ['100 g de morangos em cubinhos', 'morango', 100], ['450 ml de água filtrada gelada', 'agua', 450], ['170 g de açúcar', 'acucar', 170], ['20 ml de suco de limão', 'sucoLimao', 20]],
    prep: ['Bata os morangos com a água e o açúcar.', 'Junte o limão (realça a cor).', 'Misture os cubinhos.', 'Encha mexendo e congele.'],
    dica: 'Não coe: as sementinhas mostram que é fruta de verdade.',
  },
  {
    cat: 'fruta', nome: 'Manga', foto: null, cor: '#FFA62B', tempo: 15, nivel: 'Muito fácil',
    desc: 'Aveludado, laranja intenso e naturalmente doce.',
    ing: [['500 g de manga madura (polpa)', 'manga', 500], ['450 ml de água filtrada gelada', 'agua', 450], ['120 g de açúcar', 'acucar', 120], ['20 ml de suco de limão', 'sucoLimao', 20]],
    prep: ['Bata a manga com a água, o açúcar e o limão.', 'Coe se a manga tiver muitos fiapos.', 'Prove e ajuste.', 'Encha e congele.'],
    dica: 'Manga palmer ou tommy, bem madura: rende mais polpa e quase não tem fiapo.',
  },
  {
    cat: 'fruta', nome: 'Abacaxi com Hortelã', foto: null, cor: '#F6E27A', tempo: 15, nivel: 'Muito fácil',
    desc: 'Tropical, refrescante e com o verdinho da hortelã.',
    ing: [['500 g de abacaxi', 'abacaxi', 500], ['400 ml de água filtrada gelada', 'agua', 400], ['130 g de açúcar', 'acucar', 130], ['15 folhas de hortelã', 'folha', 15]],
    prep: ['Bata o abacaxi com a água, o açúcar e 10 folhas de hortelã.', 'Pique fino as folhas restantes e junte.', 'Prove e ajuste.', 'Encha e congele.'],
    dica: 'Use também o miolo do abacaxi no liquidificador: tem sabor e evita desperdício.',
  },
  {
    cat: 'fruta', nome: 'Uva', foto: null, cor: '#6B2A6E', tempo: 10, nivel: 'Muito fácil',
    desc: 'Roxo intenso com meias uvas por dentro. O mais rápido de fazer.',
    ing: [['700 ml de suco de uva integral', 'sucoUva', 700], ['250 ml de água filtrada gelada', 'agua', 250], ['60 g de açúcar', 'acucar', 60], ['100 g de uvas sem semente cortadas ao meio', 'uva', 100]],
    prep: ['Misture o suco, a água e o açúcar.', 'Prove: o suco integral já é doce.', 'Junte as uvas.', 'Encha e congele.'],
    dica: 'Suco integral (não néctar) dá cor e sabor de fruta. Néctar tem muita água e açúcar.',
  },
  {
    cat: 'fruta', nome: 'Melancia com Limão', foto: null, cor: '#FF6F7D', tempo: 15, nivel: 'Muito fácil',
    desc: 'Levíssimo e baratíssimo: perfeito para praia e dias muito quentes.',
    ing: [['800 g de melancia sem casca e sem sementes', 'melancia', 800], ['130 g de açúcar', 'acucar', 130], ['40 ml de suco de limão', 'sucoLimao', 40], ['100 ml de água filtrada gelada', 'agua', 100]],
    prep: ['Bata a melancia rapidamente e coe em peneira grossa.', 'Junte açúcar, limão e água.', 'Prove e ajuste.', 'Encha e congele.'],
    dica: 'Melancia é o sabor de menor custo: ótimo para combos e promoções de praia.',
  },
  {
    cat: 'fruta', nome: 'Açaí com Banana', foto: null, cor: '#4B1E4A', tempo: 15, nivel: 'Fácil',
    desc: 'Açaí cremoso com banana: tem cara de tigela de açaí, cabe no bolso.',
    ing: [['400 g de polpa de açaí', 'acai', 400], ['2 bananas (≈ 200 g)', 'banana', 200], ['300 ml de água filtrada gelada', 'agua', 300], ['120 g de açúcar', 'acucar', 120], ['100 ml de suco de uva integral', 'sucoUva', 100]],
    prep: ['Bata o açaí com a banana, a água, o suco e o açúcar.', 'Prove e ajuste.', 'Encha e congele.'],
    dica: 'O suco de uva realça a cor e o sabor do açaí sem pesar no custo.',
  },

  // ---------------- BRASILEIRÍSSIMOS ----------------
  {
    cat: 'brasil', nome: 'Milho Verde', foto: null, cor: '#F7DD6B', tempo: 25, nivel: 'Fácil',
    desc: 'O clássico de sacolé de bairro: cremoso, docinho e com gosto de curau.',
    ing: [['2 latas de milho verde escorrido (≈ 340 g)', 'milho', 340], ['800 ml de leite integral', 'leite', 800], ['1 lata de leite condensado (395 g)', 'leiteCond', 395], ['1 pitada de canela (opcional)', 'canela', 1]],
    prep: ['Bata o milho com o leite por 2 minutos e passe na peneira, apertando bem.', 'Leve ao fogo com o leite condensado e cozinhe mexendo até ferver e engrossar levemente.', 'Esfrie rápido e leve à geladeira.', 'Encha e congele.'],
    dica: 'Cozinhar é obrigatório: além da segurança, tira o gosto de “milho cru”.',
  },
  {
    cat: 'brasil', nome: 'Abacate Cremoso', foto: null, cor: '#B9D77A', tempo: 15, nivel: 'Muito fácil',
    desc: 'Creme de abacate com limão: sabor de vó, textura de sorvete.',
    ing: [['400 g de polpa de abacate maduro', 'abacate', 400], ['1 lata de leite condensado (395 g)', 'leiteCond', 395], ['600 ml de leite integral', 'leite', 600], ['30 ml de suco de limão', 'sucoLimao', 30]],
    prep: ['Bata todos os ingredientes até ficar bem liso.', 'Prove: o limão evita que escureça.', 'Encha e congele logo.'],
    dica: 'Encha e congele em seguida: abacate oxida rápido em contato com o ar.',
  },
  {
    cat: 'brasil', nome: 'Café Cremoso', foto: null, cor: '#8B5A3C', tempo: 20, nivel: 'Fácil',
    desc: 'Cappuccino gelado para o público adulto. Vende muito em escritórios.',
    ing: [['700 ml de leite integral', 'leite', 700], ['1 lata de leite condensado (395 g)', 'leiteCond', 395], ['15 g de café solúvel', 'cafe', 15], ['15 g de chocolate em pó', 'chocPo', 15], ['15 g de amido de milho', 'maisena', 15]],
    prep: ['Dissolva café, chocolate e amido no leite frio.', 'Junte o leite condensado e cozinhe até engrossar levemente.', 'Esfrie rápido e leve à geladeira.', 'Encha e congele.'],
    dica: 'Uma pitada de canela na mistura vira “cappuccino”, e você pode vender os dois sabores com a mesma base.',
  },
  {
    cat: 'brasil', nome: 'Iogurte com Frutas Vermelhas', foto: null, cor: '#E7A1C0', tempo: 15, nivel: 'Muito fácil',
    desc: 'Leve e azedinho, com calda de frutas vermelhas. Ótima opção “mais leve”.',
    ing: [['2 potes de iogurte natural (340 g)', 'iogurte', 340], ['400 ml de leite integral', 'leite', 400], ['200 g de leite condensado', 'leiteCond', 200], ['100 g de frutas vermelhas congeladas', 'frutasVermelhas', 100], ['50 g de açúcar', 'acucar', 50]],
    prep: ['Bata iogurte, leite condensado e leite.', 'Cozinhe as frutas com o açúcar por 8 minutos e deixe esfriar.', 'Coloque 1 colher de calda no saquinho e complete com o creme.', 'Congele.'],
    dica: 'Iogurte natural integral dá textura mais cremosa que o desnatado.',
  },
  {
    cat: 'brasil', nome: 'Banana com Canela', foto: null, cor: '#EBCB8B', tempo: 15, nivel: 'Muito fácil',
    desc: 'Banana cremosa com canela: barato, nutritivo e agrada as crianças.',
    ing: [['4 bananas maduras (≈ 400 g)', 'banana', 400], ['800 ml de leite integral', 'leite', 800], ['200 g de leite condensado', 'leiteCond', 200], ['2 g de canela em pó', 'canela', 2]],
    prep: ['Bata todos os ingredientes até ficar liso.', 'Prove e ajuste a canela.', 'Encha e congele logo (banana escurece).'],
    dica: 'Com 1 colher de suco de limão na mistura, a banana demora mais para escurecer.',
  },
  {
    cat: 'brasil', nome: 'Groselha com Leite', foto: null, cor: '#F59AB0', tempo: 10, nivel: 'Muito fácil',
    desc: 'O rosa da infância: groselha com leite, cremoso e baratinho.',
    ing: [['800 ml de leite integral', 'leite', 800], ['200 ml de xarope de groselha', 'groselha', 200], ['150 g de leite condensado', 'leiteCond', 150]],
    prep: ['Misture o leite condensado com o leite.', 'Junte a groselha aos poucos, mexendo (assim o leite não talha).', 'Encha e congele.'],
    dica: 'Leite bem gelado e groselha aos poucos: é o segredo para não talhar.',
  },
];

const slug = (s) => s.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
/** Foto de cada receita: img/sa-<nome>.jpg (até chegar, a página mostra um painel de cor). */
RECEITAS_SA.forEach((r) => (r.foto = r.foto || `sa-${slug(r.nome)}.jpg`));
