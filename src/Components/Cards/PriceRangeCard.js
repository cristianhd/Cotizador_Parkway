import React, { useState } from "react";
import { Card, Col, Collapse } from "react-bootstrap";

export default function PriceRangeCard({ priceAdult }) {
  var options = {
    style: "currency",
    currency: "COP",
    minimumFractionDigits: "0",
  };
  var pesosFormat = new Intl.NumberFormat("es-CO", options);
  const [open, setOpen] = useState("");

  function handleActiveCollapse(index) {
    if (index === open) {
      setOpen("");
    } else {
      setOpen(index);
    }
  }

  return (
    <Col className="m-1">
      <Card.Title>Precios Adulto</Card.Title>
      <div className="m-1">
        {priceAdult.map((priceRange, index) => (
          <ul key={index} className="px-1">
            <span onClick={() => handleActiveCollapse(index)}>
              {priceRange[1][0]}-{priceRange[1][1]} persona(s)
            </span>
            <Collapse in={open === index}>
              <Card.Text>{pesosFormat.format(priceRange[1][2])}</Card.Text>
            </Collapse>
          </ul>
        ))}
      </div>
    </Col>
  );
}
