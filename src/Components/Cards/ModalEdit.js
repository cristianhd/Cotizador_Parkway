import React from "react";
import { Modal } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { updateProduct } from "../../Redux/action";
import FormPlanes from "../NewProduct/Planes/FormPlanes";
import FormHospedajes from "../NewProduct/Hospedajes/FormHospedajes";
import FormTraslados from "../NewProduct/Traslados/FormTraslados";
import FormActividades from "../NewProduct/Actividades/FormActividades";
import FormAsistencias from "../NewProduct/Asistencias/FormAsistencias";
import FormEdit from "./FormEdit";

export default function ModalEdit({
  id,
  show,
  handleHideModal,
  typeProduct,
  nameItemEdit,
}) {
  const dispatch = useDispatch();

  //handlers

  const handleUpdate = (id, typeProduct, updateData) => {
    dispatch(updateProduct(id, updateData, typeProduct));
    handleHideModal();
    alert("Producto Editado Correctamente");
  };
  return (
    <Modal show={show} onHide={handleHideModal} size="lg" backdrop="static">
      <Modal.Header closeButton>
        <h6>Editar {nameItemEdit}</h6>
      </Modal.Header>
      <Modal.Body>
        <FormEdit
          id={id}
          typeProduct={typeProduct}
          nameItemEdit={nameItemEdit}
          handleUpdate={handleUpdate}
        />
      </Modal.Body>
    </Modal>
  );
}
