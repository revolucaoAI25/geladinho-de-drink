// Extra 3: Mensagens que Vendem no WhatsApp.
import { C, img, md, callout, lista, passos, tabela, cabeca, pagina } from '../base.mjs';
import { capaExtra, aberturaExtra, abertParte, faixa, usarPele, pele, destaques, fotosFaixa, citacao } from './comum.mjs';

const MARCA = 'EXTRA · MENSAGENS QUE VENDEM NO WHATSAPP';
const VERDE = '#0B7A5E';
const BOLHA = '#DCF8C6';

/** Destaca [variáveis] e aplica **negrito**. */
const txt = (s) => md(s).replace(/\[([^\]]+)\]/g, `<span style="background:${C.mangaCl};color:${C.mangaTx};font-weight:700;border-radius:1mm;padding:0 .8mm">[$1]</span>`).replace(/\n/g, '<br>');

/** Card de mensagem pronta: título, balão e (opcional) por que funciona. */
const msg = (titulo, texto, porque = '', quando = '') => `<div style="break-inside:avoid">
  <div style="display:flex;align-items:baseline;justify-content:space-between;gap:2mm"><p class="eb" style="font-size:6.6pt;color:${VERDE}">${titulo}</p>${quando ? `<span class="small" style="font-size:6.6pt">${quando}</span>` : ''}</div>
  <div style="margin-top:1mm;background:${BOLHA};border-radius:0 3mm 3mm 3mm;padding:2.2mm 3mm;font-size:8.2pt;line-height:1.45;position:relative;box-shadow:0 .3mm .6mm rgba(0,0,0,.08)">${txt(texto)}</div>
  ${porque ? `<p style="font-size:7.3pt;margin-top:1mm;color:${C.tinta}c4"><b style="color:${C.tinta}">Por que funciona:</b> ${md(porque)}</p>` : ''}
</div>`;

/** Conversa com balões dos dois lados (c = cliente, v = você). */
const conversa = (linhas) => `<div style="background:#EFE7DD;border-radius:3.2mm;padding:3mm;display:flex;flex-direction:column;gap:1.6mm">${linhas
  .map(([q, t]) => `<div style="align-self:${q === 'v' ? 'flex-end' : 'flex-start'};max-width:82%;background:${q === 'v' ? BOLHA : '#fff'};border-radius:${q === 'v' ? '3mm 0 3mm 3mm' : '0 3mm 3mm 3mm'};padding:1.6mm 2.6mm;font-size:8pt;line-height:1.4;box-shadow:0 .3mm .6mm rgba(0,0,0,.08)">${txt(t)}</div>`)
  .join('')}</div>`;

