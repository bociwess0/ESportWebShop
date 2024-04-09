import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./productSlice";
import cartReducer from "./cartSlice";
import formReducer from "./formSlice";

export const store = configureStore({
    reducer: {
        productActions: productReducer,
        cartActions: cartReducer,
        formActions: formReducer
    }
})

