import { createBrowserRouter } from "react-router-dom";
import Cart from "../Pages/Cart";
import App from "../App";
import Products from "../Pages/Products";
import CartProducts from "../Components/Cart/CartProducts/CartProducts";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            { path: 'products', element: <Products /> },
            { path: 'cart', element: <CartProducts />, children: [
                {
                    path: 'address', 
                    element: <CartProducts />
                }
            ]}
        ]
    }
])