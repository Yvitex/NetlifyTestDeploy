import "./checkout-item.style.scss";
import { useContext } from "react";
import { CartOpenContext } from "../../context/cart.context";

const CheckoutItem = ({cartItem}) => {
    const {removeItemInCart, addItemToCart, reduceItemInCart} = useContext(CartOpenContext);

    const increment = (item) => {
        addItemToCart(item)
    }

    const decrement = (item) => {
        reduceItemInCart(item)
    }

    const remove = (item) => {
        removeItemInCart(item)
    }
    
    const {imageUrl, name, quantity, price} = cartItem;
    return (
        <div className="checkout-item-container">
            <div className="image-container">
                <img src={imageUrl} alt={name} />
            </div>
            <span className="name">{name}</span>
            <span className="quantity">
                <div className="arrow" onClick={() => decrement(cartItem)}>
                    &#10094;
                </div>
                <span className="value">{quantity}</span>
                <div className="arrow" onClick={() => increment(cartItem)}>
                    &#10095;
                </div>
            </span>
            <span className="price">{price}</span>
            <div onClick={() => remove(cartItem)} className="remove-button">&#10005;</div>
        </div>
    )
}

export default CheckoutItem;