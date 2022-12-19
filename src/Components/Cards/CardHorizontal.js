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
  minPeople,
  maxPeople,
  roundTrip,
}) {
  // const listSpanText = [
  //   categoryAccommodation,
  //   `${numberNigths} noches`,
  //   transport,
  // ];
  const destination =
    Array.isArray(destinationName) &&
    destinationName.map((destination, index) =>
      destinationName.length - 1 === index
        ? destination
        : `${destination} - `
    );

  return (
    <div className="d-flex m-2 justify-content-center">
      <div className="card-horizontal d-flex">
        <PhotoCard
          photo={photo}
          pricipalText={title}
          subtitleText={
            typeProduct === "hospedajes" ? destinationName : destination
          }
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
          typeProduct={typeProduct}
          description={description}
        ></NavigationCard>
      </div>
    </div>
  );
}
