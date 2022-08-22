import styled from "styled-components";
import { devices } from '../../styles/themes/default';

export const LayoutContainer = styled.div`
    max-width: 90rem;
    margin: 0 auto;

    display: flex;
    flex-direction: column;

    @media ${devices.mobileS} {
        padding: 0 3rem;
    }

    @media ${devices.tablet} {
        padding: 0 5rem;
    }

    @media ${devices.laptop} {
        padding: 0 8rem;
    }

    @media ${devices.laptopL} {
        padding: 0 10rem;
    }
`;