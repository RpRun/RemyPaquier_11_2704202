import React from "react";
import Menu from "../Menu/Menu";
import "./Header.scss";
import Logo from "../Logo/Logo";

const Header = () => {
  return (
    <header className="header">
      <Logo />
      <Menu />
    </header>
  );
};

export default Header;
