import * as React from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import rtlPlugin from "stylis-plugin-rtl";
import { CacheProvider } from "@emotion/react";
import createCache from "@emotion/cache";
import { prefixer } from "stylis";

const theme = createTheme({
  direction: "rtl",
});

// Create rtl cache
const cacheRtl = createCache({
  key: "muirtl",
  stylisPlugins: [prefixer, rtlPlugin],
});
export default function MaterialTheme(props) {
  return (
    <CacheProvider value={cacheRtl}>
      <ThemeProvider theme={theme}>{props.children}</ThemeProvider>
    </CacheProvider>
  );
}