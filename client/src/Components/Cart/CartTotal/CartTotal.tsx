import { useSelector } from 'react-redux';
import classes from './CartTotal.module.css';
import { RootStateProducts } from '../../../Redux/productSlice';


function CartTotal() {

    const totalPrice = useSelector((state: RootStateProducts) => state.cartActions.totalPrice);

    return(
        <div className={classes.cartTotalWrapper}>
            <div className={classes.text}>Order total:</div>
            <div className={classes.totalPrice}>{`${totalPrice}€`}</div>
        </div>
    )
}

export default CartTotal;