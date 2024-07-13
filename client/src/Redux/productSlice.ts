import { PayloadAction, combineReducers, createSlice } from "@reduxjs/toolkit";
import { Product } from "../Interfaces/Interface";


const initialState: { products: Product[]} = {
    products: []
}

const productSlice = createSlice ({
    name: 'products',
    initialState,
    reducers: {
        importProductsFromDatabase: (state, action: PayloadAction<{products : Product[]}>) => {

            let formatedProducts:Product[] = [];

            action.payload.products.forEach((item: Product) => {
                formatedProducts.push({
                    ...item,
                    quantity: 0
                })
            })

            state.products = formatedProducts;
        },
        reduceProductQuantityInStock: (state, action: PayloadAction<{productid: number, quantity: number}>) => {
            let foundProductIndex = state.products.findIndex((item: Product) => item.id === action.payload.productid);

            if(foundProductIndex !== -1) {
                state.products[foundProductIndex].quantityInStock -= action.payload.quantity; 
            }

        },
        increaseProductQuantityInStock: (state, action: PayloadAction<{productid: number, quantity: number}>) => {
            let foundProductIndex = state.products.findIndex((item: Product) => item.id === action.payload.productid);

            if(foundProductIndex !== -1) {
                state.products[foundProductIndex].quantityInStock += action.payload.quantity; 
            }

        }
    }
})

const productReducer = productSlice.reducer;
const rootReducer = combineReducers({})

export const importProductsFromDatabase = productSlice.actions.importProductsFromDatabase;
export const reduceProductQuantityInStock = productSlice.actions.reduceProductQuantityInStock;
export const increaseProductQuantityInStock = productSlice.actions.reduceProductQuantityInStock;
export type RootStateProducts = ReturnType<typeof rootReducer>;

export default productReducer;