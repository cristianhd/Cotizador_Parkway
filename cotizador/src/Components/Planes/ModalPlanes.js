import React from "react";

import { Button, Modal } from "react-bootstrap";
import FormPlanes from "./FormPlanes";
import { useDispatch } from "react-redux";

export default function ModalPlanes({ show, active }) {

  const dispatch = useDispatch();

  const handleSave = () => {
    
    
    // dispatch(createProduct(data, TypeProduct));
  
  };
  
  return (
    <div>
      {active && (
        <Modal show={show}>
          <Modal.Header>
            <Modal.Title>NUEVA EXPERIENCIA</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <FormPlanes />
          </Modal.Body>
          <Modal.Footer>
            <Button variant="primary" onClick={handleSave}>Guardar</Button>
          </Modal.Footer>
        </Modal>
      )}
    </div>
  );
}
