import { createContext, useEffect, useState } from "react";

const addCartItem = (cartItems, productToAdd) => {
    let newArray = [...cartItems];

    for(let i = 0; i < newArray.length; i++) {
        if(newArray[i].id == productToAdd.id) {
            newArray[i].quantity = newArray[i].quantity + 1;
            return newArray;
        }
    }
    return [...cartItems, {...productToAdd, quantity: 1}];
}

const removeCartItem = (cartItems, productToDecrease) => {
    let newArray = [...cartItems];

    for(let i = 0; i < newArray.length; i++) {
        if(newArray[i].id == productToDecrease.id) {
            newArray[i].quantity = newArray[i].quantity - 1;
            
        }
        if(newArray[i].quantity == 0) {
            newArray.splice(i, 1);
        }
    }
    return newArray;
}

const removeItem = (cartItems, productToErase) => {
    let newArray = [...cartItems];
    for(let i = 0; i < newArray.length; i++) {
        if(newArray[i].id == productToErase.id) {
            newArray.splice(i, 1);
            return newArray;
        }
    }
}

export const CartOpenContext = createContext({
    isCartOpen: null,
    setIsCartOpen: () => null,
    cartItem: [],
    addItemToCart: () => null,
    totalQuantity: 0,
    reduceItemInCart: () => null,
    removeItemInCart: () => null,
    totalPrice: 0
 });

export const CartOpenProvider = ({children}) => {
    const [isCartOpen, setIsCartOpen] = useState(false);
    const [cartItem, setCartItem] = useState([]);
    const [totalQuantity, setTotalQuantity] = useState(0);
    const [totalPrice, setTotalPrice] = useState(0);

    const addItemToCart = (productToAdd) => {
        setCartItem(addCartItem(cartItem, productToAdd));
    }

    const reduceItemInCart = (productToDecrease) => {
        setCartItem(removeCartItem(cartItem, productToDecrease));
    }

    const removeItemInCart = (productToRemove) => {
        setCartItem(removeItem(cartItem, productToRemove));
    }

    useEffect(() => {
        const total = cartItem.reduce((totality, items) => items.quantity + totality , 0)
        setTotalQuantity(total);
    }, [cartItem])

    useEffect(() => {
        const total = cartItem.reduce((totality, items) => (items.quantity * items.price) + totality , 0)
        setTotalPrice(total);
    }, [cartItem])

    const value = {
        isCartOpen, 
        setIsCartOpen, 
        cartItem, 
        addItemToCart, 
        totalQuantity, 
        reduceItemInCart,
        removeItemInCart,
        totalPrice
    };
    return <CartOpenContext.Provider value={value} >{children}</CartOpenContext.Provider>
}