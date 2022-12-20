import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { deleteProduct } from "../../Redux/action";
import ModalDelete from "./ModalDelete";
import NavigationCard from "./NavigationCard";
import PhotoCard from "./PhotoCard";

export default function CardAsistencias({ data, typeProduct }) {
  const [show, setShow] = useState();
  const dispatch = useDispatch();

  function handleOnDelete(id) {
    dispatch(deleteProduct(id, typeProduct));
  }
  function handleShowModal() {
    setShow(!show);
  }
  return (
    <div className="d-flex flex-column">
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
              <div className="m-1 p-1">
                <Button
                  variant="danger"
                  active
                  onClick={() => handleShowModal()}
                >
                  Eliminar
                </Button>
              </div>
              <ModalDelete
                showModal={show}
                handleOnDelete={handleOnDelete}
                handleShowModal={handleShowModal}
                id={card.id}
              ></ModalDelete>
            </div>
          </div>
        ))}
    </div>
  );
}
