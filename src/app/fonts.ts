import localFont from 'next/font/local';

/** Títulos: geométrica, limpa e forte. */
export const outfit = localFont({ src: './fonts/outfit.woff2', weight: '100 900', display: 'swap', variable: '--font-display' });
/** Texto corrido: alta leitura. */
export const jakarta = localFont({ src: './fonts/plus-jakarta-sans-latin-wght-normal.woff2', weight: '200 800', display: 'swap', variable: '--font-texto' });
/** Destaques manuscritos (pincel), como “Venda o Verão”: usar com moderação. */
export const pincel = localFont({ src: './fonts/kaushan.woff2', weight: '400', display: 'swap', variable: '--font-pincel' });
