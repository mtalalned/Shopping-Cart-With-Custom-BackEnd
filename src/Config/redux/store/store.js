import { configureStore } from "@reduxjs/toolkit";
import cartReducer from '../reducers/CartSlice'

export const store = configureStore ({
    reducer: {
        cart: cartReducer
    }
})