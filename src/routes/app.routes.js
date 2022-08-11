import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "../Components/Header";
import MainPageSharedLayout from "../Pages/MainPageSharedLayout";
import Home from "../Pages/Home";
import Categories from "../Pages/Categories";
import Card from "../Pages/Card";
import Cart from "../Pages/Cart";
import FinalizeCart from "../Pages/FinalizeCart";
import SuccessfulPayment from "../Pages/SuccessfulPayment";
import UnSuccessfulPayment from "../Pages/SuccessfulPayment";
import PaymentGateway from "../Pages/PaymentGateway";
import Login from "../Pages/Login";
import AdminPageSharedLayout from "../Pages/AdminPageSharedLayout";
import Commodities from "../Pages/Commodities";
import Stocks from "../Pages/Stocks";
import Orders from "../Pages/Orders";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<MainPageSharedLayout />}>
          <Route index element={<Home />} />
          <Route path="categories/:categoriesId" element={<Categories />} />
          <Route path="card/:cardId" element={<Card />} />
          <Route path="cart" element={<Cart />} />
          <Route path="finalizeCart" element={<FinalizeCart />} />
          <Route
            path="finalizeCart/successfulPayment"
            element={<SuccessfulPayment />}
          />
          <Route
            path="finalizeCart/unSuccessfulPayment"
            element={<UnSuccessfulPayment />}
          />
        </Route>

        <Route path="PaymentGateway" element={<PaymentGateway />} />

        <Route path="login" element={<Login />} />

        <Route path="Admin" element={<AdminPageSharedLayout />}>
          <Route index element={<Commodities />} />
          <Route path="stocks" element={<Stocks />} />
          <Route path="orders" element={<Orders />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
