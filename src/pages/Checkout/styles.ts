import styled from "styled-components";
import { devices } from '../../styles/themes/default';

export const CheckoutContainer = styled.main`
    margin-top: 2.5rem;

    form {
        display: flex;
        gap: 2rem;
        
        @media ${devices.mobileS} {
            flex-wrap: wrap;
            justify-content: center;
        }

        @media ${devices.laptop} {
            flex-wrap: nowrap;
            justify-content: space-between;
        }

        fieldset {
            border: 0;
            display: flex;
            flex-direction: column;
            gap: 0.75rem;

            @media ${devices.mobileS} {
                width: 100%;
            }

            @media ${devices.laptop} {
                width: 60%;
            }
        }

        > div {
            display: flex;
            flex-direction: column;
            gap: 0.75rem;

            @media ${devices.mobileS} {
                width: 100%;
            }

            @media ${devices.laptop} {
                width: 40%;
            }
        }

        h2 {
            margin-bottom: 1rem;
            font-family: 'Baloo 2';
            font-weight: 700;
            font-size: 1.125rem;
            line-height: 130%;
    
            color: ${props => props.theme['base-subtitle']};
        }
    }
`;

const Wrapper = styled.div`
    padding: 2.5rem;
    border-radius: 6px;
    background: ${props => props.theme['base-card']};
    
    header {
        display: flex;
        gap: 0.75rem;
        margin-bottom: 2rem;

        h3, h4 {
            font-family: 'Roboto', sans-serif;
            font-weight: 400;
            line-height: 130%;
        }

        h3 {
            font-size: 1rem;
            color: ${props => props.theme['base-subtitle']};
        }

        h4 {
            font-size: 0.875rem;
            color: ${props => props.theme['base-text']};
        }
    }
`;

export const AddressContainer = styled(Wrapper)`
    header {
        svg {
            color: ${props => props.theme['yellow-dark']};
        }
    }
`;

export const PaymentContainer = styled(Wrapper)`
    header {
        svg {
            color: ${props => props.theme['purple']};
        }
    }
`;

export const ListContainer = styled(Wrapper)`
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
`;

export const FinalPriceContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
`;

export const FinalPriceRow = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-size: 0.875rem;

    span {
        font-size: 1rem;
    }

    color: ${props => props.theme['base-text']};
`;

export const FinalPriceRowStrong = styled(FinalPriceRow)`
    font-weight: 700;
    font-size: 1.25rem;

    color: ${props => props.theme['base-subtitle']};
`;

export const FinishOrderButton = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0.75rem 0.5rem;

    background: ${props => props.theme['yellow']};
    border-radius: 6px;
    border: 0;

    font-family: 'Roboto', sans-serif;
    font-weight: 700;
    font-size: 0.875rem;
    color: ${props => props.theme['white']};
    font-stretch: 100;

    &:hover {
        cursor: pointer;
        background: ${props => props.theme['yellow-dark']};
    }
`;