import React from "react";
import { Card } from "react-bootstrap";
import NavigationCard from "./NavigationCard";
import PhotoCard from "./PhotoCard";

export default function CardHorizontal({
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
}) {
  console.log(categoryAccommodation);
  const listSpanText = [
    categoryAccommodation,
    `${numberNigths} noches`,
    transport,
  ];
  const destination = destinationName.map((destination, index) =>
    destinationName.length - 1 === index
      ? destination[1]
      : `${destination[1]} - `
  );

  return (
    <div className="d-flex m-2 justify-content-center">
      <div className="card-horizontal d-flex">
        <PhotoCard
          photo={photo}
          pricipalText={title}
          subtitleText={destination}
          listSpanText={listSpanText}
        ></PhotoCard>
        <NavigationCard
          priceKids={priceKids}
          priceAdult={priceAdult}
          typeProduct={typeProduct}
          description={description}
        ></NavigationCard>
      </div>
    </div>
  );
}