export function whatsapp() {
  const P = [];
  usarPele('xt-wa');
  const pg = (c, o = {}) => P.push(pagina(c, { n: P.length + 1, marca: MARCA, cls: pele(), ...o }));
  const cor = VERDE;

  P.push(capaExtra({ arquivo: 'capa-x3.jpg', eyebrow: 'Material extra', titulo: 'Mensagens que <span style="color:' + VERDE + '">Vendem</span> no WhatsApp', destaque: 'copie, cole e venda', sub: 'Mais de **60 mensagens prontas** para cada momento da venda: do lançamento à recompra, das objeções às encomendas de festa.', cor: '#D7F0E3', fotos: ['whats-1-patricia.jpg', 'whats-4-joyce.jpg', 'whats-2-larissa.jpg'], selo: '+60<br>mensagens' }));
  P.push(aberturaExtra({ cor: '#D7F0E3', eyebrow: 'Material extra', titulo: 'Mensagens que Vendem no WhatsApp', texto: 'Quase toda venda de geladinho passa pelo WhatsApp. A diferença entre quem vende **10** e quem vende **100 por semana** quase nunca é o sabor: é **o que se escreve, quando e como**.', itens: ['As 5 regras de uma mensagem que vende', 'WhatsApp Business configurado em 20 minutos', '**+60 mensagens prontas** para cada momento', 'Respostas para as objeções mais comuns', 'Rotina de 15 minutos por dia'], foto: 'venda-condominio.jpg' }));

  // ---------- COMO USAR ----------
  pg(`
    ${faixa(cor, '00', 'Como usar')}
    ${cabeca('', 'Não decore: ==copie e ajuste==', 'Cada mensagem está pronta para usar. Só troque o que está entre colchetes.')}
    ${msg('Exemplo', 'Oi, [nome]! Tudo bem? Hoje tenho [sabor] fresquinho, saindo do freezer 🍹 [preço] cada ou 3 por [preço do combo]. Quer que eu separe pra você?')}
    ${tabela(['Variável', 'Troque por'], [['[nome]', 'o primeiro nome da pessoa (sempre!)'], ['[sabor]', 'o sabor do dia ou o preferido dela'], ['[preço]', 'o seu preço (veja o Módulo 5 do treinamento)'], ['[dia] / [horário]', 'quando você entrega']])}
    <h2>Os símbolos deste material</h2>
    ${lista(['**Por que funciona**: a lógica por trás da mensagem. Entendeu, você cria as suas.', '**Quando**: o melhor momento para enviar.', 'Emojis com moderação: **1 ou 2 por mensagem**. Mais que isso parece propaganda em massa.'])}
    <div style="margin-top:auto">${callout('atencao', 'Personalize sempre', 'A mesma mensagem enviada igualzinha para 100 pessoas parece spam e o WhatsApp pode até **bloquear o seu número**. Nome da pessoa + um detalhe pessoal mudam tudo.')}</div>`);

  // ================= PARTE 1 =================
  P.push(abertParte({ num: '01', titulo: 'O que faz uma mensagem vender', resumo: 'Antes das mensagens prontas, as **regras** que estão por trás delas. Com elas, você consegue escrever qualquer mensagem nova.', itens: ['As 5 regras', 'A anatomia de uma mensagem que vende', 'Os 8 erros que espantam cliente'], foto: 'wa-celular-1.jpg', fundo: VERDE }));

  pg(`
    ${faixa(cor, '1.1', 'As 5 regras')}
    ${cabeca('', 'As ==5 regras== de toda mensagem que vende')}
    ${[
      ['Fale com uma pessoa', 'Nome no começo e tom de conversa. “Oi, Ju!” vende mais que “Olá, clientes!”.'],
      ['Mostre antes de falar', '**Foto ou vídeo** do geladinho em toda mensagem de venda. O cliente compra com os olhos.'],
      ['Preço sempre', 'Mensagem sem preço gera pergunta, e pergunta esfria a venda. Diga o preço e o combo.'],
      ['Termine com uma pergunta fácil', '“Quer de qual sabor?” é melhor que “Tem interesse?”. Pergunta que já supõe o sim.'],
      ['Dê um motivo para agora', 'Pronta entrega, fornada do dia, calor do fim de semana, sabor que acaba. **Motivo real**, nunca inventado.'],
    ].map(([t, d], i) => `<div style="display:flex;gap:3mm;align-items:flex-start;padding:2.2mm 3mm;border-radius:3mm;background:${i % 2 ? '#fff' : '#E5F4EC'}"><span class="num-g" style="font-size:16pt;width:6mm;color:${VERDE}">${i + 1}</span><div><h3>${t}</h3><p style="font-size:8.2pt">${md(d)}</p></div></div>`).join('')}
    <div style="margin-top:auto">${callout('segredo', 'A regra das regras', 'Escreva como você fala com uma amiga. O cliente compra de **gente**, não de empresa.')}</div>`);

  pg(`
    ${faixa(cor, '1.2', 'Anatomia')}
    ${cabeca('', 'A anatomia de uma ==mensagem que vende==')}
    ${conversa([['v', 'Oi, Carla! 😊'], ['v', '[foto do geladinho contra a luz]'], ['v', 'Acabei de tirar do freezer a fornada de **caipirinha de maracujá**, a que você amou da outra vez 🍹'], ['v', 'R$ 7 cada ou **3 por R$ 18**. Entrego hoje até as 19h.'], ['v', 'Separo quantos pra você?']])}
    ${tabela(['Parte', 'O que faz', 'No exemplo'], [['**1. Saudação pessoal**', 'Mostra que não é mensagem em massa', '“Oi, Carla!”'], ['**2. Imagem**', 'Desperta o desejo antes de qualquer palavra', 'foto contra a luz'], ['**3. Gancho**', 'Motivo para a mensagem + memória boa', '“a que você amou”'], ['**4. Oferta clara**', 'Preço, combo e quando entrega', '“3 por R$ 18, hoje”'], ['**5. Pergunta fácil**', 'Supõe o sim e só pede a quantidade', '“Separo quantos?”']])}
    <div style="margin-top:auto">${callout('dica', 'Mensagens curtas, em sequência', 'Três ou quatro balões curtos são lidos inteiros. Um parágrafo enorme é ignorado. Escreva como numa conversa.')}</div>`);

  pg(`
    ${faixa(cor, '1.3', 'Erros')}
    ${cabeca('', 'Os 8 erros que ==espantam cliente==')}
    ${tabela(['Erro', 'Por que espanta', 'Faça assim'], [
      ['“Bom dia, grupo!” + textão', 'Ninguém lê', '3 balões curtos + foto'],
      ['Sem preço', 'Gera dúvida e vergonha de perguntar', 'Preço na primeira mensagem'],
      ['“Tem interesse?”', 'É fácil dizer não', '“Quer de qual sabor?”'],
      ['Áudio de 2 minutos', 'Quase ninguém ouve', 'Áudio de até 30 s, ou texto'],
      ['Responder horas depois', 'O cliente já comprou de outro', 'Até 5 min no horário de venda'],
      ['Cobrar quem não respondeu 5 vezes', 'Vira chato e é bloqueado', 'No máximo 2 lembretes'],
      ['Status com 20 fotos seguidas', 'As pessoas pulam todos', '3 a 5 por dia, espaçados'],
      ['Mentir “últimas unidades”', 'Quebra a confiança na 2ª vez', 'Escassez só quando é verdade'],
    ])}
    <div style="margin-top:auto">${callout('atencao', 'Cuidado com envio em massa', 'Mandar a mesma mensagem para centenas de números que não salvaram o seu contato faz o WhatsApp **banir** o número. Use listas de transmissão (Parte 2) e mensagens personalizadas.')}</div>`);

  // ================= PARTE 2 =================
  P.push(abertParte({ num: '02', titulo: 'WhatsApp Business em 20 minutos', resumo: 'O aplicativo é gratuito e tem ferramentas que fazem metade do trabalho por você: catálogo, mensagens automáticas, atalhos e etiquetas.', itens: ['Perfil profissional', 'Catálogo com foto e preço', 'Saudação e ausência automáticas', 'Respostas rápidas (atalhos)', 'Etiquetas e listas de transmissão'], foto: 'wa-celular-2.jpg', fundo: VERDE }));

  pg(`
    ${faixa(cor, '2.1', 'Perfil e catálogo')}
    ${cabeca('', 'Perfil que ==passa confiança==')}
    ${tabela(['Campo', 'O que colocar'], [
      ['Foto', 'O seu logo, ou você segurando um geladinho (rosto vende mais)'],
      ['Nome', '“[Sua marca] · Geladinhos de Drink”'],
      ['Descrição', '“Geladinhos de drink e gourmet 🍹 Pronta entrega e encomendas para festas. Entrego em [bairros].”'],
      ['Horário', 'O horário em que você responde (o app mostra “aberto/fechado”)'],
      ['Endereço', 'Só o bairro, ou “entregas em [região]”'],
    ])}
    <h2>Catálogo: seu cardápio dentro do WhatsApp</h2>
    ${passos(['Em **Ferramentas comerciais → Catálogo**, adicione um item por sabor.', 'Foto bonita (contra a luz), nome, preço e uma linha de descrição.', 'Crie também os **combos** como itens (“Combo 3 sabores · R$ 18”).', 'Para mandar o cardápio, toque no clipe → **Catálogo** e envie o link.'])}
    <div style="margin-top:auto">${callout('segredo', 'O catálogo vende sozinho', 'Cliente que abre o catálogo vê todos os sabores com foto e preço e escolhe sem precisar perguntar. Menos perguntas, mais pedidos.')}</div>`);

  pg(`
    ${faixa(cor, '2.2', 'Mensagens automáticas')}
    ${cabeca('', 'Saudação e ausência ==prontas==', 'Em **Ferramentas comerciais**, ative as duas. Elas respondem por você enquanto você produz.')}
    ${msg('Mensagem de saudação (primeiro contato)', 'Oi! 😊 Que bom te ver por aqui! Sou a [seu nome], da [sua marca]. Faço **geladinhos de drink e gourmet** com pronta entrega e encomendas para festas.\nJá te mando o cardápio com fotos e preços. Qual sabor te deu vontade?', 'Acolhe, apresenta e já faz uma pergunta. O cliente nunca fica no vácuo.')}
    ${msg('Mensagem de ausência (fora do horário)', 'Oi! Agora estou na produção 🍹 e respondo a partir das [horário].\nSe quiser adiantar: me diga **quais sabores** e **quantos**, que eu já separo o seu pedido.', 'Transforma a espera em pedido adiantado. O cliente não vai procurar outro.')}
    ${tabela(['Configuração', 'Recomendado'], [['Saudação', 'enviar para novos contatos ou após 14 dias sem conversa'], ['Ausência', 'fora do horário comercial']])}
    <div style="margin-top:auto">${callout('dica', 'Atualize na temporada', 'No verão, mude a saudação para destacar o sabor da estação ou a promoção da semana.')}</div>`);

  pg(`
    ${faixa(cor, '2.3', 'Respostas rápidas')}
    ${cabeca('', 'Atalhos que ==economizam 1 hora por dia==', 'Em **Ferramentas comerciais → Respostas rápidas**, cadastre estes atalhos. Digite “/” na conversa e escolha.')}
    ${tabela(['Atalho', 'Mensagem'], [
      ['/cardapio', 'Nossos sabores de hoje 👇 [link do catálogo] Drink: R$ 7 · 3 por R$ 18. Qual vai ser?'],
      ['/pix', 'Pix: [chave] · [nome do titular]. Me manda o comprovante que eu já separo 😊'],
      ['/entrega', 'Entrego em [bairros] de [horário] a [horário]. Taxa: [valor ou “grátis acima de R$ X”].'],
      ['/dura', 'Fora do freezer, dura 30 a 40 min. No isopor com gelo, até 4 h. Em casa, guarde no freezer: dura 30 dias.'],
      ['/festa', 'Para festas faço kits de 20 a 100 com sabores sortidos. Para quantas pessoas e qual a data?'],
      ['/semalcool', 'Tenho sem álcool também, para as crianças e quem não bebe: [sabores], R$ [preço].'],
      ['/obrigada', 'Obrigada pelo pedido, [nome]! 💛 Se puder, me manda uma foto depois: amo ver vocês aproveitando!'],
    ])}
    <div style="margin-top:auto">${callout('segredo', 'Atalho não é robô', 'Depois de inserir o atalho, **troque uma palavra** e coloque o nome da pessoa. Ela não percebe que foi rápido, só que foi bem atendida.')}</div>`);

  pg(`
    ${faixa(cor, '2.4', 'Etiquetas e listas')}
    ${cabeca('', 'Etiquetas e ==listas de transmissão==')}
    <h2>Etiquetas: o seu funil de vendas</h2>
    ${tabela(['Etiqueta', 'Quando usar', 'O que fazer depois'], [['🟡 Novo contato', 'perguntou, ainda não comprou', 'lembrete em 24 h'], ['🟠 Pedido', 'fechou o pedido', 'confirmar Pix e entrega'], ['🟢 Pago', 'Pix recebido', 'separar e entregar'], ['🔵 Cliente', 'já comprou', 'recompra em 3 a 7 dias'], ['🟣 Festa', 'pediu orçamento', 'follow-up em 24 h']])}
    <h2>Lista de transmissão</h2>
    ${lista(['Manda a mesma mensagem para muitos contatos, mas cada um recebe **no privado**, como se fosse só para ele.', '**Só recebe quem salvou o seu número.** Peça: “salva meu contato pra receber o cardápio da semana”.', 'Crie listas por perfil: **Clientes**, **Festas**, **Sem álcool**, **Condomínio**.', 'Use 1 a 2 vezes por semana, no máximo.'])}
    <div style="margin-top:auto">${callout('dica', 'Status × lista', 'O status alcança quem está curioso; a lista alcança quem já quer comprar. Use os dois.')}</div>`);

  // ================= PARTE 3 =================
  P.push(abertParte({ num: '03', titulo: 'As mensagens prontas', resumo: 'Organizadas pelo **momento da venda**: do primeiro contato à encomenda de festa. Copie, troque o que está entre colchetes e envie.', itens: ['Lançamento e grupos', 'Status da semana', 'Atendimento, dúvidas e objeções', 'Fechamento, entrega e pós-venda', 'Recompra e datas especiais', 'Festas, empresas e revenda', 'Clientes sumidos e áudio', 'Catálogo, Instagram e ticket maior'], foto: 'wa-celular-4.jpg', fundo: VERDE }));

  pg(`
    ${faixa(cor, '3.1', 'Lançamento')}
    ${cabeca('', 'Contando que ==você começou==')}
    ${msg('Para família', 'Oi, [nome]! 💛 Comecei um projeto novo e queria que você fosse um dos primeiros a provar: **geladinhos de drink**! Caipirinha, morango com vodka, piña colada… R$ 7 cada. Posso te levar uns no [dia]?', 'Família compra por apoio e vira o seu primeiro divulgador.')}
    ${msg('Para amigos', 'Ei, [nome]! Lembra que eu vivia testando drink? Virou negócio 😂🍹 Agora faço **geladinho de drink**: caipirinha, sex on the beach, mojito… R$ 7 ou 3 por R$ 18. Bora provar?', 'Uma história curta + humor tiram o peso de “estou vendendo”.')}
    ${msg('Para colegas e conhecidos', 'Oi, [nome], tudo bem? Aqui é a [seu nome], do [onde se conhecem]. Comecei a fazer **geladinhos de drink** e estou com pronta entrega 🍹 R$ 7 cada. Te mando o cardápio?', 'Lembra de onde vocês se conhecem e pede permissão antes de mandar o cardápio.')}
    <div style="margin-top:auto">${callout('dica', 'Meta do lançamento', 'Mande para **50 contatos** nos dois primeiros dias, um por um, com o nome. É o empurrão que traz as primeiras 15 a 20 vendas.')}</div>`);

  pg(`
    ${faixa(cor, '3.2', 'Grupos')}
    ${cabeca('', 'Vendendo em ==grupos== sem ser chato')}
    ${msg('Grupo do condomínio', 'Boa tarde, vizinhos! 😊 Sou a [seu nome], do [bloco/apto]. Faço **geladinhos de drink e gourmet** aqui no prédio: entrego na sua porta em 10 minutos. Drink R$ 7 · sem álcool R$ 5. Quem quiser, me chama no privado!', 'Vizinho confia em vizinho. “Entrego na sua porta” é a vantagem que ninguém de fora tem.', 'sexta à tarde')}
    ${msg('Grupo do trabalho', 'Pessoal, sexta tem happy hour? 🍹 Faço **geladinho de drink** e levo para o escritório: caipirinha, mojito e morango com vodka. 3 por R$ 18. Me chamem no privado até quinta!', 'Conecta com um momento que já existe (o happy hour) e dá um prazo.', 'quarta ou quinta')}
    ${msg('Grupo de escola, faculdade ou igreja', 'Oi, gente! Faço **geladinhos gourmet sem álcool** (Ninho com creme de avelã, brigadeiro, morango…) por R$ 5 a R$ 6. Para festas e encomendas, é só chamar no privado 💛', 'Em grupos com crianças ou religiosos, ofereça só o sem álcool.')}
    <div style="margin-top:auto">${callout('atencao', 'Regra de ouro dos grupos', '**Peça licença ao administrador** antes, poste no máximo 1 vez por semana e leve a conversa para o privado. Quem enche o grupo de propaganda é removido.')}</div>`);

  const STATUS = [
    ['Segunda', 'Bastidores', '[vídeo da produção] “Fornada da semana começando 🍋 Quais sabores vocês querem que eu faça?”'],
    ['Terça', 'Produto', '[foto contra a luz] “Caipirinha de maracujá 🍹 R$ 7 · 3 por R$ 18. Pronta entrega!”'],
    ['Quarta', 'Prova social', '[print de cliente elogiando, com autorização] “Ver isso faz meu dia 💛 Obrigada, [nome]!”'],
    ['Quinta', 'Antecipação', '“Fim de semana vai ser quente ☀️ Já garantiu o seu? Reservas até amanhã.”'],
    ['Sexta', 'Oferta', '[foto de 3 sabores] “Sextou 🍹 Combo 3 por R$ 18 só hoje e amanhã!”'],
    ['Sábado', 'Uso', '[foto do geladinho na praia, piscina ou churrasco] “É assim que o sábado tem que ser.”'],
    ['Domingo', 'Pergunta', '“Enquete: qual sabor novo vocês querem? 1) Mojito 2) Blue Lagoon 3) Piña colada”'],
  ];
  pg(`
    ${faixa(cor, '3.3', 'Status')}
    ${cabeca('', 'Uma semana de ==status pronta==', '3 a 5 status por dia, espaçados (manhã, almoço e fim de tarde). Cada dia tem uma função diferente.')}
    <div style="display:flex;flex-direction:column;gap:1.6mm">
      ${STATUS.map(([d, t, m], i) => `<div style="display:flex;gap:2.6mm;align-items:stretch"><div style="width:18mm;flex-shrink:0;border-radius:2.4mm;background:${i % 2 ? '#E5F4EC' : VERDE};color:${i % 2 ? VERDE : '#fff'};display:flex;flex-direction:column;justify-content:center;padding:1.4mm 2mm"><p style="font-family:Outfit;font-weight:800;font-size:8.4pt;color:inherit">${d}</p><p style="font-size:6.6pt;color:inherit">${t}</p></div><div style="flex:1;background:${BOLHA};border-radius:2.4mm;padding:1.6mm 2.4mm;font-size:7.9pt;line-height:1.4">${txt(m)}</div></div>`).join('')}
    </div>
    <div style="margin-top:auto">${callout('segredo', 'Vídeo de 5 segundos', 'O status que mais gera conversa é um vídeo curtinho: o geladinho saindo do freezer, a mão apertando, o gelo estalando. **Movimento prende o olho.**')}</div>`);

  pg(`
    ${faixa(cor, '3.4', 'Atendimento')}
    ${cabeca('', 'Quando o cliente ==chama você==')}
    ${conversa([['c', 'Oi, quanto é o geladinho?'], ['v', 'Oi, [nome]! 😊 Os de drink são **R$ 7** ou **3 por R$ 18**. Hoje tenho caipirinha, morango com vodka e piña colada.'], ['v', '[foto dos 3 sabores]'], ['v', 'Você prefere mais cítrico ou mais docinho?']])}
    ${msg('Quando perguntam “tem de quê?”', 'Hoje tenho: 🍋 **Caipirinha de limão** · 🥭 **Maracujá** · 🍓 **Morango com vodka** · 🍍 **Piña colada**. O mais pedido da semana é o de [sabor]. Quer experimentar esse?', 'Lista curta e visual + uma recomendação. Quem tem muita opção demora para decidir.')}
    ${msg('Quando o cliente some no meio da conversa', 'Oi, [nome]! Separei um de [sabor] aqui caso você queira 😊 Seguro até as [horário], tá?', 'Reserva gentil, com prazo. Não cobra, mas lembra.', '2 a 3 h depois')}
    <div style="margin-top:auto">${callout('dica', 'Pergunta de escolha', '“Mais cítrico ou mais docinho?” faz a pessoa pensar **em qual** comprar, e não **se** vai comprar.')}</div>`);

  pg(`
    ${faixa(cor, '3.5', 'Dúvidas frequentes')}
    ${cabeca('', 'Respostas para as ==dúvidas de sempre==')}
    ${msg('“É forte?”', 'É na medida: dá para sentir o drink, mas é leve, mais ou menos como **meia dose** por geladinho. Por isso congela firme e fica gostoso de comer 🍹', 'Tranquiliza quem tem medo de ser forte demais e quem achava que seria fraco.')}
    ${msg('“Quanto tempo dura fora do freezer?”', 'Fora do freezer, uns 30 a 40 minutos. No isopor com gelo, até 4 horas. Em casa, guarde no freezer: dura até 30 dias.')}
    ${msg('“Tem sem álcool?”', 'Tenho sim! 💛 Ninho com creme de avelã, brigadeiro, morango… R$ 5 a R$ 6. Ótimo para as crianças e para quem vai dirigir.', 'Toda pergunta é uma chance de vender mais um item.')}
    ${msg('“É para o meu filho / sobrinho adolescente”', 'O de drink é só para maiores de 18, tá? Mas para ele eu tenho os **sem álcool**, que fazem o maior sucesso com a criançada: Ninho com creme de avelã e brigadeiro. Mando 3?', 'Responde com responsabilidade e **mantém a venda**.')}
    <div style="margin-top:auto">${callout('dica', 'Transforme em atalho', 'Cadastre essas respostas como Respostas Rápidas (/forte, /dura, /semalcool).')}</div>`);

  pg(`
    ${faixa(cor, '3.6', 'Objeções')}
    ${cabeca('', 'Quando o cliente ==hesita==')}
    ${msg('“Tá caro”', 'Entendo! É que ele é feito com **fruta de verdade e drink de verdade**, 120 ml, não é sacolé comum. No combo de 3 sai R$ 6 cada. E um drink no bar sai R$ 25 😅 Quer provar um antes?', 'Mostra o valor, oferece um caminho mais barato (combo) e compara com a alternativa real (o bar).')}
    ${msg('“Vou pensar”', 'Claro, [nome]! 😊 Só te aviso que essa fornada de [sabor] costuma acabar até [dia]. Se quiser, separo um pra você e você me confirma até [horário], sem compromisso.', 'Escassez verdadeira + reserva sem compromisso: a decisão fica fácil.')}
    ${msg('“Depois eu vejo”', 'Combinado! Te mando no status quando sair a próxima fornada 🍹 Salva meu número pra você ver, tá?', 'Não insiste, e ainda ganha um contato salvo para as próximas vendas.')}
    ${msg('“Já comprei de outra pessoa”', 'Que bom que você gosta de geladinho de drink! 😄 Quando quiser comparar, o meu de [sabor] é o mais pedido. Te deixo um para provar no próximo pedido?', 'Sem falar mal de ninguém: convida para comparar.')}
    <div style="margin-top:auto">${callout('atencao', 'No máximo 2 tentativas', 'Ouviu “não” duas vezes? Agradeça e pare. O cliente lembra de quem foi educado, e volta.')}</div>`);

  pg(`
    ${faixa(cor, '3.7', 'Mais objeções')}
    ${cabeca('', 'Objeções de ==entrega e confiança==')}
    ${msg('“Será que não derrete no caminho?”', 'Pode ficar tranquila! Levo no **isopor com gelo reciclável**, chega durinho na sua mão. Se chegar mole, troco na hora 😊', 'Explica o cuidado e dá uma garantia simples. A garantia quase nunca é usada, mas tira o medo.')}
    ${msg('“Não sei se vou gostar”', 'Te entendo! Por isso tenho o **combo degustação**: 3 sabores diferentes por R$ 18. Assim você descobre o seu preferido 🍹', 'Transforma a dúvida em motivo para comprar mais.')}
    ${msg('“Não conheço você”', 'Imagina, é normal! Dá uma olhada no meu status: tem foto de cliente e da produção 💛 Se preferir, você paga só na entrega.', 'Prova social + reduzir o risco do primeiro pedido.')}
    ${msg('“Manda o cardápio que eu vejo depois”', 'Mandei! 👆 Ah, o de [sabor] costuma ser o primeiro a acabar no fim de semana. Quer que eu reserve um?', 'Manda o que foi pedido e já sugere o próximo passo.')}`);

  pg(`
    ${faixa(cor, '3.8', 'Fechamento')}
    ${cabeca('', 'Fechando o pedido ==sem erro==')}
    ${msg('Confirmação do pedido', '✅ **Pedido confirmado, [nome]!**\n🍹 [quantidade]x [sabor]\n🍹 [quantidade]x [sabor]\n💰 Total: R$ [valor]\n📍 Entrega: [endereço], [dia] às [horário]\n💳 Pix: [chave]\nÉ só me mandar o comprovante 😊', 'Resumo claro evita erro de sabor, endereço e valor. E passa profissionalismo.')}
    ${msg('Pix pendente (lembrete educado)', 'Oi, [nome]! Tudo certo para a entrega de [dia]? Só me manda o comprovante do Pix quando puder, que eu já deixo tudo separadinho 😊', 'Lembra do pagamento sem cobrar de forma agressiva.', 'na véspera')}
    ${msg('Pagamento na entrega', 'Combinado, pagamento na entrega! Aceito Pix ou dinheiro (se for dinheiro, me avisa se precisa de troco 😊).')}
    <div style="margin-top:auto">${callout('segredo', 'Sinal para encomendas', 'Para festas e pedidos grandes, peça **50% de sinal no Pix** para reservar a data. Quem paga sinal não desiste.')}</div>`);

  pg(`
    ${faixa(cor, '3.9', 'Entrega e pós-venda')}
    ${cabeca('', 'Entrega que ==gera a próxima venda==')}
    ${msg('Saí para a entrega', 'Saindo agora com o seu pedido! 🛵 Chego em uns [minutos] minutos. Já deixa o freezer com espaço 😉', '', 'ao sair')}
    ${msg('Feedback (2 horas depois)', 'E aí, [nome], qual foi o preferido? 😍 Me conta, que eu uso a opinião de vocês para criar os próximos sabores!', 'Pergunta qual foi o preferido (e não “gostou?”): a resposta é sempre positiva e vira prova social.', '2 h depois')}
    ${msg('Pedido de foto ou depoimento', 'Fico muito feliz! 💛 Se puder me mandar uma fotinho com o geladinho, eu posto no meu status (posso marcar você?). Ajuda demais quem está começando!', 'Pede de forma leve e explica por que é importante.')}
    ${msg('Indicação', 'Obrigada, [nome]! Uma ideia: **indique uma amiga** e, quando ela fizer o primeiro pedido, vocês duas ganham 1 geladinho 🍹 É só ela falar que veio por você!', 'Recompensa as duas pessoas: quem indica e quem é indicada.')}`);

  pg(`
    ${faixa(cor, '3.10', 'Recompra')}
    ${cabeca('', 'O cliente que ==volta toda semana==', 'Vender de novo para quem já comprou é **5 vezes mais fácil** do que conquistar um cliente novo.')}
    ${msg('Recompra (3 a 5 dias depois)', 'Oi, [nome]! Acabou o estoque aí? 😄 Essa semana tem [sabor] fresquinho e voltou o [sabor preferido dela]. Te levo o combo de 3?', '', 'D+3 a D+5')}
    ${msg('Sabor novo', '[nome], você é uma das primeiras a saber: saiu **[sabor novo]** 🍹 Fiz poucos para testar. Quer provar antes de todo mundo?', 'Faz o cliente se sentir especial e cria urgência real (lote de teste).')}
    ${msg('Calor chegando', 'Previsão de [temperatura]° no sábado ☀️ Já deixo o seu combo separado para não ficar sem? Entrego na sexta à noite.', 'O clima é o melhor gatilho de geladinho, e é verdadeiro.', 'quinta')}
    ${msg('Dia do pagamento', 'Oi, [nome]! Começo de mês = geladinho no freezer 😄 Essa semana o combo de 5 sai por R$ 30. Separo o seu?', '', 'dia 5 ou dia 20')}
    <div style="margin-top:auto">${callout('dica', 'Anote o preferido', 'Na etiqueta do WhatsApp ou num caderno: nome + sabor preferido. Lembrar do sabor da pessoa é o que mais encanta.')}</div>`);

  pg(`
    ${faixa(cor, '3.11', 'Datas especiais')}
    ${cabeca('', 'O calendário ==que vende o ano todo==')}
    ${tabela(['Data', 'Mensagem curta', 'Quando enviar'], [
      ['Carnaval', '“Bloco sem geladinho não é bloco 🎉 Kit 10 por R$ 60, pronto para o isopor!”', '1 semana antes'],
      ['Páscoa', '“Geladinho de chocolate com licor e brigadeiro: a páscoa gelada 🍫”', '5 dias antes'],
      ['Dia das Mães', '“Caixa presente com 6 sabores + cartão escrito à mão por R$ 45 💐”', '10 dias antes'],
      ['Festa junina', '“Batida de amendoim e de coco geladinhas 🌽 Arraiá com drink!”', 'junho'],
      ['Dia dos Pais', '“Kit do pai: 6 geladinhos de drink + cartão. Ele vai amar 🍹”', '10 dias antes'],
      ['Jogos de Copa / final', '“Jogo do Brasil + geladinho de caipirinha 🇧🇷 Combo da torcida: 5 por R$ 30”', '2 dias antes'],
      ['Black Friday', '“Só hoje: combo 5 por R$ 28 🖤”', 'no dia'],
      ['Natal e Réveillon', '“Picolé de morango com espumante e kits para a ceia 🥂 Encomendas até dia 20”', 'início de dezembro'],
    ])}
    <div style="margin-top:auto">${callout('segredo', 'Antecedência é dinheiro', 'Datas com presente (mães, pais, namorados) vendem com **10 dias** de antecedência. Festas e feriados, com **1 semana**. Avisar na véspera é tarde.')}</div>`);

  pg(`
    ${faixa(cor, '3.12', 'Festas e encomendas')}
    ${cabeca('', 'Do orçamento ==ao kit entregue==')}
    ${msg('Resposta ao pedido de orçamento', 'Que delícia, [nome]! 🎉 Para quantas pessoas e qual a data? Já te adianto: o **kit de 20** sai R$ 120 e o **kit de 50**, R$ 280, entregues congelados no isopor. Os sabores você escolhe!', 'Pergunta o essencial e já mostra preço: o cliente não precisa pedir de novo.')}
    ${msg('Proposta fechada', 'Fiz assim para a sua festa: **[quantidade] geladinhos** · [sabores] · etiqueta com o nome do aniversariante · entrega dia [data] às [horário] · **R$ [valor]**. Para reservar a data, 50% de sinal no Pix 😊', 'Tudo em uma mensagem: sabores, quantidade, extra (etiqueta), entrega e o próximo passo.')}
    ${msg('Follow-up do orçamento', 'Oi, [nome]! Conseguiu ver a proposta? Tenho só mais [número] datas livres em [mês], por isso pergunto 😊', '', '24 h depois')}
    ${msg('Véspera da festa', 'Amanhã é o grande dia! 🎉 Confirmando: entrega às [horário] em [endereço]. Deixa um espaço no freezer, que eles chegam prontinhos!', '', 'véspera')}`);

  pg(`
    ${faixa(cor, '3.13', 'Empresas e revenda')}
    ${cabeca('', 'Vendendo para ==empresas e comércios==')}
    ${msg('RH / happy hour de empresa', 'Olá, [nome]! Sou a [seu nome], faço **geladinhos de drink e gourmet** para eventos. Para o happy hour da equipe, monto kits a partir de 30 unidades com sabores sortidos (com e sem álcool), entregues prontos para servir. Posso te mandar a proposta?', 'Tom mais formal, oferta pensada para o evento e pedido de permissão.')}
    ${msg('Revenda (bar, quiosque, lanchonete)', 'Oi, [nome]! Produzo geladinhos de drink artesanais e trabalho com revenda: **R$ 4,50 a unidade** para você vender a R$ 7. Vende muito com bebida e no calor. Posso deixar alguns para você provar com a equipe?', 'Mostra o lucro do comerciante (R$ 2,50 por unidade) e oferece degustação.')}
    ${msg('Depois da degustação', 'E aí, [nome], o que a equipe achou? 😊 Para começar, sugiro 30 unidades em 3 sabores. Entrego na [dia]. Fechamos?', '', '2 dias depois')}
    <div style="margin-top:auto">${callout('atencao', 'Revenda de bebida alcoólica', 'Vender em quantidade para comércios costuma exigir MEI e licença sanitária. Informe-se na prefeitura antes de crescer por esse caminho.')}</div>`);

  pg(`
    ${faixa(cor, '3.14', 'Clientes sumidos')}
    ${cabeca('', 'Trazendo de volta ==quem sumiu==', 'Cliente que não compra há mais de 30 dias. Uma mensagem bem feita traz de volta 1 em cada 5.')}
    ${msg('Saudade', 'Oi, [nome]! Faz tempo que você não aparece 😢 Lembrei de você porque voltou o [sabor preferido]! Quer que eu separe um combo?', 'Lembrar do sabor preferido mostra que você se importa.')}
    ${msg('Oferta de retorno', '[nome], para os clientes que estão comigo desde o começo: **combo de 5 por R$ 28** só até domingo 💛 Bora?', 'Faz a pessoa se sentir parte de um grupo especial.')}
    ${msg('Pesquisa (quando nada funciona)', 'Oi, [nome]! Posso te pedir uma ajuda rápida? O que faria você voltar a pedir: sabor novo, preço, entrega? Sua resposta me ajuda muito 💛', 'Mesmo quem não compra costuma responder, e a resposta mostra o que melhorar.')}
    <div style="margin-top:auto">${callout('dica', 'Uma vez por mês', 'Separe o primeiro sábado do mês para mandar estas mensagens. Leva 20 minutos e costuma trazer vendas na mesma semana.')}</div>`);

  pg(`
    ${faixa(cor, '3.15', 'Áudio')}
    ${cabeca('', 'Roteiro de ==áudio de 20 segundos==', 'Para quem prefere falar. Áudio curto passa simpatia e confiança.')}
    <div class="box b-coco"><p style="font-size:8.6pt;line-height:1.6">🎙️ “Oi, <b>[nome]</b>, tudo bem? Aqui é a <b>[seu nome]</b>! Passando rapidinho só pra te contar que saiu agora a fornada de <b>[sabor]</b>, aquele que você gostou. Tá <b>R$ 7</b>, ou <b>3 por 18</b>. Se quiser, eu levo aí <b>hoje até as [horário]</b>. Me fala quantos que eu separo, tá? Beijo!”</p></div>
    ${tabela(['Regra do áudio', 'Por quê'], [['Até 30 segundos', 'Acima disso, poucos ouvem até o fim'], ['Nome da pessoa nos 3 primeiros segundos', 'Prende a atenção'], ['Sorria enquanto fala', 'Dá para ouvir o sorriso na voz'], ['Termine com o próximo passo', '“Me fala quantos”'], ['Mande uma foto logo depois', 'O áudio cria vontade, a foto fecha']])}
    <div style="margin-top:auto">${callout('segredo', 'Áudio para quem já é cliente', 'Para quem nunca comprou, comece por texto + foto. O áudio funciona melhor com quem já conhece você.')}</div>`);

  pg(`
    ${faixa(cor, '3.16', 'Catálogo')}
    ${cabeca('', 'Textos prontos ==para o catálogo==', 'Copie no catálogo do WhatsApp Business: nome, preço e uma descrição que dá água na boca.')}
    ${tabela(['Item', 'Descrição', 'Preço'], [
      ['Caipirinha de Limão', 'O clássico em versão geladinho: limão fresco, pedacinhos da fruta e cachaça. 120 ml. **Contém álcool.**', 'R$ 7'],
      ['Morango com Vodka', 'Morango batido com pedaços da fruta e vodka. Docinho e refrescante. 120 ml. **Contém álcool.**', 'R$ 7'],
      ['Piña Colada', 'Abacaxi, leite de coco e rum: cremoso, com clima de praia. 120 ml. **Contém álcool.**', 'R$ 7'],
      ['Combo 3 sabores', 'Escolha 3 sabores de drink. Perfeito para provar ou dividir.', 'R$ 18'],
      ['Ninho com Creme de Avelã', 'Cremoso de leite Ninho com listras de creme de avelã. **Sem álcool.**', 'R$ 6'],
      ['Kit Festa 20', '20 geladinhos sortidos, entregues congelados no isopor. Encomende com 3 dias de antecedência.', 'R$ 120'],
    ], [2])}
    ${callout('dica', 'A fórmula da descrição', '**O que é + o detalhe que dá vontade + tamanho + aviso.** Duas linhas bastam: catálogo com textão ninguém lê.')}
    ${fotosFaixa(['sabor-caipirinha.jpg', 'sabor-morango.jpg', 'sabor-pina-colada.jpg', 'sabor-blue-lagoon.jpg'], 24)}`);

  pg(`
    ${faixa(cor, '3.17', 'Instagram')}
    ${cabeca('', 'Bio e destaques que ==levam para o WhatsApp==', 'O Instagram atrai; o WhatsApp fecha. A bio e os destaques fazem a ponte.')}
    <div class="row" style="align-items:stretch">
      <div class="box b-coco"><p class="eb" style="color:${VERDE}">Bio pronta (3 linhas)</p><p style="font-size:8.6pt;margin-top:1.4mm;line-height:1.55">🍹 Geladinhos de drink e gourmet<br>📍 Entregas em [bairro/cidade]<br>👇 Peça pelo WhatsApp</p><p class="small" style="margin-top:1.4mm">No link da bio, use o link direto do seu WhatsApp (wa.me/55 + DDD + número).</p></div>
      <div class="box b-turq"><p class="eb" style="color:${C.turquesa}">Destaques fixos</p><div style="margin-top:1.4mm">${lista(['**Cardápio**: sabores e preços', '**Festas**: kits e fotos de eventos', '**Clientes**: prints e fotos (com autorização)', '**Como pedir**: passo a passo e entrega'])}</div></div>
    </div>
    ${tabela(['Post', 'Legenda pronta'], [
      ['Foto contra a luz', '“Esse é o de maracujá, e as sementinhas são de verdade 🍹 Pede o seu pelo WhatsApp (link na bio).”'],
      ['Vídeo da produção', '“Fornada de sexta saindo! Qual sabor você levaria? Comenta aqui 👇”'],
      ['Cliente feliz', '“Quando a cliente manda foto da festa… 💛 Obrigada, [nome]! Encomendas pelo WhatsApp.”'],
    ])}
    <div style="margin-top:auto">${callout('segredo', 'Comentou, ganhou mensagem', 'Toda pessoa que comentar ou responder um story recebe uma mensagem no privado: “Oi! Vi que você curtiu o de [sabor]. Quer que eu separe um?”')}</div>`);

  pg(`
    ${faixa(cor, '3.18', 'Ticket maior')}
    ${cabeca('', 'Vendendo ==mais itens== no mesmo pedido', 'Cada pedido é a chance de vender mais um. Estas frases fazem isso sem forçar.')}
    ${msg('Combo antes do avulso', 'Fica R$ 7 cada, mas **3 saem por R$ 18**: a maioria leva o combo para provar sabores diferentes 😊 Quer montar o seu?', 'Mostrar o combo primeiro faz ele parecer a escolha normal.')}
    ${msg('Para a casa toda', 'Mais algum para as crianças ou para quem não bebe? Tenho os **sem álcool** de Ninho com creme de avelã e brigadeiro, R$ 6.', 'Lembra quem mais está em casa: o pedido de 1 pessoa vira o da família.')}
    ${msg('Estoque para o fim de semana', 'Quer aproveitar e já deixar uns no freezer para o fim de semana? Duram até 30 dias 😉', 'O cliente compra hoje o que compraria depois, e você entrega uma vez só.')}
    ${destaques([['Avulso', 'R$ 7', '1 geladinho', C.turquesa, C.turqEsc], ['Com combo', 'R$ 18', '3 sabores', '#0B7A5E', '#06523F'], ['Combo + sem álcool', 'R$ 30', 'pedido da família', C.coralTx, '#8E2219']])}`);

  // ================= PARTE 4 =================
  pg(`
    ${faixa(cor, '04', 'Rotina')}
    ${cabeca('', '15 minutos por dia ==que vendem por você==')}
    ${tabela(['Horário', 'O que fazer', 'Tempo'], [
      ['Manhã (8h a 9h)', '1º status do dia + responder mensagens da noite', '5 min'],
      ['Almoço (12h)', '2º status (produto ou oferta)', '2 min'],
      ['Tarde (15h a 17h)', 'Recompra: 5 clientes com etiqueta “Cliente”', '5 min'],
      ['Fim de tarde (18h)', '3º status + confirmar entregas do dia', '3 min'],
    ], [2])}
    <h2>Os números que importam</h2>
    ${tabela(['Indicador', 'Como medir', 'Meta inicial'], [['Conversas por dia', 'chats novos ou respondidos', '10'], ['Taxa de fechamento', 'pedidos ÷ conversas', '30%'], ['Recompra', 'clientes que voltaram no mês ÷ total', '40%'], ['Ticket médio', 'faturamento ÷ pedidos', 'R$ 18 ou mais']], [2])}
    ${fotosFaixa(['wa-celular-3.jpg', 'venda-condominio.jpg'], 30)}
    <div style="margin-top:auto">${callout('segredo', 'O que aumenta o ticket', 'Sempre ofereça o **combo** antes do avulso e pergunte “mais algum para as crianças?” no final. Só essas duas frases levam o ticket de R$ 7 para R$ 18 ou mais.')}</div>`);

  pg(`
    ${faixa(cor, '05', 'Checklist')}
    ${cabeca('', 'Seu WhatsApp ==pronto para vender==')}
    <div class="box" style="background:#E5F4EC">${lista(['Instalei o WhatsApp Business e completei o perfil', 'Montei o catálogo com fotos, preços e combos', 'Ativei a saudação e a mensagem de ausência', 'Cadastrei as 7 respostas rápidas', 'Criei as etiquetas (Novo, Pedido, Pago, Cliente, Festa)', 'Pedi para os contatos salvarem meu número', 'Mandei a mensagem de lançamento para 50 contatos', 'Programei os status da semana', 'Fiz a primeira recompra 3 dias depois da venda', 'Fechei a primeira encomenda de festa! 🎉'], 'ck')}</div>
    ${fotosFaixa(['whats-5-camila.jpg', 'whats-3-renata.jpg', 'whats-6-fernanda.jpg'], 52)}
    <div style="margin-top:auto;display:flex;gap:4mm;align-items:center">
      <img src="${img('bruna-retrato.jpg')}" style="width:26mm;height:26mm;border-radius:50%;object-fit:cover;flex-shrink:0"/>
      <div><p style="font-size:8.6pt">No começo eu tinha vergonha de oferecer. Quando parei de “vender” e comecei a <b>conversar</b>, os pedidos vieram. Use as mensagens como ponto de partida e coloque o seu jeito nelas.</p><p class="pincel" style="font-size:14pt;margin-top:1mm">Bruna</p></div>
    </div>`);

  return P;
}
