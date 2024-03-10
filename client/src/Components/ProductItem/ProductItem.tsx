import { Col } from "react-bootstrap";
import classes from './ProductItem.module.css';
import { Product } from "../../Interfaces/Interface";
import productImage from '../../Assets/sneakers1.jpg';


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
                </div>
                <div className="description">{product.name}</div>
                <div className="priceWrapper">
                    <div className="price"></div>
                    <button className="learnMoreButton">Learn More</button>
                </div>
            </div>
        </Col>
    )
}

export default ProductItem;