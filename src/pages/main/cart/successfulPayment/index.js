import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { Box, Typography } from "@mui/material";
import { useEffect } from "react";

export default function SuccessfulPayment() {
  useEffect(() => {}, []);

  return (
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
  );
}
