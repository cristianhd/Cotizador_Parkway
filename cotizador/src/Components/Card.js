import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import photos from "../assets/card/camara-fotografica.svg";
import "../style/card.css";
import CardBodyExperiencias from "./CardBodyExperiencias";
export default function CardComponent({ data }) {

  console.log(data)
  return (
    <Card>
      <Card.Header>
        
      <div className="container-img d-flex justify-content-center">
        <Card.Img variant="top" src={data.photos || photos} />
      </div>
      </Card.Header>
      <div className=" d-flex justify-content-start">
        <CardBodyExperiencias
          title={data.title}
          description={data.description}
          room={data.room}
          origin={data.origin}
          destination={data.destination}
          price={data.price_ta||data.price_tb}
        />
      </div>
    </Card>
  );
}
