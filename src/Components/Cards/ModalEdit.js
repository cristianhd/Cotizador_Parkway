import React from "react";
import { Modal } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { updateProduct } from "../../Redux/action";
import EditDescription from "./EditDescription";
import EditPrice from "./EditPrice";
import EditTitle from "./EditTitle";

export default function ModalEdit({
  id,
  show,
  handleHideModal,
  typeProduct,
  nameItemEdit,
  principalText,
  description,
  includes,
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
        {nameItemEdit === "Título" && (
          <EditTitle
            id={id}
            handleUpdate={handleUpdate}
            typeProduct={typeProduct}
            principalText={principalText}
          />
        )}
        {nameItemEdit === "Descripción" && (
          <EditDescription
            id={id}
            handleUpdate={handleUpdate}
            typeProduct={typeProduct}
            description={description}
            includes={includes}
          />
        )}
        {nameItemEdit === "Precios" && <EditPrice />}
      </Modal.Body>
    </Modal>
  );
}
