// Base visual dos materiais (PDF A5): cores da marca, tipografia e componentes.

export const C = {
  coco: '#FEF7EE', cocoEsc: '#F6E9D6', tinta: '#123432',
  turquesa: '#0D6F6B', turqEsc: '#09524F', turqCl: '#E2F2EF',
  coral: '#FF6B5B', coralEsc: '#E24E3E', coralCl: '#FFE6E1',
  manga: '#FFC538', mangaCl: '#FFF2CC', limao: '#9ED43A', limaoEsc: '#5E8F1E', limaoCl: '#EFF8DE',
  berry: '#E83E8C', berryCl: '#FDE4EF', dinheiro: '#16975A',
  // tons para TEXTO (contraste AA sobre fundo claro)
  coralTx: '#C2362A', limaoTx: '#3F6B10', mangaTx: '#7A5200', berryTx: '#B8236A', dinheiroTx: '#0E7A47', mangaSobreTurq: '#FFE08A',
};

export const img = (n) => `../img/${n}`;
export const esc = (s) => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;');
/** **negrito** e ==grifo== dentro de textos. */
export const md = (s) => String(s).replace(/\*\*(.+?)\*\*/g, '<b>$1</b>').replace(/==(.+?)==/g, '<mark>$1</mark>');

export const CSS = /* css */ `
@font-face{font-family:Outfit;src:url(../fontes/outfit.woff2) format('woff2');font-weight:100 900}
@font-face{font-family:Jak;src:url(../fontes/plus-jakarta-sans-latin-wght-normal.woff2) format('woff2');font-weight:200 800}
@font-face{font-family:Pincel;src:url(../fontes/kaushan.woff2) format('woff2')}
@page{size:148mm 210mm;margin:0}
*{box-sizing:border-box;margin:0;padding:0}
html,body{-webkit-print-color-adjust:exact;print-color-adjust:exact}
body{font-family:Jak;font-weight:450;font-size:8.7pt;line-height:1.5;color:${C.tinta}}
b,strong{font-weight:700}
mark{background:linear-gradient(transparent 52%, ${C.manga}88 52%, ${C.manga}88 92%, transparent 92%);color:inherit;padding:0 .3mm}
.pg{width:148mm;height:210mm;position:relative;overflow:hidden;break-after:page;background:#fff}
.in{position:absolute;inset:13mm 12.5mm 15mm;display:flex;flex-direction:column;gap:3.4mm}
.pe{position:absolute;left:12.5mm;right:12.5mm;bottom:6.5mm;display:flex;justify-content:space-between;align-items:center;font-family:Outfit;font-size:6.6pt;font-weight:600;letter-spacing:.06em;color:${C.tinta}b8}
.pe .n{display:inline-grid;place-items:center;min-width:6mm;height:6mm;border-radius:3mm;background:${C.coco};color:${C.turquesa};font-weight:800}
.ondas{position:absolute;left:0;bottom:0;width:148mm;height:5mm;display:block}
h1{font-family:Outfit;font-weight:800;font-size:19pt;line-height:1.08;letter-spacing:-.02em}
h2{font-family:Outfit;font-weight:800;font-size:12.5pt;line-height:1.15;letter-spacing:-.01em;margin-top:1mm}
h3{font-family:Outfit;font-weight:700;font-size:10pt;line-height:1.2}
.eb{font-family:Outfit;font-weight:700;font-size:7pt;letter-spacing:.2em;text-transform:uppercase;color:${C.coralTx}}
.lead{font-size:9.6pt;line-height:1.55;color:${C.tinta}dd}
p{color:${C.tinta}e0}
p+p{margin-top:1.6mm}
.pincel{font-family:Pincel;color:${C.coralTx}}
.rec .in{gap:2.9mm}
.row{display:flex;gap:3mm}.row>*{flex:1;min-width:0}
.g2{display:grid;grid-template-columns:1fr 1fr;gap:2.6mm}
.g3{display:grid;grid-template-columns:1fr 1fr 1fr;gap:2.4mm}
.box{border-radius:3.2mm;padding:3mm 3.4mm}
.b-coco{background:${C.coco}}.b-turq{background:${C.turqCl}}.b-limao{background:${C.limaoCl}}.b-manga{background:${C.mangaCl}}.b-coral{background:${C.coralCl}}.b-berry{background:${C.berryCl}}
.b-escuro{background:${C.turquesa};color:#fff}.b-escuro p,.b-escuro li{color:#ffffffdd}
.b-linha{border:.35mm solid ${C.cocoEsc}}
.call{display:flex;gap:2.6mm;align-items:flex-start;border-radius:3.2mm;padding:2.8mm 3.2mm;font-size:8.4pt;line-height:1.45}
.call .ic{flex-shrink:0;width:6.2mm;height:6.2mm;border-radius:2mm;display:grid;place-items:center;font-family:Outfit;font-weight:800;font-size:8pt}
.call .tt{font-family:Outfit;font-weight:800;font-size:7pt;letter-spacing:.14em;text-transform:uppercase;display:block;margin-bottom:.4mm}
.c-dica{background:${C.turqCl}}.c-dica .ic{background:${C.turquesa};color:#fff}.c-dica .tt{color:${C.turquesa}}
.c-atencao{background:${C.coralCl}}.c-atencao .ic{background:${C.coralTx};color:#fff}.c-atencao .tt{color:${C.coralTx}}
.c-segredo{background:${C.mangaCl}}.c-segredo .ic{background:${C.manga};color:${C.tinta}}.c-segredo .tt{color:${C.mangaTx}}
.c-ok{background:${C.limaoCl}}.c-ok .ic{background:${C.limaoTx};color:#fff}.c-ok .tt{color:${C.limaoTx}}
ul.ck{list-style:none;display:flex;flex-direction:column;gap:1.3mm}
ul.ck li{display:flex;gap:2mm;align-items:flex-start;line-height:1.4}
ul.ck li::before{content:'';flex-shrink:0;width:3.2mm;height:3.2mm;margin-top:.5mm;border-radius:1mm;border:.35mm solid ${C.turquesa};background:#fff}
ul.ok{list-style:none;display:flex;flex-direction:column;gap:1.2mm}
ul.ok li{display:flex;gap:2mm;align-items:flex-start;line-height:1.42}
ul.ok li::before{content:'✓';flex-shrink:0;display:grid;place-items:center;width:3.8mm;height:3.8mm;margin-top:.2mm;border-radius:50%;background:${C.limaoCl};color:${C.limaoTx};font-weight:800;font-size:6.5pt}
ol.passos{list-style:none;counter-reset:p;display:flex;flex-direction:column;gap:2mm}
ol.passos li{counter-increment:p;display:flex;gap:2.6mm;align-items:flex-start;line-height:1.42}
ol.passos li::before{content:counter(p);flex-shrink:0;display:grid;place-items:center;width:5.4mm;height:5.4mm;border-radius:50%;background:${C.coralTx};color:#fff;font-family:Outfit;font-weight:800;font-size:7.6pt;margin-top:-.2mm}
table.t{width:100%;border-collapse:separate;border-spacing:0;font-size:7.8pt;border-radius:2.6mm;overflow:hidden;border:.3mm solid ${C.cocoEsc}}
table.t th{background:${C.turquesa};color:#fff;font-family:Outfit;font-weight:700;font-size:6.8pt;letter-spacing:.06em;text-transform:uppercase;text-align:left;padding:1.8mm 2.2mm}
table.t td{padding:1.6mm 2.2mm;border-top:.3mm solid ${C.cocoEsc};vertical-align:top;line-height:1.35}
table.t tr:nth-child(even) td{background:${C.coco}}
table.t td.num,table.t th.num{text-align:right;white-space:nowrap}
.chip{display:inline-flex;align-items:center;gap:1mm;padding:.8mm 2.4mm;border-radius:10mm;font-family:Outfit;font-weight:700;font-size:6.8pt;letter-spacing:.04em}
.k-turq{background:${C.turqCl};color:${C.turquesa}}.k-coral{background:${C.coralCl};color:${C.coralTx}}.k-manga{background:${C.mangaCl};color:${C.mangaTx}}.k-limao{background:${C.limaoCl};color:${C.limaoTx}}.k-escuro{background:${C.turquesa};color:#fff}
.foto{width:100%;border-radius:3.2mm;object-fit:cover;display:block}
.num-g{font-family:Outfit;font-weight:800;color:${C.turquesa};line-height:1}
.sep{height:.35mm;background:${C.cocoEsc};border-radius:1mm}
.small{font-size:7.4pt;color:${C.tinta}bb}
`;

