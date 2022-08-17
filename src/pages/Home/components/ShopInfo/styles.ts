import styled from "styled-components";

export const ShopInfoContainer = styled.section`
    display: grid;
    grid-template-columns: 1fr 1fr;
    row-gap: 1.25rem;
`;

const ShopInfoItem = styled.div`
    display: flex;
    align-items: center;
    gap: 0.75rem;

    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-size: 1rem;
    line-height: 130%;
    color: ${props => props.theme['base-text']};

    span {
        padding: 0.5rem;
        border-radius: 9999px;
        height: 2rem;
    }

    svg {
        fill: ${props => props.theme['white']};
    }
`;

export const CompraSimples = styled(ShopInfoItem)`
    span {
        background: ${props => props.theme['yellow-dark']};
    }
`;

export const EmbalagemMantem = styled(ShopInfoItem)`
    span {
        background: ${props => props.theme['base-text']};
    }
`;

export const EntregaRapida = styled(ShopInfoItem)`
    span {
        background: ${props => props.theme['yellow']};
    }
`;

export const CafeFresquinho = styled(ShopInfoItem)`
    span {
        background: ${props => props.theme['purple']};
    }
`;