'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import {
  ArrowLeft,
  BadgeDollarSign,
  Briefcase,
  Check,
  ChefHat,
  ChevronRight,
  Citrus,
  Clock3,
  Gift,
  Lock,
  Package,
  ShieldCheck,
  Snowflake,
  Star,
  Sun,
  TriangleAlert,
  Wine,
  X,
} from 'lucide-react';
import { APRENDE, BONUS, avaliacoes, checkout, comentarios, contas, especialista, garantiaDias, imagens, marca, parcelas, preco, precoDe, prints } from '@/config/oferta';
import { destinoCheckout, track } from '@/lib/tracking';
import { Esteira } from './Esteira';
import { Livro } from './Livro';

const PASSOS = ['abertura', 'tempo', 'desafio', 'facil', 'custo', 'prova', 'carregando', 'oferta'] as const;
type Passo = (typeof PASSOS)[number];
const PROGRESSO: Record<Passo, number> = { abertura: 0, tempo: 16, desafio: 32, facil: 48, custo: 64, prova: 80, carregando: 92, oferta: 100 };

type Opcao = { id: string; Icone: typeof Sun; t: string; tom: string };
const TEMPO: Opcao[] = [
  { id: 'livre', Icone: Sun, t: 'Tenho bastante tempo livre', tom: 'bg-manga-claro text-[#B7791F]' },
  { id: '3h', Icone: Clock3, t: 'Cerca de 3 horas por dia', tom: 'bg-turquesa-claro text-turquesa' },
  { id: 'pouco', Icone: Briefcase, t: 'Pouquíssimo tempo, pois já trabalho', tom: 'bg-coral-claro text-coral-escuro' },
];
const DESAFIO: Opcao[] = [
  { id: 'receitas', Icone: ChefHat, t: 'Aprender as receitas e acertar o ponto', tom: 'bg-coral-claro text-coral-escuro' },
  { id: 'base', Icone: Snowflake, t: 'Preparar a base dos geladinhos', tom: 'bg-turquesa-claro text-turquesa' },
  { id: 'vender', Icone: BadgeDollarSign, t: 'Precificação e estratégias de venda', tom: 'bg-limao-claro text-limao-escuro' },
];
const FRASE_TEMPO: Record<string, string> = {
  livre: 'Com o seu tempo livre, em **uma tarde** você já faz o primeiro lote para vender.',
  '3h': 'Com 3 horas por dia dá para **produzir e vender todos os dias** do verão.',
  pouco: 'Perfeito para quem já trabalha: em **1 hora** você prepara o estoque de vários dias, e o freezer faz o resto.',
};
const FRASE_DESAFIO: Record<string, string> = {
  receitas: 'Você disse que o seu maior desafio é **acertar as receitas e o ponto**. Por isso o treinamento começa pela Fórmula Drink que Congela, com medidas exatas em cada receita.',
  base: 'Você disse que o seu maior desafio é **preparar a base**. O módulo Fórmula Drink que Congela mostra a base de cada tipo de geladinho, passo a passo.',
  vender: 'Você disse que o seu maior desafio é **precificar e vender**. Você recebe o cálculo de custo e preço pronto e o Plano de 7 Dias para Começar a Vender.',
};
const VALOR_BONUS = [47, 37, 27, 37];

const brl = (n: number) => n.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL', minimumFractionDigits: n % 1 ? 2 : 0 });
const milhar = (n: number) => n.toLocaleString('pt-BR');
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
const Rico = ({ t, forte = 'font-bold text-tinta' }: { t: string; forte?: string }) => (
  <>{t.split('**').map((p, i) => (i % 2 ? <b key={i} className={forte}>{p}</b> : <span key={i}>{p}</span>))}</>
);

const Estrelas = ({ tam = 16 }: { tam?: number }) => (
  <span className="inline-flex text-manga">
    {Array.from({ length: 5 }, (_, k) => (
      <Star key={k} size={tam} fill="currentColor" strokeWidth={0} />
    ))}
  </span>
);

/* ================================================================== */

