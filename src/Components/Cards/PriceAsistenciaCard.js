import React from "react";
import { Card } from "react-bootstrap";

export default function priceAsistenciaCard({ priceAdult, pax, days }) {
  var options = {
    style: "currency",
    currency: "COP",
    minimumFractionDigits: "0",
  };
  var pesosFormat = new Intl.NumberFormat("es-CO", options);
  const total = priceAdult * days * pax;
  const totalPesos = pesosFormat.format(total);

  return (
    <div className="m-1">
      <ul className="px-1">
        <Card.Text>
          <span className="spanPrice">{pesosFormat.format(priceAdult)}</span>
          <span className="spanLigth"> /persona x dia</span>
        </Card.Text>
      </ul>
      <ul className="px-1">
        <Card.Text>
          <span className="spanPrice">{totalPesos}</span>
          <span className="spanLigth"> /total</span>
        </Card.Text>
      </ul>
    </div>
  );
}
