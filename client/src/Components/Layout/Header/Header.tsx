import classes from './Header.module.css';
import logoImage from '../../../Assets/shopping-cart.png';

function Header() {
    return (
        <div className={classes.header}>
            <div className="logo"></div>
            <div className={classes.imgWrapper}>
              <img src={logoImage} alt="" />
            </div>
        </div>
      );
}

export default Header;