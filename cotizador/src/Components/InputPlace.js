import React from "react";
import location from "../assets/card_product/location.svg";
import Form from "react-bootstrap/Form";
import "../style/inputPlace.css"
export default function InputPlace({ name }) {
  return (
    <div className=" input-wrap d-flex flex-row align-items-center border ">
      <div className="icon">
        <img src={location} alt="svg-location"></img>
      </div>
      <div className=" wrap-text d-flex flex-column">
        <div className="name-wrap">

        <span >{name}</span>
        </div>
        <Form.Control className="input-place" type="text" placeholder={`Ingrese el ${name}`} />
      </div>
    </div>
  );
}
