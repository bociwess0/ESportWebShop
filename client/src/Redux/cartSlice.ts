import { PayloadAction, combineReducers, createSlice } from "@reduxjs/toolkit";
import { Product } from "../Interfaces/Interface";


const initialState: { products: Product[], totalProductsInCart:number, totalPrice: number} = {
    products: [],
    totalProductsInCart: 0,
    totalPrice: 0
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
                state.totalPrice+=addedProduct.price;
            } else {
                let newProduct:Product = {
                    ...addedProduct,
                    quantityInCart: 1
                }
                state.products.push(newProduct);
                state.totalPrice+=newProduct.price;
            }
            state.totalProductsInCart++;

        },
        removeFromCart: (state, action: PayloadAction<{item: Product}>) => {
            let filteredProducts: Product[] = state.products.filter((item: Product) => item.id !== action.payload.item.id);

            state.products = filteredProducts;
            state.totalProductsInCart-= action.payload.item.quantityInCart;
            state.totalPrice-= action.payload.item.price * action.payload.item.quantityInCart;
        },
        changeProductQuantity: (state, action: PayloadAction<{value: number, action: string, product: Product}>) => {

            let foundedProductIndex = state.products.findIndex((item: Product) => item.id === action.payload.product.id);
            let foundedProduct = state.products[foundedProductIndex];

            switch(action.payload.action) {
                case "increase": {
                    foundedProduct.quantityInCart++;
                    state.totalProductsInCart++;
                    state.totalPrice+=action.payload.product.price;
                } break;
                case "reduce": {
                    foundedProduct.quantityInCart--;
                    state.totalProductsInCart--;
                    state.totalPrice-=action.payload.product.price;
                } break;
            }
        }
    }
    
})

const cartReducer = productSlice.reducer;
const rootReducer = combineReducers({});

export const addToCart = productSlice.actions.addToCart;
export const removeFromCart = productSlice.actions.removeFromCart;
export const changeQuantity = productSlice.actions.changeProductQuantity
export type RootStateProducts = ReturnType<typeof rootReducer>;

export default cartReducer;