import "./product-card.style.scss"
import Button from "../button/button.component"
import { BUTTON_TYPES } from "../button/button.component";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { selectCartItems } from "../../store/cart/cart.selector";
import { addItemToCart } from "../../store/cart/cart.action";

const ProductCard = ({product}) => {
    const {imageUrl, name, price} = product;
    const cartItem = useSelector(selectCartItems);
    const dispatch = useDispatch();

    const addToCart = () => {
        dispatch(addItemToCart(cartItem, product));
    }

    return (
        <div className="product-card-container">
            <img src={imageUrl} alt={name} />
            <div className="footer">
                <span className="name">{name}</span>
                <span className="price">{price}</span>
            </div>
            <Button onClick={addToCart} customStyles={BUTTON_TYPES.inverted} text="Add to Cart" />
        </div>
    )
}

export default ProductCard;