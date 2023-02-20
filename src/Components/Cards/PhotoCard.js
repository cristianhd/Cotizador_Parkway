import React from "react";
import SpanCard from "./SpanCard";
import "../../style/card.css";
import CarrouselCard from "./CarrouselCard";
import CaptionPhotoCard from "./CaptionPhotoCard";

export default function PhotoCard({
  principalText,
  photo,
  subtitleText,
  categoryAccommodation,
  numberNigths,
  roundTrip,
  maxPeople,
  minPeople,
  typeProduct,
}) {
  return (
    <div className="photo-card">
      <CarrouselCard photo={photo} />
      <CaptionPhotoCard
        principalText={principalText}
        subtitleText={subtitleText}
        typeProduct={typeProduct}
      />
    </div>
  );
}
