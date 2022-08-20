import { OrderInfo, OrderInfoItem, PurchaseOrderContainer } from "./styles";
import PurchaseOrderImg from '../../assets/purchase-order.png';
import { CurrencyDollar, MapPin, Timer } from "phosphor-react";
import { NewOrderFormData } from "../Checkout";
import { useLocation, useNavigate } from "react-router-dom";

interface LocationType {
    state: NewOrderFormData;
}

export function PurchaseOrder() {
    const { state } = useLocation() as unknown as LocationType;
    const navigate = useNavigate();

    if (!state) {
        navigate("/");
    }

    let paymentType: string;

    if (state.payment === "1") {
        paymentType = "Cartão de Crédito";
    } else if (state.payment === "2") {
        paymentType = "Cartão de Débito";
    } else {
        paymentType = "Dinheiro";
    }

    return (
        <PurchaseOrderContainer>
            <h1>Uhu! Pedido confirmado</h1>
            <h2>Agora é só aguardar que logo o café chegará até você</h2>
            <section>
                <OrderInfo>
                    <OrderInfoItem color="purple">
                        <div><MapPin size={16} weight="fill" /></div>
                        <div>
                            <span>Entrega em <strong>{state.street}, {state.number}</strong></span>
                            <span>{state.city} - {state.district}, {state.state}</span>
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
                            <span><strong>{paymentType}</strong></span>
                        </div>
                    </OrderInfoItem>
                </OrderInfo>

                <img src={PurchaseOrderImg} alt="" />
            </section>
        </PurchaseOrderContainer>
    );
}