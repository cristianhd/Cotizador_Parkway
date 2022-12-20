import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { deleteProduct } from "../../Redux/action";
import ModalDelete from "./ModalDelete";
import NavigationCard from "./NavigationCard";
import PhotoCard from "./PhotoCard";

export default function CardVertical({
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
  roundTrip,
  maxPeople,
  minPeople,
}) {
  const [show, setShow] = useState();
  const dispatch = useDispatch();

  function handleOnDelete() {
    dispatch(deleteProduct(id, typeProduct));
  }
  function handleShowModal() {
    setShow(!show);
  }
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
