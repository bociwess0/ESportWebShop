import { Outlet, useLocation, useNavigate, useParams} from "react-router-dom";
import CheckoutNav from "../Components/Cart/CheckoutNav/CheckoutNav";
import { Container } from "react-bootstrap";
import { useEffect } from "react";
import StepButtons from "../Components/Cart/StepButtons/StepButtons";
import { useSelector } from "react-redux";
import { RootStateProducts } from "../Redux/cartSlice";

function Cart() {

    const navigate = useNavigate();
    const location = useLocation();

    const cartConfirmActive = useSelector((state: RootStateProducts) => state.cartActions.cartConfirm);

    useEffect(() => {
        if(location.pathname === "/cart") {
            navigate("/cart/productsInCart");
        }
    }, [location])
    

    return(
        <Container>
            {!cartConfirmActive && <CheckoutNav />}
            {cartConfirmActive && <h3 style={{color: "#fff", textAlign: "center", marginBottom: "50px"}}>Your order</h3>}
            <Outlet />
        </Container>
    )
}

export default Cart;