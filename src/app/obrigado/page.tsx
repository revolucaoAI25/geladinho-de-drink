import { Legal } from '@/components/Legal';
import { marca } from '@/config/oferta';

export const metadata = { title: 'Compra confirmada · Geladinhos de Drinks Lucrativos', robots: { index: false } };

export default function Obrigado() {
  return (
    <Legal titulo="Bem-vinda ao time! 🍹">
      <p>Seu pagamento foi confirmado. Em alguns minutos chega no seu e-mail a mensagem <b>“Seu treinamento Geladinhos de Drinks chegou”</b>, com o treinamento, os 4 bônus e o link da sua área de downloads.</p>
      <p><b>Não chegou?</b> Confira a caixa de spam e a aba Promoções (e marque como “não é spam”). Se precisar, fale com a gente: {marca.suporte}.</p>
      <p><b>Por onde começar:</b> leia o módulo 1 do treinamento, escolha 2 ou 3 sabores do Cardápio dos 10 Primeiros Sabores e faça o seu primeiro lote ainda esta semana. O verão não espera! ☀️</p>
    </Legal>
  );
}
