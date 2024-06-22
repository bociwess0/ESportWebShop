import classes from './ProductImage.module.css';
import { Product } from '../../../Interfaces/Interface';

interface Props {
    product: Product
}

function ProductImage({product} : Props) {
    return(
        <div className={classes.imgWrapper}>
            <img src={product.pictureUrl} alt="product-image" />
        </div>
    )
}

export default ProductImage;