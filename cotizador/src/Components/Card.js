import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import photos from "../assets/card/camara-fotografica.svg";
import "../style/card.css";
import CardBodyExperiencias from "./CardBodyExperiencias";
import { Modal } from "react-bootstrap";
export default function CardComponent({ data }) {
  const [show, setShow] = useState();
  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);
  console.log(data);
  return (
    <Card className="m-3">
      <Card.Header>
        <div className="container-img d-flex justify-content-center">
          <Card.Img variant="top" src={data.photos || photos} />
        </div>
      </Card.Header>

      <Card.Body className="container-body">
        <CardBodyExperiencias
          title={data.title}
          description={data.description}
          origin={data.origin}
          destination={data.destination}
          price={data.price_ta || data.price_tb}
        />
      </Card.Body>

      <Card.Footer className="w-100">
        <Button className="w-100" variant="primary" onClick={handleShow}>
          Ver Más
        </Button>
      </Card.Footer>
      <Modal show={show} onHide={handleClose} size="lg">
        <Modal.Header closeButton>
          <Modal.Title>{data.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Card.Title className="mb-4">{data.title}</Card.Title>
      <Card.Subtitle className="mb-2 text-muted">
        {data.origin}-{data.destination}
      </Card.Subtitle>
      <Card.Text>
        <p>{data.description}</p>
      </Card.Text>

      {data.room &&
        data.room.map((room, index) => (
          <Card.Text key={index}>
            <li>
              {room.type}: {room.price}
            </li>
          </Card.Text>
        ))}
      {data.price && <Card.Text> Precio: ${data.price}</Card.Text>}
        </Modal.Body>
      </Modal>
    </Card>
  );
}
