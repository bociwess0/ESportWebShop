import classes from './CheckoutNavItem.module.css';

function CheckoutNavItem(props: any) {
    return(
        <div className={classes.navItem}>
            <div className={classes.number}>{props.number}</div>
            <div className={classes.text}>{props.text}</div>
        </div>
    )
}

export default CheckoutNavItem;