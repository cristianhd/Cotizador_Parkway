import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { deleteProduct, getProductbyId } from "../../Redux/action";
import ModalDelete from "./ModalDelete";
import ModalEdit from "./ModalEdit";
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
  const [showDelete, setShowDelete] = useState();
  const [showEdit, setShowEdit] = useState();
  const dispatch = useDispatch();

  function handleOnDelete() {
    dispatch(deleteProduct(id, typeProduct));
    setShowDelete(false);
  }

  function handleModalEdit() {
    dispatch(getProductbyId(id, typeProduct));
    setShowEdit(true);
  }
  function handleShowDelete() {
    setShowDelete(false);
  }
  function handleShowEdit() {
    setShowEdit(false);
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
        <div className=" card-fh m-1 p-1">
          <Button
            className="mx-1"
            variant="danger"
            onClick={() => setShowDelete(true)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-x-circle-fill"
              viewBox="0 0 16 16"
            >
              <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z" />
            </svg>
          </Button>
        </div>
        <ModalDelete
          showModal={showDelete}
          handleOnDelete={handleOnDelete}
          handleShowDelete={handleShowDelete}
        ></ModalDelete>
      </div>
    </div>
  );
}
