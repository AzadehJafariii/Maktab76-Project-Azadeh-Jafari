import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPageSharedLayout from "../pages/mainLayout";
import Categories from "../pages/mainLayout/categories";
import BabySuppliesGuide from "../pages/mainLayout/babySuppliesGuide";
import Category from "../pages/mainLayout/category";
import Product from "../pages/mainLayout/product";
import Cart from "../pages/mainLayout/cart";
import FinalizeCart from "../pages/mainLayout/cart/finalizeCart";
import PaymentGateway from "../pages/mainLayout/cart/paymentGateway";
import PaymentResult from "../pages/mainLayout/cart/paymentResult";
import Login from "../pages/login";
import AdminPageSharedLayout from "../pages/adminLayout";
import Commodities from "../pages/adminLayout/commodities";
import StockAndPrice from "../pages/adminLayout/stockAndprice";
import Orders from "../pages/adminLayout/orders";
import Error404 from "../pages/errors/error404";

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPageSharedLayout />}>
          <Route index element={<Categories />} />
          <Route path="category/:categoryId" element={<Category />} />
          <Route path="babySuppliesGuide" element={<BabySuppliesGuide />} />
          <Route path="product/:productId" element={<Product />} />
          <Route path="cart" element={<Cart />} />
          <Route path="finalizeCart" element={<FinalizeCart />} />
          <Route
            path="finalizeCart/paymentResult"
            element={<PaymentResult />}
          />
        </Route>
        <Route path="paymentGateway" element={<PaymentGateway />} />

        <Route path="login" element={<Login />} />

        <Route path="admin" element={<AdminPageSharedLayout />}>
          <Route path="commodities" element={<Commodities />} />
          <Route path="stockAndPrice" element={<StockAndPrice />} />
          <Route path="orders" element={<Orders />} />
        </Route>
        <Route path="*" element={<Error404 />} />
      </Routes>
    </BrowserRouter>
  );
}