export function Funil() {
  const [passo, setPasso] = useState<Passo>('abertura');
  const [resp, setResp] = useState<{ tempo?: string; desafio?: string }>({});
  const [animar, setAnimar] = useState(false);
  const [saida, setSaida] = useState(false);
  const passoRef = useRef<Passo>('abertura');
  passoRef.current = passo;

  /** Pop-up de saída: uma vez por sessão, só na oferta. */
  const tentarSaida = useCallback(() => {
    if (ler('gd:saida')) return false;
    gravar('gd:saida', '1');
    setSaida(true);
    return true;
  }, []);

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
      // Na oferta, o primeiro "voltar" abre o pop-up em vez de sair.
      if (passoRef.current === 'oferta' && tentarSaida()) {
        history.pushState(history.state, '', '#oferta');
        return;
      }
      const p = doEndereco();
      setAnimar(true);
      setPasso(p);
      gravar('gd:passo', p);
      scrollTo({ top: 0 });
    };
    // No computador: mouse saindo pelo topo da janela.
    const fora = (e: MouseEvent) => {
      if (passoRef.current === 'oferta' && !e.relatedTarget && e.clientY <= 0) tentarSaida();
    };
    addEventListener('popstate', voltar);
    document.addEventListener('mouseout', fora);
    return () => {
      removeEventListener('popstate', voltar);
      document.removeEventListener('mouseout', fora);
    };
  }, [tentarSaida]);

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
    setTimeout(() => ir(prox), 360);
  };

  const irOferta = useCallback(() => ir('oferta', true), [ir]);

  return (
    <div className="relative flex min-h-dvh flex-col overflow-x-clip">
      {passo !== 'abertura' && passo !== 'carregando' && <Topo passo={passo} />}

      <div key={passo} className={`flex-1 ${animar ? 'animate-entra' : ''}`}>
        {passo === 'abertura' && <Abertura seguir={() => ir('tempo')} />}
        {passo === 'tempo' && <Pergunta etapa="Pergunta 1 de 2" titulo="Quanto tempo você tem disponível para aprender?" opcoes={TEMPO} valor={resp.tempo} escolher={(v) => responder('tempo', v, 'desafio')} />}
        {passo === 'desafio' && (
          <Pergunta etapa="Pergunta 2 de 2" titulo="Qual o seu maior desafio para começar?" opcoes={DESAFIO} valor={resp.desafio} escolher={(v) => responder('desafio', v, 'facil')} rodape="O seu pacote será personalizado de acordo com as suas respostas." />
        )}
        {passo === 'facil' && <Facil tempo={resp.tempo} seguir={() => ir('custo')} />}
        {passo === 'custo' && <Custo seguir={() => ir('prova')} />}
        {passo === 'prova' && <Prova seguir={() => ir('carregando')} />}
        {passo === 'carregando' && <Carregando fim={irOferta} />}
        {passo === 'oferta' && <Oferta desafio={resp.desafio} />}
      </div>

      {saida && <PopupSaida fechar={() => setSaida(false)} />}
      <Rodape />
    </div>
  );
}

/* ============================== ETAPAS ============================== */

function Topo({ passo }: { passo: Passo }) {
  return (
    <div className="sticky top-0 z-30 border-b border-tinta/[.06] bg-coco/90 backdrop-blur-md">
      <div className="wrap flex h-[56px] items-center gap-3">
        <button type="button" aria-label="Voltar" onClick={() => history.back()} className="-ml-1.5 grid h-10 w-10 shrink-0 place-items-center rounded-full text-tinta/70 transition hover:bg-tinta/5">
          <ArrowLeft size={21} />
        </button>
        <div className="relative h-2 flex-1 overflow-hidden rounded-full bg-tinta/[.08]">
          <div className="absolute inset-y-0 left-0 rounded-full bg-gradient-to-r from-turquesa via-[#2FA38D] to-limao transition-[width] duration-700 ease-out" style={{ width: `${PROGRESSO[passo]}%` }} />
        </div>
        <Image src={imagens.icone} alt={marca.nome} width={64} height={64} className="h-9 w-9 shrink-0 rounded-[10px] shadow-sm ring-1 ring-tinta/5" />
      </div>
    </div>
  );
}

function Titulo({ rotulo, children }: { rotulo?: string; children: React.ReactNode }) {
  return (
    <div className="text-center">
      {rotulo && <p className="font-display text-[12.5px] font-semibold uppercase tracking-[.18em] text-coral">{rotulo}</p>}
      <h2 className="mt-2 text-[26px] font-extrabold leading-[1.12] tracking-[-.02em]">{children}</h2>
    </div>
  );
}

function Abertura({ seguir }: { seguir: () => void }) {
  return (
    <>
      <Cronometro />
      <div className="wrap pt-5">
        <Image src={imagens.logo} alt={marca.nome} width={720} height={673} priority sizes="150px" className="mx-auto h-auto w-[132px]" />

        <h1 className="mt-4 text-center text-[29px] font-extrabold leading-[1.1] tracking-[-.025em] text-tinta min-[380px]:text-[31px]">
          Transforme drinks famosos em geladinhos gourmet e fature <span className="whitespace-nowrap text-dinheiro">até R$ 3.000</span> neste verão
        </h1>
        <div className="mt-3.5 flex items-center justify-center gap-2 text-[13.5px] text-tinta/65">
          <Estrelas tam={14} />
          <span>
            <b className="text-tinta">{avaliacoes.media}</b> · {milhar(avaliacoes.total)} avaliações
          </span>
        </div>

        <Image src={imagens.abertura} alt="Geladinhos de Drinks Lucrativos: treinamento com 30 receitas" width={900} height={1125} priority sizes="(max-width:480px) 92vw, 430px" className="mt-6 h-auto w-full rounded-[22px] shadow-suave ring-1 ring-tinta/[.06]" />

        <div className="texto mt-7 space-y-4">
          <p>
            Caipirinha, piña colada, mojito, morango com vodka… Os <b className="text-turquesa">geladinhos de drinks</b> são a novidade que todo mundo quer provar no calor, e vendem fácil na <b className="text-tinta">praia, na piscina, no condomínio, em festas e por encomenda</b>.
          </p>
          <p>
            Eu vou te ensinar a fazer, montar o seu cardápio e vender esses geladinhos para faturar <span className="grana">até R$ 3.000 por mês</span> neste verão.
          </p>
          <p>
            <b className="text-tinta">Mesmo começando do zero</b>, sem máquina profissional, sem abrir loja e usando o que você já tem na sua cozinha.
          </p>
        </div>

        <div className="card mt-7 flex items-center gap-3.5 p-4">
          <Image src={especialista.avatar} alt={especialista.nome} width={120} height={120} className="h-14 w-14 shrink-0 rounded-full object-cover ring-[3px] ring-coral/25" />
          <p className="text-[15px] leading-snug text-tinta/80">
            Sou a <b className="text-tinta">{especialista.nome}</b>. Foi com geladinhos de drinks que eu transformei o meu verão em uma <b className="text-tinta">renda de verdade</b>, e agora eu te mostro o caminho.
          </p>
        </div>

        <p className="mt-9 font-display text-[19px] font-bold leading-snug">Alguns dos sabores que você vai aprender:</p>
        <div className="mt-3.5 grid grid-cols-2 gap-2.5">
          {imagens.sabores.slice(0, 6).map((s) => (
            <div key={s.nome} className="flex items-center gap-2.5 rounded-2xl bg-white p-1.5 pr-2.5 shadow-cartao ring-1 ring-tinta/[.05]">
              <Image src={s.img} alt="" width={120} height={150} className="h-12 w-12 shrink-0 rounded-xl object-cover object-[50%_35%]" />
              <span className="text-[13.5px] font-semibold leading-tight">{s.nome}</span>
            </div>
          ))}
        </div>
        <p className="mt-3 text-center text-[13.5px] text-tinta/55">+ 24 receitas, incluindo versões cremosas e sem álcool</p>

        <div className="mt-8">
          <button type="button" onClick={seguir} className="btn-coral btn-brilho animate-pulso">
            Quero aprender agora <ChevronRight size={22} strokeWidth={2.6} />
          </button>
          <p className="mt-3 text-center text-[13px] text-tinta/50">Leva menos de 1 minuto · acesso vitalício</p>
        </div>
      </div>
    </>
  );
}

