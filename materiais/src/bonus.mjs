// Os 4 bônus do treinamento. Cada um tem uma cor de destaque própria, dentro da mesma marca.
import { C, img, md, callout, lista, passos, tabela, cabeca, pagina, capa, saquinho } from './base.mjs';
import { RECEITAS, calc, ML_UN, TOP10 } from './receitas.mjs';

const brl = (n) => 'R$ ' + n.toFixed(2).replace('.', ',');
const preco = (n) => brl(n).replace(',00', '');

/** Faz as páginas de um bônus com rodapé próprio. */
function livro(marca, cor) {
  const P = [];
  const pg = (c, o = {}) => P.push(pagina(c, { n: P.length + 1, marca, ...o }));
  const faixa = (num, t) => `<div style="display:flex;align-items:center;gap:2.4mm"><span style="font-family:Outfit;font-weight:800;font-size:8pt;color:#fff;background:${cor};border-radius:2mm;padding:.6mm 2mm">${num}</span><span class="eb" style="color:${cor}">${t}</span></div>`;
  return { P, pg, faixa };
}

/** Página de abertura dos bônus: foto, título e o que tem dentro. */
const abertura = (cor, num, titulo, texto, itens, foto) => `<section class="pg" style="background:${C.coco}">
  <img src="${img(foto)}" style="position:absolute;inset:0 0 auto 0;width:148mm;height:84mm;object-fit:cover"/>
  <div style="position:absolute;left:12.5mm;right:12.5mm;top:72mm;background:#fff;border-radius:4mm;padding:6mm 6mm 5mm;box-shadow:0 2mm 6mm rgba(18,52,50,.12)">
    <p class="eb" style="color:${cor}">Bônus ${num}</p>
    <h1 style="margin-top:1.4mm;font-size:21pt">${titulo}</h1>
    <p class="lead" style="margin-top:2.6mm">${md(texto)}</p>
    <div class="sep" style="margin:4mm 0 3mm"></div>
    <p style="font-family:Outfit;font-weight:700;font-size:7pt;letter-spacing:.16em;text-transform:uppercase;color:${C.tinta}bb">Neste guia</p>
    <div style="margin-top:2mm;display:flex;flex-direction:column;gap:1.4mm">${itens.map((t) => `<p style="display:flex;gap:2mm;font-size:8.6pt"><span style="color:${cor};font-weight:800">→</span>${t}</p>`).join('')}</div>
  </div>
  <svg class="ondas" style="height:5mm;width:148mm" viewBox="0 0 600 40" preserveAspectRatio="none"><path d="M0 18 C120 4 220 30 330 16 S520 2 600 14 V40 H0Z" fill="${C.manga}"/><path d="M0 26 C150 14 260 38 380 24 S540 18 600 24 V40 H0Z" fill="${C.coral}"/><path d="M0 33 C180 26 360 42 600 31 V40 H0Z" fill="${C.turquesa}"/></svg>
</section>`;

