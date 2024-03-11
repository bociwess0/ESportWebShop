import { Col, Container, Row } from "react-bootstrap";
import ProductItem from "../../ProductItem/ProductItem";
import { Product } from "../../../Interfaces/Interface";
import { useSelector } from "react-redux";
import { RootStateProducts } from "../../../Redux/productSlice";


function ProductList() {

    const products: Product[] = useSelector( (state: RootStateProducts) => state.productActions.products);

    return(
        <Container>
            <Row>
                {products.map((item) => <ProductItem product={item} />)}
            </Row>
        </Container>
    )
}

export default ProductList;