import React from "react";
// Styles
import { Nav, Logo, NavMenu } from "./Header.styles";

export default function Header() {
  return (
    <Nav>
      <Logo>
        <img src="/images/logo.svg" alt="Disney+" />
      </Logo>
      <NavMenu>
        <a href="/home">
          <img src="/images/home-icon.svg" alt="HOME" />
          <span>HOME</span>
        </a>
      </NavMenu>
    </Nav>
  );
}
