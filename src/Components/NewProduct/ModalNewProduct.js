import React, { useState } from "react";
import { Modal } from "react-bootstrap";
import { useDispatch } from "react-redux";
import FormPlanes from "./Planes/FormPlanes";
import FormHospedajes from "./Hospedajes/FormHospedajes";
import FormTraslados from "./Traslados/FormTraslados";
import FormActividades from "./Actividades/FormActividades";
import FormAsistencia from "./Asistencias/FormAsistencias";
import { createProduct } from "../../Redux/action";

export default function ModalNewProduct({ typeProduct }) {
  const [showModal, setShowModal] = useState();
  const dispatch = useDispatch();

  //handlers show and close modal
  const handleshowModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);

  const handleSave = (data) => {
    dispatch(createProduct(data, typeProduct));
    alert("Producto Creado");

    setShowModal(false);
  };

  return (
    <>
      <Modal
        show={showModal}
        onHide={handleCloseModal}
        size="lg"
        backdrop="static"
      >
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

      <span className="span-pointer" onClick={handleshowModal}>
        + Agregar Producto
      </span>
    </>
  );
}
