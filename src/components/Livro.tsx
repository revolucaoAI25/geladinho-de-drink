import Image from 'next/image';

/**
 * Capa em formato de livro: leve perspectiva, lombada com sombra, borda de páginas e sombra no chão.
 * Feito em CSS (sem imagem extra), nítido em qualquer tela.
 */
export function Livro({ src, alt, largura, className = '', inclinar = -14, prioridade = false }: { src: string; alt: string; largura: number; className?: string; inclinar?: number; prioridade?: boolean }) {
  return (
    <div className={className.includes('absolute') ? className : `relative ${className}`} style={{ width: largura, perspective: 1100 }}>
      <div className="relative" style={{ transform: `rotateY(${inclinar}deg)`, transformOrigin: 'left center' }}>
        {/* páginas aparecendo à direita */}
        <div
          className="absolute -right-[5%] bottom-[1.5%] top-[1.5%] w-[6%] rounded-r-[3px]"
          style={{ background: 'repeating-linear-gradient(90deg,#fff 0 1.5px,#e9e2d6 1.5px 3px)', boxShadow: 'inset -2px 0 4px rgba(0,0,0,.08)' }}
        />
        <div className="relative overflow-hidden rounded-r-[5px] rounded-l-[2px] shadow-[8px_18px_30px_-10px_rgba(18,52,50,.45),2px_4px_8px_-2px_rgba(18,52,50,.25)]">
          <Image src={src} alt={alt} width={800} height={1000} sizes={`${largura}px`} priority={prioridade} className="block h-auto w-full" />
          {/* lombada */}
          <div className="pointer-events-none absolute inset-y-0 left-0 w-[9%]" style={{ background: 'linear-gradient(90deg,rgba(0,0,0,.28),rgba(255,255,255,.22) 35%,rgba(0,0,0,.08) 60%,transparent)' }} />
          {/* brilho */}
          <div className="pointer-events-none absolute inset-0" style={{ background: 'linear-gradient(115deg,rgba(255,255,255,.16),transparent 40%)' }} />
        </div>
      </div>
    </div>
  );
}
