import React from "react";
import { NavlinkWrapper } from "./Navlink.style";

const Navlink = ({ children, to }) => {
  return (
    <NavlinkWrapper to={to} currentUrl={window.location}>
      {children}
    </NavlinkWrapper>
    // <Navlink to="/">Link</Navlink>
  );
};

export default Navlink;
