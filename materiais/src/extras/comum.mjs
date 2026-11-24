// Componentes compartilhados pelos materiais extras (order bumps).
import { C, img, md, callout, lista, passos, pagina, capa } from '../base.mjs';
import { existsSync } from 'node:fs';
import { ING2 } from './dados.mjs';
import { VARIACOES } from './variacoes.mjs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const PASTA_IMG = join(dirname(fileURLToPath(import.meta.url)), '..', '..', 'img');
/** A imagem existe em img/? (as fotos dos extras chegam depois; até lá usamos o painel de cor). */
export const temImg = (n) => !!n && existsSync(join(PASTA_IMG, n));
/** Cor de texto legível sobre um fundo (#rrggbb). */
export const sobre = (hex) => { const [r, g, b] = [1, 3, 5].map((i) => parseInt(hex.slice(i, i + 2), 16) / 255).map((c) => (c <= 0.03928 ? c / 12.92 : ((c + 0.055) / 1.055) ** 2.4)); const L = 0.2126 * r + 0.7152 * g + 0.0722 * b; return 1.05 / (L + 0.05) >= (L + 0.05) / 0.078 ? '#fff' : C.tinta; };
/** Pele visual do material atual (xt-sa, xt-pi, xt-wa): define as cores de destaque. */
let SKIN = 'xt';
export const usarPele = (p) => (SKIN = 'xt ' + p);
export const pele = () => SKIN;
export const brl = (n) => 'R$ ' + n.toFixed(2).replace('.', ',');
export const preco = (n) => brl(n).replace(',00', '');

const ONDAS = `<svg class="ondas" style="height:5mm;width:148mm" viewBox="0 0 600 40" preserveAspectRatio="none"><path d="M0 18 C120 4 220 30 330 16 S520 2 600 14 V40 H0Z" fill="${C.manga}"/><path d="M0 26 C150 14 260 38 380 24 S540 18 600 24 V40 H0Z" fill="${C.coral}"/><path d="M0 33 C180 26 360 42 600 31 V40 H0Z" fill="${C.turquesa}"/></svg>`;

/**
 * Capa do extra. Se existir a arte gerada (arquivo), usa igual aos bônus;
 * senão monta uma capa tipográfica com fotos.
 */
export function capaExtra({ arquivo, eyebrow, titulo, destaque, sub, cor, fotos = [], selo }) {
  if (temImg(arquivo)) return capa(arquivo, `Material extra · ${titulo.replace(/<[^>]+>/g, '')}`);
  const f = fotos.filter(temImg).slice(0, 3);
  return `<section class="pg" style="background:${C.coco}">
    <div style="position:absolute;inset:0;background:radial-gradient(90% 60% at 85% 8%,${cor},transparent 70%),radial-gradient(80% 55% at 0% 100%,#FFE9C2,transparent 70%)"></div>
    ${f[0] ? `<img src="${img(f[0])}" style="position:absolute;left:10mm;top:34mm;width:76mm;height:98mm;object-fit:cover;border-radius:5mm;box-shadow:0 3mm 8mm rgba(18,52,50,.28);transform:rotate(-3deg)"/>` : ''}
    ${f[1] ? `<img src="${img(f[1])}" style="position:absolute;right:10mm;top:28mm;width:52mm;height:52mm;object-fit:cover;border-radius:5mm;box-shadow:0 3mm 8mm rgba(18,52,50,.25);transform:rotate(4deg);border:1.6mm solid #fff"/>` : ''}
    ${f[2] ? `<img src="${img(f[2])}" style="position:absolute;right:14mm;top:86mm;width:46mm;height:46mm;object-fit:cover;border-radius:5mm;box-shadow:0 3mm 8mm rgba(18,52,50,.25);transform:rotate(-2deg);border:1.6mm solid #fff"/>` : ''}
    <img src="${img('logo.png')}" style="position:absolute;left:9mm;top:6mm;width:26mm"/>
    <div style="position:absolute;left:12mm;right:12mm;top:140mm">
      <p class="eb" style="color:${C.turquesa}">${eyebrow}</p>
      <h1 style="font-size:27pt;line-height:1.02;margin-top:1.6mm">${titulo}</h1>
      ${destaque ? `<p class="pincel" style="font-size:18pt;margin-top:.6mm">${destaque}</p>` : ''}
      <p style="margin-top:1.6mm;font-size:9pt;line-height:1.5">${md(sub)}</p>
    </div>
    ${selo ? `<div style="position:absolute;left:72mm;top:118mm;width:25mm;height:25mm;border-radius:50%;background:linear-gradient(135deg,${C.manga},#FFA83A);display:grid;place-items:center;text-align:center;transform:rotate(-10deg);box-shadow:0 2mm 5mm rgba(18,52,50,.3);border:1mm solid #fff"><p style="font-family:Outfit;font-weight:800;font-size:9pt;line-height:1.05;color:${C.tinta}">${selo}</p></div>` : ''}
    <div style="position:absolute;left:0;right:0;bottom:0;height:12mm;background:linear-gradient(90deg,${C.turqEsc},${C.turquesa});display:grid;place-items:center"><p style="font-size:7pt;color:#fff;letter-spacing:.06em">Material exclusivo para alunos · uso pessoal · proibida a distribuição</p></div>
  </section>`;
}

