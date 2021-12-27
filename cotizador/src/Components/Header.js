import React from "react";
import "../style/header.css";
import logo from "../assets/header/Logo.png";
import background from "../assets/header/Fondo.png";

export default function Header() {
  return (
    <div>
      <header>
     
          <img src={logo} alt="logo" className="img-logo" />
          <img src={background} alt="logo" className="img-back" />
          
      </header>
    </div>
  );
}
