import React, { useRef, useState } from "react";
import location from "../assets/card_product/location.svg";
import Form from "react-bootstrap/Form";
import "../style/inputPlace.css";
import { Button, ButtonGroup, FloatingLabel, Overlay } from "react-bootstrap";
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
  console.log(suggest);
  const target = useRef(null);
  return (
    <>
      <FloatingLabel
        id={`input-${labelName}`}
        ref={target}
        required
        label={labelName}
        className="p-1 w-100"
      >
        <Form.Control
          className="input-place"
          name={name}
          type="text"
          placeholder={`Ingrese el ${labelName}}`}
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
    </>
  );
}
