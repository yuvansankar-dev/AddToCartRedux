import { createSlice } from "@reduxjs/toolkit";
import { productInfo } from "../Dataset";

const initialState = {
  totalQuantity: productInfo.products.length,
  totalCost: productInfo.products.reduce((acc, val) => acc + val.price, 0),
};

const productSlice = createSlice({
  name: "products",
  initialState: initialState,
  reducers: {
    addToCart: (state, action) => {
      state[action.payload.id] = {
        quantity: 1,
        totalCost: action.payload.price,
      };
      return state;
    },
    addProduct(state, action) {
      state[action.payload.id].quantity += 1;
      state[action.payload.id].totalCost += action.payload.price;
      state.totalQuantity += 1;
      state.totalCost += action.payload.price;
    },
    reduceProduct(state, action) {
      state[action.payload.id].quantity -= 1;
      state[action.payload.id].totalCost -= action.payload.price;
      state.totalQuantity -= 1;
      state.totalCost -= action.payload.price;
    },
    removeProduct(state, action) {
      state.totalQuantity -= state[action.payload.id].quantity;
      state.totalCost -= state[action.payload.id].totalCost;
    },
  },
});
export default productSlice.reducer;
export const { addToCart, addProduct, reduceProduct, removeProduct } =
  productSlice.actions;
