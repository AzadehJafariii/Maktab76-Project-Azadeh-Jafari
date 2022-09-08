import * as React from "react";
import { Box, Link, Typography } from "@mui/material";
import aks1 from "assets/images/home/sis.jpg";
import aks2 from "assets/images/home/painting.jpg";
import Travel from "components/main/cards/travel";
import Safety from "components/main/cards/safety";
import Toy from "components/main/cards/toy";
import Dining from "components/main/cards/dining";

export default function Categories() {
  return (
    <Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          border: "3px solid yellow",
          marginTop: "3%",
        }}
      >
        <Link href="babySuppliesGuide">
          <Box
            component="img"
            src={aks1}
            alt="aks1"
            sx={{ borderRadius: "10%", margin: "3% 0" }}
          />
        </Link>
      </Box>
      <Box>
        <Link sx={{ textDecoration: "none" }}>
          <Travel />
        </Link>
        <Link sx={{ textDecoration: "none" }}>
          <Safety />
        </Link>
        <Link sx={{ textDecoration: "none" }}>
          <Toy />
        </Link>
        <Link sx={{ textDecoration: "none" }}>
          <Dining />
        </Link>
      </Box>
      <Box>
        <Typography
          variant="h5"
          sx={{ fontFamily: "Nazanin", margin: "4% 0 0 2%" }}
        >
          عکس های ارسالی از کودکان در حال نقاشی
        </Typography>{" "}
        <Box component="img" src={aks2} alt="aks2" sx={{ marginLeft: "2%" }} />
      </Box>
    </Box>
  );
}
