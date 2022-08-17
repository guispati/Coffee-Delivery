import styled from "styled-components";

export const CoffeeCardContainer = styled.div`
    background: ${props => props.theme['base-card']};
    border-radius: 6px 36px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    padding: 0 1.25rem 1.25rem;

    img {
        width: 120px;
        margin-top: -1.25rem;
    }

    h3 {
        margin-top: 0.5rem;

        font-family: 'Baloo 2';
        font-weight: 700;
        font-size: 1.25rem;
        line-height: 130%;
        text-align: center;

        color: ${props => props.theme['base-subtitle']}
    }

    h4 {
        font-family: 'Roboto', sans-serif;
        font-weight: 400;
        font-size: 0.875rem;
        line-height: 130%;
        text-align: center;

        color: ${props => props.theme['base-label']}
    }
`;

export const FiltersContainer = styled.div`
    display: flex;
    gap: 0.75rem;
    margin-top: 0.25rem;

    > span {
        padding: 0.25rem 0.5rem;
        color: ${props => props.theme['yellow-dark']};
        background: ${props => props.theme['yellow-light']};
        border-radius: 100px;

        font-family: 'Roboto', sans-serif;
        font-weight: 700;
        font-size: 0.625rem;
        line-height: 130%;
        text-transform: uppercase;
    }
`;

export const PriceContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 0.5rem;

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

export const PurchaseIcon = styled.button`
    display: flex;
    justify-content: space-between;
    align-items: center;
    border: 0;
    padding: 0.4rem;

    background: ${props => props.theme['purple-dark']};
    border-radius: 6px;

    transition: 0.2s;

    svg {
        fill: ${props => props.theme['white']};
    }

    &:hover {
        background: ${props => props.theme['purple']};
        cursor: pointer;
    }
`;