/** Página de abertura: foto em cima, cartão com título e índice. */
export function aberturaExtra({ cor, eyebrow, titulo, texto, itens, foto }) {
  const f = (temImg(foto) ? `<img src="${img(foto)}" style="position:absolute;inset:0 0 auto 0;width:148mm;height:92mm;object-fit:cover"/>` : `<div style="position:absolute;inset:0 0 auto 0;height:92mm;background:${cor}"></div>`) + `<div style="position:absolute;inset:0 0 auto 0;height:92mm;background:linear-gradient(180deg,rgba(18,52,50,.05),transparent 40%,${C.coco} 100%)"></div>`;
  return `<section class="pg" style="background:${C.coco}">${f}
  <div style="position:absolute;left:12.5mm;right:12.5mm;top:66mm;background:#fff;border-radius:4mm;padding:6mm 6mm 5mm;box-shadow:0 2mm 6mm rgba(18,52,50,.12)">
    <p class="eb">${eyebrow}</p>
    <h1 style="margin-top:1.4mm;font-size:21pt">${titulo}</h1>
    <p class="lead" style="margin-top:2.6mm">${md(texto)}</p>
    <div class="sep" style="margin:4mm 0 3mm"></div>
    <p style="font-family:Outfit;font-weight:700;font-size:7pt;letter-spacing:.16em;text-transform:uppercase;color:${C.tinta}bb">Neste material</p>
    <div style="margin-top:2mm;display:flex;flex-direction:column;gap:1.4mm">${itens.map((t) => `<p style="display:flex;gap:2mm;font-size:8.6pt"><span style="color:${C.coralTx};font-weight:800">→</span><span>${md(t)}</span></p>`).join('')}</div>
  </div>${ONDAS}</section>`;
}

/** Abertura de parte (página cheia colorida). */
export function abertParte({ num, titulo, resumo, itens, foto, fundo = C.turquesa }) {
  return `<section class="pg" style="background:${fundo};color:#fff">
  ${temImg(foto) ? `<img src="${img(foto)}" style="position:absolute;inset:0 0 auto 0;width:148mm;height:92mm;object-fit:cover"/><div style="position:absolute;left:0;right:0;top:62mm;height:31mm;background:linear-gradient(transparent,${fundo})"></div>` : ''}
  <div style="position:absolute;left:13mm;right:13mm;top:${temImg(foto) ? 88 : 40}mm">
    <p style="font-family:Outfit;font-weight:800;font-size:46pt;line-height:.9;color:${C.mangaSobreTurq}">${num}</p>
    <h1 style="color:#fff;font-size:22pt;margin-top:3mm">${titulo}</h1>
    <p style="margin-top:3mm;font-size:9.6pt;line-height:1.55;color:#ffffffe6">${md(resumo)}</p>
    <div style="margin-top:5mm;display:flex;flex-direction:column;gap:1.6mm">${itens.map((t) => `<p style="display:flex;gap:2mm;font-size:8.6pt;color:#fff"><span style="color:${C.mangaSobreTurq};font-weight:800">→</span><span>${md(t)}</span></p>`).join('')}</div>
  </div>${ONDAS.replace('height:5mm', 'height:9mm')}</section>`;
}

