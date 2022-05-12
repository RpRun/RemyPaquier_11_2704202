import "./DropDown.scss";
import { useState } from "react";
import React from "react";
import DropDownMessage from "./DropDownMessage/DropDownMessage";
// import { useEffect } from 'react'

const DropDown = ({ title, text }) => {
  const [isOpen, setIsOpen] = useState(false);

  return isOpen ? (
    <li focusable="true" className="titleBox">
      <div className="dropBox">
        {title}
        <button onClick={() => setIsOpen(false)}>
          <span className="sr-only">réduire</span>
          <svg
            aria-hidden="true"
            focusable="false"
            className="arrow reverse"
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
        </button>
      </div>

      <DropDownMessage text={text} />
    </li>
  ) : (
    <li focusable="true" className="titleBox">
      <div className="dropBox">
        {title}
        <button onClick={() => setIsOpen(true)}>
          <span className="sr-only">Deployer</span>
          <svg
            aria-hidden="true"
            focusable="false"
            class="arrow"
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
        </button>
      </div>
    </li>
  );
};

export default DropDown;
