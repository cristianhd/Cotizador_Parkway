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
    if (index === open) {
      setOpen("");
    } else {
      setOpen(index);
    }
  }

  return (
    <Col className="m-1 p-0">
      <Card.Title>Precios Adulto</Card.Title>
      <div className="m-1">
        {priceAdult.map((priceRoom, index) => (
          <ul key={index} className="px-1 m-0">
            <span onClick={() => handleActiveCollapse(index)}>
              {priceRoom[0]}
            </span>
            <Collapse in={open === index}>
              <Card.Text>
                Baja :
                <span className="spanPrice">
                  {pesosFormat.format(priceRoom[1])}
                </span>
                <span className="spanLigth"> /persona</span> <br></br>
                Alta :
                <span className="spanPrice">
                  {pesosFormat.format(priceRoom[2])}
                </span>
                <span className="spanLigth"> /persona</span>
              </Card.Text>
            </Collapse>
          </ul>
        ))}
      </div>
    </Col>
  );
}
