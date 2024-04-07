import { NavLink, useLocation } from 'react-router-dom';
import classes from './CheckoutNavItem.module.css';

function CheckoutNavItem(props: any) {

    const location = useLocation();
    const locationArray = location.pathname.split("/");
    const currentPermalnik = locationArray[locationArray.length - 1];

    return(
        <NavLink to={props.link} className={classes.navItem}>
            <div className={classes.number} style={{background: currentPermalnik === props.permalink ? "#F8252C" : "#7D8693" }} >{props.number}</div>
            <div className={classes.text}>{props.text}</div>
        </NavLink>
    )
}

export default CheckoutNavItem;