/** Foto da receita, ou painel de cor com o número enquanto a foto não chega. */
export function visual(r, num, w, h) {
  if (temImg(r.foto)) return `<img src="${img(r.foto)}" style="width:${w}mm;height:${h}mm;object-fit:cover;object-position:35% 50%;border-radius:3.2mm;display:block;flex-shrink:0;box-shadow:0 1.2mm 3mm rgba(18,52,50,.18)"/>`;
  return `<div style="width:${w}mm;height:${h}mm;flex-shrink:0;border-radius:3.2mm;background:linear-gradient(160deg,${r.cor},${r.cor}cc);display:flex;flex-direction:column;justify-content:flex-end;padding:3mm;border:.3mm solid ${C.cocoEsc}">
    <p style="font-family:Outfit;font-weight:800;font-size:30pt;line-height:.9;color:${sobre(r.cor)}">${String(num).padStart(2, '0')}</p></div>`;
}

/** Variação do sabor + custo de cada ingrediente (o que mais pesa no lote). */
function extrasReceita(r, k) {
  const v = VARIACOES[r.nome + (r.tipo === 'picole' ? '#pi' : '')] || VARIACOES[r.nome];
  const linhas = r.ing.filter(([t, id, q]) => t && q && ING2[id]?.preco).map(([t, id, q]) => [t.replace(/\s*\(.*?\)/g, ''), q * ING2[id].preco]).sort((a, b) => b[1] - a[1]);
  const top = linhas.slice(0, 3), resto = linhas.slice(3).reduce((a, x) => a + x[1], 0);
  return `<div class="opc-wrap" style="display:flex;gap:2.6mm;align-items:flex-start">
    ${v ? `<div class="box b-coral opc" data-p="2" style="flex:1;padding:2.6mm 3mm"><p class="eb" style="font-size:6.4pt">Varie o sabor</p><p style="font-size:7.9pt;margin-top:1mm;line-height:1.45">${md(v)}</p></div>` : ''}
    <div class="box b-turq opc" data-p="1" style="flex:1;padding:2.6mm 3mm"><p class="eb" style="font-size:6.4pt;color:${C.turquesa}">Onde está o custo</p>
      <div style="margin-top:1mm;font-size:7.3pt;line-height:1.3;display:flex;flex-direction:column;gap:.5mm">${top.map(([t, c]) => `<div style="display:flex;justify-content:space-between;gap:2mm"><span style="overflow:hidden;white-space:nowrap;text-overflow:ellipsis">${t}</span><b style="white-space:nowrap">${brl(c)}</b></div>`).join('')}${resto > 0.01 ? `<div style="display:flex;justify-content:space-between"><span>outros</span><b>${brl(resto)}</b></div>` : ''}<div style="display:flex;justify-content:space-between;border-top:.25mm solid ${C.turquesa}55;padding-top:.5mm;margin-top:.3mm"><span>lote (${k.un} un)</span><b>${brl(k.custo)}</b></div></div>
    </div>
  </div>`;
}

