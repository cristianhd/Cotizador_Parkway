import React, { useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import FloatingInput from "../NewProduct/FloatingInput";

export default function EditTitle({
  handleUpdate,
  id,
  typeProduct,
  principalText,
}) {
  const [title, setTitle] = useState(principalText);
  const [validated, setValidated] = useState(false);

  function handleOnSubmitForm(e) {
    const formEvent = e.currentTarget;
    e.preventDefault();

    if (formEvent.checkValidity() === false) {
      e.stopPropagation();
      setValidated(true);
    } else {
      const update = { title: title };
      handleUpdate(id, typeProduct, update);
      setValidated(false);
    }
  }

  return (
    <Form
      noValidate
      validated={validated}
      onSubmit={handleOnSubmitForm}
      autoComplete="off"
    >
      <Row className="m-1">
        <Form.Group className="" as={Col}>
          <FloatingInput
            name="title"
            labelName="Título"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </Form.Group>
      </Row>
      <Row className="m-1 p-1">
        <div className="w-100 m-1 p-1 d-flex justify-content-end">
          <Button type="submit">Guardar</Button>
        </div>
      </Row>
    </Form>
  );
}
