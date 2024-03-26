import { Container } from "react-bootstrap";
import CartItem from "../CartItem/CartItem";
import { useSelector } from "react-redux";
import { Product } from "../../../Interfaces/Interface";
import { RootStateProducts } from "../../../Redux/productSlice";

function CartProducts() {

    const products: Product[] = useSelector((state: RootStateProducts) => state.cartActions.products);

    return (
        <div className="cartProducts">
            <Container>
                {products.map((item: Product) => <CartItem product={item} key={item.id}/>)}
            </Container>
        </div>
    )
}

export default CartProducts;