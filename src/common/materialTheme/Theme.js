import * as React from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";
import { faIR } from "@mui/material/locale";

const Theme = (props) => {
  const theme = createTheme(
    {
      typography: {
        fontFamily: "Nazanin",
        fontWeight: "bold",
      },
      direction: "rtl",
    },
    faIR
  );
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {props.children}
    </ThemeProvider>
  );
};
export { Theme };
