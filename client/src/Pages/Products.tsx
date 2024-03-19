import { useEffect, useState } from "react";
import ProductList from "../Components/Layout/ProductList/ProductList";
import { Product } from "../Interfaces/Interface";
import { useDispatch } from "react-redux";
import { fetchProducts } from "../DatabaseRequests/Requests";
import { importProductsFromDatabase } from "../Redux/productSlice";
import Header from "../Components/Layout/Header/Header";
import BannerImage from "../Components/BannerImage/BannerImage";


function Products() {

    const [products, setProducts] = useState<Product[]>([]);
    const dispatch = useDispatch();
  
    useEffect(() => {
      async function getProducts() {
        const fetchedProducts = await fetchProducts();
        setProducts(fetchedProducts);
        dispatch(importProductsFromDatabase({ products: fetchedProducts }));
      }
  
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