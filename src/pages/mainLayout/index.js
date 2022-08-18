import React from "react";
import { Outlet } from "react-router-dom";
import MainNavbar from "./mainNavbar";
import Footer from "./footer";

export default function MainPageSharedLayout() {
  return (
    <div>
      <MainNavbar />
      <Outlet />
      <Footer />
    </div>
  );
}
