import React from "react";
import location from "../assets/card_product/location.svg";
import Form from "react-bootstrap/Form";

export default function InputPlace({ name }) {
  return (
    <div className="container d-flex flex-row align-items-center border">
      <div className="p-1 align-self-end">
        <img src={location} alt="svg-location"></img>
      </div>
      <div className="container d-flex flex-column">
        <span>{name}</span>
        <Form.Control type="text" placeholder={`Ingrese el ${name}`} />
      </div>
    </div>
  );
}
