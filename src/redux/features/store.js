import { configureStore } from "@reduxjs/toolkit";
import productSlice from "./product/productSlice";
import orderSlice from "./order/orderSlice";

export const store = configureStore({
  reducer: {
    products: productSlice,
    orders: orderSlice,
  },
});