/** Página de receita padrão dos extras. */
export function receitaPg({ r, num, k, cat, marca, n, fichas, extraPrep = [] }) {
  return pagina(
    `<div style="display:flex;gap:4mm;margin:-13mm -12.5mm 0;padding:9.5mm 12.5mm 3.4mm;background:linear-gradient(160deg,color-mix(in srgb,${cat.cor} 26%,#fff),#FFF9F1 70%);border-radius:0 0 6mm 6mm">
      ${visual(r, num, 42, 52)}
      <div style="flex:1;min-width:0;display:flex;flex-direction:column">
        <div style="display:flex;align-items:center;gap:1.6mm;flex-wrap:wrap"><span class="chip" style="background:${cat.cor}55;color:${C.tinta}">${cat.nome}</span>${r.destaque ? `<span class="chip k-escuro">${r.destaque}</span>` : ''}</div>
        <p style="font-family:Outfit;font-weight:800;font-size:9pt;color:${C.coralTx};margin-top:2.2mm">RECEITA ${String(num).padStart(2, '0')}</p>
        <h1 style="font-size:15pt;margin-top:.6mm">${r.nome}</h1>
        <p style="font-size:8.2pt;line-height:1.45;margin-top:1.4mm">${md(r.desc)}</p>
        <div style="margin-top:auto;display:grid;grid-template-columns:1fr 1fr;gap:1.4mm">
          ${fichas.map(([a, b]) => `<div style="background:#ffffffd9;border-radius:2mm;padding:1.4mm 2mm;box-shadow:0 .4mm 1.2mm rgba(18,52,50,.06)"><p style="font-size:6.2pt;color:${C.tinta}c4;font-family:Outfit;font-weight:700;letter-spacing:.08em;text-transform:uppercase">${a}</p><p style="font-family:Outfit;font-weight:800;font-size:8.6pt;line-height:1.2">${b}</p></div>`).join('')}
        </div>
      </div>
    </div>
    <div class="box b-coco" style="padding:3mm 3.4mm">
      <h3 style="margin-bottom:1.8mm">Ingredientes</h3>
      <ul class="ck" style="font-size:8.3pt">${r.ing.filter(([t]) => t).map(([t]) => `<li><span>${md(t)}</span></li>`).join('')}</ul>
    </div>
    <div>
      <h3 style="margin-bottom:2mm">Modo de preparo</h3>
      <div style="font-size:8.3pt">${passos([...r.prep, ...extraPrep])}</div>
    </div>
    ${extrasReceita(r, k)}
    <div style="margin-top:auto;display:flex;gap:2.6mm;align-items:stretch">
      <div style="flex:1">${callout('segredo', 'Segredo da Bruna', r.dica)}</div>
      <div style="width:30mm;flex-shrink:0;border-radius:3.2mm;background:linear-gradient(135deg,${C.turquesa},${C.turqEsc} 70%,#0B3F3D);box-shadow:0 1.2mm 3mm rgba(9,82,79,.3);display:flex;flex-direction:column;justify-content:center;align-items:center;text-align:center;padding:2mm">
        <p style="font-size:6.2pt;font-family:Outfit;font-weight:700;letter-spacing:.1em;text-transform:uppercase;color:#ffffffdd">Venda por</p>
        <p style="font-family:Outfit;font-weight:800;font-size:16pt;line-height:1.1;color:${C.mangaSobreTurq}">${preco(k.preco)}</p>
        <p style="font-size:6.2pt;color:#ffffffdd">lucro ≈ ${brl(k.preco - k.custoUn)}/un</p>
      </div>
    </div>`,
    { n, marca, cls: 'rec ' + SKIN },
  );
}

