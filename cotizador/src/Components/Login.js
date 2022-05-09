import React, { useEffect, useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import axios from "axios";
import loginIcon from "../assets/header/login.svg";
import logoutIcon from "../assets/header/logout.svg";
import "../style/login.css"

export default function Login() {
const [jwt,setJwt] = useState(null);

  const {
    loginWithRedirect,
    logout,
    user,
    isAuthenticated,
    getAccessTokenSilently,
  } = useAuth0();
  
  useEffect(() => {
    async function setToken(){
      const token = await getAccessTokenSilently()
      setJwt(token);
    }
    setToken()
  }, [getAccessTokenSilently])
  
  
   

  console.log(jwt)
  
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
          authorization: `Bearer ${token}`,
        },
      });
      console.log(response.data);
    } catch (error) {
      console.error(error.message);
    }
    // axios.get("http://localhost:3000/protected")
    // .then(res=> console.log(res.data))
    // .catch(error=>console.error(error))
  };

  return (
    <div className="w-100 d-flex justify-content-end">
      <ul>
        {isAuthenticated ? 
        (
          <li className="">
            <button onClick={logout} className="d-flex justify-content-between">
            <img src={logoutIcon} alt="login-icon"></img>
              
              Cerrar Sesión
              
              </button>
          </li>
        ) : (
          <li>
  
            <button onClick={loginWithRedirect} className="d-flex justify-content-between">
              
            <img src={loginIcon} alt="logout-icon"></img>
              Iniciar Sesión</button>
        </li>
        )}
{/*         
        <h3>User is {isAuthenticated ? "Login" : "Logout"}</h3>

        {/* <li>
          <button onClick={callApi}>API</button>
        </li>
        <li>
          <button onClick={callApiProtected}>API PROTECTED</button>
        </li> */} 
      </ul>
    </div>
  );
}
