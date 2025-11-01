import { configureStore, createReducer } from "@reduxjs/toolkit";
import CartReducer from "../store/slices/cartStoreSlice";

export const store = configureStore({
  reducer: {
    cart: CartReducer,
  },
});
