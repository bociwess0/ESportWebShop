import { PayloadAction, combineReducers, createSlice } from "@reduxjs/toolkit";
import { Order } from "../Interfaces/Interface";

const initialState: {orders: Order []} =  {
    orders: []
}

const orderSlice = createSlice({
    name: 'orders',
    initialState,
    reducers: {
        setOrders: (state, action: PayloadAction<{orders: Order []}>) => {
            console.log(action.payload.orders);
            
            state.orders = action.payload.orders;
        }
    }
})

const orderReducer = orderSlice.reducer;
const rootReducer = combineReducers({});

export const setOrders = orderSlice.actions.setOrders;
export type RootStateOrders = ReturnType<typeof rootReducer>;

export default orderReducer;