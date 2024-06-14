import OrderProducts from '../OrderProducts/OrderProducts';
import ProfileBanner from '../ProfileBanner/ProfileBanner';
import classes from './OrderHistory.module.css';

function OrderHistory() {
    return(
        <div className={classes.orderHistoryWrapper}>
            <ProfileBanner />
            <OrderProducts />
        </div>
    )
}

export default OrderHistory;