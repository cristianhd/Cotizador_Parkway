import React from "react";
import { Card, Col } from "react-bootstrap";

export default function priceAsistenciaCard({ priceAdult }) {
  return (
    <Col className="m-1">
      <Card.Title>Precios Adulto</Card.Title>
      <div className="m-1">
        <ul className="px-1">
          <Card.Text>${priceAdult}</Card.Text>
        </ul>
      </div>
    </Col>
  );
}
