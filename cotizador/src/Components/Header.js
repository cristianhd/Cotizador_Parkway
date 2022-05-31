import React, { useEffect, useState } from "react";
import logo from "../assets/header/Logo.png";
import downButtom from "../assets/header/chevron-circle-down.svg";
import "../style/header.css";
import Login from "./Login";
import { useAuth0 } from "@auth0/auth0-react";
import axios from "axios";
import Loading from "./Loading";
import Profile from "./Profile";

export default function Header() {
  const [jwt, setJwt] = useState(null);
  const [existUser, setExistUser] = useState(null);
  
  const {
    user,
    isAuthenticated,
    getAccessTokenSilently,
    isLoading
  } = useAuth0();



  console.log(isLoading)
  if (isLoading) {
    return <Loading />;
  }

 

  console.log(user)
  return (
    <header>
      <div className="cont-back">
        <Login/>
      </div>
      <Profile/>
    </header>
  );
}
