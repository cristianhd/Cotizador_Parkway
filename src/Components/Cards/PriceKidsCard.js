import React, { useState } from "react";
import { Card, Collapse } from "react-bootstrap";

export default function PriceKidsCard({ priceKids }) {
  var options = {
    style: "currency",
    currency: "COP",
    minimumFractionDigits: "0",
  };
  var pesosFormat = new Intl.NumberFormat("es-CO", options);
  const [open, setOpen] = useState("");
  const existPriceKids = priceKids && priceKids[0] ? true : false;

  function handleActiveCollapse(index) {
    if (index === open) {
      setOpen("");
    } else {
      setOpen(index);
    }
  }

  return (
    <div className="price-kids w-50 m-1 p-0">
      {existPriceKids && <Card.Title>Niño</Card.Title>}
      {priceKids &&
        priceKids.map((priceKids, index) => (
          <ul key={index} className="p-0 m-0">
            {priceKids.length > 0 && (
              <div className="mx-2">
                <span
                  className="span-pointer"
                  onClick={() => handleActiveCollapse(index)}
                >
                  {priceKids[0]} - {priceKids[1]} años
                </span>
                <Collapse in={open === index}>
                  <Card.Text>
                    <span className="spanPrice">
                      {pesosFormat.format(priceKids[2])}
                    </span>
                    <span className="spanLigth"> /niño</span>
                  </Card.Text>
                </Collapse>
              </div>
            )}
          </ul>
        ))}
    </div>
  );
}
