import React, { useState } from "react";
import { Card, Col, Collapse } from "react-bootstrap";

export default function PriceRouteCard({ roundTrip, priceAdult }) {
  var options = {
    style: "currency",
    currency: "COP",
    minimumFractionDigits: "0",
  };
  var pesosFormat = new Intl.NumberFormat("es-CO", options);
  const [open, setOpen] = useState("");

  function handleActiveCollapse(index) {
    console.log("open", open, "index", index);
    if (index === open) {
      setOpen("");
    } else {
      setOpen(index);
    }
  }

  return (
    <Col className="m-1">
      <Card.Title>Precios Adulto</Card.Title>
      {roundTrip ? (
        <div className="m-1">
          {priceAdult.map((priceRange, index) => (
            <ul key={index} className="px-1 m-0">
              <span onClick={() => handleActiveCollapse(index)}>
                {priceRange[1][0]}-{priceRange[1][1]} años
              </span>
              <Collapse in={open === index}>
                <Card.Text>{priceRange[1][2]}</Card.Text>
              </Collapse>
            </ul>
          ))}
        </div>
      ) : (
        <div className="m-1">
          {priceAdult.map((price, index) => (
            <ul key={index} className="px-1 m-0">
              <Card.Text>
                {price[0]} : {pesosFormat.format(price[1])}
              </Card.Text>
            </ul>
          ))}
        </div>
      )}
    </Col>
  );
}
