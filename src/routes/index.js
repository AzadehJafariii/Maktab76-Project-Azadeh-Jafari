import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {
  PrivateRoute,
  MainPageSharedLayout,
  Categories,
  BabySuppliesGuide,
  Category,
  Product,
  Cart,
  FinalizeCart,
  SuccessfulPayment,
  UnsuccessfulPayment,
  Login,
  AdminPageSharedLayout,
  Commodities,
  StockAndPrice,
  Orders,
  Error404,
} from "config/routes";

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
            path="successfulPayment"
            element={
              <React.Suspense fallback={<>loading...</>}>
                <SuccessfulPayment />
              </React.Suspense>
            }
          />
          <Route
            path="unsuccessfulPayment"
            element={
              <React.Suspense fallback={<>loading...</>}>
                <UnsuccessfulPayment />
              </React.Suspense>
            }
          />
        </Route>

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
                <Commodities />
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
