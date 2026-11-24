'use client';

import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { ArrowLeft, Check, Lock, ShieldCheck, TriangleAlert } from 'lucide-react';
import { APRENDE, BONUS, comentarios, contas, conversas, especialista, garantiaDias, imagens, marca, parcelas, preco, precoDe } from '@/config/oferta';
import { destinoCheckout, track } from '@/lib/tracking';
import { checkout } from '@/config/oferta';
import { Foto, Geladinho } from './Geladinho';
import { Whats } from './Whats';

const PASSOS = ['abertura', 'tempo', 'desafio', 'facil', 'custo', 'prova', 'carregando', 'oferta'] as const;
type Passo = (typeof PASSOS)[number];
const PROGRESSO: Record<Passo, number> = { abertura: 0, tempo: 18, desafio: 34, facil: 50, custo: 64, prova: 78, carregando: 90, oferta: 97 };

const TEMPO = [
  { id: 'livre', e: '🙌', t: 'Tenho bastante tempo livre' },
  { id: '3h', e: '😬', t: 'Cerca de 3 horas por dia' },
  { id: 'pouco', e: '🥺', t: 'Pouquíssimo tempo, pois já trabalho' },
];
const DESAFIO = [
  { id: 'receitas', e: '🍹', t: 'Aprender as receitas e acertar o ponto' },
  { id: 'base', e: '🧊', t: 'Preparar a base dos geladinhos' },
  { id: 'vender', e: '💲', t: 'Precificação e estratégias de venda' },
];
const FRASE_TEMPO: Record<string, string> = {
  livre: 'Com o seu tempo livre, em uma tarde você já faz o primeiro lote para vender.',
  '3h': 'Com 3 horas por dia dá para produzir e vender todos os dias do verão.',
  pouco: 'Perfeito para quem já trabalha: em 1 hora você prepara o estoque de vários dias, e o freezer faz o resto.',
};
const FRASE_DESAFIO: Record<string, string> = {
  receitas: 'Você disse que o seu maior desafio é **acertar as receitas e o ponto**. Por isso o treinamento começa pela Fórmula Drink que Congela, com medidas exatas e o ponto certo em cada receita.',
  base: 'Você disse que o seu maior desafio é **preparar a base**. O módulo Fórmula Drink que Congela mostra a base de cada tipo de geladinho, passo a passo, com as medidas certas.',
  vender: 'Você disse que o seu maior desafio é **precificar e vender**. Você vai receber o cálculo de custo e preço pronto e o Plano de 7 Dias para Começar a Vender.',
};

const brl = (n: number) => n.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL', minimumFractionDigits: n % 1 ? 2 : 0 });
const ler = (k: string) => {
  try {
    return sessionStorage.getItem(k);
  } catch {
    return null;
  }
};
const gravar = (k: string, v: string) => {
  try {
    sessionStorage.setItem(k, v);
  } catch {
    /* modo privado */
  }
};

/** Texto com trechos **em negrito**. */
const Rico = ({ t, forte = 'font-bold' }: { t: string; forte?: string }) => (
  <>{t.split('**').map((p, i) => (i % 2 ? <b key={i} className={forte}>{p}</b> : <span key={i}>{p}</span>))}</>
);

/* ------------------------------------------------------------------ */

