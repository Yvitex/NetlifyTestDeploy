import Button from "../button/button.component"
import { CartDropdownContainer, EmptyMessage, CartItemContainer } from "./cart-dropdown.style"
import { CartOpenContext } from "../../context/cart.context"
import { useContext } from "react"
import CartItem from "../cart-item/cart-item.component"
import { useNavigate } from "react-router-dom"

const CartDropdown = () => {
    const {cartItem} = useContext(CartOpenContext)
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