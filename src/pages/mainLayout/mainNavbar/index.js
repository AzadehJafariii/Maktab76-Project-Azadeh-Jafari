import React from "react";
import aks from "../../assets/images/pinkyY.png";
import CardMedia from "@mui/material/CardMedia";
import { NavLink } from "react-router-dom";
// import * as persianTools from "@persian-tools/persian-tools";
// import { digitsEnToFa } from "@persian-tools/persian-tools";

export default function MainNavbar() {
  // const convertedToFa = persianTools.digitsEnToFa(1234567);
  // const five = persianTools.digitsEnToFa(5);
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-around",
        backgroundColor: "lightgrey",
      }}
    >
      <div style={{ display: "flex" }}>
        <CardMedia
          image={aks}
          sx={{ height: 100, width: 100, borderRadius: 50 }}
        />
        <h2>نام فروشگاه</h2>
      </div>
      <div>
        <NavLink to="#">
          <button>مدیریت</button>
        </NavLink>
        <NavLink to="#">
          <button>سبد خرید</button>
        </NavLink>
        {/* <p>{convertedToFa}</p> */}
      </div>
    </div>
  );
}
