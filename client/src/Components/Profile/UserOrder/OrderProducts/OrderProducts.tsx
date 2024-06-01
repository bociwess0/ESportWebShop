import OrderItem from './OrderItem/OrderItem';
import classes from './OrderProducts.module.css';

function OrderProducts() {
    return(
        <div className={classes.orderProducts}>
            <OrderItem />
            <OrderItem />
            <OrderItem />
        </div>
    )
}

export default OrderProducts;