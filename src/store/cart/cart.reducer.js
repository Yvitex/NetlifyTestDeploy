import { CART_REDUCER_TYPE } from "./cart.type";

const INITIAL_STATE = {
    isCartOpen: false,
    cartItem: [],
}

export const cartReducer = (state = INITIAL_STATE, action = {}) => {
    const {type, payload} = action;
    switch(type) {
        case CART_REDUCER_TYPE.SET_CART_OPEN:
            return {
                ...state,
                isCartOpen: payload
            }
        case CART_REDUCER_TYPE.UPDATE_ITEM_TO_CART:
            return {
                ...state,
                cartItem: payload
            }
        default:
            return state;
    }
}