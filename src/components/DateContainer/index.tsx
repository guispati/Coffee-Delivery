import { FormattedNumber, FormattedNumberParts, IntlProvider } from "react-intl";
import { DateContainerBasic, DateContainerStyled } from "./styles";

interface DateContainerProps {
    formatType: "basic" | "styled";
    price: number;
}

export function DateContainer({ formatType, price }: DateContainerProps) {
    return (
        <>
            { formatType != "basic" ? (
                <DateContainerStyled>
                    <IntlProvider locale="pt-br">
                        <FormattedNumberParts value={price} style="currency" currency="BRL">
                            {parts => (
                                <span>
                                    {parts[0].value}
                                    {parts[1].value}
                                    <strong>{parts[2].value}{parts[3].value}{parts[4].value} </strong>
                                </span>
                            )}
                        </FormattedNumberParts>
                    </IntlProvider>
                </DateContainerStyled>
            ) : (
                <DateContainerBasic>
                    <IntlProvider locale="pt-br">
                        <FormattedNumber value={price} style="currency" currency="BRL" />
                    </IntlProvider>
                </DateContainerBasic>
            )}
        </>
    );
}