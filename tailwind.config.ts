import type { Config } from 'tailwindcss';

export default {
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        creme: { DEFAULT: '#FFF7EC', escuro: '#FBEBD5' },
        tinta: '#2B211C',
        coral: { DEFAULT: '#EF5B34', escuro: '#D2451F', claro: '#FFE4D9' },
        limao: { DEFAULT: '#4E8A2E', escuro: '#3B6B21', claro: '#E7F2D9' },
        maracuja: { DEFAULT: '#FFC23A', claro: '#FFF1C9' },
        morango: { DEFAULT: '#E8456B', claro: '#FDE3EA' },
        dinheiro: '#16A34A',
      },
      fontFamily: {
        sans: ['var(--font-texto)', 'system-ui', 'sans-serif'],
        display: ['var(--font-montserrat)', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        suave: '0 10px 30px -12px rgba(43,33,28,.25)',
        botao: '0 6px 0 0 rgba(0,0,0,.18)',
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
