import classes from './Header.module.css';
import cartImage from '../../../Assets/shopping-cart.png';
import logoImage from '../../../Assets/sneakers.png';
import { NavLink } from 'react-router-dom';

function Header() {
    return (
        <div className={classes.header}>
            <NavLink to="/products">
              <div className={classes.logoWrapper}>
                <img src={logoImage} alt="" />
              </div>
            </NavLink>
            <NavLink to="/cart">
              <div className={classes.imgWrapper}>
                <a href="#">
                  <img src={cartImage} alt="" />
                </a>
              </div>
            </NavLink>
        </div>
      );
}

export default Header;