import { Outlet } from "react-router-dom";
import CartProducts from "../Components/Cart/CartProducts/CartProducts";

function Cart() {
    return(
        <div>
            <Outlet />
        </div>
    )
}

export default Cart;