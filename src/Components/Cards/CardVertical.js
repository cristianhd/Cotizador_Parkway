import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { deleteProduct, getProductbyId } from "../../Redux/action";
import ModalDelete from "./ModalDelete";
import ModalEdit from "./ModalEdit";
import NavigationCard from "./NavigationCard";
import PhotoCard from "./PhotoCard";

export default function CardVertical({
  id,
  days,
  pax,
  title,
  photos,
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
    <div className="card-vertical m-3">
      <div className="d-flex flex-column ">
        <PhotoCard
          photos={photos}
          principalText={title}
          subtitleText={typeProduct === "traslados" ? title : destinationName}
          categoryAccommodation={categoryAccommodation}
          numberNigths={numberNigths}
          transport={transport}
          roundTrip={roundTrip}
          maxPeople={maxPeople}
          minPeople={minPeople}
          typeProduct={typeProduct}
        ></PhotoCard>
        <NavigationCard
          days={days}
          pax={pax}
          priceKids={priceKids}
          priceAdult={priceAdult}
          roundTrip={roundTrip}
          typeProduct={typeProduct}
          description={description}
        ></NavigationCard>
        <div className="delete-vertical m-1 p-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="#C0C0C0"
            className="span-pointer bi bi-x-circle-fill"
            viewBox="0 0 16 16"
            onClick={() => setShowDelete(true)}
          >
            <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z" />
          </svg>
        </div>
      </div>

      <ModalDelete
        showModal={showDelete}
        handleOnDelete={handleOnDelete}
        handleShowDelete={handleShowDelete}
      ></ModalDelete>
      <ModalEdit
        id={id}
        show={showEdit}
        handleShowEdit={handleShowEdit}
        typeProduct={typeProduct}
      ></ModalEdit>
    </div>
  );
}
