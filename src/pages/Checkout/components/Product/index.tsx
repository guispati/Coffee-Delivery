import { DeleteIcon, InfoContainer, ActionsContainer, ProductContainer, PriceContainer } from "./styles";
import { Coffee } from "../../../../data/coffeeList";
import { FormattedNumber, FormattedNumberParts, IntlProvider } from "react-intl";
import { Amount } from "../../../../components/Amount";
import { Trash } from "phosphor-react";

interface ProductProps {
    product: Coffee;
}

export function Product({product}: ProductProps) {
    return (
        <ProductContainer>
            <img src={product.image} alt={product.name} />

            <InfoContainer>
                <h3>{product.name}</h3>
                <ActionsContainer>
                    <Amount />
                    <DeleteIcon>
                        <Trash size={16} />
                        <span>Remover</span>
                    </DeleteIcon>
                </ActionsContainer>
            </InfoContainer>

            <PriceContainer>
                <IntlProvider locale="br">
                    <FormattedNumber value={product.price} style="currency" currency="BRL" />
                </IntlProvider>
            </PriceContainer>
            
        </ProductContainer>
    );
}