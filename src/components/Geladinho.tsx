/**
 * Geladinho no formato da marca: saquinho retangular, selagem serrilhada em cima e embaixo,
 * conteúdo congelado com pedacinhos de fruta e brilho. Ocupa o lugar das fotos enquanto não existem.
 */
export function Geladinho({ cor = '#9ED43A', pedaco = '#5E8F1E', className = '', inclinado = 0 }: { cor?: string; pedaco?: string; className?: string; inclinado?: number }) {
  const id = `g${cor.slice(1)}${pedaco.slice(1)}`;
  const serra = (y: number) => `M10 ${y} ${Array.from({ length: 10 }, (_, i) => `L${13 + i * 6} ${y + (i % 2 ? 0 : 3)}`).join(' ')} L70 ${y}`;
  const bolinhas = [
    [28, 70, 3.2], [50, 82, 2.6], [36, 104, 3.4], [55, 120, 2.8], [30, 136, 2.4], [48, 150, 3.2], [38, 166, 2.6], [56, 96, 2.2],
  ];
  return (
    <svg viewBox="0 0 80 200" className={className} style={{ transform: `rotate(${inclinado}deg)` }} aria-hidden>
      <defs>
        <linearGradient id={id} x1="0" x2="1">
          <stop offset="0" stopColor={cor} />
          <stop offset=".45" stopColor={cor} stopOpacity=".82" />
          <stop offset="1" stopColor={cor} />
        </linearGradient>
        <linearGradient id={`${id}s`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#000" stopOpacity="0" />
          <stop offset="1" stopColor="#000" stopOpacity=".12" />
        </linearGradient>
      </defs>
      {/* plástico */}
      <rect x="10" y="10" width="60" height="182" rx="5" fill="#fff" fillOpacity=".55" stroke="#fff" strokeWidth="1.5" />
      {/* selagens */}
      <rect x="10" y="10" width="60" height="16" rx="4" fill="#fff" fillOpacity=".75" />
      <path d={serra(26)} fill="none" stroke="#fff" strokeOpacity=".9" strokeWidth="1.2" />
      <rect x="10" y="178" width="60" height="14" rx="4" fill="#fff" fillOpacity=".75" />
      {/* conteúdo */}
      <path d="M13 40 Q40 33 67 40 V174 H13 Z" fill={`url(#${id})`} />
      <path d="M13 40 Q40 33 67 40 V174 H13 Z" fill={`url(#${id}s)`} />
      {bolinhas.map(([x, y, r], i) => (
        <circle key={i} cx={x} cy={y} r={r} fill={pedaco} fillOpacity=".75" />
      ))}
      {/* cristais de gelo */}
      {[[22, 58], [60, 64], [44, 140], [24, 120]].map(([x, y], i) => (
        <circle key={i} cx={x} cy={y} r="1.6" fill="#fff" fillOpacity=".8" />
      ))}
      {/* brilho */}
      <path d="M18 34 V172" stroke="#fff" strokeOpacity=".7" strokeWidth="3.5" strokeLinecap="round" />
      <path d="M63 48 V96" stroke="#fff" strokeOpacity=".45" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

type Sabor = { cor: string; pedaco: string };

/** Foto da oferta: imagem real se existir; senão, uma composição de geladinhos com a cara da marca. */
export function Foto({ src, alt, sabores, className = '', etiqueta }: { src?: string; alt: string; sabores: Sabor[]; className?: string; etiqueta?: string }) {
  if (src) {
    // eslint-disable-next-line @next/next/no-img-element
    return <img src={src} alt={alt} loading="lazy" decoding="async" className={`h-auto w-full rounded-[26px] object-cover shadow-suave ${className}`} />;
  }
  const n = Math.min(4, sabores.length);
  return (
    <div className={`relative overflow-hidden rounded-[26px] bg-[radial-gradient(120%_90%_at_50%_100%,#FFE7B0_0%,#FFF2D6_45%,#FEF7EE_100%)] shadow-suave ring-1 ring-tinta/[.05] ${className}`} role="img" aria-label={alt}>
      {/* sol */}
      <div className="absolute left-1/2 top-[14%] h-[46%] w-[62%] -translate-x-1/2 rounded-full bg-gradient-to-b from-manga to-[#FFB21F] opacity-90" />
      {/* gelo */}
      <div className="absolute inset-x-0 bottom-0 h-[22%] bg-gradient-to-t from-white/80 to-transparent" />
      <div className="relative flex h-full items-end justify-center px-[8%] pb-[7%]">
        {sabores.slice(0, n).map((s, i) => (
          <Geladinho key={i} cor={s.cor} pedaco={s.pedaco} inclinado={(i - (n - 1) / 2) * 8} className={`-mx-[2%] h-[74%] w-auto drop-shadow-[0_10px_14px_rgba(18,52,50,.25)] ${i === 1 ? 'z-10 h-[80%]' : ''}`} />
        ))}
      </div>
      {etiqueta && <span className="absolute left-3 top-3 rounded-full bg-white/90 px-3 py-1 text-[11.5px] font-semibold text-tinta/60 shadow-sm">{etiqueta}</span>}
    </div>
  );
}
