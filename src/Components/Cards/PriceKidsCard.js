import React from "react";
import { Card, Col } from "react-bootstrap";

export default function PriceKidsCard({ priceKids }) {
  var options = {
    style: "currency",
    currency: "COP",
    minimumFractionDigits: "0",
  };
  var pesosFormat = new Intl.NumberFormat("es-CO", options);
  console.log(priceKids);
  return (
    <Col className="m-1">
      <Card.Title>Precios Niños</Card.Title>
      <div className="m-1">
        {priceKids && priceKids.length === 0 && <ul>n/a</ul>}
        {priceKids && priceKids.map((priceKids, index) => (
          <ul key={index} className="px-1">
            <Card.Text>
              {priceKids[1][0]}-{priceKids[1][1]} años :{" "}
              {pesosFormat.format(priceKids[1][2])}
            </Card.Text>
          </ul>
        ))}
      </div>
    </Col>
  );
}
