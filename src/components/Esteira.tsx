'use client';

import { useEffect, useRef } from 'react';

/**
 * Esteira que rola sozinha, sem parar (a lista é duplicada para emendar sem salto).
 * Pausa só enquanto a pessoa arrasta para o lado e volta em 1,5 s. Anda só quando está visível.
 */
export function Esteira({ children, velocidade = 0.045 }: { children: React.ReactNode[]; velocidade?: number }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    let visivel = false;
    let pausa = 0;
    let ultimo = 0;
    let raf = 0;
    let pos = el.scrollLeft;
    const passo = (t: number) => {
      raf = requestAnimationFrame(passo);
      const dt = ultimo ? Math.min(t - ultimo, 50) : 0;
      ultimo = t;
      if (!visivel || t < pausa) {
        pos = el.scrollLeft;
        return;
      }
      const meio = el.scrollWidth / 2;
      pos += velocidade * dt;
      if (pos >= meio) pos -= meio;
      el.scrollLeft = pos;
    };
    let x0 = 0;
    let y0 = 0;
    const ini = (e: TouchEvent) => {
      x0 = e.touches[0].clientX;
      y0 = e.touches[0].clientY;
    };
    const mov = (e: TouchEvent) => {
      const dx = Math.abs(e.touches[0].clientX - x0);
      if (dx > 12 && dx > Math.abs(e.touches[0].clientY - y0)) pausa = performance.now() + 1500;
    };
    const roda = (e: WheelEvent) => {
      if (Math.abs(e.deltaX) > Math.abs(e.deltaY)) pausa = performance.now() + 1500;
    };
    const io = new IntersectionObserver(([e]) => (visivel = e.isIntersecting), { threshold: 0.15 });
    io.observe(el);
    el.addEventListener('touchstart', ini, { passive: true });
    el.addEventListener('touchmove', mov, { passive: true });
    el.addEventListener('wheel', roda, { passive: true });
    raf = requestAnimationFrame(passo);
    return () => {
      cancelAnimationFrame(raf);
      io.disconnect();
      el.removeEventListener('touchstart', ini);
      el.removeEventListener('touchmove', mov);
      el.removeEventListener('wheel', roda);
    };
  }, [velocidade]);

  return (
    <div className="relative">
      <div ref={ref} className="flex gap-4 overflow-x-auto px-4 pb-5 pt-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        {children}
        {children.map((c, i) => (
          <div key={`dup-${i}`} aria-hidden className="contents">
            {c}
          </div>
        ))}
      </div>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-6 bg-gradient-to-r from-coco to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-6 bg-gradient-to-l from-coco to-transparent" />
    </div>
  );
}