export function Funil() {
  const [passo, setPasso] = useState<Passo>('abertura');
  const [resp, setResp] = useState<{ tempo?: string; desafio?: string }>({});
  // A primeira tela aparece sem animação (pinta na hora, melhor para a velocidade); as trocas de etapa são animadas.
  const [animar, setAnimar] = useState(false);
  const topo = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const r = ler('gd:resp');
    if (r) setResp(JSON.parse(r));
    // Cada etapa fica marcada no endereço (#tempo, #oferta…): o botão voltar do celular volta uma etapa.
    const doEndereco = (): Passo => {
      const h = location.hash.slice(1) as Passo;
      if (!PASSOS.includes(h)) return 'abertura';
      return h === 'carregando' ? 'prova' : h;
    };
    const salvo = ler('gd:passo') as Passo | null;
    const inicial = location.hash ? doEndereco() : salvo && PASSOS.includes(salvo) && salvo !== 'carregando' ? salvo : 'abertura';
    setPasso(inicial);
    if (inicial !== 'abertura' && location.hash.slice(1) !== inicial) history.replaceState(history.state, '', `#${inicial}`);
    const voltar = () => {
      const p = doEndereco();
      setAnimar(true);
      setPasso(p);
      gravar('gd:passo', p);
      scrollTo({ top: 0 });
    };
    addEventListener('popstate', voltar);
    addEventListener('hashchange', voltar);
    return () => {
      removeEventListener('popstate', voltar);
      removeEventListener('hashchange', voltar);
    };
  }, []);

  const ir = useCallback((p: Passo, substituir = false) => {
    setAnimar(true);
    setPasso(p);
    gravar('gd:passo', p);
    const url = p === 'abertura' ? location.pathname + location.search : `#${p}`;
    if (substituir) history.replaceState(history.state, '', url);
    else history.pushState(history.state, '', url);
    scrollTo({ top: 0 });
  }, []);

  const responder = (campo: 'tempo' | 'desafio', v: string, prox: Passo) => {
    const novo = { ...resp, [campo]: v };
    setResp(novo);
    gravar('gd:resp', JSON.stringify(novo));
    setTimeout(() => ir(prox), 320);
  };

  return (
    <div ref={topo} className="min-h-dvh pb-10">
      {passo !== 'abertura' && (
        <div className="sticky top-0 z-30 bg-creme/95 pb-2 pt-3 backdrop-blur-[2px]">
          <div className="wrap flex items-center gap-3">
            <button type="button" aria-label="Voltar" onClick={() => history.back()} className="-ml-1 grid h-9 w-9 place-items-center rounded-full text-coral">
              <ArrowLeft size={21} />
            </button>
            <div className="h-2.5 flex-1 overflow-hidden rounded-full bg-limao-claro">
              <div className="h-full rounded-full bg-limao transition-[width] duration-700 ease-out" style={{ width: `${PROGRESSO[passo]}%` }} />
            </div>
            <span className="w-9" />
          </div>
        </div>
      )}

      <div key={passo} className={animar ? 'animate-entra' : ''}>
        {passo === 'abertura' && <Abertura seguir={() => ir('tempo')} />}
        {passo === 'tempo' && <Pergunta titulo="Quanto tempo você tem disponível para aprender?" opcoes={TEMPO} valor={resp.tempo} escolher={(v) => responder('tempo', v, 'desafio')} />}
        {passo === 'desafio' && (
          <Pergunta titulo="Qual o seu maior desafio para começar?" opcoes={DESAFIO} valor={resp.desafio} escolher={(v) => responder('desafio', v, 'facil')} rodape="Seu pacote será personalizado de acordo com as suas respostas!" />
        )}
        {passo === 'facil' && <Facil tempo={resp.tempo} seguir={() => ir('custo')} />}
        {passo === 'custo' && <Custo seguir={() => ir('prova')} />}
        {passo === 'prova' && <Prova seguir={() => ir('carregando')} />}
        {passo === 'carregando' && <Carregando fim={() => ir('oferta', true)} />}
        {passo === 'oferta' && <Oferta desafio={resp.desafio} />}
      </div>

      <p className="mt-10 text-center text-[11.5px] text-tinta/40">
        © {new Date().getFullYear()} {marca.nome} ·{' '}
        <a href="/termos" className="underline">
          Termos
        </a>{' '}
        ·{' '}
        <a href="/privacidade" className="underline">
          Privacidade
        </a>
      </p>
    </div>
  );
}

/* ------------------------------ ETAPAS ------------------------------ */

