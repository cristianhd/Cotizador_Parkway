import React from "react";
import logo from "../assets/header/Logo.png";
import downButtom from "../assets/header/chevron-circle-down.svg"
import "../style/header.css";
import Login from "./Login";

export default function Header() {
  return (
    <header>
      <div className="cont-back">

      <Login/>
      </div>
      <div className="logo" id="logo">
        <img src={logo} alt="logo" className="img-logo" />
      </div>
        <div className="down-buttom">

        
          <img src={downButtom} alt="down-buttom" onClick={()=>window.scroll({
  top: 325,
  behavior: 'smooth'
          })}/>
          
          
        </div>
    </header>
  );
}
