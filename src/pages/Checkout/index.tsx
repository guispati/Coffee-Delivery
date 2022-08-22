import { CurrencyDollar, MapPinLine } from "phosphor-react";
import { CheckoutContainer, AddressContainer, PaymentContainer, ListContainer, FinalPriceContainer, FinalPriceRow, FinalPriceRowStrong, FinishOrderButton } from "./styles";
import { FormProvider, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as zod from 'zod';
import { AddressForm } from "./components/AddressForm";
import { PaymentForm } from "./components/PaymentForm";
import { Product } from "./components/Product";
import { ItemList, PurchaseListContext } from "../../contexts/PurchaseListContext";
import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { DateContainer } from "../../components/DateContainer";

const newOrderFormValidationSchema = zod.object({
    zipcode: zod.string().length(9),
    street: zod.string(),
    number: zod.string(),
    extra: zod.string().optional(),
    district: zod.string(),
    city: zod.string(),
    state: zod.string().length(2),
    payment: zod.string(),
});

export type NewOrderFormData = zod.infer<typeof newOrderFormValidationSchema>

export function Checkout() {
    const { cart, clearCart } = useContext(PurchaseListContext);

    const newOrderForm = useForm<NewOrderFormData>({
        resolver: zodResolver(newOrderFormValidationSchema),
        defaultValues: {
            zipcode: '',
            street: '',
            number: '',
            extra: '',
            district: '',
            city: '',
            state: '',
            payment: '',
        }
    });

    const { handleSubmit, watch, setValue } = newOrderForm;

    const navigate = useNavigate();
    function handleCreateNewOrder(data: NewOrderFormData) {
        clearCart();
        navigate('/purchase-order', {state: data});
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

    const purchaseList: ItemList[] = cart;
    
    const totalCart = purchaseList.reduce((prev, current) => {
        return prev + +(current.product.price * current.quantity);
    }, 0);

    const carrierValue = 3.50;

    const totalValue = totalCart + carrierValue;

    const zipcode = watch('zipcode');
    zipcode.length === 9 && searchCep(zipcode);

    useEffect(() => {
        !cart.length && navigate("/");
    }, [cart]);
    
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
                            {purchaseList.map(item => (
                                <Product key={item.product.id} product={item.product} quantity={item.quantity} />
                            ))}
                            <FinalPriceContainer>
                                <FinalPriceRow>
                                    <label>Total de Itens</label>
                                    <span>
                                        <DateContainer formatType="basic" price={totalCart} />
                                    </span>
                                </FinalPriceRow>
                                <FinalPriceRow>
                                    <label>Entrega</label>
                                    <span>
                                        <DateContainer formatType="basic" price={carrierValue} />
                                    </span>
                                </FinalPriceRow>
                                <FinalPriceRowStrong>
                                    <label>Total</label>
                                    <span>
                                        <DateContainer formatType="basic" price={totalValue} />
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