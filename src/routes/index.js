import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
const PrivateRoute = React.lazy(() => import("./PrivateRoute"));
const MainPageSharedLayout = React.lazy(() => import("layouts/main"));
const Categories = React.lazy(() => import("pages/main/categories"));
const BabySuppliesGuide = React.lazy(() =>
  import("pages/main/babySuppliesGuide")
);
const Category = React.lazy(() => import("pages/main/category"));
const Product = React.lazy(() => import("components/product"));
const Cart = React.lazy(() => import("pages/main/cart"));
const FinalizeCart = React.lazy(() => import("pages/main/cart/finalizeCart"));
const PaymentGateway = React.lazy(() =>
  import("pages/main/cart/paymentGateway")
);
const PaymentResult = React.lazy(() => import("pages/main/cart/paymentResult"));
const Login = React.lazy(() => import("pages/login"));
const AdminPageSharedLayout = React.lazy(() => import("layouts/admin"));
const Commodities = React.lazy(() => import("pages/admin/commodities"));
const StockAndPrice = React.lazy(() => import("pages/admin/stockAndprice"));
const Orders = React.lazy(() => import("pages/admin/orders"));
const Error404 = React.lazy(() => import("pages/errors/error404"));

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <React.Suspense fallback={<>loading...</>}>
              <MainPageSharedLayout />
            </React.Suspense>
          }
        >
          <Route
            index
            element={
              <React.Suspense fallback={<>loading...</>}>
                <Categories />
              </React.Suspense>
            }
          />
          <Route
            path="categories/:categoriesId"
            element={
              <React.Suspense fallback={<>loading...</>}>
                <Category />
              </React.Suspense>
            }
          />
          <Route
            path="babySuppliesGuide"
            element={
              <React.Suspense fallback={<>loading...</>}>
                <BabySuppliesGuide />
              </React.Suspense>
            }
          />
          <Route
            path="product/:productId"
            element={
              <React.Suspense fallback={<>loading...</>}>
                <Product />
              </React.Suspense>
            }
          />
          <Route
            path="categories/:categoriesId/product/:productId"
            element={
              <React.Suspense fallback={<>loading...</>}>
                <Product />
              </React.Suspense>
            }
          />
          <Route
            path="cart"
            element={
              <React.Suspense fallback={<>loading...</>}>
                <Cart />
              </React.Suspense>
            }
          />
          <Route
            path="finalizeCart"
            element={
              <React.Suspense fallback={<>loading...</>}>
                <FinalizeCart />
              </React.Suspense>
            }
          />
          <Route
            path="finalizeCart/paymentResult"
            element={
              <React.Suspense fallback={<>loading...</>}>
                <PaymentResult />
              </React.Suspense>
            }
          />
        </Route>

        <Route
          path="paymentGateway"
          element={
            <React.Suspense fallback={<>loading...</>}>
              <PaymentGateway />
            </React.Suspense>
          }
        />

        <Route
          path="login"
          element={
            <React.Suspense fallback={<>loading...</>}>
              <Login />
            </React.Suspense>
          }
        />

        <Route
          path="admin"
          element={
            <React.Suspense fallback={<>loading...</>}>
              <PrivateRoute>
                <AdminPageSharedLayout />
              </PrivateRoute>
            </React.Suspense>
          }
        >
          <Route
            path="commodities"
            element={
              <React.Suspense fallback={<>loading...</>}>
                <Commodities />{" "}
              </React.Suspense>
            }
          />
          <Route
            path="stockAndPrice"
            element={
              <React.Suspense fallback={<>loading...</>}>
                <StockAndPrice />{" "}
              </React.Suspense>
            }
          />
          <Route
            path="orders"
            element={
              <React.Suspense fallback={<>loading...</>}>
                <Orders />{" "}
              </React.Suspense>
            }
          />
        </Route>
        <Route path="*" element={<Error404 />} />
      </Routes>
    </BrowserRouter>
  );
}
