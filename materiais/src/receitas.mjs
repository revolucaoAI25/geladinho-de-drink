// As 30 receitas. Cada ingrediente: [texto exibido, id, quantidade na unidade do id].
// O gerador calcula volume, teor alcoólico final, rendimento e custo por unidade a partir de ING.

/** preco: R$ por unidade (ml, g ou un) · vol: ml que ocupa por unidade · abv: teor alcoólico (0 a 1). Preços de referência: supermercado, novembro de 2026 (Cachaça 51 965 ml ≈ R$ 21, Smirnoff 998 ml ≈ R$ 32, Montilla 1 L ≈ R$ 35, Gin Rocks 1 L ≈ R$ 41). */
export const ING = {
  agua: { preco: 0, vol: 1 },
  acucar: { preco: 0.005, vol: 0.62 },
  sal: { preco: 0, vol: 0 },
  cachaca: { preco: 0.022, vol: 1, abv: 0.39 },
  vodka: { preco: 0.032, vol: 1, abv: 0.375 },
  rum: { preco: 0.035, vol: 1, abv: 0.38 },
  gin: { preco: 0.045, vol: 1, abv: 0.4 },
  tequila: { preco: 0.12, vol: 1, abv: 0.38 },
  licorLaranja: { preco: 0.064, vol: 1, abv: 0.3 },
  curacau: { preco: 0.055, vol: 1, abv: 0.2 },
  licorPessego: { preco: 0.05, vol: 1, abv: 0.18 },
  licorChoc: { preco: 0.057, vol: 1, abv: 0.17 },
  aperol: { preco: 0.073, vol: 1, abv: 0.11 },
  espumante: { preco: 0.047, vol: 1, abv: 0.115 },
  vinho: { preco: 0.025, vol: 1, abv: 0.12 },
  sucoLimao: { preco: 0.02, vol: 1 },
  sucoSiciliano: { preco: 0.035, vol: 1 },
  limaoPedaco: { preco: 0.6, vol: 25 },
  polpaMaracuja: { preco: 0.025, vol: 1 },
  morango: { preco: 0.03, vol: 1 },
  frutasVermelhas: { preco: 0.07, vol: 1 },
  abacaxi: { preco: 0.011, vol: 1 },
  kiwi: { preco: 0.03, vol: 1 },
  melancia: { preco: 0.006, vol: 0.92 },
  manga: { preco: 0.011, vol: 1 },
  uva: { preco: 0.015, vol: 1 },
  sucoUva: { preco: 0.015, vol: 1 },
  sucoLaranja: { preco: 0.01, vol: 1 },
  nectarPessego: { preco: 0.008, vol: 1 },
  groselha: { preco: 0.02, vol: 1 },
  cranberry: { preco: 0.02, vol: 1 },
  leiteCond: { preco: 0.0177, vol: 0.77 },
  cremeLeite: { preco: 0.02, vol: 1 },
  leite: { preco: 0.005, vol: 1 },
  leiteCoco: { preco: 0.03, vol: 1 },
  aguaCoco: { preco: 0.009, vol: 1 },
  cocoRalado: { preco: 0.09, vol: 0.5 },
  chocPo: { preco: 0.07, vol: 0.6 },
  amendoim: { preco: 0.03, vol: 0.6 },
  tonica: { preco: 0.0143, vol: 1 },
  folha: { preco: 0.1, vol: 0 },
  alecrim: { preco: 0.5, vol: 0 },
  maca: { preco: 1.5, vol: 110 },
  laranja: { preco: 1, vol: 130 },
  canela: { preco: 0.3, vol: 0 },
};

export const CATEGORIAS = [
  { id: 'caipi', nome: 'Caipirinhas de cachaça', cor: '#9ED43A', desc: 'O sabor que todo brasileiro conhece. São as campeãs de venda e as mais baratas de produzir.' },
  { id: 'vodka', nome: 'Com vodka', cor: '#E83E8C', desc: 'Sabor mais neutro, que deixa a fruta aparecer. Ótimas para quem “não gosta de cachaça”.' },
  { id: 'rum', nome: 'Tropicais com rum', cor: '#FFC538', desc: 'Clima de praia: mojito, piña colada e frutas tropicais.' },
  { id: 'gin', nome: 'Com gin', cor: '#0D6F6B', desc: 'O toque “drink de bar”: ervas, cítricos e frutas vermelhas. Vendem bem por um preço maior.' },
  { id: 'cremoso', nome: 'Cremosos (batidas)', cor: '#F2D3A8', desc: 'Com leite condensado e creme de leite: textura de sorvete, agradam até quem não bebe muito.' },
  { id: 'especial', nome: 'Especiais de bar', cor: '#FF6B5B', desc: 'Sangria, spritz e margarita: os sabores “instagramáveis” para festas e eventos.' },
];

