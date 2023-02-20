import React from "react";
import { Card } from "react-bootstrap";
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
  return (
    <Card.Body className="price-card w-100 m-2 p-2 d-flex flex-column flex-sm-column flex-md-row justify-content-around">
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
          <PriceAsistenciaCard priceAdult={priceAdult}></PriceAsistenciaCard>
        )}
      </div>
      <PriceKidsCard priceKids={priceKids}></PriceKidsCard>
    </Card.Body>
  );
}
