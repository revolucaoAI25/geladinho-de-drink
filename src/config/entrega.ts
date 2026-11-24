/**
 * Arquivos entregues por e-mail depois da compra.
 * Os PDFs ficam em `public/<PASTA>` (vão para o site em cada deploy).
 * Para hospedar em outro lugar (Drive etc.), use ENTREGA_BASE_URL ou o campo `url` de cada arquivo.
 */
export const PASTA = 'a-5d0b7c2e9f41a83c6e27';

export type Grupo = 'comece' | 'tablet' | 'imprimir' | 'bonus' | 'extra';

export type Arquivo = {
  id: string;
  grupo: Grupo;
  titulo: string;
  desc: string;
  arquivo: string;
  /** Link externo (Drive etc.). Vazio = usa a pasta do site. */
  url?: string;
  /** Arquivo de order bump: só abre para quem comprou aquele bump. */
  bump?: string;
};

export const ARQUIVOS: Arquivo[] = [
  { id: 'treinamento', grupo: 'comece', titulo: 'Treinamento Geladinhos de Drinks Lucrativos', desc: 'O Método Drink no Saquinho completo + as 30 receitas.', arquivo: 'Geladinhos de Drinks Lucrativos - Treinamento Completo.pdf' },
  { id: 'b1', grupo: 'bonus', titulo: 'Bônus 1 · Guia do Geladinho Perfeito', desc: 'PDF', arquivo: 'Bonus 1 - Guia do Geladinho Perfeito.pdf' },
  { id: 'b2', grupo: 'bonus', titulo: 'Bônus 2 · Embalagens que Valorizam seu Geladinho', desc: 'PDF', arquivo: 'Bonus 2 - Embalagens que Valorizam seu Geladinho.pdf' },
  { id: 'b3', grupo: 'bonus', titulo: 'Bônus 3 · Cardápio dos 10 Primeiros Sabores', desc: 'PDF', arquivo: 'Bonus 3 - Cardapio dos 10 Primeiros Sabores.pdf' },
  { id: 'b4', grupo: 'bonus', titulo: 'Bônus 4 · Plano de 7 Dias para Começar a Vender', desc: 'PDF', arquivo: 'Bonus 4 - Plano de 7 Dias para Comecar a Vender.pdf' },
  { id: 'x-semalcool', grupo: 'extra', bump: 'semalcool', titulo: '30 Geladinhos Gourmet Sem Álcool', desc: 'PDF', arquivo: 'Extra - 30 Geladinhos Gourmet Sem Alcool.pdf' },
  { id: 'x-picoles', grupo: 'extra', bump: 'picoles', titulo: 'Picolés e Sacolés Especiais para Vender', desc: 'PDF', arquivo: 'Extra - Picoles e Sacoles Especiais para Vender.pdf' },
  { id: 'x-calculadora', grupo: 'extra', bump: 'calculadora', titulo: 'Calculadora Automática de Lucros', desc: 'Planilha', arquivo: 'Extra - Calculadora Automatica de Lucros.xlsx' },
  { id: 'x-calculadora-pdf', grupo: 'extra', bump: 'calculadora', titulo: 'Calculadora Automática de Lucros', desc: 'Como usar (PDF)', arquivo: 'Extra - Calculadora Automatica de Lucros - Como usar.pdf' },
  { id: 'x-artes', grupo: 'extra', bump: 'artes', titulo: 'Cardápios e Artes que Vendem', desc: 'PDF com os modelos', arquivo: 'Extra - Cardapios e Artes que Vendem.pdf' },
];

/**
 * Order bumps (nomes exatamente como na Kiwify). A Kiwify registra cada bump como uma compra à parte:
 * o site manda o e-mail com o material e repassa a venda para a Utmify (a Utmify não recebe bump pelo webhook dela).
 * `chaves`: trechos do nome do produto que identificam o bump (sem acento, minúsculas).
 * `inclui`: o combo libera os materiais dos outros bumps.
 */
export const BUMPS: { id: string; nome: string; chaves: string[]; inclui?: string[] }[] = [
  { id: 'combo', nome: 'Combo Vendedor de Verão', chaves: ['combo vendedor', 'combo'], inclui: ['semalcool', 'picoles', 'calculadora', 'artes'] },
  { id: 'semalcool', nome: '30 Geladinhos Gourmet Sem Álcool', chaves: ['sem alcool'] },
  { id: 'picoles', nome: 'Picolés e Sacolés Especiais para Vender', chaves: ['picoles', 'sacoles especiais'] },
  { id: 'calculadora', nome: 'Calculadora Automática de Lucros', chaves: ['calculadora'] },
  { id: 'artes', nome: 'Cardápios e Artes que Vendem', chaves: ['cardapios e artes', 'artes que vendem'] },
];
/** Nome do produto principal na Kiwify. */
export const PRODUTO_PRINCIPAL = 'Geladinhos de Drinks Lucrativos';

const norm = (t: string) => t.normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase();
/** Qual bump é este produto (pelo nome que veio da Kiwify)? */
export const bumpDoProduto = (nome: string) => BUMPS.find((b) => b.chaves.some((k) => norm(nome).includes(norm(k))));
/** Arquivos liberados por um bump (o combo libera os dos 4 materiais). */
export const bumpsLiberados = (ids: string[] = []) => [...new Set(ids.flatMap((id) => [id, ...(BUMPS.find((b) => b.id === id)?.inclui ?? [])]))];
export const arquivosDoBump = (id: string) => {
  const ids = bumpsLiberados([id]);
  return ARQUIVOS.filter((a) => a.bump && ids.includes(a.bump));
};
/** O link de acesso libera este arquivo? (arquivos de bump só para quem comprou o bump) */
export const podeBaixar = (a: Arquivo, bumps: string[] = []) => !a.bump || bumpsLiberados(bumps).includes(a.bump);

export const GRUPOS: Record<Grupo, { titulo: string; desc: string }> = {
  comece: { titulo: 'Seu treinamento', desc: 'Comece por aqui: o método e as 30 receitas.' },
  tablet: { titulo: '', desc: '' },
  imprimir: { titulo: '', desc: '' },
  bonus: { titulo: 'Seus 4 bônus', desc: '' },
  extra: { titulo: 'Seus materiais extras', desc: 'Os materiais que você acrescentou na compra.' },
};

export function urlArquivo(a: Arquivo, site: string): string {
  if (a.url) return a.url;
  const base = process.env.ENTREGA_BASE_URL?.replace(/\/$/, '') || `${site}/${PASTA}`;
  return `${base}/${encodeURIComponent(a.arquivo)}`;
}
