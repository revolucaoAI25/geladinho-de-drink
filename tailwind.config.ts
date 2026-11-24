import type { Config } from 'tailwindcss';

export default {
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        coco: { DEFAULT: '#FEF7EE', escuro: '#F6E9D6' },
        tinta: '#123432',
        turquesa: { DEFAULT: '#0D6F6B', escuro: '#09524F', claro: '#E2F2EF' },
        coral: { DEFAULT: '#FF6B5B', escuro: '#E24E3E', claro: '#FFE6E1' },
        manga: { DEFAULT: '#FFC538', claro: '#FFF2CC' },
        limao: { DEFAULT: '#9ED43A', escuro: '#5E8F1E', claro: '#EFF8DE' },
        berry: { DEFAULT: '#E83E8C', claro: '#FDE4EF' },
        dinheiro: '#16975A',
      },
      fontFamily: {
        sans: ['var(--font-texto)', 'system-ui', 'sans-serif'],
        display: ['var(--font-display)', 'system-ui', 'sans-serif'],
        pincel: ['var(--font-pincel)', 'cursive'],
      },
      boxShadow: {
        suave: '0 12px 32px -14px rgba(18,52,50,.28), 0 2px 6px -2px rgba(18,52,50,.06)',
        cartao: '0 1px 0 rgba(18,52,50,.04), 0 10px 24px -16px rgba(18,52,50,.35)',
        botao: '0 5px 0 0 #C9473A, 0 14px 24px -10px rgba(226,78,62,.55)',
        botaoT: '0 5px 0 0 #073F3D, 0 14px 24px -10px rgba(13,111,107,.5)',
      },
      keyframes: {
        entra: { from: { opacity: '0', transform: 'translateY(14px)' }, to: { opacity: '1', transform: 'none' } },
        brilho: { '0%': { transform: 'translateX(-120%)' }, '60%,100%': { transform: 'translateX(220%)' } },
        pulso: { '0%,70%,100%': { transform: 'scale(1)' }, '80%': { transform: 'scale(1.035)' }, '90%': { transform: 'scale(.99)' } },
        pop: { '0%': { transform: 'scale(.6)', opacity: '0' }, '60%': { transform: 'scale(1.08)', opacity: '1' }, '100%': { transform: 'scale(1)' } },
        balanca: { '0%,100%': { transform: 'rotate(-3deg)' }, '50%': { transform: 'rotate(3deg)' } },
        confete: { '0%': { transform: 'translateY(-10vh) rotate(0)', opacity: '1' }, '100%': { transform: 'translateY(110vh) rotate(720deg)', opacity: '1' } },
      },
      animation: {
        entra: 'entra .45s cubic-bezier(.2,.7,.2,1) both',
        brilho: 'brilho 3s ease-in-out infinite',
        pulso: 'pulso 3s ease-in-out infinite',
        pop: 'pop .5s cubic-bezier(.2,.7,.2,1) both',
        balanca: 'balanca 3s ease-in-out infinite',
      },
    },
  },
  plugins: [],
} satisfies Config;
