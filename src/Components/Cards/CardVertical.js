import React from "react";
import NavigationCard from "./NavigationCard";
import PhotoCard from "./PhotoCard";

export default function CardVertical({
  title,
  photo,
  categoryAccommodation,
  destinationName,
  numberNigths,
  description,
  transport,
  priceKids,
  priceAdult,
  typeProduct,
  roundTrip,
  listSpanText,
}) {
  return (
    <div className="card-vertical">
      <div className="d-flex flex-column w-100">
        <PhotoCard
          photo={photo}
          pricipalText={title}
          subtitleText={destinationName}
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