// =====================================================================
// BÔNUS 1: Guia do Geladinho Perfeito
// =====================================================================
export function bonus1() {
  const cor = C.turquesa;
  const { P, pg, faixa } = livro('BÔNUS 1 · GUIA DO GELADINHO PERFEITO', cor);
  P.push(capa('capa-b1.jpg', 'Bônus 1 · Guia do Geladinho Perfeito'));
  P.push(abertura(cor, 1, 'Guia do Geladinho Perfeito', 'Textura lisa, sabor intenso e sem vazamento, do freezer até a mão do cliente. Aqui estão os detalhes que separam um geladinho **comum** de um geladinho que o cliente **recompra**.', ['O que faz um geladinho ficar “perfeito”', 'Textura: cremoso sem cristais', 'Congelamento rápido e por igual', 'Conservação, validade e transporte', 'Tabela de problemas e soluções'], 'geladinhos.jpg'));

  pg(`
    ${faixa('01', 'O padrão')}
    ${cabeca('', 'Os ==5 sinais== de um geladinho perfeito', 'Antes de vender, confira um geladinho de cada lote com esta lista. Se passar nos 5, pode vender tranquila.')}
    ${[
      ['Firme ao toque', 'Não amassa com o dedo ao sair do freezer. Mole = bebida demais ou freezer fraco.'],
      ['Liso na boca', 'Sem “areia” de gelo. Cristais grossos = pouco açúcar ou congelou devagar.'],
      ['Sabor de drink', 'Dá para sentir a bebida, mas não queima. Sabor fraco = fruta verde ou pouca polpa.'],
      ['Visual bonito', 'Reto, cheio por igual, pedaços aparecendo, sem ar dentro.'],
      ['Fechado de verdade', 'Nó firme ou selagem completa. Aperte de leve: não pode vazar.'],
    ].map(([t, d], i) => `<div style="display:flex;gap:3mm;align-items:flex-start;padding:2.4mm 3mm;border-radius:3mm;background:${i % 2 ? '#fff' : C.turqCl}"><span class="num-g" style="font-size:16pt;width:6mm">${i + 1}</span><div><h3>${t}</h3><p style="font-size:8.2pt">${d}</p></div></div>`).join('')}
    <div style="margin-top:auto">${callout('segredo', 'Teste do dedo', 'Pegue o geladinho direto do freezer e aperte com o polegar por 3 segundos. Se afundar, o lote ainda não está pronto ou tem bebida demais.')}</div>`);

  pg(`
    ${faixa('02', 'Textura')}
    ${cabeca('', 'Cremoso e ==sem cristais de gelo==')}
    <p>O que deixa o geladinho “arenoso” são <b>cristais de gelo grandes</b>. Eles se formam quando a água congela devagar ou quando falta algo na receita para “segurar” a água. Três ingredientes resolvem isso:</p>
    <div class="g3">
      ${[
        ['Açúcar', '150 a 200 g por litro. Menos que isso e o gelo fica grosso.', C.mangaCl],
        ['Fibra da fruta', 'Polpa e fruta batida deixam a textura mais macia que suco coado.', C.coralCl],
        ['Gordura', 'Leite condensado, creme de leite, leite de coco: textura de sorvete.', C.turqCl],
      ].map(([t, d, bg]) => `<div class="box" style="background:${bg}"><h3>${t}</h3><p style="font-size:7.8pt;margin-top:1mm">${d}</p></div>`).join('')}
    </div>
    <h2>Truques de textura</h2>
    ${lista(['**Bata bem** os cremosos: 30 a 60 segundos no liquidificador incorporam ar e deixam mais leve.', '**1 colher (sopa) de leite em pó** por litro nos cremosos deixa a textura mais encorpada.', 'Nos frutados, **não coe** a fruta (a não ser que tenha semente dura): a fibra ajuda.', 'Mistura **gelada** antes de ir ao freezer congela mais rápido, com cristais menores.'])}
    ${tabela(['Tipo de geladinho', 'Açúcar por litro', 'Por quê'], [['Cítricos (limão, maracujá)', '180 a 200 g', 'fruta ácida pede mais açúcar'], ['Frutas doces (manga, melancia)', '120 a 150 g', 'a fruta já traz açúcar'], ['Cremosos', '0 a 60 g', 'o leite condensado já adoça'], ['Com licor', '−20 g', 'o licor também é doce']], [1])}
    <div style="margin-top:auto">${callout('atencao', 'Não troque açúcar por adoçante', 'O adoçante dá o sabor doce, mas **não** segura a textura. O geladinho fica duro como pedra e cheio de gelo.')}</div>`);

  pg(`
    ${faixa('03', 'Congelamento')}
    ${cabeca('', 'Congelar ==rápido e por igual==', 'Quanto mais rápido congela, menores os cristais e mais lisa a textura.')}
    ${tabela(['Situação', 'Tempo até ficar firme'], [['Freezer vertical/horizontal, −18 °C ou menos', '**6 a 8 horas**'], ['Congelador de geladeira duplex', '**10 a 12 horas**'], ['Freezer cheio ou aberto toda hora', '12 horas ou mais'], ['Congelador de geladeira de 1 porta', 'pode não firmar (evite para drinks)']], [1])}
    ${passos(['Coloque a mistura na geladeira por 1 hora antes de encher (ou use água bem gelada).', 'Deite os saquinhos em **bandejas**, um ao lado do outro, sem empilhar.', 'Deixe um espaço entre as bandejas para o ar frio circular.', 'Depois de **4 horas**, quando já estiverem firmes, pode empilhar ou guardar em sacos maiores.', 'Teste um antes de vender. Só venda com **no mínimo 8 horas** de freezer.'])}
    <img src="${img('freezer.jpg')}" class="foto" style="height:46mm;margin-top:auto"/>`);

  pg(`
    ${faixa('04', 'Conservação')}
    ${cabeca('', 'Quanto tempo dura e ==como guardar==')}
    <div style="display:flex;gap:2.4mm">
      ${[['30 dias', 'no freezer, bem fechado', C.turquesa], ['3 a 4 h', 'no isopor com gelo reciclável', C.coralTx], ['nunca', 'recongelar o que derreteu', '#8E2219']].map(([a, b, c]) => `<div style="flex:1;border-radius:3mm;background:${c};color:#fff;text-align:center;padding:3mm 2mm"><p style="font-family:Outfit;font-weight:800;font-size:14pt;color:#fff">${a}</p><p style="font-size:7.4pt;color:#fff">${b}</p></div>`).join('')}
    </div>
    ${lista(['Guarde os geladinhos prontos em **sacos maiores por sabor**, com a data escrita: evita cheiro de outros alimentos.', 'Use o método **“primeiro que entra, primeiro que sai”**: venda sempre os mais antigos primeiro.', 'Não guarde geladinho na porta do freezer: é a parte mais quente.', 'Se faltar energia por mais de 2 horas, não venda o que amoleceu.', 'Depois de 2 semanas, o sabor da fruta começa a perder força. O ideal é produzir para vender em até **15 dias**.'])}
    ${callout('dica', 'Produza em ciclos', 'Em vez de um lote enorme por mês, faça **2 lotes por semana**. O geladinho chega sempre fresquinho e você não fica com estoque parado.')}
    <div style="margin-top:auto">${callout('atencao', 'Cheiro de freezer', 'Freezer com cheiro passa para o geladinho. Limpe com água e bicarbonato e deixe um potinho aberto de bicarbonato lá dentro.')}</div>`);

  pg(`
    ${faixa('05', 'Transporte')}
    ${cabeca('', 'Do freezer até a mão do cliente, ==firme==')}
    <div class="row">
      <div class="box b-turq"><h3>Monte o isopor assim</h3><div style="margin-top:1.6mm">${passos(['Gelo reciclável no fundo', 'Geladinhos deitados, bem juntos', 'Mais gelo reciclável por cima', 'Toalha ou papelão e tampa'])}</div></div>
      <div class="box b-coco"><h3>Quanto gelo usar</h3><p style="font-size:8pt;margin-top:1.6mm">Regra simples: <b>1 placa de gelo reciclável para cada 10 geladinhos</b>. Em dia muito quente, ou na praia, use 1 a mais.</p></div>
    </div>
    ${tabela(['Isopor', 'Cabe', 'Bom para'], [['12 litros', '≈ 40 geladinhos', 'Entregas e condomínio'], ['25 litros', '≈ 90 geladinhos', 'Praia, eventos, festas'], ['Bolsa térmica', '≈ 15 geladinhos', 'Entregas rápidas de moto/carro']], [1])}
    ${lista(['Abra o isopor o mínimo possível e feche logo em seguida.', 'Na praia, deixe o isopor na **sombra** e sobre uma canga, não direto na areia quente.', 'Gelo comum (de saco) molha os geladinhos e derrete rápido: prefira o reciclável.'])}
    <img src="${img('venda-praia.jpg')}" class="foto" style="height:40mm;margin-top:auto"/>`);

  pg(`
    ${faixa('06', 'Higiene')}
    ${cabeca('', 'Boas práticas ==que dão confiança==', 'Você não precisa de uma cozinha industrial para produzir com segurança. Precisa de hábitos.')}
    <div class="g2">
      <div class="box b-coco"><h3>Pessoal</h3><div style="margin-top:1.4mm">${lista(['Cabelo preso ou touca', 'Mãos lavadas a cada pausa', 'Sem anéis e pulseiras', 'Não produzir doente'], 'ck')}</div></div>
      <div class="box b-coco"><h3>Ingredientes</h3><div style="margin-top:1.4mm">${lista(['Frutas lavadas em água corrente', 'Folhas de molho em água sanitária própria para alimentos (1 colher/litro, 10 min)', 'Água filtrada ou fervida', 'Laticínios dentro da validade'], 'ck')}</div></div>
      <div class="box b-coco"><h3>Utensílios</h3><div style="margin-top:1.4mm">${lista(['Lavados com detergente e bem enxaguados', 'Liquidificador só para doces', 'Panos limpos a cada produção'], 'ck')}</div></div>
      <div class="box b-coco"><h3>Bancada</h3><div style="margin-top:1.4mm">${lista(['Limpa antes e depois', 'Sem animais na cozinha', 'Lixo tampado e longe'], 'ck')}</div></div>
    </div>
    <div style="margin-top:auto">${callout('dica', 'Vai crescer?', 'Quando as vendas aumentarem, procure a vigilância sanitária da sua cidade e o curso gratuito de Boas Práticas de Manipulação (o Sebrae costuma oferecer). Isso abre portas para vender em lojas e eventos maiores.')}</div>`);

  pg(`
    ${faixa('07', 'Diagnóstico')}
    ${cabeca('', 'Problema → causa → ==solução==')}
    ${tabela(['Problema', 'Causa provável', 'Solução'], [
      ['Ficou mole', 'Bebida acima de 5%; freezer fraco', 'Siga as medidas; deixe 12 h; regule o freezer no máximo'],
      ['Duro como pedra', 'Pouco açúcar; adoçante', '150 g+ de açúcar por litro'],
      ['Cristais / areia', 'Congelou devagar; freezer lotado', 'Mistura gelada; bandejas espaçadas'],
      ['Separou em camadas', 'Fruta pesada desceu', 'Mexa a jarra; nos cremosos, bata mais'],
      ['Sabor fraco', 'Fruta verde; muita água', 'Fruta madura; prove antes'],
      ['Gosto de álcool forte', 'Bebida demais ou de baixa qualidade', 'Respeite a medida; marca nacional boa'],
      ['Cor apagada', 'Fruta oxidou', 'Suco de limão na mistura; produza e congele logo'],
      ['Vazou', 'Nó frouxo; cheio demais', '120 ml; 4 a 5 cm livres; nó duplo'],
      ['Cheiro estranho', 'Freezer com cheiro', 'Sacos por sabor; bicarbonato no freezer'],
    ])}
    <div style="margin-top:auto">${callout('ok', 'Anote seus lotes', 'Data, sabor, quantidade e o que você mudou. Em poucas semanas você tem a sua receita “no ponto”, sem depender de sorte.')}</div>`);

  pg(`
    ${faixa('08', 'Checklist')}
    ${cabeca('', 'Controle de qualidade ==de cada lote==')}
    <div class="box b-turq">${lista(['Mistura provada antes da bebida (doce e intensa)', 'Bebida medida, nunca “a olho”', 'Cada saquinho com 120 ml', 'Sem ar antes do nó', 'Etiqueta com sabor e data', 'Congelado deitado por 8 h ou mais', 'Um geladinho aberto e provado', 'Teste do dedo: firme', 'Guardado em saco por sabor, com data'], 'ck')}</div>
    <div><p class="eb" style="color:${C.turquesa};margin-bottom:1.2mm">Ficha de lote (copie no caderno)</p>
    <table class="t"><tr><th>Data</th><th>Sabor</th><th class="num">Qtd.</th><th>Ajuste feito</th><th>Nota</th></tr>${Array.from({ length: 5 }, () => '<tr><td style="height:6mm"></td><td></td><td></td><td></td><td></td></tr>').join('')}</table></div>
    <div style="margin-top:auto;display:flex;gap:3mm;align-items:center">
      <img src="${img('bruna-retrato.jpg')}" style="width:24mm;height:24mm;border-radius:50%;object-fit:cover"/>
      <p style="font-size:8.4pt;flex:1">“O cliente perdoa um sabor que não é o preferido dele. Geladinho mole ou vazando ele não perdoa. Qualidade constante é o que faz o cliente voltar.” <span class="pincel" style="font-size:12pt">Bruna</span></p>
    </div>`);
  return P;
}

