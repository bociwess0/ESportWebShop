import classes from './Header.module.css';
import cartImage from '../../../Assets/shopping-cart.png';
import logoImage from '../../../Assets/sneakers.png';

function Header() {
    return (
        <div className={classes.header}>
            <div className={classes.logoWrapper}>
              <img src={logoImage} alt="" />
            </div>
            <div className={classes.imgWrapper}>
              <a href="#">
                <img src={cartImage} alt="" />
              </a>
            </div>
        </div>
      );
}

export default Header;