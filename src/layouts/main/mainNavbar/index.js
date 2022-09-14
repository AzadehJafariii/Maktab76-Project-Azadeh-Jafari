import * as React from "react";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import ChildFriendlyIcon from "@mui/icons-material/ChildFriendly";
import BedroomBabyIcon from "@mui/icons-material/BedroomBaby";
import ChildCareIcon from "@mui/icons-material/ChildCare";
import StrollerIcon from "@mui/icons-material/Stroller";
import CribIcon from "@mui/icons-material/Crib";
import logo from "assets/images/logo/Bear.png";
import { Link, AppBar, Badge, Box, Toolbar, Typography } from "@mui/material";
import { useSelector } from "react-redux";

export default function MainNavbar() {
  const { cartItems } = useSelector((state) => state.cart);

  return (
    <Box>
      <AppBar
        position="static"
        sx={{
          backgroundImage: `linear-gradient(#fff3e0,#fff3e0, #fff3e0 120%)`,
          padding: "5px 40px",
        }}
      >
        <Toolbar sx={{ justifyContent: "space-between" }}>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Link
              href="/"
              underline="none"
              sx={{ display: "flex", gap: "20px", alignItems: "center" }}
            >
              <Box
                component="img"
                src={logo}
                alt="logo"
                sx={{
                  width: "22%",
                  borderRadius: "50%",
                  margin: "2.5%",
                  border: "3px solid #81d4fa",
                }}
              />
              <Typography
                variant="h4"
                sx={{
                  fontFamily: "Ziba",
                  fontSize: "50px",
                  fontWeight: "bold",
                  color: "#81d4fa",
                }}
              >
                شازده کوچولو
                <FavoriteBorderOutlinedIcon
                  sx={{ color: "#ff99bb", marginBottom: "5%" }}
                />
              </Typography>
            </Link>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                width: "50%",
                gap: "5px",
              }}
            >
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
                  padding: "1%",
                  color: "#ff99bb",
                  backgroundColor: "white",
                  margin: "0 1%",
                  fontSize: "30px",
                }}
              />
              <BedroomBabyIcon
                sx={{
                  border: "1px solid #81d4fa",
                  borderRadius: "50%",
                  padding: "1%",
                  color: "#ff99bb",
                  backgroundColor: "white",
                  margin: "0 1%",
                  fontSize: "30px",
                }}
              />
              <ChildCareIcon
                sx={{
                  border: "1px solid #81d4fa",
                  borderRadius: "50%",
                  padding: "1%",
                  color: "#ff99bb",
                  backgroundColor: "white",
                  margin: "0 1%",
                  fontSize: "30px",
                }}
              />
              <StrollerIcon
                sx={{
                  border: "1px solid #81d4fa",
                  borderRadius: "50%",
                  padding: "1%",
                  color: "#ff99bb",
                  backgroundColor: "white",
                  margin: "0 1%",
                  fontSize: "30px",
                }}
              />
              <CribIcon
                sx={{
                  border: "1px solid #81d4fa",
                  borderRadius: "50%",
                  padding: "1%",
                  color: "#ff99bb",
                  backgroundColor: "white",
                  margin: "0 1%",
                  fontSize: "30px",
                }}
              />
            </Box>
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
                badgeContent={cartItems.length}
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
