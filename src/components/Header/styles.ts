import styled from "styled-components";

export const HeaderContainer = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 2rem 0;

    div {
        display: flex;
        gap: 0.75rem;
    }
`;

const ButtonsContainer = styled.span`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.25rem;
    padding: 0.5rem;

    border-radius: 6px;

    font-weight: 400;

    &:hover {
        cursor: pointer;
    }
`;

export const LocationContainer = styled(ButtonsContainer)`
    background: ${props => props.theme['purple-light']};
    color: ${props => props.theme['purple-dark']};

    svg {
        fill: ${props => props.theme['purple']};
    }
`;

interface CartProps {
    quantity?: number;
}

export const CartContainer = styled(ButtonsContainer)<CartProps>`
    background: ${props => props.theme['yellow-light']};
    color: ${props => props.theme['purple-dark']};
    position: relative;

    svg {
        fill: ${props => props.theme['yellow-dark']};
    }

    &::after {
        ${props => props.quantity &&
            `content: '${props.quantity}';`
        };
        background: ${props => props.theme['yellow-dark']};
        border-radius: 9999px;

        width: 1.25rem;
        height: 1.25rem;
        display: flex;
        align-items: center;
        justify-content: center;
        position: absolute;
        top: -8px;
        right: -8px;

        font-weight: 700;
        text-align: center;
        font-size: 0.75rem;
        letter-spacing: -0.06em;
        color: ${props => props.theme['white']};
    }
`;