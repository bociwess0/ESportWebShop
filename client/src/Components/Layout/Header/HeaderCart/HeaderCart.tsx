import classes from './HeaderCart.module.css';
import cartImage from '../../../../Assets/shopping-cart.png';


function HeaderCart() {
    return(
        <div className={classes.headerCart}>
            <div className={classes.imgWrapper}>
                <a href="#">
                  <img src={cartImage} alt="" />
                </a>
            </div>
            <div className={classes.cartContent}>
                <div className={classes.productsInCart}>2 products</div>
                <div className={classes.totalPrice}>20000€</div>
            </div>
        </div>
    )
}

export default HeaderCart;