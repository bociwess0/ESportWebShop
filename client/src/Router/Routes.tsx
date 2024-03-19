import { createBrowserRouter } from "react-router-dom";
import Cart from "../Pages/Cart";
import App from "../App";
import Products from "../Pages/Products";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {path: 'products', element: <Products />},
            {path: 'cart', element: <Cart />}
        ]
    }
])