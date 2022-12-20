import React from "react";
import { Card, Col, Row } from "react-bootstrap";

export default function DescriptionCard({ description }) {
  return (
    <Card.Body className="m-1 p-1" as={Row}>
      <Col>
        <Card.Title>Descripción</Card.Title>
        <div className="m-1 description">{description}</div>
      </Col>
    </Card.Body>
  );
}
