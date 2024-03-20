import { Container } from "react-bootstrap";
import CartItem from "../CartItem/CartItem";

function CartProducts() {
    return (
        <div className="cartProducts">
            <Container>
                <CartItem />
            </Container>
        </div>
    )
}

export default CartProducts;