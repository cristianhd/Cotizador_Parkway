import React, { useState } from "react";

import { Button, Modal } from "react-bootstrap";
import FormPlanes from "./FormPlanes";
import { useDispatch } from "react-redux";
import FormTraslados from "./FormTraslados";
import FormActividades from "./FormActividades";
import FormAsistencia from "./FormAsistencias";
import { createProduct } from "../../Redux/action";
import { UpperCaseStr } from "../../Utils/UpperCaseStr";

export default function ModalNewProduct({ typeProduct }) {
  const dispatch = useDispatch();

  const [show, setShow] = useState();
  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);
  const handleSave = (data) => {
    dispatch(createProduct(data, typeProduct));
    setShow(false);
    alert("Producto Creado");
  };
  console.log(typeProduct);

  return (
    <>
      <Modal show={show} onHide={handleClose} size="lg">
        <Modal.Header closeButton>
          <Modal.Title>Agregar {UpperCaseStr(typeProduct)}</Modal.Title>
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
          <FormAsistencia handleSave={handleSave} />
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