// =====================================================================
// BÔNUS 2: Embalagens que Valorizam seu Geladinho
// =====================================================================
export function bonus2() {
  const cor = C.coralTx;
  const { P, pg, faixa } = livro('BÔNUS 2 · EMBALAGENS QUE VALORIZAM', cor);
  P.push(capa('capa-b2.jpg', 'Bônus 2 · Embalagens que Valorizam seu Geladinho'));
  P.push(abertura(cor, 2, 'Embalagens que Valorizam seu Geladinho', 'O mesmo geladinho pode ser vendido por R$ 4 ou por R$ 9. A diferença está, quase sempre, **na embalagem e na apresentação**.', ['Qual saquinho comprar (e quanto)', 'Fechar com nó ou com seladora', 'Etiquetas: modelos prontos', 'Kits e caixas para festas e presentes', 'Onde comprar e quanto custa'], 'venda-festa.jpg'));

  pg(`
    ${faixa('01', 'Por que importa')}
    ${cabeca('', 'A embalagem ==vende antes do sabor==')}
    <p>O cliente decide em segundos, olhando. Antes de provar, ele julga o seu geladinho pelo que vê: <b>se está bonito, limpo, bem fechado e com etiqueta</b>, ele confia e aceita pagar mais.</p>
    <div class="row" style="align-items:stretch">
      <div class="box b-coral"><p class="eb" style="color:${C.coralTx}">Parece caseiro</p><div style="margin-top:1.6mm">${lista(['Saquinho fino e enrugado', 'Tamanhos diferentes', 'Nó torto, com ar', 'Sem etiqueta', 'Vendido a R$ 3 ou 4'])}</div></div>
      <div class="box b-limao"><p class="eb" style="color:${C.limaoTx}">Parece gourmet</p><div style="margin-top:1.6mm">${lista(['Saquinho grosso e transparente', 'Todos iguais (120 ml)', 'Reto, sem ar', 'Etiqueta com nome e data', 'Vendido a R$ 7 a 12'])}</div></div>
    </div>
    ${callout('segredo', 'A conta que vale a pena', 'Uma etiqueta bonita custa de **R$ 0,02 a R$ 0,10**. Ela pode fazer o geladinho valer **R$ 2 a 3 a mais**. Não existe investimento com retorno melhor no seu negócio.')}
    <img src="${img('venda-condominio.jpg')}" class="foto" style="height:44mm;margin-top:auto"/>`);

  pg(`
    ${faixa('02', 'Saquinhos')}
    ${cabeca('', 'Qual saquinho ==comprar==')}
    ${tabela(['Medida', 'Volume', 'Pacote 100 un', 'Uso'], [['5 × 23 cm', '≈ 100 ml', 'R$ 6 a 9', 'Sacolé simples'], ['**6 × 24 cm**', '**≈ 120 ml**', '**R$ 7 a 11**', '**Gourmet (recomendado)**'], ['7 × 25 cm', '≈ 160 ml', 'R$ 10 a 14', 'Versão grande'], ['Com zip / fecho', '≈ 150 ml', 'R$ 25 a 40', 'Kits e presentes']], [2])}
    <div class="g2">
      <div class="box b-coco"><h3>Na hora de comprar, veja</h3><div style="margin-top:1.4mm">${lista(['“Próprio para alimentos”', 'Polietileno de **baixa densidade** (PEBD): mais macio e resistente ao frio', 'Transparente (cristal)', 'Espessura de pelo menos 0,06 mm'])}</div></div>
      <div class="box b-coco"><h3>Quanto comprar</h3><p style="font-size:8pt;margin-top:1.4mm">Para começar, <b>1 pacote de 100</b>. Quando estiver vendendo mais de 100 por semana, compre em <b>milheiro</b> (1.000 un): sai até 40% mais barato.</p></div>
    </div>
    <div class="box b-coral"><h3>Quantos saquinhos eu gasto?</h3><p style="font-size:8pt;margin-top:1mm">Cada litro de mistura rende <b>8 saquinhos</b> de 120 ml. Some <b>10% de sobra</b> para os que rasgam ou ficam tortos. Vendendo 100 por semana, um pacote de 100 dura uma semana; um milheiro dura uns 2 meses e meio.</p></div>
    <div style="margin-top:auto">${callout('atencao', 'Saquinho fino rasga', 'O saquinho barato e fino racha no frio e rasga no isopor. A economia de alguns centavos vira prejuízo de um geladinho inteiro.')}</div>`);

  pg(`
    ${faixa('03', 'Fechamento')}
    ${cabeca('', 'Nó ou seladora: ==qual usar==')}
    <div class="row" style="align-items:stretch">
      <div class="box b-coco"><h3>Nó</h3><p class="small">custo zero</p><div style="margin-top:1.6mm">${passos(['Segure o saquinho cheio pelo topo', 'Aperte de leve para tirar o ar', 'Gire o topo 2 voltas', 'Faça o nó rente ao líquido', 'Corte a sobra a 1 cm do nó'])}</div></div>
      <div class="box b-turq"><h3>Seladora</h3><p class="small">R$ 60 a 90 (manual, 20 cm)</p><div style="margin-top:1.6mm">${passos(['Tire o ar apertando de leve', 'Coloque o topo na seladora', 'Pressione por 1 a 2 segundos', 'Confira se a solda ficou inteira', 'Apare com tesoura, se quiser'])}</div></div>
    </div>
    ${tabela(['', 'Nó', 'Seladora'], [['Custo', 'Zero', 'R$ 60 a 90'], ['Visual', 'Artesanal', 'Profissional, reto'], ['Velocidade', '≈ 15 s cada', '≈ 4 s cada'], ['Espaço livre no saquinho', '4 a 5 cm', '2 a 3 cm'], ['Quando usar', 'Começo', 'A partir de 50 por semana']])}
    <div style="margin-top:auto">${callout('dica', 'Selagem dupla', 'Com seladora, faça **duas soldas** com 3 mm de distância. Se uma falhar, a outra segura, e ninguém recebe geladinho vazando.')}</div>`);

  pg(`
    ${faixa('04', 'Etiquetas')}
    ${cabeca('', '3 modelos de ==etiqueta== para copiar')}
    <div style="display:flex;flex-direction:column;gap:3mm">
      <div style="display:flex;gap:3mm;align-items:center">
        <div style="width:24mm;height:24mm;border-radius:50%;background:${C.manga};display:grid;place-items:center;text-align:center;flex-shrink:0;padding:2mm"><div><p style="font-family:Outfit;font-weight:800;font-size:7.4pt;line-height:1.1">Caipirinha de Limão</p><p style="font-size:5.4pt;margin-top:.6mm">contém álcool</p></div></div>
        <div><h3>Redonda (5 cm)</h3><p style="font-size:8pt">A mais barata. Imprime em casa em papel adesivo (20 por folha A4). Vai na frente do saquinho.</p></div>
      </div>
      <div style="display:flex;gap:3mm;align-items:center">
        <div style="width:24mm;flex-shrink:0;border-radius:2mm;background:#fff;border:.4mm solid ${C.coral};padding:1.6mm;font-size:5.4pt;line-height:1.3"><p style="font-family:Outfit;font-weight:800;font-size:7pt;color:${C.coralTx}">Mojito</p><p>água, açúcar, limão, hortelã, rum</p><p><b>Contém álcool</b> · 120 ml</p><p>Fab.: __/__ Val.: __/__</p></div>
        <div><h3>Retangular completa (5 × 3 cm)</h3><p style="font-size:8pt">A mais profissional: sabor, ingredientes, volume, datas e contato. Ideal para entregas e festas.</p></div>
      </div>
      <div style="display:flex;gap:3mm;align-items:center">
        <div style="width:24mm;height:11mm;flex-shrink:0;border-radius:2mm;background:${C.turquesa};color:#fff;display:grid;place-items:center;font-family:Outfit;font-weight:800;font-size:7pt">@seu.geladinho</div>
        <div><h3>Faixa da marca (lacre)</h3><p style="font-size:8pt">Dobrada sobre o nó ou a selagem, funciona como lacre e leva o seu contato para a próxima compra.</p></div>
      </div>
    </div>
    <div class="box b-coral" style="padding:2.4mm 3.2mm"><p style="font-size:8pt"><b>Não pode faltar:</b> nome do sabor · “contém álcool” · volume e ingredientes · data de produção e validade (30 dias) · seu @ ou WhatsApp.</p></div>
    <h2>Imprimindo em casa</h2>
    ${passos(['Compre **papel adesivo fosco** A4 (o brilhante borra com a umidade do freezer).', 'Monte a folha com 20 etiquetas redondas de 5 cm.', 'Imprima em qualidade “normal” e espere 5 minutos para secar.', 'Cole **antes** de encher, com o saquinho seco: no saquinho gelado e úmido a etiqueta não gruda.'])}
    <div style="margin-top:auto">${callout('dica', 'Faça no celular', 'Apps gratuitos de design têm modelos de etiqueta redonda. Monte uma vez, troque só o nome do sabor e imprima em papel adesivo fosco.')}</div>`);

  pg(`
    ${faixa('05', 'Cores e identidade')}
    ${cabeca('', 'Uma marca simples, ==reconhecível==', 'Você não precisa de logotipo caro. Precisa de consistência.')}
    ${passos(['**Escolha um nome** curto e fácil de falar: “Geladinho da Ju”, “Drink Gelado”, “Saquinho Tropical”.', '**Escolha 2 cores** e use sempre as mesmas: etiqueta, cardápio, plaquinha de preço.', '**Escolha 1 fonte** bem legível para os nomes dos sabores.', '**Crie um @** no Instagram com o nome da marca e coloque em todas as etiquetas.'])}
    <div style="display:grid;grid-template-columns:repeat(6,1fr);gap:1.6mm">
      ${[0, 1, 8, 6, 28, 13].map((j) => `<img src="${img(RECEITAS[j].foto)}" style="width:100%;height:50mm;object-fit:cover;object-position:30% 50%;border-radius:2.4mm"/>`).join('')}
    </div>
    <p class="small" style="text-align:center">Saquinhos de cores fortes lado a lado: a própria fruta é a sua identidade visual.</p>
    <div style="margin-top:auto">${callout('segredo', 'Segredo da Bruna', 'A cor do geladinho já é linda. Por isso, prefira etiquetas **claras e simples**, que deixam o produto aparecer. Etiqueta muito colorida “briga” com a fruta.')}</div>`);

  pg(`
    ${faixa('06', 'Kits e caixas')}
    ${cabeca('', 'Kits que ==aumentam o ticket==')}
    ${tabela(['Kit', 'Montagem', 'Custo da embalagem', 'Sugestão de preço'], [['Trio Degustação', '3 sabores em saquinho kraft com visor', '≈ R$ 1,50', 'R$ 20'], ['Caixa 6', 'Caixa de papelão branca + papel de seda', '≈ R$ 3', 'R$ 40'], ['Balde Festa 20', 'Balde de gelo plástico + gelo', '≈ R$ 8 (balde volta)', 'R$ 120'], ['Presente', 'Caixa 6 + tag + fita', '≈ R$ 5', 'R$ 50']], [2, 3])}
    <h2>Para festas</h2>
    ${lista(['Leve os geladinhos em **isopor com gelo** e monte a apresentação no local.', 'Uma **tina ou balde com gelo picado** e os geladinhos “em pé” é a apresentação mais bonita de festa.', 'Coloque uma **plaquinha** com os sabores ao lado.', 'Ofereça **etiqueta personalizada** com o nome do aniversariante (+ R$ 0,50 por unidade).'])}
    <img src="${img('venda-festa.jpg')}" class="foto" style="height:40mm;margin-top:auto"/>`);

  pg(`
    ${faixa('07', 'Onde comprar')}
    ${cabeca('', 'Onde comprar ==e quanto custa==')}
    ${tabela(['Item', 'Onde encontrar', 'Preço médio'], [['Saquinhos para geladinho', 'Loja de embalagens, atacadão, marketplaces', 'R$ 7 a 11 / 100'], ['Papel adesivo para etiquetas', 'Papelaria, marketplaces', 'R$ 15 / 10 folhas'], ['Seladora manual 20 cm', 'Marketplaces, loja de embalagens', 'R$ 60 a 90'], ['Funil de boca larga', 'Loja de utilidades', 'R$ 5 a 10'], ['Isopor 12 L', 'Supermercado, loja de pesca', 'R$ 30 a 45'], ['Gelo reciclável', 'Supermercado, marketplaces', 'R$ 5 a 8 cada'], ['Caixas e kraft', 'Loja de embalagens', 'R$ 1 a 3 cada']], [2])}
    ${callout('dica', 'Compre perto de casa no começo', 'Na loja de embalagens do seu bairro você vê a espessura do saquinho antes de comprar. Depois que achar o ideal, compre em quantidade pela internet.')}
    <div class="box b-escuro" style="margin-top:auto;display:flex;justify-content:space-between;align-items:center"><div><p style="font-family:Outfit;font-weight:700;font-size:9.6pt;color:#fff">Kit inicial de embalagem</p><p style="font-size:7.8pt">100 saquinhos + etiquetas + funil + 1 isopor + 3 gelos</p></div><p style="font-family:Outfit;font-weight:800;font-size:16pt;color:${C.manga}">≈ R$ 85</p></div>`);
  return P;
}

