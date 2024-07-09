import { NavLink } from 'react-router-dom';
import classes from './OrderProduct.module.css';
import {OrderProductObj, Product } from '../../../../../../Interfaces/Interface';

interface Props {
    product: OrderProductObj;
}


function OrderProduct({product} : Props) {
    return(
        <div className={classes.productItem}>
            <NavLink style={{textDecoration: "none", color: "#000000"}} to={`/products/${product.productId}`} className={classes.imgWrapper}>
                <div className={classes.productImg}>
                    <img src={product.pictureUrl} alt="" />
                </div>
                <div className={classes.description}>{product.name}</div>
            </NavLink>
            <div className={classes.priceWrapper}>
                <div className={classes.learnMoreButton}>Paid Price</div>
                <div className={classes.price}>{`${product.price}€`}</div>
            </div>
        </div>
    )
}

export default OrderProduct;