function Abertura({ seguir }: { seguir: () => void }) {
  return (
    <>
      <Cronometro />
      <div className="wrap pt-5">
        <h1 className="text-center font-display text-[30px] font-extrabold leading-[1.08] tracking-tight">
          {marca.curto} <span className="text-coral">Lucrativos</span> 🍹
        </h1>
        <p className="mt-2.5 text-center text-[17px] font-semibold leading-snug text-tinta/80">Aprenda a transformar drinks famosos em geladinhos gourmet e aproveite o verão para ganhar dinheiro 🏖️</p>

        <Foto src={imagens.abertura} alt="Geladinhos de drinks gourmet" sabores={imagens.sabores} className="mt-5 aspect-[4/5]" etiqueta="Caipirinha · Morango · Maracujá · Piña Colada" />

        <div className="texto mt-6 space-y-4">
          <p>
            Caipirinha, piña colada, mojito, morango com vodka… Os <b className="text-limao">geladinhos de drinks</b> são a novidade que todo mundo quer provar no calor: perfeitos para <b className="text-limao">praia, piscina, churrasco, festas e encomendas</b>.
          </p>
          <p>
            E eu vou te ensinar a fazer e vender esses geladinhos e faturar <span className="grana">até R$ 3.000 por mês</span> neste verão ✨
          </p>
          <p>
            <b>Mesmo começando do zero</b>, sem máquinas profissionais, sem abrir uma loja e usando o que você já tem na sua cozinha.
          </p>
        </div>

        <div className="mt-6 flex items-center gap-3 rounded-2xl bg-white/70 p-3.5 ring-1 ring-tinta/5">
          <Avatar />
          <p className="text-[15px] leading-snug">
            Sou a <b>{especialista.nome}</b> e foi com geladinhos de drinks que eu transformei o meu verão em uma <b>renda de verdade</b> 🍸
          </p>
        </div>

        <p className="texto mt-6 font-semibold">Alguns dos geladinhos que você vai aprender a fazer comigo:</p>
        <ul className="mt-3 space-y-2.5">
          {['Caipirinha de limão, maracujá e morango', 'Piña colada, mojito e Sex on the Beach', 'Geladinhos cremosos de drinks com leite condensado', 'Versões com frutas vermelhas, coco e abacaxi com hortelã', 'E ainda: sabores sem álcool para vender para todo mundo'].map((t) => (
            <li key={t} className="flex gap-2.5 text-[16px]">
              <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-md bg-dinheiro text-white">
                <Check size={14} strokeWidth={3.5} />
              </span>
              {t}
            </li>
          ))}
        </ul>

        <p className="texto mt-6 text-center font-semibold">Clique no botão abaixo e comece ainda hoje, com acesso vitalício! 👇</p>
        <button type="button" onClick={seguir} className="btn-verde btn-brilho mt-4 animate-pulso">
          Quero aprender agora 🍹
        </button>
      </div>
    </>
  );
}

function Pergunta({ titulo, opcoes, valor, escolher, rodape }: { titulo: string; opcoes: { id: string; e: string; t: string }[]; valor?: string; escolher: (v: string) => void; rodape?: string }) {
  const [sel, setSel] = useState(valor);
  return (
    <div className="wrap pt-6">
      <h2 className="text-center font-display text-[23px] font-extrabold leading-tight">{titulo}</h2>
      <div className="mt-6 space-y-3">
        {opcoes.map((o, i) => (
          <button
            key={o.id}
            type="button"
            data-on={sel === o.id ? '1' : '0'}
            onClick={() => {
              setSel(o.id);
              escolher(o.id);
            }}
            className="opcao animate-entra"
            style={{ animationDelay: `${i * 70}ms` }}
          >
            <span className="text-[30px] leading-none">{o.e}</span>
            <span className="flex-1">{o.t}</span>
            <span className={`grid h-7 w-7 shrink-0 place-items-center rounded-full border-2 transition ${sel === o.id ? 'border-limao bg-limao text-white' : 'border-limao/40 text-limao'}`}>
              {sel === o.id ? <Check size={16} strokeWidth={3.5} /> : '›'}
            </span>
          </button>
        ))}
      </div>
      {rodape && <p className="mt-5 text-center text-[13.5px] text-tinta/60">{rodape}</p>}
    </div>
  );
}

function Facil({ tempo, seguir }: { tempo?: string; seguir: () => void }) {
  return (
    <div className="wrap pt-4">
      <h2 className="text-center font-display text-[25px] font-extrabold leading-tight">As receitas são fáceis para iniciantes?</h2>
      <p className="mt-1.5 text-center text-[18px]">
        A resposta é <b className="text-dinheiro">SIM!</b>
      </p>
      <Foto src={imagens.facil} alt="Preparando geladinhos de drinks em casa" sabores={imagens.sabores.slice(1)} className="mt-5 aspect-[4/5]" />
      <div className="texto mt-6 space-y-4">
        <p>
          Você <b>não precisa ter experiência</b> com confeitaria nem comprar equipamentos caros. As receitas são explicadas passo a passo, com medidas exatas, para você acertar <b>logo no primeiro lote</b>.
        </p>
        {tempo && FRASE_TEMPO[tempo] && <p className="rounded-2xl bg-maracuja-claro p-4 text-[15.5px] font-semibold">⏱️ {FRASE_TEMPO[tempo]}</p>}
        <p className="font-semibold">Você vai aprender:</p>
        <ul className="space-y-2.5">
          {['A proporção certa de bebida para o geladinho congelar firme', 'Geladinhos cremosos e de fruta, sem gelo grosso', 'Como encher, fechar e congelar os saquinhos sem vazar', 'Combinações de frutas e drinks que vendem mais', 'Como deixar o geladinho bonito, com cara de gourmet 🍸'].map((t) => (
            <li key={t} className="flex gap-2.5">
              <span className="text-dinheiro">✔</span>
              {t}
            </li>
          ))}
        </ul>
      </div>
      <button type="button" onClick={seguir} className="btn-coral mt-7">
        Quero fazer dinheiro na minha cozinha!
      </button>
    </div>
  );
}