// =====================================================================
// BÔNUS 3: Cardápio dos 10 Primeiros Sabores
// =====================================================================
const NOMES_ING = {
  agua: ['Água filtrada', 'ml'], acucar: ['Açúcar', 'g'], sucoLimao: ['Suco de limão-taiti', 'ml'], limaoPedaco: ['Limões para pedaços', 'un'],
  cachaca: ['Cachaça', 'ml'], polpaMaracuja: ['Polpa de maracujá', 'ml'], morango: ['Morango', 'g'], vodka: ['Vodka', 'ml'], sucoLaranja: ['Suco de laranja', 'ml'],
  nectarPessego: ['Néctar de pêssego', 'ml'], licorPessego: ['Licor de pêssego', 'ml'], groselha: ['Xarope de groselha', 'ml'], curacau: ['Licor curaçau blue', 'ml'],
  melancia: ['Melancia sem casca', 'g'], folha: ['Folhas de hortelã', 'un'], rum: ['Rum branco', 'ml'], abacaxi: ['Abacaxi', 'g'], leiteCoco: ['Leite de coco', 'ml'],
  leiteCond: ['Leite condensado', 'g'], frutasVermelhas: ['Frutas vermelhas congeladas', 'g'], tonica: ['Água tônica', 'ml'], alecrim: ['Ramos de alecrim', 'un'],
  gin: ['Gin', 'ml'], leite: ['Leite', 'ml'], cocoRalado: ['Coco ralado', 'g'],
};

