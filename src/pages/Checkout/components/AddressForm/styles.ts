import styled from "styled-components";

export const FormContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;

    input {
        padding: 0.75rem;

        font-family: 'Roboto', sans-serif;
        font-weight: 400;
        font-size: 0.875rem;
        line-height: 130%;
        border: 1px solid ${props => props.theme['base-button']};
        border-radius: 4px;
        background: ${props => props.theme['base-input']};
        color: ${props => props.theme['base-text']};
                
        &::placeholder {
            color: ${props => props.theme['base-label']};
        }

        &#street, &#extra, &#city {
            width: 100%;
        }

        &#state {
            width: 10%;
        }

        &::-webkit-outer-spin-button,
        &::-webkit-inner-spin-button {
            -webkit-appearance: none;
        }
    }
`;

export const FormRow = styled.div`
    width: 100%;
    display: flex;
    gap: 0.75rem;
`;