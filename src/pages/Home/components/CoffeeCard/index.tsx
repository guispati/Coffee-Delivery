import { CoffeeCardContainer, FiltersContainer, PriceContainer, PurchaseIcon } from "./styles";
import { Coffee } from "../../../../data/coffeeList";
import { Amount } from "../../../../components/Amount";
import { ShoppingCart } from "phosphor-react";
import { FormattedNumberParts, IntlProvider } from "react-intl";
import { PurchaseListContext } from "../../../../contexts/PurchaseListContext";
import { useContext, useState } from "react";

interface CoffeeCardProps {
    product: Coffee;
}

export function CoffeeCard({product}: CoffeeCardProps) {
    const { addItemToCart } = useContext(PurchaseListContext);

    const [ quantity, setQuantity ] = useState(1);

    const handleChangeQuantity = (qtd: number) => {
        setQuantity(qtd);
    }

    function handleAddItemToCart() {
        // console.log(product);
        addItemToCart(product, quantity);
    }

    return (
        <CoffeeCardContainer>
            <img src={product.image} alt={product.name} />
            <FiltersContainer>
                {product.tags.map(tag => (
                    <span key={tag}>{tag}</span>
                ))}
            </FiltersContainer>
            <h3>{product.name}</h3>
            <h4>{product.description}</h4>
            
            <PriceContainer>
                <IntlProvider locale="pt-br">
                    <FormattedNumberParts value={product.price} style="currency" currency="BRL">
                        {parts => (
                            <span>
                                {parts[0].value}
                                {parts[1].value}
                                <strong>{parts[2].value}{parts[3].value}{parts[4].value} </strong>
                            </span>
                        )}
                    </FormattedNumberParts>
                </IntlProvider>
                <Amount quantity={quantity} changeQuantity={handleChangeQuantity} />
                <PurchaseIcon onClick={handleAddItemToCart} type="button">
                    <ShoppingCart size={22} weight="fill" />
                </PurchaseIcon>
            </PriceContainer>
        </CoffeeCardContainer>
    );
}