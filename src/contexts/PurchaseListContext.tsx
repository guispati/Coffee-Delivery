import { createContext, ReactNode, useEffect, useState } from "react";
import { Coffee } from '../data/coffeeList';
import { produce } from 'immer';

export type ItemList = {
    product: Coffee;
    quantity: number;
}

interface PurchaseList {
    cart: ItemList[];
    addItemToCart: (product: Coffee, quantity: number) => void;
    changeQuantityOnCart: (product: Coffee, quantity: number) => void;
    clearCart: () => void;
}

export const PurchaseListContext = createContext({} as PurchaseList);

interface ProductsContextProviderProps {
    children: ReactNode;
}

export function PurchaseListContextProvider({ children }: ProductsContextProviderProps) {
    const [ cart, setCart ] = useState<ItemList[]>([]);

    function addItemToCart(product: Coffee, quantity: number) {
        const itemPositionOnArray = cart.findIndex(item => item.product.id === product.id);

        if (itemPositionOnArray >= 0) {
            setCart(produce(cart, draft => {
                draft[itemPositionOnArray].quantity += quantity;
            }));
        } else {
            const newList = [...cart, { product, quantity }];
            setCart(newList);
        }
    }

    function changeQuantityOnCart(product: Coffee, quantity: number) {
        const itemPositionOnArray = cart.findIndex(item => item.product.id === product.id);

        if (itemPositionOnArray >= 0) {
            setCart(produce(cart, draft => {
                draft[itemPositionOnArray].quantity = quantity;
            }));
        }
    }

    function clearCart() {
        setCart([]);
    }

    return (
        <PurchaseListContext.Provider value={{ cart, addItemToCart, changeQuantityOnCart, clearCart }}>
            {children}
        </PurchaseListContext.Provider>
    );
}