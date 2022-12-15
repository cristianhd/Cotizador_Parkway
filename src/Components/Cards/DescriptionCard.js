import React from "react";
import { Card, Col, Row } from "react-bootstrap";

export default function DescriptionCard({ description }) {
  return (
    <Card.Body className="w-100 m-2 p-2" as={Row}>
      <Col className="m-1">
        <Card.Title>Descripción</Card.Title>
        <div className="m-1">{description}</div>
      </Col>
    </Card.Body>
  );
}
