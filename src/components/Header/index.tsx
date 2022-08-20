import { CartContainer, HeaderContainer, LocationContainer } from "./styles";
import { NavLink } from "react-router-dom";
import { MapPin, ShoppingCart } from 'phosphor-react';
import { PurchaseListContext } from "../../contexts/PurchaseListContext";

import logo from '../../assets/logo.svg';
import { useContext } from "react";

export function Header() {
    const { cart } = useContext(PurchaseListContext);

    const totalCart = cart.reduce((prev, current) => {
        return prev + +current.quantity;
    }, 0);

    return (
        <HeaderContainer>
            <NavLink to="/" title="Home">
                <img src={logo} alt="" />
            </NavLink>
            
            <div>
                <LocationContainer>
                    <MapPin size={22} weight="fill" />
                    Porto Alegre, RS
                </LocationContainer>
                <NavLink to="/checkout" title="Checkout">
                    <CartContainer quantity={totalCart}>
                        <ShoppingCart size={22} weight="fill" />
                    </CartContainer>
                </NavLink>
            </div>
        </HeaderContainer>
    );
}