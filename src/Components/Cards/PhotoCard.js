import React from "react";
import SpanCard from "./SpanCard";
import "../../style/card.css";
import CarrouselCard from "./CarrouselCard";

export default function PhotoCard({
  pricipalText,
  photo,
  subtitleText,
  categoryAccommodation,
  numberNigths,
  transport,
  roundTrip,
  maxPeople,
  minPeople,
}) {
  return (
    <div className="photo-card">
      <CarrouselCard />
    </div>
  );
}
