import React, { useState } from "react";
import {
  Button,
  Col,
  FloatingLabel,
  Form,
  InputGroup,
  Modal,
  Row,
} from "react-bootstrap";

export default function FormTraslados({ handleSave }) {
  const [validated, setValidated] = useState(false);
  const [form, setForm] = useState({});

  function handleOnChangeForm(e) {
    const name = e.target.name;
    const value = e.target.value;
    console.log(name, value);
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
            <Form.Group as={Col}>
              <InputGroup className="p-3">
                <InputGroup.Text>Origen</InputGroup.Text>
                <Form.Control
                  required
                  name="origin"
                  type="input"
                  placeholder=""
                  value={form.origin}
                  onChange={handleOnChangeForm}
                />
              </InputGroup>
            </Form.Group>
            <Form.Group as={Col}>
              <InputGroup className="p-3">
                <InputGroup.Text>Destino</InputGroup.Text>
                <Form.Control
                  required
                  name="destination"
                  type="input"
                  placeholder=""
                  value={form.destination}
                  onChange={handleOnChangeForm}
                />
              </InputGroup>
            </Form.Group>
          </Row>
          <Row className="m-1">
            <Form.Group as={Col} className="p-3">
              <InputGroup>
                <InputGroup.Text>Proveedor</InputGroup.Text>
                <Form.Control
                  name="provider"
                  type="input"
                  placeholder=""
                  value={form.provider}
                  onChange={handleOnChangeForm}
                  required
                />
              </InputGroup>
            </Form.Group>
            <Form.Group as={Col} className="p-3">
              <InputGroup>
                <InputGroup.Text>$ COP</InputGroup.Text>
                <Form.Control
                  name="price"
                  onChange={handleOnChangeForm}
                  required
                />
              </InputGroup>
            </Form.Group>
          </Row>
          <Row className="m-1">
            <Form.Group as={Col} className="p-3">
              <FloatingLabel required label="Descripcion" className="m-1">
                <Form.Control
                  required
                  as="textarea"
                  placeholder="Escribe una descripción"
                  name="description"
                  value={form.description}
                  onChange={handleOnChangeForm}
                />
              </FloatingLabel>
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
