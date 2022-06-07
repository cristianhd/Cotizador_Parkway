import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";

export default function FormPlanes() {
  return (
    <div>
      <Form>
        <Form.Group className="mb-3">
          <Form.Label>Titulo</Form.Label>
          <Form.Control type="text" placeholder="" />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Proveedor</Form.Label>
          <Form.Control type="text" placeholder="" />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Origen</Form.Label>
          <Form.Control type="text" placeholder="" />
          <Form.Label>Destino</Form.Label>
          <Form.Control type="input" placeholder="" />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Trasporte</Form.Label>
          <Form.Control type="text" placeholder="" />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Habitaciones</Form.Label>
          <Form.Control type="text" placeholder="" />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3">
          
          <Form.Check type="radio" label="Niños" />
          <Form.Label>Price</Form.Label>
          <Form.Control type="text" placeholder="" />
        </Form.Group>
        <Form.Group className="mb-3">
        </Form.Group>
      </Form>
    </div>
  );
}
