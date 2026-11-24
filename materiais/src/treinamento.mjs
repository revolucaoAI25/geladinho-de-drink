// Treinamento principal: Geladinhos de Drinks Lucrativos.
import { C, img, md, callout, lista, passos, tabela, cabeca, pagina, capa, aberturaModulo, saquinho } from './base.mjs';
import { RECEITAS, CATEGORIAS, calc, ML_UN, CUSTO_SAQUINHO, ING, TOP10 } from './receitas.mjs';

const brl = (n) => 'R$ ' + n.toFixed(2).replace('.', ',');
const pct = (n) => n.toFixed(1).replace('.', ',') + '%';

function paginaReceita(r, i, n) {
  const k = calc(r);
  const cat = CATEGORIAS.find((c) => c.id === r.cat);
  const firme = k.teor <= 5.5;
  const visual = r.foto
    ? `<img src="${img(r.foto)}" style="width:44mm;height:55mm;object-fit:cover;object-position:35% 50%;border-radius:3.2mm;display:block;box-shadow:0 1.2mm 3mm rgba(18,52,50,.18)"/>`
    : `<div style="width:42mm;height:54mm;border-radius:3.2mm;background:radial-gradient(120% 90% at 50% 100%,#FFE7B0,#FFF2D6 50%,${C.coco});display:grid;place-items:center">${saquinho(r.cor, r.pedaco, 47)}</div>`;
  return pagina(
    `<div style="display:flex;gap:4mm">
      ${visual}
      <div style="flex:1;min-width:0;display:flex;flex-direction:column">
        <div style="display:flex;align-items:center;gap:2mm"><span class="chip" style="background:${cat.cor}33;color:${C.tinta}">${cat.nome}</span></div>
        <p style="font-family:Outfit;font-weight:800;font-size:9pt;color:${C.coralTx};margin-top:2.4mm">RECEITA ${String(i + 1).padStart(2, '0')}</p>
        <h1 style="font-size:15.5pt;margin-top:.6mm">${r.nome}</h1>
        <p style="font-size:8.2pt;line-height:1.45;margin-top:1.6mm">${r.desc}</p>
        <div style="margin-top:auto;display:grid;grid-template-columns:1fr 1fr;gap:1.4mm">
          ${[
            ['Rende', `${k.un} de ${ML_UN} ml`],
            ['Preparo', `${r.tempo} min`],
            ['Teor final', `${pct(k.teor)} · ${firme ? 'firme' : 'macio'}`],
            ['Custo/unid.', brl(k.custoUn)],
          ]
            .map(([a, b]) => `<div style="background:${C.coco};border-radius:2mm;padding:1.4mm 2mm"><p style="font-size:6.2pt;color:${C.tinta}bb;font-family:Outfit;font-weight:700;letter-spacing:.08em;text-transform:uppercase">${a}</p><p style="font-family:Outfit;font-weight:800;font-size:8.6pt;line-height:1.2">${b}</p></div>`)
            .join('')}
        </div>
      </div>
    </div>
    <div class="box b-coco" style="padding:3mm 3.4mm">
      <h3 style="margin-bottom:1.8mm">Ingredientes <span class="small" style="font-family:Jak;font-weight:500">(1 lote ≈ ${(k.vol / 1000).toFixed(1).replace('.', ',')} litro)</span></h3>
      <ul class="ck" style="font-size:8.3pt">${r.ing.map(([t]) => `<li><span>${md(t)}</span></li>`).join('')}</ul>
    </div>
    <div>
      <h3 style="margin-bottom:2mm">Modo de preparo</h3>
      <div style="font-size:8.3pt">${passos([...r.prep, `Feche com nó firme (ou seladora), deite numa bandeja e congele por **no mínimo 8 horas** (ideal: 12 h).`])}</div>
    </div>
    <div style="margin-top:auto;display:flex;gap:2.6mm;align-items:stretch">
      <div style="flex:1">${callout('segredo', 'Segredo da Bruna', r.dica)}</div>
      <div style="width:30mm;flex-shrink:0;border-radius:3.2mm;background:${C.turquesa};color:#fff;display:flex;flex-direction:column;justify-content:center;align-items:center;text-align:center;padding:2mm">
        <p style="font-size:6.2pt;font-family:Outfit;font-weight:700;letter-spacing:.1em;text-transform:uppercase;color:#ffffffdd">Venda por</p>
        <p style="font-family:Outfit;font-weight:800;font-size:16pt;line-height:1.1;color:${C.manga}">${brl(k.preco).replace(',00', '')}</p>
        <p style="font-size:6.2pt;color:#ffffffdd">lucro ≈ ${brl(k.preco - k.custoUn)}/un</p>
      </div>
    </div>`,
    { n, cls: 'rec' },
  );
}

