import { Col } from "react-bootstrap";
import classes from './ProductItem.module.css';
import { Product } from "../../Interfaces/Interface";
import productImage from '../../Assets/headphones.webp';
import { useDispatch } from "react-redux";
import { addToCart } from "../../Redux/cartSlice";
import { addTocartDB } from "../../DatabaseRequests/Requests";
import { NavLink } from "react-router-dom";


interface Props {
    product: Product;
    showToastMessage: () => void;
}

function ProductItem({product, showToastMessage}: Props) {

    const dispatch = useDispatch();

    const addToCartHandler = () => {
        dispatch(addToCart({product: product, quantity: 1}));
        addTocartDB(product, 1);
        showToastMessage();
    }
    

    return(
        <Col xs={6} sm={3}>
            <div className={classes.productItem}>
                <NavLink style={{textDecoration: "none", color: "#000000"}} to={`/products/${product.id}`} className={classes.imgWrapper}>
                    <div className={classes.productImg}>
                        <img src={product.pictureUrl} alt="" />
                    </div>
                    <div className={classes.description}>{product.name}</div>
                </NavLink>
                <div className={classes.priceWrapper}>
                    <button onClick={addToCartHandler} className={classes.learnMoreButton}>Add To Cart</button>
                    <div className={classes.price}>{`${product.price}€`}</div>
                </div>
            </div>
        </Col>
    )
}

export default ProductItem;