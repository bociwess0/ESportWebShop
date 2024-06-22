import { Col, Container, Row } from "react-bootstrap";
import ProductItem from "../../ProductItem/ProductItem";
import { Product } from "../../../Interfaces/Interface";
import { useSelector } from "react-redux";
import { RootStateProducts } from "../../../Redux/productSlice";
import { useEffect, useState } from "react";
import ToastMessage from "../ToastMessage/ToastMessage";


function ProductList() {

    const products: Product[] = useSelector( (state: RootStateProducts) => state.productActions.products);

    const [showToast, setShowToast] = useState(false);

    const handleShowToast = () => {        
      setShowToast(true);
    };
  
    const handleCloseToast = () => {
      setShowToast(false);
    };

    return(
        <Container>
            <Row>
                {products.map((item) => <ProductItem product={item} showToastMessage={handleShowToast} key={item.id} />)}
            </Row>
            <ToastMessage message="Product is successfully added to cart!" show={showToast} onClose={handleCloseToast} />
        </Container>
    )
}

export default ProductList;