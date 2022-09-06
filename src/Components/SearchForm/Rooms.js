import React from "react";
import Form from "react-bootstrap/esm/Form";
import { FloatingLabel } from "react-bootstrap";

export default function Rooms({ value, handleOnChange }) {
  
  return (
    <FloatingLabel className="rooms w-100 m-0 p-1 rounded" label="Hab">
      <Form.Control
        required
        className="text-center border-0 shadow-none"
        type="number"
        name="rooms"
        value={value}
        onChange={handleOnChange}
        placeholder="Ingrese la cantidad de habitaciones"
        autoComplete="off"
      ></Form.Control>
    </FloatingLabel>
  );
}
