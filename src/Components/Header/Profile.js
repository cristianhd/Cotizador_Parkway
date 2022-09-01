import React, { useEffect, useState } from "react";
import logo from "../../assets/header/Logo.png";
import { useAuth0 } from "@auth0/auth0-react";
import axios from "axios";
import ModalNewUser from "./ModalNewUser";
import Loading from "./Loading";

export default function Profile() {
  const [existUser, setExistUser] = useState(true);
  const [infoUser, setInfoUser] = useState();

  const { user, isAuthenticated, isLoading, getAccessTokenSilently } =
    useAuth0();

  useEffect(() => {
    const callApi = async () => {
      try {
        const token = await getAccessTokenSilently();
        const sub = user.sub;
        console.log(sub);
        const response = await axios.get(
          `http://localhost:3001/users/exist?sub=${sub}`,
          {
            headers: {
              authorization: `Bearer ${token}`,
              "Content-Type": "application/json",
            },
          }
        );
        console.log(response);

        if (response.data !== null) {
          setInfoUser(response.data);
        }
        if (response.data === false) {
          setExistUser(response.data);
        }
      } catch (error) {
        console.error(error.message);
      }
    };
    if (isAuthenticated) callApi();
  }, [getAccessTokenSilently, user, isAuthenticated]);
  console.log(existUser);
  console.log(infoUser);
  console.log("load", isLoading, "Auth", isAuthenticated, "info", infoUser);

  return (
    <>
      {!existUser && <ModalNewUser />}
      {isAuthenticated && !infoUser && <Loading></Loading>}

      <div className="profile w-100">
        <div className="profile-img">
          <img
            className=""
            src={infoUser ? infoUser.picture : logo}
            alt="profile-img"
            referrerPolicy="no-referrer"
          />
        </div>
        {infoUser && (
          <div className="profile-data m-auto">
            <div className="d-flex flex-row">
              <h5>{infoUser.name}</h5>
              <div className="profile-badge badge bg-success m-1 p-1">
                activo
              </div>
            </div>

            <h6>{infoUser.category}</h6>
          </div>
        )}
      </div>
    </>
  );
}
