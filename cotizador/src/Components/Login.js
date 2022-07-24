import React, { useEffect, useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import axios from "axios";
import loginIcon from "../assets/header/login.svg";
import logoutIcon from "../assets/header/logout.svg";
import "../style/login.css";
import CategoryUser from "./Loading";
import { Button } from "react-bootstrap";
import Loading from "./Loading";

export default function Login() {
  const {
    loginWithRedirect,
    logout,
    isLoading,

    isAuthenticated,
  } = useAuth0();



  return (
    <div className="w-100 d-flex justify-content-end">
      {isAuthenticated ? (
        <Button
          variant="outline"
          onClick={logout}
          className="shadow-none p-0 m-0"
        >
          <div className="login-button d-flex justify-content-around">
            <img src={logoutIcon} alt="logout-icon"></img>
            <span>Cerrar Sesión</span>
          </div>
        </Button>
      ) : (
        <Button
          variant="outline"
          onClick={loginWithRedirect}
          className="shadow-none p-0 m-0"
        >
          <div className="my-5 mx-4 mx-md-5 login-button d-flex justify-content-around">
            <img src={loginIcon} alt="login-icon"></img>
            <span>Iniciar Sesión</span>
          </div>
        </Button>
      )}
    </div>
  );
}
