import React, { useEffect, useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import axios from "axios";
import loginIcon from "../assets/header/login.svg";
import logoutIcon from "../assets/header/logout.svg";
import "../style/login.css";
import CategoryUser from "./Loading";

export default function Login() {
  const {
    loginWithRedirect,
    logout,

    isAuthenticated,
  } = useAuth0();

  return (
    <div className="w-100 d-flex justify-content-end">
      <ul>
        {isAuthenticated ? (
          <li className="">
            <button onClick={logout} className="d-flex justify-content-between">
              <img src={logoutIcon} alt="login-icon"></img>
              Cerrar Sesión
            </button>
          </li>
        ) : (
          <li>
            <button
              onClick={loginWithRedirect}
              className="d-flex justify-content-between"
            >
              <img src={loginIcon} alt="logout-icon"></img>
              Iniciar Sesión
            </button>
          </li>
        )}
      </ul>
    </div>
  );
}
