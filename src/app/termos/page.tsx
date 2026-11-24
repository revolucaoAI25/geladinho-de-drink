import { Legal } from '@/components/Legal';
import { garantiaDias, marca } from '@/config/oferta';

export const metadata = { title: 'Termos de uso · Geladinhos de Drinks Lucrativos' };

export default function Termos() {
  return (
    <Legal titulo="Termos de uso">
      <p>O {marca.nome} é um produto digital de educação: um treinamento em PDF com receitas, técnicas de preparo, apresentação, precificação e vendas, entregue por e-mail após a confirmação do pagamento.</p>
      <p><b>Resultados.</b> Os valores de faturamento citados na página são exemplos de cálculo e de potencial, e não promessa ou garantia de ganho. O resultado de cada pessoa depende da sua dedicação, da região, dos preços praticados, do público e de outros fatores.</p>
      <p><b>Garantia.</b> Você tem {garantiaDias} dias, a partir da compra, para pedir o reembolso integral, sem precisar justificar, pela plataforma de pagamento ou pelo e-mail {marca.suporte}.</p>
      <p><b>Uso pessoal.</b> O material é de uso pessoal. É proibido revender, distribuir ou compartilhar os arquivos.</p>
      <p><b>Produção e venda.</b> Quem produz e vende alimentos e bebidas é responsável por seguir as regras sanitárias e legais da sua cidade e do seu estado.</p>
    </Legal>
  );
}
