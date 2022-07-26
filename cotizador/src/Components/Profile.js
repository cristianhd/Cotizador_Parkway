import React, { useEffect, useState } from "react";
import logo from "../assets/header/Logo.png";
import downButtom from "../assets/header/chevron-circle-down.svg";
import { useAuth0 } from "@auth0/auth0-react";
import axios from "axios";
import ModalCategoryUser from "./ModalCategoryUser";
import Loading from "./Loading";
import { Modal } from "react-bootstrap";

export default function Profile() {
  const [existUser, setExistUser] = useState(true);
  const [infoUser, setInfoUser] = useState();

  const { user, isAuthenticated, isLoading, getAccessTokenSilently } =
    useAuth0();

  useEffect(() => {
    const callApiProtected = async () => {
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
    callApiProtected();
  }, [getAccessTokenSilently, user]);
  console.log(existUser);
  console.log(infoUser);
  console.log("load", isLoading, "Auth", isAuthenticated, "info", infoUser);

  return (
    <>
      {!existUser && <ModalCategoryUser />}
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
