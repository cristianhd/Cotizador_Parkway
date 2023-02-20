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
      {priceKids &&
        priceKids.map((priceKids, index) => (
          <ul key={index} className="p-1 m-1">
            {priceKids.length > 0 && (
              <>
                <Card.Title>Niño</Card.Title>
                <div>
                  {priceKids[0]} - {priceKids[1]} años: <br></br>
                  <span className="spanPrice">
                    {pesosFormat.format(priceKids[2])}
                  </span>
                  <span className="spanLigth"> /niño</span>
                </div>
              </>
            )}
          </ul>
        ))}
    </Col>
  );
}
