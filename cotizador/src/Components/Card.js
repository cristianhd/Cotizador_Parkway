import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import photos from "../assets/card/camara-fotografica.svg";
import "../style/card.css";
import CardBodyExperiencias from "./CardBodyExperiencias";
export default function CardComponent({ data }) {
  return (
    <Card>
      <div className="container-img d-flex justify-content-center">
        <Card.Img variant="top" src={photos} />
      </div>
      <div className=" d-flex justify-content-start">
        <CardBodyExperiencias
          title={data.title}
          description={data.description}
          rooms={data.rooms}
          origin={data.origin}
          destination={data.destination}
        />
      </div>
    </Card>
  );
}
