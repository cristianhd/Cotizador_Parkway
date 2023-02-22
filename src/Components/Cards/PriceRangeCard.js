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
    <div className="m-1">
      {Array.isArray(priceAdult) > 0 &&
        priceAdult.map((priceRange, index) => (
          <ul key={index} className="px-1 m-0">
            <span className="span-pointer" onClick={() => handleActiveCollapse(index)}>
              {priceRange[0]}-{priceRange[1]} persona(s)
            </span>
            <Collapse in={open === index}>
              <Card.Text>
                <span className="spanPrice">
                  {pesosFormat.format(priceRange[2])}
                </span>
                <span className="spanLigth"> /persona</span>
              </Card.Text>
            </Collapse>
          </ul>
        ))}
    </div>
  );
}
