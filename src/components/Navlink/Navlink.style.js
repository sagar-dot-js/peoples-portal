import { Link, NavLink } from "react-router-dom";
import styled, { css } from "styled-components";

export const NavlinkWrapper = styled(NavLink)`
  color: #fff;
  font-size: 16px;
  text-decoration: none;
  padding-bottom: 0.5em;
  text-transform: capitalize;
  margin-right: 1em;
  /* &.active {
  } */
  ${(props) => {
    console.log(props);
    if (props.currentUrl.pathname === props.to) {
      return css`
        color: red;
        font-weight: 600;
        border-bottom: 3px solid #fff;
      `;
    }
  }}
`;