function Custo({ seguir }: { seguir: () => void }) {
  const lucro = contas.precoVenda - contas.custoUnidade;
  const porDia = contas.precoVenda * contas.porDia;
  const mes = porDia * contas.dias;
  return (
    <div className="wrap pt-4">
      <h2 className="text-center font-display text-[25px] font-extrabold leading-tight">O custo é acessível para fazer?</h2>
      <p className="mt-1.5 text-center text-[18px]">
        A resposta <b className="text-dinheiro">TAMBÉM</b> é <b className="text-dinheiro">SIM!</b>
      </p>
      <Foto src={imagens.custo} alt="Ingredientes e materiais para fazer os geladinhos" sabores={imagens.sabores.slice(2).concat(imagens.sabores.slice(0, 2))} className="mt-5 aspect-[4/5]" />
      <div className="texto mt-6 space-y-3.5">
        <p>
          🍋 <b>Frutas, sucos e leite condensado</b> – cerca de <b className="text-dinheiro">R$ 20 a R$ 35</b>
        </p>
        <p>
          🍸 <b>Bebida (cachaça, vodka ou rum)</b> – uma garrafa rende dezenas de geladinhos – <b className="text-dinheiro">R$ 15 a R$ 30</b>
        </p>
        <p>
          🛍️ <b>Saquinhos e funil</b> – cerca de <b className="text-dinheiro">R$ 8</b>
        </p>
      </div>

      <div className="mt-6 overflow-hidden rounded-3xl bg-white shadow-suave ring-1 ring-tinta/5">
        <p className="bg-tinta px-4 py-2.5 text-center font-display text-[14px] font-bold uppercase tracking-wider text-maracuja">Faça as contas comigo 🧮</p>
        <div className="divide-y divide-tinta/10 px-4">
          <Linha a="Custo de cada geladinho" b={`≈ ${brl(contas.custoUnidade)}`} />
          <Linha a="Preço de venda" b={brl(contas.precoVenda)} />
          <Linha a="Lucro por geladinho" b={brl(lucro)} verde />
          <Linha a={`Vendendo ${contas.porDia} por dia`} b={`${brl(porDia)} por dia`} />
        </div>
        <div className="bg-limao-claro px-4 py-3.5 text-center">
          <p className="text-[14px] text-tinta/70">No mês, isso dá</p>
          <p className="font-display text-[30px] font-extrabold leading-tight text-dinheiro">{brl(mes)}</p>
          <p className="text-[12.5px] text-tinta/55">de faturamento, com um único freezer de casa</p>
        </div>
      </div>

      <p className="texto mt-6">
        Com menos de <b>R$ 70 em ingredientes</b>, você já faz o primeiro lote e começa a vender por encomenda 💸
      </p>
      <p className="texto mt-3">
        E o melhor: dá para produzir <b>na sua própria cozinha</b>, com utensílios que você já tem em casa. 🍹
      </p>
      <button type="button" onClick={seguir} className="btn-verde mt-7">
        Continuar
      </button>
    </div>
  );
}

