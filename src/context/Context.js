import React, { createContext, useReducer, useContext } from 'react';
import faker from "faker";
import { cartReducers } from './Reducers';

const Cart = createContext();
faker.seed(99);

const Context = ({ children }) =>
{
    const Products = [...Array(6)].map(() => ({
        id: faker.datatype.uuid(),
        name: faker.commerce.productName(),
        image: faker.random.image(),
        inStock: faker.random.arrayElement([1]),
    }));

    // console.log(Products);

    const [state, dispatch] = useReducer(cartReducers, { Products: Products, cart: [] });
    return (
        <Cart.Provider value={{ state, dispatch }} >
            {children}
        </Cart.Provider>
    )
}

export default Context;

export const CartState = () =>
{
    return (
        useContext(Cart)
    )
}
