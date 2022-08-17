import { Coffee, Package, ShoppingCart, Timer } from "phosphor-react";
import { CafeFresquinho, CompraSimples, EmbalagemMantem, EntregaRapida, ShopInfoContainer } from "./styles";

export function ShopInfo() {
    return (
        <ShopInfoContainer>
            <CompraSimples>
                <span><ShoppingCart size={16} weight="fill" /></span>
                Compra simples e segura
            </CompraSimples>
            <EmbalagemMantem>
                <span><Package size={16} weight="fill" /></span>
                Embalagem mantém o café intacto
            </EmbalagemMantem>
            <EntregaRapida>
                <span><Timer size={16} weight="fill" /></span>
                Entrega rápida e rastreada
            </EntregaRapida>
            <CafeFresquinho>
                <span><Coffee size={16} weight="fill" /></span>
                O café chega fresquinho até você
            </CafeFresquinho>
        </ShopInfoContainer>
    );
}