import { Outlet, useLocation, useNavigate, useParams} from "react-router-dom";
import CheckoutNav from "../Components/Cart/CheckoutNav/CheckoutNav";
import { Container } from "react-bootstrap";
import { useEffect } from "react";
import StepButtons from "../Components/Cart/StepButtons/StepButtons";
import { useDispatch, useSelector } from "react-redux";
import { RootStateProducts } from "../Redux/cartSlice";
import { RootStateProfile } from "../Redux/profileSlice";
import { setForm } from "../Redux/formSlice";

function Cart() {

    const navigate = useNavigate();
    const location = useLocation();

    const dispatch = useDispatch();

    const cartConfirmActive = useSelector((state: RootStateProducts) => state.cartActions.cartConfirm);
    const userLoggedIn = useSelector((state: RootStateProfile) => state.profileActions.isLoggedIn);
    const loggedUser = useSelector((state: RootStateProfile) => state.profileActions.loggedUser);
    const totalProducts : number = useSelector((state: RootStateProducts) => state.cartActions.totalProductsInCart);


    useEffect(() => {
        if(location.pathname === "/cart") {
            navigate("/cart/productsInCart");
        }

        if(userLoggedIn) {
            dispatch(setForm({formData: loggedUser}))
        }

    }, [location, userLoggedIn])
    

    return(
        <Container>
            {!cartConfirmActive && totalProducts > 0 && <CheckoutNav />}
            {cartConfirmActive && totalProducts > 0 && <h3 style={{color: "#fff", textAlign: "center", marginBottom: "50px", marginTop: "50px"}}>Your order</h3>}
            <Outlet />
        </Container>
    )
}

export default Cart;