export function treinamento() {
  const P = [];
  let n = 1;
  const add = (html) => {
    P.push(html);
    n++;
  };
  const pg = (c, o = {}) => add(pagina(c, { n, ...o }));

  add(capa('capa-treinamento.jpg', 'Treinamento completo · Método Drink no Saquinho'));

  // ---------- BOAS-VINDAS ----------
  pg(`
    <img src="${img('bruna-especialista.jpg')}" class="foto" style="height:72mm;object-position:50% 22%"/>
    ${cabeca('Boas-vindas', 'Que bom ter você aqui. ==Bora vender o verão?==')}
    <p>Eu sou a <b>Bruna Martins</b>. Comecei fazendo geladinho de caipirinha para um churrasco de família e, no fim da tarde, três pessoas já queriam comprar. Só que as primeiras receitas davam errado: com bebida demais, o geladinho virava raspadinha mole e derretia no caminho.</p>
    <p>Foram semanas testando até chegar no que eu chamo de <b>Método Drink no Saquinho</b>: a proporção certa para congelar firme, a apresentação que valoriza o produto e o jeito simples de vender. É exatamente isso que está neste material, <mark>do primeiro lote à primeira venda</mark>.</p>
    <p style="font-family:Pincel;font-size:15pt;color:${C.coralTx};margin-top:1mm">Com carinho, Bruna</p>`);

  // ---------- COMO USAR ----------
  pg(`
    ${cabeca('Antes de começar', 'Como usar este treinamento', 'Você não precisa ler tudo de uma vez. Siga esta ordem e, em **3 a 7 dias**, você estará vendendo.')}
    ${[
      ['1', 'Leia os Módulos 1 e 2', '30 minutos. São a base: utensílios, compras e a **Fórmula Drink que Congela**. Sem ela, nada funciona.'],
      ['2', 'Escolha 3 sabores', 'Comece pela Caipirinha de Limão, a de Maracujá e o Morango com Vodka: baratos, fáceis e campeões de venda.'],
      ['3', 'Faça um lote de teste', 'Congele, prove, ajuste. Use o checklist do primeiro lote (página final).'],
      ['4', 'Monte vitrine e preço', 'Módulos 4 e 5: deixe o geladinho bonito e calcule o preço certo.'],
      ['5', 'Comece a vender', 'Módulo 6 + o bônus Plano de 7 Dias. Mensagens prontas incluídas.'],
    ]
      .map(([nn, t, d]) => `<div style="display:flex;gap:3mm;align-items:flex-start"><span class="num-g" style="font-size:20pt;width:8mm">${nn}</span><div><h3>${t}</h3><p style="font-size:8.3pt">${md(d)}</p></div></div>`)
      .join('')}
    <div style="margin-top:auto">${callout('dica', 'Ícones deste material', '<b>Segredo da Bruna</b> = o detalhe que faz diferença · <b>Atenção</b> = erro comum que estraga o lote · <b>Dica</b> = atalho para ganhar tempo ou dinheiro.')}</div>`);

  // ---------- SUMÁRIO ----------
  const SUM = [
    ['Módulo 1', 'Começando do zero', 'utensílios, compras, saquinhos e higiene'],
    ['Módulo 2', 'Fórmula Drink que Congela', 'a proporção que faz congelar firme'],
    ['Módulo 3', 'As 30 receitas', 'medidas, custo e preço de cada uma'],
    ['Módulo 4', 'Geladinho de Vitrine', 'padronização, montagem e apresentação'],
    ['Módulo 5', 'Precificação e lucro', 'custo real, preço, combos e metas'],
    ['Módulo 6', 'Começando a vender', 'onde vender, mensagens e cardápio'],
  ];
  pg(`
    ${cabeca('Sumário', 'O que você vai aprender')}
    <div style="display:flex;flex-direction:column;gap:2.4mm">
      ${SUM.map(([m, t, d], i) => `<div style="display:flex;gap:3mm;align-items:center;padding:2.6mm 3mm;border-radius:3mm;background:${i % 2 ? '#fff' : C.coco};border:.3mm solid ${C.cocoEsc}">
        <span class="num-g" style="font-size:18pt;width:10mm;color:${C.coralTx}">${String(i + 1).padStart(2, '0')}</span>
        <div style="flex:1"><p class="eb" style="font-size:6.2pt;color:${C.turquesa}">${m}</p><h3>${t}</h3><p class="small">${d}</p></div></div>`).join('')}
    </div>
    <div class="box b-escuro" style="margin-top:auto"><p style="font-family:Outfit;font-weight:700;font-size:9.4pt;color:#fff">+ 4 bônus em arquivos separados</p><p style="font-size:8pt;margin-top:1mm">Guia do Geladinho Perfeito · Embalagens que Valorizam · Cardápio dos 10 Primeiros Sabores · Plano de 7 Dias para Começar a Vender</p></div>`);

  // ================= MÓDULO 1 =================
  add(aberturaModulo(1, 'Começando do zero', 'Tudo o que você precisa ter em casa (e o que **não** precisa comprar) para fazer o primeiro lote com segurança.', ['Utensílios: o que você já tem e o que comprar', 'Lista de compras do primeiro lote', 'Saquinhos: tamanhos e quantidades', 'Higiene e organização do freezer'], 'ingredientes.jpg'));

  pg(`
    ${cabeca('Módulo 1 · Utensílios', 'Você já tem ==quase tudo== em casa')}
    <div class="g2">
      <div class="box b-limao"><h3>Você provavelmente já tem</h3><div style="margin-top:2mm">${lista(['Liquidificador', 'Jarra medidora (ou copo americano = 190 ml)', 'Colheres e balança de cozinha', 'Peneira', 'Facas e tábua', 'Bandejas ou assadeiras', 'Freezer ou congelador'])}</div></div>
      <div class="box b-manga"><h3>Vale comprar</h3><div style="margin-top:2mm">${lista(['**Funil** de boca larga (R$ 5 a 10)', '**Saquinhos para geladinho** 6×24 cm (R$ 7 a 11 o pacote com 100)', '**Etiquetas adesivas** (R$ 10)', '**Seladora** manual (opcional, R$ 60 a 90)', '**Isopor** com tampa para vender (R$ 30 a 60)'])}</div></div>
    </div>
    ${callout('dica', 'Comece sem seladora', 'Um **nó bem feito** fecha perfeitamente. Compre a seladora só quando estiver vendendo mais de 50 por semana: ela deixa o acabamento reto e acelera muito a produção.')}
    ${tabela(['Utensílio', 'Para que serve', 'Investimento'], [['Funil', 'Encher sem sujar e sem desperdício', 'R$ 5 a 10'], ['Jarra medidora 1 L', 'Medir líquidos e servir cada saquinho', 'R$ 10 a 20'], ['Balança digital', 'Pesar açúcar e frutas com precisão', 'R$ 20 a 35'], ['Concha de 120 ml', 'Padronizar o volume de cada saquinho', 'R$ 8 a 15']], [2])}
    <div style="margin-top:auto">${callout('atencao', 'Atenção', 'Use utensílios **só para a produção** de geladinhos (ou muito bem lavados). Resto de alho ou cebola no liquidificador estraga o sabor de um lote inteiro.')}</div>`);

  pg(`
    ${cabeca('Módulo 1 · Compras', 'Lista de compras do ==primeiro lote==', 'Para fazer **3 sabores** (Limão, Maracujá e Morango com Vodka), cerca de **25 geladinhos**:')}
    ${tabela(['Item', 'Quantidade', 'Preço aprox.'], [['Cachaça (tipo 51, Pitú)', '1 garrafa (965 ml)', 'R$ 18 a 23'], ['Vodka (tipo Smirnoff)', '1 garrafa (998 ml)', 'R$ 30 a 35'], ['Açúcar refinado', '1 kg', 'R$ 4,50 a 5,50'], ['Limão-taiti', '12 unidades (≈ 1,2 kg)', 'R$ 6 a 9'], ['Maracujá', '5 unidades (ou 300 ml de polpa)', 'R$ 8 a 12'], ['Morango', '2 bandejas de 250 g', 'R$ 14 a 20'], ['Saquinhos 6×24 cm', '1 pacote com 100', 'R$ 8 a 12']], [2])}
    <div class="box b-escuro" style="display:flex;justify-content:space-between;align-items:center"><div><p style="font-family:Outfit;font-weight:700;font-size:10pt;color:#fff">Investimento total</p><p style="font-size:8pt">a cachaça e a vodka rendem mais lotes</p></div><p style="font-family:Outfit;font-weight:800;font-size:18pt;color:${C.manga}">≈ R$ 100</p></div>
    ${callout('segredo', 'Segredo da Bruna', 'A bebida é o item mais caro, mas rende muito: **1 garrafa de 965 ml faz 8 lotes** (uns 65 geladinhos). No segundo lote, o seu custo cai bastante.')}
    <div class="g2" style="margin-top:auto">
      <div class="box b-coco"><h3>Bebida que funciona</h3><p style="font-size:8pt;margin-top:1mm">Marcas nacionais comuns. No geladinho, a diferença de sabor entre uma vodka cara e uma barata praticamente some.</p></div>
      <div class="box b-coco"><h3>Fruta que funciona</h3><p style="font-size:8pt;margin-top:1mm">Bem madura (mais sabor, menos açúcar). Polpa congelada também serve e sai mais barata fora de época.</p></div>
    </div>`);

  pg(`
    ${cabeca('Módulo 1 · Saquinhos', 'O saquinho certo faz ==metade da venda==')}
    ${tabela(['Tamanho', 'Volume', 'Para quê'], [['5 × 23 cm', '≈ 100 ml', 'Sacolé tradicional, preço baixo'], ['**6 × 24 cm**', '**≈ 120 ml**', '**O padrão deste treinamento: tamanho gourmet**'], ['7 × 25 cm', '≈ 160 ml', 'Versão “grande”, para cobrar mais'], ['Bico/zip', '≈ 150 ml', 'Festas e kits (fecha sem nó)']], [1])}
    ${lista(['Prefira saquinho **grosso e transparente** (próprio para alimentos): mostra a cor da fruta e não rasga no isopor.', 'Encha sempre **120 ml** e deixe **4 a 5 cm livres** em cima para dar o nó.', 'Um pacote com 100 custa de R$ 7 a 11: **cerca de R$ 0,14 por geladinho**, já contando a etiqueta.'])}
    <img src="${img('geladinhos.jpg')}" class="foto" style="height:58mm;margin-top:auto"/>`);

  pg(`
    ${cabeca('Módulo 1 · Higiene e freezer', 'Produção ==limpa e organizada==', 'Quem compra comida de você quer confiar. Estes cuidados são simples e fazem diferença.')}
    <div class="box b-turq"><h3>Antes de começar</h3><div style="margin-top:2mm">${lista(['Prenda o cabelo e lave bem as mãos (com sabão, 20 segundos).', 'Limpe a bancada e lave frutas em água corrente; morango e hortelã, de molho em água com bicarbonato por 10 min.', 'Use **água filtrada** ou fervida e fria em todas as receitas.', 'Deixe saquinhos, funil e jarra separados e limpos.'], 'ck')}</div></div>
    <div class="box b-coco"><h3>Organizando o freezer</h3><div style="margin-top:2mm">${lista(['Freezer na temperatura **mais fria** (−18 °C ou menos).', 'Congele **deitado em bandejas**: o geladinho fica reto e bonito (vitrine!).', 'Não coloque mais de 2 lotes de uma vez: congelar devagar forma gelo grosso.', 'Separe por sabor e escreva a data de produção.'])}</div></div>
    <img src="${img('freezer.jpg')}" class="foto" style="height:48mm;margin-top:auto"/>`);

  // ================= MÓDULO 2 =================
  add(aberturaModulo(2, 'Fórmula Drink que Congela', 'O coração do método. É aqui que a maioria erra: põe bebida demais e o geladinho **não congela**. Você vai aprender a proporção exata.', ['Por que o álcool impede o congelamento', 'A Regra dos 5%: quanto de bebida por litro', 'As 4 partes de todo geladinho de drink', 'Os erros que estragam o lote (e como corrigir)'], 'bruna-cozinha.jpg'));

  pg(`
    ${cabeca('Módulo 2 · Entenda', 'Por que geladinho de drink ==não congela== (quando feito errado)')}
    <p>A água congela a <b>0 °C</b>. O álcool só congela a <b>−114 °C</b>. O freezer de casa chega a uns <b>−18 °C</b>. Ou seja: o álcool <b>nunca</b> congela no seu freezer.</p>
    <p>Quando você mistura bebida na base, ela “segura” parte da água sem deixar congelar. Pouca bebida: o geladinho fica firme. Bebida demais: fica uma raspadinha mole, que derrete na mão do cliente.</p>
    <div style="display:flex;gap:2mm;margin-top:1mm">
      ${[
        ['até 5%', 'Firme', 'congela como um geladinho comum', C.limaoCl, C.limaoEsc],
        ['5 a 7%', 'Macio', 'textura de raspadinha cremosa', C.mangaCl, '#8A5F00'],
        ['acima de 8%', 'Não congela', 'vira um slush mole', C.coralCl, C.coralEsc],
      ]
        .map(([a, b, d, bg, cor]) => `<div style="flex:1;background:${bg};border-radius:3mm;padding:3mm 2.4mm;text-align:center"><p style="font-family:Outfit;font-weight:800;font-size:13pt;color:${cor}">${a}</p><p style="font-family:Outfit;font-weight:700;font-size:8.6pt">${b}</p><p style="font-size:7pt;color:${C.tinta}c4;margin-top:.6mm">${d}</p></div>`)
        .join('')}
    </div>
    <p class="small" style="text-align:center">Teor alcoólico da mistura pronta, no freezer doméstico (−18 °C).</p>
    ${callout('segredo', 'A regra de ouro', 'Todas as 30 receitas deste treinamento já vêm **calculadas entre 3% e 5,5%** de teor final. Por isso elas congelam firme. Se você inventar um sabor novo, use a tabela da próxima página.')}
    <div style="margin-top:auto">${callout('atencao', 'O açúcar também segura o congelamento', 'Ele deixa o geladinho macio e sem gelo grosso, o que é bom. Mas exagerar no açúcar **e** na bebida ao mesmo tempo é receita de geladinho mole. Siga as medidas.')}</div>`);

  pg(`
    ${cabeca('Módulo 2 · A regra', 'Quanto de bebida ==por litro de geladinho==', 'Use esta tabela para qualquer receita, inclusive as que você inventar.')}
    ${tabela(['Tipo de bebida', 'Teor', 'Máximo por litro'], [['Cachaça, vodka, rum, gin, tequila', '38 a 40%', '**120 a 130 ml**'], ['Licores (pêssego, chocolate, curaçau)', '17 a 25%', '**200 a 250 ml**'], ['Licor de laranja (triple sec)', '30%', '**150 ml**'], ['Vinho, espumante, Aperol', '11 a 12%', '**350 a 400 ml**'], ['Misturando bebidas', '—', 'some as frações: ex.: 80 ml de vodka (2/3) + 80 ml de licor (1/3)']], [1, 2])}
    <div class="box b-coco">
      <h3>A conta rápida (para quem gosta de número)</h3>
      <p style="font-size:8.2pt;margin-top:1.4mm">Teor final = (ml de bebida × teor da bebida) ÷ volume total da mistura</p>
      <p style="font-size:8.2pt;margin-top:1mm">Exemplo: 120 ml de cachaça (39%) em 1 litro de mistura → 120 × 0,39 ÷ 1000 = <b>4,7%</b> ✓ congela firme.</p>
    </div>
    ${callout('dica', 'Sem calculadora?', 'Pense assim: **um copinho de dose (≈ 50 ml) de destilado para cada 400 ml de base**. Fica sempre dentro da faixa segura.')}
    <div style="margin-top:auto">${callout('ok', 'Vai fazer só 500 ml?', 'Divida tudo pela metade, inclusive a bebida. A proporção é o que importa, não o tamanho do lote.')}</div>`);

  pg(`
    ${cabeca('Módulo 2 · A fórmula', 'As ==4 partes== de todo geladinho de drink')}
    <div style="display:flex;height:11mm;border-radius:3mm;overflow:hidden;font-family:Outfit;font-weight:700;font-size:7.4pt;color:#fff">
      <div style="width:58%;background:${C.turquesa};display:grid;place-items:center">BASE 55-65%</div>
      <div style="width:24%;background:${C.coralTx};display:grid;place-items:center">SABOR 20-30%</div>
      <div style="width:7%;background:${C.manga};display:grid;place-items:center;color:${C.tinta}">AÇ.</div>
      <div style="width:11%;background:${C.berryTx};display:grid;place-items:center">DRINK</div>
    </div>
    ${[
      [C.turquesa, '1. Base líquida', 'água filtrada, leite, leite de coco ou suco. É o que congela e dá corpo.', '550 a 650 ml por litro'],
      [C.coral, '2. Sabor', 'fruta batida, polpa, suco concentrado ou chocolate. Quanto mais madura a fruta, menos açúcar você precisa.', '200 a 450 g por litro'],
      [C.manga, '3. Açúcar', 'deixa o geladinho macio e sem gelo grosso. O frio diminui a doçura: a mistura precisa estar **mais doce do que um suco**.', '120 a 200 g por litro'],
      [C.berry, '4. Drink', 'a bebida, sempre **por último** e com a mistura fria.', 'veja a tabela da regra'],
    ]
      .map(([cor, t, d, q]) => `<div style="display:flex;gap:3mm;align-items:flex-start"><span style="width:3mm;align-self:stretch;border-radius:2mm;background:${cor};flex-shrink:0"></span><div style="flex:1"><div style="display:flex;justify-content:space-between;gap:2mm"><h3>${t}</h3><span class="chip k-turq">${q}</span></div><p style="font-size:8.2pt;margin-top:.6mm">${md(d)}</p></div></div>`)
      .join('')}
    <div><p class="eb" style="color:${C.turquesa};margin-bottom:1.2mm">Exemplo: Caipirinha de Limão (1 lote)</p>
    ${tabela(['Parte', 'Ingrediente', 'Quantidade'], [['Base', 'Água filtrada gelada', '650 ml'], ['Sabor', 'Suco de limão + cubinhos + raspas', '180 ml + 2 limões'], ['Açúcar', 'Açúcar refinado', '180 g'], ['Drink', 'Cachaça', '120 ml (teor final 4,2%)']], [2])}</div>
    <div class="box b-coco" style="margin-top:auto">
      <h3>Frutados × cremosos</h3>
      <p style="font-size:8.1pt;margin-top:1mm"><b>Frutados</b> (base água): congelam firmes e translúcidos, refrescam mais. <b>Cremosos</b> (leite condensado, creme de leite): textura de sorvete, mais macios e mais caros. Tenha os dois no cardápio.</p>
    </div>`);

  pg(`
    ${cabeca('Módulo 2 · O passo a passo', 'O método em ==6 passos==', 'Vale para qualquer receita. Depois de 2 ou 3 lotes, você faz sem olhar.')}
    ${passos([
      '**Dissolva o açúcar** na base fria, mexendo até não sentir grãos.',
      '**Junte o sabor** (fruta batida, polpa ou suco) e os pedaços que vão aparecer no saquinho.',
      '**Prove.** Tem que estar um pouco mais doce e mais intenso do que você beberia gelado. Ajuste agora.',
      '**Coloque a bebida por último**, com a mistura fria, e misture bem.',
      '**Encha com 120 ml** usando funil e concha, mexendo a jarra a cada 2 ou 3 saquinhos.',
      '**Feche, deite e congele** por 8 a 12 horas. Só venda depois de testar um do lote.',
    ])}
    <img src="${img('bruna-cozinha.jpg')}" class="foto" style="height:58mm;object-position:50% 30%;margin-top:auto"/>`);

  pg(`
    ${cabeca('Módulo 2 · Diagnóstico', 'Deu errado? ==Veja o que corrigir==')}
    ${tabela(['Problema', 'Causa', 'Como corrigir'], [
      ['Não congelou / ficou mole', 'Bebida demais', 'Respeite o máximo por litro. Para salvar o lote: junte mais base com açúcar e congele de novo antes do 1º congelamento terminar.'],
      ['Gelo grosso, cristais', 'Pouco açúcar ou congelamento lento', 'Use 150 g+ de açúcar por litro e não lote o freezer.'],
      ['Sem gosto, aguado', 'Pouca fruta ou fruta verde', 'Fruta bem madura; prove antes de encher.'],
      ['Amargo', 'Miolo branco do limão, kiwi batido demais', 'Tire o miolo; bata frutas com sementes em pulsos curtos.'],
      ['Pedaços todos no fundo', 'Não mexeu a jarra', 'Mexa a cada 2 ou 3 saquinhos.'],
      ['Cremoso separou', 'Pouco tempo no liquidificador', 'Bata 30 s depois de juntar o leite condensado.'],
      ['Vazou no freezer', 'Nó frouxo ou saquinho cheio demais', '120 ml e 4 a 5 cm livres para o nó.'],
    ])}
    <div style="margin-top:auto">${callout('ok', 'Sempre teste um', 'Antes de vender, **abra e prove um geladinho de cada lote**. É o seu controle de qualidade, e leva 1 minuto.')}</div>`);

  // ================= MÓDULO 3 =================
  add(aberturaModulo(3, 'As 30 receitas', 'Cada receita traz medidas exatas, rendimento, teor alcoólico já calculado, **custo por unidade** e um **preço de venda sugerido**.', ['6 caipirinhas de cachaça', '7 sabores com vodka', '5 tropicais com rum', '3 com gin', '6 cremosos (batidas)', '3 especiais de bar'], 'geladinhos.jpg'));

  pg(`
    ${cabeca('Módulo 3 · Índice', 'As ==30 receitas==')}
    <div style="columns:2;column-gap:4mm;font-size:7.9pt">
      ${CATEGORIAS.map((c) => `<div style="break-inside:avoid;margin-bottom:3mm"><p style="font-family:Outfit;font-weight:800;font-size:7.4pt;letter-spacing:.1em;text-transform:uppercase;display:flex;align-items:center;gap:1.6mm"><span style="width:3mm;height:3mm;border-radius:1mm;background:${c.cor}"></span>${c.nome}</p>
        ${RECEITAS.map((r, i) => [r, i]).filter(([r]) => r.cat === c.id).map(([r, i]) => { const k = calc(r); return `<div style="display:flex;justify-content:space-between;gap:1mm;padding:.8mm 0;border-bottom:.25mm dotted ${C.tinta}33"><span><b style="color:${C.coralTx}">${String(i + 1).padStart(2, '0')}</b> ${r.nome}</span><span style="color:${C.dinheiroTx};font-weight:700;white-space:nowrap">${brl(k.preco).replace(',00', '')}</span></div>`; }).join('')}</div>`).join('')}
    </div>
    <div style="margin-top:auto">${callout('dica', 'Como ler as fichas', '**Teor final**: firme = congela como geladinho comum · **Custo/unid.**: ingredientes + saquinho e etiqueta, com preços de referência · **Venda por**: preço praticado na categoria, sempre acima de 2,5× o custo. Ajuste com os preços da sua região (Módulo 5).')}</div>`);

  let catAtual = '';
  RECEITAS.forEach((r, i) => {
    if (r.cat !== catAtual) {
      catAtual = r.cat;
      const c = CATEGORIAS.find((x) => x.id === r.cat);
      const daCat = RECEITAS.map((x, j) => [x, j]).filter(([x]) => x.cat === r.cat);
      const fotos = daCat.slice(0, 3).map(([x]) => img(x.foto));
      pg(`<div style="display:grid;grid-template-columns:1.3fr 1fr;grid-template-rows:54.8mm 54.8mm;gap:2.4mm;height:112mm;flex-shrink:0">
          <img src="${fotos[0]}" style="grid-row:span 2;width:100%;height:112mm;min-width:0;object-fit:cover;border-radius:3.6mm"/>
          <img src="${fotos[1]}" style="width:100%;height:54.8mm;min-width:0;object-fit:cover;object-position:50% 40%;border-radius:3.6mm"/>
          <img src="${fotos[2]}" style="width:100%;height:54.8mm;min-width:0;object-fit:cover;object-position:50% 40%;border-radius:3.6mm"/>
        </div>
        <div style="display:flex;align-items:center;gap:2mm;margin-top:1mm"><span style="width:8mm;height:1.2mm;border-radius:1mm;background:${c.cor}"></span><p class="eb" style="color:${C.turquesa}">Categoria · ${daCat.length} receitas</p></div>
        <h1 style="font-size:23pt;margin-top:-1mm">${c.nome}</h1>
        <p class="lead">${c.desc}</p>
        <div style="margin-top:auto;display:grid;grid-template-columns:${daCat.length > 4 ? '1fr 1fr' : '1fr'};gap:1.4mm">${daCat.map(([x, j]) => `<div style="display:flex;align-items:center;gap:2.4mm;background:#fff;border-radius:2.4mm;padding:1.4mm 2.4mm"><b style="font-family:Outfit;color:${C.coralTx};font-size:9pt;width:6mm">${String(j + 1).padStart(2, '0')}</b><span style="font-family:Outfit;font-weight:700;font-size:8.4pt;line-height:1.15;flex:1">${x.nome}</span><span class="chip k-turq">${brl(calc(x).preco).replace(',00', '')}</span></div>`).join('')}</div>`, { fundo: C.coco });
    }
    add(paginaReceita(r, i, n));
  });

  // ================= MÓDULO 4 =================
  add(aberturaModulo(4, 'Geladinho de Vitrine', 'O cliente compra com os olhos. Um geladinho reto, cheio por igual e bem etiquetado vale o **dobro** de um torto e amassado.', ['Padronização: todos iguais', 'Encher, fechar e congelar sem defeitos', 'Truques de visual que vendem', 'Etiqueta e fotos para divulgar'], 'venda-festa.jpg'));

  pg(`
    ${cabeca('Módulo 4 · Padronização', 'Todos ==iguais==, todas as vezes')}
    <p>Padronizar transforma “geladinho caseiro” em <b>produto</b>: quem compra hoje recebe o mesmo tamanho e sabor na semana que vem.</p>
    <div class="g2">
      ${[
        ['Mesmo volume', 'sempre 120 ml, medidos com concha ou jarra'],
        ['Mesma receita', 'pese o açúcar e meça a bebida, nada “a olho”'],
        ['Mesmo fechamento', 'nó na mesma altura ou selado no mesmo ponto'],
        ['Mesma etiqueta', 'mesma posição, mesma fonte, mesmas cores'],
      ].map(([t, d]) => `<div class="box b-coco"><h3>${t}</h3><p style="font-size:8pt;margin-top:1mm">${d}</p></div>`).join('')}
    </div>
    <h2>Encher sem sujar</h2>
    ${passos(['Abra o saquinho e encaixe o funil.', 'Despeje com a concha (120 ml), sem encostar a concha no saquinho.', 'Segure pelo topo e bata levemente no balcão para tirar bolhas de ar.', 'Gire o topo, dê o nó bem rente ao líquido (sem deixar ar) e corte a sobra com tesoura.'])}
    ${tabela(['Medida caseira', 'Equivale a', 'Use para'], [['1 copo americano', '190 ml', 'líquidos (≈ 1,5 saquinho)'], ['1 xícara (chá) de açúcar', '≈ 180 g', 'açúcar'], ['1 dose (copinho)', '50 ml', 'bebida destilada'], ['1 concha média', '≈ 120 ml', 'encher 1 saquinho']], [1])}
    <div style="margin-top:auto">${callout('segredo', 'Segredo da Bruna', 'Tire **o máximo de ar** antes do nó. Ar dentro do saquinho forma cristais de gelo e deixa o geladinho “inchado” e feio.')}</div>`);

  pg(`
    ${cabeca('Módulo 4 · Visual', 'Truques que fazem o cliente ==querer foto==')}
    ${[
      ['Congele deitado', 'Em bandeja, um ao lado do outro: sai reto, plano, empilhável e bonito na caixa.'],
      ['Pedaços na parede', 'Coloque os pedaços (morango, rodela de limão, hortelã) **antes** do líquido e encoste na parede do saquinho: eles aparecem por fora.'],
      ['Degradê', 'Calda ou xarope no fundo + mistura clara por cima, congelando em pé nas primeiras 2 horas (veja o Sex on the Beach).'],
      ['Cores fortes', 'Tenha sabores de cores bem diferentes lado a lado: verde, amarelo, rosa, azul. A vitrine fica irresistível.'],
      ['Folha e rodela na frente', 'Uma folha de hortelã ou uma rodela fina de limão encostada na parede, logo abaixo do nó, parece “drink de bar”.'],
    ].map(([t, d], i) => `<div style="display:flex;gap:3mm"><span class="num-g" style="font-size:16pt;color:${C.coralTx};width:7mm">${i + 1}</span><div><h3>${t}</h3><p style="font-size:8.2pt">${md(d)}</p></div></div>`).join('')}
    <img src="${img('venda-condominio.jpg')}" class="foto" style="height:50mm;margin-top:auto"/>
    <p class="small" style="text-align:center">Cores fortes lado a lado, plaquinha de preço visível: vende sozinho.</p>`);

  pg(`
    ${cabeca('Módulo 4 · Etiqueta', 'A etiqueta que ==passa confiança==')}
    <div style="display:flex;gap:4mm;align-items:center">
      <div style="width:52mm;flex-shrink:0;border-radius:3mm;border:.4mm solid ${C.turquesa};background:#fff;padding:3mm;font-size:7.4pt;line-height:1.35">
        <p style="font-family:Outfit;font-weight:800;font-size:10pt;color:${C.turquesa}">Caipirinha de Limão</p>
        <p style="color:${C.coralTx};font-weight:700">Geladinho de drink · 120 ml</p>
        <div class="sep" style="margin:1.6mm 0"></div>
        <p>Ingredientes: água, açúcar, limão, cachaça.</p><p><b>Contém álcool.</b></p>
        <p>Produzido em: __/__ · Consumir até: __/__</p><p>Manter congelado (−18 °C).</p>
        <div class="sep" style="margin:1.6mm 0"></div><p style="font-weight:700">@seuinstagram · (00) 00000-0000</p>
      </div>
      <div style="flex:1">${lista(['**Nome do sabor** em destaque', 'Volume (120 ml)', 'Ingredientes principais', '“Contém álcool”', 'Data de produção e validade', 'Como conservar', 'Seu contato (para recompra!)'])}</div>
    </div>
    ${tabela(['Tipo de etiqueta', 'Custo', 'Quando usar'], [['Adesivo redondo impresso em casa', '≈ R$ 0,02', 'Começo'], ['Adesivo de gráfica rápida', '≈ R$ 0,05 a 0,10', 'Vendas frequentes'], ['Tag de papel com barbante', '≈ R$ 0,15', 'Kits e festas']], [1])}
    <div style="margin-top:auto">${callout('dica', 'Validade', 'Bem congelado e fechado, use **30 dias** como prazo de consumo. Nunca recongele um geladinho que derreteu.')}</div>`);

  pg(`
    ${cabeca('Módulo 4 · Fotos', 'Fotos que ==vendem por você==', 'Com o celular mesmo. O segredo é luz e fundo.')}
    ${passos(['**Luz natural**: perto de uma janela, de dia. Nunca com flash.', '**Contra a luz** para os frutados: a luz atravessando o saquinho mostra a cor e os pedaços.', '**Fundo simples**: madeira clara, mármore, toalha de linho, gelo.', '**Monte a cena**: frutas do sabor, o drink num copo, gelo picado.', '**Mão segurando** o geladinho dá escala e vende mais que o produto sozinho.'])}
    <div class="box b-coco"><h3>As 3 fotos que todo cardápio precisa</h3><div style="margin-top:1.4mm">${lista(['**Produto:** um geladinho de cada sabor, na mão, contra a luz.', '**Vitrine:** todos os sabores juntos, no isopor com gelo (mostra variedade).', '**Cliente:** alguém consumindo, na praia ou na festa (mostra que as pessoas compram).'])}</div></div>
    <div class="g2" style="margin-top:auto">
      <img src="${img('sabor-blue-lagoon.jpg')}" class="foto" style="height:50mm"/>
      <img src="${img('sabor-maracuja.jpg')}" class="foto" style="height:50mm"/>
    </div>`);

  // ================= MÓDULO 5 =================
  add(aberturaModulo(5, 'Precificação e lucro', 'Preço errado é o motivo nº 1 de quem trabalha muito e não ganha. Aqui você aprende a calcular o custo real e o preço certo, sem chute.', ['A ficha de custo, passo a passo', 'Os custos escondidos', 'Quanto cobrar (e por que 3×)', 'Combos, kits e metas de faturamento'], 'venda-praia.jpg'));

  const ex = calc(RECEITAS[0]);
  const DEZ = TOP10.map((nn) => calc(RECEITAS[nn - 1]));
  const CM = Math.round((DEZ.reduce((a, k) => a + k.custoUn, 0) / DEZ.length) * 10) / 10; // custo médio dos 10 mais vendidos
  const mil = (n) => 'R$ ' + (Math.round(n / 10) * 10).toLocaleString('pt-BR');
  pg(`
    ${cabeca('Módulo 5 · Custo', 'Ficha de custo: ==Caipirinha de Limão==', 'Faça esta conta uma vez para cada sabor, com os preços que **você** pagou.')}
    ${tabela(['Ingrediente (preço pago)', 'Usado', 'Custo'], [[`Cachaça (${brl(ING.cachaca.preco * 965).replace(/,\d\d$/, '')} a garrafa de 965 ml)`, '120 ml', brl(120 * ING.cachaca.preco)], [`Açúcar (${brl(ING.acucar.preco * 1000)} o kg)`, '180 g', brl(180 * ING.acucar.preco)], [`Limão (${brl(ING.limaoPedaco.preco)} cada, ≈ R$ 6/kg)`, '8 limões', brl(8 * ING.limaoPedaco.preco)], ['Água filtrada', '650 ml', 'R$ 0,00'], ['**Total do lote**', '', `**${brl(ex.custo)}**`]], [1, 2])}
    <div style="display:flex;gap:2.4mm">
      ${[
        ['Rende', `${ex.un} un`],
        ['Ingredientes/un', brl(ex.custo / ex.un)],
        ['+ saquinho e etiqueta', brl(CUSTO_SAQUINHO)],
        ['Custo final/un', brl(ex.custoUn)],
      ].map(([a, b], i) => `<div style="flex:1;border-radius:3mm;padding:2.4mm;text-align:center;background:${i === 3 ? C.turquesa : C.coco};color:${i === 3 ? '#fff' : C.tinta}"><p style="font-size:6.4pt;font-family:Outfit;font-weight:700;letter-spacing:.06em;text-transform:uppercase;opacity:${i === 3 ? 1 : .7};color:inherit">${a}</p><p style="font-family:Outfit;font-weight:800;font-size:11pt;color:${i === 3 ? C.manga : C.tinta}">${b}</p></div>`).join('')}
    </div>
    ${callout('segredo', 'A fórmula', '**Custo por unidade = (custo total do lote ÷ unidades) + saquinho e etiqueta.** Simples assim. Anote numa folha (ou use a Calculadora Automática de Lucros, se você adquiriu).')}
    <h2>O mesmo trabalho, lucros diferentes</h2>
    ${tabela(['Vendendo 100 unidades a', 'Faturamento', `Custo (${brl(CM)}/un)`, 'Lucro'], [5, 7, 9].map((v) => [`R$ ${v}`, mil(100 * v), mil(100 * CM), (v === 5 ? '' : '**') + mil(100 * (v - CM)) + (v === 5 ? '' : '**')]), [1, 2, 3])}
    <div style="margin-top:auto">${callout('atencao', 'Custos escondidos', 'Gás e energia do freezer, gelo do isopor, sacolinhas, transporte e as unidades que você dá para provar. Some **cerca de 10%** ao custo para cobrir tudo isso.')}</div>`);

  pg(`
    ${cabeca('Módulo 5 · Preço', 'Quanto ==cobrar==')}
    <div class="box b-escuro" style="text-align:center"><p style="font-size:8pt">Regra de mercado para alimentos artesanais</p><p style="font-family:Outfit;font-weight:800;font-size:17pt;color:${C.manga};margin-top:.6mm">Preço = custo × 2,5 a 4</p><p style="font-size:7.8pt;margin-top:.6mm">Geladinho gourmet comum sai de R$ 5 a 8 no Brasil. O de drink, com bebida e 120 ml, fica no topo dessa faixa e acima.</p></div>
    ${tabela(['Categoria', 'Custo por unidade', 'Preço sugerido'], CATEGORIAS.map((c) => { const ks = RECEITAS.filter((r) => r.cat === c.id).map(calc); const f = (a) => brl(Math.min(...a)).replace(',00', '') + (Math.min(...a) === Math.max(...a) ? '' : ' a ' + brl(Math.max(...a)).replace('R$ ', '').replace(',00', '')); return [c.nome, f(ks.map((k) => k.custoUn)), `**${f(ks.map((k) => k.preco))}**`]; }), [1, 2])}
    <h2>Como escolher o seu preço</h2>
    ${lista(['**Pesquise** 3 vendedores de geladinho gourmet da sua região. Fique na mesma faixa ou um pouco acima: seu produto é diferente.', '**Praia, eventos e bares** aceitam R$ 1 a 3 a mais. **Condomínio e vizinhança** ficam no preço da tabela.', '**Nunca** venda abaixo de 2× o custo, nem em promoção.'])}
    <div class="row">
      <div class="box b-coco"><h3>Por que o de drink vale mais</h3><p style="font-size:8pt;margin-top:1mm">Leva bebida de verdade, tem 120 ml e substitui um drink de bar, que custa R$ 20 a 35. Ao lado disso, R$ 7 a 10 parece barato.</p></div>
      <div class="box b-manga"><h3>Quando subir o preço</h3><p style="font-size:8pt;margin-top:1mm">Se você vende tudo sempre e tem fila de encomenda, suba R$ 1. Quem compra pelo sabor não deixa de comprar por R$ 1.</p></div>
    </div>
    <p class="small" style="margin-top:auto">Preço redondo vende mais: R$ 7 é mais fácil de pagar (e de dar troco) que R$ 6,80.</p>`);

  pg(`
    ${cabeca('Módulo 5 · Combos', 'Combos e kits que ==aumentam o ticket==')}
    <div class="g3">
      ${[
        ['Combo 3', '3 geladinhos', 'R$ 18', 'em vez de R$ 21'],
        ['Combo 5', '5 geladinhos', 'R$ 30', 'em vez de R$ 35'],
        ['Kit Festa', '20 sabores sortidos', 'R$ 120', 'com entrega'],
      ].map(([t, d, p, o]) => `<div class="box b-coco" style="text-align:center"><p class="eb" style="font-size:6.4pt">${t}</p><p style="font-size:7.8pt;margin-top:.6mm">${d}</p><p style="font-family:Outfit;font-weight:800;font-size:15pt;color:${C.coralTx}">${p}</p><p class="small">${o}</p></div>`).join('')}
    </div>
    <h2>Quanto dá para faturar</h2>
    ${tabela(['Vendendo por dia', 'Por semana', 'Faturamento no mês', 'Lucro aprox. no mês'], [10, 15, 25].map((d) => [`${d} un a R$ 7,50`, `${d * 6} un`, mil(d * 26 * 7.5), mil(d * 26 * (7.5 - CM * 1.1))]), [1, 2, 3])}
    <p class="small">Considerando 6 dias de venda por semana (26 no mês), preço médio de R$ 7,50, custo médio de ${brl(CM)} por unidade + 10% de custos escondidos. Resultados variam conforme região, preço e dedicação.</p>
    <p style="font-size:8.2pt"><b>Regra do combo:</b> desconto de 10 a 15%, nunca mais que isso. O objetivo é o cliente levar mais um, não pagar menos.</p>
    <div class="box b-turq"><h3>Orçamento de festa em 1 minuto</h3><p style="font-size:8pt;margin-top:1mm">Conte <b>2 geladinhos por adulto</b> (3 se for festa na piscina ou à tarde no calor). Festa de 40 adultos = 80 a 120 geladinhos. Cobre um sinal de <b>50% no Pix</b> para reservar a data e o restante na entrega.</p></div>
    <div style="margin-top:auto">${callout('segredo', 'Encomendas valem ouro', 'Uma festa de 80 geladinhos a R$ 6 = **R$ 480 numa entrega só**, sem ficar o dia inteiro vendendo. Ofereça encomendas desde a primeira semana.')}</div>`);

  // ================= MÓDULO 6 =================
  add(aberturaModulo(6, 'Começando a vender', 'Onde vender, o que falar e como fazer o cliente voltar. Com mensagens prontas para copiar.', ['Os 6 melhores lugares para vender', 'Mensagens prontas para WhatsApp', 'Cardápio e divulgação', 'Logística e pós-venda'], 'venda-condominio.jpg'));

  pg(`
    ${cabeca('Módulo 6 · Onde vender', 'Os ==6 melhores lugares==')}
    ${tabela(['Onde', 'Como fazer', 'Potencial'], [
      ['**Condomínio / vizinhança**', 'Grupo do prédio + isopor na portaria no fim de semana', '★★★★'],
      ['**Encomendas de festas**', 'Aniversários, chás, churrascos: kits de 20 a 100', '★★★★★'],
      ['**Praia, piscina, clube**', 'Isopor com gelo e plaquinha de preço', '★★★★★'],
      ['**Trabalho / faculdade**', 'Colegas, com entrega combinada', '★★★'],
      ['**Delivery pelo WhatsApp**', 'Cardápio no status, entrega no bairro', '★★★★'],
      ['**Bares e quiosques**', 'Venda em quantidade com preço de revenda (≈ 30% menor)', '★★★'],
    ], [2])}
    <div class="row">
      <div class="box b-coco"><h3>Leve para o ponto de venda</h3><div style="margin-top:1.4mm">${lista(['Isopor + gelo reciclável', 'Plaquinha com sabores e preços', 'QR Code do Pix impresso', 'Troco em notas pequenas', 'Guardanapos e sacolinhas'], 'ck')}</div></div>
      <img src="${img('venda-praia.jpg')}" class="foto" style="height:auto;min-height:40mm;flex:1"/>
    </div>
    <div style="margin-top:auto">${callout('dica', 'Comece pelo mais perto', 'Vizinhos, família e colegas já confiam em você. Eles compram primeiro e indicam para os outros. Praia e eventos vêm depois, com o produto testado.')}</div>`);

  pg(`
    ${cabeca('Módulo 6 · Mensagens prontas', 'Copie, ajuste e ==envie hoje==')}
    ${[
      ['Lançamento (grupo do condomínio / contatos)', '“Oi, gente! 🍹 Comecei a fazer **geladinhos de drink**: caipirinha, morango com vodka, piña colada e mais. R$ 7 cada ou 3 por R$ 18. Neste sábado tenho pronta entrega! Quem quiser, me chama no privado 😊”'],
      ['Status do WhatsApp (com foto)', '“Geladinho de caipirinha saindo do freezer 🍋❄️ Pronta entrega hoje! Chama aqui.”'],
      ['Encomenda de festa', '“Oi, [nome]! Fazemos geladinhos de drink para festas: kit com 20 sabores sortidos por R$ 120, entregues congelados. Para quantas pessoas vai ser a sua?”'],
      ['Quando acham caro', '“Entendo! Ele é feito com fruta de verdade e drink de verdade, 120 ml, não é sacolé comum. No combo de 3 sai R$ 6 cada. Quer provar um?”'],
      ['Na praia ou no evento (falado)', '“Geladinho de drink! Caipirinha, piña colada, morango com vodka… R$ 7, três por R$ 18!”'],
      ['Recompra (2 a 3 dias depois)', '“Oi, [nome]! E aí, o que achou do geladinho? 😍 Essa semana tem sabor novo: Blue Lagoon. Quer que eu separe pra você?”'],
    ].map(([t, m]) => `<div class="box b-coco" style="padding:2.6mm 3.2mm"><p class="eb" style="font-size:6.4pt;color:${C.turquesa}">${t}</p><p style="font-size:8.2pt;margin-top:1mm">${md(m)}</p></div>`).join('')}
    <div style="margin-top:auto">${callout('dica', 'O que mais funciona', '**Foto + preço + “pronta entrega hoje”.** Mensagem sem preço gera pergunta e esfria a venda.')}</div>`);

  pg(`
    ${cabeca('Módulo 6 · Cardápio e logística', 'Cardápio enxuto e ==entrega gelada==')}
    <div class="row">
      <div class="box b-coco"><h3>Cardápio que vende</h3><div style="margin-top:1.6mm">${lista(['**5 a 8 sabores**, não mais', '2 cítricos, 2 de fruta, 1 cremoso, 1 especial', 'Nome, foto e preço de cada um', 'Combos em destaque', 'Troque 1 sabor por semana (cria novidade)'])}</div></div>
      <div class="box b-turq"><h3>Transporte</h3><div style="margin-top:1.6mm">${lista(['Isopor com **gelo reciclável** embaixo e em cima', 'Abra o mínimo possível', 'Dura de **3 a 4 horas** bem fechado', 'Entregas: no máximo 30 min fora do freezer'])}</div></div>
    </div>
    <h2>Pós-venda: o cliente que volta</h2>
    ${lista(['Salve o contato de quem comprou (com o nome e o sabor preferido).', 'Mande a mensagem de recompra 2 a 3 dias depois.', 'Ofereça “compre 10, ganhe 1” para clientes fiéis.', 'Peça uma foto ou depoimento: é a sua melhor propaganda.'])}
    <div class="box b-manga"><h3>Formas de pagamento</h3><p style="font-size:8pt;margin-top:1mm">Aceite <b>Pix</b> (deixe o QR Code impresso no isopor) e, quando vender em eventos, uma <b>maquininha de cartão</b>: cliente sem dinheiro trocado é venda perdida.</p></div>
    <img src="${img('venda-festa.jpg')}" class="foto" style="flex:1;min-height:36mm;height:auto;margin-top:1mm"/>`);

  // ---------- FECHAMENTO ----------
  pg(`
    ${cabeca('Checklist', 'Seu ==primeiro lote==, passo a passo')}
    <div class="box b-coco">${lista(['Comprei saquinhos 6×24, funil e etiquetas', 'Comprei os ingredientes dos 3 primeiros sabores', 'Li a Fórmula Drink que Congela (Módulo 2)', 'Fiz o lote de teste e provei um de cada sabor', 'Calculei o custo e defini o preço de cada sabor', 'Tirei fotos com luz natural', 'Montei o cardápio com combos', 'Enviei a mensagem de lançamento', 'Fiz a minha primeira venda! 🎉'], 'ck')}</div>
    <div class="box b-escuro"><p style="font-family:Outfit;font-weight:700;font-size:9.4pt;color:#fff">Próximos passos</p><div style="margin-top:1.4mm;font-size:8pt">${lista(['Abra o **Bônus 4 · Plano de 7 Dias** e siga um dia de cada vez.', 'Use o **Bônus 3 · Cardápio dos 10 Sabores** para crescer o cardápio.', 'Consulte o **Bônus 1 · Guia do Geladinho Perfeito** sempre que algo sair diferente.'])}</div></div>
    <div style="margin-top:auto;display:flex;gap:4mm;align-items:center">
      <img src="${img('bruna-retrato.jpg')}" style="width:30mm;height:30mm;border-radius:50%;object-fit:cover;flex-shrink:0"/>
      <div><p style="font-size:8.6pt">Agora é com você. Comece pequeno, prove tudo, anote o que vende mais. Em poucas semanas você vai ter o seu cardápio campeão.</p><p class="pincel" style="font-size:15pt;margin-top:1mm">Bora vender o verão! Bruna</p></div>
    </div>`);

  return P;
}
