import { PayloadAction, combineReducers, createSlice } from "@reduxjs/toolkit";
import { Product } from "../Interfaces/Interface";


const initialState: { products: Product[]} = {
    products: []
}

const productSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, action: PayloadAction<{product: Product}>) => {

            let addedProduct = action.payload.product;
            let addedProductIndex = state.products.findIndex((item: Product) => item.id === addedProduct.id);

            if(addedProductIndex !== -1) {
                state.products[addedProductIndex].quantityInCart += 1;
            } else {
                let newProduct:Product = {
                    ...addedProduct,
                    quantityInCart: 1
                }
                state.products.push(newProduct);
            }

        },
        removeFromCart: (state, action: PayloadAction<{id: number}>) => {
            let filteredProducts: Product[] = state.products.filter((item: Product) => item.id !== action.payload.id);

            state.products = filteredProducts;
        }
    }
    
})

const cartReducer = productSlice.reducer;
const rootReducer = combineReducers({});

export const addToCart = productSlice.actions.addToCart;
export const removeFromCart = productSlice.actions.removeFromCart;
export type RootStateProducts = ReturnType<typeof rootReducer>;

export default cartReducer;