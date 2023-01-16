// import { createContext, useReducer } from "react";
// import { dispatchHelper } from "../utils/reducer/reducer.utils";

// const addCartItem = (cartItems, productToAdd) => {
//     let newArray = [...cartItems];

//     for(let i = 0; i < newArray.length; i++) {
//         if(newArray[i].id == productToAdd.id) {
//             newArray[i].quantity = newArray[i].quantity + 1;
//             return newArray;
//         }
//     }
//     return [...cartItems, {...productToAdd, quantity: 1}];
// }

// const removeCartItem = (cartItems, productToDecrease) => {
//     let newArray = [...cartItems];

//     for(let i = 0; i < newArray.length; i++) {
//         if(newArray[i].id == productToDecrease.id) {
//             newArray[i].quantity = newArray[i].quantity - 1;
            
//         }
//         if(newArray[i].quantity == 0) {
//             newArray.splice(i, 1);
//         }
//     }
//     return newArray;
// }

// const removeItem = (cartItems, productToErase) => {
//     let newArray = [...cartItems];
//     for(let i = 0; i < newArray.length; i++) {
//         if(newArray[i].id == productToErase.id) {
//             newArray.splice(i, 1);
//             return newArray;
//         }
//     }
// }

// const INITIAL_STATE = {
//     isCartOpen: false,
//     cartItem: [],
//     totalQuantity: 0,
//     totalPrice: 0
// }

// const CART_REDUCER_TYPE = {
//     "SET_CART_OPEN": "SET_CART_OPEN",
//     "UPDATE_ITEM_TO_CART": "UPDATE_ITEM_TO_CART",
// }

// const cartReducer = (state, action) => {
//     const {type, payload} = action;
//     switch(type) {
//         case CART_REDUCER_TYPE.SET_CART_OPEN:
//             return {
//                 ...state,
//                 isCartOpen: payload
//             }
//         case CART_REDUCER_TYPE.UPDATE_ITEM_TO_CART:
//             return {
//                 ...state,
//                 ...payload
//             }
//         default:
//             throw new Error(`Type Error: ${type} not handled`);
//     }
// }

// export const CartOpenContext = createContext({
//     isCartOpen: null,
//     setIsCartOpen: () => null,
//     cartItem: [],
//     addItemToCart: () => null,
//     totalQuantity: 0,
//     reduceItemInCart: () => null,
//     removeItemInCart: () => null,
//     totalPrice: 0
//  });

// export const CartOpenProvider = ({children}) => {
//     const [state, dispatch] = useReducer(cartReducer, INITIAL_STATE);
//     const {isCartOpen, cartItem, totalQuantity, totalPrice} = state;

//     const cartItemsReducer = (product) => {
//         const newTotalQuantity = product.reduce((totality, items) => items.quantity + totality , 0);
//         const newTotalPrice = product.reduce((totality, items) => (items.quantity * items.price) + totality , 0);
//         dispatch(dispatchHelper(CART_REDUCER_TYPE.UPDATE_ITEM_TO_CART, {
//             cartItem: product, 
//             totalQuantity: newTotalQuantity, 
//             totalPrice: newTotalPrice,
//         }))    
//      }

//      const setIsCartOpen = (value) => {
//         dispatch(dispatchHelper(CART_REDUCER_TYPE.SET_CART_OPEN, value));
//      }

//     const addItemToCart = (productToAdd) => {
//        const newCartItem = addCartItem(cartItem, productToAdd);
//        cartItemsReducer(newCartItem);
//     }

//     const reduceItemInCart = (productToDecrease) => {
//         const newCartItem = removeCartItem(cartItem, productToDecrease);
//         cartItemsReducer(newCartItem);
//     }

//     const removeItemInCart = (productToRemove) => {
//         const newCartItem = removeItem(cartItem, productToRemove);
//         cartItemsReducer(newCartItem);
//     }

//     const value = {
//         isCartOpen, 
//         setIsCartOpen, 
//         cartItem, 
//         addItemToCart, 
//         totalQuantity, 
//         reduceItemInCart,
//         removeItemInCart,
//         totalPrice
//     };
//     return <CartOpenContext.Provider value={value} >{children}</CartOpenContext.Provider>
// }