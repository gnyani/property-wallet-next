import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import StickyFooter from "./sticky-footer";

const Layout = ({ children }) => (
  <div>
    <CssBaseline />
    <main>{children}</main>

    <StickyFooter />
  </div>
);
export default Layout;
