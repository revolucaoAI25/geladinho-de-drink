# Geladinhos de Drinks Lucrativos — roteiro de geração de imagens (Gemini)

> **Para a IA que vai operar o navegador:** siga este documento do início ao fim, na ordem.
> Cada imagem tem um **código** (ex.: `A1`), um **nome de arquivo**, um **formato**, as **referências que você deve anexar** e o **prompt** (copie exatamente o bloco de código). No fim, entregue todos os arquivos com os nomes indicados.

---

## 0. Como trabalhar

1. Abra **gemini.google.com**, com o modelo de imagem ativo (“Criar imagens” / Nano Banana; use o modelo de maior qualidade disponível).
2. **Um chat novo por bloco** (A, B, C…). Dentro do bloco, gere as imagens no mesmo chat, para manter a consistência.
3. **Anexe as referências** indicadas em cada item antes de enviar o prompt (botão de anexar imagem). Os arquivos estão na pasta `imagens/` que acompanha este documento.
4. **Formato:** o formato vem escrito no início de cada prompt (ex.: `Aspect ratio 4:5`). Se o Gemini entregar em outro formato, peça: *“Regenerate exactly the same image in 4:5 vertical format.”*
5. **Baixe cada imagem em resolução máxima** e **renomeie exatamente** com o nome indicado (ex.: `a1-bruna-retrato.png`).
6. **Confira o checklist de cada imagem.** Se algo falhar, peça a correção no mesmo chat, de forma específica. Exemplo: *“Keep everything identical, but make the skin texture more natural, with visible pores, less smooth.”* Até 3 tentativas por imagem; depois, siga em frente e anote o problema.
7. **Textos dentro das imagens** (cartazes, prints e capas) precisam sair **exatamente** como estão no prompt, em português, com acentos. Se vier errado, peça: *“Fix only the text: it must read exactly “…”. Keep everything else identical.”*
8. **A Bruna precisa ser sempre a mesma pessoa.** Depois de aprovar a `a1-bruna-retrato.png`, anexe-a em TODOS os prompts em que ela aparece.

### Regras de realismo (valem para tudo)

- **Tem que parecer foto de verdade**, tirada com câmera ou celular bom. Nada de aparência de ilustração, 3D, pele de plástico, brilho exagerado ou simetria perfeita.
- Pele com **textura real** (poros, pequenas imperfeições), cabelo com **fios soltos**, mãos com **5 dedos e proporções corretas**, unhas naturais.
- **Luz natural** de verão (janela ou fim de tarde), sombras suaves e coerentes.
- O geladinho é sempre **igual ao da logo**: saquinho plástico **transparente, retangular e achatado**, com a **selagem serrilhada em cima e embaixo** (como um chup-chup gourmet), mais ou menos **5 cm × 20 cm**, com o conteúdo congelado colorido, **pedaços de fruta visíveis**, gotinhas de condensação e um leve gelo na superfície. Nunca palito de picolé, nunca copo.

### Bloco de estilo — já incluso no fim de cada prompt

```
STYLE: ultra-realistic photograph, shot on a full-frame camera with a 50mm or 85mm lens (or a high-end smartphone when stated), natural summer daylight, soft shadows, true-to-life colors, subtle film grain, shallow depth of field where natural. Real skin texture with visible pores, natural flyaway hairs, anatomically correct hands with five fingers. No illustration, no 3D render look, no plastic skin, no over-saturation, no watermark, no extra text unless specified.
GELADINHO DESIGN (keep consistent): flat rectangular transparent plastic ice pop sachet, about 5 x 20 cm, with crimped zig-zag heat-sealed strips at the top and at the bottom, filled with a frozen colorful drink mixture with visible fruit pieces, tiny condensation droplets and a light frost on the plastic — exactly like the sachets in the attached logo.
```

---

## Ordem de geração (resumo)

| Bloco | Imagens | Para quê |
|---|---|---|
| **A** | A1 a A3 | A especialista **Bruna Martins** (A1 é a referência mestre do rosto) |
| **B** | B1 a B11 | Os geladinhos: referência mestre + 10 sabores |
| **C** | C1 a C3 | Cartaz da abertura, foto dos ingredientes, cartaz da oferta |
| **D** | D1 a D8 | Galeria: 4 fotos de alunos e 4 rostos |
| **E** | E1 a E4 | 4 prints de conversa no WhatsApp |
| **F** | F1 a F5 | Capas dos order bumps do checkout |

