import React from "react";
import { Col, FloatingLabel, Form, Row } from "react-bootstrap";
import Includes from "../Includes";

export default function StepFiveFormPlanes({
  form,
  includesForm,
  handleOnChangeForm,
  handleOnChangeIncludes,
}) {
  return (
    <>
      <Row className="m-1">
        <Form.Group className="p-3">
          <FloatingLabel label="Descripción" className="m-1">
            <Form.Control
              required
              className="shadow-none"
              as="textarea"
              maxLength="500"
              placeholder="Escribe una descripción"
              name="description"
              value={form.description}
              onChange={handleOnChangeForm}
            />
          </FloatingLabel>
        </Form.Group>
        <Form.Group className="p-3">
          <Includes
            handleOnChangeIncludes={handleOnChangeIncludes}
            form={form}
            includesForm={includesForm}
          />
        </Form.Group>
      </Row>
    </>
  );
}
