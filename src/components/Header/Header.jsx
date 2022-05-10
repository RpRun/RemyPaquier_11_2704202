import React from "react";
import Menu from "../Menu/Menu";
import "./Header.scss";
import { ReactComponent as Logo } from "../../assets/LOGO.svg";

const Header = () => {
  return (
    <header className="header">
      <Logo fill="current" />
      <Menu />
    </header>
  );
};

export default Header;
