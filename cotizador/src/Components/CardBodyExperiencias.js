import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

export default function CardBodyExperiencias({
  title,
  description,
  room,
  origin,
  destination,
  price,
}) {
  console.log(room);
  return (
    <div>
      <Card.Body className="container-body">
        <div>
          <Card.Title className="mb-4">{title}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">
            {origin}-{destination}
          </Card.Subtitle>
          <Card.Text>
            <p>{description}</p>
          </Card.Text>

          {room &&
            room.map((room, index) => (
              <Card.Text key={index}>
                <li>
                  {room.type}: {room.price}
                </li>
              </Card.Text>
            ))}
          {price && <Card.Text> Precio: ${price}</Card.Text>}
        </div>
      </Card.Body>
      <Card.Footer>
        <div className="container-button ">
          <Button variant="primary">Cotizar</Button>
        </div>
      </Card.Footer>
    </div>
  );
}
