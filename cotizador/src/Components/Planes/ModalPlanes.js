import React, { useState } from "react";

import { Button, Modal } from "react-bootstrap";
import FormPlanes from "./FormPlanes";
import { useDispatch } from "react-redux";

export default function ModalPlanes({ active }) {

  const dispatch = useDispatch();
  const a = active; 

  const [show, setShow] = useState();
  const handleShow = () => setShow(true);
 const handleClose = () => setShow(false);
  const handleSave = () => {
    
    
    // dispatch(createProduct(data, TypeProduct));
  
  };
  console.log(show)
  
  return (
    <div>
   
        <Modal show={show}  onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>NUEVA EXPERIENCIA</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <FormPlanes />
          </Modal.Body>
          <Modal.Footer>
            <Button variant="primary" onClick={handleSave}>Guardar</Button>
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
