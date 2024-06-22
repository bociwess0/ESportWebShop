import { Col, Container, Row } from "react-bootstrap";
import UserInfo from "../Components/Profile/UserInfo/UserInfo";
import OrderHistory from "../Components/Profile/UserOrder/OrderHistory/OrderHistory";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Cart, Product } from "../Interfaces/Interface";
import { importProductsFromDatabase } from "../Redux/productSlice";
import { fetchCart, fetchProducts } from "../DatabaseRequests/Requests";
import { retrieveCart } from "../Redux/cartSlice";

function Profile() {

    const [products, setProducts] = useState<Product[]>([]);
    const dispatch = useDispatch();

    useEffect(() => {
        async function getProducts() {
            const fetchedProducts = await fetchProducts();
            setProducts(fetchedProducts);
            dispatch(importProductsFromDatabase({ products: fetchedProducts }));
        }

        async function getProductsInCart() {
            let cart: Cart = await fetchCart();
            dispatch(retrieveCart({cart: cart}));
        }

        getProductsInCart();
        getProducts();
    }, [])

    return(
        <Container >
            <Row>
                <Col xs={12} sm={3}>
                    <UserInfo />
                </Col>
                <Col xs={12} sm={9}>
                    <OrderHistory />
                </Col>
            </Row>
        </Container>
    )
}

export default Profile;