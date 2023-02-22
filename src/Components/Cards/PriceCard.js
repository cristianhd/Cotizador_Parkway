import React from "react";
import { Card } from "react-bootstrap";
import EditProduct from "./EditProduct";
import PriceAdult from "./PriceAdult";
import PriceKidsCard from "./PriceKidsCard";

export default function PriceCard({
  id,
  days,
  pax,
  priceKids,
  priceAdult,
  typeProduct,
  roundTrip,
}) {
  return (
    <Card.Body className="price-card m-2 p-2 d-flex flex-column flex-sm-column flex-md-row justify-content-around">
      <PriceAdult
        days={days}
        pax={pax}
        priceAdult={priceAdult}
        typeProduct={typeProduct}
        roundTrip={roundTrip}
      />
      <PriceKidsCard priceKids={priceKids} />
      <EditProduct id={id} typeProduct={id} nameItemEdit="Precios" />
    </Card.Body>
  );
}
