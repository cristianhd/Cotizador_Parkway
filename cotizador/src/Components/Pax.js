import React from "react";
import { FloatingLabel } from "react-bootstrap";
import Form from "react-bootstrap/esm/Form";

export default function pax({ handleOnchange, pax }) {
  return (
    <FloatingLabel className="w-100 mx-1" label="Pax">
      <Form.Control
        className="text-center border-0 shadow-none"
        type="number"
        name="pax"
        min="1"
        max=""
        value={pax}
        onChange={handleOnchange}
        placeholder="Ingrese la cantidad de pasajeros"
      ></Form.Control>
    </FloatingLabel>
  );
}
