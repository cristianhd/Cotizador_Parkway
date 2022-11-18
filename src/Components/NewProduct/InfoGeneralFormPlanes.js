import React, { useState } from "react";
import { Col, Form, Row } from "react-bootstrap";
import FloatingInput from "./FloatingInput";

export default function InfoGeneralFormPlanes({ handleOnChangeForm, form }) {
  // const [form, setForm] = useState({
  //   title: "",
  //   destination: "",
  //   transport: "",
  //   providerUser: "",
  // });
  return (
    <>
      <Row className="m-1">
        <Form.Group className="" as={Col}>
          <FloatingInput
            name="title"
            labelName="Titulo"
            value={form.title}
            onChange={(e) => handleOnChangeForm(e)}
          />
        </Form.Group>
      </Row>

      <Row className="m-1">
        <Form.Group className="" as={Col}>
          <FloatingInput
            name="destination"
            labelName="Destino"
            value={form.destination}
            onChange={(e) => handleOnChangeForm(e)}
          />
          <Form.Group className="ps-1">
            <Form.Check type="switch" label="Multidestino" />
          </Form.Group>
        </Form.Group>
      </Row>

      <Row className="m-1">
        <Form.Group className="" as={Col}>
          <FloatingInput
            name="transport"
            labelName="Transporte"
            value={form.transport}
            onChange={(e) => handleOnChangeForm(e)}
          />
        </Form.Group>

        <Form.Group className="" as={Col}>
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
