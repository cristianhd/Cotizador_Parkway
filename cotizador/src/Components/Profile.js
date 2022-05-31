import React, { useEffect, useState } from 'react'
import logo from "../assets/header/Logo.png";
import downButtom from "../assets/header/chevron-circle-down.svg";
import { useAuth0 } from "@auth0/auth0-react";
import axios from 'axios';

export default function Profile() {

const [existUser,setExistUser] = useState(null)
      
  const {
    user,
    isAuthenticated,
    getAccessTokenSilently,
  } = useAuth0();

  useEffect(() => {
    const callApiProtected = async () => {
      try {
        const token = await getAccessTokenSilently();
        const sub = user.sub;
        console.log(sub)
        const response = await axios.get(
            `http://localhost:3001/users/exist?sub=${sub}`,
            {
              headers: {
                authorization: `Bearer ${token}`,
              },
            }
          );
       
      
        setExistUser(response.data);
      } catch (error) {
        console.error(error.message);
      }
    };
    callApiProtected()
},[getAccessTokenSilently,user])
console.log(existUser)

  return (
    <div>
        <div className="d-flex justify-content-center">
        <div className="profile-logo">
          <img src={isAuthenticated ? user.picture : logo} alt="profile-logo" />
        </div>
      </div>

      <div className="down-buttom">
        <div>
          <h5>{isAuthenticated ? user.name : <></>}</h5>
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
    </div>
  )
}
