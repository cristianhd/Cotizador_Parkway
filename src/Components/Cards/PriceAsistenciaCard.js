import React from "react";
import { Card, Col } from "react-bootstrap";

export default function priceAsistenciaCard({ priceAdult }) {
  var options = {
    style: "currency",
    currency: "COP",
    minimumFractionDigits: "0",
  };
  var pesosFormat = new Intl.NumberFormat("es-CO", options);
  return (
    <Col className="m-1">
      <Card.Title>Precios Adulto</Card.Title>
      <div className="m-1">
        <ul className="px-1">
          <Card.Text>{pesosFormat.format(priceAdult)}</Card.Text>
        </ul>
      </div>
    </Col>
  );
}
