import { CartIconContainer, ShoppingIcon, ItemCount } from "./cart-icon.style"
import { useDispatch } from "react-redux"
import { setIsCartOpen } from "../../store/cart/cart.action";
import { useSelector } from "react-redux";
import { selectCartQuantity, selectIsCartOpen } from "../../store/cart/cart.selector";

const CartIcon = () => {
    const dispatch = useDispatch();
    const isCartOpen = useSelector(selectIsCartOpen);
    const totalQuantity = useSelector(selectCartQuantity);



    const toggleIsCartOpen = () => dispatch(setIsCartOpen(!isCartOpen));

    return (
        <CartIconContainer onClick={toggleIsCartOpen}>
            <ShoppingIcon/>
            <ItemCount>{totalQuantity}</ItemCount>
        </CartIconContainer>
    )
}

export default CartIcon;