function Prova({ seguir }: { seguir: () => void }) {
  return (
    <div className="pt-4">
      <div className="wrap">
        <h2 className="text-center font-display text-[25px] font-extrabold leading-tight text-coral">Veja algumas mensagens das alunas da turma 1 💛</h2>
      </div>
      <Carrossel>
        {conversas.map((c) => (
          <div key={c.nome} className="w-[86%] max-w-[360px] shrink-0 snap-center">
            <Whats {...c} msgs={c.msgs as never} />
            <p className="mt-3 text-center text-[14.5px] text-tinta/70">Mensagem da aluna {c.nome}</p>
          </div>
        ))}
      </Carrossel>

      <div className="wrap mt-10">
        <h2 className="text-center font-display text-[24px] font-extrabold leading-tight">Agora, olha alguns geladinhos feitos pelos meus alunos 🥰</h2>
      </div>
      <Carrossel>
        {imagens.galeria.map((g, i) => (
          <figure key={g.aluno} className="w-[80%] max-w-[330px] shrink-0 snap-center overflow-hidden rounded-3xl bg-white shadow-suave ring-1 ring-tinta/5">
            <div className="relative">
              <Foto src={g.img} alt={g.legenda} sabores={[...imagens.sabores.slice(i), ...imagens.sabores.slice(0, i)]} className="aspect-square !rounded-none !shadow-none" />
              <div className="absolute bottom-3 left-3 flex items-center gap-2">
                <span className="grid h-14 w-14 place-items-center overflow-hidden rounded-full border-[3px] border-white bg-gradient-to-br from-coral to-morango text-[20px] font-bold text-white shadow">
                  {g.foto ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img src={g.foto} alt="" className="h-full w-full object-cover" />
                  ) : (
                    g.aluno.split(' ')[1][0]
                  )}
                </span>
                <span className="rounded-full bg-white/90 px-2.5 py-1 font-display text-[11.5px] font-extrabold uppercase tracking-wider">{g.aluno}</span>
              </div>
            </div>
            <figcaption className="py-3 text-center text-[15px]">{g.legenda}</figcaption>
          </figure>
        ))}
      </Carrossel>

      <div className="wrap mt-10 text-center">
        <h2 className="font-display text-[25px] font-extrabold leading-tight text-coral">Agora chegou a sua vez! 💫</h2>
        <p className="texto mt-3">
          Se você chegou até aqui, o principal você já tem: <b>vontade de fazer acontecer</b>. A maioria dos meus alunos começou do zero e hoje vende geladinhos com um <b className="text-dinheiro">alto valor percebido</b>.
        </p>
        <p className="texto mt-3 italic">Vem fazer parte do time, vou ficar muito feliz de ter você como aluna 👇</p>
        <button type="button" onClick={seguir} className="btn-coral btn-brilho mt-6 animate-pulso">
          Quero fazer dinheiro em casa!
        </button>
      </div>
    </div>
  );
}

