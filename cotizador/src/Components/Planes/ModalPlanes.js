import React, { useState } from "react";

import { Button, Modal } from "react-bootstrap";
import FormPlanes from "./FormPlanes";
import { useDispatch, useSelector } from "react-redux";
import FormTraslados from "../Traslados/FormTraslados";
import FormActividades from "../Actividades/FormActividades";
import FormaAsistencia from "../Asistencia/FormaAsistencia";
import { createProduct } from "../../Redux/action";

export default function ModalPlanes({ typeProduct }) {
  const dispatch = useDispatch();

  const [show, setShow] = useState();
  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);
  const handleSave = (data) => {
    dispatch(createProduct(data, typeProduct));
    setShow(false);
    alert("Producto Creado");
  };
  console.log(typeProduct)

  return (
    <>
      <Modal show={show} onHide={handleClose} size="xl">
        <Modal.Header closeButton>
          <Modal.Title>Agregar Producto</Modal.Title>
        </Modal.Header>

        {typeProduct === "experiencias" && (
          <FormPlanes handleSave={handleSave} />
        )}
        {typeProduct === "traslados" && (
          <FormTraslados handleSave={handleSave} />
        )}
        {typeProduct === "actividades" && (
          <FormActividades handleSave={handleSave} />
        )}
        {typeProduct === "asistencias" && (
          <FormaAsistencia handleSave={handleSave} />
        )}
      </Modal>
      <div className="w-50 m-auto">
        <Button
          className="w-100 rounded-pill"
          variant="primary"
          onClick={handleShow}
        >
          +
        </Button>
      </div>
    </>
  );
}
