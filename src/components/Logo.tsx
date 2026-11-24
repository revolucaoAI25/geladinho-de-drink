import Image from 'next/image';

/** Logo da marca (imagem gerada na identidade visual). */
export function Logo({ className = '', tamanho = 120 }: { light?: boolean; className?: string; tamanho?: number }) {
  return <Image src="/img/logo-sm.webp" alt="Geladinhos de Drinks Lucrativos" width={400} height={400} className={`h-auto ${className}`} style={{ width: tamanho }} />;
}
