import React, { useState } from "react";
import Form from "react-bootstrap/esm/Form";
import Pax from "../Components/Pax";
import user from "../assets/user-icon.svg";
import bed from "../assets/card_product/bed.svg";
import "../style/room.css";
import { FloatingLabel } from "react-bootstrap";

export default function Rooms() {
  const [rooms, setRooms] = useState("1");
  const [pax, setPax] = useState("2");

  const handleOnchange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    if (name === "rooms") setRooms(value);
    if (name === "pax") setPax(value);
  };
  return (
    <div className="rooms w-100 d-flex flex-row align-items-center rounded">
      <FloatingLabel className="w-100 mx-1 " label="Hab">
        <Form.Control
          className="text-center border-0 shadow-none"
          type="number"
          name="rooms"
          min="1"
          max="5"
          value={rooms}
          onChange={handleOnchange}
          placeholder="Ingrese la cantidad de habitaciones"
        ></Form.Control>
      </FloatingLabel>
      <Pax handleOnchange={handleOnchange} pax={pax} />
    </div>
  );
}
