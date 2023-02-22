import React from "react";
import { Col, FloatingLabel, Form, Row } from "react-bootstrap";
import Includes from "../NewProduct/Includes";

export default function EditDescription({
  typeProduct,
  form,
  handleOnChangeForm,
  handleOnChangeIncludes,
}) {
  const renderIncludesForm =
    typeProduct === "planes" || typeProduct === "hospedajes";
  return (
    <>
      <Row className="m-1">
        <Form.Group as={Col} className="p-3">
          <FloatingLabel label="Descripción" className="m-1">
            <Form.Control
              required
              className="shadow-none"
              as="textarea"
              maxLength="255"
              placeholder="Escribe una descripción"
              name="description"
              value={form.description}
              onChange={handleOnChangeForm}
            />
          </FloatingLabel>
        </Form.Group>
        {renderIncludesForm && (
          <Form.Group className="p-3">
            <Includes
              handleOnChangeIncludes={handleOnChangeIncludes}
              form={form}
            />
          </Form.Group>
        )}
      </Row>
    </>
  );
}
