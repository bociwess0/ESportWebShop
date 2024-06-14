import classes from './Header.module.css';
import logoImage from '../../../Assets/logo_img.svg';
import { NavLink } from 'react-router-dom';
import HeaderCart from './HeaderCart/HeaderCart';
import { useSelector } from 'react-redux';
import { RootStateProducts } from '../../../Redux/cartSlice';
import HeaderProfile from './HeaderProfile/HeaderProfile';

function Header() {

    const totalProducts = useSelector((state: RootStateProducts) => state.cartActions.totalProductsInCart);

    return (
        <div className={classes.header}>
            <NavLink to="/products">
              <div className={classes.logoWrapper}>
                <img src={logoImage} alt="" />
              </div>
            </NavLink>
            <div className={classes.rightItemsWrapper}>
              <HeaderProfile />
              <NavLink to="/cart" style={() => {
                return {textDecorationLine: 'none', color: '#DA0047', pointerEvents: totalProducts > 0 ? "auto" : "none" }
              }}>
                <HeaderCart />
              </NavLink>
            </div>
        </div>
      );
}

export default Header;