/** Ondas da marca no rodapé de cada página. */
export const ondas = (h = 5) => `<svg class="ondas" style="height:${h}mm;width:148mm" viewBox="0 0 600 40" preserveAspectRatio="none"><path d="M0 18 C120 4 220 30 330 16 S520 2 600 14 V40 H0Z" fill="${C.manga}"/><path d="M0 26 C150 14 260 38 380 24 S540 18 600 24 V40 H0Z" fill="${C.coral}"/><path d="M0 33 C180 26 360 42 600 31 V40 H0Z" fill="${C.turquesa}"/></svg>`;

export const callout = (tipo, titulo, texto) => {
  const ic = { dica: 'i', atencao: '!', segredo: '★', ok: '✓' }[tipo];
  return `<div class="call c-${tipo}"><span class="ic">${ic}</span><div><span class="tt">${titulo}</span>${md(texto)}</div></div>`;
};
export const lista = (itens, cls = 'ok') => `<ul class="${cls}">${itens.map((t) => `<li><span>${md(t)}</span></li>`).join('')}</ul>`;
export const passos = (itens) => `<ol class="passos">${itens.map((t) => `<li><span>${md(t)}</span></li>`).join('')}</ol>`;
export const tabela = (cab, linhas, num = []) =>
  `<table class="t"><tr>${cab.map((c, i) => `<th class="${num.includes(i) ? 'num' : ''}">${c}</th>`).join('')}</tr>${linhas
    .map((l) => `<tr>${l.map((c, i) => `<td class="${num.includes(i) ? 'num' : ''}">${md(c)}</td>`).join('')}</tr>`)
    .join('')}</table>`;
