import React from "react";
import { Outlet } from "react-router-dom";
import MainNavbar from "../Components/MainPageShared/MainNavbar";

export default function MainPageSharedLayout() {
  return (
    <div>
      <MainNavbar />
      <Outlet />
    </div>
  );
}
