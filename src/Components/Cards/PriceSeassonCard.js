import React, { useState } from "react";
import { Card, Col, Collapse } from "react-bootstrap";

export default function PriceSeassonCard({ priceAdult }) {
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
      <div className="m-1">
        {priceAdult.map((priceRoom, index) => (
          <ul key={index} className="px-1 m-0">
            <span onClick={() => handleActiveCollapse(index)}>
              {priceRoom[0].slice(0, -2)}
            </span>
            <Collapse in={open === index}>
              <Card.Text>
                Baja :{pesosFormat.format(priceRoom[1][0])} <br></br>
                Alta :{pesosFormat.format(priceRoom[1][1])}
              </Card.Text>
            </Collapse>
          </ul>
        ))}
      </div>
    </Col>
  );
}
