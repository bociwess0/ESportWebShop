import { PayloadAction, combineReducers, createSlice } from "@reduxjs/toolkit";
import { Product } from "../Interfaces/Interface";


const initialState: { products: Product[]} = {
    products: []
}

const productSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart:(state, action: PayloadAction<{product: Product}>) => {
            state.products.push(action.payload.product);
        }
    }
    
})

const cartReducer = productSlice.reducer;
const rootReducer = combineReducers({});

export const addToCart = productSlice.actions.addToCart;
export type RootStateProducts = ReturnType<typeof rootReducer>;

export default cartReducer;