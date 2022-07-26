import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import photos from "../assets/card/camara-fotografica.svg";
import { Modal } from "react-bootstrap";
import CardBody from "./CardBody";
import "../style/card.css";

export default function CardComponent({ data }) {
  const [show, setShow] = useState();
  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);
  console.log(data);
  return (
    <Card className="h-auto">
      <Card.Header className="w-100">
        <div className="container-img d-flex justify-content-center">
          <Card.Img variant="top" src={data.photos || photos} />
        </div>
      </Card.Header>

      <Card.Body className="container-body">
        <CardBody
          title={data.title}
          description={data.description}
          origin={data.origin}
          destination={data.destination}
        />
      </Card.Body>

      <Card.Footer className="p-1 w-100">
        <Button
          className="my-1 w-100 rounded-pill"
          variant="primary"
          onClick={handleShow}
        >
          Ver Más
        </Button>
      </Card.Footer>
      <Modal show={show} onHide={handleClose} size="lg">
        <Modal.Header closeButton>
          {data.title && <Modal.Title>{data.title}</Modal.Title>}
        </Modal.Header>
        <Modal.Body>
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
          {data.price && <Card.Text> Precio: {data.price}</Card.Text>}
        </Modal.Body>
      </Modal>
    </Card>
  );
}
