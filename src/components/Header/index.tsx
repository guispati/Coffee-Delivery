import { CartContainer, HeaderContainer, LocationContainer } from "./styles";
import { NavLink } from "react-router-dom";
import { MapPin, ShoppingCart } from 'phosphor-react';

import logo from '../../assets/logo.svg';

export function Header() {
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
                <CartContainer quantity={3}>
                    <ShoppingCart size={22} weight="fill" />
                </CartContainer>
            </div>
        </HeaderContainer>
    );
}