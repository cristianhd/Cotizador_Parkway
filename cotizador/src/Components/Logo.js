import React from "react";
import logo from "../assets/header/Logo.png";

export default function Logo() {
  return (
    <div>
      <div className="d-flex justify-content-center">
        <div className="profile-logo">
          <img src={logo} alt="profile-logo" />
        </div>
      </div>
    </div>
  );
}
