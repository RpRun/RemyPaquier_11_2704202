import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/reset.scss";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import "./styles/main.scss";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
