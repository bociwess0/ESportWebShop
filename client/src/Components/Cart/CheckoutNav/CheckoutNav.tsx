import classes from './CheckoutNav.module.css';
import CheckoutNavItem from './CheckoutNavItem/CheckoutNavItem';

function CheckoutNav() {
    return(
        <div className={classes.checkoutNavWrapper}>
            <CheckoutNavItem key={1} link={"/cart/productsInCart"} number={1} text={"Products"} permalink="productsInCart" />
            <CheckoutNavItem key={2} link={"/cart/address"} number={2} text={"Address"} permalink="address"/>
            <CheckoutNavItem key={3} link={"/cart/checkout"} number={3} text={"Checkout"}  permalink="checkout"/>
        </div>
    )
}

export default CheckoutNav;