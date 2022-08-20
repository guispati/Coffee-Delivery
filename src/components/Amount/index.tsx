import { Minus, Plus } from "phosphor-react";
import { useState } from "react";
import { AmountContainer } from "./styles";

interface AmountProps {
    quantity: number;
    changeQuantity: (e: any) => void;
}

export function Amount({ quantity, changeQuantity }: AmountProps) {
    function handleSubQuantity() {
        if ((quantity - 1) > 0)
            return changeQuantity(quantity - 1);
    }

    function handleAddQuantity() {
        return changeQuantity(quantity+1);
    }

    const handleChangeQuantity = (e: any) => {
        return changeQuantity(e.target.value);
    }

    return (
        <AmountContainer>
            <button type="button" onClick={handleSubQuantity}><Minus size={14} weight="fill" /></button>
            <input type="number" min="1" value={quantity} onChange={handleChangeQuantity} />
            <button type="button" onClick={handleAddQuantity}><Plus size={14} weight="fill" /></button>
        </AmountContainer>
    );
}