import React from "react";
import { Card, Col, Row } from "react-bootstrap";
import EditProduct from "./EditProduct";
import FooterDescription from "./FooterDescription";

export default function DescriptionCard({
  id,
  typeProduct,
  description,
  categoryAccommodation,
  numberNigths,
  roundTrip,
  maxPeople,
  minPeople,
  includes,
}) {
  return (
    <div className="description m-1 p-1 h-100 d-flex flex-column justify-content-around">
      <p className=" m-1">{description} </p>
      <EditProduct
        id={id}
        typeProduct={typeProduct}
        nameItemEdit="Descripción"
        description={description}
        includes={includes}
      />
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
