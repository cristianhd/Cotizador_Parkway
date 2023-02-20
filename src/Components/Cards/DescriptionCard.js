import React from "react";
import { Card, Col, Row } from "react-bootstrap";
import FooterDescription from "./FooterDescription";

export default function DescriptionCard({
  description,
  categoryAccommodation,
  numberNigths,
  roundTrip,
  maxPeople,
  minPeople,
  includes,
}) {
  return (
    <div className="m-1 p-1 h-100 d-flex flex-column justify-content-around">
      <p className="description m-1">{description}</p>
      <FooterDescription
        categoryAccommodation={categoryAccommodation}
        numberNigths={numberNigths}
        roundTrip={roundTrip}
        maxPeople={maxPeople}
        minPeople={minPeople}
        includes={includes}
      />
    </div>
  );
}
