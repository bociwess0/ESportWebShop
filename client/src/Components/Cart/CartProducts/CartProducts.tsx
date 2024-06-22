import { Container } from "react-bootstrap";
import CartItem from "../CartItem/CartItem";
import { useDispatch, useSelector } from "react-redux";
import { Cart, Product } from "../../../Interfaces/Interface";
import { RootStateProducts } from "../../../Redux/productSlice";
import CartTotal from "../CartTotal/CartTotal";
import classes from './CartProducts.module.css';
import { useEffect, useState } from "react";
import { fetchCart, removeFromCartDB } from "../../../DatabaseRequests/Requests";
import { confirmOrder, removeFromCart, retrieveCart } from "../../../Redux/cartSlice";
import StepButtons from "../StepButtons/StepButtons";
import PopupModal from "../../Layout/PopupModal/PopupModal";
import ToastMessage from "../../Layout/ToastMessage/ToastMessage";

function CartProducts() {

    const dispatch = useDispatch();
    const products: Product[] = useSelector((state: RootStateProducts) => state.cartActions.products);
    const totalProducts : number = useSelector((state: RootStateProducts) => state.cartActions.totalProductsInCart);

    const [showModal, setShowModal] = useState<boolean>(false);
    const [productForRemove, setProductForRemove] = useState<Product>()

    const [showToast, setShowToast] = useState(false);

    const handleShowToast = () => {        
      setShowToast(true);
    };
  
    const handleCloseToast = () => {
      setShowToast(false);
    };

    const removeProduct = () => {
        if(productForRemove) {
            removeFromCartDB(productForRemove?.id, productForRemove?.quantity);
            dispatch(removeFromCart({item: productForRemove}));
            setShowModal(false);
            handleShowToast();
        }
    }

    const getProductFormRemove = (product: Product) => {
        setProductForRemove(product);
    }

    useEffect(() => {
        async function getProductsInCart() {
            let cart: Cart = await fetchCart();

            console.log(cart);
            
            
            dispatch(retrieveCart({cart: cart}));
        }

        getProductsInCart();
        dispatch(confirmOrder())
    }, []) 


    
    return (
        <div className="cartProducts">
            <div className={classes.cartItemsWrapper}>
                    {products.map((item: Product) => <CartItem product={item} removeProduct={getProductFormRemove} showModal={() => setShowModal(true)} key={item.id}/>)}
                </div>
                {totalProducts > 0 && <CartTotal />}
                {totalProducts === 0 && <h3 style={{color: "#ffffff", marginTop: "50px"}} >Cart is empty!</h3>}
                <StepButtons />
                <PopupModal action={removeProduct} action2={() => setShowModal(false)} showModal={showModal} buttonText={""} message={"Are you sure you want to remove this product from cart?"} />
                <ToastMessage message="Product is successfully removed from cart!" show={showToast} onClose={handleCloseToast} />
        </div>
    )
}

export default CartProducts;