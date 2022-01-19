import React from "react";
import Form from "react-bootstrap/esm/Form";
import user from "../assets/user-icon.svg";
import bed from "../assets/card_product/bed.svg";
import "../style/room.css"

export default function Rooms() {
  return (
    <div className="room-wrap text-center border">
      <div>
        <span>Habitaciones</span>
      </div>
      <div className="d-flex flex-row justify-content-around">
        <div className="d-flex flex-row">
          <div className="icon p-1 align-self-center">
            <img src={user} alt="user"></img>
          </div>
          <Form.Control className="input-room" placeholder="2"></Form.Control>
        </div>
        <div className="d-flex flex-row ">
          <div className="icon p-1 align-self-center">
            <img src={bed} alt="bed"></img>
          </div>
          <Form.Control className="input-room" placeholder="1"></Form.Control>
        </div>
      </div>
    </div>
  );
}
