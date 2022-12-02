import React, { useEffect, useState } from "react";
import Form from "react-bootstrap/Form";
import { UpperCaseStr } from "../../utils/UpperCaseStr";
import "../../style/inputPlace.css";
import { FloatingLabel, OverlayTrigger, Popover } from "react-bootstrap";
import SuggestPlaces from "./SuggestPlaces";
import { useSelector } from "react-redux";

export default function InputPlace({
  name,
  labelName,
  value,
  onChange,
  show,
  suggestOnclick,
}) {
  const [suggest, setSuggest] = useState([]);
  const { queryPlaces } = useSelector((state) => state);
  const suggestPlaces = queryPlaces.queryPlaces;
  const screenWidth = window.screen.width;

  // set suggest places in local state
  useEffect(() => {
    setSuggest(suggestPlaces);
  }, [suggestPlaces]);

  return (
    <div className="input-place p-1 d-flex flex-row align-items-center rounded">
      <OverlayTrigger
        show={show}
        placement="auto"
        overlay={
          <Popover className="">
            <Popover.Header>Ciudades</Popover.Header>
            <SuggestPlaces
              suggest={suggest}
              onClick={suggestOnclick}
              show={show}
              name={name}
            />
            <Popover.Header>Lugares</Popover.Header>
            <SuggestPlaces
              suggest={suggest}
              onClick={suggestOnclick}
              show={show}
              name={name}
            />
          </Popover>
        }
      >
        <FloatingLabel
          className="w-100"
          id={`input-${labelName}`}
          label={labelName}
        >
          <Form.Control
            required
            className="shadow-none "
            name={name}
            type="text"
            placeholder={`Ingrese el ${labelName}`}
            value={UpperCaseStr(value)}
            onChange={onChange}
            autoComplete="off"
          />
        </FloatingLabel>
      </OverlayTrigger>
    </div>
  );
}
