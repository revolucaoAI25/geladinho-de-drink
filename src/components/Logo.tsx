/** Marca: um geladinho estilizado + nome. */
export function Logo({ light = false, className = '' }: { light?: boolean; className?: string }) {
  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <svg width="30" height="44" viewBox="0 0 30 44" aria-hidden>
        <path d="M4 9 Q4 6 7 6 H23 Q26 6 26 9 V39 Q26 42 23 42 H7 Q4 42 4 39 Z" fill="#FFF1C9" stroke={light ? '#fff' : '#2B211C'} strokeOpacity=".2" />
        <path d="M5 16 Q15 13 25 16 V39 Q25 41 23 41 H7 Q5 41 5 39 Z" fill="#EF5B34" />
        <path d="M5 28 Q15 25 25 28 V39 Q25 41 23 41 H7 Q5 41 5 39 Z" fill="#FFC23A" />
        <path d="M11 6 Q15 0 19 6" fill="none" stroke="#4E8A2E" strokeWidth="2.5" strokeLinecap="round" />
      </svg>
      <span className="leading-none">
        <span className={`block text-[9px] font-bold tracking-[.32em] ${light ? 'text-white/80' : 'text-coral'}`}>GELADINHOS DE</span>
        <span className={`block font-display text-[19px] font-extrabold tracking-tight ${light ? 'text-white' : 'text-tinta'}`}>Drinks Lucrativos</span>
      </span>
    </span>
  );
}
