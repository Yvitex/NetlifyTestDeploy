import "./checkout-item.style.scss";
import { addItemToCart, reduceItemInCart, removeItemInCart } from "../../store/cart/cart.action";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { selectCartItems } from "../../store/cart/cart.selector";

const CheckoutItem = ({cartItem}) => {
    const dispatch = useDispatch();
    const cartItemSelector = useSelector(selectCartItems);


    const increment = (item) => {
        dispatch(addItemToCart(cartItemSelector, item));
    }

    const decrement = (item) => {
        dispatch(reduceItemInCart(cartItemSelector, item));
    }

    const remove = (item) => {
        dispatch(removeItemInCart(cartItemSelector, item));
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