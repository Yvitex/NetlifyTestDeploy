import { CartIconContainer, ShoppingIcon, ItemCount } from "./cart-icon.style"
import { useContext } from "react"
import { CartOpenContext } from "../../context/cart.context"

const CartIcon = () => {
    const {isCartOpen, setIsCartOpen, totalQuantity} = useContext(CartOpenContext);


    const toggleIsCartOpen = () => setIsCartOpen(!isCartOpen);

    return (
        <CartIconContainer onClick={toggleIsCartOpen}>
            <ShoppingIcon/>
            <ItemCount>{totalQuantity}</ItemCount>
        </CartIconContainer>
    )
}

export default CartIcon;