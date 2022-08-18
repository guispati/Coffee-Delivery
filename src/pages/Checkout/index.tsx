import { CurrencyDollar, MapPinLine } from "phosphor-react";
import { CheckoutContainer, AddressContainer, PaymentContainer, ListContainer, FinalPriceContainer, FinalPriceRow, FinalPriceRowStrong, FinishOrderButton } from "./styles";
import { FormProvider, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as zod from 'zod';
import { AddressForm } from "./components/AddressForm";
import { PaymentForm } from "./components/PaymentForm";
import { Product } from "./components/Product";
import { Coffee, coffeeList } from "../../data/coffeeList";
import { FormattedNumber, IntlProvider } from "react-intl";

const newOrderFormValidationSchema = zod.object({
    zipcode: zod.string().length(9),
    street: zod.string(),
    number: zod.number(),
    extra: zod.string().optional(),
    district: zod.string(),
    city: zod.string(),
    state: zod.string().length(2),
    payment: zod.string(),
});

type NewOrderFormData = zod.infer<typeof newOrderFormValidationSchema>

export function Checkout() {
    const newOrderForm = useForm<NewOrderFormData>({
        resolver: zodResolver(newOrderFormValidationSchema),
        defaultValues: {
            zipcode: '',
            street: '',
            extra: '',
            district: '',
            city: '',
            state: '',
            payment: '',
        }
    });

    const { handleSubmit, watch, reset, setValue, register } = newOrderForm;

    function handleCreateNewOrder(data: NewOrderFormData) {
        console.log(data);
        reset();
    }

    function searchCep(zipcode: string) {
        fetch(`https://viacep.com.br/ws/${zipcode}/json/`, {mode: 'cors'}).then(res => res.json()).then(data => {
            setValue('street', data.logradouro);
            setValue('extra', data.complemento);
            setValue('district', data.bairro);
            setValue('city', data.localidade);
            setValue('state', data.uf);
        });
    }

    const purchaseList: Coffee[] = coffeeList.filter(product =>
        product.id === 1 || product.id === 6
    );
    
    const totalCart = purchaseList.reduce((prev, current) => {
        return prev + +current.price;
    }, 0);

    const carrierValue = 3.50;

    const totalValue = totalCart + carrierValue;

    // zipcode: data.cep,
    // street: data.logradouro,
    // number: 1,
    // extra: data.complemento,
    // district: data.bairro,
    // city: data.localidade,
    // state: data.uf

    const zipcode = watch('zipcode');
    zipcode.length === 9 && searchCep(zipcode);
    
    return (
        <CheckoutContainer>
            <FormProvider {...newOrderForm}>
                <form onSubmit={handleSubmit(handleCreateNewOrder)}>
                    <fieldset>
                        <h2>Complete seu pedido</h2>
                        <AddressContainer>
                            <header>
                                <MapPinLine size={22} />
                                <div>
                                    <h3>Endereço de Entrega</h3>
                                    <h4>Informe o endereço onde deseja receber seu pedido</h4>
                                </div>
                            </header>
                            <AddressForm />
                        </AddressContainer>

                        <PaymentContainer>
                            <header>
                                <CurrencyDollar size={22} />
                                <div>
                                    <h3>Pagamento</h3>
                                    <h4>O pagamento é feito na entrega. Escolha a forma que deseja pagar</h4>
                                </div>
                            </header>
                            <PaymentForm />
                        </PaymentContainer>
                    </fieldset>

                    <div>
                        <h2>Cafés selecionados</h2>
                        <ListContainer>
                            {purchaseList.map(product => (
                                <Product product={product} />
                            ))}
                            <FinalPriceContainer>
                                <FinalPriceRow>
                                    <label>Total de Itens</label>
                                    
                                    <span>
                                        <IntlProvider locale="br">
                                            <FormattedNumber value={totalCart} style="currency" currency="BRL" />
                                        </IntlProvider>
                                    </span>
                                </FinalPriceRow>
                                <FinalPriceRow>
                                    <label>Entrega</label>
                                    <span>
                                        <IntlProvider locale="br">
                                            <FormattedNumber value={carrierValue} style="currency" currency="BRL" />
                                        </IntlProvider>
                                    </span>
                                </FinalPriceRow>
                                <FinalPriceRowStrong>
                                    <label>Total</label>
                                    <span>
                                        <IntlProvider locale="br">
                                            <FormattedNumber value={totalValue} style="currency" currency="BRL" />
                                        </IntlProvider>
                                    </span>
                                </FinalPriceRowStrong>
                            </FinalPriceContainer>

                            <FinishOrderButton type="submit">
                                Confirmar Pedido
                            </FinishOrderButton>
                        </ListContainer>


                    </div>
                </form>
            </FormProvider>
        </CheckoutContainer>
    );
}