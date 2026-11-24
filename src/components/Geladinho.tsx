/** Ilustração de um geladinho (saquinho) em SVG: ocupa o lugar das fotos enquanto não existem. */
export function Geladinho({ cor = '#B8D96A', fruta = '🍋', className = '', inclinado = 0 }: { cor?: string; fruta?: string; className?: string; inclinado?: number }) {
  const id = cor.replace('#', 'g');
  return (
    <svg viewBox="0 0 80 190" className={className} style={{ transform: `rotate(${inclinado}deg)` }} aria-hidden>
      <defs>
        <linearGradient id={id} x1="0" x2="1">
          <stop offset="0" stopColor={cor} stopOpacity=".95" />
          <stop offset=".55" stopColor={cor} stopOpacity=".78" />
          <stop offset="1" stopColor={cor} stopOpacity=".95" />
        </linearGradient>
      </defs>
      {/* saquinho */}
      <path d="M14 30 Q14 22 22 22 H58 Q66 22 66 30 V172 Q66 182 56 182 H24 Q14 182 14 172 Z" fill="#fff" fillOpacity=".55" stroke="#fff" strokeOpacity=".9" strokeWidth="2" />
      {/* conteúdo congelado */}
      <path d="M17 52 Q40 46 63 52 V170 Q63 179 55 179 H25 Q17 179 17 170 Z" fill={`url(#${id})`} />
      {/* brilho */}
      <path d="M23 60 V164" stroke="#fff" strokeOpacity=".55" strokeWidth="4" strokeLinecap="round" />
      {/* nó */}
      <path d="M30 22 Q40 8 50 22" fill="none" stroke="#fff" strokeWidth="4" strokeLinecap="round" />
      <circle cx="40" cy="14" r="5" fill="#fff" />
      <text x="40" y="128" textAnchor="middle" fontSize="26">{fruta}</text>
    </svg>
  );
}

/** Foto da oferta: mostra a imagem real se existir; senão, uma composição de geladinhos ilustrados. */
export function Foto({ src, alt, sabores, className = '', etiqueta }: { src?: string; alt: string; sabores: { cor: string; fruta: string }[]; className?: string; etiqueta?: string }) {
  if (src) {
    // eslint-disable-next-line @next/next/no-img-element
    return <img src={src} alt={alt} loading="lazy" decoding="async" className={`h-auto w-full rounded-3xl object-cover shadow-suave ${className}`} />;
  }
  return (
    <div className={`relative overflow-hidden rounded-3xl bg-gradient-to-br from-maracuja-claro via-creme-escuro to-coral-claro shadow-suave ${className}`} role="img" aria-label={alt}>
      <div className="absolute -left-10 -top-10 h-40 w-40 rounded-full bg-maracuja/40" />
      <div className="absolute -bottom-12 -right-8 h-44 w-44 rounded-full bg-limao/20" />
      <div className="relative flex h-full items-end justify-center gap-1 px-4 pb-4 pt-8">
        {sabores.slice(0, 5).map((s, i) => (
          <Geladinho key={i} cor={s.cor} fruta={s.fruta} inclinado={(i - 2) * 6} className="h-[78%] w-auto drop-shadow-md" />
        ))}
      </div>
      {etiqueta && <span className="absolute left-3 top-3 rounded-full bg-white/85 px-2.5 py-1 text-[11px] font-bold text-tinta/60">{etiqueta}</span>}
    </div>
  );
}
