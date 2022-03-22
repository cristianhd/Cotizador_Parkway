import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import photos from "../assets/card/camara-fotografica.svg";
import "../style/card.css";
export default function CardComponent({
  title,
  hotel,
  priceRooms,
  origin,
  destino,
}) {
  console.log(priceRooms);
  return (
    <Card>
      <div className="container-img d-flex justify-content-center">
        <Card.Img variant="top" src={photos} />
      </div>
      <div className=" d-flex justify-content-start">
        <Card.Body className="container-body">
          <div>

          <Card.Title className="mb-4"><h1>{title}</h1></Card.Title>
          <Card.Subtitle>{hotel}</Card.Subtitle>
          <Card.Subtitle>
            {origin}-{destino}
          </Card.Subtitle>
          {priceRooms &&
            priceRooms.map((type) => (
              <div>
                <Card.Text>
                  {type.room} - {type.pesos}
                </Card.Text>
              </div>
            ))}
          </div>

          <div className="container-button">
            <Button variant="primary">Cotizar</Button>
          </div>
        </Card.Body>
      </div>
    </Card>
  );
}
