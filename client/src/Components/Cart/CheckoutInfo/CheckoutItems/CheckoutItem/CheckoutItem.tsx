
import classes from './CheckoutItem.module.css';
import { Product } from '../../../../../Interfaces/Interface';
import ChooseQuantity from '../../../../Product/ChooseQuantity/ChooseQuantity';


interface Props {
    product: Product
}

function CheckoutItem({product} : Props) {
    return(
        <div className={classes.checkoutItem}>
            <div className={classes.imgAndPrice}>
                <div className={classes.imgWrapper}>
                    <img src={product.pictureUrl} alt="" />
                </div>
                <div className={classes.checkoutInfo}>
                    <div className={classes.category}>{product.brand}</div>
                    <div className={classes.name}>{product.name}</div>
                </div>
                
            </div>
            <div className={classes.quantity}>{`Quantity: ${product.quantity}`}</div>
            <div className={classes.price}>{`${product.price}€`}</div>
        </div>
    )
}

export default CheckoutItem;