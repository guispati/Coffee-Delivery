import { Minus, Plus } from "phosphor-react";
import { useState } from "react";
import { AmountContainer } from "./styles";

export function Amount() {
    const [ quantity, setQuantity ] = useState(1);
    function handleSubQuantity() {
        const newQuantity = quantity - 1;
        if (newQuantity > 0)
            setQuantity(newQuantity);
    }

    function handleAddQuantity() {
        const newQuantity = quantity + 1;
        setQuantity(newQuantity);
    }

    return (
        <AmountContainer>
            <button onClick={handleSubQuantity}><Minus size={14} weight="fill" /></button>
            <input type="number" min="1" value={quantity} />
            <button onClick={handleAddQuantity}><Plus size={14} weight="fill" /></button>
        </AmountContainer>
    );
}