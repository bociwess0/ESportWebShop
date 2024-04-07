import classes from './CheckoutNav.module.css';
import CheckoutNavItem from './CheckoutNavItem/CheckoutNavItem';

function CheckoutNav() {
    return(
        <div className={classes.checkoutNavWrapper}>
            <CheckoutNavItem number={1} text={"Products"} />
            <CheckoutNavItem number={2} text={"Address"} />
            <CheckoutNavItem number={3} text={"Checkout"} />
        </div>
    )
}

export default CheckoutNav;