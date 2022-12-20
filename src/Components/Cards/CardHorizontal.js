import React, { useState } from "react";
import { Button, Card } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { deleteProduct } from "../../Redux/action";
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
  transport,
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
  const [show, setShow] = useState();
  const dispatch = useDispatch();

  function handleOnDelete() {
    dispatch(deleteProduct(id, typeProduct));
  }
  function handleShowModal() {
    setShow(!show);
  }

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
        <div className="m-1 p-1">
          <Button variant="danger" active onClick={() => handleShowModal()}>
            Eliminar
          </Button>
        </div>
        <ModalDelete
          showModal={show}
          handleOnDelete={handleOnDelete}
          handleShowModal={handleShowModal}
        ></ModalDelete>
      </div>
    </div>
  );
}
