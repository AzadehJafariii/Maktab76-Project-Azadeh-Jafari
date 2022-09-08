import { configureStore } from "@reduxjs/toolkit";
import productsSlice from "./admin/products/productsSlice";
import usersSlice from "./user/usersSlice";
import ordersSlice from "./admin/order/ordersSlice";
import categorySlice from "./admin/category/categorySlice";
import goodsSlice from "./main/goods/goodsSlice";
import eachCategorySlice from "./main/eachCategory/eachCategorySlice";
import productSlice from "./main/product/productSlice";
import cartSlice from "./main/cart/cartSlice";

export const store = configureStore({
  reducer: {
    products: productsSlice,
    users: usersSlice,
    orders: ordersSlice,
    category: categorySlice,
    goods: goodsSlice,
    eachCategory: eachCategorySlice,
    product: productSlice,
    cart: cartSlice,
  },
});
