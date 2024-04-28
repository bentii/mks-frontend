import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CartStateInterface } from "../../types/interfaces";

type CartState = CartStateInterface;

const initialState: CartState[] = [];

export const cart = createSlice({
  name: "cart",
  initialState,
  reducers: {
    updateCart: (state, action: PayloadAction<CartState[]>) => {
      return action.payload;
    },
  },
});

export const { updateCart } = cart.actions;
export default cart.reducer;
