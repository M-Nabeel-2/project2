import { createSlice } from "@reduxjs/toolkit";
import ProductsD from "../../utils/DummyData";

const initialState = {
  Products: ProductsD,
  cartList: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addtocart: (state, action) => {
      const item = action.payload;

      const existingitems = state.cartList.find((prod) => prod.id === item.id);
      existingitems
        ? (existingitems.quantity += 1)
        : state.cartList.push({ ...item, quantity: 1 });

     
    },
  },
});

export const { addtocart } = cartSlice.actions;
export default cartSlice.reducer;
