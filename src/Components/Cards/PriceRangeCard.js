import React from "react";
import { Card, Col } from "react-bootstrap";

export default function PriceRangeCard({ priceAdult }) {
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
        {priceAdult.map((priceRange, index) => (
          <ul key={index} className="px-1">
            <Card.Text>
              {priceRange[1][0]}-{priceRange[1][1]} persona(s) :{" "}
              {pesosFormat.format(priceRange[1][2])}
            </Card.Text>
          </ul>
        ))}
      </div>
    </Col>
  );
}