/** Abertura de categoria com mosaico de fotos (ou blocos de cor) e lista das receitas. */
export function categoriaPg({ cat, itens, n, marca }) {
  const fts = itens.map(([r]) => r.foto).filter(temImg);
  const thumbs = fts.slice(1, 5);
  return pagina(
    `<div style="position:relative;margin:-13mm -12.5mm 0;height:112mm;flex-shrink:0;overflow:hidden">
      ${fts[0] ? `<img src="${img(fts[0])}" style="position:absolute;inset:0;width:100%;height:100%;object-fit:cover"/>` : `<div style="position:absolute;inset:0;background:${cat.cor}"></div>`}
      <div style="position:absolute;inset:0;background:linear-gradient(180deg,rgba(18,52,50,0) 30%,rgba(18,52,50,.55) 62%,rgba(18,52,50,.9) 100%)"></div>
      <div style="position:absolute;left:12.5mm;right:12.5mm;bottom:7mm;text-shadow:0 .4mm 2mm rgba(0,0,0,.35)">
        <p style="font-family:Outfit;font-weight:700;font-size:7pt;letter-spacing:.2em;text-transform:uppercase;color:#fff;display:flex;align-items:center;gap:2mm"><span style="width:8mm;height:1.2mm;border-radius:1mm;background:${cat.cor}"></span>Categoria · ${itens.length} receitas</p>
        <h1 style="font-size:25pt;color:#fff;margin-top:1.4mm">${cat.nome}</h1>
        <p style="font-size:9pt;color:#fff;margin-top:1.4mm;max-width:105mm">${cat.desc}</p>
      </div>
    </div>
    ${thumbs.length ? `<div style="display:grid;grid-template-columns:repeat(${thumbs.length},1fr);gap:2mm">${thumbs.map((f) => `<img src="${img(f)}" style="width:100%;height:${itens.length <= 4 ? 46 : itens.length <= 6 ? 34 : 24}mm;object-fit:cover;border-radius:2.6mm;box-shadow:0 .8mm 2mm rgba(18,52,50,.15)"/>`).join('')}</div>` : ''}
    <div style="margin-top:auto;display:grid;grid-template-columns:${itens.length > 3 ? '1fr 1fr' : '1fr'};gap:1.4mm">${itens.map(([r, num, k]) => `<div style="display:flex;align-items:center;gap:2.4mm;background:#fff;border-radius:2.4mm;padding:1.4mm 2.4mm;box-shadow:0 .4mm 1.2mm rgba(18,52,50,.07)"><b style="font-family:Outfit;color:${C.coralTx};font-size:9pt;width:6mm">${String(num).padStart(2, '0')}</b><span style="font-family:Outfit;font-weight:700;font-size:8.4pt;line-height:1.15;flex:1">${r.nome}</span><span class="chip k-turq">${preco(k.preco)}</span></div>`).join('')}</div>`,
    { n, marca, fundo: C.coco, cls: SKIN },
  );
}

/** Faixa numerada de seção (como nos bônus). */
export const faixa = (cor, num, t) => `<div style="display:flex;align-items:center;gap:2.4mm"><span style="font-family:Outfit;font-weight:800;font-size:8pt;color:#fff;background:linear-gradient(135deg,${cor},color-mix(in srgb,${cor} 70%,#123432));border-radius:2mm;padding:.6mm 2.2mm;box-shadow:0 .6mm 1.6mm color-mix(in srgb,${cor} 35%,transparent)">${num}</span><span class="eb" style="color:${cor}">${t}</span></div>`;

/** Cartões de número em degradê. itens: [rótulo, valor, detalhe, cor1, cor2] */
export const destaques = (itens) => `<div style="display:grid;grid-template-columns:repeat(${itens.length},1fr);gap:2.4mm">${itens.map(([k, v, d, a1 = C.turquesa, a2 = C.turqEsc]) => `<div class="stat-g" style="--a1:${a1};--a2:${a2}"><p class="k">${k}</p><p class="v">${v}</p>${d ? `<p class="d">${md(d)}</p>` : ''}</div>`).join('')}</div>`;
/** Faixa de fotos. */
export const fotosFaixa = (fotos, h = 34) => { const f = fotos.filter(temImg); return f.length ? `<div style="display:grid;grid-template-columns:repeat(${f.length},1fr);gap:2.2mm">${f.map((x) => `<img src="${img(x)}" style="width:100%;height:${h}mm;object-fit:cover;border-radius:3mm;box-shadow:0 1mm 2.6mm rgba(18,52,50,.16)"/>`).join('')}</div>` : ''; };
/** Citação em destaque. */
export const citacao = (t, quem = 'Bruna') => `<div class="quote">${md(t)}<p class="pincel" style="font-size:12pt;margin-top:1mm">${quem}</p></div>`;

export { C, img, md, callout, lista, passos, pagina };
