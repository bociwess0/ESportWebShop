import { PayloadAction, combineReducers, createSlice } from "@reduxjs/toolkit";
import { Cart, Product } from "../Interfaces/Interface";


const initialState: { products: Product[], totalProductsInCart:number, totalPrice: number} = {
    products: [],
    totalProductsInCart: 0,
    totalPrice: 0
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        retrieveCart: (state, action:PayloadAction<{cart: Cart}>) => {
            state.products = action.payload.cart.products;
            state.totalProductsInCart = state.products.length;
            
            state.totalPrice = 0;
            state.products.forEach((item) => {
                state.totalPrice += item.price;
            })
            

        },
        addToCart: (state, action: PayloadAction<{product: Product}>) => {

            let addedProduct = action.payload.product;
            let addedProductIndex = state.products.findIndex((item: Product) => item.productId === addedProduct.productId);

            if(addedProductIndex !== -1) {
                state.products[addedProductIndex].quantity += 1;
                state.totalPrice+=addedProduct.price;
            } else {
                let newProduct:Product = {
                    ...addedProduct,
                    quantity: 1
                }
                state.products.push(newProduct);
                state.totalPrice+=newProduct.price;
            }
            state.totalProductsInCart++;

        },
        removeFromCart: (state, action: PayloadAction<{item: Product}>) => {
            let filteredProducts: Product[] = state.products.filter((item: Product) => item.productId !== action.payload.item.productId);

            state.products = filteredProducts;
            state.totalProductsInCart-= action.payload.item.quantity;
            state.totalPrice-= action.payload.item.price * action.payload.item.quantity;
        },
        changeProductQuantity: (state, action: PayloadAction<{value: number, action: string, product: Product}>) => {

            let foundedProductIndex = state.products.findIndex((item: Product) => item.productId === action.payload.product.productId);
            let foundedProduct = state.products[foundedProductIndex];

            switch(action.payload.action) {
                case "increase": {
                    foundedProduct.quantity++;
                    state.totalProductsInCart++;
                    state.totalPrice+=action.payload.product.price;
                } break;
                case "reduce": {
                    foundedProduct.quantity--;
                    state.totalProductsInCart--;
                    state.totalPrice-=action.payload.product.price;
                } break;
            }
        }
    }
    
})

const cartReducer = cartSlice.reducer;
const rootReducer = combineReducers({});

export const retrieveCart = cartSlice.actions.retrieveCart;
export const addToCart = cartSlice.actions.addToCart;
export const removeFromCart = cartSlice.actions.removeFromCart;
export const changeQuantity = cartSlice.actions.changeProductQuantity
export type RootStateProducts = ReturnType<typeof rootReducer>;

export default cartReducer;