import { useDispatch } from 'react-redux';
import classes from './ChooseQuantity.module.css'
import { changeQuantity } from '../../../Redux/cartSlice';
import { Product } from '../../../Interfaces/Interface';

interface Props {
    product: Product,
    cartItem : boolean
}

function ChooseQuantity({product, cartItem} : Props) {

    const dispatch = useDispatch();

    const changeProductQuantityHandler = (value: number, action: string, product: Product) => {
        if(cartItem) dispatch(changeQuantity({value: value, action: action, product: product}));
    }

    return(
        <div className={classes.quantityWrapper}>
                <div className={classes.quantityText}>Quantity:</div>
                <button className={classes.minus} disabled={product.quantity === 1 ? true : false} onClick={() => changeProductQuantityHandler(1, "reduce", product)} >—</button>
                <input type="number" readOnly className={classes.number} value={cartItem ? product.quantity : 1} />
                <button className={classes.plus} onClick={() => changeProductQuantityHandler(1, "increase", product)}>+</button>
        </div>
    )
}

export default ChooseQuantity;