function Carregando({ fim }: { fim: () => void }) {
  const [p, setP] = useState(0);
  const etapas = ['Analisando as suas respostas', 'Separando as receitas para iniciantes', 'Montando o seu plano de vendas de verão'];
  useEffect(() => {
    const t0 = performance.now();
    const DUR = 4200;
    let raf = 0;
    const loop = (t: number) => {
      const x = Math.min(1, (t - t0) / DUR);
      setP(Math.round(100 * (1 - Math.pow(1 - x, 2))));
      if (x < 1) raf = requestAnimationFrame(loop);
      else setTimeout(fim, 350);
    };
    raf = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(raf);
  }, [fim]);
  return (
    <div className="wrap pt-14 text-center">
      <div className="mx-auto flex h-28 items-end justify-center gap-1">
        {imagens.sabores.slice(0, 3).map((s, i) => (
          <Geladinho key={i} cor={s.cor} fruta={s.fruta} className="h-full w-auto animate-balanca" inclinado={(i - 1) * 8} />
        ))}
      </div>
      <h2 className="mt-6 font-display text-[23px] font-extrabold leading-tight">Você está a poucos instantes de começar a sua renda de verão!</h2>
      <div className="mt-7 h-4 overflow-hidden rounded-full bg-limao-claro">
        <div className="h-full rounded-full bg-gradient-to-r from-limao to-dinheiro" style={{ width: `${p}%` }} />
      </div>
      <p className="mt-2 font-display text-[22px] font-extrabold text-limao">{p}%</p>
      <ul className="mx-auto mt-5 max-w-[320px] space-y-2.5 text-left text-[15.5px]">
        {etapas.map((e, i) => {
          const ok = p >= (i + 1) * 30;
          return (
            <li key={e} className={`flex items-center gap-2.5 transition ${ok ? 'opacity-100' : 'opacity-40'}`}>
              <span className={`grid h-6 w-6 place-items-center rounded-full ${ok ? 'bg-dinheiro text-white' : 'border-2 border-tinta/20'}`}>{ok && <Check size={15} strokeWidth={3.5} />}</span>
              {e}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

/* ------------------------------ OFERTA ------------------------------ */

function Oferta({ desafio }: { desafio?: string }) {
  useEffect(() => {
    track('ViewContent', { content_name: marca.nome, value: preco, currency: 'BRL' });
  }, []);
  return (
    <div>
      <Confete />
      <div className="wrap space-y-4 pt-3">
        <Cronometro compacto />
        <div className="animate-pop rounded-3xl bg-limao-claro p-5 text-center ring-1 ring-limao/20">
          <p className="font-display text-[24px] font-extrabold text-dinheiro">Parabéns! 🎉</p>
          <p className="mt-1 font-display text-[19px] font-bold leading-snug">
            Você está qualificada para participar do treinamento: <span className="rounded bg-limao px-1.5 text-white [box-decoration-break:clone]">{marca.nome} 🍹</span>
          </p>
        </div>

        {desafio && FRASE_DESAFIO[desafio] && (
          <p className="rounded-2xl bg-maracuja-claro p-4 text-[15.5px] leading-relaxed">
            🎯 <Rico t={FRASE_DESAFIO[desafio]} />
          </p>
        )}

        <div className="rounded-3xl bg-white p-5 shadow-suave ring-1 ring-tinta/5">
          <h2 className="text-center font-display text-[21px] font-extrabold leading-tight">Veja tudo o que você vai aprender comigo:</h2>
          <ul className="mt-4 space-y-3">
            {APRENDE.map((t) => (
              <li key={t} className="flex gap-2.5 text-[15.5px] leading-snug">
                <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-md bg-dinheiro text-white">
                  <Check size={14} strokeWidth={3.5} />
                </span>
                <span>
                  <Rico t={t} />
                </span>
              </li>
            ))}
          </ul>
          <p className="mt-4 rounded-2xl bg-creme p-3 text-center text-[14px] text-tinta/70">
            Tudo com o <b className="text-tinta">{marca.metodo}</b>: Fórmula Drink que Congela → Geladinho de Vitrine → Plano Primeiras Vendas.
          </p>
        </div>

        <div>
          <h2 className="text-center font-display text-[22px] font-extrabold leading-tight text-coral">🎁 Ganhe 4 BÔNUS grátis se garantir a sua vaga AGORA:</h2>
          <div className="mt-4 space-y-3">
            {BONUS.map((b, i) => (
              <p key={b.t} className="text-[15.5px] leading-snug">
                <span className="mr-1 rounded bg-morango-claro px-1.5 py-0.5 font-display text-[13px] font-extrabold text-morango">Bônus {i + 1}:</span> <b>{b.t}</b>: {b.d}
              </p>
            ))}
          </div>
        </div>

        <CardPreco />

        <h2 className="pt-4 text-center font-display text-[22px] font-extrabold leading-tight">Veja alguns dos sabores que você vai aprender a fazer:</h2>
      </div>
      <Carrossel>
        {imagens.sabores.map((s, i) => (
          <figure key={s.nome} className="w-[62%] max-w-[260px] shrink-0 snap-center">
            <Foto src={s.img} alt={`Geladinho de ${s.nome}`} sabores={[s, s, s]} className="aspect-[4/5]" />
            <figcaption className="mt-2 text-center font-display text-[15px] font-bold">
              {i + 1}. {s.nome}
            </figcaption>
          </figure>
        ))}
      </Carrossel>

      <div className="wrap space-y-6 pt-2">
        <CardPreco titulo="Última turma com valor promocional!" />

        <div className="text-center">
          <h2 className="font-display text-[22px] font-extrabold text-coral">Comunidade {marca.curto}</h2>
          <p className="mt-1.5 text-[15.5px]">
            <b className="text-dinheiro">98%</b> dos alunos indicam o treinamento para amigos e conhecidos.
          </p>
        </div>
        <div className="space-y-3">
          {comentarios.map((c) => (
            <div key={c.nome} className="rounded-2xl bg-white p-4 shadow-suave ring-1 ring-tinta/5">
              <p className="text-[14px] tracking-widest text-maracuja">★★★★★</p>
              <p className="font-display text-[15px] font-bold text-coral">{c.nome}</p>
              <p className="text-[12.5px] text-tinta/45">{c.user}</p>
              <p className="mt-1.5 text-[15px] leading-snug">{c.t}</p>
            </div>
          ))}
        </div>

        <div className="rounded-3xl bg-white p-5 text-center shadow-suave ring-1 ring-tinta/5">
          <ShieldCheck size={44} className="mx-auto text-dinheiro" />
          <p className="mt-2 font-display text-[22px] font-extrabold text-coral">Garantia de {garantiaDias} dias</p>
          <p className="mt-1.5 text-[15px] leading-relaxed text-tinta/75">
            Compra 100% segura. Se não gostar por qualquer motivo, é só pedir dentro de {garantiaDias} dias e devolvemos <b className="text-tinta">todo o seu dinheiro</b>.
          </p>
          <p className="mt-2 font-display text-[16px] font-bold">Experimente sem riscos!</p>
        </div>

        <CardPreco titulo="Última turma com valor promocional!" />

        <div className="overflow-hidden rounded-3xl bg-white shadow-suave ring-1 ring-tinta/5">
          {especialista.foto ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img src={especialista.foto} alt={especialista.nome} className="aspect-[4/5] w-full object-cover" />
          ) : (
            <Foto alt={especialista.nome} sabores={imagens.sabores} className="aspect-[4/3] !rounded-none !shadow-none" etiqueta="foto da especialista" />
          )}
          <div className="p-5">
            <p className="text-center font-display text-[20px] font-extrabold">{especialista.nome}</p>
            <p className="text-center text-[14px] font-semibold text-coral">{especialista.papel}</p>
            <div className="mt-3 space-y-3 text-[15.5px] leading-relaxed">
              {especialista.historia.map((h) => (
                <p key={h}>{h}</p>
              ))}
            </div>
          </div>
        </div>

        <BotaoCompra />
      </div>
    </div>
  );
}

function CardPreco({ titulo }: { titulo?: string }) {
  return (
    <div className="space-y-3 pt-2">
      <p className="text-center text-[15.5px] font-semibold">
        Receba o acesso completo no seu <span className="text-dinheiro">e-mail</span>, na hora 📩
      </p>
      <div className="overflow-hidden rounded-2xl border-[3px] border-dinheiro bg-white">
        {titulo && <p className="bg-dinheiro py-1.5 text-center font-display text-[13.5px] font-bold text-white">{titulo}</p>}
        <div className="flex items-center gap-2.5 p-3 min-[380px]:gap-3 min-[380px]:p-4">
          <span className="grid h-5 w-5 shrink-0 place-items-center rounded-full border-2 border-dinheiro">
            <span className="h-2.5 w-2.5 rounded-full bg-dinheiro" />
          </span>
          <p className="min-w-0 flex-1 font-display text-[14.5px] font-extrabold leading-tight text-coral min-[380px]:text-[18px]">{marca.nome}</p>
          <div className="shrink-0 rounded-xl bg-creme px-2.5 py-2 text-right leading-tight">
            <p className="text-[12px] text-tinta/55">
              De <s>{brl(precoDe)}</s> por
            </p>
            <p className="font-display text-[22px] font-extrabold text-coral min-[380px]:text-[26px]">
              <span className="text-[14px]">R$</span> {preco}
            </p>
            <p className="text-[11px] text-tinta/55">{parcelas}</p>
          </div>
        </div>
      </div>
      <BotaoCompra />
      <Vagas />
      <p className="flex items-center justify-center gap-1.5 text-center text-[12.5px] text-tinta/55">
        <Lock size={13} className="shrink-0" /> Compra segura. Você pode testar por {garantiaDias} dias; se não gostar, devolvemos o seu dinheiro.
      </p>
    </div>
  );
}

function BotaoCompra() {
  return (
    <a
      href={checkout || '#'}
      onClick={(e) => {
        if (!checkout) return e.preventDefault();
        e.preventDefault();
        track('InitiateCheckout', { value: preco, currency: 'BRL', content_name: marca.nome });
        window.location.href = destinoCheckout(checkout, e.currentTarget.href);
      }}
      className="btn-azul btn-brilho animate-pulso"
    >
      Quero garantir minha vaga
    </a>
  );
}

/* --------------------------- PEÇAS COMUNS --------------------------- */

function Linha({ a, b, verde }: { a: string; b: string; verde?: boolean }) {
  return (
    <div className="flex items-center justify-between py-2.5 text-[15.5px]">
      <span className="text-tinta/75">{a}</span>
      <b className={verde ? 'text-dinheiro' : ''}>{b}</b>
    </div>
  );
}

function Avatar() {
  return especialista.foto ? (
    // eslint-disable-next-line @next/next/no-img-element
    <img src={especialista.foto} alt={especialista.nome} className="h-14 w-14 shrink-0 rounded-full object-cover ring-2 ring-coral" />
  ) : (
    <span className="grid h-14 w-14 shrink-0 place-items-center rounded-full bg-gradient-to-br from-coral to-morango font-display text-[20px] font-extrabold text-white ring-2 ring-coral/30">
      {especialista.nome
        .split(' ')
        .map((p) => p[0])
        .join('')}
    </span>
  );
}

function Carrossel({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  const [i, setI] = useState(0);
  const n = useMemo(() => (Array.isArray(children) ? children.length : 1), [children]);
  return (
    <div className="mt-5">
      <div
        ref={ref}
        onScroll={(e) => {
          const el = e.currentTarget;
          const w = (el.firstElementChild as HTMLElement)?.offsetWidth || 1;
          setI(Math.round(el.scrollLeft / (w + 16)));
        }}
        className="mx-auto flex max-w-[520px] snap-x snap-mandatory gap-4 overflow-x-auto px-[7%] pb-3 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {children}
      </div>
      {n > 1 && (
        <div className="mt-2 flex justify-center gap-1.5">
          {Array.from({ length: n }, (_, k) => (
            <span key={k} className={`h-2 rounded-full transition-all ${k === i ? 'w-5 bg-limao' : 'w-2 bg-tinta/20'}`} />
          ))}
        </div>
      )}
    </div>
  );
}

/** Contagem regressiva de 10 minutos, que não reinicia ao recarregar a página. */
function Cronometro({ compacto = false }: { compacto?: boolean }) {
  const [resta, setResta] = useState<number | null>(null);
  useEffect(() => {
    let fim = Number(localStorage.getItem('gd:fim') || 0);
    if (!fim || fim < Date.now() - 6 * 3600e3) {
      fim = Date.now() + 10 * 60e3;
      try {
        localStorage.setItem('gd:fim', String(fim));
      } catch {
        /* ignore */
      }
    }
    const tick = () => setResta(Math.max(0, fim - Date.now()));
    tick();
    const t = setInterval(tick, 1000);
    return () => clearInterval(t);
  }, []);
  const mm = resta === null ? '10' : String(Math.floor(resta / 60e3)).padStart(2, '0');
  const ss = resta === null ? '00' : String(Math.floor((resta % 60e3) / 1e3)).padStart(2, '0');
  if (compacto)
    return (
      <p className="rounded-2xl border border-maracuja bg-maracuja-claro py-3 text-center font-display text-[16px] font-bold text-[#B7791F]">
        Promoção válida por: <span className="tabular-nums">{mm}:{ss}</span>
      </p>
    );
  return (
    <div className="bg-coral py-2 text-center font-display text-[13.5px] font-bold uppercase tracking-wide text-white">
      🔥 Oferta de verão por tempo limitado: <span className="tabular-nums">{mm}:{ss}</span>
    </div>
  );
}

/** Vagas que vão diminuindo devagar enquanto a pessoa está na página. */
function Vagas() {
  const [v, setV] = useState(9);
  useEffect(() => {
    const t0 = Number(ler('gd:vagas') || Date.now());
    gravar('gd:vagas', String(t0));
    const calc = () => setV(Math.max(3, 9 - Math.floor((Date.now() - t0) / 75e3)));
    calc();
    const t = setInterval(calc, 5000);
    return () => clearInterval(t);
  }, []);
  return (
    <p className="flex items-center justify-center gap-1.5 rounded-xl bg-[#EAF2FF] px-2 py-2 text-center text-[13.5px] text-[#2F7BF5]">
      <TriangleAlert size={15} className="shrink-0" />
      <span>
        Corra! Restam apenas <b>{v} vagas</b> nessa oferta
      </span>
    </p>
  );
}

function Confete() {
  const [ver, setVer] = useState(true);
  useEffect(() => {
    const t = setTimeout(() => setVer(false), 3200);
    return () => clearTimeout(t);
  }, []);
  if (!ver) return null;
  const cores = ['#EF5B34', '#FFC23A', '#4E8A2E', '#E8456B', '#2F7BF5'];
  return (
    <div className="pointer-events-none fixed inset-0 z-50 overflow-hidden" aria-hidden>
      {Array.from({ length: 36 }, (_, i) => (
        <span
          key={i}
          className="absolute top-0 block h-3 w-2 rounded-sm"
          style={{
            left: `${(i * 97) % 100}%`,
            background: cores[i % cores.length],
            animation: `confete ${1.8 + (i % 5) * 0.3}s ${(i % 7) * 0.08}s cubic-bezier(.3,.6,.4,1) forwards`,
          }}
        />
      ))}
    </div>
  );
}
