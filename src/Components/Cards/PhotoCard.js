import React from "react";
import SpanCard from "./SpanCard";
import "../../style/card.css";
import { Card } from "react-bootstrap";

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
      <img className="img-card" src={photo} alt="photoCard"></img>
      <div className="text-card p-2 d-flex flex-column justify-content-center">
        <div className="mx-2">
          <h3>{pricipalText && pricipalText}</h3>
          <span>{subtitleText && subtitleText}</span>
        </div>
        <div className="my-1 d-flex flex-row">
          {categoryAccommodation && (
            <SpanCard text={categoryAccommodation}></SpanCard>
          )}
          {numberNigths && (
            <SpanCard text={`${numberNigths} noches`}></SpanCard>
          )}
          {transport && <SpanCard text={transport}></SpanCard>}
          {roundTrip && <SpanCard text="Ida y Vuelta"></SpanCard>}
          {minPeople && maxPeople && (
            <SpanCard text={`${minPeople}-${maxPeople} personas`}></SpanCard>
          )}
        </div>
      </div>
    </div>
  );
}
