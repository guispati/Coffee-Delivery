import { Minus, Plus } from "phosphor-react";
import { AmountContainer } from "./styles";

export function Amount() {
    return (
        <AmountContainer>
            <button><Minus size={14} weight="fill" /></button>
            <input type="number" min="1" value="1" />
            <button><Plus size={14} weight="fill" /></button>
        </AmountContainer>
    );
}