import React from "react";
import { Card, Col } from "react-bootstrap";

export default function PriceSeassonCard({ priceAdult }) {
  return (
    <Col className="m-1">
      <Card.Title>Precios Adulto</Card.Title>
      <div className="m-1">
        {priceAdult.map((priceRoom, index) => (
          <ul key={index} className="px-1">
            <Card.Subtitle>{priceRoom[0]}</Card.Subtitle>
            <Card.Text>
              Temporada Baja : {priceRoom[1][0]} Temporada Alta:
              {priceRoom[1][1]}
            </Card.Text>
          </ul>
        ))}
      </div>
    </Col>
  );
}
