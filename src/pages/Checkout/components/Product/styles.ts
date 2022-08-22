import styled from "styled-components";

export const ProductContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    align-items: center;
    gap: 1.25rem;
    padding: 0.5rem 0.25rem;
    padding-bottom: 2rem;
    border-bottom: 1px solid ${props => props.theme['base-button']};

    img {
        width: 4rem;
    }

    strong {
        height: 100%;
    }
`;

export const InfoContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;

    h3 {
        font-family: 'Roboto', sans-serif;
        font-weight: 400;
        font-size: 1rem;
        line-height: 130%;

        color: ${props => props.theme['base-subtitle']}
    }
`;

export const ActionsContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 0.5rem;
`;

export const DeleteIcon = styled.button`
    display: flex;
    justify-content: space-between;
    align-items: center;
    border: 0;
    padding: 0.5rem;
    gap: 0.25rem;

    background: ${props => props.theme['base-button']};
    border-radius: 6px;

    transition: 0.2s;
    

    svg {
        color: ${props => props.theme['purple']};
    }

    span {
        font-family: 'Roboto', sans-serif;
        font-weight: 400;
        font-size: 0.75rem;
        text-transform: uppercase;
        color: ${props => props.theme['base-text']};
    }

    &:hover {
        background: ${props => props.theme['base-hover']};
        cursor: pointer;
    }
`;