import styled from "styled-components";

export const AmountContainer = styled.div`
    display: flex;
    justify-content: space-between;
    gap: 0.25rem;
    padding: 0.5rem;
    align-items: center;
    background: ${props => props.theme['base-button']};
    border-radius: 6px;

    button {
        background: transparent;
        border: 0;
        display: flex;

        svg {
            fill: ${props => props.theme['purple']};
        }

        &:hover {
            cursor: pointer;
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
        line-height: 130%;
        text-align: center;
        color: ${props => props.theme['base-title']};

        background: transparent;
        border: 0;
        width: 1.25rem;
    }
`;