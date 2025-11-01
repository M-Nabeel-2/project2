import { createSlice } from "@reduxjs/toolkit";
import ProductsD from "../../utils/DummyData";

const initialState = {
  Products: ProductsD,
};
export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {},
});

export const {} = cartSlice.actions;
export default cartSlice.reducer;
