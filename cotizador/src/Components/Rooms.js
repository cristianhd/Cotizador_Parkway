import React, { useState } from "react";
import Form from "react-bootstrap/esm/Form";
import Pax from "../Components/Pax";
import user from "../assets/user-icon.svg";
import bed from "../assets/card_product/bed.svg";
import "../style/room.css";
import { FloatingLabel } from "react-bootstrap";

export default function Rooms({ value, handleOnchange }) {
  return (
    <FloatingLabel className="rooms w-100 m-0 p-1 rounded" label="Hab">
      <Form.Control
        required
        className="text-center border-0 shadow-none"
        type="number"
        name="rooms"
        min="1"
        max="5"
        value={value}
        onChange={handleOnchange}
        placeholder="Ingrese la cantidad de habitaciones"
      ></Form.Control>
    </FloatingLabel>
  );
}