export function bonus3() {
  const cor = C.berryTx;
  const { P, pg, faixa } = livro('BÔNUS 3 · CARDÁPIO DOS 10 PRIMEIROS SABORES', cor);
  const DEZ = TOP10.map((nn) => ({ r: RECEITAS[nn - 1], i: nn - 1, k: calc(RECEITAS[nn - 1]) }));
  P.push(capa('capa-b3.jpg', 'Bônus 3 · Cardápio dos 10 Primeiros Sabores'));
  P.push(abertura(cor, 3, 'Cardápio dos 10 Primeiros Sabores', 'Não precisa fazer os 30 de uma vez. Estes são os **10 sabores que mais vendem**, escolhidos para dar variedade de cor, de bebida e de preço, com lista de compras e plano de produção prontos.', ['Por que estes 10', 'Ficha rápida de cada sabor', 'Cardápio pronto com preços', 'Lista de compras somada', 'Plano de produção em 2 dias'], 'sabor-sex-on-the-beach.jpg'));

  pg(`
    ${faixa('01', 'A escolha')}
    ${cabeca('', 'Por que ==estes 10==', 'Um cardápio que vende tem variedade de cor, de bebida e de preço, sem ser grande demais.')}
    <div class="g2">
      ${[
        ['2 caipirinhas', 'Limão e Maracujá: as mais pedidas e as mais baratas.'],
        ['4 com vodka', 'Morango, Sex on the Beach, Blue Lagoon e Melancia: cores fortes, público amplo.'],
        ['2 tropicais com rum', 'Mojito e Piña Colada: clima de praia.'],
        ['1 com gin', 'Gin Tônica de Frutas Vermelhas: o “premium” do cardápio.'],
        ['1 cremoso', 'Batida de Coco: agrada quem não gosta de drink forte.'],
        ['Faixa de preço', `De ${preco(Math.min(...DEZ.map(({ k }) => k.preco)))} a ${preco(Math.max(...DEZ.map(({ k }) => k.preco)))}: tem opção para todo bolso.`],
      ].map(([t, d]) => `<div class="box b-berry"><h3>${t}</h3><p style="font-size:8pt;margin-top:.8mm">${d}</p></div>`).join('')}
    </div>
    <div style="display:grid;grid-template-columns:repeat(5,1fr);gap:1.6mm;margin-top:auto">${DEZ.map(({ r }) => `<img src="${img(r.foto)}" style="width:100%;height:23mm;object-fit:cover;object-position:30% 50%;border-radius:2.4mm"/>`).join('')}</div>
    ${callout('segredo', 'Comece com 5', 'Na primeira semana, faça só **Limão, Maracujá, Morango com Vodka, Blue Lagoon e Piña Colada**. Depois acrescente os outros conforme o que o seu público mais pedir.')}`);

  // ficha rápida: 2 sabores por página
  for (let j = 0; j < DEZ.length; j += 2) {
    pg(`${j === 0 ? faixa('02', 'Os 10 sabores') : ''}
      ${DEZ.slice(j, j + 2).map(({ r, i, k }) => `<div style="display:flex;gap:3.4mm;flex:1;min-height:0">
        <img src="${img(r.foto)}" style="width:46mm;height:100%;object-fit:cover;border-radius:3.2mm;flex-shrink:0"/>
        <div style="flex:1;min-width:0;display:flex;flex-direction:column;gap:1.6mm">
          <p class="eb" style="color:${cor}">Receita ${String(i + 1).padStart(2, '0')} do treinamento</p>
          <h2 style="margin:0">${r.nome}</h2>
          <p style="font-size:8pt">${r.desc}</p>
          <div style="display:flex;flex-wrap:wrap;gap:1.2mm"><span class="chip k-turq">${k.un} un</span><span class="chip k-manga">${r.tempo} min</span><span class="chip k-limao">${r.nivel}</span></div>
          <p style="font-size:7.4pt;line-height:1.4;color:${C.tinta}cc"><b>Vai:</b> ${r.ing.filter(([, , q]) => q).map(([t]) => t.replace(/\s*\(.*?\)/g, '')).join(' · ')}</p>
          <p style="font-size:7.4pt;line-height:1.4;background:${C.mangaCl};border-radius:2mm;padding:1.4mm 2mm"><b>Segredo:</b> ${md(r.dica)}</p>
          <div style="margin-top:auto;display:flex;gap:2mm">
            <div style="flex:1;border-radius:2.4mm;background:${C.coco};padding:1.4mm 2mm"><p class="small">custo/un</p><p style="font-family:Outfit;font-weight:800;font-size:10pt">${brl(k.custoUn)}</p></div>
            <div style="flex:1;border-radius:2.4mm;background:${cor};color:#fff;padding:1.4mm 2mm"><p style="font-size:7pt;color:#ffffffe6">venda por</p><p style="font-family:Outfit;font-weight:800;font-size:10pt;color:#fff">${preco(k.preco)}</p></div>
          </div>
        </div></div>`).join('<div class="sep"></div>')}`);
  }

  // cardápio pronto
  pg(`
    ${faixa('03', 'Cardápio pronto')}
    <div style="flex:1;border-radius:4mm;background:${C.turquesa};color:#fff;padding:6mm 6mm 5mm;display:flex;flex-direction:column">
      <p class="pincel" style="color:${C.manga};font-size:15pt;text-align:center">geladinhos de</p>
      <p style="font-family:Outfit;font-weight:800;font-size:24pt;text-align:center;line-height:1;letter-spacing:-.02em;color:#fff">DRINKS</p>
      <p style="text-align:center;font-size:7.4pt;color:#ffffffdd;margin-top:1mm;letter-spacing:.14em">120 ML · FEITOS NA HORA · CONTÉM ÁLCOOL</p>
      <div style="margin-top:4mm;display:flex;flex-direction:column;gap:1.8mm">
        ${DEZ.map(({ r, k }) => `<div style="display:flex;align-items:baseline;gap:2mm"><span style="width:2.6mm;height:2.6mm;border-radius:50%;background:${r.cor};flex-shrink:0;align-self:center"></span><span style="font-family:Outfit;font-weight:700;font-size:9.4pt;color:#fff">${r.nome}</span><span style="flex:1;border-bottom:.3mm dotted #ffffff55"></span><span style="font-family:Outfit;font-weight:800;font-size:9.4pt;color:${C.mangaSobreTurq}">${preco(k.preco)}</span></div>`).join('')}
      </div>
      <div style="margin-top:auto;display:flex;gap:2mm">
        ${[['3 por', 'R$ 18'], ['5 por', 'R$ 30'], ['Festa 20', 'R$ 120']].map(([a, b]) => `<div style="flex:1;border-radius:2.6mm;background:#ffffff1a;text-align:center;padding:1.8mm"><p style="font-size:7pt;color:#fff">${a}</p><p style="font-family:Outfit;font-weight:800;font-size:12pt;color:${C.mangaSobreTurq}">${b}</p></div>`).join('')}
      </div>
      <p style="text-align:center;font-size:7.4pt;margin-top:2.6mm;color:#ffffffe6">Peça pelo WhatsApp (00) 00000-0000 · @seugeladinho</p>
    </div>
    <p class="small" style="text-align:center">Combos com sabores até R$ 7. Gin e Batida entram nos combos com + R$ 2 cada.</p>`);

  // lista de compras somada
  const soma = {};
  DEZ.forEach(({ r }) => r.ing.forEach(([, id, q]) => { if (q) soma[id] = (soma[id] || 0) + q; }));
  const fmt = (q, u) => (u === 'ml' && q >= 1000 ? (q / 1000).toFixed(1).replace('.', ',') + ' L' : u === 'g' && q >= 1000 ? (q / 1000).toFixed(2).replace('.', ',') + ' kg' : `${q} ${u}`);
  const compra = (id) => {
    const q = soma[id];
    const s = {
      cachaca: '1 garrafa de 965 ml', vodka: '1 garrafa de 998 ml', rum: '1 garrafa de 1 L', gin: '1 garrafa (sobra para outros lotes)', curacau: '1 garrafa pequena',
      licorPessego: '1 garrafa pequena', acucar: '2 kg', sucoLimao: '≈ 18 limões', limaoPedaco: '4 limões', polpaMaracuja: '5 maracujás', morango: '2 bandejas de 250 g + 1 de reserva',
      melancia: '1 fatia grande (≈ 1,2 kg com casca)', abacaxi: '1 abacaxi pequeno', leiteCond: '2 latas/caixas de 395 g', leiteCoco: '2 vidros de 200 ml',
      frutasVermelhas: '1 pacote de 300 g', tonica: '1 lata de 350 ml + 1 de reserva', folha: '1 maço de hortelã', alecrim: '1 maço pequeno', sucoLaranja: '1 caixa de 1 L',
      nectarPessego: '1 caixa de 1 L', groselha: '1 garrafa pequena', leite: '1 caixa de 1 L', cocoRalado: '1 pacote de 50 g', agua: 'filtro / galão',
    }[id];
    return [NOMES_ING[id][0], fmt(q, NOMES_ING[id][1]), s || ''];
  };
  const grupos = [
    ['Bebidas', ['cachaca', 'vodka', 'rum', 'gin', 'curacau', 'licorPessego']],
    ['Frutas e sucos', ['sucoLimao', 'limaoPedaco', 'polpaMaracuja', 'morango', 'melancia', 'abacaxi', 'frutasVermelhas', 'folha', 'alecrim', 'sucoLaranja', 'nectarPessego']],
    ['Mercearia', ['acucar', 'leiteCond', 'leiteCoco', 'leite', 'cocoRalado', 'groselha', 'tonica']],
  ];
  pg(`
    ${faixa('04', 'Lista de compras')}
    ${cabeca('', 'Tudo para os 10 sabores, ==somado==', `Um lote de cada sabor: cerca de **${DEZ.reduce((a, { k }) => a + k.un, 0)} geladinhos**.`)}
    ${grupos.slice(0, 2).map(([g, ids]) => `<div><p class="eb" style="color:${cor};margin-bottom:1.2mm">${g}</p>${tabela(['Item', 'Total', 'Compre'], ids.filter((id) => soma[id]).map(compra))}</div>`).join('')}`);
  pg(`
    ${faixa('04', 'Lista de compras')}
    ${grupos.slice(2).map(([g, ids]) => `<div><p class="eb" style="color:${cor};margin-bottom:1.2mm">${g}</p>${tabela(['Item', 'Total', 'Compre'], ids.filter((id) => soma[id]).map(compra))}</div>`).join('')}
    <div><p class="eb" style="color:${cor};margin-bottom:1.2mm">Embalagem</p>${tabela(['Item', 'Total', 'Compre'], [['Saquinhos 6×24 cm', '≈ 90', '1 pacote de 100'], ['Etiquetas', '≈ 90', '5 folhas de papel adesivo']])}</div>
    ${callout('dica', 'Onde economizar', 'Bebidas e leite condensado no **atacadão**. Frutas na **feira**, no fim da manhã (mais baratas). Fora da época, troque fruta fresca por **polpa congelada**.')}
    <div class="box b-escuro" style="margin-top:auto;display:flex;justify-content:space-between;align-items:center"><div><p style="font-family:Outfit;font-weight:700;font-size:9.4pt;color:#fff">Custo dos ingredientes</p><p style="font-size:7.6pt">as garrafas sobram para os próximos lotes</p></div><p style="font-family:Outfit;font-weight:800;font-size:15pt;color:${C.manga}">≈ ${preco(Math.round(DEZ.reduce((a, { k }) => a + k.custo, 0)))}</p></div>`);

  pg(`
    ${faixa('05', 'Produção')}
    ${cabeca('', 'Os 10 sabores em ==2 dias==', 'Produza 5 sabores por dia. Assim o freezer não lota e cada lote congela rápido.')}
    <div class="row" style="align-items:stretch">
      ${[
        ['Dia 1 · frutados', ['Caipirinha de Limão', 'Caipirinha de Maracujá', 'Melancia com Vodka', 'Blue Lagoon', 'Mojito'], '≈ 2 h de produção'],
        ['Dia 2 · coloridos e cremosos', ['Morango com Vodka', 'Sex on the Beach', 'Piña Colada', 'Gin Tônica de Frutas Vermelhas', 'Batida de Coco'], '≈ 2 h 30 de produção'],
      ].map(([t, it, d]) => `<div class="box b-coco"><h3>${t}</h3><p class="small">${d}</p><div style="margin-top:1.6mm">${lista(it, 'ck')}</div></div>`).join('')}
    </div>
    <h2>A ordem que economiza tempo</h2>
    ${passos(['Comece pelos **sem liquidificador** (Limão, Maracujá, Blue Lagoon): é só misturar.', 'Depois os **batidos claros** (Melancia, Morango, Mojito).', 'Por último os **cremosos e escuros** (Piña Colada, Batida, Frutas Vermelhas): assim você lava o liquidificador uma vez só.', 'Encha, feche e coloque no freezer **um sabor de cada vez**, antes de começar o próximo.'])}
    ${tabela(['Dia', 'Manhã', 'Noite'], [['Sexta', 'Compras', 'Produzir Dia 1 (frutados)'], ['Sábado', 'Testar Dia 1', 'Produzir Dia 2'], ['Domingo', 'Testar Dia 2', 'Fotos e cardápio pronto']])}
    <div style="margin-top:auto">${callout('dica', 'Etiquete na hora', 'Escreva o sabor na bandeja ou cole a etiqueta antes de congelar. Depois de congelado, Limão e Mojito ficam muito parecidos.')}</div>`);
  return P;
}

