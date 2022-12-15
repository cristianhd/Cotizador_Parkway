import React from "react";
import { Card } from "react-bootstrap";
import NavigationCard from "./NavigationCard";
import PhotoCard from "./PhotoCard";

export default function CardHorizontal({
  priceKids,
  priceAdult,
  roundTrip,
  typeProduct,
  description,
  listSpanText,
}) {
  return (
    <div className="card-horizontal">
      <div className="d-flex w-100">
        <PhotoCard
          photo="https://i.pinimg.com/564x/dc/a2/04/dca2046e6525ed56ca76c76f724cae0c.jpg"
          pricipalText="Conoce la Güajira"
          subtitleText="Guajira,Colombia"
          listSpanText={listSpanText}
        ></PhotoCard>
        <NavigationCard
          priceKids={priceKids}
          priceAdult={priceAdult}
          roundTrip={roundTrip}
          typeProduct={typeProduct}
          description={description}
        ></NavigationCard>
      </div>
    </div>
  );
}
