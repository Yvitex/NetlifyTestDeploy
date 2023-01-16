import { dispatchHelper } from "../../utils/reducer/reducer.utils";
import { CART_REDUCER_TYPE } from "./cart.type";


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

const addCartItem = (cartItems, productToAdd) => {
    let newArray = [...cartItems];

    for(let i = 0; i < newArray.length; i++) {
        if(newArray[i].id == productToAdd.id) {
            newArray[i].quantity = newArray[i].quantity + 1;
            return newArray;
        }
    }
    console.log("Outer", cartItems)
    return [...cartItems, {...productToAdd, quantity: 1}];
}

export const setIsCartOpen = (boolean) => dispatchHelper(CART_REDUCER_TYPE.SET_CART_OPEN, boolean);

export const addItemToCart = (cartItem, productToAdd) => {
   const newCartItem = addCartItem(cartItem, productToAdd);
   console.log("Exec", newCartItem)
   return dispatchHelper(CART_REDUCER_TYPE.UPDATE_ITEM_TO_CART, newCartItem);
}

export const reduceItemInCart = (cartItem, productToDecrease) => {
    const newCartItem = removeCartItem(cartItem, productToDecrease);
    return dispatchHelper(CART_REDUCER_TYPE.UPDATE_ITEM_TO_CART, newCartItem);
}

export const removeItemInCart = (cartItem, productToRemove) => {
    const newCartItem = removeItem(cartItem, productToRemove);
    return dispatchHelper(CART_REDUCER_TYPE.UPDATE_ITEM_TO_CART, newCartItem);
};


