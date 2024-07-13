import classes from './ProductImage.module.css';
import { Product } from '../../../Interfaces/Interface';
import { useEffect, useState } from 'react';

interface Props {
    product: Product
}

function ProductImage({product} : Props) {
    const [outOfStock, setOutOfStock] = useState<boolean>(false)

    useEffect(() => {        
        if(product.quantityInStock === 0) {
            setOutOfStock(true)
        } else {
            setOutOfStock(false)
        }
    }, [product.quantityInStock])

    return(
        <div className={`${classes.imgWrapper} ${outOfStock ? classes.outOfStock : ""}`}>
            <img src={product.pictureUrl} alt="product-image" />
        </div>
    )
}

export default ProductImage;