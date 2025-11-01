import { configureStore, createReducer } from "@reduxjs/toolkit";
import CartReducer from "../store/cartStoreSlice";

export const store = configureStore({
  reducer: {
    cart: CartReducer,
  },
});
