import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPageSharedLayout from "../pages/main";
import Categories from "../pages/main/Categories";
<<<<<<< HEAD
import Category from "../pages/main/category";
import Product from "../pages/main/product";
import Cart from "../pages/main/cart";
import FinalizeCart from "../pages/main/cart/finalizeCart";
import PaymentGateway from "../pages/main/cart/paymentGateway";
import PaymentResult from "../pages/main/cart/paymentResult";
import Login from "../pages/login";
import AdminPageSharedLayout from "../pages/admin";
import Commodities from "../pages/admin/commodities";
import StockAndPrice from "../pages/admin/stock&price";
import Orders from "../pages/admin/orders";
=======
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
import StockAndPrice from "../pages/adminLayout/stock&price";
import Orders from "../pages/adminLayout/orders";
>>>>>>> development
import Error404 from "../pages/errors/error404";

function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPageSharedLayout />}>
          <Route index element={<Categories />} />
          <Route path="category/:categoryId" element={<Category />} />
<<<<<<< HEAD
=======
          <Route path="babySuppliesGuide" element={<BabySuppliesGuide />} />
>>>>>>> development
          <Route path="product/:productId" element={<Product />} />
          <Route path="cart" element={<Cart />} />
          <Route path="finalizeCart" element={<FinalizeCart />} />
          <Route
            path="finalizeCart/paymentResult"
            element={<PaymentResult />}
          />
        </Route>

        <Route path="PaymentGateway" element={<PaymentGateway />} />

        <Route path="login" element={<Login />} />

        <Route path="admin" element={<AdminPageSharedLayout />}>
          <Route index element={<Commodities />} />
          <Route path="stockAndPrice" element={<StockAndPrice />} />
          <Route path="orders" element={<Orders />} />
        </Route>
        <Route path="*" element={<Error404 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRouter;
