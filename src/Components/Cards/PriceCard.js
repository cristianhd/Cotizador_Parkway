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
  const renderPriceKids = priceKids ? priceKids.length > 0 : undefined;
  return (
    <Card.Body className="w-100 m-2 p-2" as={Row}>
      <Col className="price-adult m-1 p-1">
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
      </Col>
      {renderPriceKids && <PriceKidsCard priceKids={priceKids}></PriceKidsCard>}
    </Card.Body>
  );
}
