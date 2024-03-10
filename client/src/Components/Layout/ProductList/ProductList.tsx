import { Col, Container, Row } from "react-bootstrap";
import ProductItem from "../../ProductItem/ProductItem";
import { Product } from "../../../Interfaces/Interface";

interface Props {
    products: Product[];
}

function ProductList({products}: Props) {
    return(
        <Container>
            <Row>
                {products.map((item) => <ProductItem product={item} />)}
            </Row>
        </Container>
    )
}

export default ProductList;