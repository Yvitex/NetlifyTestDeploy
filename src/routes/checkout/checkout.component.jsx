import "./checkout.style.scss"
import CheckoutItem from "../../component/checkout-item/checkout-item.component";
import { useSelector } from "react-redux";
import { selectCartItems, selectCartPrice } from "../../store/cart/cart.selector";
import Payment from "../../component/payment-form/paymentForm.component";

const Checkout = () => {
    const cartItem = useSelector(selectCartItems);
    const totalPrice = useSelector(selectCartPrice);



    return (
        <div className="checkout-container">
            <div className="checkout-header">
                <div className="header-block">
                    <span>Product</span>
                </div>
                <div className="header-block">
                    <span>Description</span>
                </div>
                <div className="header-block">
                    <span>Quantity</span>
                </div>
                <div className="header-block">
                    <span>Price</span>
                </div>
                <div className="header-block">
                    <span>Remove</span>
                </div>
            </div>
            {cartItem.map((item) => {
                return <CheckoutItem key={item.id} cartItem={item} />
            })}

            <span className="total">Total: {totalPrice}</span>
            <Payment />
            
        </div>
    )
}

export default Checkout;