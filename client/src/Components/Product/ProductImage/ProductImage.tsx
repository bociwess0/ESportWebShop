import classes from './ProductImage.module.css';
import img from '../../../Assets/headphones.webp';

function ProductImage() {
    return(
        <div className={classes.imgWrapper}>
            <img src={img} alt="product-image" />
        </div>
    )
}

export default ProductImage;