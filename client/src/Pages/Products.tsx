import ProductList from "../Components/Layout/ProductList/ProductList";
import { Product } from "../Interfaces/Interface";

interface Props {
    products: Product[];
}

function Products({products}: Props) {
    return(
        <div className="productsWrapper">
            <ProductList products={products}  />
        </div>
    )
}

export default Products;