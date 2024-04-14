import { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { fetchProductById } from "../DatabaseRequests/Requests";
import { Product } from "../Interfaces/Interface";
import ProductImage from "../Components/Product/ProductImage/ProductImage";
import ProductInfo from "../Components/Product/ProductInfo/ProductInfo";

function ProductDetails() {

    const params = useParams();
    const productId = Number(params.id);
    
    const [product, setProduct] = useState<Product>();

    useEffect(() => {
        async function GetPorductById(id:number) {
            let productObj = await fetchProductById(id);
            setProduct(productObj);
        }

        GetPorductById(productId);

    }, [])    

    console.log(product);
    
    
    return(
        <Container>
            <Row>
                <Col xs={12} sm={6}>
                    {product && <ProductImage />}
                </Col>
                <Col xs={12} sm={6}>
                    {product && <ProductInfo product={product} />}
                </Col>
            </Row>
        </Container>
    )
}

export default ProductDetails;