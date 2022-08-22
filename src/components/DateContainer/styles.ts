import styled from "styled-components";

export const DateContainerStyled = styled.div`
    > span {
        font-family: 'Roboto', sans-serif;
        font-weight: 400;
        font-size: 0.875rem;
        line-height: 130%;

        color: ${props => props.theme['base-text']};

        margin-right: 0.9375rem;

        strong {
            font-family: 'Baloo 2';
            font-weight: 800;
            font-size: 1.5rem;
        }
    }
`;

export const DateContainerBasic = styled.div`
    height: 100%;
    font-family: 'Roboto', sans-serif;
    font-weight: inherit;
    font-size: 1rem;
    text-align: right;
    color: ${props => props.theme['base-text']};
`;