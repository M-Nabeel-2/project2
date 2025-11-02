import { configureStore, createReducer } from "@reduxjs/toolkit";
import CartReducer from "../store/slices/cartStoreSlice";
import authReducer from "../store/slices/Authslice";
export const store = configureStore({
  reducer: {
    cart: CartReducer,
    auth: authReducer,
  },
});
