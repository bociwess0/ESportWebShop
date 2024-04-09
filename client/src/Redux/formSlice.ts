import { PayloadAction, combineReducers, createSlice } from "@reduxjs/toolkit";

const initialState : { formData: object} = {
    formData: {}
}

const formSlice = createSlice({
    name: "form",
    initialState,
    reducers: {
        setForm : (state, action : PayloadAction<{formData: object}>) => {
            state.formData = action.payload.formData;
        }
    }
})

const formReducer = formSlice.reducer;
const rootReducer = combineReducers({});

export const setForm = formSlice.actions.setForm;

export type RootTypeForm = ReturnType<typeof rootReducer>;
export default formReducer;