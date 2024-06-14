import { Button } from 'react-bootstrap';
import { Product } from '../../../Interfaces/Interface';
import ChooseQuantity from '../ChooseQuantity/ChooseQuantity';
import classes from './ProductInfo.module.css';
import { addTocartDB } from '../../../DatabaseRequests/Requests';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { addToCart } from '../../../Redux/cartSlice';

interface Props {
    product: Product
}

function ProductInfo({product} : Props) {

    const dispatch = useDispatch();
    const [enteredQuantity, setEnteredQuantity] = useState<number>(1);

    const AddToCartHandler = () => {
        console.log(enteredQuantity);
        
        addTocartDB(product, enteredQuantity);
        dispatch(addToCart({product: product, quantity: enteredQuantity}));
    }

    return(
        <div className={classes.productInfoWrapper}>
            <h2 className={classes.title}>{product.name}</h2>
            <h4 className={classes.brand}>{product.brand}</h4>
            <div className={classes.description}>{product.description}</div>
            <div className={classes.price}>{`${product.price}$`}</div>
            <ChooseQuantity product={product} cartItem={false} action={setEnteredQuantity} />
            <button className={classes.addToCartButton} onClick={AddToCartHandler} >Add To Cart</button>
        </div>
    )
}

export default ProductInfo;