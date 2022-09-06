import React, { useState } from "react";
import FloatingInput from "./FloatingInput";
import {
  Button,
  Col,
  FloatingLabel,
  Form,
  InputGroup,
  Modal,
  Row,
} from "react-bootstrap";

export default function FormActividades({ handleSave }) {
  const [validated, setValidated] = useState(false);
  const [form, setForm] = useState({});

  function handleOnChangeForm(e) {
    const name = e.target.name;
    const value = e.target.value;

    setForm({
      ...form,
      [name]: value,
    });
  }
  function handleOnSubmitForm(e) {
    const formEvent = e.currentTarget;
    e.preventDefault();
    if (formEvent.checkValidity() === false) {
      e.stopPropagation();
    } else {
      handleSave(form);
    }
    setValidated(true);
  }

  return (
    <>
      <Modal.Body>
        <Form noValidate validated={validated} onSubmit={handleOnSubmitForm}>
          <Row className="m-1">
            <Form.Group className="" as={Col}>
              <FloatingInput
                name="title"
                labelName="Titulo"
                value={form.title}
                onChange={handleOnChangeForm}
              />
            </Form.Group>

            <Form.Group className="" as={Col}>
              <FloatingInput
                name="destination"
                labelName="Destino"
                value={form.destination}
                onChange={handleOnChangeForm}
              />
            </Form.Group>
          </Row>

          <Row className="m-1">
            <Form.Group className="" as={Col}>
              <FloatingInput
                name="provider"
                labelName="Proveedor"
                value={form.provider}
                onChange={handleOnChangeForm}
              />
            </Form.Group>

            <Form.Group className="" as={Col}>
              <FloatingInput
                name="price"
                labelName="Precio"
                type="number"
                value={form.price}
                onChange={handleOnChangeForm}
              />
            </Form.Group>
          </Row>
          <Row className="m-1">
            <Form.Group className="" as={Col}>
              <FloatingInput
                name="description"
                labelName="Descripción"
                value={form.description}
                onChange={handleOnChangeForm}
              />
            </Form.Group>
          </Row>

          <Modal.Footer>
            <Button variant="primary" type="submit">
              Guardar
            </Button>
          </Modal.Footer>
        </Form>
      </Modal.Body>
    </>
  );
}
