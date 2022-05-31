import React, { useEffect, useState } from "react";
import logo from "../assets/header/Logo.png";
import downButtom from "../assets/header/chevron-circle-down.svg";
import "../style/header.css";
import Login from "./Login";
import { useAuth0 } from "@auth0/auth0-react";
import axios from "axios";
import Loading from "./Loading";
import Profile from "./Profile";
import Logo from "./Logo";

export default function Header() {
  const { isLoading, isAuthenticated } = useAuth0();

  if (isLoading) {
    return <Loading />;
  }

  return (
    <header>
      <div className="cont-back">
        <Login />
      </div>
      {isAuthenticated ? <Profile/> : <Logo/>}
      
      <div className="down-buttom">
        <img
          src={downButtom}
          alt="down-buttom"
          onClick={() =>
            window.scroll({
              top: 325,
              behavior: "smooth",
            })
          }
        />
      </div>
    </header>
  );
}
