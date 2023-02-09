import React from "react";
import { Card, Col } from "react-bootstrap";

export default function PriceKidsCard({ priceKids }) {
  var options = {
    style: "currency",
    currency: "COP",
    minimumFractionDigits: "0",
  };
  var pesosFormat = new Intl.NumberFormat("es-CO", options);

  return (
    <Col className="price-kids m-1 p-0 ">
      <Card.Title>Niño</Card.Title>

      {priceKids &&
        priceKids.map((priceKids, index) => (
          <ul key={index} className="px-1 m-0">
            {priceKids.length === 0 ? (
              <ul>n/a</ul>
            ) : (
              <div>
                {priceKids[0]} - {priceKids[1]} años: <br></br>
                <span className="spanPrice">
                  {pesosFormat.format(priceKids[2])}
                </span>
                <span className="spanLigth"> /niño</span>
              </div>
            )}
          </ul>
        ))}
    </Col>
  );
}
