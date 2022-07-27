import React from "react";
import { FloatingLabel } from "react-bootstrap";
import Form from "react-bootstrap/esm/Form";

export default function pax({ handleOnChange, value }) {
  return (
    <FloatingLabel className="pax w-100 m-0 p-1 rounded" label="Pax">
      <Form.Control
        required
        className="text-center border-0 shadow-none"
        type="number"
        name="pax"
        min="1"
        value={value}
        onChange={handleOnChange}
        placeholder="Ingrese la cantidad de pasajeros"
        autoComplete="off"
      ></Form.Control>
    </FloatingLabel>
  );
}
