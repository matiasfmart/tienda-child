import React, { createContext, useState } from 'react';

export const cartContext = createContext(); 

function CartProvider({ children }) {

    const [cart, setCart] = useState([]);

    const addToCart = (product, count) => {
        if (existInCart(product.id)) {
            console.log('El item ya existia');
            const indexItem = cart.findIndex(ele => ele.item.id === product.id);
            cart[indexItem].count = cart[indexItem].count + count;
            setCart([...cart]);
            console.log(cart);
        }else{
            console.log(`Se agrego ${product.title}`);
            setCart([...cart, { item: product, count: count }]);
        }
    }

    const totalOrder = () => {
        return cart.reduce((a, b) => a + (b.item.price * b.count), 0)
    }

    const deleteItem = (id) => {
        const updatedCart = cart.filter(element => element.item.id !== id)
        setCart(updatedCart);
    }

    const existInCart = (id) => {
        return cart.some(e => e.item.id === id);
    }

    const clearCart = () => {
        setCart([])
    }

    const totalItems = () => {
        if (cart) {
            return cart.reduce(((a, b) => a += b.count), 0);
        }
    }

    return( 
        <cartContext.Provider value={{ cart, addToCart, clearCart, deleteItem, totalItems, totalOrder }}>
            {children}
        </cartContext.Provider>
    )
}

export default CartProvider;