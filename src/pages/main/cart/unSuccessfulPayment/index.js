import CancelIcon from "@mui/icons-material/Cancel";
import { Box, Typography } from "@mui/material";

export default function UnsuccessfulPayment() {
  return (
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
