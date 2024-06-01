import { NavLink } from 'react-router-dom';
import classes from './OrderProduct.module.css';
import { Product } from '../../../../../../Interfaces/Interface';
import productImage from '../../../../../../Assets/headphones.webp';

interface Props {
    product: Product;
}


function OrderProduct({product} : Props) {
    return(
        <div className={classes.productItem}>
            <NavLink style={{textDecoration: "none", color: "#000000"}} to={`/products/${product.id}`} className={classes.imgWrapper}>
                <div className={classes.productImg}>
                    <img src={productImage} alt="" />
                </div>
                <div className={classes.description}>{product.name}</div>
            </NavLink>
            <div className={classes.priceWrapper}>
                <div className={classes.learnMoreButton}>Paid Price</div>
                <div className={classes.price}>{product.price}</div>
            </div>
        </div>
    )
}

export default OrderProduct;