import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import photos from "../assets/card/camara-fotografica.svg";
import "../style/card.css"
export default function CardComponent({
  title,
  hotel,
  huespedes,
  origen,
  destino,
}) {
  return (
    <Card>
      <Card.Img variant="top" src={photos}/>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Subtitle>{hotel}</Card.Subtitle>
        <Card.Subtitle>
          {origen}-{destino}
        </Card.Subtitle>
        <Card.Text>
          Sencilla
          <br />
          Doble
          <br />
          Triple
          <br />
          Cuadruplue
          <br />
          Niños/as
        </Card.Text>
        <div className="d-flex justify-content-end">
          <Button variant="primary">
            Cotizar  >
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
}
