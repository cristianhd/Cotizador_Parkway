import React from "react";
import { Button, Modal } from "react-bootstrap";

export default function ModalDelete({
  id,
  showModal,
  handleOnDelete,
  handleShowDelete,
}) {
  return (
    <Modal show={showModal}>
      <Modal.Body>Estas seguro que deseas eliminar el producto</Modal.Body>
      <Modal.Footer>
        <Button onClick={() => handleShowDelete()}>Cancelar</Button>
        <Button onClick={() => handleOnDelete(id)}>Aceptar</Button>
      </Modal.Footer>
    </Modal>
  );
}
