import { useDispatch } from "react-redux";
import productImage from "../../../Assets/headphones.png";
import { Product } from "../../../Interfaces/Interface";
import classes from './CartItem.module.css';
import { changeQuantity, removeFromCart } from "../../../Redux/cartSlice";

interface Props {
    product: Product;
}

function CartItem({product}: Props) {

    const dispatch = useDispatch();

    const removeFromCartHandler = () => {
        dispatch(removeFromCart({item: product}))
    }

    const changeProductQuantityHandler = (value: number, action: string, product: Product) => {
        dispatch(changeQuantity({value: value, action: action, product: product}));
    }


    return(
        <div className={classes.cartItem}>
            <div className={classes.imgAndPrice}>
                <div className={classes.imgWrapper}>
                    <img src={productImage} alt="" />
                </div>
                <div className={classes.cartInfo}>
                    <div className={classes.category}>{product.brand}</div>
                    <div className={classes.name}>{product.name}</div>
                </div>
            </div>
            <div className={classes.quantityWrapper}>
                <div className={classes.quantityText}>Quantity:</div>
                <button className={classes.minus} disabled={product.quantityInCart === 1 ? true : false} onClick={() => changeProductQuantityHandler(1, "reduce", product)} >—</button>
                <input type="number" readOnly className={classes.number} value={product.quantityInCart} />
                <button className={classes.plus} onClick={() => changeProductQuantityHandler(1, "increase", product)}>+</button>
            </div>
            <div className={classes.price}>{`${product.price}€`}</div>
            <div className={classes.btnWrapper}>
                <button onClick={removeFromCartHandler}>Remove</button>
            </div>
        </div>
    )
}

export default CartItem;