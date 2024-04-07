import classes from './CheckoutNav.module.css';
import CheckoutNavItem from './CheckoutNavItem/CheckoutNavItem';

function CheckoutNav() {
    return(
        <div className={classes.checkoutNavWrapper}>
            <CheckoutNavItem link={"/cart/productsInCart"} number={1} text={"Products"} permalink="productsInCart" />
            <CheckoutNavItem link={"/cart/address"} number={2} text={"Address"} permalink="address"/>
            <CheckoutNavItem link={"/cart/checkout"} number={3} text={"Checkout"}  permalink="checkout"/>
        </div>
    )
}

export default CheckoutNav;