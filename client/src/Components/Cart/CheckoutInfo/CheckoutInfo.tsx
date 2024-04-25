import { Col, Container, Row } from "react-bootstrap";
import StepButtons from "../StepButtons/StepButtons";
import CheckoutItems from "./CheckoutItems/CheckoutItems";
import { useDispatch, useSelector } from "react-redux";
import { RootStateProducts, retrieveCart } from "../../../Redux/cartSlice";
import CheckoutUserInfo from "./CheckoutUserInfo/CheckoutUserInfo";
import { Cart, Product } from "../../../Interfaces/Interface";
import { useEffect } from "react";
import { fetchCart } from "../../../DatabaseRequests/Requests";

function CheckoutInfo() {

    const produstInCart: Product[] = useSelector((state: RootStateProducts) => state.cartActions.products);

    const dispatch = useDispatch();
    const totalProducts : number = useSelector((state: RootStateProducts) => state.cartActions.totalProductsInCart);

    useEffect(() => {
        async function getProductsInCart() {
            let cart: Cart = await fetchCart();
            
            dispatch(retrieveCart({cart: cart}));
        }

        getProductsInCart();
    }, [])    

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