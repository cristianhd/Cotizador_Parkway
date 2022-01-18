import React from "react";
import Form from "react-bootstrap/esm/Form";
import user from "../assets/user-icon.svg";
import bed from "../assets/card_product/bed.svg";

export default function Rooms() {
  return (
    <div className="text-center">
      <div>
        <span>Habitaciones</span>
      </div>
      <div className="d-flex flex-row">
        <div className="d-flex flex-row">
          <div className="p-1 align-self-center">
            <img src={user} alt="user"></img>
          </div>
          <Form.Control className="" placeholder="Check-in"></Form.Control>
        </div>
        <div className="d-flex flex-row">
          <div className="p-1 align-self-center">
            <img src={bed} alt="bed"></img>
          </div>
          <Form.Control className="" placeholder="Check-out"></Form.Control>
        </div>
      </div>
    </div>
  );
}
