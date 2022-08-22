import { CoffeeCardContainer, FiltersContainer, PriceContainer, PurchaseIcon } from "./styles";
import { Coffee } from "../../../../data/coffeeList";
import { Amount } from "../../../../components/Amount";
import { ShoppingCart } from "phosphor-react";
import { PurchaseListContext } from "../../../../contexts/PurchaseListContext";
import { useContext, useState } from "react";
import { DateContainer } from "../../../../components/DateContainer";

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
                <DateContainer formatType="styled" price={product.price} />
                <Amount quantity={quantity} changeQuantity={handleChangeQuantity} />
                <PurchaseIcon onClick={handleAddItemToCart} type="button">
                    <ShoppingCart size={22} weight="fill" />
                </PurchaseIcon>
            </PriceContainer>
        </CoffeeCardContainer>
    );
}