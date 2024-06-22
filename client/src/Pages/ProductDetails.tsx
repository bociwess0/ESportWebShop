import { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { fetchCart, fetchProductById } from "../DatabaseRequests/Requests";
import { Cart, Product } from "../Interfaces/Interface";
import ProductImage from "../Components/Product/ProductImage/ProductImage";
import ProductInfo from "../Components/Product/ProductInfo/ProductInfo";
import { useDispatch } from "react-redux";
import { retrieveCart } from "../Redux/cartSlice";

function ProductDetails() {

    const dispatch = useDispatch();
    const params = useParams();
    const productId = Number(params.id);
    
    const [product, setProduct] = useState<Product>();

    useEffect(() => {
        
        async function GetPorductById(id:number) {
            let productObj = await fetchProductById(id);
            setProduct(productObj);
        }

        async function GetProductsInCart() {
            let cart: Cart = await fetchCart();
            dispatch(retrieveCart({cart: cart}));
        }

        GetProductsInCart();
        GetPorductById(productId);

    }, [])    
    
    
    return(
        <Container>
            <Row>
                <Col xs={12} sm={6}>
                    {product && <ProductImage product = {product} />}
                </Col>
                <Col xs={12} sm={6}>
                    {product && <ProductInfo product={product} />}
                </Col>
            </Row>
        </Container>
    )
}

export default ProductDetails;