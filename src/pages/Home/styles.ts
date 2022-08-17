import styled from "styled-components";

export const HomeContainer = styled.main`
    display: flex;
    flex-direction: column;
`;

export const HeaderContainer = styled.header`
    margin: 5.75rem 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 3.5rem;

    > div {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        gap: 4.125rem;
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
        grid-template-columns: 1fr 1fr 1fr 1fr;
        column-gap: 2rem;
        row-gap: 2.5rem;
        flex-wrap: wrap;
    }
`;