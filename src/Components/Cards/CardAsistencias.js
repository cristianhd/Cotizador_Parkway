import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { deleteProduct, getProductbyId } from "../../Redux/action";
import ModalDelete from "./ModalDelete";
import ModalEdit from "./ModalEdit";
import NavigationCard from "./NavigationCard";
import PhotoCard from "./PhotoCard";

export default function CardAsistencias({ data, typeProduct }) {
  const [showDelete, setShowDelete] = useState();
  const [showEdit, setShowEdit] = useState();
  const dispatch = useDispatch();

  function handleOnDelete(id) {
    dispatch(deleteProduct(id, typeProduct));
    setShowDelete(false);
  }

  function handleModalEdit(id) {
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
    <div className="d-flex flex-row flex-wrap justify-content-center">
      {data.length > 0 &&
        data.map((card, index) => (
          <div className="card-vertical" key={index}>
            <div className="d-flex flex-column w-100">
              <PhotoCard
                photo="https://i.pinimg.com/564x/32/43/ee/3243ee7b772f95d751578e43e23bc443.jpg"
                pricipalText={card.title}
                subtitleText={card.destinationName}
              ></PhotoCard>
              <NavigationCard
                priceAdult={card.priceAdult}
                typeProduct={typeProduct}
                description={card.description}
              ></NavigationCard>
              <div className=" card-fv m-1 p-1">
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
                <Button
                  className="mx-1"
                  variant="warning"
                  onClick={() => handleModalEdit(card._id)}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-pencil-square"
                    viewBox="0 0 16 16"
                  >
                    <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
                    <path
                      fillRule="evenodd"
                      d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"
                    />
                  </svg>
                </Button>
              </div>
              <ModalDelete
                showModal={showDelete}
                handleOnDelete={handleOnDelete}
                handleShowDelete={handleShowDelete}
                id={card._id}
              ></ModalDelete>

              <ModalEdit
                id={card._id}
                show={showEdit}
                handleShowEdit={handleShowEdit}
                typeProduct={typeProduct}
              ></ModalEdit>
            </div>
          </div>
        ))}
    </div>
  );
}
