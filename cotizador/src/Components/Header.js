import React, { useEffect, useState } from "react";
import logo from "../assets/header/Logo.png";
import iconButtom from "../assets/header/chevron-circle-down.svg";
import "../style/header.css";
import Login from "./Login";
import { useAuth0 } from "@auth0/auth0-react";
import axios from "axios";
import Loading from "./Loading";
import Profile from "./Profile";
import Logo from "./Logo";

export default function Header() {
  const [stateButtom, setStateButtom] = useState(false); // true: up false: down

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
        <div
          className={stateButtom ? "up-buttom " : "down-buttom"}
        >
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
