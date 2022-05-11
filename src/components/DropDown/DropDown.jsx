import "./DropDown.scss";
import React from "react";

const DropDown = ({ text }) => {
  return (
    <li className="closedBox">
      {text}
      <svg
        width="32"
        height="32"
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M5.15993 8.65334L2.79993 11.0267L15.9999 24.2133L29.1999 11.0133L26.8399 8.65334L15.9999 19.4933L5.15993 8.65334Z"
          fill="white"
        />
      </svg>
    </li>
  );
};

export default DropDown;
