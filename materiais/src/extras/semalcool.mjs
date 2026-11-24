// Extra 1: 30 Geladinhos Gourmet Sem Álcool.
import { C, img, md, callout, lista, passos, tabela, cabeca, pagina } from '../base.mjs';
import { calc2, VOLUME, EMBALAGEM } from './dados.mjs';
import { RECEITAS_SA, CATS_SA } from './semalcool-receitas.mjs';
import { capaExtra, aberturaExtra, abertParte, receitaPg, categoriaPg, faixa, brl, preco, temImg, usarPele, pele, destaques, fotosFaixa, citacao } from './comum.mjs';

const MARCA = 'EXTRA · 30 GELADINHOS GOURMET SEM ÁLCOOL';

export function semAlcool() {
  const P = [];
  usarPele('xt-sa');
  const pg = (c, o = {}) => P.push(pagina(c, { n: P.length + 1, marca: MARCA, cls: pele(), ...o }));
  const cor = C.berryTx;
  const R = RECEITAS_SA.map((r, i) => ({ r, num: i + 1, k: calc2(r, CATS_SA.find((c) => c.id === r.cat).preco) }));
  const ks = R.map((x) => x.k);

  P.push(capaExtra({ arquivo: 'capa-x1.jpg', eyebrow: 'Material extra', titulo: '30 Geladinhos Gourmet <span style="color:' + C.berryTx + '">Sem Álcool</span>', destaque: 'para toda a família', sub: 'Cremosos, gourmet, de fruta e os clássicos de bairro, com **custo e preço calculados**.', cor: C.berryCl, fotos: ['sa-morango-com-leite-condensado.jpg', 'sa-brigadeiro.jpg', 'sa-abertura.jpg'], selo: '30<br>receitas' }));
  P.push(aberturaExtra({ cor: C.berryCl, eyebrow: 'Material extra', titulo: '30 Geladinhos Gourmet Sem Álcool', texto: 'O geladinho de drink vende para adultos. O sem álcool vende para **todo mundo**: crianças, famílias, quem não bebe e quem vai dirigir. Com os dois no isopor, você **não perde nenhuma venda**.', itens: ['A ciência do geladinho cremoso (sem cristais de gelo)', 'A **Base Cremosa Mestra** e a **Base de Fruta Mestra**', 'Segurança com leite e ovos', '30 receitas com custo e preço', 'Onde e como vender para famílias'], foto: 'sa-abertura.jpg' }));

  // ---------- POR QUE ----------
  pg(`
    ${faixa(cor, '01', 'Por que vender sem álcool')}
    ${cabeca('', 'Dobre o seu público ==sem mudar de cozinha==', 'Você já tem freezer, saquinhos, isopor e clientes. O sem álcool usa **tudo isso** e abre portas onde o de drink não entra.')}
    <div class="g2">
      ${[
        ['Crianças e adolescentes', 'Os filhos de quem compra o seu drink também querem um. Sem o sem álcool, essa venda vai para outro.'],
        ['Quem não bebe', 'Por religião, saúde, gravidez ou porque vai dirigir. É uma parte grande de qualquer bairro.'],
        ['Venda o dia todo', 'Geladinho de drink vende mais à tarde e à noite. O sem álcool vende de manhã, na saída da escola, no almoço.'],
        ['Festas infantis', 'Aniversário de criança é o maior mercado de geladinho do Brasil. Kits de 50 a 100 unidades.'],
        ['Custo menor', 'Sem bebida, o custo cai. Os de fruta saem por **menos de R$ 1,30** a unidade.'],
        ['Cardápio completo', 'Com os dois, o cliente faz um pedido só para a casa toda: drink para os adultos, sem álcool para as crianças.'],
      ].map(([t, d]) => `<div class="box b-berry"><h3>${t}</h3><p style="font-size:8pt;margin-top:.8mm">${md(d)}</p></div>`).join('')}
    </div>
    ${destaques([['Custo de um de fruta', 'R$ 0,93', 'Limão com Hortelã', C.limaoTx, '#2F5A0A'], ['Preço de um cremoso', 'R$ 6', 'margem de 60 a 70%', C.berryTx, '#8A1A50'], ['Kit festa de 50', 'R$ 240', 'lucro ≈ R$ 135', C.turquesa, C.turqEsc]])}
    <div style="margin-top:auto">${callout('segredo', 'A conta que convence', 'Quem compra 3 geladinhos de drink para o casal muitas vezes leva **mais 3 sem álcool para os filhos**. Um pedido de R$ 21 vira um de R$ 39 sem esforço nenhum.')}</div>`);

  // ---------- SUMÁRIO ----------
  pg(`
    ${faixa(cor, '02', 'Como usar')}
    ${cabeca('', 'O caminho mais curto ==até a primeira venda==')}
    ${[
      ['1', 'Leia a Parte 1 (20 minutos)', 'A **Base Cremosa Mestra** e a **Base de Fruta Mestra** são o segredo de 25 das 30 receitas. Aprendeu as duas, faz qualquer sabor.'],
      ['2', 'Comece com 4 sabores', 'Sugestão: **Ninho com Creme de Avelã, Brigadeiro, Morango com Pedaços e Maracujá**: dois cremosos que todo mundo ama e dois de fruta baratos.'],
      ['3', 'Teste e precifique', 'Cada receita traz rendimento, custo por unidade e preço sugerido. Ajuste com os preços da sua região.'],
      ['4', 'Venda para as famílias', 'A Parte 3 mostra onde vender, como montar kits de festa infantil e o combo que junta drink e sem álcool.'],
    ].map(([nn, t, d]) => `<div style="display:flex;gap:3mm;align-items:flex-start"><span class="num-g" style="font-size:20pt;width:8mm;color:${cor}">${nn}</span><div><h3>${t}</h3><p style="font-size:8.3pt">${md(d)}</p></div></div>`).join('')}
    <h2>Neste material</h2>
    ${tabela(['Parte', 'Conteúdo', 'Págs.'], [['1', 'A ciência do geladinho cremoso, as bases mestras, segurança, técnicas e diagnóstico', '5 a 13'], ['2', 'As 30 receitas, em 4 categorias', '14 a 49'], ['3', 'Vendendo para famílias: lugares, festas, cardápio, produção e dúvidas', '50 em diante']], [2])}
    <div style="margin-top:auto">${callout('dica', 'Tudo calculado', `Rendimento em saquinhos de **${VOLUME.sacole} ml** (6×24 cm). Custo com preços de supermercado de 2026 + R$ ${EMBALAGEM.sacole.toFixed(2).replace('.', ',')} de saquinho e etiqueta. Preço sugerido = preço praticado na categoria, sempre acima de **2,5× o custo**.`)}</div>`);

  // ================= PARTE 1 =================
  P.push(abertParte({ num: '01', titulo: 'A ciência do geladinho cremoso', resumo: 'Por que alguns geladinhos ficam **cremosos como sorvete** e outros viram uma pedra de gelo? A resposta está no equilíbrio de 5 ingredientes, e você vai dominar isso agora.', itens: ['O que cada ingrediente faz', 'A Base Cremosa Mestra (cozida)', 'A Base de Fruta Mestra', 'Estabilizantes: quando vale usar', 'Segurança com leite e ovos', 'Técnicas de acabamento'], foto: 'sa-parte1.jpg', fundo: C.turquesa }));

  pg(`
    ${faixa(C.turquesa, '1.1', 'O que faz ficar cremoso')}
    ${cabeca('', 'Cada ingrediente ==tem uma função==', 'Geladinho “arenoso” é água congelada em cristais grandes. Tudo o que fica **entre** esses cristais deixa a textura mais lisa.')}
    ${tabela(['Ingrediente', 'O que faz', 'Na prática'], [
      ['**Açúcar**', 'Abaixa o ponto de congelamento: parte da água não vira gelo', 'Deixa macio. Pouco açúcar = pedra de gelo'],
      ['**Gordura** (creme de leite, leite integral)', 'Envolve os cristais e dá sensação de cremosidade', 'Use leite **integral**, nunca desnatado'],
      ['**Sólidos do leite** (Ninho, leite condensado)', 'Prendem água e dão corpo', 'É o que faz parecer sorvete'],
      ['**Amido** (cozido)', 'Engrossa a base e segura a água', '20 a 25 g por litro, sempre cozido'],
      ['**Fibra da fruta**', 'Faz o mesmo papel nos frutados', 'Não coe (a não ser semente dura)'],
      ['**Ar**', 'Bater incorpora ar e deixa mais leve', '1 minuto de liquidificador'],
    ])}
    ${fotosFaixa(['sa-parte1.jpg', 'sa-doce-de-leite.jpg', 'sa-beijinho-de-coco.jpg'], 30)}
    <div style="margin-top:auto">${callout('segredo', 'A regra de ouro', 'Todo geladinho cremoso precisa de **açúcar + gordura + sólidos**. Se tirar um deles (por exemplo, trocar leite integral por desnatado), a textura piora na hora.')}</div>`);

  pg(`
    ${faixa(C.turquesa, '1.2', 'Base Cremosa Mestra')}
    ${cabeca('', 'A Base Cremosa ==Mestra==', 'Faça uma vez, entenda o ponto, e você faz **15 sabores** só mudando o que vai por cima.')}
    <div class="row" style="align-items:stretch">
      <div class="box b-coco"><h3>Ingredientes (10 a 11 unidades)</h3><div style="margin-top:1.4mm">${lista(['800 ml de leite integral', '1 lata de leite condensado (395 g)', '200 g de creme de leite', '25 g de amido de milho (2 colheres de sopa)'], 'ck')}</div></div>
      <div class="box b-turq" style="text-align:center;display:flex;flex-direction:column;justify-content:center"><p class="small">custo da base</p><p style="font-family:Outfit;font-weight:800;font-size:16pt;color:${C.turquesa}">≈ R$ 15,80</p><p class="small">≈ R$ 1,50 por geladinho</p></div>
    </div>
    ${passos(['Dissolva o amido no leite **frio** (no quente ele empelota).', 'Junte o leite condensado e leve ao fogo médio, mexendo sem parar.', 'Quando ferver, cozinhe **mais 5 minutos**: a base engrossa levemente, como um mingau ralo.', 'Desligue, junte o creme de leite e bata 1 minuto no liquidificador.', 'Esfrie **rápido**: panela dentro de uma bacia com água e gelo, mexendo. Depois, 2 horas na geladeira.'])}
    ${callout('dica', 'Por que cozinhar?', 'O amido só engrossa acima de **70 °C**. Cozinhar também elimina microrganismos do leite e deixa a base mais estável: o geladinho derrete mais devagar na mão do cliente.')}
    <div style="margin-top:auto">${callout('atencao', 'Não encha com a base quente', 'Base morna no freezer congela devagar (cristais grandes) e esquenta o que já estava congelado. Sempre **fria**, de geladeira.')}</div>`);

  pg(`
    ${faixa(C.turquesa, '1.3', 'Variações da base')}
    ${cabeca('', 'Uma base, ==15 sabores==', 'Prepare a Base Cremosa Mestra e acrescente:')}
    ${tabela(['Sabor', 'Acrescente à base', 'Receita'], [
      ['Ninho', '80 g de leite em pó Ninho', '01, 09'],
      ['Brigadeiro', '50 g de chocolate em pó 50% (dissolvido no leite frio)', '02'],
      ['Beijinho', 'troque 200 ml do leite por leite de coco + 50 g de coco ralado', '05'],
      ['Cookies and Cream', '50 g de Ninho + biscoito recheado na hora de encher', '10'],
      ['Café', '15 g de café solúvel + 15 g de chocolate em pó', '27'],
      ['Doce de leite', 'troque o leite condensado por 400 g de doce de leite (sem cozinhar)', '07'],
      ['Paçoca', '6 paçocas batidas (sem cozinhar)', '06'],
    ], [])}
    <div class="box b-coco"><h3>E os que não vão ao fogo?</h3><p style="font-size:8pt;margin-top:1mm">Morango, maracujá, limão, paçoca, doce de leite e abacate são batidos frios: a fruta crua mantém a cor viva e o ácido do maracujá e do limão já engrossa o leite condensado. Use sempre leite <b>UHT (de caixinha)</b> nessas receitas: ele já vem pasteurizado.</p></div>
    <div style="margin-top:auto">${callout('segredo', 'Produza a base em dobro', 'Faça 2 bases de uma vez (uma panela grande), divida em jarras e transforme cada jarra num sabor. Em 1 hora de fogão você tem 3 a 4 sabores prontos para encher.')}</div>`);

  pg(`
    ${faixa(C.turquesa, '1.4', 'Base de Fruta Mestra')}
    ${cabeca('', 'A Base de Fruta ==Mestra==', 'Para qualquer fruta, inclusive as que não estão neste livro.')}
    <div style="display:flex;height:11mm;border-radius:3mm;overflow:hidden;font-family:Outfit;font-weight:700;font-size:7.4pt;color:#fff">
      <div style="width:45%;background:${C.coralTx};display:grid;place-items:center">FRUTA 400-500 g</div>
      <div style="width:15%;background:${C.mangaTx};display:grid;place-items:center">AÇÚCAR</div>
      <div style="width:37%;background:${C.turquesa};display:grid;place-items:center">ÁGUA ATÉ 1 LITRO</div>
      <div style="width:3%;background:${C.limaoTx}"></div>
    </div>
    <p class="small" style="text-align:center">+ 20 a 40 ml de suco de limão (realça cor e sabor)</p>
    ${tabela(['Tipo de fruta', 'Exemplos', 'Açúcar por litro'], [['Ácidas', 'limão, maracujá, abacaxi verde', '**180 a 220 g**'], ['Médias', 'morango, uva, kiwi, frutas vermelhas', '**150 a 170 g**'], ['Doces', 'manga, melancia, banana, açaí', '**100 a 130 g**']], [2])}
    ${passos(['Bata a fruta com metade da água e o açúcar.', 'Complete com água até 1 litro e junte o limão.', '**Prove gelado**: tem que estar mais doce e mais intenso do que um suco. O frio tira doçura.', 'Junte os pedaços que vão aparecer e encha mexendo a jarra.'])}
    ${fotosFaixa(['sa-morango-com-pedacos.jpg', 'sa-manga.jpg', 'sa-maracuja.jpg', 'sa-uva.jpg'], 24)}
    <div style="margin-top:auto">${callout('dica', 'Teste da doçura', 'Coloque uma colher da mistura no congelador por 15 minutos e prove. Se estiver “sem graça”, falta açúcar ou fruta. É o jeito mais rápido de acertar uma fruta nova.')}</div>`);

  pg(`
    ${faixa(C.turquesa, '1.5', 'Estabilizantes')}
    ${cabeca('', 'Liga neutra e emulsificante: ==vale a pena?==', 'São os “segredos” das sorveterias. **Nenhuma receita deste livro depende deles**, mas eles ajudam em situações específicas.')}
    <div class="row" style="align-items:stretch">
      <div class="box b-coco"><h3>Liga neutra</h3><p class="small">estabilizante · ≈ R$ 12 o pote de 100 g</p><p style="font-size:8pt;margin-top:1.4mm">Segura a água e evita cristais, mesmo se o freezer abrir muito. <b>Dose: 5 a 10 g por litro</b>, misturada ao açúcar antes de entrar no líquido (para não empelotar).</p></div>
      <div class="box b-coco"><h3>Emulsificante</h3><p class="small">tipo Emustab · ≈ R$ 12 o pote de 200 g</p><p style="font-size:8pt;margin-top:1.4mm">Incorpora ar e deixa a textura mais leve e aerada. <b>Dose: 10 a 15 g por litro</b>, batido 3 a 5 minutos na batedeira com a base fria.</p></div>
    </div>
    ${tabela(['Situação', 'Use?'], [['Começando, vendendo até 100 por semana', 'Não precisa'], ['Entregas longas ou freezer que abre muito', '**Liga neutra**'], ['Quer textura de sorvete de massa nos cremosos', '**Os dois**'], ['Geladinhos de fruta', 'Opcional (liga neutra)']])}
    <div style="margin-top:auto">${callout('atencao', 'Mais não é melhor', 'Excesso de liga neutra deixa o geladinho com textura “borrachuda” e gosmenta ao derreter. Respeite a dose.')}</div>`);

  pg(`
    ${faixa(C.turquesa, '1.6', 'Segurança')}
    ${cabeca('', 'Leite e ovo ==pedem cuidado==', 'Cremosos são mais delicados que os de fruta. Estas regras vêm das boas práticas da Anvisa (RDC 216) e evitam qualquer problema.')}
    ${tabela(['Risco', 'Como evitar'], [
      ['Ovo cru (salmonela)', 'Gemas **sempre cozidas** com a base até ferver. Nunca use ovo cru.'],
      ['Base morna parada', 'Esfrie de 60 °C para 10 °C em **até 2 horas** (bacia com gelo + geladeira).'],
      ['Leite fora da validade', 'Use leite UHT ou pasteurizado dentro da validade; nunca leite cru.'],
      ['Contaminação cruzada', 'Utensílios lavados; frutas higienizadas; cabelo preso.'],
      ['Derreteu no transporte', '**Nunca recongele.** Descarte o que amoleceu.'],
    ])}
    <div class="box b-berry"><h3>Alérgenos na etiqueta</h3><p style="font-size:8pt;margin-top:1mm">Quem vende comida embalada deve avisar os alergênicos (Anvisa, RDC 26/2015). Escreva na etiqueta, quando houver: <b>CONTÉM LEITE · CONTÉM OVO · CONTÉM AMENDOIM · CONTÉM GLÚTEN (biscoito) · PODE CONTER TRAÇOS DE CASTANHAS (creme de avelã)</b>. Isso protege quem tem alergia e passa confiança para as mães.</p></div>
    <div style="margin-top:auto">${callout('dica', 'Validade', 'Bem fechado e a −18 °C: **30 dias** para os cremosos e os de fruta. Na prática, produza para vender em até 15 dias: sabor e textura ficam no auge.')}</div>`);

  pg(`
    ${faixa(C.turquesa, '1.7', 'Técnicas de acabamento')}
    ${cabeca('', '5 técnicas que fazem ==cobrar mais==')}
    ${[
      ['Listras na parede', 'Creme de avelã, doce de leite ou calda, morno, passado com colher ou bisnaga **por dentro** do saquinho antes de encher. Fica listrado por fora.'],
      ['Parede trufada', 'Chocolate fracionado derretido pincelado por dentro do saquinho, 10 min no freezer, depois enche. Ao morder, casquinha de chocolate.'],
      ['Calda no fundo', '1 colher de calda (goiabada, caramelo, frutas vermelhas) no fundo antes do creme. O cliente “descobre” no final.'],
      ['Pedaços na parede', 'Pedaços de fruta ou biscoito colocados antes do líquido e encostados na parede: aparecem por fora.'],
      ['Duas camadas', 'Encha metade, congele **em pé** por 40 minutos, complete com o segundo sabor. Ex.: Morango + Ninho.'],
    ].map(([t, d], i) => `<div style="display:flex;gap:3mm"><span class="num-g" style="font-size:16pt;color:${C.coralTx};width:7mm">${i + 1}</span><div><h3>${t}</h3><p style="font-size:8.2pt">${md(d)}</p></div></div>`).join('')}
    <div style="margin-top:auto">${callout('segredo', 'Quanto vale', 'Um geladinho com parede trufada ou listras custa **R$ 0,20 a R$ 0,40 a mais** e é vendido por **R$ 1 a R$ 2 a mais**. É o acabamento que transforma sacolé em geladinho gourmet.')}</div>`);

  pg(`
    ${faixa(C.turquesa, '1.8', 'Diagnóstico')}
    ${cabeca('', 'Deu errado? ==Veja o que corrigir==', 'Os 8 problemas mais comuns dos cremosos e dos de fruta, e como resolver no próximo lote.')}
    ${tabela(['Problema', 'Causa provável', 'Como corrigir'], [
      ['Duro como pedra', 'Pouco açúcar ou leite desnatado', 'Siga a Base Mestra; use leite **integral**'],
      ['“Arenoso”, com cristais', 'Base pouco cozida; congelou devagar', 'Ferva 5 min com o amido; não lote o freezer'],
      ['Separou em camadas', 'Bateu pouco; base quente', 'Bata 1 min; encha só com a base fria'],
      ['Gosto de amido', 'Amido demais ou cru', 'No máximo 25 g/L e sempre cozido'],
      ['Talhou (com fruta ácida)', 'Leite quente + fruta ácida', 'Junte a fruta com tudo **gelado**'],
      ['Sabor fraco no de fruta', 'Fruta verde ou pouca polpa', 'Fruta madura; prove gelado'],
      ['Escureceu (banana, abacate)', 'Oxidação', 'Limão na mistura; encha e congele logo'],
      ['Parede trufada quebrou toda', 'Camada grossa de chocolate', 'Camada fina, pincel e 10 min de freezer'],
    ])}
    ${fotosFaixa(['sa-brigadeiro.jpg', 'sa-ninho-trufado-com-morango.jpg', 'sa-pudim-de-leite.jpg'], 26)}
    <div style="margin-top:auto">${callout('ok', 'Anote cada lote', 'Data, sabor, o que mudou e como ficou. Em 3 semanas você tem a **sua** receita no ponto, sem depender de sorte.')}</div>`);

  // ================= PARTE 2 =================
  P.push(abertParte({ num: '02', titulo: 'As 30 receitas', resumo: 'Cada receita traz medidas, rendimento, **custo por unidade** e **preço sugerido**. As cremosas usam a Base Mestra; as de fruta, a Base de Fruta.', itens: ['8 cremosos clássicos', '8 gourmet premium', '8 de frutas de verdade', '6 brasileiríssimos'], foto: 'sa-morango-com-pedacos.jpg', fundo: C.berryTx }));

  pg(`
    ${faixa(cor, '2.0', 'Índice')}
    ${cabeca('', 'As ==30 receitas==')}
    <div style="columns:2;column-gap:4mm;font-size:7.9pt">
      ${CATS_SA.map((c) => `<div style="break-inside:avoid;margin-bottom:3mm"><p style="font-family:Outfit;font-weight:800;font-size:7.4pt;letter-spacing:.1em;text-transform:uppercase;display:flex;align-items:center;gap:1.6mm"><span style="width:3mm;height:3mm;border-radius:1mm;background:${c.cor};border:.3mm solid ${C.cocoEsc}"></span>${c.nome}</p>
        ${R.filter(({ r }) => r.cat === c.id).map(({ r, num, k }) => `<div style="display:flex;justify-content:space-between;gap:1mm;padding:.8mm 0;border-bottom:.25mm dotted ${C.tinta}33"><span><b style="color:${C.coralTx}">${String(num).padStart(2, '0')}</b> ${r.nome}</span><span style="color:${C.dinheiroTx};font-weight:700;white-space:nowrap">${preco(k.preco)}</span></div>`).join('')}</div>`).join('')}
    </div>
    ${tabela(['Categoria', 'Custo por unidade', 'Preço sugerido'], CATS_SA.map((c) => { const a = R.filter(({ r }) => r.cat === c.id).map(({ k }) => k); const f = (v) => preco(Math.min(...v)) + (Math.min(...v) === Math.max(...v) ? '' : ' a ' + preco(Math.max(...v)).replace('R$ ', '')); return [c.nome, f(a.map((k) => k.custoUn)), `**${f(a.map((k) => k.preco))}**`]; }), [1, 2])}
    <p class="small" style="margin-top:auto">Referência de mercado: geladinho gourmet sem álcool sai de R$ 5 a R$ 8 no Brasil. Os de fruta ficam no piso; os gourmet com acabamento, no topo.</p>`);

  let atual = '';
  R.forEach(({ r, num, k }) => {
    if (r.cat !== atual) {
      atual = r.cat;
      const cat = CATS_SA.find((c) => c.id === r.cat);
      P.push(categoriaPg({ cat, itens: R.filter((x) => x.r.cat === r.cat).map((x) => [x.r, x.num, x.k]), n: P.length + 1, marca: MARCA }));
    }
    const cat = CATS_SA.find((c) => c.id === r.cat);
    P.push(receitaPg({ r, num, k, cat, marca: MARCA, n: P.length + 1, fichas: [['Rende', `${k.un} de ${VOLUME.sacole} ml`], ['Preparo', `${r.tempo} min · ${r.nivel}`], ['Custo do lote', brl(k.custo)], ['Custo/unid.', brl(k.custoUn)]], extraPrep: [] }));
  });

  // ================= PARTE 3 =================
  P.push(abertParte({ num: '03', titulo: 'Vendendo para famílias', resumo: 'O sem álcool abre lugares e datas onde o de drink não entra. Aqui estão os melhores, com preço, kit e mensagem pronta.', itens: ['Onde vender', 'Kits de festa infantil', 'O Combo Família', 'Mensagens prontas', 'Cardápio pronto e produção da semana', 'As perguntas das famílias'], foto: 'sa-parte3.jpg', fundo: C.turquesa }));

  pg(`
    ${faixa(cor, '3.1', 'Onde vender')}
    ${cabeca('', 'Os lugares que ==só o sem álcool alcança==')}
    ${tabela(['Onde', 'Como fazer', 'Potencial'], [
      ['**Festas infantis**', 'Kits de 50 a 100 com sabores sortidos e etiqueta com o nome da criança', '★★★★★'],
      ['**Saída de escola e cursos**', 'Isopor na calçada no horário de saída (veja as regras da prefeitura)', '★★★★'],
      ['**Grupos de mães**', 'Encomenda semanal: “caixa da semana” com 10 sabores', '★★★★'],
      ['**Praça, parque, quadra**', 'Fim de semana, com cardápio misto', '★★★★'],
      ['**Academias e escritórios**', 'Frutas e café cremoso, entrega no horário do almoço', '★★★'],
      ['**Eventos de igreja e bazares**', 'Venda em quantidade, preço de evento', '★★★'],
    ], [2])}
    ${callout('atencao', 'Ambulante precisa de autorização', 'Vender na calçada ou em praça pode exigir licença da prefeitura. Informe-se na sua cidade antes. Na dúvida, prefira encomendas, delivery e eventos fechados.')}
    <div style="margin-top:auto">${callout('segredo', 'O cliente que mais recompra', 'A mãe que descobre um geladinho que o filho ama **compra toda semana**. Ofereça a “caixa da semana” com 10 unidades por um preço fechado.')}</div>`);

  const kitN = 50, kitCusto = 2.1;
  pg(`
    ${faixa(cor, '3.2', 'Festa infantil')}
    ${cabeca('', 'O kit de ==festa infantil==', 'O pedido mais lucrativo do sem álcool. Uma festa paga a semana.')}
    <div class="g3">
      ${[['Kit 30', '30 geladinhos', 'R$ 150'], ['Kit 50', '50 geladinhos', 'R$ 240'], ['Kit 100', '100 geladinhos', 'R$ 450']].map(([t, d, p]) => `<div class="box b-berry" style="text-align:center"><p class="eb" style="font-size:6.4pt;color:${cor}">${t}</p><p style="font-size:7.8pt;margin-top:.6mm">${d}</p><p style="font-family:Outfit;font-weight:800;font-size:15pt;color:${cor}">${p}</p></div>`).join('')}
    </div>
    ${tabela(['Kit 50 (exemplo)', 'Valor'], [['Venda', 'R$ 240'], [`Custo (≈ ${brl(kitCusto)}/un com etiqueta personalizada)`, `R$ ${kitN * kitCusto}`.replace('.', ',')], ['**Lucro**', `**R$ ${240 - kitN * kitCusto}**`]], [1])}
    <h2>Monte o kit assim</h2>
    ${lista(['**5 sabores**, 10 de cada: 2 cremosos que criança ama (Ninho, Brigadeiro), 2 de fruta (Morango, Uva) e 1 surpresa (Groselha ou Banoffee).', '**Etiqueta personalizada** com o nome e a idade do aniversariante (custa centavos e encanta).', 'Entregue em **isopor com gelo** e explique: “tira do isopor só na hora de servir”.', 'Cobre **50% de sinal no Pix** para reservar a data.'])}
    <div style="margin-top:auto">${callout('dica', 'Quantos por criança', 'Conte **2 por criança** e **1 por adulto**. Festa de 20 crianças e 15 adultos = 55 geladinhos.')}</div>`);

  pg(`
    ${faixa(cor, '3.3', 'Combo Família')}
    ${cabeca('', 'O ==Combo Família==: drink + sem álcool', 'O combo que mais aumenta o ticket de quem já vende geladinho de drink.')}
    <div class="box b-escuro" style="display:flex;justify-content:space-between;align-items:center"><div><p style="font-family:Outfit;font-weight:700;font-size:10pt;color:#fff">Combo Família</p><p style="font-size:8pt">3 geladinhos de drink + 3 sem álcool</p></div><div style="text-align:right"><p style="font-size:7.4pt;color:#ffffffdd">em vez de R$ 39</p><p style="font-family:Outfit;font-weight:800;font-size:18pt;color:${C.mangaSobreTurq}">R$ 34</p></div></div>
    <h2>Separe bem os dois no isopor</h2>
    ${lista(['Etiqueta do de drink com **“CONTÉM ÁLCOOL”** bem visível e uma cor; a do sem álcool, outra cor.', 'Em lados diferentes do isopor (ou em sacos separados por tipo).', 'Na entrega, diga: “os de etiqueta verde são os das crianças”.', 'O de drink é só para maiores de 18. Quando um adolescente pedir, ofereça o sem álcool: **a venda continua**.'])}
    ${tabela(['Cardápio misto (exemplo)', 'Preço'], [['Geladinho de drink (caipirinha, morango com vodka…)', 'R$ 7'], ['Sem álcool cremoso (Ninho, Brigadeiro…)', 'R$ 6'], ['Sem álcool de fruta (Morango, Maracujá…)', 'R$ 5'], ['Combo Família (3 + 3)', '**R$ 34**']], [1])}
    <div style="margin-top:auto">${callout('segredo', 'Cardápio com âncora', 'Coloque o drink em cima e o sem álcool embaixo. O cliente vê o R$ 7 primeiro e o R$ 5 parece uma barganha para as crianças.')}</div>`);

  pg(`
    ${faixa(cor, '3.4', 'Mensagens prontas')}
    ${cabeca('', 'Copie, ajuste e ==envie hoje==')}
    ${[
      ['Lançamento do sem álcool', '“Gente, agora tenho **geladinho gourmet sem álcool** também! 🍓 Ninho com creme de avelã, brigadeiro, morango com pedaços… R$ 5 a R$ 6. As crianças vão amar. Pronta entrega hoje!”'],
      ['Grupo de mães', '“Oi, mamães! Faço geladinhos gourmet **sem álcool**, com leite e fruta de verdade, embalados e com data. Tenho a **caixa da semana** com 10 sabores por R$ 50. Quem quiser, me chama!”'],
      ['Festa infantil', '“Oi, [nome]! Para o aniversário do [criança], faço kit de geladinho gourmet com etiqueta personalizada com o nome dele. 50 unidades por R$ 240, entregues congelados. Qual é a data?”'],
      ['Para quem já compra o de drink', '“Oi, [nome]! Agora tenho **sem álcool** também, para as crianças ou para quem vai dirigir. Quer que eu mande junto no seu próximo pedido?”'],
    ].map(([t, m]) => `<div class="box b-coco" style="padding:2.6mm 3.2mm"><p class="eb" style="font-size:6.4pt;color:${C.turquesa}">${t}</p><p style="font-size:8.2pt;margin-top:1mm">${md(m)}</p></div>`).join('')}
    <div style="margin-top:auto">${callout('dica', 'Foto vende mais que texto', 'Mande sempre uma foto do geladinho **cortado ao meio** ou contra a luz. No sem álcool, a textura cremosa é o que dá vontade.')}</div>`);

  const cardapio = [[17, 'R$ 5'], [19, 'R$ 5,50'], [18, 'R$ 5'], [1, 'R$ 6'], [2, 'R$ 6'], [3, 'R$ 6'], [9, 'R$ 7'], [10, 'R$ 7'], [13, 'R$ 7']].map(([nn]) => R[nn - 1]);
  pg(`
    ${faixa(cor, '3.5', 'Cardápio pronto')}
    <div style="flex:1;border-radius:4mm;overflow:hidden;position:relative;background:linear-gradient(160deg,#B8236A,#7A1446);color:#fff;display:flex;flex-direction:column">
      <img src="${img('sa-morango-com-leite-condensado.jpg')}" style="width:100%;height:46mm;object-fit:cover;opacity:.92"/>
      <div style="padding:4mm 6mm 5mm;display:flex;flex-direction:column;flex:1">
        <p class="pincel" style="color:${C.mangaSobreTurq};font-size:15pt;text-align:center">geladinhos</p>
        <p style="font-family:Outfit;font-weight:800;font-size:21pt;text-align:center;line-height:1;color:#fff;letter-spacing:-.01em">GOURMET</p>
        <p style="text-align:center;font-size:7.2pt;color:#ffffffe6;letter-spacing:.14em;margin-top:1mm">SEM ÁLCOOL · 120 ML · FEITOS COM LEITE E FRUTA DE VERDADE</p>
        <div style="margin-top:3.4mm;display:flex;flex-direction:column;gap:1.6mm">
          ${[['Frutas', cardapio.slice(0, 3)], ['Cremosos', cardapio.slice(3, 6)], ['Gourmet', cardapio.slice(6)]].map(([g, rs]) => `<p style="font-family:Outfit;font-weight:700;font-size:7pt;letter-spacing:.18em;color:${C.mangaSobreTurq};margin-top:1mm">${g.toUpperCase()}</p>${rs.map(({ r, k }) => `<div style="display:flex;align-items:baseline;gap:2mm"><span style="font-family:Outfit;font-weight:700;font-size:9.2pt;color:#fff">${r.nome}</span><span style="flex:1;border-bottom:.3mm dotted #ffffff66"></span><span style="font-family:Outfit;font-weight:800;font-size:9.2pt;color:${C.mangaSobreTurq}">${preco(k.preco)}</span></div>`).join('')}`).join('')}
        </div>
        <div style="margin-top:auto;display:flex;gap:2mm">${[['Caixa da semana', '10 por R$ 50'], ['Combo Família', '3 drink + 3 sem álcool R$ 34'], ['Festa infantil', '50 por R$ 240']].map(([a, b]) => `<div style="flex:1;border-radius:2.4mm;background:#ffffff1f;text-align:center;padding:1.6mm"><p style="font-size:6.8pt;color:#fff">${a}</p><p style="font-family:Outfit;font-weight:800;font-size:8.6pt;color:${C.mangaSobreTurq}">${b}</p></div>`).join('')}</div>
      </div>
    </div>
    <p class="small" style="text-align:center">Mande como imagem no status ou imprima em A5 e cole no isopor. Troque os sabores conforme o seu estoque.</p>`);

  pg(`
    ${faixa(cor, '3.6', 'Produção da semana')}
    ${cabeca('', 'Uma semana de produção ==organizada==', 'Para vender cerca de **100 geladinhos sem álcool por semana** com 2 sessões de cozinha.')}
    ${tabela(['Dia', 'O que fazer', 'Rende'], [
      ['**Segunda (noite)**', '2 Bases Cremosas Mestras → Ninho com Avelã, Brigadeiro e Paçoca', '≈ 32 un'],
      ['**Terça**', 'Vender + fotos para o status', ''],
      ['**Quarta (noite)**', '3 de fruta: Morango, Maracujá e Uva (sem fogão)', '≈ 26 un'],
      ['**Quinta (noite)**', '1 Base Mestra → Ninho Trufado com Morango e Cookies', '≈ 22 un'],
      ['**Sexta e sábado**', 'Entregas, ponto de venda e festas', ''],
      ['**Domingo**', 'Contas, compras da semana e recompra', ''],
    ], [2])}
    ${destaques([['Horas de cozinha', '≈ 5 h', 'na semana inteira', C.turquesa, C.turqEsc], ['Unidades', '≈ 80 a 100', 'em 8 sabores', C.berryTx, '#8A1A50'], ['Lucro estimado', '≈ R$ 400', 'por semana, só no sem álcool', C.limaoTx, '#2F5A0A']])}
    <div style="margin-top:auto">${callout('segredo', 'Uma panela, vários sabores', 'Cozinhar as bases em dobro e dividir em jarras economiza **metade do tempo** de fogão. É o segredo de quem produz muito sozinha.')}</div>`);

  pg(`
    ${faixa(cor, '3.7', 'Perguntas das famílias')}
    ${cabeca('', 'O que as mães ==mais perguntam==', 'Tenha estas respostas na ponta da língua (e nas Respostas Rápidas do WhatsApp).')}
    ${[
      ['“Pode dar para criança pequena?”', 'Os sem álcool são feitos com leite, fruta e açúcar. Para crianças pequenas, prefira os **sem pedaços duros** (Ninho, Brigadeiro, Morango batido) e sempre com um adulto por perto.'],
      ['“Tem lactose?”', 'Os cremosos têm leite. Para quem não pode, ofereça os de **fruta** (feitos com água), ou faça a Base Mestra com leite e creme **sem lactose**, que funcionam igual.'],
      ['“Tem corante?”', 'A cor vem da fruta e do chocolate. É um ótimo argumento: **“só ingrediente de verdade”**.'],
      ['“É muito doce?”', 'Congelado, o doce diminui. Para quem prefere menos doce, os de fruta ácida (limão, maracujá) são os mais equilibrados.'],
      ['“Quanto tempo dura?”', 'No freezer, bem fechado, até 30 dias. Depois de derreter, não pode congelar de novo.'],
      ['“Tem alergênicos?”', 'Está na etiqueta: leite, ovo, amendoim, glúten (biscoito) e traços de castanhas (creme de avelã), quando houver.'],
    ].map(([q, a]) => `<div class="box b-coco" style="padding:2.4mm 3.2mm"><p style="font-family:Outfit;font-weight:800;font-size:9pt;color:${C.berryTx}">${q}</p><p style="font-size:8pt;margin-top:.8mm">${md(a)}</p></div>`).join('')}`);

  pg(`
    ${faixa(cor, '3.8', 'Checklist')}
    ${cabeca('', 'Do zero ao ==primeiro kit vendido==')}
    <div class="box b-berry">${lista(['Li a Parte 1 e fiz a Base Cremosa Mestra', 'Fiz 4 sabores de teste (2 cremosos e 2 de fruta)', 'Provei um de cada depois de congelado', 'Calculei custo e defini preços', 'Fiz etiquetas com alérgenos e “sem álcool” em destaque', 'Montei o cardápio misto e o Combo Família', 'Enviei a mensagem de lançamento', 'Ofereci o kit de festa infantil para 5 contatos', 'Vendi o primeiro kit! 🎉'], 'ck')}</div>
    <div style="margin-top:2mm">${fotosFaixa(['sa-ninho-com-creme-de-avela.jpg', 'sa-morango-com-pedacos.jpg', 'sa-brigadeiro.jpg'], 30)}</div>
    ${fotosFaixa(['sa-acai-com-banana.jpg', 'sa-cheesecake-de-frutas-vermelhas.jpg', 'sa-manga.jpg'], 30)}
    <div style="margin-top:auto;display:flex;gap:4mm;align-items:center">
      <img src="${img('bruna-retrato.jpg')}" style="width:26mm;height:26mm;border-radius:50%;object-fit:cover;flex-shrink:0"/>
      <div><p style="font-size:8.6pt">Quando comecei a levar os sem álcool junto, as vendas de fim de semana quase dobraram. As famílias compram para a casa toda, e voltam.</p><p class="pincel" style="font-size:14pt;margin-top:1mm">Bruna</p></div>
    </div
    <p class="small" style="font-size:6.4pt;text-align:center;margin-top:-1mm">Fotos de ingredientes e picolés: bancos de imagens de domínio público (CC0), via Openverse.</p>`);

  return P;
}
