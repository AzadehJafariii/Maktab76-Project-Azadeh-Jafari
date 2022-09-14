import { configureStore } from "@reduxjs/toolkit";
import usersSlice from "./user/usersSlice";
import productsSlice from "./admin/products/productsSlice";
import ordersSlice from "./admin/order/ordersSlice";
import categorySlice from "./admin/category/categorySlice";
import goodsSlice from "./main/goods/goodsSlice";
import cartSlice from "./main/cart/cartSlice";
import addOrdersSlice from "./main/addOrders/addOrderSlice";

export const store = configureStore({
  reducer: {
    users: usersSlice,
    products: productsSlice,
    orders: ordersSlice,
    category: categorySlice,
    goods: goodsSlice,
    cart: cartSlice,
    addOrders: addOrdersSlice,
  },
});
