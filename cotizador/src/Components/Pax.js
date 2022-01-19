import React from 'react'
import Form from "react-bootstrap/esm/Form";
import user from "../assets/user-icon.svg";

export default function pax() {
    return (
        <div className="room-wrap text-center border">
        <div>
          <span>Pasajeros</span>
        </div>
        <div className="d-flex flex-row justify-content-around">
          <div className="d-flex flex-row">
            <div className="icon p-1 align-self-center">
              <img src={user} alt="user"></img>
            </div>
            <Form.Control className="input-room" placeholder="2"></Form.Control>
          </div>
          
        </div>
      </div>
    )
}
