import React from "react";
import { Outlet } from "react-router-dom";
import AdminNavbar from "../Components/AdminPageShared/AdminNavbar";

export default function AdminPageSharedLayout() {
  return (
    <div>
      <AdminNavbar />
      <Outlet />
    </div>
  );
}
