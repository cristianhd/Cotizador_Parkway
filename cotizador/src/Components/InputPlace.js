import React, { useRef, useState } from "react";
import location from "../assets/card_product/location.svg";
import Form from "react-bootstrap/Form";
import "../style/inputPlace.css";
import { ButtonGroup, FloatingLabel, Overlay } from "react-bootstrap";
import SuggestPlaces from "./SuggestPlaces";

export default function InputPlace({
  name,
  labelName,
  value,
  onChange,
  suggest,
  show,
  suggestOnclick,
}) {
  const target = useRef(null);
  return (
    <div
      className="input-place p-1 d-flex flex-row align-items-center rounded"
      
    >
      <div className="px-2 py-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          fill="currentColor"
           className="bi bi-geo-alt-fill"
          viewBox="0 0 16 16"
        >
          <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z" />
        </svg>
      </div>

      <FloatingLabel
        id={`input-${labelName}`}
        ref={target}
        required
        label={labelName}
        className=""
      >
        <Form.Control
          className="shadow-none border-0 "
          name={name}
          type="text"
          placeholder={`Ingrese el ${labelName}`}
          value={value}
          onChange={onChange}
        />
      </FloatingLabel>

      <Overlay target={target.current} show={show} placement="bottom">
        {({ placement, arrowProps, show: _show, popper, ...props }) => (
          <ButtonGroup vertical className="p-1" {...props}>
            <SuggestPlaces
              suggest={suggest}
              onClick={suggestOnclick}
              name={name}
            />
          </ButtonGroup>
        )}
      </Overlay>
    </div>
  );
}
