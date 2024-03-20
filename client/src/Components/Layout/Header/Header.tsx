import classes from './Header.module.css';
import logoImage from '../../../Assets/sneakers.png';
import { NavLink } from 'react-router-dom';
import HeaderCart from './HeaderCart/HeaderCart';

function Header() {
    return (
        <div className={classes.header}>
            <NavLink to="/products">
              <div className={classes.logoWrapper}>
                <img src={logoImage} alt="" />
              </div>
            </NavLink>
            <NavLink to="/cart" style={() => {
              return {textDecorationLine: 'none', color: '#F8252C'}
            }}>
              <HeaderCart />
            </NavLink>
        </div>
      );
}

export default Header;