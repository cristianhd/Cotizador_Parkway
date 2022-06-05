import React, { useEffect, useState } from "react";
import logo from "../assets/header/Logo.png";
import downButtom from "../assets/header/chevron-circle-down.svg";
import { useAuth0 } from "@auth0/auth0-react";
import axios from "axios";
import ModalCategoryUser from "./ModalCategoryUser";

export default function Profile() {
  const [existUser, setExistUser] = useState(null);

  const { user, isAuthenticated, getAccessTokenSilently } = useAuth0();
  console.log(user);

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
              "Content-Type": "application/json"
            }
          }
        );

        setExistUser(response.data);
      } catch (error) {
        console.error(error.message);
      }
    };
    callApiProtected();
  }, [getAccessTokenSilently, user]);
  console.log(existUser);

  return (
    <div>
      {!existUser && <ModalCategoryUser />}
      <div className="d-flex justify-content-center">
        <div className="profile-logo">
          <img src={user.picture} alt="profile-logo" />
        </div>
      </div>

      <div>
        <h5>{user.name}</h5>
      </div>
    </div>
  );
}
