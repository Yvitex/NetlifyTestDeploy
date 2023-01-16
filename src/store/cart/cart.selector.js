import { createSelector } from "reselect";

const cartReducerInstance = (state) => state.cart;

export const selectIsCartOpen = createSelector(
    [cartReducerInstance],
    (cartReducer) => cartReducer.isCartOpen
)

export const selectCartItems = createSelector(
    [cartReducerInstance], 
    (cartReducer) => cartReducer.cartItem
)

export const selectCartQuantity = createSelector(
    [selectCartItems],
    (cartItemsData) => cartItemsData.reduce(
        (totality, items) => items.quantity + totality , 0)
)

export const selectCartPrice = createSelector(
    [selectCartItems],
    (cartItemsData) => cartItemsData.reduce(
        (totality, items) => (items.quantity * items.price) + totality , 0)
)
