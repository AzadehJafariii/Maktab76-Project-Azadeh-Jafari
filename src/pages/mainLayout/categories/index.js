import { Box, Link, Typography } from "@mui/material";
import aks1 from "../../../assets/images/home/sis.jpg";
import aks2 from "../../../assets/images/home/painting.jpg";
export default function Home() {
  return (
    <Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          border: "3px solid yellow",
          marginTop: "1%",
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
        <Typography
          variant="h5"
          sx={{ fontFamily: "Nazanin", marginLeft: "2%" }}
        >
          عکس های ارسالی از کودکان در حال نقاشی
        </Typography>{" "}
        <Box component="img" src={aks2} alt="aks2" sx={{ marginLeft: "2%" }} />
      </Box>
    </Box>
  );
}

// import * as React from "react";
// import HomeIcon from "@mui/icons-material/Home";
// export default function Categories() {
//   return (
//     <div>
//       <HomeIcon />
//       نمایش گروه ها
//     </div>
//   );
// }
