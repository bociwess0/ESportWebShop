import { useDispatch } from 'react-redux';
import classes from './ChooseQuantity.module.css'
import { changeQuantity } from '../../../Redux/cartSlice';
import { Product } from '../../../Interfaces/Interface';
import { useEffect, useState } from 'react';

interface Props {
    product: Product,
    cartItem : boolean,
    action: Function | boolean;
}

function ChooseQuantity({product, cartItem, action} : Props) {

    const dispatch = useDispatch();

    const [quantityValue, setQuantityValue] = useState(1);
    const [disabledButton, setDisabledButton] = useState(false);

    useEffect(() => {
        if(typeof action === "function") action(quantityValue);
    }, [quantityValue])

    const changeProductQuantityHandler = (value: number, action: string, product: Product) => {
        if(cartItem) {
            dispatch(changeQuantity({value: value, action: action, product: product}))
        } else {
            if(action === "increase") {
                const newValue = quantityValue + 1;
                setQuantityValue(newValue)
            } else {
                const newValue = quantityValue - 1;
                setQuantityValue(newValue)
            }
        };
    }

    useEffect(() => {
        if(cartItem) {
            if(product.quantity === 1) {
                setDisabledButton(true)
            } else setDisabledButton(false);
        } else {
            if(quantityValue === 1) {
                setDisabledButton(true)
            } else {
                setDisabledButton(false);
            }
        }
    }, [product.quantity, quantityValue])

    return(
        <div className={classes.quantityWrapper}>
                <div className={classes.quantityText}>Quantity:</div>
                <button className={classes.minus} disabled={disabledButton} onClick={() => changeProductQuantityHandler(1, "reduce", product)} >—</button>
                <input type="number" readOnly className={classes.number} value={cartItem ? product.quantity : quantityValue} />
                <button className={classes.plus} onClick={() => changeProductQuantityHandler(1, "increase", product)}>+</button>
        </div>
    )
}

export default ChooseQuantity;