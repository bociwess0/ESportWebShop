import classes from './HeaderCart.module.css';
import cartImage from '../../../../Assets/shopping-cart.png';
import { useSelector } from 'react-redux';
import { RootStateProducts } from '../../../../Redux/productSlice';


function HeaderCart() {

    const totalProducts = useSelector((state: RootStateProducts) => state.cartActions.totalProductsInCart);
    const totalPrice = useSelector((state: RootStateProducts) => state.cartActions.totalPrice);

    return(
        <div className={classes.headerCart}>
            <div className={classes.imgWrapper}>
                <img src={cartImage} alt="" />
            </div>
            {totalProducts > 0  &&  <div className={classes.cartContent}>
                                        <div className={classes.productsInCart}>{`${totalProducts} products`}</div>
                                        <div className={classes.totalPrice}>{`${totalPrice}€`}</div>
                                    </div>}
        </div>
    )
}

export default HeaderCart;