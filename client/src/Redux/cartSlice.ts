import { PayloadAction, combineReducers, createSlice } from "@reduxjs/toolkit";
import { Cart, Product } from "../Interfaces/Interface";


const initialState: { products: Product[], totalProductsInCart:number, totalPrice: number, cartConfirm: boolean} = {
    products: [],
    totalProductsInCart: 0,
    totalPrice: 0,
    cartConfirm: false
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        retrieveCart: (state, action:PayloadAction<{cart: Cart}>) => {
            state.products = action.payload.cart.products;
            
            state.totalPrice = 0;
            state.totalProductsInCart = 0;
            state.products.forEach((item) => {
                state.totalPrice += item.price * item.quantity;
                state.totalProductsInCart += item.quantity
            })
            
        },
        addToCart: (state, action: PayloadAction<{product: Product, quantity: number}>) => {

            let addedProduct = action.payload.product;
            let addedProductIndex = state.products.findIndex((item: Product) => item.id === addedProduct.id);

            if(addedProductIndex !== -1) {
                state.products[addedProductIndex].quantity += action.payload.quantity;
                state.totalPrice+=addedProduct.price;
            } else {
                let newProduct:Product = {
                    ...addedProduct,
                    quantity:  action.payload.quantity
                }
                console.log(newProduct);
                
                state.products.push(newProduct);
                state.totalPrice+=newProduct.price;
            }
            state.totalProductsInCart+=action.payload.quantity;
        },
        removeFromCart: (state, action: PayloadAction<{item: Product}>) => {
            let filteredProducts: Product[] = state.products.filter((item: Product) => item.id !== action.payload.item.id);

            state.products = filteredProducts;
            state.totalProductsInCart-= action.payload.item.quantity;
            state.totalPrice-= action.payload.item.price * action.payload.item.quantity;
        },
        changeProductQuantity: (state, action: PayloadAction<{value: number, action: string, product: Product}>) => {

            let foundedProductIndex = state.products.findIndex((item: Product) => item.id === action.payload.product.id);
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
        },
        confirmOrder: (state) => {
            state.cartConfirm = !state.cartConfirm;
        }
    }
    
})

const cartReducer = cartSlice.reducer;
const rootReducer = combineReducers({});

export const retrieveCart = cartSlice.actions.retrieveCart;
export const addToCart = cartSlice.actions.addToCart;
export const removeFromCart = cartSlice.actions.removeFromCart;
export const changeQuantity = cartSlice.actions.changeProductQuantity
export const confirmOrder = cartSlice.actions.confirmOrder;
export type RootStateProducts = ReturnType<typeof rootReducer>;

export default cartReducer;