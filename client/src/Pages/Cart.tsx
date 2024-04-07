import { Outlet } from "react-router-dom";
import CheckoutNav from "../Components/Cart/CheckoutNav/CheckoutNav";
import { Container } from "react-bootstrap";

function Cart() {
    return(
        <Container>
            <CheckoutNav />
            <Outlet />
        </Container>
    )
}

export default Cart;