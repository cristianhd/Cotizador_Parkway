import React from "react";
import CardHorizontal from "./CardHorizontal";

export default function CardPlanes({ data }) {
  const listSpanText = [
    data.categoryAccomodation,
    data.numberNight,
    data.transport,
  ];
  return (
    <CardHorizontal
      priceKids={data.priceKids}
      priceAdult={data.priceAdult}
      roundTrip={data.roundTrip}
      typeProduct={data.typeProduct}
      description={data.description}
      listSpanText={listSpanText}
    ></CardHorizontal>
  );
}
