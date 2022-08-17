import * as React from "react";
import AppBar from "@mui/material/AppBar";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import Link from "@mui/material/Link";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import { Badge, Box, Toolbar, Typography } from "@mui/material";
import ChildFriendlyIcon from "@mui/icons-material/ChildFriendly";
import BedroomBabyIcon from "@mui/icons-material/BedroomBaby";
import ChildCareIcon from "@mui/icons-material/ChildCare";
import StrollerIcon from "@mui/icons-material/Stroller";
import CribIcon from "@mui/icons-material/Crib";
import logo from "../../assets/images/Bear.png";

export default function MainNavbar() {
  return (
    <Box>
      <AppBar
        position="static"
        sx={{
          backgroundImage: `linear-gradient(#fff3e0,#fff3e0, #fff3e0 120%)`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          padding: "0px 50px",
        }}
      >
        <Toolbar sx={{ justifyContent: "space-between" }}>
          <Box sx={{ display: "flex", gap: "20px", alignItems: "center" }}>
            <Box
              component="img"
              src={logo}
              alt="logo"
              sx={{
                width: "10%",
                borderRadius: "50%",
                margin: "1.5%",
                border: "3px solid #81d4fa",
              }}
            />
            <Typography
              variant="h4"
              sx={{
                fontFamily: "Ziba",
                fontSize: "45px",
                fontWeight: "bold",
                color: "#81d4fa",
              }}
            >
              شازده کوچولو
              <FavoriteBorderOutlinedIcon
                sx={{ color: "#ff99bb", marginBottom: "5%" }}
              />
            </Typography>
            <Typography
              variant="h6"
              sx={{
                fontFamily: "Ziba",
                color: "#ff99bb",
                fontWeight: "bold",
              }}
            >
              سرزمین لوازم کودک
            </Typography>
            <ChildFriendlyIcon
              sx={{
                border: "1px solid #81d4fa",
                borderRadius: "50%",
                padding: "0.5%",
                color: "#ff99bb",
                backgroundColor: "white",
              }}
            />
            <BedroomBabyIcon
              sx={{
                border: "1px solid #81d4fa",
                borderRadius: "50%",
                padding: "0.5%",
                color: "#ff99bb",
                backgroundColor: "white",
              }}
            />
            <ChildCareIcon
              sx={{
                border: "1px solid #81d4fa",
                borderRadius: "50%",
                padding: "0.5%",
                color: "#ff99bb",
                backgroundColor: "white",
              }}
            />
            <StrollerIcon
              sx={{
                border: "1px solid #81d4fa",
                borderRadius: "50%",
                padding: "0.5%",
                color: "#ff99bb",
                backgroundColor: "white",
              }}
            />
            <CribIcon
              sx={{
                border: "1px solid #81d4fa",
                borderRadius: "50%",
                padding: "0.5%",
                color: "#ff99bb",
                backgroundColor: "white",
              }}
            />
          </Box>
          <Box sx={{ display: "flex", gap: "20px", alignItems: "center" }}>
            <Link
              href="login"
              sx={{
                display: "flex",
                alignItems: "center",
                gap: "5px",
                textDecoration: "none",
                color: "#ff99bb",
              }}
            >
              <PersonOutlineOutlinedIcon />
              <Typography sx={{ fontFamily: "Titr", color: "#81d4fa" }}>
                مدیریت
              </Typography>
            </Link>
            <Link href="cart">
              <Badge
                badgeContent={0}
                color="error"
                showZero
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                sx={{ color: "#ff99bb" }}
              >
                <ShoppingCartOutlinedIcon />
              </Badge>
            </Link>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
