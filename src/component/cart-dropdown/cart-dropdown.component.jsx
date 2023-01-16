import Button from "../button/button.component"
import { CartDropdownContainer, EmptyMessage, CartItemContainer } from "./cart-dropdown.style"
import CartItem from "../cart-item/cart-item.component"
import { useNavigate } from "react-router-dom"
import { useSelector } from "react-redux"
import { selectCartItems } from "../../store/cart/cart.selector"

const CartDropdown = () => {
    const cartItem = useSelector(selectCartItems);
    console.log("Cart Item" + cartItem)
    const navigate = useNavigate();

    const goToCheckout = () => {
        navigate("/checkout");
    }

    return (
        <CartDropdownContainer>
            <CartItemContainer>
                {cartItem.map((items) => {
                    return <CartItem key={items.id} cartItem={items}/>
                })}
            </CartItemContainer>
            <Button onClick={goToCheckout} text="Go to Checkout" />
        </CartDropdownContainer>
    )
}

export default CartDropdown;