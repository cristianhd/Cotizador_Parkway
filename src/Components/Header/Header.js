import React, { useState } from "react";
import iconButtom from "../../assets/header/chevron-circle-down.svg";
import Login from "./Login";
import Profile from "./Profile";
import "../../style/header.css";

export default function Header() {
  const [stateButtom, setStateButtom] = useState(false); // true: up false: down

// handler
  const handleDownButtom = () => {
    setStateButtom(true);
    window.scroll({
      top: 350,
      behavior: "smooth",
    });
  };
  const handleUpButtom = () => {
    setStateButtom(false);
    window.scroll({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <header>
      
      <div className="cont-back">
        <Login />
      </div>

      <Profile />

      <div className="w-100 mt-5">
        <div className={stateButtom ? "up-buttom " : "down-buttom"}>
          <img
            src={iconButtom}
            alt="icon-buttom"
            onClick={
              stateButtom ? () => handleUpButtom() : () => handleDownButtom()
            }
          />
        </div>
      </div>
    </header>
  );
}
