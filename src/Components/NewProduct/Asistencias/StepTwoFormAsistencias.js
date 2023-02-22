import React from "react";
import { Col, FloatingLabel, Form, Row } from "react-bootstrap";

export default function StepTwoFormAsistencia({ form, handleOnChangeForm }) {
  return (
    <>
      <Row className="m-1">
        <Form.Group as={Col} className="p-3">
          <FloatingLabel label="Descripción" className="m-1">
            <Form.Control
              required
              className="shadow-none"
              as="textarea"
              maxLength="390"
              placeholder="Escribe una descripción"
              name="description"
              value={form.description}
              onChange={handleOnChangeForm}
            />
          </FloatingLabel>
        </Form.Group>
      </Row>
    </>
  );
}
