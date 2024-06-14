import { Product } from "../../../../Interfaces/Interface";
import CheckoutItem from "./CheckoutItem/CheckoutItem";
import classes from './CheckoutItems.module.css';

interface Props {
    products: Product [];
}

function CheckoutItems({products} : Props) {
    return(
        <div className={classes.checkoutItemsWrapper}>
            {products.map((item) => <CheckoutItem key={item.id} product={item} />)}
        </div>
    )
}

export default CheckoutItems;