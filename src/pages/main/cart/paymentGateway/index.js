import React from "react";
import aks from "../../../../assets/images/paymentGateway/bank.jpg";
import { Box, Button, Link } from "@mui/material";

export default function PaymentGateway() {
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
          marginTop: "40%",
          display: "flex",
          gap: "1%",
          marginRight: "19%",
        }}
      >
        <Link
          href="http://localhost:3000/paymentResult?result=failed"
          underline="none"
        >
          <Button
            sx={{
              backgroundImage: `linear-gradient(#ffc107,#ffe082, #ffc107 120%)`,
              color: "white",
              borderRadius: "40px",
              width: "211px",
              fontSize: "24px",
            }}
          >
            انصراف
          </Button>
        </Link>
        <Link
          href="http://localhost:3000/paymentResult?result=success"
          underline="none"
        >
          <Button
            sx={{
              backgroundImage: `linear-gradient(#00c853,#b2ff59, #00c853 120%)`,
              color: "white",
              borderRadius: "40px",
              width: "437px",
              fontSize: "24px",
            }}
          >
            پرداخت
          </Button>
        </Link>
      </Box>
    </Box>
  );
}
