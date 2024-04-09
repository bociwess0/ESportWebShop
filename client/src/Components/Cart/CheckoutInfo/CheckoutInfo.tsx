import { Col, Container, Row } from "react-bootstrap";
import StepButtons from "../StepButtons/StepButtons";
import CheckoutItems from "./CheckoutItems/CheckoutItems";
import { useSelector } from "react-redux";
import { RootStateProducts } from "../../../Redux/cartSlice";
import CheckoutUserInfo from "./CheckoutUserInfo/CheckoutUserInfo";

function CheckoutInfo() {

    const produstInCart = useSelector((state: RootStateProducts) => state.cartActions.products);

    return(
        <Container>
            <Row>
                <Col xs={12} sm={6}>
                    <CheckoutItems products={produstInCart} />
                </Col>
                <Col xs={12} sm={6}>
                    <CheckoutUserInfo />
                </Col>
            </Row>
            <StepButtons />
        </Container>
    )
}

export default CheckoutInfo;