function Pergunta({ etapa, titulo, opcoes, valor, escolher, rodape }: { etapa: string; titulo: string; opcoes: Opcao[]; valor?: string; escolher: (v: string) => void; rodape?: string }) {
  const [sel, setSel] = useState(valor);
  return (
    <div className="wrap pt-8">
      <Titulo rotulo={etapa}>{titulo}</Titulo>
      <div className="mt-7 space-y-3">
        {opcoes.map((o, i) => {
          const on = sel === o.id;
          return (
            <button
              key={o.id}
              type="button"
              data-on={on ? '1' : '0'}
              onClick={() => {
                setSel(o.id);
                escolher(o.id);
              }}
              className="opcao animate-entra"
              style={{ animationDelay: `${80 + i * 70}ms` }}
            >
              <span className={`grid h-11 w-11 shrink-0 place-items-center rounded-[13px] ${o.tom}`}>
                <o.Icone size={21} strokeWidth={2.2} />
              </span>
              <span className="flex-1 leading-snug">{o.t}</span>
              <span className={`grid h-7 w-7 shrink-0 place-items-center rounded-full border-[1.5px] transition duration-200 ${on ? 'scale-110 border-turquesa bg-turquesa text-white' : 'border-tinta/15 text-tinta/35'}`}>
                {on ? <Check size={16} strokeWidth={3.2} /> : <ChevronRight size={15} strokeWidth={2.6} />}
              </span>
            </button>
          );
        })}
      </div>
      {rodape && <p className="mt-6 text-center text-[13.5px] text-tinta/55">{rodape}</p>}
    </div>
  );
}

function Sim({ titulo, tambem = false }: { titulo: string; tambem?: boolean }) {
  return (
    <div className="text-center">
      <h2 className="text-[26px] font-extrabold leading-[1.12] tracking-[-.02em]">{titulo}</h2>
      <p className="mt-3 text-[15.5px] text-tinta/65">A resposta {tambem ? 'também ' : ''}é</p>
      <span className="selo-sim mt-1.5 animate-pop">
        <Check size={18} strokeWidth={3.2} /> SIM!
      </span>
    </div>
  );
}

function Lista({ itens }: { itens: string[] }) {
  return (
    <ul className="space-y-2.5">
      {itens.map((t) => (
        <li key={t} className="flex gap-3 text-[15.5px] leading-snug text-tinta/85">
          <span className="mt-0.5 grid h-[22px] w-[22px] shrink-0 place-items-center rounded-full bg-limao-claro text-limao-escuro ring-1 ring-limao/40">
            <Check size={13} strokeWidth={3.4} />
          </span>
          <span>
            <Rico t={t} />
          </span>
        </li>
      ))}
    </ul>
  );
}

function Foto({ src, alt, prioridade = false }: { src: string; alt: string; prioridade?: boolean }) {
  return <Image src={src} alt={alt} width={800} height={993} priority={prioridade} sizes="(max-width:480px) 92vw, 430px" className="mt-6 h-auto w-full rounded-[22px] shadow-suave ring-1 ring-tinta/[.06]" />;
}

