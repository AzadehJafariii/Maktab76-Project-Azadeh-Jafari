import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { login } from "redux/features/user/usersSlice";
import aks from "assets/images/login/panel2.png";
import { TextField, Typography, Box, Button, Link } from "@mui/material";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const { error, isLoggedIn } = useSelector((state) => state.users);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(login({ username, password }));
    if (isLoggedIn) {
      navigate("/admin/orders");
    } else navigate("/login");
  };

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
          width: "25%",
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
        <form onSubmit={(e) => handleSubmit(e)}>
          <Box sx={{ height: "10%", color: "red" }}>
            {error && (
              <Typography
                variant="h6"
                sx={{ fontFamily: "Nazanin", fontSize: "16px" }}
              >
                اطلاعات وارد شده صحیح نمیباشد
              </Typography>
            )}
          </Box>
          <Box>
            <TextField
              sx={{ margin: "7% 0", width: "100%" }}
              label="نام کاربری:"
              variant="outlined"
              type="username"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </Box>
          <Box>
            <TextField
              sx={{ margin: "7% 0", width: "100%" }}
              label="رمز عبور:"
              variant="outlined"
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </Box>
          <Box sx={{ display: "flex", justifyContent: "center" }}>
            <Button
              type="submit"
              sx={{
                margin: "7% 0",
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
            </Button>
          </Box>
        </form>
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
}
