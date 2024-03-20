import { Col } from "react-bootstrap";
import classes from './ProductItem.module.css';
import { Product } from "../../Interfaces/Interface";
import productImage from '../../Assets/headphones.png';


interface Props {
    product: Product;
}

function ProductItem({product}: Props) {
    return(
        <Col xs={6} sm={3}>
            <div className={classes.productItem}>
                <div className={classes.imgWrapper}>
                    <div className={classes.productImg}>
                        <img src={productImage} alt="" />
                    </div>
                    <div className={classes.description}>{product.name}</div>
                </div>
                <div className={classes.priceWrapper}>
                    <button className={classes.learnMoreButton}>Add To Cart</button>
                    <div className={classes.price}>{product.price}</div>
                </div>
            </div>
        </Col>
    )
}

export default ProductItem;