function Facil({ tempo, seguir }: { tempo?: string; seguir: () => void }) {
  return (
    <div className="wrap pt-7">
      <Sim titulo="As receitas são fáceis para iniciantes?" />
      <Foto src={imagens.facil} alt="Bruna preparando geladinhos de drinks na cozinha" prioridade />
      <div className="texto mt-7 space-y-5">
        <p>
          Você <b className="text-tinta">não precisa ter experiência</b> com confeitaria nem comprar equipamento caro. Cada receita tem medidas exatas e passo a passo, para você acertar <b className="text-tinta">logo no primeiro lote</b>.
        </p>
        {tempo && FRASE_TEMPO[tempo] && (
          <div className="flex gap-3 rounded-2xl bg-turquesa-claro p-4 ring-1 ring-turquesa/15">
            <Clock3 size={20} className="mt-0.5 shrink-0 text-turquesa" />
            <p className="text-[15.5px] leading-relaxed">
              <Rico t={FRASE_TEMPO[tempo]} />
            </p>
          </div>
        )}
        <p className="font-display text-[18px] font-bold text-tinta">Você vai aprender:</p>
        <Lista itens={['A **proporção certa de bebida** para o geladinho congelar firme', 'Geladinhos **cremosos** e de fruta, sem gelo grosso', 'Como encher, fechar e congelar **sem vazar**', 'As combinações de fruta e drink que **mais vendem**', 'Como deixar o geladinho com **cara de gourmet**']} />
      </div>
      <button type="button" onClick={seguir} className="btn-coral mt-8">
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
    <div className="wrap pt-7">
      <Sim titulo="O custo é acessível para fazer?" tambem />
      <Foto src={imagens.custo} alt="Ingredientes simples para fazer os geladinhos" prioridade />

      <div className="mt-7 space-y-2.5">
        {(
          [
            [Citrus, 'Frutas, sucos e leite condensado', 'R$ 20 a R$ 35', 'bg-limao-claro text-limao-escuro'],
            [Wine, 'Bebida (cachaça, vodka ou rum)', 'R$ 15 a R$ 30', 'bg-coral-claro text-coral-escuro'],
            [Package, 'Saquinhos e funil', 'cerca de R$ 8', 'bg-turquesa-claro text-turquesa'],
          ] as const
        ).map(([I, t, v, tom]) => (
          <div key={t} className="card flex items-center gap-3 px-3.5 py-3">
            <span className={`grid h-10 w-10 shrink-0 place-items-center rounded-xl ${tom}`}>
              <I size={19} />
            </span>
            <span className="flex-1 text-[14.5px] font-semibold leading-tight">{t}</span>
            <span className="whitespace-nowrap font-display text-[14.5px] font-bold text-dinheiro">{v}</span>
          </div>
        ))}
      </div>

      <div className="mt-6 overflow-hidden rounded-[24px] bg-white shadow-suave ring-1 ring-tinta/[.06]">
        <div className="bg-gradient-to-r from-turquesa to-[#127E78] px-5 py-3.5 text-white">
          <p className="font-display text-[17px] font-bold">Faça as contas comigo</p>
          <p className="text-[13px] text-white/75">com preços de mercado de um geladinho gourmet</p>
        </div>
        <div className="divide-y divide-tinta/[.07] px-5">
          <Linha a="Custo de cada geladinho" b={`≈ ${brl(contas.custoUnidade)}`} />
          <Linha a="Preço de venda" b={brl(contas.precoVenda)} />
          <Linha a="Lucro por geladinho" b={brl(lucro)} verde />
          <Linha a={`Vendendo ${contas.porDia} por dia`} b={`${brl(porDia)}/dia`} />
        </div>
        <div className="mx-3 mb-3 rounded-[18px] bg-limao-claro px-4 py-4 text-center ring-1 ring-limao/30">
          <p className="text-[13.5px] font-medium text-tinta/65">Em um mês de verão</p>
          <p className="font-display text-[38px] font-extrabold leading-none tracking-tight text-dinheiro">{brl(mes)}</p>
          <p className="mt-1 text-[12.5px] text-tinta/55">de faturamento, com o freezer da sua casa</p>
        </div>
      </div>

      <p className="texto mt-6">
        Com menos de <b className="text-tinta">R$ 70 em ingredientes</b> você já faz o primeiro lote e começa a vender por encomenda. E tudo é feito <b className="text-tinta">na sua própria cozinha</b>, com utensílios que você já tem.
      </p>
      <button type="button" onClick={seguir} className="btn-turquesa mt-8">
        Continuar <ChevronRight size={22} strokeWidth={2.6} />
      </button>
    </div>
  );
}

