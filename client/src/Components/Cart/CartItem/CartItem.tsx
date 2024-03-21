import productImage from "../../../Assets/headphones.png";
import { Product } from "../../../Interfaces/Interface";
import classes from './CartItem.module.css';

interface Props {
    product: Product;
}

function CartItem({product}: Props) {
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
                <button className={classes.minus}>—</button>
                <input className={classes.number} value={1} />
                <button className={classes.plus}>+</button>
            </div>
            <div className={classes.price}>{`${product.price}€`}</div>
            <div className={classes.btnWrapper}>
                <button>Remove</button>
            </div>
        </div>
    )
}

export default CartItem;