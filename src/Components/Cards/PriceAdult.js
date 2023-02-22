import React from "react";
import PriceSeassonCard from "./PriceSeassonCard";
import PriceRoomCard from "./PriceRoomCard";
import PriceRouteCard from "./PriceRouteCard";
import PriceRangeCard from "./PriceRangeCard";
import PriceAsistenciaCard from "./PriceAsistenciaCard";
import { Card } from "react-bootstrap";

export default function PriceAdult({
  typeProduct,
  priceAdult,
  roundTrip,
  days,
  pax,
}) {
  return (
    <div className="price-adult w-50 m-1 p-0">
      <Card.Title>Adulto</Card.Title>
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
        <PriceAsistenciaCard
          days={days}
          pax={pax}
          priceAdult={priceAdult}
        ></PriceAsistenciaCard>
      )}
    </div>
  );
}