Total: **34 imagens.**

---

## BLOCO A — A especialista: Bruna Martins

**Quem é:** brasileira, **28 a 32 anos**, bonita de um jeito natural e próximo (a vizinha simpática que vende bem, não uma modelo de passarela). Pele morena clara, com subtom dourado. Cabelo castanho-escuro ondulado na altura do peito. Olhos castanhos, sobrancelhas naturais, sorriso largo e simpático, maquiagem leve. Sempre com **avental de linho verde-turquesa (#0D6F6B)** por cima de uma camiseta ou blusa de linho clara.

### A1 · `a1-bruna-retrato.png` · 1:1 · REFERÊNCIA MESTRE

Anexar: nada.

```
Aspect ratio 1:1. Photorealistic portrait of a Brazilian woman, 30 years old, naturally beautiful and approachable, warm light-brown (morena clara) skin with golden undertone, long dark-brown wavy hair falling to her chest with natural flyaways, warm brown eyes, natural eyebrows, light everyday makeup, a genuine wide friendly smile showing teeth slightly. She wears a light beige linen blouse under a deep teal-green (#0D6F6B) linen apron. Head-and-shoulders framing, looking at the camera, slight head tilt. Background: a bright, airy Brazilian home kitchen softly out of focus, with a window, a green plant and a hint of yellow fruit. Soft natural window light from the left.
STYLE: ultra-realistic photograph, shot on a full-frame camera with an 85mm lens, natural daylight, soft shadows, true-to-life colors, subtle film grain, shallow depth of field. Real skin texture with visible pores and tiny natural imperfections, natural flyaway hairs. No illustration, no 3D render look, no plastic skin, no over-saturation, no watermark, no text.
```

**Checklist:** parece uma foto real · cara de brasileira · entre 28 e 32 anos · simpática e bonita sem parecer modelo · avental verde-turquesa.

### A2 · `a2-bruna-cozinha.png` · 4:5 · tela “As receitas são fáceis?”

Anexar: `a1-bruna-retrato.png` (rosto), `MARCA-logo.webp` (formato do geladinho), `referencia/REF-facil-especialista-cozinha.jpg` (composição).

```
Aspect ratio 4:5 vertical. Use the woman from the first attached photo — same face, same hair, same apron — keep her identity exactly. Composition inspired by the third attached photo. She stands at a light wooden kitchen counter in a bright Brazilian home kitchen, focused and smiling slightly, carefully pouring a frozen-drink mixture from a small glass pitcher through a small funnel into a transparent rectangular ice pop sachet. On the counter: a row of already-filled sachets in lime green (caipirinha), passion-fruit orange with black seeds, and strawberry pink; halved limes, passion fruits, strawberries, mint leaves, a cutting board, a bowl of ice, and a bottle of cachaça with no readable label. Plants and window light in the background. Natural, candid, mid-action moment.
STYLE: ultra-realistic photograph, shot on a full-frame camera with a 35mm lens, natural summer daylight from a window, soft shadows, true-to-life colors, subtle film grain. Real skin texture, natural flyaway hairs, anatomically correct hands with five fingers. No illustration, no 3D look, no plastic skin, no watermark, no text.
GELADINHO DESIGN: flat rectangular transparent plastic ice pop sachet, about 5 x 20 cm, with crimped zig-zag heat-sealed strips at the top and bottom, frozen colorful mixture with visible fruit pieces, condensation droplets — exactly like the sachets in the attached logo.
```

**Checklist:** mesma Bruna da A1 · está enchendo o saquinho · saquinhos iguais aos da logo · mãos perfeitas.

### A3 · `a3-bruna-especialista.png` · 4:5 · seção “Quem criou” e cartaz

Anexar: `a1-bruna-retrato.png`, `MARCA-logo.webp`.

```
Aspect ratio 4:5 vertical. Use the woman from the first attached photo — same face, hair and teal apron — keep her identity exactly. Waist-up portrait, she smiles confidently at the camera holding a fan of five colorful frozen drink sachets in one hand (lime green caipirinha, orange passion fruit, strawberry pink, creamy pale-yellow piña colada, bright red-orange), the other hand resting on a wooden counter. Background: sunny Brazilian kitchen with plants, a bowl of tropical fruits and a glass of caipirinha, softly blurred. Feels like a confident small-business owner, warm and trustworthy.
STYLE: ultra-realistic photograph, shot on a full-frame camera with an 85mm lens, natural summer daylight, soft shadows, true-to-life colors, subtle film grain, shallow depth of field. Real skin texture with visible pores, natural flyaway hairs, anatomically correct hands with five fingers. No illustration, no 3D look, no plastic skin, no watermark, no text.
GELADINHO DESIGN: flat rectangular transparent plastic ice pop sachets with crimped zig-zag seals at top and bottom, frozen colorful drink mixture with visible fruit pieces and condensation — exactly like the attached logo.
```

---

## BLOCO B — Os geladinhos

### B1 · `b1-geladinhos-referencia.png` · 1:1 · REFERÊNCIA MESTRE DO PRODUTO

Anexar: `MARCA-logo.webp`.

```
Aspect ratio 1:1. Photorealistic product photograph of six frozen drink ice pop sachets lying slightly fanned out on crushed ice on a light marble surface, top-down at a 45-degree angle. Each sachet is a flat rectangular transparent plastic bag about 5 x 20 cm with crimped zig-zag heat-sealed strips at the top and bottom, exactly like the sachets in the attached logo. Flavors, left to right: lime green caipirinha with lime bits and mint, bright orange passion fruit with black seeds, vivid pink strawberry with strawberry pieces, creamy pale-yellow piña colada with pineapple bits, light green mojito with mint leaves, red-orange "sex on the beach" gradient. Around them: lime wedges, a halved passion fruit, strawberries, pineapple chunks, mint sprigs. Frost and condensation droplets on the plastic. Bright summer daylight, gourmet food-photography styling, appetizing and premium.
STYLE: ultra-realistic commercial food photograph, full-frame camera, 100mm macro lens, natural daylight, soft shadows, true-to-life colors, crisp detail on the plastic seals and frost. No illustration, no 3D render look, no watermark, no text.
```

**Checklist:** parece foto real de produto · formato idêntico ao da logo · os 6 sabores bem diferentes · dá vontade de comer.

### B2 a B11 · os 10 sabores · 4:5 · carrossel “Sabores que você vai aprender”

**Composição de todos** (igual às referências de sabor): uma **mão feminina** (unhas naturais em tom nude) segurando **um geladinho em pé**, em primeiro plano, ao lado do **drink original** no copo certo, numa bancada de madeira clara ou mármore, com luz quente de fim de tarde de verão e os ingredientes espalhados.

Anexar em todos: `b1-geladinhos-referencia.png` + `referencia/REF-sabor-14.jpg` + `referencia/REF-sabor-17.jpg`.

**Modelo do prompt.** Troque `[SABOR]` pelo texto da tabela:

```
Aspect ratio 4:5 vertical. Match the sachet design of the first attached image and the composition, lighting and mood of the other attached images. A woman's hand with natural nude nails holds one frozen drink ice pop sachet upright in the foreground, slightly tilted toward the camera, sharp focus on the sachet. [SABOR] Warm late-afternoon summer sunlight with soft shadows, light wood or marble counter, a folded linen napkin, a few ingredients scattered. Shallow depth of field, background softly blurred.
STYLE: ultra-realistic photograph, full-frame camera, 85mm lens, natural golden-hour light, true-to-life colors, subtle film grain. Anatomically correct hand with five fingers. No illustration, no 3D look, no watermark, no text.
GELADINHO DESIGN: flat rectangular transparent plastic ice pop sachet, about 5 x 20 cm, crimped zig-zag heat seals at top and bottom, frozen mixture with visible pieces, frost and condensation droplets.
```

| Código | Arquivo | [SABOR] |
|---|---|---|
| B2 | `b2-sabor-caipirinha.png` | `The sachet is lime green and slightly translucent, filled with frozen caipirinha with tiny lime pulp, zest and crushed lime pieces. Next to it, a short glass of classic Brazilian caipirinha with crushed ice and lime wedges; halved limes and a muddler on the counter.` |
| B3 | `b3-sabor-maracuja.png` | `The sachet is bright golden orange, filled with frozen passion fruit drink with many black passion fruit seeds visible. Next to it, a passion fruit caipiroska in a short glass; two halved passion fruits showing pulp on the counter.` |
| B4 | `b4-sabor-morango.png` | `The sachet is vivid strawberry pink, filled with frozen strawberry vodka drink with visible strawberry chunks and seeds. Next to it, a strawberry caipiroska with crushed ice; fresh whole and halved strawberries and mint on the counter.` |
| B5 | `b5-sabor-pina-colada.png` | `The sachet is creamy pale yellow, opaque and creamy, filled with frozen piña colada with small pineapple bits and coconut flakes. Next to it, a piña colada in a hurricane glass with a pineapple wedge; a halved coconut and pineapple slices on the counter.` |
| B6 | `b6-sabor-mojito.png` | `The sachet is pale translucent green, filled with frozen mojito with lots of visible fresh mint leaves and thin lime slices inside. Next to it, a tall mojito glass with mint and lime; mint sprigs and lime wedges on the counter.` |
| B7 | `b7-sabor-sex-on-the-beach.png` | `The sachet shows a beautiful gradient from red at the bottom to orange and yellow at the top, filled with frozen "sex on the beach" with peach bits. Next to it, a tall sex on the beach cocktail with an orange slice; peaches and oranges on the counter.` |
| B8 | `b8-sabor-blue-lagoon.png` | `The sachet is vibrant translucent ocean blue, filled with frozen blue lagoon drink (blue curaçao and lemon) with thin lemon slices inside. Next to it, a blue lagoon cocktail in a tall glass with a lemon wheel; lemons on the counter. The blue must look natural and refreshing, not neon.` |
| B9 | `b9-sabor-melancia.png` | `The sachet is juicy watermelon red-pink, filled with frozen watermelon vodka drink with tiny watermelon bits and a few black seeds. Next to it, a watermelon drink in a glass with a small watermelon wedge; watermelon slices and mint on the counter.` |
| B10 | `b10-sabor-frutas-vermelhas.png` | `The sachet is deep berry purple-red, filled with frozen red berries and gin drink with visible blueberries, raspberries and blackberries. Next to it, a gin tonic with red berries and rosemary in a balloon glass; berries scattered on the counter.` |
| B11 | `b11-sabor-batida-de-coco.png` | `The sachet is milky white and creamy, filled with frozen Brazilian coconut batida (coconut milk, condensed milk and cachaça) with toasted coconut flakes. Next to it, a coconut batida in a short glass with grated coconut on the rim; a halved coconut on the counter.` |

**Checklist de cada sabor:** o saquinho é igual ao da B1 · a cor é bem distinta das outras · a mão está perfeita · o drink combina com o sabor.

---

## BLOCO C — Cenas do funil

### C1 · `c1-cartaz-abertura.png` · 4:5 · primeira imagem do funil

Anexar: `a1-bruna-retrato.png`, `a3-bruna-especialista.png`, `MARCA-logo.webp`, `MARCA-identidade-visual.webp`, `referencia/REF-cartaz-abertura.jpg` (modelo de layout), `b2-sabor-caipirinha.png`, `b3-sabor-maracuja.png`, `b4-sabor-morango.png`, `b5-sabor-pina-colada.png`.

```
Aspect ratio 4:5 vertical. Create a premium promotional poster for an online course, using the layout structure of the attached reference poster ("Pirulitos dos Drinks") but with the brand identity, colors and logo style of the attached "Geladinhos de Drinks Lucrativos" logo and brand board: warm cream background (#FEF7EE), deep teal (#0D6F6B), coral (#FF6B5B), mango yellow (#FFC538), lime (#9ED43A), berry pink (#E83E8C), tropical leaves and a soft sun.
LEFT/CENTER: the woman from the attached photos (same face, hair and teal apron — keep her identity exactly), photorealistic, smiling, holding a fan of colorful frozen drink sachets, standing behind a table full of sachets, tropical fruits and colorful cocktails.
TOP LEFT: the brand logo "Geladinhos de Drinks Lucrativos" reproduced faithfully from the attached logo.
RIGHT COLUMN: four rounded photo cards with real-looking sachet photos and labels, exactly: "CAIPIRINHA", "MARACUJÁ", "MORANGO", "PIÑA COLADA".
BELOW the cards, three small icon badges with exactly this text: "30 receitas passo a passo", "Comece com pouco investimento", "Aprenda a precificar e vender".
A small handwritten-brush accent text near the woman, exactly: "Venda o Verão!".
BOTTOM strip in deep teal with four tiny icons and exactly this text: "Receitas testadas · Feito em casa · Alto lucro · Acesso imediato".
All text in Brazilian Portuguese, spelled exactly as written above, crisp and legible. The person, sachets and fruits must look like real photographs; graphic elements clean and premium, not childish.
```

**Checklist:** a Bruna é a mesma · os textos estão exatos, com acentos · tem cara de cartaz profissional, não infantil · os saquinhos estão iguais aos da logo.

### C2 · `c2-custo-ingredientes.png` · 4:5 · tela “O custo é acessível?”

Anexar: `referencia/REF-custo-ingredientes.jpg` (composição), `b1-geladinhos-referencia.png`.

```
Aspect ratio 4:5 vertical. Composition inspired by the first attached photo, a real home-made overhead-ish shot (about 60 degrees) on a round light wooden table in a Brazilian home: a stack of empty transparent rectangular ice pop sachets (heat-seal style), a small funnel, a glass measuring jug, a can of sweetened condensed milk with no readable brand, a carton of coconut milk with no readable brand, bowls with limes, passion fruits, strawberries, pineapple chunks and mint, a bottle of cachaça and a bottle of vodka with blank labels, a small bag of sugar, a cutting board and a knife, and a few finished frozen sachets (lime green, orange, pink) on a plate. Everyday, accessible, affordable feel — clearly cheap ingredients from the supermarket, not luxury.
STYLE: ultra-realistic photograph taken with a good smartphone, natural window daylight, slightly imperfect real-home look, true-to-life colors. No illustration, no 3D look, no readable brand names, no watermark, no text.
```

### C3 · `c3-cartaz-oferta.png` · 4:5 · no meio da página de oferta

Anexar: `a3-bruna-especialista.png`, `MARCA-logo.webp`, `MARCA-identidade-visual.webp`, `referencia/REF-cartaz-oferta.jpg` (modelo de layout).

```
Aspect ratio 4:5 vertical. Create a premium promotional poster following the layout idea of the attached reference ("Pirulitos para Drinks" offer poster), but with the "Geladinhos de Drinks Lucrativos" brand identity (cream #FEF7EE background, deep teal #0D6F6B, coral #FF6B5B, mango #FFC538, lime #9ED43A, berry #E83E8C, tropical leaves).
CENTER: the woman from the attached photo (same face, hair, teal apron — keep identity exactly), photorealistic, smiling, holding colorful frozen drink sachets, with a table of sachets and cocktails in front.
TOP: the brand logo reproduced faithfully. TOP RIGHT: a golden round seal with exactly "GARANTIA 7 DIAS".
RIGHT: a modern smartphone showing a clean course menu screen in teal and cream with the title exactly "Treinamento completo" and six small menu items exactly: "Receitas", "Fórmula que Congela", "Embalagens", "Preço e Lucro", "Como Vender", "Bônus".
LEFT: two small testimonial cards with tiny round profile photos and short quotes exactly: "Vendi 30 no condomínio em 2 horas!" — Patrícia, Campinas; "Acertei o ponto logo no primeiro lote." — Larissa, Recife.
BOTTOM strip in deep teal with exactly: "30 receitas · 4 bônus · Acesso imediato · Garantia de 7 dias".
All text in Brazilian Portuguese spelled exactly as above, crisp and legible. Photographic elements must look real; layout premium and modern, not childish.
```

---

## BLOCO D — Galeria: “geladinhos feitos por quem começou do zero”

As **fotos** (D1 a D4) mostram o produto em uso real, com cara de **foto de celular de aluna**: bonita, mas caseira. Os **rostos** (D5 a D8) são retratos separados (o site coloca o rosto num círculo sobre a foto).

Anexar em D1 a D4: `b1-geladinhos-referencia.png` + `referencia/REF-galeria-aluno-1.jpg`.

| Código | Arquivo | Formato | Prompt |
|---|---|---|---|
| D1 | `d1-galeria-patricia.png` | 1:1 | `Aspect ratio 1:1. Photo taken with a good smartphone: a blue-and-white Brazilian styrofoam cooler box (isopor) opened on a building lobby bench, packed with neat rows of colorful frozen drink sachets (lime green, orange with seeds, pink, creamy yellow) on ice, a small handwritten cardboard sign leaning on it reading exactly "Geladinho de Drink R$ 7". Natural daylight, real residential building setting in Brazil. Match the sachet design of the attached reference exactly (flat transparent sachets with crimped zig-zag seals). Ultra-realistic, true-to-life colors, no watermark, no other text.` |
| D2 | `d2-galeria-diego.png` | 1:1 | `Aspect ratio 1:1. Photo taken with a smartphone on a sunny Brazilian beach: a red portable cooler with the lid open on the sand, full of colorful frozen drink sachets on ice (blue, lime green, orange, pink), a beach umbrella and the sea softly blurred behind. Bright midday sun, real beach vendor vibe but tidy and appealing. Match the sachet design of the attached reference exactly. Ultra-realistic, true-to-life colors, no watermark, no text.` |
| D3 | `d3-galeria-larissa.png` | 1:1 | `Aspect ratio 1:1. Photo taken with a smartphone from above: an open white chest freezer in a Brazilian home, neatly organized with rows of colorful frozen drink sachets separated by flavor in plastic baskets, small white labels on the baskets with handwritten flavor names (Caipirinha, Maracujá, Morango, Piña Colada). Natural light, real home setting. Match the sachet design of the attached reference exactly. Ultra-realistic, no watermark.` |
| D4 | `d4-galeria-simone.png` | 1:1 | `Aspect ratio 1:1. Photo taken with a smartphone at an adult birthday party in a Brazilian backyard at golden hour: a large galvanized metal bucket full of ice with colorful frozen drink sachets sticking out, on a table with string lights, tropical leaves and cocktail glasses, people softly blurred in the background. Festive, premium, natural. Match the sachet design of the attached reference exactly. Ultra-realistic, no watermark, no text.` |
| D5 | `d5-rosto-patricia.png` | 1:1 | `Aspect ratio 1:1. Smartphone selfie-style headshot of a Brazilian woman, 41, friendly, medium-brown skin, short curly dark hair, small earrings, natural smile, at home with soft daylight. Ultra-realistic, real skin texture, no filter look, no text.` |
| D6 | `d6-rosto-diego.png` | 1:1 | `Aspect ratio 1:1. Smartphone headshot of a Brazilian man, 33, tanned skin, short dark hair, light stubble, friendly smile, wearing a cap backwards and a light tank top, beach background blurred. Ultra-realistic, real skin texture, no text.` |
| D7 | `d7-rosto-larissa.png` | 1:1 | `Aspect ratio 1:1. Smartphone selfie-style headshot of a Brazilian woman, 27, light-brown skin, long straight black hair, warm smile, natural makeup, indoors with window light. Ultra-realistic, real skin texture, no text.` |
| D8 | `d8-rosto-simone.png` | 1:1 | `Aspect ratio 1:1. Smartphone headshot of a Brazilian woman, 36, fair skin with freckles, wavy auburn-brown hair, cheerful smile, outdoor party lights blurred behind. Ultra-realistic, real skin texture, no text.` |

---

## BLOCO E — Prints de WhatsApp (4)

**Visual de todos:** captura de tela **real** de WhatsApp de iPhone, tema claro, fundo bege padrão com o desenho sutil do WhatsApp, barra de status no topo (hora, sinal, wi-fi, bateria) e cabeçalho com a seta azul, a foto redonda do contato, o nome e “online”. As mensagens **da aluna ficam à esquerda, em balões brancos**; as **respostas da Bruna à direita, em balões verde-claros (#D9FDD3), com ✓✓ azuis**. Horários pequenos em cada balão e a barra “Mensagem” embaixo. Formato **9:16**.

Anexar em todos: `referencia/REF-whatsapp-1.png` + `referencia/REF-whatsapp-2.png` (visual exato) + `b1-geladinhos-referencia.png` (para a foto dentro da conversa). Na E1 e na E2, anexe também o rosto correspondente (`d5` e `d7`) para a foto de perfil.

**Modelo do prompt.** Troque `[NOME]`, `[HORA]`, `[FOTO]` e `[MENSAGENS]`:

```
Aspect ratio 9:16 vertical. A realistic iPhone screenshot of a WhatsApp chat in light mode, matching exactly the look of the attached WhatsApp screenshots: status bar with time [HORA], signal, wifi and battery; header with blue back arrow, small round profile photo, contact name "[NOME]" and "online" below, video and phone icons; WhatsApp beige patterned wallpaper; a small "Hoje" date pill. Messages from the contact on the LEFT in white bubbles; replies on the RIGHT in light green bubbles (#D9FDD3) with blue double check marks; small timestamps inside each bubble; message input bar at the bottom with "Mensagem" placeholder, attachment, camera and microphone icons.
The conversation, in this exact order and with this exact text (Brazilian Portuguese, keep spelling, emojis and lowercase exactly as written):
[MENSAGENS]
The photo message is an amateur smartphone photo: [FOTO]. The sachets in the photo must match the attached sachet reference (flat transparent sachets with crimped zig-zag seals).
Everything crisp and legible like a real screenshot. No extra text, no watermark.
```

### E1 · `e1-whats-patricia.png`
- **[NOME]** `Patrícia` · **[HORA]** `19:42` · perfil: rosto de `d5-rosto-patricia.png`
- **[FOTO]** `a styrofoam cooler full of colorful frozen drink sachets on ice, a hand holding one lime green sachet`
- **[MENSAGENS]**
```
LEFT: "Bruna!! fiz a primeira leva de caipirinha seguindo a receita 😍"   (19:37)
LEFT: [photo message]   (19:38)
LEFT: "levei 30 pro condomínio no sábado e acabou em 2 horas, tô chocada"   (19:39)
LEFT: "já tenho encomenda de 50 pra uma festa semana que vem 🙏"   (19:40)
RIGHT: "Que orgulho, Paty!! Ficaram lindos 😍"   (19:41)
RIGHT: "É só o começo, bora aproveitar o verão 🔥"   (19:42)
```

### E2 · `e2-whats-larissa.png`
- **[NOME]** `Larissa` · **[HORA]** `21:08` · perfil: rosto de `d7-rosto-larissa.png`
- **[FOTO]** `rows of strawberry pink and passion fruit orange frozen drink sachets on a kitchen tray with frost`
- **[MENSAGENS]**
```
LEFT: "oi Bruna, passando pra agradecer"   (21:02)
LEFT: "eu nunca tinha feito nem geladinho comum e consegui de primeira, a explicação é muito fácil"   (21:03)
LEFT: [photo message]   (21:04)
LEFT: "meu marido levou pro trabalho e vendeu tudo, voltou com R$ 210 no bolso 😂"   (21:06)
RIGHT: "Aaaah que demais, Lari! 💛"   (21:07)
RIGHT: "Agora é aumentar a produção 😉"   (21:08)
```

### E3 · `e3-whats-renata.png`
- **[NOME]** `Renata` · **[HORA]** `14:26` · perfil: uma mulher brasileira de uns 35 anos, cabelo castanho preso (gere junto, pequeno)
- **[FOTO]** `a party table with a metal bucket of ice full of creamy yellow piña colada and coconut frozen drink sachets`
- **[MENSAGENS]**
```
LEFT: "Bruna, olha a encomenda que eu entreguei hoje 🥹"   (14:20)
LEFT: [photo message]   (14:21)
LEFT: "80 geladinhos pra um aniversário de 40 anos, a de piña colada fez o maior sucesso"   (14:22)
LEFT: "a cliente já pediu pra fazer no ano novo também"   (14:23)
RIGHT: "Que lindeza, Rê!! Piña colada é campeã mesmo 🍍"   (14:25)
RIGHT: "Ano novo vai ser forte, já separa o cardápio 🙌"   (14:26)
```

### E4 · `e4-whats-joyce.png`
- **[NOME]** `Joyce` · **[HORA]** `20:51` · perfil: uma mulher brasileira de uns 25 anos, pele negra, cabelo cacheado volumoso (gere junto, pequeno)
- **[FOTO]** `a red cooler on the sand at a Brazilian beach with blue and lime green frozen drink sachets on ice`
- **[MENSAGENS]**
```
LEFT: "BRUNAAA 😭"   (20:44)
LEFT: "fui vender na praia nesse fim de semana"   (20:45)
LEFT: [photo message]   (20:45)
LEFT: "fiz R$ 640 em dois dias, o de blue lagoon todo mundo queria tirar foto"   (20:47)
LEFT: "nunca imaginei que ia conseguir"   (20:48)
RIGHT: "Joyce que orgulho!!! 😍👏"   (20:50)
RIGHT: "Viu? Produto bonito vende sozinho"   (20:51)
```

**Checklist dos prints:** parece print de verdade · todas as mensagens estão exatas · balões e lados corretos · a foto dentro da conversa parece tirada com celular · os saquinhos estão iguais aos da logo.

---

## BLOCO F — Capas dos order bumps (checkout)

Capas **quadradas** para os produtos extras na Kiwify: um mockup de produto digital (tablet ou celular inclinado mostrando a capa do material) sobre fundo creme, com os elementos da marca, título grande e legível e cara premium.

Anexar em todas: `MARCA-logo.webp`, `MARCA-identidade-visual.webp`, `b1-geladinhos-referencia.png`.

**Modelo do prompt.** Troque `[TITULO]` e `[CENA]`:

```
Aspect ratio 1:1. Premium product cover for a digital guide, using the attached brand identity (cream #FEF7EE background, deep teal #0D6F6B, coral #FF6B5B, mango #FFC538, lime #9ED43A, berry #E83E8C, tropical leaves, soft sun, wave shapes at the bottom). A realistic tablet tilted slightly, showing the guide's cover page with the title. Big, bold, legible title text in the image, exactly: "[TITULO]". [CENA] Clean, modern, professional, not childish. All text in Brazilian Portuguese spelled exactly as written. No other text, no watermark.
```

| Código | Arquivo | [TITULO] | [CENA] |
|---|---|---|---|
| F1 | `f1-bump-sem-alcool.png` | `30 Geladinhos Gourmet Sem Álcool` | `Around the tablet: realistic creamy frozen sachets (chocolate, strawberry with condensed milk, Ninho milk with Nutella, passion fruit mousse) and a small seal reading exactly "Para toda a família".` |
| F2 | `f2-bump-picoles.png` | `Picolés e Sacolés Especiais para Vender` | `Around the tablet: realistic gourmet fruit popsicles on sticks and long Brazilian sacolé bags, with fresh fruits and ice.` |
| F3 | `f3-bump-calculadora.png` | `Calculadora Automática de Lucros` | `The tablet shows a clean spreadsheet with green numbers; next to it a calculator, coins and a few frozen drink sachets. Small seal reading exactly "Planilha pronta".` |
| F4 | `f4-bump-artes.png` | `Cardápios e Artes que Vendem` | `Around the tablet: a smartphone showing a colorful Instagram post of frozen drinks and a printed menu card, with frozen sachets beside them.` |
| F5 | `f5-bump-combo.png` | `Combo Vendedor de Verão` | `Four tablets/phones fanned out showing the four guides above, a big coral badge reading exactly "4 em 1 · -50%", sun and tropical leaves; energetic but premium.` |

---

## Entrega

Ao terminar, devolva **todas as imagens** com os nomes exatos acima (34 arquivos) e uma lista curta:
- quais saíram aprovadas de primeira;
- quais precisaram de correção (e o que foi corrigido);
- quais ficaram com algum problema que você não conseguiu resolver.
