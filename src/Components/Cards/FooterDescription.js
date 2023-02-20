import React from "react";
import IncludesIcons from "./IncludesIcons";
import InfoSpanCards from "./InfoSpanCards";

export default function FooterDescription({
  categoryAccommodation,
  numberNigths,
  roundTrip,
  maxPeople,
  minPeople,
  includes,
}) {
  return (
    <div className="w-100 m-1 d-flex flex-column">
      <IncludesIcons includes={includes} />
      <InfoSpanCards
        categoryAccommodation={categoryAccommodation}
        numberNigths={numberNigths}
        roundTrip={roundTrip}
        maxPeople={maxPeople}
        minPeople={minPeople}
      />
    </div>
  );
}
