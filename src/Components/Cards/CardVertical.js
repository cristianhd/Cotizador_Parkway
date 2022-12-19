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
  maxPeople,
  minPeople,
}) {
  return (
    <div className="card-vertical">
      <div className="d-flex flex-column w-100">
        <PhotoCard
          photo={photo}
          pricipalText={title}
          categoryAccommodation={categoryAccommodation}
          numberNigths={numberNigths}
          transport={transport}
          roundTrip={roundTrip}
          maxPeople={maxPeople}
          minPeople={minPeople}
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
