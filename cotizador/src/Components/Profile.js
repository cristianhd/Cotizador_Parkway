import React, { useEffect, useState } from "react";
import logo from "../assets/header/Logo.png";
import downButtom from "../assets/header/chevron-circle-down.svg";
import { useAuth0 } from "@auth0/auth0-react";
import axios from "axios";
import ModalCategoryUser from "./ModalCategoryUser";

export default function Profile() {
  const [existUser, setExistUser] = useState(true);
  const [infoUser, setInfoUser] = useState();

  const { user, isAuthenticated, getAccessTokenSilently } = useAuth0();
  

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

  return (
    <div>
      {!existUser && <ModalCategoryUser />}

      {infoUser && (
        <div>
          <div className="d-flex justify-content-center">
            <div className="profile-logo">
              <img src={infoUser.picture} alt="profile-logo" />
            </div>
          </div>
          <div>
            <h5>{infoUser.name}</h5>
            <h6>{infoUser.category}</h6>
          </div>
        </div>
      )}
    </div>
  );
}
