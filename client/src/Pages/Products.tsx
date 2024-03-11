import ProductList from "../Components/Layout/ProductList/ProductList";
import { Product } from "../Interfaces/Interface";


function Products() {
    return(
        <div className="productsWrapper">
            <ProductList  />
        </div>
    )
}

export default Products;