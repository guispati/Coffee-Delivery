import styled from "styled-components";

export const PaymentFormContainer = styled.div`
    display: flex;
    gap: 0.75rem;
    justify-content: space-between;
    flex-wrap: nowrap;

    label {
        width: 100%;
        height: 100%;
        padding: 1rem;
        display: flex;
        align-items: center;
        gap: 0.75rem;
        border-radius: 6px;
        background: ${props => props.theme['base-button']};
        border: 1px solid transparent;

        svg {
            color: ${props => props.theme['purple']};
        }

        span {
            font-family: 'Roboto', sans-serif;
            font-weight: 400;
            font-size: 0.75rem;
            text-transform: uppercase;
            color: ${props => props.theme['base-text']}
        }

        &:hover {
            background: ${props => props.theme['base-hover']};
            cursor: pointer;
        }
    }

    input {
        display: none;

        &:checked + label {
            background: ${props => props.theme['purple-light']};
        }
    }
`;