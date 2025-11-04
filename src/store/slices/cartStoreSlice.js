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
    romvefromCart: (state, actions) => {
      const item = action.payload;

      const existingitems = state.cartList.find((prod) => prod.id === item.id);

      if (existingitems) {
         existingitems.quantity > 1 ?( existingitems.quantity -= 1)
         : (state.cartList = state.cartList.filter((prod)=>prod.id !== item.id))
      }
    },
  },
});

export const { addtocart, romvefromCart } = cartSlice.actions;
export default cartSlice.reducer;
