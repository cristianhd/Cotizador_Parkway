import React, { useState } from "react";

import { Button, Modal } from "react-bootstrap";
import FormPlanes from "./FormPlanes";
import { useDispatch, useSelector } from "react-redux";
import FormTraslados from "../Traslados/FormTraslados";
import FormActividades from "../Actividades/FormActividades";
import FormaAsistencia from "../Asistencia/FormaAsistencia";

export default function ModalPlanes({ typeProduct }) {
  const dispatch = useDispatch();

  const [show, setShow] = useState();
  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);
  const handleSave = () => {
    // dispatch(createProduct(data, TypeProduct));
  };
  console.log(typeProduct);

  return (
    <div>
      <Modal show={show} onHide={handleClose} scrollable size="xl">
        <Modal.Header closeButton>
          <Modal.Title>NUEVA EXPERIENCIA</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {typeProduct === "Experiencias" && <FormPlanes />}
          {typeProduct === "Traslado" && <FormTraslados />}
          {typeProduct === "Actividades" && <FormActividades />}
          {typeProduct === "Asistencia" && <FormaAsistencia />}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleSave}>
            Guardar
          </Button>
        </Modal.Footer>
      </Modal>

      <div className="container-button ">
        <Button variant="primary" onClick={handleShow}>
          +
        </Button>
      </div>
    </div>
  );
}
