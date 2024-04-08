import { Outlet, useLocation, useNavigate, useParams} from "react-router-dom";
import CheckoutNav from "../Components/Cart/CheckoutNav/CheckoutNav";
import { Container } from "react-bootstrap";
import { useEffect } from "react";
import StepButtons from "../Components/Cart/StepButtons/StepButtons";

function Cart() {

    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        if(location.pathname === "/cart") {
            navigate("/cart/productsInCart");
        }
    }, [location])
    

    return(
        <Container>
            <CheckoutNav />
            <Outlet />
        </Container>
    )
}

export default Cart;