export const cabeca = (eb, titulo, lead = '') => `<div><p class="eb">${eb}</p><h1 style="margin-top:1.4mm">${md(titulo)}</h1>${lead ? `<p class="lead" style="margin-top:2.4mm">${md(lead)}</p>` : ''}</div>`;

/** Saquinho de geladinho em SVG (para receitas sem foto). */
export const saquinho = (cor, pedaco, alt = 70) => {
  const id = 's' + cor.slice(1) + pedaco.slice(1);
  const bol = [[28, 70, 3.2], [50, 82, 2.6], [36, 104, 3.4], [55, 120, 2.8], [30, 136, 2.4], [48, 150, 3.2], [38, 166, 2.6], [56, 96, 2.2]];
  const serra = (y) => `M10 ${y} ${Array.from({ length: 10 }, (_, i) => `L${13 + i * 6} ${y + (i % 2 ? 0 : 3)}`).join(' ')} L70 ${y}`;
  return `<svg viewBox="0 0 80 200" style="height:${alt}mm;width:auto;display:block"><defs><linearGradient id="${id}" x1="0" x2="1"><stop offset="0" stop-color="${cor}"/><stop offset=".45" stop-color="${cor}" stop-opacity=".8"/><stop offset="1" stop-color="${cor}"/></linearGradient></defs>
  <rect x="10" y="10" width="60" height="182" rx="5" fill="#fff" fill-opacity=".6" stroke="#fff" stroke-width="1.5"/><rect x="10" y="10" width="60" height="16" rx="4" fill="#fff" fill-opacity=".8"/><path d="${serra(26)}" fill="none" stroke="#fff" stroke-width="1.2"/><rect x="10" y="178" width="60" height="14" rx="4" fill="#fff" fill-opacity=".8"/>
  <path d="M13 40 Q40 33 67 40 V174 H13 Z" fill="url(#${id})"/>${bol.map(([x, y, r]) => `<circle cx="${x}" cy="${y}" r="${r}" fill="${pedaco}" fill-opacity=".7"/>`).join('')}
  <path d="M18 34 V172" stroke="#fff" stroke-opacity=".7" stroke-width="3.5" stroke-linecap="round"/></svg>`;
};

/** Página padrão. */
export const pagina = (conteudo, { n, marca = 'GELADINHOS DE DRINKS LUCRATIVOS', fundo = '#fff', semRodape = false, cls = '' } = {}) =>
  `<section class="pg ${cls}" style="background:${fundo}"><div class="in">${conteudo}</div>${semRodape ? '' : `<div class="pe"><span>${marca}</span><span class="n">${n ?? ''}</span></div>${ondas()}`}</section>`;

/** Capa: a arte gerada ocupa a página, com uma faixa da marca embaixo. */
export const capa = (arquivo, faixa) => `<section class="pg" style="background:${C.coco}">
  <img src="${img(arquivo)}" style="position:absolute;left:0;top:0;width:148mm;height:185mm;object-fit:cover;object-position:top"/>
  <div style="position:absolute;left:0;right:0;bottom:0;height:25mm;background:${C.turquesa};color:#fff;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:1mm;text-align:center">
    <p style="font-family:Outfit;font-weight:700;font-size:8pt;letter-spacing:.22em;text-transform:uppercase;color:${C.mangaSobreTurq}">${faixa}</p>
    <p style="font-size:7pt;color:#ffffffdd">Material exclusivo para alunos · uso pessoal · proibida a distribuição</p>
  </div></section>`;

/** Abertura de módulo (página cheia, turquesa). */
export const aberturaModulo = (num, titulo, resumo, itens, foto) => `<section class="pg" style="background:${C.turquesa};color:#fff">
  ${foto ? `<img src="${img(foto)}" style="position:absolute;inset:0 0 auto 0;width:148mm;height:92mm;object-fit:cover"/><div style="position:absolute;left:0;right:0;top:62mm;height:31mm;background:linear-gradient(transparent,${C.turquesa})"></div>` : ''}
  <div style="position:absolute;left:13mm;right:13mm;top:${foto ? 88 : 40}mm">
    <p style="font-family:Outfit;font-weight:800;font-size:46pt;line-height:.9;color:${C.manga}">${String(num).padStart(2, '0')}</p>
    <p style="font-family:Outfit;font-weight:700;font-size:7.4pt;letter-spacing:.22em;text-transform:uppercase;color:#ffffffdd;margin-top:2mm">Módulo ${num}</p>
    <h1 style="color:#fff;font-size:22pt;margin-top:1mm">${titulo}</h1>
    <p style="margin-top:3mm;font-size:9.6pt;line-height:1.55;color:#ffffffd9">${md(resumo)}</p>
    <div style="margin-top:5mm;display:flex;flex-direction:column;gap:1.6mm">${itens.map((t) => `<p style="display:flex;gap:2mm;font-size:8.6pt;color:#fff"><span style="color:${C.mangaSobreTurq};font-weight:800">→</span>${t}</p>`).join('')}</div>
  </div>
  ${ondas(9)}
</section>`;
