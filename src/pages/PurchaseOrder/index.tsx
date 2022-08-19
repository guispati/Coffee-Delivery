import { OrderInfo, OrderInfoItem, PurchaseOrderContainer } from "./styles";
import PurchaseOrderImg from '../../assets/purchase-order.png';
import { CurrencyDollar, MapPin, Timer } from "phosphor-react";

export function PurchaseOrder() {
    return (
        <PurchaseOrderContainer>
            <h1>Uhu! Pedido confirmado</h1>
            <h2>Agora é só aguardar que logo o café chegará até você</h2>
            <section>
                <OrderInfo>
                    <OrderInfoItem color="purple">
                        <div><MapPin size={16} weight="fill" /></div>
                        <div>
                            <span>Entrega em <strong>Rua João Daniel Martinelli, 102</strong></span>
                            <span>Farrapos - Porto Alegre, RS</span>
                        </div>
                    </OrderInfoItem>

                    <OrderInfoItem color="yellow">
                        <div><Timer size={16} weight="fill" /></div>
                        <div>
                            <span>Previsão de entrega</span>
                            <span><strong>20 min - 30 min</strong></span>
                        </div>
                    </OrderInfoItem>

                    <OrderInfoItem color="yellowDark">
                        <div><CurrencyDollar size={16} weight="fill" /></div>
                        <div>
                            <span>Pagamento na entrega</span>
                            <span><strong>Cartão de crédito</strong></span>
                        </div>
                    </OrderInfoItem>
                </OrderInfo>

                <img src={PurchaseOrderImg} alt="" />
            </section>
        </PurchaseOrderContainer>
    );
}