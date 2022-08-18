import styled from "styled-components";

export const AmountContainer = styled.div`
    display: flex;
    justify-content: space-between;
    gap: 0.25rem;
    padding: 0.5rem;
    align-items: center;
    background: ${props => props.theme['base-button']};
    border-radius: 6px;
    max-height: 2rem;

    button {
        background: transparent;
        border: 0;
        display: flex;

        svg {
            color: ${props => props.theme['purple']};
        }

        &:hover svg {
            cursor: pointer;
            color: ${props => props.theme['purple-dark']};
        }
    }

    input[type=number]::-webkit-inner-spin-button { 
        -webkit-appearance: none;
    }


    input {
        -moz-appearance: textfield;
        appearance: textfield;

        font-family: 'Roboto';
        font-weight: 400;
        font-size: 1rem;
        text-align: center;
        color: ${props => props.theme['base-title']};

        background: transparent;
        border: 0;
        width: 1.25rem;
    }
`;