import React from "react";
import logo from "../assets/header/Logo.png";
import downButtom from "../assets/header/chevron-circle-down.svg";
import "../style/header.css";
import Login from "./Login";
import { useAuth0 } from "@auth0/auth0-react";
import axios from "axios";

export default function Header() {
  
  const {
    user,
    isAuthenticated,
    getAccessTokenSilently,
  } = useAuth0();

  const callApi = () => {
    axios
      .get("http://localhost:3000")
      .then((res) => console.log(res.data))
      .catch((error) => console.error(error.message));
  };

  const callApiProtected = async () => {
    try {
      const token = await getAccessTokenSilently();
      const response = await axios.get("http://localhost:3000/protected", {
        headers: {
          authorization: `Bearer ${token}`
        }
      });
      console.log(response.data);
      const userInfo = response.data;
    } catch (error) {
      console.error(error.message);
    }
    // axios.get("http://localhost:3000/protected")
    // .then(res=> console.log(res.data))
    // .catch(error=>console.error(error))
  };
  return (
    <header>
      <div className="cont-back">
        <Login/>
      </div>
      <div className="d-flex justify-content-center">
        <div className="profile-logo">
          <img src={isAuthenticated ? user.picture : logo} alt="profile-logo" />
        </div>
      </div>

      <div className="down-buttom">
        <div>
          <h3>{isAuthenticated ? user.name : <></>}</h3>
        </div>
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
