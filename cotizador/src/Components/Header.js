import React from "react";
import logo from "../assets/header/Logo.png";
import downButtom from "../assets/header/chevron-circle-down.svg"
import "../style/header.css";

export default function Header() {
  return (
    <header>
      <div className="cont-back"></div>
      <div className="logo">
        <img src={logo} alt="logo" className="img-logo" />
      </div>
        <div className="down-buttom">

        <img src={downButtom} alt="down-buttom"/>
        </div>
    </header>
  );
}
