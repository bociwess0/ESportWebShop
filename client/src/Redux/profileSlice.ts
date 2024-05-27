import { PayloadAction, combineReducers, createSlice } from "@reduxjs/toolkit";
import { User } from "../Interfaces/Interface";



const initialState: { loggedUser: User, isLoggedIn: boolean} = {
    loggedUser: {
        email: '',
        password: '',
        firstName: '',
        lastName: '',
        address: '',
        city: '',
        phone: '',
    },
    isLoggedIn: false
}

const profileSlice = createSlice({
    name: 'profile',
    initialState,
    reducers: {
        setLoggedInUser: (state, action:PayloadAction<{user: User}>) => {
            state.loggedUser = action.payload.user;
            state.isLoggedIn = true;
        }
    }
})

const profileReducer = profileSlice.reducer;
const rootReducer = combineReducers({});

export const setCurrentUser = profileSlice.actions.setLoggedInUser;


export type RootStateProfile = ReturnType<typeof rootReducer>;

export default profileReducer;