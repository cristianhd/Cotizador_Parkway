import React from "react";
import Form from "react-bootstrap/Form";
import DatePicker from "./DatePicker";
import InputPlace from "./InputPlace";
import Rooms from "./Rooms";

export default function Experiencias() {
  return (
    <div className="d-flex justify-content-between border" style={{width:1000}}>
      <Form.Group className="d-flex flex-row">
        <InputPlace name="Destino" />
        <InputPlace name="Origen" />
      </Form.Group>
      <Form.Group>
        <DatePicker />
      </Form.Group>
      <Form.Group>
        <Rooms />
      </Form.Group>
    </div>
  );
}
