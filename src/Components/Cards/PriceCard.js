import React from "react";
import { Card, Col, Row } from "react-bootstrap";
import PriceSeassonCard from "./PriceSeassonCard";
import PriceRoomCard from "./PriceRoomCard";
import PriceRouteCard from "./PriceRouteCard";
import PriceRangeCard from "./PriceRangeCard";
import PriceKidsCard from "./PriceKidsCard";
import PriceAsistenciaCard from "./PriceAsistenciaCard";

export default function PriceCard({
  priceKids,
  priceAdult,
  typeProduct,
  roundTrip,
}) {
  console.log(typeProduct);
  const renderPriceKids =
    (typeProduct === "traslados" || typeProduct ==="asistencias") ? false : true;
  console.log(renderPriceKids);
  return (
    <Card.Body className="w-100 m-2 p-2" as={Row}>
      {renderPriceKids && <PriceKidsCard priceKids={priceKids}></PriceKidsCard>}
      {typeProduct === "planes" && (
        <PriceRoomCard priceAdult={priceAdult}></PriceRoomCard>
      )}
      {typeProduct === "hospedajes" && (
        <PriceSeassonCard priceAdult={priceAdult}></PriceSeassonCard>
      )}
      {typeProduct === "traslados" && (
        <PriceRouteCard
          priceAdult={priceAdult}
          roundTrip={roundTrip}
        ></PriceRouteCard>
      )}
      {typeProduct === "actividades" && (
        <PriceRangeCard priceAdult={priceAdult}></PriceRangeCard>
      )}
      {typeProduct === "asistencias" && (
        <PriceAsistenciaCard priceAdult={priceAdult}></PriceAsistenciaCard>
      )}
    </Card.Body>
  );
}
