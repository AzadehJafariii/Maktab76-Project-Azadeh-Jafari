import React from "react";
export const PrivateRoute = React.lazy(() => import("routes/PrivateRoute"));
export const MainPageSharedLayout = React.lazy(() => import("layouts/main"));
export const Categories = React.lazy(() => import("pages/main/categories"));
export const BabySuppliesGuide = React.lazy(() =>
  import("pages/main/babySuppliesGuide")
);
export const Category = React.lazy(() => import("pages/main/category"));
export const Product = React.lazy(() => import("pages/main/productDetails"));
export const Cart = React.lazy(() => import("pages/main/cart"));
export const FinalizeCart = React.lazy(() =>
  import("pages/main/cart/finalizeCart")
);
export const SuccessfulPayment = React.lazy(() =>
  import("pages/main/cart/successfulPayment")
);
export const UnsuccessfulPayment = React.lazy(() =>
  import("pages/main/cart/unSuccessfulPayment")
);
export const Login = React.lazy(() => import("pages/login"));
export const AdminPageSharedLayout = React.lazy(() => import("layouts/admin"));
export const Commodities = React.lazy(() => import("pages/admin/commodities"));
export const StockAndPrice = React.lazy(() =>
  import("pages/admin/stockAndprice")
);
export const Orders = React.lazy(() => import("pages/admin/orders"));
export const Error404 = React.lazy(() => import("pages/errors/error404"));
