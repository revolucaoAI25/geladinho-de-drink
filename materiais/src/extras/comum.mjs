// Componentes compartilhados pelos materiais extras (order bumps).
import { C, img, md, callout, lista, passos, pagina, capa } from '../base.mjs';
import { existsSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const PASTA_IMG = join(dirname(fileURLToPath(import.meta.url)), '..', '..', 'img');
/** A imagem existe em img/? (as fotos dos extras chegam depois; até lá usamos o painel de cor). */
export const temImg = (n) => !!n && existsSync(join(PASTA_IMG, n));
/** Cor de texto legível sobre um fundo (#rrggbb). */
export const sobre = (hex) => { const [r, g, b] = [1, 3, 5].map((i) => parseInt(hex.slice(i, i + 2), 16) / 255).map((c) => (c <= 0.03928 ? c / 12.92 : ((c + 0.055) / 1.055) ** 2.4)); const L = 0.2126 * r + 0.7152 * g + 0.0722 * b; return 1.05 / (L + 0.05) >= (L + 0.05) / 0.078 ? '#fff' : C.tinta; };
export const brl = (n) => 'R$ ' + n.toFixed(2).replace('.', ',');
export const preco = (n) => brl(n).replace(',00', '');

const ONDAS = `<svg class="ondas" style="height:5mm;width:148mm" viewBox="0 0 600 40" preserveAspectRatio="none"><path d="M0 18 C120 4 220 30 330 16 S520 2 600 14 V40 H0Z" fill="${C.manga}"/><path d="M0 26 C150 14 260 38 380 24 S540 18 600 24 V40 H0Z" fill="${C.coral}"/><path d="M0 33 C180 26 360 42 600 31 V40 H0Z" fill="${C.turquesa}"/></svg>`;

/**
 * Capa do extra. Se existir a arte gerada (arquivo), usa igual aos bônus;
 * senão monta uma capa tipográfica com fotos.
 */
export function capaExtra({ arquivo, eyebrow, titulo, destaque, sub, cor, fotos = [], selo }) {
  if (temImg(arquivo)) return capa(arquivo, `Material extra · ${titulo.replace(/<[^>]+>/g, '')}`);
  const fts = fotos.filter(temImg).slice(0, 3);
  return `<section class="pg" style="background:${C.coco}">
    <div style="position:absolute;inset:0 0 auto 0;height:100mm;background:${cor}"></div>
    ${fts.length ? `<div style="position:absolute;left:12mm;right:12mm;top:58mm;height:78mm;display:grid;grid-template-columns:${fts.map(() => '1fr').join(' ')};gap:2.4mm">${fts.map((f) => `<img src="${img(f)}" style="width:100%;height:78mm;object-fit:cover;border-radius:4mm;box-shadow:0 2mm 5mm rgba(18,52,50,.25)"/>`).join('')}</div>` : ''}
    <img src="${img('logo.png')}" style="position:absolute;left:50%;top:9mm;transform:translateX(-50%);width:34mm"/>
    <div style="position:absolute;left:12mm;right:12mm;top:${fts.length ? 141 : 60}mm;text-align:center">
      <p class="eb" style="color:${C.turquesa}">${eyebrow}</p>
      <h1 style="font-size:28pt;line-height:1.02;margin-top:2mm">${titulo}</h1>
      ${destaque ? `<p class="pincel" style="font-size:20pt;margin-top:1mm">${destaque}</p>` : ''}
      <p class="lead" style="margin-top:2mm">${md(sub)}</p>
    </div>
    ${selo ? `<div style="position:absolute;right:10mm;top:${fts.length ? 50 : 30}mm;width:26mm;height:26mm;border-radius:50%;background:${C.manga};display:grid;place-items:center;text-align:center;transform:rotate(-8deg);box-shadow:0 1.5mm 4mm rgba(18,52,50,.25)"><p style="font-family:Outfit;font-weight:800;font-size:9pt;line-height:1.05;color:${C.tinta}">${selo}</p></div>` : ''}
    <div style="position:absolute;left:0;right:0;bottom:0;height:14mm;background:${C.turquesa};display:grid;place-items:center"><p style="font-size:7pt;color:#ffffffdd;letter-spacing:.06em">Material exclusivo para alunos · uso pessoal · proibida a distribuição</p></div>
  </section>`;
}

/** Página de abertura: foto em cima, cartão com título e índice. */
export function aberturaExtra({ cor, eyebrow, titulo, texto, itens, foto }) {
  const f = temImg(foto) ? `<img src="${img(foto)}" style="position:absolute;inset:0 0 auto 0;width:148mm;height:84mm;object-fit:cover"/>` : `<div style="position:absolute;inset:0 0 auto 0;height:84mm;background:${cor}"></div>`;
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

/** Página de receita padrão dos extras. */
export function receitaPg({ r, num, k, cat, marca, n, fichas, extraPrep = [] }) {
  return pagina(
    `<div style="display:flex;gap:4mm">
      ${visual(r, num, 44, 55)}
      <div style="flex:1;min-width:0;display:flex;flex-direction:column">
        <div style="display:flex;align-items:center;gap:1.6mm;flex-wrap:wrap"><span class="chip" style="background:${cat.cor}55;color:${C.tinta}">${cat.nome}</span>${r.destaque ? `<span class="chip k-escuro">${r.destaque}</span>` : ''}</div>
        <p style="font-family:Outfit;font-weight:800;font-size:9pt;color:${C.coralTx};margin-top:2.2mm">RECEITA ${String(num).padStart(2, '0')}</p>
        <h1 style="font-size:15pt;margin-top:.6mm">${r.nome}</h1>
        <p style="font-size:8.2pt;line-height:1.45;margin-top:1.4mm">${md(r.desc)}</p>
        <div style="margin-top:auto;display:grid;grid-template-columns:1fr 1fr;gap:1.4mm">
          ${fichas.map(([a, b]) => `<div style="background:${C.coco};border-radius:2mm;padding:1.4mm 2mm"><p style="font-size:6.2pt;color:${C.tinta}c4;font-family:Outfit;font-weight:700;letter-spacing:.08em;text-transform:uppercase">${a}</p><p style="font-family:Outfit;font-weight:800;font-size:8.6pt;line-height:1.2">${b}</p></div>`).join('')}
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
    <div style="margin-top:auto;display:flex;gap:2.6mm;align-items:stretch">
      <div style="flex:1">${callout('segredo', 'Segredo da Bruna', r.dica)}</div>
      <div style="width:30mm;flex-shrink:0;border-radius:3.2mm;background:${C.turquesa};display:flex;flex-direction:column;justify-content:center;align-items:center;text-align:center;padding:2mm">
        <p style="font-size:6.2pt;font-family:Outfit;font-weight:700;letter-spacing:.1em;text-transform:uppercase;color:#ffffffdd">Venda por</p>
        <p style="font-family:Outfit;font-weight:800;font-size:16pt;line-height:1.1;color:${C.mangaSobreTurq}">${preco(k.preco)}</p>
        <p style="font-size:6.2pt;color:#ffffffdd">lucro ≈ ${brl(k.preco - k.custoUn)}/un</p>
      </div>
    </div>`,
    { n, marca, cls: 'rec' },
  );
}

/** Abertura de categoria com mosaico de fotos (ou blocos de cor) e lista das receitas. */
export function categoriaPg({ cat, itens, n, marca }) {
  const tiles = itens.slice(0, 3).map(([r, num]) =>
    temImg(r.foto)
      ? `<img src="${img(r.foto)}" style="width:100%;height:100%;object-fit:cover;object-position:50% 40%;border-radius:3.6mm;min-width:0;min-height:0"/>`
      : `<div style="border-radius:3.6mm;background:${r.cor};border:.3mm solid ${C.cocoEsc};display:flex;align-items:flex-end;padding:3mm;min-width:0;min-height:0"><p style="font-family:Outfit;font-weight:800;font-size:9pt;line-height:1.15;color:${C.tinta};background:#ffffffeb;border-radius:2mm;padding:1mm 2mm">${r.nome}</p></div>`,
  );
  const h = itens.length > 6 ? 46 : 54.8;
  return pagina(
    `<div style="display:grid;grid-template-columns:1.3fr 1fr;grid-template-rows:${h}mm ${h}mm;gap:2.4mm;height:${2 * h + 2.4}mm;flex-shrink:0">
      <div style="grid-row:span 2;display:grid">${tiles[0]}</div><div style="display:grid">${tiles[1] || ''}</div><div style="display:grid">${tiles[2] || ''}</div>
    </div>
    <div style="display:flex;align-items:center;gap:2mm;margin-top:1mm"><span style="width:8mm;height:1.2mm;border-radius:1mm;background:${cat.cor}"></span><p class="eb" style="color:${C.turquesa}">Categoria · ${itens.length} receitas</p></div>
    <h1 style="font-size:23pt;margin-top:-1mm">${cat.nome}</h1>
    <p class="lead">${cat.desc}</p>
    <div style="margin-top:auto;display:grid;grid-template-columns:${itens.length > 3 ? '1fr 1fr' : '1fr'};gap:1.4mm">${itens.map(([r, num, k]) => `<div style="display:flex;align-items:center;gap:2.4mm;background:#fff;border-radius:2.4mm;padding:1.4mm 2.4mm"><b style="font-family:Outfit;color:${C.coralTx};font-size:9pt;width:6mm">${String(num).padStart(2, '0')}</b><span style="font-family:Outfit;font-weight:700;font-size:8.4pt;line-height:1.15;flex:1">${r.nome}</span><span class="chip k-turq">${preco(k.preco)}</span></div>`).join('')}</div>`,
    { n, marca, fundo: C.coco },
  );
}

/** Faixa numerada de seção (como nos bônus). */
export const faixa = (cor, num, t) => `<div style="display:flex;align-items:center;gap:2.4mm"><span style="font-family:Outfit;font-weight:800;font-size:8pt;color:#fff;background:${cor};border-radius:2mm;padding:.6mm 2mm">${num}</span><span class="eb" style="color:${cor}">${t}</span></div>`;

export { C, img, md, callout, lista, passos, pagina };
