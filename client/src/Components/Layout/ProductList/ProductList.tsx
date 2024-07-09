import { Col, Container, Row, Pagination } from "react-bootstrap";
import ProductItem from "../../ProductItem/ProductItem";
import { Product } from "../../../Interfaces/Interface";
import { useSelector } from "react-redux";
import { RootStateProducts } from "../../../Redux/productSlice";
import { useState } from "react";
import ToastMessage from "../ToastMessage/ToastMessage";
import classes from './ProductList.module.css';

function ProductList() {
  const products: Product[] = useSelector(
    (state: RootStateProducts) => state.productActions.products
  );

  const [showToast, setShowToast] = useState(false);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const productsPerPage: number = 8; // You can adjust the number of products per page

  const handleShowToast = () => {
    setShowToast(true);
  };

  const handleCloseToast = () => {
    setShowToast(false);
  };

  // Calculate the products to display on the current page
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);

  // Change page
  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  // Get total number of pages
  const totalPages = Math.ceil(products.length / productsPerPage);

  return (
    <Container>
      <Row className={classes.productsRow}>
        {currentProducts.map((item) => (
          <ProductItem product={item} showToastMessage={handleShowToast} key={item.id} />
        ))}
      </Row>
      <ToastMessage
        message="Product is successfully added to cart!"
        show={showToast}
        onClose={handleCloseToast}
      />
      <Row>
        <Col>
          <Pagination className={classes.pagination}>
            {[...Array(totalPages)].map((_, index) => (
              <Pagination.Item
                key={index + 1}
                active={index + 1 === currentPage}
                onClick={() => paginate(index + 1)}
                linkStyle={{backgroundColor: index + 1 === currentPage ? "#DA0047" : "#000000", color: "#ffffff", border: "1px solid #000000"}}
              >
                {index + 1}
              </Pagination.Item>
            ))}
          </Pagination>
        </Col>
      </Row>
    </Container>
  );
}

export default ProductList;
