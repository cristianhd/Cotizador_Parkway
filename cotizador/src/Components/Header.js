import React from "react";
import logo from "../assets/header/Logo.png";

import "../style/header.css";

export default function Header() {
  return (
    <header>
      <div className="cont-back"></div>
      <div className="logo">
        <img src={logo} alt="logo" className="img-logo" />
        {/* <img src={} alt="down-buttom"/> */}
      </div>
    </header>
  );
}
