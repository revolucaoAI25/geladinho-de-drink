import { Geladinho } from './Geladinho';
import { imagens } from '@/config/oferta';

type Msg = { de: 'ela' | 'eu'; t?: string; foto?: boolean; legenda?: string };

/** "Print" de conversa no WhatsApp, desenhado em HTML (nítido em qualquer tela). */
export function Whats({ nome, hora, msgs, foto }: { nome: string; hora: string; msgs: Msg[]; foto?: string }) {
  const [h, m] = hora.split(':').map(Number);
  let min = h * 60 + m - msgs.length;
  const prox = () => {
    min += 1;
    return `${String(Math.floor(min / 60) % 24).padStart(2, '0')}:${String(min % 60).padStart(2, '0')}`;
  };
  return (
    <div className="mx-auto w-full max-w-[340px] overflow-hidden rounded-[28px] border border-black/10 bg-[#EFE7DE] shadow-suave">
      <div className="flex items-center justify-between bg-[#F6F6F6] px-4 pb-1 pt-2 text-[12px] font-semibold">
        <span>{hora}</span>
        <span className="tracking-tight">▂▄▆ ◔ ▮</span>
      </div>
      <div className="flex items-center gap-2.5 border-b border-black/5 bg-[#F6F6F6] px-3 pb-2.5">
        <span className="text-[22px] leading-none text-[#1F7AE0]">‹</span>
        {foto ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={foto} alt="" className="h-9 w-9 rounded-full object-cover" />
        ) : (
          <span className="grid h-9 w-9 place-items-center rounded-full bg-gradient-to-br from-berry to-coral text-[15px] font-bold text-white">{nome[0]}</span>
        )}
        <span className="flex-1 leading-tight">
          <span className="block text-[15px] font-semibold">{nome}</span>
          <span className="block text-[12px] text-black/45">online</span>
        </span>
        <span className="text-[16px] text-[#1F7AE0]">📹 📞</span>
      </div>
      <div className="space-y-1.5 px-2.5 py-3 text-[14.5px] leading-snug">
        <p className="mx-auto mb-2 w-fit rounded-md bg-white/80 px-2 py-0.5 text-[11.5px] text-black/55">Hoje</p>
        {msgs.map((m, i) => {
          const eu = m.de === 'eu';
          return (
            <div key={i} className={`flex ${eu ? 'justify-end' : 'justify-start'}`}>
              <div className={`relative max-w-[82%] rounded-xl px-2.5 py-1.5 shadow-[0_1px_0_rgba(0,0,0,.08)] ${eu ? 'rounded-tr-sm bg-[#D9FDD3]' : 'rounded-tl-sm bg-white'}`}>
                {m.foto ? (
                  <div className="-mx-1 -mt-0.5 mb-1 overflow-hidden rounded-lg">
                    <div className="flex h-[150px] w-[210px] items-end justify-center gap-0.5 bg-[radial-gradient(120%_90%_at_50%_100%,#FFE7B0,#FFF2D6_50%,#FEF7EE)] pb-2">
                      {imagens.sabores.slice(0, 4).map((s, k) => (
                        <Geladinho key={k} cor={s.cor} pedaco={s.pedaco} inclinado={(k - 1.5) * 7} className="-mx-1 h-[88%] w-auto drop-shadow-md" />
                      ))}
                    </div>
                  </div>
                ) : (
                  <span>{m.t}</span>
                )}
                <span className={`ml-2 inline-block translate-y-1 text-[10.5px] ${eu ? 'text-[#53BDEB]' : 'text-black/40'}`}>
                  <span className="text-black/40">{prox()}</span>
                  {eu && ' ✓✓'}
                </span>
              </div>
            </div>
          );
        })}
      </div>
      <div className="flex items-center gap-2 bg-[#F6F6F6] px-3 py-2">
        <span className="flex-1 rounded-full bg-white px-3 py-1.5 text-[13px] text-black/35">Mensagem</span>
        <span className="grid h-8 w-8 place-items-center rounded-full bg-[#25D366] text-[14px] text-white">🎤</span>
      </div>
    </div>
  );
}