/** foto: arquivo em img/ (quando existir) · cor/pedaco: cores do saquinho ilustrado. */
export const RECEITAS = [
  // ---------------- CAIPIRINHAS ----------------
  {
    cat: 'caipi', nome: 'Caipirinha de Limão', foto: 'sabor-caipirinha.jpg', cor: '#B5DD63', pedaco: '#4F7F18', tempo: 15, nivel: 'Muito fácil',
    desc: 'O clássico absoluto. Azedinha, refrescante e com pedacinhos de limão que aparecem no saquinho.',
    ing: [['650 ml de água filtrada gelada', 'agua', 650], ['180 g de açúcar (1 xícara)', 'acucar', 180], ['180 ml de suco de limão-taiti (6 a 7 limões)', 'sucoLimao', 180], ['2 limões em cubinhos, sem o miolo branco', 'limaoPedaco', 2], ['Raspas da casca de 2 limões', 'agua', 0], ['120 ml de cachaça', 'cachaca', 120]],
    prep: ['Dissolva o açúcar na água gelada, mexendo até não sentir mais grãos no fundo.', 'Junte o suco de limão e as raspas. Prove: tem que estar **mais doce que uma limonada** (o frio tira doçura).', 'Acrescente os cubinhos de limão e, **por último**, a cachaça. Misture bem.', 'Encha os saquinhos com 120 ml, mexendo a jarra a cada 2 ou 3 saquinhos para distribuir os pedaços.'],
    dica: 'Tire todo o miolo branco do limão: é ele que deixa o geladinho amargo depois de congelado.',
  },
  {
    cat: 'caipi', nome: 'Caipirinha de Maracujá', foto: 'sabor-maracuja.jpg', cor: '#FFA928', pedaco: '#3A2A12', tempo: 15, nivel: 'Muito fácil',
    desc: 'Cor amarela intensa e sementes pretas visíveis: é a que mais chama atenção no isopor.',
    ing: [['450 ml de água filtrada gelada', 'agua', 450], ['200 g de açúcar', 'acucar', 200], ['300 ml de polpa de maracujá com sementes (4 a 5 frutas)', 'polpaMaracuja', 300], ['120 ml de cachaça', 'cachaca', 120]],
    prep: ['Dissolva o açúcar na água gelada.', 'Junte a polpa com as sementes e misture com colher (não bata no liquidificador, senão as sementes quebram e escurecem).', 'Acrescente a cachaça por último e misture.', 'Encha os saquinhos mexendo sempre, para as sementes não ficarem todas no fundo da jarra.'],
    dica: 'Se usar polpa congelada pronta, descongele antes na geladeira e acrescente as sementes de 1 maracujá fresco para manter o visual.',
  },
  {
    cat: 'caipi', nome: 'Caipirinha de Morango', foto: 'sabor-caipirinha-morango.jpg', cor: '#F04F6E', pedaco: '#8C1E4E', tempo: 15, nivel: 'Fácil',
    desc: 'Rosada, doce na medida e com pedaços de fruta. Vende muito para o público feminino.',
    ing: [['400 g de morangos para bater', 'morango', 400], ['100 g de morangos em cubinhos', 'morango', 100], ['300 ml de água filtrada gelada', 'agua', 300], ['160 g de açúcar', 'acucar', 160], ['30 ml de suco de limão (1 limão)', 'sucoLimao', 30], ['120 ml de cachaça', 'cachaca', 120]],
    prep: ['Bata 400 g de morango com a água e o açúcar até ficar liso.', 'Passe para a jarra e junte o suco de limão (ele realça a cor e o sabor).', 'Acrescente os cubinhos de morango e, por último, a cachaça.', 'Encha os saquinhos mexendo a jarra para distribuir os pedaços.'],
    dica: 'Morango muito ácido? Acrescente 20 g de açúcar a mais. Prove sempre antes de colocar a bebida.',
  },
  {
    cat: 'caipi', nome: 'Abacaxi com Hortelã', foto: 'sabor-abacaxi-hortela.jpg', cor: '#F7E27A', pedaco: '#2F7A3A', tempo: 20, nivel: 'Fácil',
    desc: 'Tropical e super refrescante, com o verdinho da hortelã aparecendo no saquinho.',
    ing: [['500 g de abacaxi maduro em pedaços', 'abacaxi', 500], ['300 ml de água filtrada gelada', 'agua', 300], ['120 g de açúcar', 'acucar', 120], ['15 folhas de hortelã', 'folha', 15], ['120 ml de cachaça', 'cachaca', 120]],
    prep: ['Bata o abacaxi com a água, o açúcar e 10 folhas de hortelã por 30 segundos (não precisa coar).', 'Pique bem fino as 5 folhas restantes e junte na jarra.', 'Acrescente a cachaça por último e misture.', 'Encha os saquinhos mexendo a jarra.'],
    dica: 'Abacaxi muito doce pede menos açúcar: comece com 90 g, prove e ajuste.',
  },
  {
    cat: 'caipi', nome: 'Caipirinha de Kiwi', foto: 'sabor-caipirinha-kiwi.jpg', cor: '#8CC63F', pedaco: '#1F2A12', tempo: 15, nivel: 'Fácil',
    desc: 'Verde vivo com pontinhos pretos: diferente, bonita e com cara de gourmet.',
    ing: [['450 g de kiwi descascado (6 kiwis)', 'kiwi', 450], ['350 ml de água filtrada gelada', 'agua', 350], ['170 g de açúcar', 'acucar', 170], ['30 ml de suco de limão', 'sucoLimao', 30], ['120 ml de cachaça', 'cachaca', 120]],
    prep: ['Amasse o kiwi com um garfo ou bata no liquidificador com **pulsos curtos** (se bater muito, as sementes quebram e o geladinho fica amargo).', 'Junte a água, o açúcar e o limão e mexa até dissolver.', 'Acrescente a cachaça por último.', 'Encha os saquinhos mexendo sempre.'],
    dica: 'Use kiwi bem maduro (cede ao apertar). Kiwi verde demais deixa o geladinho travoso.',
  },
  {
    cat: 'caipi', nome: 'Caipirinha de Frutas Vermelhas', foto: 'sabor-caipirinha-frutas-vermelhas.jpg', cor: '#9C2350', pedaco: '#3A0F25', tempo: 15, nivel: 'Fácil',
    desc: 'Cor de vinho intensa e frutinhas inteiras: o sabor “premium” das caipirinhas.',
    ing: [['250 g de mix de frutas vermelhas congeladas', 'frutasVermelhas', 250], ['150 g de morangos', 'morango', 150], ['400 ml de água filtrada gelada', 'agua', 400], ['180 g de açúcar', 'acucar', 180], ['30 ml de suco de limão', 'sucoLimao', 30], ['120 ml de cachaça', 'cachaca', 120]],
    prep: ['Separe 80 g das frutas vermelhas inteiras e bata o restante com os morangos, a água e o açúcar.', 'Coe se quiser uma textura mais lisa (opcional).', 'Junte o limão, as frutas inteiras separadas e a cachaça.', 'Encha os saquinhos mexendo para distribuir as frutinhas.'],
    dica: 'O mix congelado é mais barato que a fruta fresca e dá o mesmo resultado.',
  },
  // ---------------- VODKA ----------------
  {
    cat: 'vodka', nome: 'Morango com Vodka', foto: 'sabor-morango.jpg', cor: '#E83E8C', pedaco: '#8C1E4E', tempo: 15, nivel: 'Muito fácil',
    desc: 'A caipiroska de morango em versão geladinho. Uma das três mais vendidas.',
    ing: [['450 g de morangos', 'morango', 450], ['300 ml de água filtrada gelada', 'agua', 300], ['160 g de açúcar', 'acucar', 160], ['20 ml de suco de limão', 'sucoLimao', 20], ['120 ml de vodka', 'vodka', 120]],
    prep: ['Pique 100 g de morango em cubinhos e reserve.', 'Bata o restante com a água e o açúcar.', 'Junte o limão, os cubinhos e a vodka por último.', 'Encha os saquinhos mexendo a jarra.'],
    dica: 'Vodka nacional funciona perfeitamente. Não vale a pena gastar com marca importada no geladinho.',
  },
  {
    cat: 'vodka', nome: 'Sex on the Beach', foto: 'sabor-sex-on-the-beach.jpg', cor: '#FF7A4D', pedaco: '#B8304A', tempo: 20, nivel: 'Médio',
    desc: 'O efeito degradê (vermelho embaixo, laranja em cima) faz todo mundo querer foto.',
    ing: [['400 ml de suco de laranja', 'sucoLaranja', 400], ['300 ml de néctar de pêssego', 'nectarPessego', 300], ['40 g de açúcar', 'acucar', 40], ['100 ml de vodka', 'vodka', 100], ['40 ml de licor de pêssego (ou +20 ml de vodka)', 'licorPessego', 40], ['60 ml de xarope de groselha', 'groselha', 60]],
    prep: ['Misture o suco de laranja, o néctar, o açúcar, a vodka e o licor.', 'Coloque **1 colher de sopa de groselha** no fundo de cada saquinho.', 'Complete com a mistura de laranja **devagar, escorrendo pela parede** do saquinho.', 'Feche e congele em pé (num pote ou forma alta) nas primeiras 2 horas para o degradê não misturar; depois pode deitar.'],
    dica: 'O degradê é o que vende este sabor. Capriche na foto contra a luz.',
  },
  {
    cat: 'vodka', nome: 'Blue Lagoon', foto: 'sabor-blue-lagoon.jpg', cor: '#2CB7E8', pedaco: '#0E6E93', tempo: 15, nivel: 'Fácil',
    desc: 'Azul-piscina com rodelas de limão: o sabor mais “instagramável” do cardápio.',
    ing: [['550 ml de água filtrada gelada', 'agua', 550], ['190 g de açúcar', 'acucar', 190], ['150 ml de suco de limão', 'sucoLimao', 150], ['80 ml de licor curaçau blue', 'curacau', 80], ['80 ml de vodka', 'vodka', 80], ['1 limão-siciliano em rodelas bem finas', 'limaoPedaco', 1]],
    prep: ['Faça uma limonada: dissolva o açúcar na água e junte o suco de limão.', 'Acrescente o curaçau blue (a cor aparece na hora) e a vodka.', 'Coloque 1 ou 2 rodelas finas de limão em cada saquinho antes de encher.', 'Encha e feche.'],
    dica: 'Curaçau blue já é doce: prove antes de colocar todo o açúcar.',
  },
  {
    cat: 'vodka', nome: 'Melancia com Vodka', foto: 'sabor-melancia.jpg', cor: '#F2617A', pedaco: '#3A2A2A', tempo: 15, nivel: 'Muito fácil',
    desc: 'Leve, aguada no bom sentido e muito barata: perfeita para praia e calorão.',
    ing: [['700 g de melancia sem sementes', 'melancia', 700], ['120 g de açúcar', 'acucar', 120], ['30 ml de suco de limão', 'sucoLimao', 30], ['5 folhas de hortelã (opcional)', 'folha', 5], ['120 ml de vodka', 'vodka', 120]],
    prep: ['Bata a melancia sem água (ela já tem bastante) e coe numa peneira grossa.', 'Junte o açúcar, o limão e a hortelã picada.', 'Acrescente a vodka por último.', 'Encha os saquinhos.'],
    dica: 'Melancia é o sabor de **menor custo** do treinamento. Ótimo para promoções e combos.',
  },
  {
    cat: 'vodka', nome: 'Cosmopolitan', foto: 'sabor-cosmopolitan.jpg', cor: '#D8325A', pedaco: '#7A1530', tempo: 15, nivel: 'Fácil',
    desc: 'O drink clássico de cranberry e laranja. Vende como “drink de bar” em festas.',
    ing: [['500 ml de suco de cranberry (ou uva integral)', 'cranberry', 500], ['200 ml de água filtrada gelada', 'agua', 200], ['120 g de açúcar', 'acucar', 120], ['60 ml de suco de limão', 'sucoLimao', 60], ['60 ml de licor de laranja (triple sec)', 'licorLaranja', 60], ['90 ml de vodka', 'vodka', 90]],
    prep: ['Dissolva o açúcar na água.', 'Junte o suco de cranberry e o de limão.', 'Acrescente o licor de laranja e a vodka.', 'Encha os saquinhos e coloque uma tirinha de casca de laranja em cada um.'],
    dica: 'Sem cranberry? Suco de uva integral com 30 ml a mais de limão fica muito parecido.',
  },
  {
    cat: 'vodka', nome: 'Limonada Suíça com Vodka', foto: 'sabor-limonada-suica.jpg', cor: '#E7F2C2', pedaco: '#6B8F2A', tempo: 15, nivel: 'Fácil',
    desc: 'Cremosa e azedinha, lembra mousse de limão. Agrada muito quem não gosta de “bebida forte”.',
    ing: [['4 limões-taiti com casca', 'limaoPedaco', 4], ['600 ml de água filtrada gelada', 'agua', 600], ['1 lata de leite condensado (395 g)', 'leiteCond', 395], ['120 ml de vodka', 'vodka', 120]],
    prep: ['Lave bem os limões, corte em 4 e tire as pontas e o miolo branco do centro.', 'Bata com a água por **no máximo 10 segundos** (mais que isso amarga) e coe imediatamente.', 'Volte ao liquidificador com o leite condensado e bata 20 segundos.', 'Junte a vodka, misture e encha os saquinhos.'],
    dica: 'O tempo de bater é o segredo. Use o cronômetro do celular.',
  },
  {
    cat: 'vodka', nome: 'Uva com Vodka', foto: 'sabor-uva-vodka.jpg', cor: '#7B2C6B', pedaco: '#2D0F28', tempo: 10, nivel: 'Muito fácil',
    desc: 'Usa suco de uva integral pronto: o sabor mais rápido de fazer de todo o cardápio.',
    ing: [['600 ml de suco de uva integral', 'sucoUva', 600], ['200 ml de água filtrada gelada', 'agua', 200], ['60 g de açúcar', 'acucar', 60], ['20 ml de suco de limão', 'sucoLimao', 20], ['100 g de uvas sem semente cortadas ao meio', 'uva', 100], ['120 ml de vodka', 'vodka', 120]],
    prep: ['Misture o suco de uva, a água, o açúcar e o limão.', 'Junte as uvas cortadas e a vodka.', 'Encha os saquinhos distribuindo as uvas.', 'Feche e congele.'],
    dica: 'Suco integral não tem açúcar adicionado: prove e ajuste o açúcar ao seu gosto.',
  },
  // ---------------- RUM ----------------
  {
    cat: 'rum', nome: 'Mojito', foto: 'sabor-mojito.jpg', cor: '#C6EC8C', pedaco: '#2F7A3A', tempo: 20, nivel: 'Fácil',
    desc: 'Hortelã, limão e rum: o drink cubano mais famoso do mundo, transparente e cheio de folhas.',
    ing: [['650 ml de água filtrada gelada', 'agua', 650], ['180 g de açúcar', 'acucar', 180], ['120 ml de suco de limão', 'sucoLimao', 120], ['20 folhas de hortelã', 'folha', 20], ['1 limão em rodelas finas', 'limaoPedaco', 1], ['130 ml de rum branco', 'rum', 130]],
    prep: ['Amasse 10 folhas de hortelã com o açúcar no fundo da jarra (é o “macerar” do mojito).', 'Junte a água e o suco de limão e mexa até dissolver o açúcar.', 'Acrescente as outras folhas picadas, as rodelas de limão e o rum.', 'Coloque uma rodela e algumas folhas em cada saquinho antes de encher.'],
    dica: 'Não use hortelã murcha: escurece no congelamento. Folhas firmes e bem verdes.',
  },
  {
    cat: 'rum', nome: 'Piña Colada', foto: 'sabor-pina-colada.jpg', cor: '#FFE19A', pedaco: '#E3A92B', tempo: 15, nivel: 'Fácil',
    desc: 'Abacaxi com coco, cremosa e tropical. A preferida em festas de piscina.',
    ing: [['400 g de abacaxi maduro', 'abacaxi', 400], ['200 ml de leite de coco', 'leiteCoco', 200], ['200 g de leite condensado (meia lata)', 'leiteCond', 200], ['250 ml de água filtrada gelada', 'agua', 250], ['130 ml de rum branco', 'rum', 130]],
    prep: ['Bata o abacaxi com a água até ficar liso.', 'Junte o leite de coco e o leite condensado e bata mais 20 segundos.', 'Acrescente o rum e misture com colher.', 'Encha os saquinhos.'],
    dica: 'Um pouco de coco ralado em cada saquinho deixa o visual ainda mais bonito.',
  },
  {
    cat: 'rum', nome: 'Daiquiri de Morango', foto: 'sabor-daiquiri-morango.jpg', cor: '#EC3F5C', pedaco: '#8C1E3A', tempo: 15, nivel: 'Fácil',
    desc: 'Morango e limão com rum: mais leve que a caipiroska e com um toque de “drink de praia”.',
    ing: [['450 g de morangos', 'morango', 450], ['300 ml de água filtrada gelada', 'agua', 300], ['150 g de açúcar', 'acucar', 150], ['60 ml de suco de limão', 'sucoLimao', 60], ['120 ml de rum branco', 'rum', 120]],
    prep: ['Bata os morangos com a água e o açúcar.', 'Junte o suco de limão.', 'Acrescente o rum e misture.', 'Encha os saquinhos.'],
    dica: 'Para diferenciar do “morango com vodka”, sirva este com uma rodelinha de limão dentro.',
  },
  {
    cat: 'rum', nome: 'Manga Tropical com Rum', foto: 'sabor-manga-rum.jpg', cor: '#FFB627', pedaco: '#C46A00', tempo: 15, nivel: 'Fácil',
    desc: 'Manga com um toque de maracujá: encorpado, aveludado e com cor de pôr do sol.',
    ing: [['500 g de manga madura (polpa)', 'manga', 500], ['100 ml de polpa de maracujá', 'polpaMaracuja', 100], ['300 ml de água filtrada gelada', 'agua', 300], ['100 g de açúcar', 'acucar', 100], ['120 ml de rum', 'rum', 120]],
    prep: ['Bata a manga com a água e o açúcar até ficar liso.', 'Junte a polpa de maracujá.', 'Acrescente o rum e misture.', 'Encha os saquinhos.'],
    dica: 'Manga palmer ou tommy, bem madura, dá o melhor sabor e não deixa fiapos.',
  },
  {
    cat: 'rum', nome: 'Coco com Rum', foto: 'sabor-coco-rum.jpg', cor: '#F3EBDD', pedaco: '#C9A36B', tempo: 15, nivel: 'Muito fácil',
    desc: 'Inspirado nos licores de coco caribenhos: cremoso, perfumado e com coco ralado.',
    ing: [['400 ml de leite de coco', 'leiteCoco', 400], ['300 ml de água de coco', 'aguaCoco', 300], ['150 g de leite condensado', 'leiteCond', 150], ['40 g de coco ralado', 'cocoRalado', 40], ['120 ml de rum branco', 'rum', 120]],
    prep: ['Bata o leite de coco, a água de coco e o leite condensado por 20 segundos.', 'Junte o coco ralado e o rum e misture com colher.', 'Encha os saquinhos mexendo a jarra (o coco tende a boiar).', 'Feche e congele.'],
    dica: 'Torre o coco ralado numa frigideira seca por 2 minutos: o sabor fica muito mais intenso.',
  },
  // ---------------- GIN ----------------
  {
    cat: 'gin', nome: 'Gin Tônica de Frutas Vermelhas', foto: 'sabor-frutas-vermelhas.jpg', cor: '#7B1E4A', pedaco: '#3A0F25', tempo: 20, nivel: 'Médio',
    desc: 'O drink da moda em versão geladinho: frutas vermelhas, tônica e alecrim.',
    ing: [['200 g de frutas vermelhas congeladas', 'frutasVermelhas', 200], ['100 g de morangos', 'morango', 100], ['400 ml de água tônica', 'tonica', 400], ['150 ml de água filtrada gelada', 'agua', 150], ['120 g de açúcar', 'acucar', 120], ['30 ml de suco de limão', 'sucoLimao', 30], ['2 ramos de alecrim', 'alecrim', 2], ['120 ml de gin', 'gin', 120]],
    prep: ['Bata os morangos e 120 g das frutas vermelhas com a água e o açúcar e coe.', 'Junte a tônica **devagar** (ela espuma), o limão, as frutas inteiras, o alecrim picado e o gin.', 'Encha os saquinhos devagar, pela parede, para não espumar.'],
    dica: 'O gás some no freezer, mas o amarguinho da tônica fica: é ele que dá cara de gin tônica.',
  },
  {
    cat: 'gin', nome: 'Gin Tropical de Maracujá', foto: 'sabor-gin-maracuja.jpg', cor: '#F9B233', pedaco: '#2F5A1C', tempo: 15, nivel: 'Fácil',
    desc: 'Maracujá com manjericão e gin: combinação de bar que surpreende no primeiro gole.',
    ing: [['250 ml de polpa de maracujá', 'polpaMaracuja', 250], ['450 ml de água filtrada gelada', 'agua', 450], ['190 g de açúcar', 'acucar', 190], ['10 folhas de manjericão', 'folha', 10], ['120 ml de gin', 'gin', 120]],
    prep: ['Dissolva o açúcar na água.', 'Junte a polpa de maracujá e as folhas de manjericão rasgadas com a mão.', 'Acrescente o gin e misture.', 'Coloque uma folhinha inteira em cada saquinho antes de encher.'],
    dica: 'Rasgue o manjericão com a mão em vez de cortar com faca: ele não escurece.',
  },
  {
    cat: 'gin', nome: 'Gin de Limão-Siciliano e Alecrim', foto: 'sabor-gin-siciliano-alecrim.jpg', cor: '#F4EFA0', pedaco: '#5E7A2A', tempo: 25, nivel: 'Médio',
    desc: 'Cítrico, perfumado e elegante. É o sabor “sofisticado” para cobrar mais caro.',
    ing: [['600 ml de água filtrada', 'agua', 600], ['190 g de açúcar', 'acucar', 190], ['150 ml de suco de limão-siciliano', 'sucoSiciliano', 150], ['Raspas de 1 limão-siciliano', 'agua', 0], ['3 ramos de alecrim', 'alecrim', 3], ['120 ml de gin', 'gin', 120]],
    prep: ['Ferva 200 ml da água com o açúcar e 2 ramos de alecrim por 3 minutos. Desligue, tampe e deixe esfriar (é um xarope de alecrim).', 'Coe, junte o restante da água, o suco e as raspas.', 'Com tudo **totalmente frio**, acrescente o gin.', 'Coloque um raminho pequeno de alecrim em cada saquinho e encha.'],
    dica: 'Nunca coloque bebida em mistura quente: o álcool evapora e o sabor muda.',
  },
  // ---------------- CREMOSOS ----------------
  {
    cat: 'cremoso', nome: 'Batida de Coco', foto: 'sabor-batida-de-coco.jpg', cor: '#F6F1E7', pedaco: '#C9A36B', tempo: 10, nivel: 'Muito fácil',
    desc: 'A batida brasileira clássica, cremosa como sorvete. Campeã em festas de família.',
    ing: [['1 lata de leite condensado (395 g)', 'leiteCond', 395], ['200 ml de leite de coco', 'leiteCoco', 200], ['350 ml de leite', 'leite', 350], ['50 g de coco ralado', 'cocoRalado', 50], ['120 ml de cachaça', 'cachaca', 120]],
    prep: ['Bata o leite condensado, o leite de coco e o leite por 30 segundos.', 'Junte o coco ralado e a cachaça e misture com colher.', 'Encha os saquinhos mexendo a jarra.', 'Feche e congele.'],
    dica: 'Os cremosos congelam mais “macios” e cremosos que os de fruta: é normal e é o charme deles.',
  },
  {
    cat: 'cremoso', nome: 'Batida de Maracujá', foto: 'sabor-batida-maracuja.jpg', cor: '#FFD97A', pedaco: '#3A2A12', tempo: 10, nivel: 'Muito fácil',
    desc: 'Mousse de maracujá com cachaça: doce, azedinha e muito cremosa.',
    ing: [['1 lata de leite condensado (395 g)', 'leiteCond', 395], ['250 ml de polpa de maracujá', 'polpaMaracuja', 250], ['200 g de creme de leite', 'cremeLeite', 200], ['150 ml de leite', 'leite', 150], ['120 ml de cachaça', 'cachaca', 120]],
    prep: ['Bata a polpa (sem sementes) com o leite condensado por 30 segundos.', 'Junte o creme de leite e o leite e bata mais 10 segundos.', 'Acrescente a cachaça e misture.', 'Coloque algumas sementes em cada saquinho para enfeitar e encha.'],
    dica: 'Se ficar azedo demais, acrescente 50 g de leite condensado. Se ficar doce demais, mais polpa.',
  },
  {
    cat: 'cremoso', nome: 'Batida de Morango', foto: 'sabor-batida-morango.jpg', cor: '#F7A1B5', pedaco: '#C2304E', tempo: 10, nivel: 'Muito fácil',
    desc: 'Rosa cremoso com pedaços de morango. Sabor de sorvete com um toque de drink.',
    ing: [['350 g de morangos', 'morango', 350], ['1 lata de leite condensado (395 g)', 'leiteCond', 395], ['200 g de creme de leite', 'cremeLeite', 200], ['120 ml de vodka', 'vodka', 120]],
    prep: ['Pique 100 g de morango em cubinhos e reserve.', 'Bata o restante com o leite condensado e o creme de leite.', 'Junte os cubinhos e a vodka.', 'Encha os saquinhos mexendo a jarra.'],
    dica: 'Este sabor também fica ótimo com cachaça, se preferir manter tudo com uma bebida só.',
  },
  {
    cat: 'cremoso', nome: 'Caipirinha Cremosa de Limão', foto: 'sabor-caipirinha-cremosa.jpg', cor: '#DDEFB0', pedaco: '#5E8F1E', tempo: 10, nivel: 'Muito fácil',
    desc: 'Mousse de limão com cachaça. Quem prova uma vez pede de novo.',
    ing: [['150 ml de suco de limão', 'sucoLimao', 150], ['Raspas de 2 limões', 'agua', 0], ['1 lata de leite condensado (395 g)', 'leiteCond', 395], ['200 g de creme de leite', 'cremeLeite', 200], ['250 ml de leite', 'leite', 250], ['110 ml de cachaça', 'cachaca', 110]],
    prep: ['Bata o leite condensado com o suco de limão: vai engrossar, é normal.', 'Junte o creme de leite e o leite e bata mais 10 segundos.', 'Acrescente as raspas e a cachaça e misture.', 'Encha os saquinhos.'],
    dica: 'Raspe só a parte verde da casca. A parte branca amarga.',
  },
  {
    cat: 'cremoso', nome: 'Chocolate com Licor', foto: 'sabor-chocolate-licor.jpg', cor: '#7A4A32', pedaco: '#3B2318', tempo: 25, nivel: 'Médio',
    desc: 'Sabor de brigadeiro gelado com licor. Vende muito à noite e em festas.',
    ing: [['450 ml de leite', 'leite', 450], ['200 g de leite condensado', 'leiteCond', 200], ['60 g de chocolate em pó 50%', 'chocPo', 60], ['200 g de creme de leite', 'cremeLeite', 200], ['200 ml de licor de chocolate ou de creme', 'licorChoc', 200]],
    prep: ['Aqueça o leite com o chocolate em pó, mexendo até dissolver (não precisa ferver).', 'Desligue, junte o leite condensado e o creme de leite e mexa bem.', 'Deixe esfriar **completamente** (pode levar à geladeira).', 'Com tudo frio, junte o licor, misture e encha os saquinhos.'],
    dica: 'Licor tem menos álcool que destilado, por isso a receita leva mais (200 ml) e ainda congela bem.',
  },
  {
    cat: 'cremoso', nome: 'Batida de Amendoim', foto: 'sabor-batida-amendoim.jpg', cor: '#D9B28A', pedaco: '#7A4E25', tempo: 10, nivel: 'Muito fácil',
    desc: 'Clássico de festa junina e de boteco: amendoim, leite condensado e cachaça.',
    ing: [['150 g de amendoim torrado sem casca (ou 6 paçocas)', 'amendoim', 150], ['1 lata de leite condensado (395 g)', 'leiteCond', 395], ['450 ml de leite', 'leite', 450], ['110 ml de cachaça', 'cachaca', 110]],
    prep: ['Bata o amendoim com o leite por 1 minuto, até ficar bem liso.', 'Junte o leite condensado e bata mais 20 segundos.', 'Acrescente a cachaça e misture.', 'Encha os saquinhos mexendo a jarra.'],
    dica: 'Com paçoca o preparo fica ainda mais rápido e o sabor, mais doce.',
  },
  // ---------------- ESPECIAIS ----------------
  {
    cat: 'especial', nome: 'Sangria', foto: 'sabor-sangria.jpg', cor: '#8E1F3C', pedaco: '#E8893A', tempo: 20, nivel: 'Fácil',
    desc: 'Vinho tinto com frutas e canela. Sucesso garantido em festas de adultos.',
    ing: [['350 ml de vinho tinto seco', 'vinho', 350], ['300 ml de suco de laranja', 'sucoLaranja', 300], ['150 ml de água filtrada gelada', 'agua', 150], ['120 g de açúcar', 'acucar', 120], ['1 maçã em cubinhos', 'maca', 1], ['1 laranja em cubinhos (sem casca)', 'laranja', 1], ['1 pau de canela', 'canela', 1]],
    prep: ['Misture o vinho, o suco, a água e o açúcar até dissolver.', 'Junte as frutas e o pau de canela e deixe na geladeira por 1 hora (as frutas pegam o sabor do vinho).', 'Retire a canela.', 'Encha os saquinhos distribuindo as frutas.'],
    dica: 'Vinho barato e seco funciona muito bem. Evite vinho suave: fica doce demais.',
  },
  {
    cat: 'especial', nome: 'Aperol Spritz', foto: 'sabor-aperol-spritz.jpg', cor: '#FF7A1F', pedaco: '#C24A00', tempo: 15, nivel: 'Fácil',
    desc: 'O drink laranja mais famoso do verão. Visual lindo e preço premium.',
    ing: [['180 ml de Aperol', 'aperol', 180], ['250 ml de espumante brut', 'espumante', 250], ['400 ml de suco de laranja', 'sucoLaranja', 400], ['100 ml de água filtrada gelada', 'agua', 100], ['60 g de açúcar', 'acucar', 60], ['1 laranja em rodelas finas', 'laranja', 1]],
    prep: ['Misture o suco, a água e o açúcar até dissolver.', 'Junte o Aperol e, por último, o espumante **devagar** (ele espuma).', 'Coloque uma meia-rodela de laranja em cada saquinho.', 'Encha devagar pela parede do saquinho.'],
    dica: 'Aperol e espumante têm pouco álcool, por isso a receita leva mais bebida e continua congelando firme.',
  },
  {
    cat: 'especial', nome: 'Margarita', foto: 'sabor-margarita.jpg', cor: '#E2F1A6', pedaco: '#6F8F1E', tempo: 15, nivel: 'Fácil',
    desc: 'Limão, tequila e uma pitada de sal: o drink mexicano em versão geladinho.',
    ing: [['550 ml de água filtrada gelada', 'agua', 550], ['180 g de açúcar', 'acucar', 180], ['150 ml de suco de limão', 'sucoLimao', 150], ['1 pitada de sal', 'sal', 0], ['40 ml de licor de laranja (triple sec)', 'licorLaranja', 40], ['100 ml de tequila prata', 'tequila', 100]],
    prep: ['Dissolva o açúcar e o sal na água.', 'Junte o suco de limão e o licor.', 'Acrescente a tequila e misture.', 'Encha os saquinhos.'],
    dica: 'A pitada de sal é o segredo: realça o limão e lembra a borda salgada do copo.',
  },
];

