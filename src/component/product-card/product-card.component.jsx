import "./product-card.style.scss"
import Button from "../button/button.component"
import { useContext } from "react";
import { CartOpenContext } from "../../context/cart.context";
import { BUTTON_TYPES } from "../button/button.component";

const ProductCard = ({product}) => {
    const {imageUrl, name, price} = product;
    const {addItemToCart, cartItem} = useContext(CartOpenContext);

    const addToCart = () => {
        addItemToCart(product);
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