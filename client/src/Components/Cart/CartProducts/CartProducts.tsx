import { Container } from "react-bootstrap";
import CartItem from "../CartItem/CartItem";
import { useDispatch, useSelector } from "react-redux";
import { Cart, Product } from "../../../Interfaces/Interface";
import { RootStateProducts } from "../../../Redux/productSlice";
import CartTotal from "../CartTotal/CartTotal";
import classes from './CartProducts.module.css';
import { useEffect } from "react";
import { fetchCart } from "../../../DatabaseRequests/Requests";
import { retrieveCart } from "../../../Redux/cartSlice";

function CartProducts() {

    const dispatch = useDispatch();
    const products: Product[] = useSelector((state: RootStateProducts) => state.cartActions.products);
    const totalProducts : number = useSelector((state: RootStateProducts) => state.cartActions.totalProductsInCart);

    useEffect(() => {
        async function getProductsInCart() {
            let cart: Cart = await fetchCart();
            
            dispatch(retrieveCart({cart: cart}));
        }

        getProductsInCart();
    }, [])    

    return (
        <div className="cartProducts">
            <div className={classes.cartItemsWrapper}>
                    {products.map((item: Product) => <CartItem product={item} key={item.id}/>)}
                </div>
                {totalProducts > 0 && <CartTotal />}
                {totalProducts === 0 && <h3 style={{color: "#ffffff"}} >Cart is empty!</h3>}

        </div>
    )
}

export default CartProducts;