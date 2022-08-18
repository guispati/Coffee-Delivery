import { useFormContext } from "react-hook-form";
import { FormContainer, FormRow } from "./styles";

export function AddressForm() {
    const { register } = useFormContext();

    return (
        <FormContainer>
            <FormRow>
                <input id="zipcode" type="text" placeholder="CEP" {...register('zipcode')} />
            </FormRow>
            <FormRow>
                <input id="street" type="text" placeholder="Rua" {...register('street')} />
            </FormRow>
            <FormRow>
                <input id="number" type="text" placeholder="Número" {...register('number')} />
                <input id="extra" type="text" placeholder="Complemento" {...register('extra')} />
            </FormRow>
            <FormRow>
                <input id="district" type="text" placeholder="Bairro" {...register('district')} />
                <input id="city" type="text" placeholder="Cidade" {...register('city')} />
                <input id="state" type="text" placeholder="UF" {...register('state')} />
            </FormRow>
        </FormContainer>
    );
}