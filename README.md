# Geladinhos de Drinks Lucrativos

Funil de quiz (Next.js) + entrega por e-mail, no mesmo padrão do Planner Mente Calma.

- `src/components/Funil.tsx`: todas as etapas (abertura → tempo → desafio → fácil → custo → depoimentos/galeria → carregando → oferta).
- `src/config/oferta.ts`: textos editáveis, preços, especialista, imagens, conversas e comentários.
- `src/config/entrega.ts`: arquivos entregues e order bumps (nomes iguais aos da Kiwify).
- Imagem vazia (`''`) mostra uma ilustração provisória. Para trocar, coloque o arquivo em `public/img` e preencha o caminho.

Variáveis na Vercel: veja `.env.example`.
