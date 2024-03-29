import React, { useState } from "react";
import Modal from "react-bootstrap/esm/Modal";
import Button from "react-bootstrap/esm/Button";
import Form from "react-bootstrap/esm/Form";
import { useAuth0 } from "@auth0/auth0-react";
import { useDispatch } from "react-redux";
import { createUser } from "../../Redux/action";

export default function ModalNewUser() {
  const [show, setShow] = useState(true);
  const [category, setCategory] = useState(null);
  const { user, getAccessTokenSilently } = useAuth0();
  const { name, nickname, sub, picture, email } = user; // destructuring user Auth0
  const dispatch = useDispatch();

// data user
  const User = {
    name,
    nickname,
    sub,
    category,
    picture,
    email
  };

  //handlers
  const handleSave = async () => {
    const token = await getAccessTokenSilently();
    dispatch(createUser(User, token));
    setShow(false);
  };

  const handleChange = (e) => {
    const category = e.target.value;
    setCategory(category);
  };

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
                <option>Selecciona</option>
                <option value="Proveedor">Proveedor</option>
                <option value="Cotizador">Cotizador</option>
                <option value="Asesor">Asesor</option>
              </Form.Select>
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleSave}>
            Guardar
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