/** Os 10 sabores mais vendidos (Bônus 3): números das receitas. */
export const TOP10 = [1, 2, 7, 8, 9, 10, 14, 15, 19, 22];
export const ML_UN = 120; // volume de cada geladinho
export const CUSTO_SAQUINHO = 0.14;
/** Faixa praticada no Brasil (geladinho gourmet R$ 5 a 10; o de drink fica no topo) e markup mínimo. */
export const PRECO_CAT = { caipi: 7, vodka: 7, rum: 7, cremoso: 8, gin: 9, especial: 9 };
export const MARKUP_MIN = 2.5; // saquinho + etiqueta, por unidade

/** Calcula volume, teor alcoólico, rendimento e custos da receita. */
export function calc(r) {
  let vol = 0, alc = 0, custo = 0;
  for (const [, id, q] of r.ing) {
    const i = ING[id];
    if (!i) throw new Error('ingrediente desconhecido: ' + id);
    vol += q * i.vol;
    alc += q * i.vol * (i.abv || 0);
    custo += q * i.preco;
  }
  const un = Math.floor(vol / ML_UN);
  const teor = (alc / vol) * 100;
  const custoUn = custo / un + CUSTO_SAQUINHO;
  // Preço de mercado da categoria, nunca abaixo de 2,5× o custo (margem mínima de 60%).
  const preco = Math.max(PRECO_CAT[r.cat], Math.ceil((custoUn * MARKUP_MIN) / 0.5) * 0.5);
  return { vol: Math.round(vol), teor, un, custo, custoUn, preco };
}
