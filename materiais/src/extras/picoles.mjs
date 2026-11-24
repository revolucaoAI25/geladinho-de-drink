// Extra 2: Picolés e Sacolés Especiais para Vender.
import { C, img, md, callout, lista, passos, tabela, cabeca, pagina } from '../base.mjs';
import { calc2, VOLUME, EMBALAGEM } from './dados.mjs';
import { RECEITAS_PI, CATS_PI } from './picoles-receitas.mjs';
import { capaExtra, aberturaExtra, abertParte, receitaPg, categoriaPg, faixa, brl, preco, usarPele, pele, destaques, fotosFaixa, citacao } from './comum.mjs';

const MARCA = 'EXTRA · PICOLÉS E SACOLÉS ESPECIAIS';
const NOME_TIPO = { picole: 'picolés de 80 ml', paleta: 'paletas de 110 ml', sacole: 'sacolés de 120 ml', sacoleG: 'sacolés de 200 ml' };

export function picoles() {
  const P = [];
  usarPele('xt-pi');
  const pg = (c, o = {}) => P.push(pagina(c, { n: P.length + 1, marca: MARCA, cls: pele(), ...o }));
  const cor = C.coralTx;
  const R = RECEITAS_PI.map((r, i) => ({ r, num: i + 1, k: calc2(r, CATS_PI.find((c) => c.id === r.cat).preco) }));
  const media = (cat) => { const a = R.filter(({ r }) => r.cat === cat).map(({ k }) => k); return { custo: a.reduce((s, k) => s + k.custoUn, 0) / a.length, preco: a.reduce((s, k) => s + k.preco, 0) / a.length }; };

  P.push(capaExtra({ arquivo: 'capa-x2.jpg', eyebrow: 'Material extra', titulo: 'Picolés e Sacolés <span style="color:' + C.coralTx + '">Especiais</span>', destaque: 'para vender', sub: 'Picolé de fruta, cremoso com casquinha, **paleta mexicana recheada**, picolé de drink e sacolés que parecem de loja.', cor: C.coralCl, fotos: ['pi-abertura.jpg', 'pi-ninho-com-casquinha-de-chocolate.jpg', 'pi-morango-com-pedacos.jpg'], selo: '20<br>receitas' }));
  P.push(aberturaExtra({ cor: C.coralCl, eyebrow: 'Material extra', titulo: 'Picolés e Sacolés Especiais para Vender', texto: 'O mesmo freezer, os mesmos ingredientes, **preço maior**. Picolé com casquinha e paleta recheada são vendidos por R$ 7 a R$ 12, e o cliente paga feliz porque **parece produto de sorveteria**.', itens: ['Picolé × paleta × sacolé: qual dá mais lucro', 'Equipamentos e quanto custam', 'Técnicas: palito, desenformar, **casquinha que endurece na hora**, recheio', '20 receitas com custo e preço', 'Onde vender e como revender'], foto: 'pi-abertura.jpg' }));

  // ---------- COMPARAÇÃO ----------
  const mF = media('fruta'), mC = media('casquinha'), mP = media('paleta'), mS = media('sacole');
  pg(`
    ${faixa(cor, '01', 'Por que picolé')}
    ${cabeca('', 'Picolé, paleta ou sacolé: ==qual dá mais lucro?==', 'Os três usam o mesmo freezer e quase os mesmos ingredientes. O que muda é o **valor que o cliente enxerga**.')}
    ${tabela(['', 'Sacolé especial', 'Picolé', 'Paleta recheada'], [
      ['Volume', '120 ml', '80 ml', '110 ml'],
      ['Precisa de', 'saquinho', 'forma + palito', 'forma de paleta + palito'],
      ['Custo médio/un', brl(mS.custo), brl((mF.custo + mC.custo) / 2), brl(mP.custo)],
      ['Preço médio', preco(mS.preco), preco((mF.preco + mC.preco) / 2), preco(mP.preco)],
      ['**Lucro por unidade**', `**${brl(mS.preco - mS.custo)}**`, `**${brl((mF.preco + mC.preco) / 2 - (mF.custo + mC.custo) / 2)}**`, `**${brl(mP.preco - mP.custo)}**`],
      ['Onde vende mais', 'delivery, condomínio', 'praia, praça, escola', 'eventos, cafés, delivery'],
    ], [])}
    <div class="row">
      <div class="box b-coral"><h3>A paleta ganha no lucro</h3><p style="font-size:8pt;margin-top:1mm">Lucro de <b>3 a 4 vezes o custo</b>. Ótima para eventos e revenda: o cliente compara com paleteria (R$ 10 a R$ 19).</p></div>
      <div class="box b-coco"><h3>O sacolé ganha na escala</h3><p style="font-size:8pt;margin-top:1mm">Não precisa de forma nem de desenformar: você faz <b>3 vezes mais</b> no mesmo tempo.</p></div>
    </div>
    ${fotosFaixa(['pi-sacole-tropical-em-3-camadas.jpg', 'pi-morango-com-pedacos.jpg', 'pi-ninho-com-casquinha-de-chocolate.jpg'], 20)}
    <div style="margin-top:auto">${callout('segredo', 'Use os três juntos', 'Paleta no topo do cardápio (preço âncora), picolé no meio e sacolé como o “barato”. Quem ia levar um sacolé de R$ 5 leva um picolé de R$ 7 porque “é só R$ 2 a mais”.')}</div>`);

  // ================= PARTE 1 =================
  P.push(abertParte({ num: '01', titulo: 'Equipamentos e técnicas', resumo: 'Picolé tem regras diferentes do sacolé: precisa ficar **firme no palito**, **sair inteiro da forma** e receber casquinha sem derreter. Tudo isso tem técnica, e é simples.', itens: ['Equipamentos e quanto investir', 'A fórmula do picolé que não quebra', 'Palito no lugar e desenformar', 'Casquinha que endurece na hora', 'Paleta recheada passo a passo', 'Sacolés especiais e embalagem'], foto: 'pi-ninho-com-casquinha-de-chocolate.jpg', fundo: C.turquesa }));

  pg(`
    ${faixa(C.turquesa, '1.1', 'Equipamentos')}
    ${cabeca('', 'O que comprar ==e quanto custa==')}
    ${tabela(['Item', 'Para quê', 'Preço médio'], [
      ['Forma de picolé de plástico (6 a 8 cavidades)', 'Picolés de 60 a 80 ml', 'R$ 15 a 25'],
      ['Forma de silicone para paleta (4 a 6 cavidades)', 'Paletas de 100 a 120 ml', 'R$ 25 a 40'],
      ['Forma de alumínio profissional (10 a 12 cavidades)', 'Produção maior, congela mais rápido', 'R$ 80 a 150'],
      ['Palitos de madeira (100 un)', 'Picolé (fino) e paleta (largo)', 'R$ 6 a 12'],
      ['Saquinhos para picolé (100 un)', 'Embalagem individual', 'R$ 10 a 18'],
      ['Saco de confeitar + bicos', 'Recheio das paletas', 'R$ 10 a 20'],
      ['Chocolate fracionado 1 kg', 'Casquinha e parede trufada', 'R$ 40 a 50'],
    ], [2])}
    <div class="box b-escuro" style="display:flex;justify-content:space-between;align-items:center"><div><p style="font-family:Outfit;font-weight:700;font-size:9.6pt;color:#fff">Investimento para começar</p><p style="font-size:7.8pt">2 formas de paleta + 1 de picolé + palitos + saquinhos</p></div><p style="font-family:Outfit;font-weight:800;font-size:16pt;color:${C.mangaSobreTurq}">≈ R$ 110</p></div>
    <div style="margin-top:auto">${callout('dica', 'Silicone ou alumínio?', 'Silicone desenforma fácil e é barato, mas congela mais devagar. Alumínio congela em **metade do tempo** e dura anos: vale quando você passar de 100 picolés por semana.')}</div>`);

  pg(`
    ${faixa(C.turquesa, '1.2', 'A fórmula')}
    ${cabeca('', 'O picolé que ==não quebra e não escorrega==', 'O sacolé tem o saquinho para segurar. O picolé, não: ele precisa ser **firme sozinho**, mas sem virar pedra.')}
    ${tabela(['Regra', 'Por quê'], [
      ['**Mais polpa, menos água** (45 a 55% de fruta)', 'A fibra da fruta dá estrutura: o picolé não racha ao morder'],
      ['**Açúcar entre 170 e 230 g por litro**', 'Menos que isso, quebra; mais, fica mole e escorre do palito'],
      ['**Cremosos com amido cozido**', 'A base engrossada segura o palito e derrete mais devagar'],
      ['**Drink: no máximo 80 ml de destilado por litro** (≈ 3%)', 'Acima disso o picolé fica mole e o palito solta'],
      ['**Congelar 6 a 8 h** (drink: 10 h)', 'Picolé desenformado antes da hora quebra no meio'],
    ])}
    <div class="box b-coco"><h3>Sacolé × picolé: a mesma receita serve?</h3><p style="font-size:8pt;margin-top:1mm">Quase. Para transformar uma receita de sacolé em picolé: <b>tire 100 ml de água</b> e <b>junte 50 g a mais de fruta</b>. Nas de drink, use <b>⅔ da bebida</b>.</p></div>
    ${fotosFaixa(['pi-manga-com-limao.jpg', 'pi-limao-siciliano.jpg', 'pi-abacaxi-com-coco.jpg'], 26)}
    <div style="margin-top:auto">${callout('atencao', 'Bolhas de ar', 'Depois de encher a forma, dê umas batidinhas na bancada: bolha de ar presa vira buraco no picolé e ponto de quebra.')}</div>`);

  pg(`
    ${faixa(C.turquesa, '1.3', 'Palito e desenformar')}
    ${cabeca('', 'Palito reto e picolé ==inteiro==')}
    <h2>3 jeitos de deixar o palito reto</h2>
    ${tabela(['Método', 'Como', 'Para'], [
      ['**Forma com tampa**', 'A tampa tem furos que seguram o palito', 'Formas de plástico'],
      ['**Meio congelado**', 'Congele 60 a 90 min (até ficar pastoso) e espete o palito', 'Silicone e alumínio'],
      ['**Papel-alumínio**', 'Cubra a forma, fure com faca e passe o palito pelo furo', 'Qualquer forma'],
    ])}
    <h2>Desenformar sem quebrar</h2>
    ${passos(['Mergulhe a forma (só a parte de fora) em **água morna, não quente**, por 10 a 15 segundos.', 'Segure o palito e puxe **reto**, girando de leve. Se travar, mais 5 segundos na água.', 'Nas formas de silicone, empurre o fundo de cada cavidade com o polegar.', 'Coloque os picolés numa bandeja com papel-manteiga e leve ao freezer por **15 minutos** antes de embalar.'])}
    <div style="margin-top:auto">${callout('segredo', 'Por que os 15 minutos?', 'Ao desenformar, a superfície amolece um pouco. Embalado assim, o picolé gruda no saquinho e fica com aspecto de “derretido”. Os 15 minutos de freezer deixam ele seco e brilhante.')}</div>`);

  pg(`
    ${faixa(C.turquesa, '1.4', 'Casquinha')}
    ${cabeca('', 'Casquinha que ==endurece em 10 segundos==', 'O segredo das sorveterias é simples: **chocolate + óleo de coco**.')}
    <div class="row" style="align-items:stretch">
      <div class="box b-coco" style="text-align:center"><p class="small">receita da casquinha</p><p style="font-family:Outfit;font-weight:800;font-size:13pt;margin-top:1mm">250 g de chocolate fracionado</p><p style="font-family:Outfit;font-weight:800;font-size:13pt">+ 50 g de óleo de coco</p><p class="small" style="margin-top:1mm">cobre 13 a 16 picolés</p></div>
      <div class="box b-turq"><h3>Por que funciona</h3><p style="font-size:8pt;margin-top:1mm">O óleo de coco é líquido no calor e <b>sólido abaixo de 24 °C</b>. Em contato com o picolé a −18 °C, ele endurece na hora e deixa a casquinha <b>fina e crocante</b>, que estala ao morder.</p></div>
    </div>
    ${passos(['Derreta chocolate e óleo de coco no micro-ondas, de 30 em 30 segundos, mexendo entre um e outro.', 'Deixe amornar até uns **35 °C** (morno no pulso). Quente demais derrete o picolé.', 'Use um copo alto e estreito: dá para mergulhar o picolé inteiro de uma vez.', 'Picolé **direto do freezer**: mergulhe 2 a 3 segundos, tire e gire para escorrer.', 'Granulado, castanha ou coco: salpique nos primeiros 5 segundos.', 'Volte ao freezer por 5 minutos antes de embalar.'])}
    <div style="margin-top:auto">${callout('dica', 'Chocolate fracionado, não nobre', 'O fracionado (de cobertura) não precisa de temperagem e custa metade do preço. Chocolate nobre sem temperagem fica opaco e esfarela.')}</div>`);

  pg(`
    ${faixa(C.turquesa, '1.5', 'Paleta recheada')}
    ${cabeca('', 'Paleta recheada ==passo a passo==', 'O recheio fica no centro, cremoso, e aparece na primeira mordida. É isso que justifica R$ 10.')}
    ${passos(['Coloque os pedaços de fruta ou biscoito encostados nas paredes da forma.', 'Encha **um terço** com a base e congele por 40 minutos (até firmar por fora).', 'Com saco de confeitar, faça um “cordão” de recheio no centro, de cima a baixo, sem encostar nas bordas.', 'Coloque o palito largo no meio do recheio.', 'Complete com a base, bata para tirar o ar e congele por 8 horas.'])}
    ${tabela(['Recheio', 'Funciona?', 'Por quê'], [
      ['Leite condensado cozido / doce de leite', '**Sim**', 'Muito açúcar: fica cremoso mesmo congelado'],
      ['Creme de avelã', '**Sim**', 'Tem gordura e pouca água'],
      ['Brigadeiro mole', '**Sim**', 'Tire do fogo bem mole'],
      ['Geleia comum', 'Mais ou menos', 'Congela dura; use geleia de fruta engrossada'],
      ['Chantilly, creme de confeiteiro', 'Não', 'Têm muita água: viram gelo'],
    ])}
    <div style="margin-top:auto">${callout('segredo', 'Recheio na medida', 'Cerca de **20 g de recheio por paleta**. Mais que isso, a paleta quebra no meio quando o cliente morde.')}</div>`);

  pg(`
    ${faixa(C.turquesa, '1.6', 'Sacolés especiais')}
    ${cabeca('', '4 técnicas de ==sacolé de loja==')}
    ${[
      ['Núcleo recheado', 'Encha metade, congele **em pé** 1 hora, coloque 1 colher de recheio no centro e complete. O recheio fica no meio do saquinho.'],
      ['Camadas de cor', 'Uma cor por vez, 40 minutos em pé entre cada camada. Comece pela cor mais escura embaixo.'],
      ['Degradê', 'Xarope (mais denso) no fundo e o líquido claro despejado **devagar pela parede**: as cores se misturam só no meio.'],
      ['Gigante (200 ml)', 'Saquinho 7×25 cm, vendido como lanche. Ótimo para açaí e cremosos com camadas.'],
    ].map(([t, d], i) => `<div style="display:flex;gap:3mm"><span class="num-g" style="font-size:16pt;color:${C.coralTx};width:7mm">${i + 1}</span><div><h3>${t}</h3><p style="font-size:8.2pt">${md(d)}</p></div></div>`).join('')}
    <div class="box b-coco"><h3>Como deixar o saquinho em pé</h3><p style="font-size:8pt;margin-top:1mm">Garrafa PET cortada ao meio, escorredor de talheres, copos altos dentro de uma assadeira ou uma caixa de ovos furada. Qualquer suporte que caiba no freezer.</p></div>
    <div style="margin-top:auto">${callout('dica', 'Parede trufada', 'A técnica do chocolate pincelado por dentro do saquinho está no Sacolé Trufado de Brigadeiro (receita 16).')}</div>`);

  pg(`
    ${faixa(C.turquesa, '1.7', 'Embalagem e conservação')}
    ${cabeca('', 'Embalado, etiquetado ==e firme==')}
    ${lista(['**Saquinho individual para picolé** (transparente, próprio para alimentos), fechado com seladora ou fita.', 'Etiqueta com sabor, data, validade e alérgenos (“contém leite”, “contém álcool” nos de drink).', 'Guarde os picolés **em pé ou deitados em caixas**, nunca soltos: o palito fura os outros saquinhos.', 'Validade: **30 dias** a −18 °C. Picolé de drink: 20 dias (o sabor da bebida perde força).', 'Transporte em isopor com gelo reciclável, como os geladinhos.'])}
    ${tabela(['Embalagem', 'Custo/un', 'Passa a imagem de'], [['Saquinho transparente + etiqueta', '≈ R$ 0,15', 'artesanal caprichado'], ['Saquinho impresso com a sua marca', '≈ R$ 0,30', 'marca de sorveteria'], ['Caixinha para paleta', '≈ R$ 0,80', 'presente / doce fino']], [1])}
    <div style="margin-top:auto">${callout('atencao', 'Picolé de drink', 'Etiqueta com **“CONTÉM ÁLCOOL”** bem visível e cor diferente dos outros. Em eventos com crianças, deixe os de drink separados.')}</div>`);

  pg(`
    ${faixa(C.turquesa, '1.8', 'Diagnóstico')}
    ${cabeca('', 'Picolé com problema? ==Veja a causa==')}
    ${tabela(['Problema', 'Causa provável', 'Como corrigir'], [
      ['Quebrou ao desenformar', 'Água quente demais ou pouco tempo de freezer', 'Água **morna**, 10 a 15 s; mínimo 6 a 8 h de freezer'],
      ['Palito soltou', 'Palito colocado cedo demais; bebida demais', 'Espete quando estiver pastoso; drink até 3%'],
      ['Palito torto', 'Forma sem tampa', 'Papel-alumínio furado ou forma com tampa'],
      ['Buracos no picolé', 'Bolhas de ar', 'Bata a forma na bancada depois de encher'],
      ['Casquinha grossa e escorrendo', 'Chocolate quente ou sem óleo de coco', '35 °C e 5 partes de chocolate para 1 de óleo'],
      ['Casquinha não endurece', 'Picolé pouco gelado', 'Volte o picolé ao freezer 15 min antes do banho'],
      ['Recheio da paleta vazou', 'Recheio encostou na borda; base pouco firme', 'Cordão no centro; 40 min de freezer antes do recheio'],
      ['Grudou no saquinho', 'Embalou logo depois de desenformar', '15 min no freezer em papel-manteiga antes'],
    ])}
    ${destaques([['Desenformar', '10 a 15 s', 'em água morna', C.turquesa, C.turqEsc], ['Casquinha', '35 °C', 'chocolate + óleo de coco 5:1', '#6B4330', '#3B2216'], ['Paleta', '20 g', 'de recheio por unidade', C.coralTx, '#8E2219']])}
    <div style="margin-top:auto">${callout('ok', 'Teste com 2 ou 3', 'Antes de uma fornada inteira, faça 2 ou 3 picolés de teste. Acertou o ponto, aí produza em quantidade.')}</div>`);

  // ================= PARTE 2 =================
  P.push(abertParte({ num: '02', titulo: 'As 20 receitas', resumo: 'Rendimento, custo por unidade e preço sugerido em cada uma. Volumes: **picolé 80 ml**, **paleta 110 ml**, **sacolé 120 ml** e **sacolé gigante 200 ml**.', itens: ['4 picolés de fruta', '4 cremosos com casquinha', '4 paletas recheadas', '3 picolés de drink', '5 sacolés especiais'], foto: 'pi-sacole-tropical-em-3-camadas.jpg', fundo: C.coralTx }));

  pg(`
    ${faixa(cor, '2.0', 'Índice')}
    ${cabeca('', 'As ==20 receitas==')}
    <div style="columns:2;column-gap:4mm;font-size:7.9pt">
      ${CATS_PI.map((c) => `<div style="break-inside:avoid;margin-bottom:3mm"><p style="font-family:Outfit;font-weight:800;font-size:7.4pt;letter-spacing:.1em;text-transform:uppercase;display:flex;align-items:center;gap:1.6mm"><span style="width:3mm;height:3mm;border-radius:1mm;background:${c.cor}"></span>${c.nome}</p>
        ${R.filter(({ r }) => r.cat === c.id).map(({ r, num, k }) => `<div style="display:flex;justify-content:space-between;gap:1mm;padding:.8mm 0;border-bottom:.25mm dotted ${C.tinta}33"><span><b style="color:${C.coralTx}">${String(num).padStart(2, '0')}</b> ${r.nome}</span><span style="color:${C.dinheiroTx};font-weight:700;white-space:nowrap">${preco(k.preco)}</span></div>`).join('')}</div>`).join('')}
    </div>
    <div style="margin-top:auto">${callout('dica', 'Como ler as fichas', `**Rende** = unidades no tamanho de cada tipo. **Custo/unid.** inclui palito e embalagem (picolé ${brl(EMBALAGEM.picole)}, paleta ${brl(EMBALAGEM.paleta)}, sacolé ${brl(EMBALAGEM.sacole)}). **Venda por** = preço praticado, sempre acima de 2,5× o custo.`)}</div>`);

  let atual = '';
  R.forEach(({ r, num, k }) => {
    if (r.cat !== atual) {
      atual = r.cat;
      const cat = CATS_PI.find((c) => c.id === r.cat);
      P.push(categoriaPg({ cat, itens: R.filter((x) => x.r.cat === r.cat).map((x) => [x.r, x.num, x.k]), n: P.length + 1, marca: MARCA }));
    }
    const cat = CATS_PI.find((c) => c.id === r.cat);
    const fichas = [['Rende', `${k.un} ${NOME_TIPO[r.tipo]}`], ['Preparo', `${r.tempo} min · ${r.nivel}`], [r.cat === 'drink' ? 'Teor final' : 'Custo do lote', r.cat === 'drink' ? `${k.teor.toFixed(1).replace('.', ',')}% · firme` : brl(k.custo)], ['Custo/unid.', brl(k.custoUn)]];
    P.push(receitaPg({ r, num, k, cat, marca: MARCA, n: P.length + 1, fichas }));
  });

  // ================= PARTE 3 =================
  P.push(abertParte({ num: '03', titulo: 'Vendendo picolés e paletas', resumo: 'Cardápio em escada, eventos, revenda para comércios e a caixa de presente: os caminhos que mais rendem com picolé.', itens: ['O cardápio em escada', 'Eventos e festas', 'Revenda para padarias e lanchonetes', 'Capacidade de produção', 'Cardápio pronto e mensagens'], foto: 'pi-morango-com-casquinha-branca.jpg', fundo: C.turquesa }));

  pg(`
    ${faixa(cor, '3.1', 'Cardápio em escada')}
    ${cabeca('', 'O cardápio que ==puxa o cliente para cima==', 'Três degraus de preço lado a lado. O do meio é o que mais vende, e é o que tem melhor margem para você.')}
    <div style="display:flex;gap:2mm;align-items:flex-end">
      ${[['Sacolé', 'R$ 5 a 7', 26, C.mangaCl], ['Picolé com casquinha', 'R$ 7', 34, C.coralCl], ['Paleta recheada', 'R$ 10', 42, C.berryCl]].map(([t, p, h, bg]) => `<div style="flex:1;height:${h}mm;border-radius:3mm;background:${bg};display:flex;flex-direction:column;justify-content:flex-end;padding:3mm;text-align:center"><p style="font-family:Outfit;font-weight:700;font-size:8.4pt">${t}</p><p style="font-family:Outfit;font-weight:800;font-size:14pt;color:${C.coralTx}">${p}</p></div>`).join('')}
    </div>
    ${lista(['A **paleta** no topo funciona como âncora: ao lado dela, o picolé de R$ 7 parece barato.', 'O **sacolé** fica para quem quer gastar pouco: ninguém vai embora sem comprar.', 'Mostre os três **na mesma foto** ou na mesma plaquinha.', 'Combo de escada: **1 paleta + 1 picolé por R$ 15** (em vez de R$ 17).'])}
    <h2>Plaquinha pronta (exemplo)</h2>
    <div style="border-radius:3mm;background:${C.turquesa};padding:3.4mm 4mm;display:grid;grid-template-columns:1fr auto;gap:1.2mm 4mm;font-family:Outfit">
      ${[['Paleta recheada', 'R$ 10'], ['Picolé com casquinha', 'R$ 7'], ['Picolé de fruta', 'R$ 5'], ['Sacolé gourmet', 'R$ 5 a 7'], ['1 paleta + 1 picolé', 'R$ 15']].map(([a, b], i) => `<p style="color:#fff;font-weight:${i === 4 ? 800 : 600};font-size:9pt">${a}</p><p style="color:${C.mangaSobreTurq};font-weight:800;font-size:9pt;text-align:right">${b}</p>`).join('')}
    </div>
    <div style="margin-top:auto">${callout('segredo', 'O efeito “só R$ 2 a mais”', 'Quando o cliente vê os preços em sequência, ele compara o degrau, não o total. É por isso que o picolé do meio é o campeão de vendas.')}</div>`);

  pg(`
    ${faixa(cor, '3.2', 'Eventos e revenda')}
    ${cabeca('', 'Eventos e ==revenda para comércios==')}
    <div class="row" style="align-items:stretch">
      <div class="box b-coral"><h3>Eventos e festas</h3><div style="margin-top:1.4mm">${lista(['Casamentos: picolé de morango com espumante como “brinde gelado”', 'Aniversários: paletas com etiqueta personalizada', 'Empresas: caixa de paletas para o happy hour', 'Kit evento: 50 paletas por R$ 400'])}</div></div>
      <div class="box b-coco"><h3>Revenda</h3><div style="margin-top:1.4mm">${lista(['Padarias, lanchonetes, açaiterias e quiosques', 'Preço de revenda **30 a 35% menor** que o seu preço de balcão', 'Pedido mínimo (ex.: 30 unidades)', 'Prefira vender (pagamento na entrega) a deixar em consignação'])}</div></div>
    </div>
    ${tabela(['Paleta de R$ 10', 'Você', 'O comércio'], [['Preço de revenda', 'R$ 6,50', ''], ['Custo médio', brl(mP.custo), ''], ['Lucro por paleta', `**${brl(6.5 - mP.custo)}**`, '**R$ 3,50**']], [1, 2])}
    ${callout('dica', 'Leve o freezer em conta', 'O comércio precisa ter freezer com espaço. Pergunte antes e ofereça uma plaquinha de “Paletas artesanais” para ele colocar perto do caixa.')}
    <div style="margin-top:auto">${callout('atencao', 'Para revender, regularize', 'Venda em quantidade para comércios costuma exigir MEI e, em muitas cidades, licença sanitária. Informe-se na prefeitura: é mais simples do que parece e abre portas maiores.')}</div>`);

  pg(`
    ${faixa(cor, '3.3', 'Caixa presente')}
    ${cabeca('', 'A caixa de paletas: ==venda de presente==')}
    <div class="box b-escuro" style="display:flex;justify-content:space-between;align-items:center"><div><p style="font-family:Outfit;font-weight:700;font-size:10pt;color:#fff">Caixa com 6 paletas sortidas</p><p style="font-size:8pt">em caixinha individual + laço + cartão</p></div><div style="text-align:right"><p style="font-size:7.4pt;color:#ffffffdd">em vez de R$ 60</p><p style="font-family:Outfit;font-weight:800;font-size:18pt;color:${C.mangaSobreTurq}">R$ 55</p></div></div>
    ${tabela(['Na caixa de 6', 'Valor'], [['Venda', 'R$ 55'], [`6 paletas (≈ ${brl(mP.custo)} cada)`, brl(6 * mP.custo)], ['Caixa, laço e cartão', 'R$ 6,00'], ['**Lucro**', `**${brl(55 - 6 * mP.custo - 6)}**`]], [1])}
    ${lista(['**Datas que vendem:** Dia das Mães, Dia dos Namorados, Dia dos Pais, aniversários, “só porque está calor”.', 'Entregue em bolsa térmica: a caixa só vai ao freezer da pessoa.', 'Ofereça cartão com mensagem escrita à mão: custa nada e encanta.'])}
    <div style="margin-top:auto">${callout('segredo', 'Foto da caixa aberta', 'Seis paletas de cores diferentes lado a lado é a foto que mais vende no status. Tire uma bem feita e use o ano inteiro.')}</div>`);

  pg(`
    ${faixa(cor, '3.4', 'Produção')}
    ${cabeca('', 'Quantos picolés ==você consegue fazer==', 'O limite do picolé é a forma, não a receita. Faça a conta antes de aceitar uma encomenda grande.')}
    ${tabela(['Você tem', 'Por fornada (8 h)', 'Por dia (2 fornadas)', 'Por semana (5 dias)'], [
      ['1 forma de 6', '6', '12', '60'],
      ['3 formas de 6', '18', '36', '180'],
      ['2 formas de paleta (4 cav.)', '8', '16', '80'],
      ['1 forma de alumínio (12)', '12', '24 a 36*', '120 a 180'],
    ], [1, 2, 3])}
    <p class="small">* O alumínio congela mais rápido: dá para fazer 3 fornadas por dia.</p>
    <div class="row">
      <div class="box b-coco"><h3>Para uma encomenda de 50 paletas</h3><p style="font-size:8pt;margin-top:1mm">Com 2 formas de 4 cavidades: 7 fornadas, ou seja, <b>3 a 4 dias de produção</b>. Peça a encomenda com <b>uma semana</b> de antecedência.</p></div>
      <div class="box b-coral"><h3>Sacolé não tem limite</h3><p style="font-size:8pt;margin-top:1mm">O sacolé especial não usa forma: o limite é só o espaço no freezer. Para volume, ele é o seu aliado.</p></div>
    </div>
    ${fotosFaixa(['pi-abertura.jpg', 'pi-chocolate-trufado.jpg', 'pi-coco-com-casquinha.jpg'], 28)}`);

  pg(`
    ${faixa(cor, '3.5', 'Cardápio pronto')}
    <div style="flex:1;border-radius:4mm;overflow:hidden;background:linear-gradient(160deg,${C.coralTx},#7A1E16);color:#fff;display:flex;flex-direction:column">
      <img src="${img('pi-abertura.jpg')}" style="width:100%;height:44mm;object-fit:cover"/>
      <div style="padding:4mm 6mm 5mm;display:flex;flex-direction:column;flex:1">
        <p class="pincel" style="color:${C.mangaSobreTurq};font-size:15pt;text-align:center">picolés &amp; paletas</p>
        <p style="font-family:Outfit;font-weight:800;font-size:20pt;text-align:center;line-height:1;color:#fff">ARTESANAIS</p>
        <div style="margin-top:3.4mm;display:flex;flex-direction:column;gap:1.5mm">
          ${CATS_PI.filter((c) => c.id !== 'drink').map((c) => `<p style="font-family:Outfit;font-weight:700;font-size:7pt;letter-spacing:.18em;color:${C.mangaSobreTurq};margin-top:1mm">${c.nome.toUpperCase()}</p>${R.filter(({ r }) => r.cat === c.id).slice(0, 3).map(({ r, k }) => `<div style="display:flex;align-items:baseline;gap:2mm"><span style="font-family:Outfit;font-weight:700;font-size:8.8pt;color:#fff">${r.nome}</span><span style="flex:1;border-bottom:.3mm dotted #ffffff66"></span><span style="font-family:Outfit;font-weight:800;font-size:8.8pt;color:${C.mangaSobreTurq}">${preco(k.preco)}</span></div>`).join('')}`).join('')}
        </div>
        <div style="margin-top:auto;display:flex;gap:2mm">${[['Paleta + picolé', 'R$ 15'], ['Caixa 6 paletas', 'R$ 55'], ['Evento 50 paletas', 'R$ 400']].map(([a, b]) => `<div style="flex:1;border-radius:2.4mm;background:#ffffff1f;text-align:center;padding:1.6mm"><p style="font-size:6.8pt;color:#fff">${a}</p><p style="font-family:Outfit;font-weight:800;font-size:9pt;color:${C.mangaSobreTurq}">${b}</p></div>`).join('')}</div>
      </div>
    </div>
    <p class="small" style="text-align:center">Os picolés de drink ficam num cardápio separado, só para adultos.</p>`);

  pg(`
    ${faixa(cor, '3.6', 'Mensagens prontas')}
    ${cabeca('', 'Copie, ajuste e ==envie hoje==')}
    ${[
      ['Lançamento das paletas', '“Chegaram as **paletas recheadas**! 🍓 Morango com leite condensado, Ninho com creme de avelã, maracujá com brigadeiro… R$ 10 cada. Recheio cremoso no meio, do jeitinho das paleterias. Quem quer?”'],
      ['Status com casquinha', '“Picolé de Ninho com casquinha que estala 🍫 R$ 7. Pronta entrega hoje!” (vídeo da mordida)'],
      ['Comércio (revenda)', '“Oi, [nome]! Produzo paletas mexicanas recheadas artesanais e trabalho com revenda: R$ 6,50 a unidade para você vender a R$ 10. Posso deixar umas para você provar?”'],
      ['Evento (orçamento)', '“Oi, [nome]! Para o seu evento de [nº] pessoas, sugiro **1,5 paleta por convidado**. Fica [qtd] paletas em 4 sabores, entregues congeladas, por R$ [valor]. Fecho com 50% de sinal no Pix.”'],
      ['Caixa presente', '“Para o Dia das Mães: **caixa com 6 paletas** sortidas, com laço e cartão escrito à mão, por R$ 55. Entrego no dia. Reserve a sua!”'],
    ].map(([t, m]) => `<div class="box b-coco" style="padding:2.6mm 3.2mm"><p class="eb" style="font-size:6.4pt;color:${C.turquesa}">${t}</p><p style="font-size:8.2pt;margin-top:1mm">${md(m)}</p></div>`).join('')}
    <div style="margin-top:auto">${callout('dica', 'Vídeo da mordida', 'Para picolé com casquinha e paleta recheada, **vídeo vende mais que foto**: o barulho da casquinha e o recheio escorrendo fazem o trabalho.')}</div>`);

  pg(`
    ${faixa(cor, '3.7', 'Checklist')}
    ${cabeca('', 'Da primeira forma ==à primeira caixa vendida==')}
    <div class="box b-coral">${lista(['Comprei as formas, palitos e saquinhos de picolé', 'Fiz um picolé de fruta e acertei o ponto (não quebra, não escorrega)', 'Treinei a casquinha com 3 picolés', 'Fiz a primeira fornada de paletas recheadas', 'Testei a desenformagem e os 15 minutos antes de embalar', 'Etiquetei com sabor, data e alérgenos', 'Montei o cardápio em escada', 'Ofereci revenda para 2 comércios do bairro', 'Vendi a primeira caixa de paletas! 🎉'], 'ck')}</div>
    <div style="margin-top:2mm">${fotosFaixa(['pi-abertura.jpg', 'pi-ninho-com-casquinha-de-chocolate.jpg', 'pi-morango-com-pedacos.jpg', 'pi-sacole-tropical-em-3-camadas.jpg'], 34)}</div>
    <div style="margin-top:auto;display:flex;gap:4mm;align-items:center">
      <img src="${img('bruna-retrato.jpg')}" style="width:26mm;height:26mm;border-radius:50%;object-fit:cover;flex-shrink:0"/>
      <div><p style="font-size:8.6pt">A primeira paleta recheada que eu vendi foi por R$ 10 numa festa de aniversário. No fim da noite, tinha 4 encomendas novas. Capriche no recheio: é ele que faz a pessoa voltar.</p><p class="pincel" style="font-size:14pt;margin-top:1mm">Bruna</p></div>
    </div
    <p class="small" style="font-size:6.4pt;text-align:center;margin-top:-1mm">Fotos de ingredientes e picolés: bancos de imagens de domínio público (CC0), via Openverse.</p>`);

  return P;
}
