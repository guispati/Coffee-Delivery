import { DeleteIcon, InfoContainer, ActionsContainer, ProductContainer, PriceContainer } from "./styles";
import { FormattedNumber, IntlProvider } from "react-intl";
import { Amount } from "../../../../components/Amount";
import { Trash } from "phosphor-react";
import { useContext, useEffect, useState } from "react";
import { ItemList, PurchaseListContext } from "../../../../contexts/PurchaseListContext";

export function Product({product, quantity}: ItemList) {
    const { changeQuantityOnCart } = useContext(PurchaseListContext);
    const [ productPrice, setProductPrice ] = useState(product.price*quantity);

    const handleChangeQuantity = (qtd: number) => {
        changeQuantityOnCart(product, qtd);
    }

    // let productPrice = product.price;

    useEffect(() => {
        setProductPrice(product.price * quantity);
    }, [productPrice, quantity, product]);

    return (
        <ProductContainer>
            <img src={product.image} alt={product.name} />

            <InfoContainer>
                <h3>{product.name}</h3>
                <ActionsContainer>
                    <Amount quantity={quantity} changeQuantity={handleChangeQuantity} />
                    <DeleteIcon>
                        <Trash size={16} />
                        <span>Remover</span>
                    </DeleteIcon>
                </ActionsContainer>
            </InfoContainer>

            <PriceContainer>
                <IntlProvider locale="pt-br">
                    <FormattedNumber value={productPrice} style="currency" currency="BRL" />
                </IntlProvider>
            </PriceContainer>
            
        </ProductContainer>
    );
}