// =====================================================================
// BÔNUS 4: Plano de 7 Dias para Começar a Vender
// =====================================================================
export function bonus4() {
  const cor = C.dinheiroTx;
  const { P, pg, faixa } = livro('BÔNUS 4 · PLANO DE 7 DIAS', cor);
  P.push(capa('capa-b4.jpg', 'Bônus 4 · Plano de 7 Dias para Começar a Vender'));
  P.push(abertura(cor, 4, 'Plano de 7 Dias para Começar a Vender', 'Um passo a passo diário, do zero à primeira venda e às primeiras encomendas. Siga na ordem, marque cada tarefa e **no domingo você já tem clientes**.', ['O plano da semana em uma página', 'As tarefas de cada dia, com checklist', 'Mensagens prontas para usar', 'Metas e controle de vendas'], 'venda-condominio.jpg'));

  const DIAS = [
    ['Dia 1', 'Planejar e comprar', 'Ler os Módulos 1 e 2 · escolher 3 sabores · comprar', 'ingredientes.jpg', '1 h 30', 'tudo comprado'],
    ['Dia 2', 'Lote de teste', 'Produzir 3 sabores · congelar · anotar', 'bruna-cozinha.jpg', '2 h', '≈ 25 geladinhos'],
    ['Dia 3', 'Provar e ajustar', 'Teste de qualidade · provas grátis · preço', 'sabor-caipirinha.jpg', '1 h', '5 opiniões + preço'],
    ['Dia 4', 'Vitrine', 'Etiquetas · fotos · cardápio', 'sabor-blue-lagoon.jpg', '1 h 30', '10 fotos + cardápio'],
    ['Dia 5', 'Lançamento', 'Mensagem para contatos e grupos · status', 'venda-condominio.jpg', '1 h', '50 mensagens enviadas'],
    ['Dia 6', 'Primeiras vendas', 'Entregas · ponto de venda · encomendas', 'venda-praia.jpg', '3 h', '20 vendas'],
    ['Dia 7', 'Revisar e repetir', 'Contas · recompra · plano da semana 2', 'venda-festa.jpg', '1 h', 'meta da semana 2'],
  ];

  pg(`
    ${faixa('00', 'Visão geral')}
    ${cabeca('', 'A semana ==em uma página==')}
    <div style="display:flex;flex-direction:column;gap:1.8mm">
      ${DIAS.map(([d, t, s], i) => `<div style="display:flex;gap:3mm;align-items:center;padding:2.2mm 3mm;border-radius:3mm;background:${i % 2 ? '#fff' : '#E5F4EC'};border:.3mm solid ${i % 2 ? C.cocoEsc : 'transparent'}">
        <span style="width:12mm;flex-shrink:0;font-family:Outfit;font-weight:800;font-size:9pt;color:${cor}">${d}</span>
        <div style="flex:1"><h3 style="font-size:9.4pt">${t}</h3><p class="small">${s}</p></div><span style="width:4mm;height:4mm;border-radius:1mm;border:.35mm solid ${cor}"></span></div>`).join('')}
    </div>
    <div style="margin-top:auto">${callout('segredo', 'Uma hora por dia basta', 'Com exceção do Dia 2 (produção), cada dia leva entre **30 minutos e 1 hora e meia**. Dá para fazer junto com o trabalho ou a faculdade.')}</div>`);

  const dia = (i, objetivo, tarefas, extra) => {
    const [d, t, , foto, tempo, meta] = DIAS[i];
    pg(`
      <div style="display:flex;gap:3.4mm;align-items:stretch">
        <div style="flex:1">
          <p style="font-family:Outfit;font-weight:800;font-size:30pt;line-height:.9;color:${cor}">${String(i + 1).padStart(2, '0')}</p>
          <p class="eb" style="color:${cor};margin-top:1.4mm">${d}</p>
          <h1 style="font-size:17pt;margin-top:.6mm">${t}</h1>
          <p style="font-size:8.2pt;margin-top:1.6mm"><b>Objetivo:</b> ${md(objetivo)}</p>
          <div style="display:flex;gap:1.4mm;margin-top:2mm"><span class="chip k-turq">⏱ ${tempo}</span><span class="chip k-limao">Meta: ${meta}</span></div>
        </div>
        <img src="${img(foto)}" style="width:40mm;height:40mm;border-radius:3.2mm;object-fit:cover;flex-shrink:0"/>
      </div>
      <div class="box" style="background:#E5F4EC"><h3 style="margin-bottom:1.8mm">Tarefas do dia</h3>${lista(tarefas, 'ck')}</div>
      ${extra}`);
  };

  dia(0, 'saber exatamente o que vai fazer e ter tudo em casa para o primeiro lote.', ['Ler o Módulo 1 (utensílios e compras) e o Módulo 2 (Fórmula Drink que Congela)', 'Escolher **3 sabores**: sugestão: Caipirinha de Limão, Caipirinha de Maracujá e Morango com Vodka', 'Conferir os utensílios que você já tem', 'Comprar ingredientes, **saquinhos 6×24**, funil e etiquetas (≈ R$ 100)', 'Limpar o freezer e deixar na temperatura mais fria'], `
      ${tabela(['Compra do Dia 1', 'Preço aprox.'], [['Cachaça 965 ml + vodka 998 ml', 'R$ 48 a 58'], ['Açúcar, limões, maracujás, morangos', 'R$ 32 a 45'], ['Saquinhos, funil, etiquetas', 'R$ 20 a 30']], [1])}
      ${callout('dica', 'Faça a lista no celular', 'Tire foto da lista de compras do Módulo 1 e leve ao mercado. Compre a bebida em atacadão: costuma sair 20 a 30% mais barato.')}
      <div style="margin-top:auto">${callout('atencao', 'Não compre tudo de uma vez', 'Nada de 10 sabores e caixas personalizadas agora. **Primeiro teste, depois invista.**')}</div>`);

  dia(1, 'produzir o primeiro lote (≈ 25 geladinhos) seguindo as receitas à risca.', ['Separar e higienizar utensílios e bancada', 'Gelar a água por 1 hora antes de começar', 'Fazer as 3 receitas, **provando antes de colocar a bebida**', 'Encher com 120 ml, tirar o ar e fechar', 'Congelar deitado em bandejas', 'Anotar: sabor, quantidade, horário e o que você mudou'], `
      ${tabela(['Horário (exemplo)', 'O que fazer'], [['19h00', 'Organizar bancada e utensílios'], ['19h15', 'Caipirinha de Limão (só misturar)'], ['19h40', 'Caipirinha de Maracujá'], ['20h05', 'Morango com Vodka (liquidificador)'], ['20h40', 'Freezer e limpeza']])}
      <div style="margin-top:auto">${callout('segredo', 'Segredo da Bruna', 'Produza à noite: o geladinho congela de madrugada e no dia seguinte já pode ser testado.')}</div>`);

  dia(2, 'garantir que o produto está perfeito e definir o preço.', ['Fazer o **teste do dedo** e abrir 1 de cada sabor', 'Ajustar a receita se precisar (Tabela de Diagnóstico do Módulo 2)', 'Dar **5 a 8 geladinhos para provar**: família, vizinhos, amigos sinceros', 'Perguntar: “De 0 a 10, quanto você dá? Pagaria R$ 7?”', 'Calcular o custo de cada sabor (Módulo 5)', 'Definir o preço e os combos'], `
      <div class="box b-coco"><h3>Pergunte assim para ter respostas sinceras</h3><p style="font-size:8.2pt;margin-top:1mm">“Estou começando a vender e preciso de opinião sincera: o que você mudaria nesse geladinho?” Quem recebe o pedido de crítica fala a verdade, e ainda vira o seu primeiro divulgador.</p></div>
      <table class="t"><tr><th>Quem provou</th><th>Sabor</th><th class="num">Nota</th><th>Comentário</th></tr>${Array.from({ length: 5 }, () => '<tr><td style="height:5.6mm"></td><td></td><td></td><td></td></tr>').join('')}</table>
      <div style="margin-top:auto">${callout('ok', 'Provas não são prejuízo', 'Os geladinhos que você dá de graça hoje são o seu marketing. Quem gostou vai comentar com outras pessoas.')}</div>`);

  dia(3, 'deixar o produto com cara de gourmet e ter material de divulgação.', ['Criar o **nome da marca** e o @ do Instagram', 'Fazer e imprimir as etiquetas (Bônus 2)', 'Etiquetar todo o estoque', 'Tirar **10 fotos** com luz natural (Módulo 4)', 'Montar o cardápio com preços e combos (Bônus 3)', 'Postar 3 fotos no Instagram'], `
      <div class="g2"><img src="${img('sabor-mojito.jpg')}" class="foto" style="height:46mm"/><img src="${img('sabor-pina-colada.jpg')}" class="foto" style="height:46mm"/></div>
      <div style="margin-top:auto">${callout('dica', 'A foto que mais vende', '**Mão segurando o geladinho, contra a luz, com o drink ou a fruta atrás.** Faça essa primeiro.')}</div>`);

  dia(4, 'contar para todo mundo que você está vendendo, com preço e pronta entrega.', ['Enviar a mensagem de lançamento para **todos os contatos** (abaixo)', 'Postar no grupo do condomínio, do trabalho e da família', 'Postar o cardápio e 2 fotos no **status** (manhã e fim de tarde)', 'Anotar quem respondeu e combinar entregas', 'Produzir o 2º lote, se o estoque estiver acabando'], `
      <div class="box b-coco" style="padding:2.6mm 3.2mm"><p class="eb" style="font-size:6.4pt;color:${C.turquesa}">Mensagem de lançamento</p><p style="font-size:8.2pt;margin-top:1mm">“Oi, [nome]! Tudo bem? Comecei um projeto novo: <b>geladinhos de drink</b> 🍹 caipirinha, morango com vodka, piña colada e outros. R$ 7 cada ou 3 por R$ 18. Tenho pronta entrega e levo até você. Quer experimentar?”</p></div>
      <div style="margin-top:auto">${callout('atencao', 'Mande no privado', 'Mensagem individual (com o nome da pessoa) tem muito mais resposta que lista de transmissão. Reserve 40 minutos para isso.')}</div>`);

  dia(5, 'fazer as primeiras vendas e conseguir a primeira encomenda.', ['Fazer as entregas combinadas (isopor + gelo reciclável)', 'Montar um **ponto de venda** por 2 horas: portaria, praça, praia ou clube', 'Oferecer o **Kit Festa** a quem comprou', 'Pedir foto ou comentário para quem gostou', 'Registrar cada venda (tabela do Dia 7)'], `
      <div class="box b-coco"><h3>Roteiro do ponto de venda</h3><div style="margin-top:1.4mm">${passos(['Chegue no horário de mais movimento (10h às 13h na praia; fim de tarde no condomínio).', 'Plaquinha visível, isopor fechado, 1 geladinho de cada cor na mão para mostrar.', 'Ofereça o combo antes do avulso: “três por R$ 18”.', 'Salve o WhatsApp de quem comprou para avisar da próxima vez.'])}</div></div>
      <div style="margin-top:auto">${callout('segredo', 'A frase que vende encomenda', '“Você tem algum aniversário ou churrasco chegando? Faço kit com 20 sabores, entregue congelado.” Pergunte para **todo** cliente.')}</div>`);

  dia(6, 'olhar os números, cuidar de quem já comprou e planejar a semana 2.', ['Somar vendas, custos e lucro da semana', 'Ver quais sabores venderam mais e quais sobraram', 'Mandar a **mensagem de recompra** para todos os clientes', 'Definir a meta da semana 2', 'Planejar a produção: 2 lotes por semana'], `
      <div class="box b-coco"><p class="eb" style="font-size:6.4pt;color:${C.turquesa}">Mensagem de recompra</p><p style="font-size:8.2pt;margin-top:1mm">“Oi, [nome]! O que achou do geladinho? 😍 Essa semana vou fazer [sabor novo] também. Quer que eu separe pra você?”</p></div>
      <div class="box b-coco"><h3>A conta da semana</h3><p style="font-size:8pt;margin-top:1mm">Lucro = total vendido − (ingredientes + embalagens + gelo + transporte). Exemplo: vendeu 40 a R$ 7 = R$ 280; gastou R$ 100 → <b>lucro de R$ 180</b>, e ainda sobrou bebida para o próximo lote.</p></div>
      <div style="margin-top:auto">${callout('ok', 'Fim da primeira semana', 'Você saiu do zero, testou, precificou, divulgou e vendeu. Agora é repetir, melhorar e crescer.')}</div>`);

  pg(`
    ${faixa('08', 'Controle')}
    ${cabeca('', 'Controle de vendas ==da semana==')}
    <table class="t" style="font-size:7.6pt"><tr><th>Dia</th><th>Sabor</th><th class="num">Qtd.</th><th class="num">Valor</th><th>Cliente</th></tr>${Array.from({ length: 14 }, () => '<tr><td style="height:6.4mm"></td><td></td><td></td><td></td><td></td></tr>').join('')}</table>
    <div class="g3">
      ${['Total vendido', 'Custo total', 'Lucro'].map((t) => `<div class="box b-coco" style="text-align:center"><p class="small">${t}</p><p style="font-family:Outfit;font-weight:800;font-size:11pt;margin-top:4mm">R$ ______</p></div>`).join('')}
    </div>`);

  pg(`
    ${faixa('09', 'Metas')}
    ${cabeca('', 'Suas metas ==para o primeiro mês==')}
    ${tabela(['Semana', 'Meta de vendas', 'Foco'], [['1', '30 a 50 geladinhos', 'Lançar e testar'], ['2', '60 a 80', 'Recompra + 2 sabores novos'], ['3', '80 a 120', '1ª encomenda de festa'], ['4', '100 a 150', 'Ponto fixo + revenda']], [1])}
    <div class="box b-escuro"><p style="font-size:8pt">Com 120 geladinhos por semana a R$ 7, em média:</p><p style="font-family:Outfit;font-weight:800;font-size:15pt;color:${C.manga};margin-top:.6mm">≈ R$ 3.600 de faturamento no mês</p><p style="font-size:8pt;margin-top:.4mm">e cerca de R$ 2.400 de lucro, já descontando ingredientes, embalagem e custos escondidos.</p><p style="font-size:7.4pt;margin-top:.6mm">Resultado depende da sua região, preço e dedicação.</p></div>
    <h2>Minhas metas</h2>
    ${['Quero vender por semana: ______ geladinhos', 'Quero faturar no mês: R$ ______', 'Meus 3 pontos de venda: ____________________', 'Minha 1ª encomenda até o dia: ___/___'].map((t) => `<p style="font-size:9pt;padding:1.6mm 0;border-bottom:.3mm solid ${C.cocoEsc}">${t}</p>`).join('')}
    <div style="margin-top:auto;display:flex;gap:3mm;align-items:center">
      <img src="${img('bruna-retrato.jpg')}" style="width:22mm;height:22mm;border-radius:50%;object-fit:cover"/>
      <p style="font-size:8.4pt;flex:1">“A primeira semana é a mais difícil. Depois que os primeiros clientes provam, eles mesmos fazem a sua propaganda.” <span class="pincel" style="font-size:12pt">Bruna</span></p>
    </div>`);
  return P;
}
