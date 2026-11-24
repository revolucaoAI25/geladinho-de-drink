// Ingredientes e cálculo dos extras (sem álcool, picolés e sacolés).
// preco: R$ por unidade (ml, g ou un) · vol: ml que ocupa na mistura por unidade · abv: teor alcoólico.
// Referência: supermercado, novembro de 2026.
export const ING2 = {
  agua: { preco: 0, vol: 1 },
  acucar: { preco: 0.005, vol: 0.62 },
  leite: { preco: 0.005, vol: 1 },
  leiteCond: { preco: 0.0177, vol: 0.77 },
  cremeLeite: { preco: 0.02, vol: 1 },
  ninho: { preco: 0.058, vol: 0.6 }, // lata 380 g ≈ R$ 22
  avela: { preco: 0.05, vol: 0.8 }, // creme de avelã 350 g ≈ R$ 17 (genérico) a R$ 28 (Nutella)
  chocPo: { preco: 0.065, vol: 0.6 },
  chocBarra: { preco: 0.1, vol: 0.8 }, // barra 90 g ≈ R$ 9
  cobertura: { preco: 0.045, vol: 0 }, // chocolate fracionado 1 kg ≈ R$ 45
  oleoCoco: { preco: 0.08, vol: 0 },
  maisena: { preco: 0.0325, vol: 0.6 },
  ligaNeutra: { preco: 0.12, vol: 0 },
  emustab: { preco: 0.06, vol: 0 },
  oreo: { preco: 0.05, vol: 0.5 },
  biscoitoMaisena: { preco: 0.025, vol: 0.5 },
  cocoRalado: { preco: 0.09, vol: 0.5 },
  leiteCoco: { preco: 0.03, vol: 1 },
  pacoca: { preco: 0.027, vol: 0.6 },
  amendoim: { preco: 0.03, vol: 0.6 },
  doceLeite: { preco: 0.03, vol: 0.77 },
  goiabada: { preco: 0.023, vol: 0.75 },
  requeijao: { preco: 0.045, vol: 1 },
  creamCheese: { preco: 0.06, vol: 1 },
  ovo: { preco: 0.9, vol: 18 }, // gema
  banana: { preco: 0.007, vol: 0.9 },
  canela: { preco: 0.2, vol: 0 },
  acai: { preco: 0.035, vol: 1 },
  iogurte: { preco: 0.019, vol: 1 },
  milho: { preco: 0.026, vol: 0.9 },
  abacate: { preco: 0.013, vol: 0.95 },
  cafe: { preco: 0.24, vol: 0 },
  groselha: { preco: 0.02, vol: 1 },
  granulado: { preco: 0.04, vol: 0 },
  flocosArroz: { preco: 0.04, vol: 0.4 },
  sucoLimao: { preco: 0.02, vol: 1 },
  sucoSiciliano: { preco: 0.035, vol: 1 },
  sucoLaranja: { preco: 0.01, vol: 1 },
  sucoUva: { preco: 0.015, vol: 1 },
  limaoPedaco: { preco: 0.6, vol: 25 },
  polpaMaracuja: { preco: 0.025, vol: 1 },
  morango: { preco: 0.03, vol: 1 },
  frutasVermelhas: { preco: 0.07, vol: 1 },
  abacaxi: { preco: 0.011, vol: 1 },
  manga: { preco: 0.011, vol: 1 },
  kiwi: { preco: 0.03, vol: 1 },
  uva: { preco: 0.015, vol: 1 },
  melancia: { preco: 0.006, vol: 0.92 },
  folha: { preco: 0.1, vol: 0 },
  sal: { preco: 0, vol: 0 },
  // bebidas (picolés de drink)
  cachaca: { preco: 0.022, vol: 1, abv: 0.39 },
  vodka: { preco: 0.032, vol: 1, abv: 0.375 },
  rum: { preco: 0.035, vol: 1, abv: 0.38 },
  espumante: { preco: 0.047, vol: 1, abv: 0.115 },
};

export const EMBALAGEM = { sacole: 0.14, sacoleG: 0.2, picole: 0.22, paleta: 0.3 }; // saquinho/etiqueta · palito + embalagem
export const VOLUME = { sacole: 120, sacoleG: 200, picole: 80, paleta: 110 };
export const MARKUP_MIN = 2.5;

/** Custo, rendimento, teor e preço sugerido de uma receita. */
export function calc2(r, precoCat) {
  const tipo = r.tipo || 'sacole';
  let vol = 0, alc = 0, custo = 0;
  for (const [, id, q] of r.ing) {
    const i = ING2[id];
    if (!i) throw new Error('ingrediente desconhecido: ' + id);
    vol += q * i.vol;
    alc += q * i.vol * (i.abv || 0);
    custo += q * i.preco;
  }
  const un = r.rende ?? Math.floor(vol / VOLUME[tipo]);
  const custoUn = custo / un + EMBALAGEM[tipo];
  const preco = Math.max(precoCat, Math.ceil((custoUn * MARKUP_MIN) / 0.5) * 0.5);
  return { vol: Math.round(vol), un, custo, custoUn, preco, teor: (alc / vol) * 100 };
}
