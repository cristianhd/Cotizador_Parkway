import React from "react";
import { Col, Form, Row } from "react-bootstrap";
import FloatingInput from "../FloatingInput";

export default function StepOneFormAsistencias({ form, handleOnChangeForm }) {
  return (
    <>
      <Row className="m-1">
        <Form.Group className="m-1" as={Col}>
          <FloatingInput
            name="title"
            labelName="Nombre Asistencia"
            value={form.title}
            onChange={(e) => handleOnChangeForm(e)}
          />
        </Form.Group>
      </Row>
      <Row className="m-1">
        <Form.Group className="m-1" as={Col}>
          <FloatingInput
            name="destinationName"
            labelName="Destino"
            value={form.destinationName}
            onChange={(e) => handleOnChangeForm(e)}
          />
        </Form.Group>
      </Row>
      <Row className="m-1">
        <Form.Group className="m-1" as={Col}>
          <FloatingInput
            name="priceAdult"
            type="number"
            min="0"
            labelName="Precio"
            value={form.priceAdult}
            onChange={(e) => handleOnChangeForm(e)}
          />
        </Form.Group>
      </Row>
      <Row className="m-1">
        <Form.Group className="m-1" as={Col}>
          <FloatingInput
            name="providerUser"
            labelName="Proveedor"
            value={form.providerUser}
            onChange={(e) => handleOnChangeForm(e)}
          />
        </Form.Group>
      </Row>
    </>
  );
}
