import { Col } from "react-bootstrap";
import classes from './ProductItem.module.css';
import { Product } from "../../Interfaces/Interface";
import productImage from '../../Assets/headphones.png';
import { useDispatch } from "react-redux";
import { addToCart } from "../../Redux/cartSlice";
import { addTocartDB } from "../../DatabaseRequests/Requests";


interface Props {
    product: Product;
}

function ProductItem({product}: Props) {

    const dispatch = useDispatch();

    const addToCartHandler = () => {
        dispatch(addToCart({product: product}));
        addTocartDB(product);
    }

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
                    <button onClick={addToCartHandler} className={classes.learnMoreButton}>Add To Cart</button>
                    <div className={classes.price}>{product.price}</div>
                </div>
            </div>
        </Col>
    )
}

export default ProductItem;