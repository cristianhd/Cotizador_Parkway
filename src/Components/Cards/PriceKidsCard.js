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
    <Col className="m-1 p-0">
      <Card.Title>Precios Niños</Card.Title>
      <div className="m-1">
        {priceKids &&
          priceKids.map((priceKids, index) => (
            <ul key={index} className="px-1 m-0">
              <Card.Text>
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
              </Card.Text>
            </ul>
          ))}
      </div>
    </Col>
  );
}
