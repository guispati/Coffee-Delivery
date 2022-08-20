import { Bank, CreditCard, Money } from "phosphor-react";
import { useFormContext } from "react-hook-form";
import { PaymentFormContainer } from "./styles";

export function PaymentForm() {
    const { register } = useFormContext();

    return (
        <PaymentFormContainer>
            <input id="creditCard" {...register('payment')} type="radio" value="1" />
            <label htmlFor="creditCard">
                <CreditCard size={16} />
                <span>Cartão de Crédito</span>
            </label>
            <input id="debitCard" {...register('payment')} type="radio" value="2" />
            <label htmlFor="debitCard">
                <Bank size={16} />
                <span>Cartão de Débito</span>
            </label>
            <input id="money" {...register('payment')} type="radio" value="2" />
            <label htmlFor="money">
                <Money size={16} />
                <span>Dinheiro</span>
            </label>
        </PaymentFormContainer>
    );
}