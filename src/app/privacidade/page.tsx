import { Legal } from '@/components/Legal';
import { marca } from '@/config/oferta';

export const metadata = { title: 'Privacidade · Geladinhos de Drinks Lucrativos' };

export default function Privacidade() {
  return (
    <Legal titulo="Política de privacidade">
      <p>As respostas do teste desta página ficam só no seu navegador e servem apenas para mostrar o conteúdo mais adequado a você. Elas não são enviadas nem armazenadas por nós.</p>
      <p>Na compra, a plataforma de pagamento recebe os seus dados (nome, e-mail, telefone e pagamento) para processar o pedido. Usamos o seu nome e e-mail para enviar o acesso ao produto.</p>
      <p>Usamos ferramentas de medição de anúncios (como o pixel da Meta, por meio da Utmify) para entender quais anúncios trazem visitas e vendas. Elas podem usar cookies.</p>
      <p>Dúvidas ou pedidos sobre os seus dados: {marca.suporte}.</p>
    </Legal>
  );
}
