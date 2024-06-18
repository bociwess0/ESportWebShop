import { useDispatch } from "react-redux";
import productImage from "../../../Assets/headphones.webp";
import { Product } from "../../../Interfaces/Interface";
import classes from './CartItem.module.css';
import { removeFromCart } from "../../../Redux/cartSlice";
import { removeFromCartDB } from "../../../DatabaseRequests/Requests";
import ChooseQuantity from "../../Product/ChooseQuantity/ChooseQuantity";
import { NavLink } from "react-router-dom";

interface Props {
    product: Product;
    removeProduct: Function,
    showModal: Function
}

function CartItem({product, removeProduct, showModal}: Props) {

    const removeFromCartHandler = () => {
        removeProduct(product);
        showModal();
    }

    return(
        <div className={classes.cartItem}>
            <div className={classes.imgAndPrice}>
                <NavLink to={`/products/${product.id}`} className={classes.imgWrapper}>
                    <img src={productImage} alt="" />
                </NavLink>
                <div className={classes.cartInfo}>
                    <div className={classes.category}>{product.brand}</div>
                    <div className={classes.name}>{product.name}</div>
                </div>
            </div>
            <ChooseQuantity product={product} cartItem={true} action={false} />
            <div className={classes.price}>{`${product.price}€`}</div>
            <div className={classes.btnWrapper}>
                <button onClick={removeFromCartHandler}>Remove</button>
            </div>
        </div>
    )
}

export default CartItem;