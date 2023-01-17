import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import { useDispatch } from "react-redux";
import FormPlanes from "./Planes/FormPlanes";
import FormHospedajes from "./Hospedajes/FormHospedajes";
import FormTraslados from "./Traslados/FormTraslados";
import FormActividades from "./Actividades/FormActividades";
import FormAsistencia from "./Asistencias/FormAsistencias";
import { createProduct } from "../../Redux/action";


export default function ModalNewProduct({ typeProduct }) {
  const [show, setShow] = useState();
  const dispatch = useDispatch();

  //handlers
  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);
  const handleSave = (data) => {
    dispatch(createProduct(data, typeProduct));
    setShow(false);
    alert("Producto Creado");
  };
  return (
    <>
      <Modal show={show} onHide={handleClose} size="lg" backdrop="static">
        <Modal.Header closeButton>
          <Modal.Title>Crear Producto</Modal.Title>
        </Modal.Header>

        {typeProduct === "planes" && <FormPlanes handleSave={handleSave} />}
        {typeProduct === "hospedajes" && (
          <FormHospedajes handleSave={handleSave} />
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

      <span onClick={handleShow}>+ Agregar Producto</span>
    </>
  );
}
