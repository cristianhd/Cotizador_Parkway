import { data } from "jquery";
import React, { useState } from "react";
import { Modal } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { updateProduct } from "../../Redux/action";
import FormPlanes from "../NewProduct/Planes/FormPlanes";

export default function ModalEdit({ id, show, handleShowEdit, typeProduct }) {
  const dispatch = useDispatch();
  const { productById } = useSelector((state) => state);
  const dataEdit = productById.productById;
  const emptyDataEdit =
    dataEdit && Object.values(dataEdit).length > 0 ? false : true;

  //handlers

  const handleUpdate = (data) => {
    const update = data;
    dispatch(updateProduct(id, update, typeProduct));

    handleShowEdit();
    alert("Producto Editado Correctamente");
  };
  console.log(dataEdit);
  return (
    <Modal show={show} onHide={handleShowEdit} size="lg" backdrop="static">
      <Modal.Header closeButton>
        <Modal.Title>Editar Producto</Modal.Title>
      </Modal.Header>

      {typeProduct === "planes" && !emptyDataEdit && (
        <FormPlanes handleSave={handleUpdate} edit={true} data={dataEdit} />
      )}
    </Modal>
  );
}
