import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

export default function CardBodyExperiencias({
  title,
  description,
  rooms,
  origin,
  destination,
}) {
  console.log(title);
  return (
    <div>
      <Card.Body className="container-body">
        <div>
          <Card.Title className="mb-4">{title}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">
            {origin}-{destination}
          </Card.Subtitle>
          <Card.Text>{description}</Card.Text>
          {rooms &&
            rooms.map((room, index) => (
              <Card.Text key={index}>
                {room.type}: {room.price}
              </Card.Text>
            ))}
        </div>

        <div className="container-button ">
          <Button variant="primary">Cotizar</Button>
        </div>
      </Card.Body>
    </div>
  );
}
