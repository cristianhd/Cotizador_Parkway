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
    if (index === open) {
      setOpen("");
    } else {
      setOpen(index);
    }
  }

  return (
    <div>
      {roundTrip ? (
        <div className="m-1">
          {priceAdult.map((priceRange, index) => (
            <ul key={index} className="px-1 m-0">
              <span onClick={() => handleActiveCollapse(index)}>
                {priceRange[0]}-{priceRange[1]} personas
              </span>
              <Collapse in={open === index}>
                <Card.Text>
                  <span className="spanPrice">
                    {pesosFormat.format(priceRange[2])}
                  </span>
                  <span className="spanLigth"> /grupo</span>
                </Card.Text>
              </Collapse>
            </ul>
          ))}
        </div>
      ) : (
        <div className="m-1">
          {priceAdult.map((price, index) => (
            <ul key={index} className="px-1 m-0">
              <Card.Text>
                {index === 0 ? <span>ida: </span> : <span>vuelta: </span>}

                <span className="spanPrice">
                  {pesosFormat.format(price[1])}
                </span>
                <span className="spanLigth"> /grupo</span>
              </Card.Text>
            </ul>
          ))}
        </div>
      )}
    </div>
  );
}
