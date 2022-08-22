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
    removeItemFromCart: (product: Coffee) => void;
    clearCart: () => void;
}

export const PurchaseListContext = createContext({} as PurchaseList);

interface ProductsContextProviderProps {
    children: ReactNode;
}

const storageKeyName: string = '@Coffee-Delivery:cart-1.0.0'

export function PurchaseListContextProvider({ children }: ProductsContextProviderProps) {
    const [ cart, setCart ] = useState<ItemList[]>(() => {
        const storedCartItems = localStorage.getItem(storageKeyName);
        if (storedCartItems) {
            return JSON.parse(storedCartItems);
        }
        return [];
    });

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

    function removeItemFromCart(product: Coffee) {
        const itemPositionOnArray = cart.findIndex(item => item.product.id === product.id);

        if (itemPositionOnArray >= 0) {
            setCart(produce(cart, draft => {
                draft.splice(itemPositionOnArray, 1);
            }));
        }
    }

    function clearCart() {
        setCart([]);
    }

    useEffect(() => {
        const stateJSON = JSON.stringify(cart);

        localStorage.setItem(storageKeyName, stateJSON);
    }, [cart]);

    return (
        <PurchaseListContext.Provider value={{ cart, addItemToCart, changeQuantityOnCart, clearCart, removeItemFromCart }}>
            {children}
        </PurchaseListContext.Provider>
    );
}