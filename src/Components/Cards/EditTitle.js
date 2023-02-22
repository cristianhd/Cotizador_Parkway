import React from "react";
import { Col, Form, Row } from "react-bootstrap";
import FloatingInput from "../NewProduct/FloatingInput";

export default function EditTitle({ form, handleOnChangeForm }) {
  return (
    <Row className="m-1">
      <Form.Group className="" as={Col}>
        <FloatingInput
          name="title"
          labelName="Título"
          value={form.title}
          onChange={(e) => handleOnChangeForm(e)}
        />
      </Form.Group>
    </Row>
  );
}
