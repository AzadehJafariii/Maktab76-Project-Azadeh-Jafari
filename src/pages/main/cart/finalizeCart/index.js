import { Box, Typography, Button, Link, TextField } from "@mui/material";
import { useState } from "react";

export default function FinalizeCart() {
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState(0);
  const [date, setDate] = useState(0);
  const handleSave = () => {
    const userData = {
      name,
      address,
      phone,
      date,
    };
    localStorage.setItem("userData", JSON.stringify(userData));
  };

  return (
    <Box>
      <Box sx={{ margin: "2%" }}>
        <Typography variant="h5">نهایی کردن سبد خرید</Typography>
      </Box>
      <form onClick={handleSave}>
        <Box sx={{ display: "flex", gap: "20%", margin: "4% 0 0 20%" }}>
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <Box>
              <Typography>نام مشتری:</Typography>
              <TextField
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
              ></TextField>
            </Box>
            <Box sx={{ marginTop: "10%" }}>
              <Typography>آدرس:</Typography>
              <TextField
                type="text"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
              ></TextField>
            </Box>
          </Box>

          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <Box>
              <Typography>
                تلفن همراه:
                <span style={{ color: "lightgray", fontSize: "14px" }}>
                  جهت هماهنگی ارسال سفارش
                </span>
              </Typography>
              <TextField
                type="text"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              ></TextField>
            </Box>
            <Box sx={{ marginTop: "10%" }}>
              <Typography>تاریخ تحویل:</Typography>
              <TextField
                value={date}
                onChange={(e) => setDate(e.target.value)}
              ></TextField>
            </Box>
          </Box>
        </Box>
        <Link
          href="http://localhost:3001/paymentGateway"
          underline="none"
          sx={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
            margin: "5% 0",
          }}
        >
          <Button
            type="submit"
            sx={{
              border: "2px solid gray",
              fontSize: "18px",
              fontWeight: "bold",
              backgroundColor: "green",
              color: "black",
              padding: "0 3%",
            }}
            disabled={!name || !address || !phone || !date}
          >
            پرداخت
          </Button>
        </Link>
      </form>
    </Box>
  );
}
