import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Link from "@mui/material/Link";
import { Box, Toolbar, Typography, Tooltip, IconButton } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { BiLogOutCircle } from "react-icons/bi";

export default function AdminNavbar() {
  const navigate = useNavigate();
  function deleteItems() {
    localStorage.clear();
    navigate("/");
  }

  return (
    <Box>
      <AppBar
        position="static"
        sx={{
          backgroundImage: `linear-gradient(#fff3e0,#fff3e0, #fff3e0 120%)`,
          padding: "20px 50px",
        }}
      >
        <Toolbar sx={{ justifyContent: "space-between" }}>
          <Box>
            <Link href="/admin" underline="none">
              <Typography
                variant="h4"
                sx={{
                  fontFamily: "Titr",
                  fontSize: "25px",
                  fontWeight: "bold",
                  color: "#81d4fa",
                }}
              >
                پنل مدیریت فروشگاه
              </Typography>
            </Link>
          </Box>
          <Box sx={{ display: "flex", gap: "20px", alignItems: "center" }}>
            <Link
              href="/admin/commodities"
              sx={{
                display: "flex",
                alignItems: "center",
                gap: "5px",
                textDecoration: "none",
                color: "#ff99bb",
                padding: "5px",
                borderRadius: "8px",
                border: "1px solid #81d4fa",
                boxShadow: "1px 1px 3px grey",
              }}
            >
              <Typography sx={{ fontFamily: "Titr", color: "#81d4fa" }}>
                کالاها
              </Typography>
            </Link>
            <Link
              href="/admin/stockAndPrice"
              sx={{
                display: "flex",
                alignItems: "center",
                gap: "5px",
                textDecoration: "none",
                color: "#ff99bb",
                padding: "5px",
                borderRadius: "8px",
                border: "1px solid #81d4fa",
                boxShadow: "1px 1px 3px grey",
              }}
            >
              <Typography sx={{ fontFamily: "Titr", color: "#81d4fa" }}>
                موجودی و قیمت
              </Typography>
            </Link>
            <Link
              href="/admin/orders"
              sx={{
                display: "flex",
                alignItems: "center",
                gap: "5px",
                textDecoration: "none",
                color: "#ff99bb",
                padding: "5px",
                borderRadius: "8px",
                border: "1px solid #81d4fa",
                boxShadow: "1px 1px 3px grey",
              }}
            >
              <Typography
                sx={{
                  fontFamily: "Titr",
                  color: "#81d4fa",
                }}
              >
                سفارش ها
              </Typography>
            </Link>
            <Link
              href="/"
              underline="none"
              sx={{
                display: "flex",
                alignItems: "center",
                gap: "5px",
              }}
            >
              <Typography
                sx={{
                  fontFamily: "Ziba",
                  color: "#ff99bb",
                  fontSize: "20px",
                  fontWeight: "bold",
                }}
              >
                بازگشت به سایت
              </Typography>
            </Link>

            <Tooltip title="Log Out">
              <IconButton>
                <BiLogOutCircle
                  onClick={deleteItems}
                  style={{ fontSize: "30px" }}
                />
              </IconButton>
            </Tooltip>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
