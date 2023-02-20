import React, { useState } from "react";
import { Card, Col, Collapse } from "react-bootstrap";
import { FirstCharUpperCaseStr } from "../../Utils/FirstCharUpperCaseStr";

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
    <div className="m-1">
      {priceAdult.map((priceRoom, index) => (
        <ul key={index} className="px-1 m-0">
          <span
            className="span-pointer"
            onClick={() => handleActiveCollapse(index)}
          >
            {FirstCharUpperCaseStr(priceRoom[0])}
          </span>
          <Collapse in={open === index}>
            <Card.Text>
              <span className="spanPrice">
                {"TA " + pesosFormat.format(priceRoom[1])}
              </span>
              <span className="spanLigth"> /persona</span>
              <br />
              <span className="spanPrice">
                {"TB" + pesosFormat.format(priceRoom[2])}
              </span>
              <span className="spanLigth"> /persona</span>
            </Card.Text>
          </Collapse>
        </ul>
      ))}
    </div>
  );
}
