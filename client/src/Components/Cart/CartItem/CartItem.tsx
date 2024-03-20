import productImage from "../../../Assets/headphones.png";
import classes from './CartItem.module.css';

function CartItem() {
    return(
        <div className={classes.cartItem}>
            <div className={classes.imgAndPrice}>
                <div className={classes.imgWrapper}>
                    <img src={productImage} alt="" />
                </div>
                <div className={classes.cartInfo}>
                    <div className={classes.category}>MICE</div>
                    <div className={classes.name}>MAD CATZ R.A.T.1</div>
                </div>
            </div>
            <div className={classes.quantityWrapper}>
                <div className={classes.quantityText}>Quantity:</div>
                <button className={classes.minus}>—</button>
                <input className={classes.number} value={1} />
                <button className={classes.plus}>+</button>
            </div>
            <div className={classes.price}>20000€</div>
            <div className={classes.btnWrapper}>
                <button>Remove</button>
            </div>
        </div>
    )
}

export default CartItem;