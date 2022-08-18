import React from "react";
import { Outlet } from "react-router-dom";
import AdminNavbar from "./adminNavbar";

export default function AdminPageSharedLayout() {
  return (
    <div>
      <AdminNavbar />
      <Outlet />
    </div>
  );
}
