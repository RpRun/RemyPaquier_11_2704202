import React from "react";
import Logo from "../Logo/Logo";
import "./Footer.scss";

const Footer = () => {
  return (
    <footer className="footer">
      <Logo />
      <p>© 2020 Kasa. All rights reserved</p>
    </footer>
  );
};

export default Footer;
