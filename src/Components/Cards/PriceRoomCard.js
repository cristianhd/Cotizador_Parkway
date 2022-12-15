import React from "react";
import { Card, Col } from "react-bootstrap";

export default function PriceRoomCard({ priceAdult }) {
  return (
    <Col className="m-1">
      <Card.Title>Precios Adulto</Card.Title>
      <div className="m-1">
        {priceAdult &&
          priceAdult.map((priceRoom, index) => (
            <ul key={index} className="px-1">
              <Card.Text>
                {priceRoom[0]} : {priceRoom[1]}
              </Card.Text>
            </ul>
          ))}
      </div>
    </Col>
  );
}
