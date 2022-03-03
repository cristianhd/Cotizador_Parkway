import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import axios from "axios";

export default function Login() {
  const {
    loginWithRedirect,
    logout,
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
    } catch (error) {
      console.error(error.message);
    }
    // axios.get("http://localhost:3000/protected")
    // .then(res=> console.log(res.data))
    // .catch(error=>console.error(error))
  };

  return (
    <div>
      <ul>
        <li>
          <button onClick={loginWithRedirect}>Iniciar Sesión</button>
        </li>
        <li>
          <button onClick={logout}>Cerrar Sesión</button>
        </li>
        <h3>User is {isAuthenticated ? "Login" : "Logout"}</h3>

        <li>
          <button onClick={callApi}>API</button>
        </li>
        <li>
          <button onClick={callApiProtected}>API PROTECTED</button>
        </li>
      </ul>user
     
    </div>
  );
}
