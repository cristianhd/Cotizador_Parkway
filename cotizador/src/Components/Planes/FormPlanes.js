import React from "react";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function FormPlanes() {
  return (
    <div>
      <Form className="p-3">
          <Row>
            <Col md={4} className="p-2">
              <Form.Group className="d-flex flex-row">
                <Form.Label>Columna 1</Form.Label> 
              </Form.Group>
            </Col>
          </Row>
        </Form>
    </div>
  );
}
