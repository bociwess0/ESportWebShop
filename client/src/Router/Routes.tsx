import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Products from "../Pages/Products";
import Cart from "../Pages/Cart";
import CartProducts from "../Components/Cart/CartProducts/CartProducts";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            { path: 'products', element: <Products /> },
            { 
                path: 'cart',
                element: <Cart /> , 
                children: [
                    {path: "productsInCart", element: <CartProducts /> }
                ]
            },
        
        ]
    }
])