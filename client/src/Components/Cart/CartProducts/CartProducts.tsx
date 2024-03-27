import { Container } from "react-bootstrap";
import CartItem from "../CartItem/CartItem";
import { useSelector } from "react-redux";
import { Product } from "../../../Interfaces/Interface";
import { RootStateProducts } from "../../../Redux/productSlice";
import CartTotal from "../CartTotal/CartTotal";

function CartProducts() {

    const products: Product[] = useSelector((state: RootStateProducts) => state.cartActions.products);
    const totalProducts : number = useSelector((state: RootStateProducts) => state.cartActions.totalProductsInCart);

    return (
        <div className="cartProducts">
            <Container>
                {products.map((item: Product) => <CartItem product={item} key={item.id}/>)}
                {totalProducts > 0 && <CartTotal />}
                {totalProducts === 0 && <h3 style={{color: "#ffffff"}} >Cart is empty!</h3>}
            </Container>
        </div>
    )
}

export default CartProducts;