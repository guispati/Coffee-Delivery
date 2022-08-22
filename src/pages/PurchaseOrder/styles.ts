import styled from "styled-components";
import { devices } from '../../styles/themes/default';

export const PurchaseOrderContainer = styled.main`
    margin-top: 5rem;

    h1 {
        font-family: 'Baloo 2';
        font-weight: 800;
        font-size: 2rem;
        line-height: 130%;

        color: ${props => props.theme['yellow-dark']};
        margin-bottom: 0.25rem;
    }

    h2 {
        font-family: 'Roboto', sans-serif;
        font-weight: 400;
        font-size: 1.25rem;
        font-stretch: 100;
        line-height: 130%;

        color: ${props => props.theme['base-subtitle']};
    }

    section {
        display: flex;

        @media ${devices.mobileS} {
            flex-wrap: wrap-reverse;
            gap: 3rem;
            justify-content: center;
        }

        @media ${devices.laptop} {
            flex-wrap: nowrap;
            gap: 6.375rem;
            justify-content: space-between;
        }

        img {
            max-width: 100%;
            height: auto;
        }
    }
`;

export const OrderInfo = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2rem;
    padding: 2.5rem;
    margin-top: 2.5rem;

    background: ${props => props.theme['background']};
    background-clip: padding-box;
    border: 1px solid transparent;
    border-radius: 6px 36px;

    position: relative;

    width: 100%;

    &:before {
        content: "";
        position: absolute;
        top: 0; right: 0; bottom: 0; left: 0;
        z-index: -1;
        margin: -1px;
        border-radius: inherit;
        background: linear-gradient(to right, ${props => props.theme['yellow']}, ${props => props.theme['purple']});
    }
`;

const ORDER_INFO_ITEM_COLORS = {
    purple: 'purple',
    yellow: 'yellow',
    yellowDark: 'yellow-dark',
} as const

interface OrderInfoItemProps {
    color: keyof typeof ORDER_INFO_ITEM_COLORS
}

export const OrderInfoItem = styled.div<OrderInfoItemProps>`
    display: flex;
    gap: 0.75rem;
    align-items: center;
    
    > div:first-child {
        display: flex;
        align-items: center;
        justify-content: center;

        padding: 0.5rem;
        border-radius: 1000px;
        background: ${props => props.theme[ORDER_INFO_ITEM_COLORS[props.color]]};
    }

    > div:not(:first-child) {
        display: flex;
        flex-direction: column;
    }
    
    span {
        font-family: 'Roboto', sans-serif;
        font-weight: 400;
        font-size: 1rem;
        line-height: 130%;
        
        color: ${props => props.theme['base-text']};
    }
`;