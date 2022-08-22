import styled from "styled-components";
import { devices } from '../../styles/themes/default';

export const HomeContainer = styled.main`
    display: flex;
    flex-direction: column;
`;

export const HeaderContainer = styled.header`
    margin: 5.75rem 0;
    display: flex;
    align-items: center;
    gap: 3.5rem;

    @media ${devices.mobileS} {
        flex-wrap: wrap-reverse;
        justify-content: center;
    }

    @media ${devices.laptop} {
        flex-wrap: nowrap;
        justify-content: space-between;
    }

    > div {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        gap: 4.125rem;
    }

    > img {
        max-width: 100%;
        height: auto;
    }
`;

export const TitleContainer = styled.header`
    display: flex;
    flex-direction: column;
    gap: 1rem;

    h1 {
        font-family: 'Baloo 2';
        font-weight: 800;
        font-size: 3rem;
        color: ${props => props.theme['base-title']};
        line-height: 130%;
    }

    h2 {
        font-family: 'Roboto', sans-serif;
        font-weight: 400;
        font-size: 1.25rem;
        line-height: 130%;
        color: ${props => props.theme['base-subtitle']};
        font-stretch: 100;
    }
`;

export const CoffeListContainer = styled.section`
    padding: 2rem 0;
    display: flex;
    flex-direction: column;
    gap: 3.375rem;

    h2 {
        font-family: 'Baloo 2';
        font-weight: 800;
        font-size: 2rem;
        line-height: 130%;
        color: ${props => props.theme['base-subtitle']};
    }

    > div {
        display: grid;
        column-gap: 2rem;
        row-gap: 2.5rem;
        flex-wrap: wrap;

        @media ${devices.mobileS} {
            grid-template-columns: 1fr;
        }

        @media ${devices.tablet} {
            grid-template-columns: 1fr 1fr;
        }

        @media ${devices.laptop} {
            grid-template-columns: 1fr 1fr 1fr;
        }

        @media ${devices.laptopL} {
            grid-template-columns: 1fr 1fr 1fr 1fr;
        }
    }
`;