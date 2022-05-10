import React from "react";
import "./BackHome.scss";

const BackHome = ({ text }) => {
  return (
    <a className="backHome" href="/">
      {text}
    </a>
  );
};

export default BackHome;
