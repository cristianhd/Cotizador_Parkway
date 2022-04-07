import React, { useState } from "react";
import location from "../assets/card_product/location.svg";
import Form from "react-bootstrap/Form";
import "../style/inputPlace.css";
export default function InputPlace({ name, labelName, value, onChange }) {
  

  return (
    <div className=" input-wrap d-flex flex-row align-items-center">
      <div className="icon">
        <img src={location} alt="svg-location"></img>
      </div>
      <div className=" wrap-text d-flex flex-column">
        <div className="name-wrap">
          <span>{labelName}</span>
        </div>
        <Form.Control
          className="input-place"
          name={name}
          type="text"
          placeholder={`Ingrese el ${labelName}`}
          value={value}
          onChange={(e) => onChange(e)}
        />
      </div>
    </div>
  );
}
