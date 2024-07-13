import { Product } from "../../../Interfaces/Interface";
import classes from './CartItem.module.css';
import ChooseQuantity from "../../Product/ChooseQuantity/ChooseQuantity";
import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import { increaseProductQuantityInStock } from "../../../Redux/productSlice";

interface Props {
    product: Product;
    removeProduct: Function,
    showModal: Function
}

function CartItem({product, removeProduct, showModal}: Props) {

    const dispatch = useDispatch();

    const removeFromCartHandler = () => {
        removeProduct(product);
        dispatch(increaseProductQuantityInStock({productid: product.id, quantity: product.quantity}))
        showModal();
    }

    return(
        <div className={classes.cartItem}>
            <div className={classes.imgAndPrice}>
                <NavLink to={`/products/${product.id}`} className={classes.imgWrapper}>
                    <img src={product.pictureUrl} alt="" />
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