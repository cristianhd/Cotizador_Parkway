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
    <Col className="m-1 p-0">
      <Card.Title>Precios Adulto</Card.Title>
      <div className="m-1">
        <ul className="px-1">
          <Card.Text>
            <span className="spanPrice">{pesosFormat.format(priceAdult)}</span>
            <span className="spanLigth"> /persona x dia</span>
          </Card.Text>
        </ul>
      </div>
    </Col>
  );
}
