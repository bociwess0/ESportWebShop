import { useEffect, useState } from "react";
import ProductList from "../Components/Layout/ProductList/ProductList";
import { Cart, Product } from "../Interfaces/Interface";
import { useDispatch } from "react-redux";
import { fetchCart, fetchProducts } from "../DatabaseRequests/Requests";
import { importProductsFromDatabase } from "../Redux/productSlice";
import Header from "../Components/Layout/Header/Header";
import BannerImage from "../Components/BannerImage/BannerImage";
import { retrieveCart } from "../Redux/cartSlice";


function Products() {

    const [products, setProducts] = useState<Product[]>([]);
    const dispatch = useDispatch();
  
    useEffect(() => {
      async function getProducts() {
        const fetchedProducts = await fetchProducts();
        setProducts(fetchedProducts);
        dispatch(importProductsFromDatabase({ products: fetchedProducts }));
      }

      async function getProductsInCart() {
        let cart: Cart = await fetchCart();
        dispatch(retrieveCart({cart: cart}));
    }

      getProductsInCart();
      getProducts();

    }, [])

    return(
        <div>
            <BannerImage />
            <div className="productsWrapper">
                <ProductList  />
            </div>
        </div>
    )
}

export default Products;