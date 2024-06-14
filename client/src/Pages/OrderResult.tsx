import { Col, Container, Row } from 'react-bootstrap';
import CheckoutItems from '../Components/Cart/CheckoutInfo/CheckoutItems/CheckoutItems';
import CheckoutUserInfo from '../Components/Cart/CheckoutInfo/CheckoutUserInfo/CheckoutUserInfo';
import { useDispatch, useSelector } from 'react-redux';
import { RootStateProducts } from '../Redux/productSlice';
import { Cart, Product } from '../Interfaces/Interface';
import { useEffect } from 'react';
import { fetchCart } from '../DatabaseRequests/Requests';
import { retrieveCart } from '../Redux/cartSlice';

function OrderResult() {

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

    return(
        <Container>
            <Row>
                <Col xs={12} sm={6}>
                    <CheckoutItems products={products} />
                </Col>
                <Col xs={12} sm={6}>
                    <CheckoutUserInfo />
                </Col>
            </Row>
        </Container>
    )
}

export default OrderResult;