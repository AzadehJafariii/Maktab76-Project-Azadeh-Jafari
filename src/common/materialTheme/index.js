import * as React from "react";
import rtlPlugin from "stylis-plugin-rtl";
import { CacheProvider } from "@emotion/react";
import createCache from "@emotion/cache";
import { prefixer } from "stylis";
import { Theme } from "./Theme";

// Create rtl cache
const cacheRtl = createCache({
  key: "muirtl",
  stylisPlugins: [prefixer, rtlPlugin],
});
export default function MaterialTheme(props) {
  return (
    <Theme>
      <CacheProvider value={cacheRtl}>{props.children}</CacheProvider>
    </Theme>
  );
}
