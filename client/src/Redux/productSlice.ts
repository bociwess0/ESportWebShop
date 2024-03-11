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
            state.products = action.payload.products;
        }
    }
})

const productReducer = productSlice.reducer;
const rootReducer = combineReducers({})

export const importProductsFromDatabase = productSlice.actions.importProductsFromDatabase;
export type RootStateProducts = ReturnType<typeof rootReducer>;

export default productReducer;