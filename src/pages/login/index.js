import React from "react";
<<<<<<< HEAD

export default function Login() {
  return <div>Login</div>;
=======
import { TextField, Typography, Box, Button } from "@mui/material";
import Link from "@mui/material/Link";
import aks from "../../assets/images/login/panel2.png";

export default function Login() {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundImage: `url(${aks})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        height: "100vh",
      }}
    >
      <Box
        sx={{
          width: "30%",
          height: "60%",
          bgcolor: "background.paper",
          borderRadius: "5px",
          border: "2px solid #000",
          boxShadow: (theme) => theme.shadows[5],
          p: 4,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography
          variant="h5"
          sx={{
            marginBottom: "5%",
            fontFamily: "Titr",
            fontWeight: "bold",
            color: "blue",
          }}
        >
          ورود به پنل مدیریت فروشگاه
        </Typography>
        <TextField
          sx={{ margin: "3%", width: "90%" }}
          id="outlined-basic"
          label="نام کاربری:"
          variant="outlined"
        />
        <TextField
          sx={{ margin: "3%", width: "90%" }}
          id="outlined-basic"
          label="رمز عبور:"
          variant="outlined"
        />
        <Link
          href="admin/orders"
          sx={{
            margin: "3%",
            width: "30%",
            border: "1px solid #e0e0e0",
            borderRadius: "4px",
            textAlign: "center",
            textDecoration: "none",
            fontFamily: "Titr",
            fontSize: "20px",
            color: "#651fff",
            fontWeight: "bold",
            paddingBottom: "5px",
          }}
        >
          ورود
        </Link>
        <Link
          href="/"
          underline="none"
          sx={{
            marginTop: "5%",
            fontFamily: "Ziba",
            fontSize: "25px",
            color: "#ff99bb",
            fontWeight: "bold",
          }}
        >
          بازگشت به سایت
        </Link>
      </Box>
    </Box>
  );
>>>>>>> development
}
