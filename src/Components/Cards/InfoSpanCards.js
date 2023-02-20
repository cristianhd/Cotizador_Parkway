import React from "react";
import SpanCard from "./SpanCard";

export default function InfoSpanCards({
  categoryAccommodation,
  numberNigths,
  roundTrip,
  minPeople,
  maxPeople,
}) {
  return (
    <div className="border-top d-flex flex-wrap justify-content-end">
      {categoryAccommodation && (
        <SpanCard text={`Hospedaje ${categoryAccommodation}`}></SpanCard>
      )}
      {numberNigths && <SpanCard text={`${numberNigths} noches`}></SpanCard>}

      {roundTrip && <SpanCard text="Ida y Vuelta"></SpanCard>}
      {minPeople && maxPeople && (
        <SpanCard text={`${minPeople}-${maxPeople} personas`}></SpanCard>
      )}
    </div>
  );
}
