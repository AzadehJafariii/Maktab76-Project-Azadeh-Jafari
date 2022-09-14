import { useSearchParams } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Typography, Box } from "@mui/material";
import { addOrders } from "redux/features/main/addOrders/addOrderSlice";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import CancelIcon from "@mui/icons-material/Cancel";

export default function PaymentResult() {
  const dispatch = useDispatch();
  const [searchParams, setsearchparams] = useSearchParams();
  const [result, setResult] = useState(searchParams.get("result"));

  const clientData = JSON.parse(localStorage.getItem("userData"));
  const orders = JSON.parse(localStorage.getItem("cartItems"));
  clientData.products = orders;

  useEffect(() => {
    if (result === "success") {
      dispatch(addOrders(clientData));
    }
  }, [dispatch, clientData, result]);

  return result === "success" ? (
    <Box>
      <Typography variant="h4" sx={{ margin: "4%" }}>
        نتیجه پرداخت
      </Typography>
      <Box sx={{ display: "flex", alignItems: "center", margin: "0 0 7% 30%" }}>
        <Box>
          <CheckCircleIcon sx={{ color: "#4caf50", fontSize: "100px" }} />
        </Box>
        <Box sx={{ marginLeft: "5%" }}>
          <Typography sx={{ fontSize: "20px" }}>
            با تشکر از پرداخت شما، سفارش شما ثبت شد.
          </Typography>
          <Typography sx={{ fontSize: "20px" }}>
            جهت هماهنگی ارسال با شما تماس گرفته خواهد شد.
          </Typography>
        </Box>
      </Box>
    </Box>
  ) : (
    <Box>
      <Typography variant="h4" sx={{ margin: "4%" }}>
        نتیجه پرداخت
      </Typography>
      <Box sx={{ display: "flex", alignItems: "center", margin: "0 0 7% 30%" }}>
        <Box>
          <CancelIcon sx={{ color: "#e53935", fontSize: "100px" }} />
        </Box>
        <Box sx={{ marginLeft: "5%" }}>
          <Typography sx={{ fontSize: "20px" }}>
            پرداخت موفقیت آمیز نبود. سفارش شما در انتظار پرداخت است.
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}
