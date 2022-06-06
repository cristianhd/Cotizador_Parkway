import React, { Component } from "react";
import { Button, Modal } from "react-bootstrap";
import FormPlanes from "./FormPlanes";

export default function ModalPlanes({ show, active }) {
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
            <Button variant="primary">+</Button>
          </Modal.Footer>
        </Modal>
      )}
    </div>
  );
}