function Prova({ seguir }: { seguir: () => void }) {
  return (
    <div className="pt-7">
      <div className="wrap">
        <Titulo rotulo="Turma 1">O que as alunas estão me mandando</Titulo>
      </div>
      <div className="mx-auto mt-6 max-w-[620px]">
        <Esteira>
          {prints.map((p) => (
            <Image key={p.img} src={p.img} alt={`Conversa no WhatsApp com a aluna ${p.nome}`} width={640} height={1137} sizes="250px" className="h-auto w-[238px] shrink-0 rounded-[22px] shadow-suave ring-1 ring-tinta/10" />
          ))}
        </Esteira>
      </div>

      <div className="wrap mt-10">
        <Titulo rotulo="Na vida real">Geladinhos feitos por quem começou do zero</Titulo>
      </div>
      <Carrossel>
        {imagens.galeria.map((g) => (
          <figure key={g.aluno} className="w-[80%] max-w-[330px] shrink-0 snap-center overflow-hidden rounded-[24px] bg-white shadow-suave ring-1 ring-tinta/[.05]">
            <div className="relative">
              <Image src={g.img} alt={g.legenda} width={720} height={720} sizes="330px" className="aspect-square h-auto w-full object-cover" />
              <div className="absolute bottom-3 left-3 flex items-center gap-2.5">
                <Image src={g.foto} alt="" width={96} height={96} className="h-12 w-12 rounded-full border-[3px] border-white object-cover shadow-md" />
                <span className="rounded-full bg-white/95 px-3 py-1 font-display text-[12px] font-bold uppercase tracking-wider shadow-sm">{g.aluno}</span>
              </div>
            </div>
            <figcaption className="px-4 py-3.5 text-center text-[14.5px] font-medium leading-snug text-tinta/75">{g.legenda}</figcaption>
          </figure>
        ))}
      </Carrossel>

      <div className="wrap mt-10">
        <div className="rounded-[24px] bg-gradient-to-br from-turquesa to-[#0B5D5A] p-6 text-center text-white shadow-suave">
          <p className="font-display text-[23px] font-extrabold leading-tight">Agora é a sua vez</p>
          <p className="mt-3 text-[15.5px] leading-relaxed text-white/85">
            Se você chegou até aqui, o principal você já tem: <b className="text-white">vontade de fazer acontecer</b>. A maioria dos meus alunos começou do zero e hoje vende geladinhos com <b className="text-white">alto valor percebido</b>.
          </p>
          <p className="mt-3 text-[14.5px] italic text-white/70">Vem fazer parte do time, vou adorar ter você comigo.</p>
        </div>
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
    let t: ReturnType<typeof setTimeout>;
    const loop = (agora: number) => {
      const x = Math.min(1, (agora - t0) / DUR);
      setP(Math.round(100 * (1 - Math.pow(1 - x, 2))));
      if (x < 1) raf = requestAnimationFrame(loop);
      else t = setTimeout(fim, 400);
    };
    raf = requestAnimationFrame(loop);
    return () => {
      cancelAnimationFrame(raf);
      clearTimeout(t);
    };
  }, [fim]);
  const r = 54;
  const c = 2 * Math.PI * r;
  return (
    <div className="wrap flex min-h-[86dvh] flex-col items-center justify-center text-center">
      <div className="relative h-[150px] w-[150px]">
        <svg viewBox="0 0 128 128" className="h-full w-full -rotate-90">
          <circle cx="64" cy="64" r={r} fill="none" stroke="#123432" strokeOpacity=".08" strokeWidth="10" />
          <circle cx="64" cy="64" r={r} fill="none" stroke="url(#cg)" strokeWidth="10" strokeLinecap="round" strokeDasharray={c} strokeDashoffset={c * (1 - p / 100)} />
          <defs>
            <linearGradient id="cg" x1="0" x2="1">
              <stop offset="0" stopColor="#0D6F6B" />
              <stop offset="1" stopColor="#9ED43A" />
            </linearGradient>
          </defs>
        </svg>
        <span className="absolute inset-0 grid place-items-center font-display text-[34px] font-extrabold tabular-nums text-turquesa">{p}%</span>
      </div>
      <h2 className="mt-7 text-[23px] font-extrabold leading-[1.15] tracking-[-.02em]">Você está a poucos instantes de começar a sua renda de verão</h2>
      <ul className="mt-7 w-full max-w-[320px] space-y-3 text-left text-[15px]">
        {etapas.map((e, i) => {
          const ok = p >= (i + 1) * 30;
          return (
            <li key={e} className={`flex items-center gap-3 transition duration-300 ${ok ? 'opacity-100' : 'opacity-35'}`}>
              <span className={`grid h-6 w-6 shrink-0 place-items-center rounded-full transition ${ok ? 'bg-dinheiro text-white' : 'border-2 border-tinta/20'}`}>{ok && <Check size={14} strokeWidth={3.4} />}</span>
              {e}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

/* ============================== OFERTA ============================== */

/** Kit em livros: o treinamento na frente e os 4 bônus atrás, em leque. */
function Kit({ grande = true }: { grande?: boolean }) {
  const L = grande ? 168 : 112;
  const b = grande ? 98 : 64;
  return (
    <div className="relative mx-auto" style={{ width: grande ? 330 : 240, height: grande ? 250 : 170 }}>
      <div className="absolute inset-x-6 bottom-1 h-6 rounded-[50%] bg-tinta/20 blur-[10px]" />
      <Livro src={imagens.bonus[0]} alt="" largura={b} inclinar={10} className="absolute bottom-3 left-0 -rotate-[8deg]" />
      <Livro src={imagens.bonus[1]} alt="" largura={b} inclinar={10} className="absolute bottom-6 left-[13%] -rotate-[3deg]" />
      <Livro src={imagens.bonus[3]} alt="" largura={b} inclinar={-10} className="absolute bottom-3 right-0 rotate-[8deg]" />
      <Livro src={imagens.bonus[2]} alt="" largura={b} inclinar={-10} className="absolute bottom-6 right-[13%] rotate-[3deg]" />
      <Livro src={imagens.produto} alt={`${marca.nome}: treinamento completo`} largura={L} inclinar={-8} prioridade className="absolute bottom-0 left-1/2 -translate-x-1/2" />
    </div>
  );
}

function Oferta({ desafio }: { desafio?: string }) {
  useEffect(() => {
    track('ViewContent', { content_name: marca.nome, value: preco, currency: 'BRL' });
  }, []);
  return (
    <div>
      <Confete />
      <div className="wrap space-y-5 pt-4">
        <Cronometro compacto />

        <div className="animate-pop rounded-[24px] bg-gradient-to-br from-turquesa to-[#0B5D5A] px-5 py-6 text-center text-white shadow-suave">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-white/15 px-3 py-1 font-display text-[12px] font-semibold uppercase tracking-[.14em] text-manga">
            <Check size={14} strokeWidth={3} /> Perfil aprovado
          </span>
          <p className="mt-3 font-display text-[24px] font-extrabold leading-tight">Parabéns!</p>
          <p className="mt-1 text-[16px] leading-snug text-white/85">
            Você está qualificada para participar do treinamento <b className="text-white">{marca.nome}</b>
          </p>
        </div>

        {desafio && FRASE_DESAFIO[desafio] && (
          <div className="flex gap-3 rounded-2xl bg-manga-claro p-4 ring-1 ring-manga/40">
            <ChefHat size={20} className="mt-0.5 shrink-0 text-[#B7791F]" />
            <p className="text-[15px] leading-relaxed text-tinta/85">
              <Rico t={FRASE_DESAFIO[desafio]} />
            </p>
          </div>
        )}

        <div className="pt-2">
          <Kit />
          <p className="mt-3 text-center font-display text-[15px] font-semibold text-tinta/70">Treinamento completo + 4 bônus</p>
        </div>

        <div className="card p-5">
          <h2 className="text-[21px] font-extrabold leading-tight tracking-[-.02em]">Tudo o que você vai aprender comigo</h2>
          <div className="mt-4">
            <Lista itens={APRENDE} />
          </div>
          <div className="mt-5 grid grid-cols-3 gap-2 text-center">
            {[
              ['1', 'Fórmula Drink que Congela'],
              ['2', 'Geladinho de Vitrine'],
              ['3', 'Plano Primeiras Vendas'],
            ].map(([n, t]) => (
              <div key={n} className="rounded-2xl bg-turquesa-claro px-2 py-3">
                <p className="font-display text-[19px] font-extrabold text-turquesa">{n}</p>
                <p className="mt-0.5 text-[12px] font-semibold leading-tight">{t}</p>
              </div>
            ))}
          </div>
          <p className="mt-2.5 text-center text-[12.5px] text-tinta/50">as 3 etapas do {marca.metodo}</p>
        </div>

        <div>
          <h2 className="text-center text-[22px] font-extrabold leading-tight tracking-[-.02em]">
            <Gift size={22} className="-mt-1 mr-1.5 inline text-coral" />
            Ganhe <span className="text-coral">4 bônus grátis</span> garantindo a sua vaga agora
          </h2>
          <div className="mt-5 grid grid-cols-2 gap-3">
            {BONUS.map((b, i) => (
              <div key={b.t} className="card flex flex-col items-center p-3 pt-4 text-center">
                <Livro src={imagens.bonus[i]} alt={b.t} largura={104} inclinar={-12} />
                <p className="mt-3 font-display text-[11.5px] font-bold uppercase tracking-[.1em] text-coral">Bônus {i + 1}</p>
                <p className="mt-0.5 font-display text-[14.5px] font-bold leading-tight">{b.t}</p>
                <p className="mt-1.5 text-[12.5px] text-tinta/50">
                  <s>{brl(VALOR_BONUS[i])}</s> <b className="text-dinheiro">grátis</b>
                </p>
              </div>
            ))}
          </div>
        </div>

        <CardPreco />

        <Image src={imagens.cartazOferta} alt={`${marca.nome}: o que vem no treinamento`} width={900} height={1125} sizes="(max-width:480px) 92vw, 430px" className="h-auto w-full rounded-[22px] shadow-suave ring-1 ring-tinta/[.06]" />

        <div className="pt-4">
          <Titulo rotulo="30 receitas">Alguns dos sabores que você vai aprender</Titulo>
        </div>
      </div>
      <Carrossel>
        {imagens.sabores.map((s) => (
          <figure key={s.nome} className="w-[62%] max-w-[240px] shrink-0 snap-center">
            <Image src={s.img} alt={`Geladinho de ${s.nome}`} width={600} height={745} sizes="240px" className="h-auto w-full rounded-[20px] shadow-suave ring-1 ring-tinta/[.06]" />
            <figcaption className="mt-2.5 text-center font-display text-[15px] font-bold">{s.nome}</figcaption>
          </figure>
        ))}
      </Carrossel>

      <div className="wrap space-y-6 pt-4">
        <CardPreco titulo="Última turma com valor promocional" />

        <Avaliacoes />

        <div className="card flex items-center gap-4 p-5">
          <span className="grid h-16 w-16 shrink-0 place-items-center rounded-full bg-limao-claro text-limao-escuro ring-1 ring-limao/40">
            <ShieldCheck size={34} />
          </span>
          <div>
            <p className="font-display text-[19px] font-extrabold">Garantia de {garantiaDias} dias</p>
            <p className="mt-0.5 text-[14.5px] leading-relaxed text-tinta/70">Não gostou por qualquer motivo? É só pedir dentro do prazo e devolvemos todo o seu dinheiro. Sem riscos.</p>
          </div>
        </div>

        <CardPreco titulo="Última turma com valor promocional" />

        <div className="overflow-hidden rounded-[24px] bg-white shadow-suave ring-1 ring-tinta/[.05]">
          <Image src={especialista.foto} alt={especialista.nome} width={800} height={993} sizes="(max-width:480px) 92vw, 430px" className="h-auto w-full" />
          <div className="p-5">
            <p className="font-display text-[12.5px] font-semibold uppercase tracking-[.16em] text-coral">Quem vai te ensinar</p>
            <p className="mt-1 font-display text-[24px] font-extrabold leading-tight">{especialista.nome}</p>
            <p className="text-[14px] font-medium text-turquesa">{especialista.papel}</p>
            <div className="mt-4 space-y-3 text-[15.5px] leading-relaxed text-tinta/80">
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

function Avaliacoes() {
  const rotulos = ['5', '4', '3', '2', '1'];
  return (
    <div className="space-y-3 pt-3">
      <Titulo rotulo={`Comunidade ${marca.curto}`}>O que dizem as alunas</Titulo>
      <div className="card flex items-center gap-5 p-5">
        <div className="shrink-0 text-center">
          <p className="font-display text-[44px] font-extrabold leading-none tracking-tight">{avaliacoes.media}</p>
          <div className="mt-1.5">
            <Estrelas tam={15} />
          </div>
          <p className="mt-1 text-[12px] text-tinta/50">{milhar(avaliacoes.total)} avaliações</p>
        </div>
        <div className="flex-1 space-y-1.5">
          {avaliacoes.dist.map((v, i) => (
            <div key={i} className="flex items-center gap-2 text-[12px] text-tinta/55">
              <span className="w-3 text-right font-semibold">{rotulos[i]}</span>
              <Star size={11} className="text-manga" fill="currentColor" strokeWidth={0} />
              <div className="h-2 flex-1 overflow-hidden rounded-full bg-tinta/[.07]">
                <div className="h-full rounded-full bg-manga" style={{ width: `${Math.max(v, 1)}%` }} />
              </div>
              <span className="w-8 text-right tabular-nums">{v}%</span>
            </div>
          ))}
        </div>
      </div>
      {comentarios.map((c) => (
        <div key={c.nome} className="card p-4">
          <div className="flex items-center justify-between gap-3">
            <div className="min-w-0">
              <p className="font-display text-[15px] font-bold">{c.nome}</p>
              <p className="text-[12.5px] text-tinta/45">{c.user}</p>
            </div>
            <Estrelas tam={14} />
          </div>
          <p className="mt-2 text-[15px] leading-relaxed text-tinta/80">{c.t}</p>
        </div>
      ))}
    </div>
  );
}

function CardPreco({ titulo }: { titulo?: string }) {
  return (
    <div className="space-y-3 pt-2">
      <div className="overflow-hidden rounded-[22px] bg-white shadow-suave ring-2 ring-turquesa">
        {titulo && <p className="bg-turquesa py-2 text-center font-display text-[13px] font-semibold uppercase tracking-[.1em] text-white">{titulo}</p>}
        <div className="flex items-center gap-3.5 p-4">
          <Image src={imagens.produto} alt="" width={160} height={200} className="h-[70px] w-[56px] shrink-0 rounded-[6px] object-cover shadow-md ring-1 ring-tinta/10" />
          <div className="min-w-0 flex-1">
            <p className="font-display text-[16px] font-bold leading-tight min-[380px]:text-[17px]">{marca.nome}</p>
            <p className="mt-1 text-[12.5px] text-tinta/55">treinamento + 4 bônus · acesso no e-mail</p>
          </div>
        </div>
        <div className="flex items-end justify-between gap-3 border-t border-dashed border-tinta/10 px-4 pb-4 pt-3">
          <div>
            <p className="text-[13px] text-tinta/50">
              de <s>{brl(precoDe)}</s> por apenas
            </p>
            <p className="font-display text-[40px] font-extrabold leading-none tracking-tight text-coral">
              <span className="text-[20px]">R$</span>
              {preco}
            </p>
          </div>
          <div className="text-right">
            <span className="inline-block rounded-full bg-coral-claro px-2.5 py-1 font-display text-[13px] font-bold text-coral-escuro">-{Math.round((1 - preco / precoDe) * 100)}%</span>
            <p className="mt-1.5 text-[12px] text-tinta/50">{parcelas}</p>
          </div>
        </div>
      </div>
      <BotaoCompra />
      <Vagas />
      <p className="flex items-center justify-center gap-1.5 text-center text-[12.5px] text-tinta/50">
        <Lock size={13} className="shrink-0" /> Pagamento seguro · garantia de {garantiaDias} dias
      </p>
    </div>
  );
}

function BotaoCompra({ texto = 'Quero garantir minha vaga' }: { texto?: string }) {
  return (
    <a
      href={checkout || '#'}
      onClick={(e) => {
        if (!checkout) return e.preventDefault();
        e.preventDefault();
        track('InitiateCheckout', { value: preco, currency: 'BRL', content_name: marca.nome });
        window.location.href = destinoCheckout(checkout, e.currentTarget.href);
      }}
      className="btn-coral btn-brilho animate-pulso"
    >
      {texto} <ChevronRight size={22} strokeWidth={2.6} />
    </a>
  );
}

function PopupSaida({ fechar }: { fechar: () => void }) {
  useEffect(() => {
    const esc = (e: KeyboardEvent) => e.key === 'Escape' && fechar();
    document.addEventListener('keydown', esc);
    return () => document.removeEventListener('keydown', esc);
  }, [fechar]);
  return (
    <div className="fixed inset-0 z-[60] flex items-end justify-center bg-tinta/55 p-3 sm:items-center" onClick={fechar}>
      <div role="dialog" aria-modal="true" aria-labelledby="saida-titulo" className="animate-entra relative max-h-[94dvh] w-full max-w-[420px] overflow-y-auto rounded-[26px] bg-coco p-5 pb-6 shadow-2xl" onClick={(e) => e.stopPropagation()}>
        <button type="button" aria-label="Fechar" onClick={fechar} className="absolute right-3 top-3 grid h-9 w-9 place-items-center rounded-full text-tinta/50 hover:bg-tinta/5">
          <X size={20} />
        </button>
        <p className="text-center font-display text-[12.5px] font-semibold uppercase tracking-[.18em] text-coral">Espera!</p>
        <h3 id="saida-titulo" className="mt-1.5 text-center font-display text-[23px] font-extrabold leading-tight tracking-[-.02em]">
          A sua vaga com desconto ainda está reservada
        </h3>
        <div className="mt-4">
          <Kit grande={false} />
        </div>
        <p className="mt-4 text-center text-[15px] leading-relaxed text-tinta/75">
          O treinamento completo + 4 bônus sai de <s>{brl(precoDe)}</s> por <b className="text-coral">{brl(preco)}</b> só enquanto o cronômetro estiver rodando.
        </p>
        <div className="mt-4">
          <Cronometro compacto />
        </div>
        <div className="mt-4">
          <BotaoCompra texto="Quero garantir minha vaga agora" />
        </div>
        <button type="button" onClick={fechar} className="mt-3 w-full py-2 text-center text-[13.5px] text-tinta/50 underline underline-offset-2">
          Não, prefiro perder essa oportunidade
        </button>
      </div>
    </div>
  );
}

/* =========================== PEÇAS COMUNS =========================== */

function Linha({ a, b, verde }: { a: string; b: string; verde?: boolean }) {
  return (
    <div className="flex items-center justify-between py-3 text-[15px]">
      <span className="text-tinta/70">{a}</span>
      <b className={`font-display text-[16px] ${verde ? 'text-dinheiro' : 'text-tinta'}`}>{b}</b>
    </div>
  );
}

function Carrossel({ children }: { children: React.ReactNode[] }) {
  const [i, setI] = useState(0);
  return (
    <div className="mt-6">
      <div
        onScroll={(e) => {
          const el = e.currentTarget;
          const w = (el.firstElementChild as HTMLElement)?.offsetWidth || 1;
          setI(Math.round(el.scrollLeft / (w + 16)));
        }}
        className="mx-auto flex max-w-[520px] snap-x snap-mandatory gap-4 overflow-x-auto px-[7%] pb-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {children}
      </div>
      {children.length > 1 && (
        <div className="mt-1 flex justify-center gap-1.5">
          {children.map((_, k) => (
            <span key={k} className={`h-1.5 rounded-full transition-all duration-300 ${k === i ? 'w-6 bg-turquesa' : 'w-1.5 bg-tinta/15'}`} />
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
    let fim = 0;
    try {
      fim = Number(localStorage.getItem('gd:fim') || 0);
    } catch {
      /* ignore */
    }
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
  const relogio = (
    <span className="inline-flex items-center gap-1 font-display tabular-nums">
      <b className="rounded-md bg-white/20 px-1.5 py-0.5">{mm}</b>:<b className="rounded-md bg-white/20 px-1.5 py-0.5">{ss}</b>
    </span>
  );
  if (compacto)
    return (
      <div className="flex items-center justify-center gap-2.5 rounded-2xl bg-coral px-4 py-3 text-[15px] font-semibold text-white shadow-cartao">
        A promoção termina em {relogio}
      </div>
    );
  return (
    <div className="flex items-center justify-center gap-2 bg-turquesa px-3 py-2.5 text-[13px] font-semibold text-white">
      <span className="h-2 w-2 animate-ping rounded-full bg-manga" />
      Oferta de verão por tempo limitado {relogio}
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
    <p className="flex items-center justify-center gap-2 rounded-xl bg-manga-claro px-3 py-2.5 text-center text-[14px] text-tinta/80 ring-1 ring-manga/40">
      <TriangleAlert size={16} className="shrink-0 text-coral" />
      <span>
        Corra! Restam apenas <b className="text-coral-escuro">{v} vagas</b> nesta oferta
      </span>
    </p>
  );
}

function Confete() {
  const [ver, setVer] = useState(true);
  useEffect(() => {
    const t = setTimeout(() => setVer(false), 3400);
    return () => clearTimeout(t);
  }, []);
  if (!ver) return null;
  const cores = ['#0D6F6B', '#FF6B5B', '#FFC538', '#9ED43A', '#E83E8C'];
  return (
    <div className="pointer-events-none fixed inset-0 z-50 overflow-hidden" aria-hidden>
      {Array.from({ length: 42 }, (_, i) => (
        <span
          key={i}
          className="absolute -top-4 block rounded-[2px]"
          style={{
            left: `${(i * 97) % 100}%`,
            width: i % 3 ? 7 : 10,
            height: i % 3 ? 12 : 6,
            background: cores[i % cores.length],
            animation: `confete ${1.9 + (i % 5) * 0.32}s ${(i % 7) * 0.09}s cubic-bezier(.3,.6,.4,1) forwards`,
          }}
        />
      ))}
    </div>
  );
}

function Rodape() {
  return (
    <footer className="relative mt-14 shrink-0">
      <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="block h-[56px] w-full" aria-hidden>
        <path d="M0 70 C200 20 380 110 600 60 S1000 20 1200 55 V120 H0Z" fill="#FFC538" />
        <path d="M0 90 C250 50 420 120 700 80 S1050 60 1200 85 V120 H0Z" fill="#FF6B5B" />
        <path d="M0 105 C300 80 600 125 1200 100 V120 H0Z" fill="#0D6F6B" />
      </svg>
      <div className="bg-turquesa pb-8 pt-2 text-center text-[12px] text-white/70">
        © {new Date().getFullYear()} {marca.nome} ·{' '}
        <a href="/termos" className="underline underline-offset-2">
          Termos
        </a>{' '}
        ·{' '}
        <a href="/privacidade" className="underline underline-offset-2">
          Privacidade
        </a>
      </div>
    </footer>
  );
}
