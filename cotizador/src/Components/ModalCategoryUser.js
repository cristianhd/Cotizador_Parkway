import React, { useState } from "react";
import Modal from "react-bootstrap/esm/Modal";
import Button from "react-bootstrap/esm/Button";
import Form from "react-bootstrap/esm/Form";
import { useAuth0 } from "@auth0/auth0-react";

export default function ModalCategoryUser() {
  const [show, setShow] = useState(true);
  const [categoryUser,setCategoryUser] = useState(null)
  const { user } = useAuth0();

  const handleClose = () => {
    
    setShow(false);
  
  }

  const handleChange = (e)=>{
    const category = e.target.value;
    setCategoryUser(category)
  }
  
  console.log(user,categoryUser)

  return (
    <div>
      <Modal show={show}>
        <Modal.Header>
          <Modal.Title>BIENVENIDO</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group>
              <Form.Label>Elije tu categoria</Form.Label>
              <Form.Select onChange={handleChange}>
                <option value="Proveedor">Proveedor</option>
                <option value="Cotizador">Cotizador</option>
                <option value="Asesor">Asesor</option>
              </Form.Select>
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleClose}>
            Guardar
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
