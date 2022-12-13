import React from "react";
import { Card, Col } from "react-bootstrap";

export default function PriceRouteCard({ roundTrip, priceAdult }) {
  return (
    <Col className="m-1">
      <Card.Title>Precios Adulto</Card.Title>
      {roundTrip ? (
        <div className="m-1">
          {priceAdult.map((priceRange, index) => (
            <ul key={index} className="px-1">
              <Card.Text>
                {priceRange[1][0]}-{priceRange[1][1]} años : {priceRange[1][2]}
              </Card.Text>
            </ul>
          ))}
        </div>
      ) : (
        <div className="m-1">
          {priceAdult.map((priceRoom, index) => (
            <ul key={index} className="px-1">
              <Card.Text>
                {priceRoom[0]} : {priceRoom[1]}
              </Card.Text>
            </ul>
          ))}
        </div>
      )}
    </Col>
  );
}
