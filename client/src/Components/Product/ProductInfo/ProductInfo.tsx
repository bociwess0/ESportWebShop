import { Product } from '../../../Interfaces/Interface';
import ChooseQuantity from '../ChooseQuantity/ChooseQuantity';
import classes from './ProductInfo.module.css';

interface Props {
    product: Product
}

function ProductInfo({product} : Props) {
    return(
        <div className={classes.productInfoWrapper}>
            <h2 className={classes.title}>{product.name}</h2>
            <h4 className={classes.brand}>{product.brand}</h4>
            <div className={classes.description}>{product.description}</div>
            <div className={classes.price}>{`${product.price}$`}</div>
            <ChooseQuantity product={product} cartItem={false} />
        </div>
    )
}

export default ProductInfo;