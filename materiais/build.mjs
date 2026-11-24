// Gera os PDFs (A5) dos materiais. Uso: node build.mjs [treinamento|b1|b2|b3|b4] [--png]
import { createRequire } from 'node:module';
import { mkdirSync, writeFileSync, copyFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { CSS } from './src/base.mjs';
import { treinamento } from './src/treinamento.mjs';
import { bonus1, bonus2, bonus3, bonus4 } from './src/bonus.mjs';
import { semAlcool } from './src/extras/semalcool.mjs';
import { picoles } from './src/extras/picoles.mjs';
import { whatsapp } from './src/extras/whatsapp.mjs';

const require = createRequire(import.meta.url);
const { chromium } = require('playwright');
const RAIZ = dirname(fileURLToPath(import.meta.url));
const BUILD = join(RAIZ, '.build');
const SAIDA = join(RAIZ, '..', 'public', 'a-5d0b7c2e9f41a83c6e27');

const DOCS = {
  treinamento: ['Geladinhos de Drinks Lucrativos - Treinamento Completo', treinamento],
  b1: ['Bonus 1 - Guia do Geladinho Perfeito', bonus1],
  b2: ['Bonus 2 - Embalagens que Valorizam seu Geladinho', bonus2],
  b3: ['Bonus 3 - Cardapio dos 10 Primeiros Sabores', bonus3],
  b4: ['Bonus 4 - Plano de 7 Dias para Comecar a Vender', bonus4],
  x1: ['Extra - 30 Geladinhos Gourmet Sem Alcool', semAlcool],
  x2: ['Extra - Picoles e Sacoles Especiais para Vender', picoles],
  x3: ['Extra - Mensagens que Vendem no WhatsApp', whatsapp],
};

const args = process.argv.slice(2);
const png = args.includes('--png');
const quais = args.filter((a) => !a.startsWith('--'));
const lista = quais.length ? quais : Object.keys(DOCS);

mkdirSync(BUILD, { recursive: true });
mkdirSync(SAIDA, { recursive: true });
const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 560, height: 794 } });
let erros = 0;

for (const id of lista) {
  const [nome, fn] = DOCS[id];
  const paginas = fn();
  const html = `<!doctype html><html lang="pt-BR"><head><meta charset="utf-8"><title>${nome}</title><style>${CSS}</style></head><body>${paginas.join('\n')}</body></html>`;
  const arqHtml = join(BUILD, `${id}.html`);
  writeFileSync(arqHtml, html);
  // as imagens usam ../img e ../fontes: o HTML fica em .build, irmão de img/ e fontes/
  await page.goto('file://' + arqHtml, { waitUntil: 'load' });
  await page.evaluate(() => document.fonts.ready);
  // Blocos opcionais (.opc): saem, do menor para o maior data-p, só nas páginas em que não cabem.
  await page.evaluate(() => {
    for (const pg of document.querySelectorAll('.pg')) {
      const inn = pg.querySelector('.in');
      if (!inn) continue;
      const opc = [...pg.querySelectorAll('.opc')].sort((a, b) => +a.dataset.p - +b.dataset.p);
      while (inn.scrollHeight > inn.clientHeight + 1 && opc.length) opc.shift().remove();
      pg.querySelectorAll('.opc-wrap').forEach((w) => { if (!w.children.length) w.remove(); });
    }
  });
  const estouros = await page.evaluate(() =>
    [...document.querySelectorAll('.pg')].flatMap((pg, i) => {
      const inn = pg.querySelector('.in');
      if (!inn) return [];
      const r = [];
      if (inn.scrollHeight > inn.clientHeight + 1) r.push(`pág ${i + 1}: conteúdo passa ${inn.scrollHeight - inn.clientHeight}px`);
      if (pg.scrollWidth > pg.clientWidth + 1) r.push(`pág ${i + 1}: largura passa ${pg.scrollWidth - pg.clientWidth}px`);
      return r;
    }),
  );
  const quebradas = await page.evaluate(() => [...document.images].filter((im) => !im.naturalWidth).map((im) => im.src));
  if (estouros.length || quebradas.length) {
    erros++;
    console.log(`✗ ${id}`, [...estouros, ...quebradas.map((s) => 'imagem: ' + s)].join('\n  '));
  }
  const arqPdf = join(BUILD, `${nome}.pdf`);
  await page.pdf({ path: arqPdf, width: '148mm', height: '210mm', printBackground: true, preferCSSPageSize: true });
  copyFileSync(arqPdf, join(SAIDA, `${nome}.pdf`));
  console.log(`✓ ${id}: ${paginas.length} páginas`);
  if (png) {
    mkdirSync(join(BUILD, 'png', id), { recursive: true });
    const secs = await page.$$('.pg');
    for (let i = 0; i < secs.length; i++) await secs[i].screenshot({ path: join(BUILD, 'png', id, `${String(i + 1).padStart(2, '0')}.png`) });
  }
}
await browser.close();
process.exit(erros ? 1 : 0);
