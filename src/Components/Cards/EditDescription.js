import React, { useState } from "react";
import { Button, Col, FloatingLabel, Form, Row } from "react-bootstrap";
import Includes from "../NewProduct/Includes";

export default function EditDescription({ id, typeProduct, handleUpdate }) {
  const [form, setForm] = useState({
    description: "",
    includes: { food: "", route: "", visit: "", transport: "" },
  });
  const [validated, setValidated] = useState(false);

  function handleOnSubmitForm(e) {
    const formEvent = e.currentTarget;
    e.preventDefault();

    if (formEvent.checkValidity() === false) {
      e.stopPropagation();
      setValidated(true);
    } else {
      const update = { ...form };
      handleUpdate(id, typeProduct, update);
      setValidated(false);
    }
  }
  function handleOnChangeForm(e) {
    const name = e.target.name;
    const value = e.target.value;
    setForm({ ...form, [name]: value });
  }
  function handleOnChangeIncludes(name, includesInput) {
    setForm({
      ...form,
      includes: { ...form.includes, [name]: includesInput },
    });
  }
  const renderIncludesForm =
    typeProduct === "planes" || typeProduct === "hospedajes";
  return (
    <Form
      noValidate
      validated={validated}
      onSubmit={handleOnSubmitForm}
      autoComplete="off"
    >
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
              onChange={(e) => handleOnChangeForm(e)}
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
      <Row className="m-1 p-1">
        <div className="w-100 m-1 p-1 d-flex justify-content-end">
          <Button type="submit">Guardar</Button>
        </div>
      </Row>
    </Form>
  );
}
