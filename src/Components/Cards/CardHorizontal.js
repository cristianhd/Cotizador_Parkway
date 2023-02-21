import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { deleteProduct, getProductbyId } from "../../Redux/action";
import DeleteProduct from "./DeleteProduct";
import ModalDelete from "./ModalDelete";
import NavigationCard from "./NavigationCard";
import PhotoCard from "./PhotoCard";

export default function CardHorizontal({
  id,
  title,
  photo,
  categoryAccommodation,
  destinationName,
  numberNigths,
  description,
  priceKids,
  priceAdult,
  typeProduct,
  minPeople,
  maxPeople,
  roundTrip,
}) {
  const destination =
    Array.isArray(destinationName) &&
    destinationName.map((destination, index) =>
      destinationName.length - 1 === index ? destination : `${destination} - `
    );

  return (
    <div className="card-horizontal ">
      <div className="d-flex flex-column flex-sm-column flex-md-row">
        <PhotoCard
          id={id}
          photo={photo}
          principalText={title}
          subtitleText={
            typeProduct === "hospedajes" ? destinationName : destination
          }
          typeProduct={typeProduct}
        ></PhotoCard>
        <NavigationCard
          id={id}
          priceKids={priceKids}
          priceAdult={priceAdult}
          typeProduct={typeProduct}
          description={description}
          categoryAccommodation={categoryAccommodation}
          numberNigths={numberNigths}
          roundTrip={roundTrip}
          maxPeople={maxPeople}
          minPeople={minPeople}
        ></NavigationCard>
        <DeleteProduct id={id} typeProduct={typeProduct} />
      </div>
    </div>
  );
}
