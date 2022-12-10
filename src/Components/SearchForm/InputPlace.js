import React, { useEffect, useState } from "react";
import Form from "react-bootstrap/Form";
import { UpperCaseUpperCaseStr } from "../../utils/UpperCaseStr";
import "../../style/inputPlace.css";
import { FloatingLabel, OverlayTrigger, Popover } from "react-bootstrap";
import Suggest from "./Suggest";
import { useSelector } from "react-redux";

export default function InputPlace({
  name,
  labelName,
  value,
  onChange,
  show,
  suggestOnclick,
}) {
  const [suggestPlaces, setSuggestPlaces] = useState([]);
  const [suggestCities, setSuggestCities] = useState([]);

  const { suggest5Places, suggest5Cities } = useSelector((state) => state);
  const suggestFivePlaces = suggest5Places.suggest5Places || "";
  const suggestFiveCities = suggest5Cities.suggest5Cities || "";
  const screenWidth = window.screen.width;

  // set suggest places in local state
  useEffect(() => {
    setSuggestPlaces(suggestFivePlaces);
    setSuggestCities(suggestFiveCities);
  }, [suggestFiveCities, suggestFivePlaces]);

  console.log(suggestCities.length);
  return (
    <div className="input-place p-1 d-flex flex-row align-items-center rounded">
      <OverlayTrigger
        show={show}
        placement="auto"
        overlay={
          <Popover className="">
            {suggestCities.length > 0 && (
              <>
                <Popover.Header>Ciudades</Popover.Header>
                <Suggest
                  suggest={suggestCities}
                  onClick={suggestOnclick}
                  show={show}
                  name={name}
                />
              </>
            )}
            {suggestPlaces.length > 0 && (
              <>
                <Popover.Header>Lugares</Popover.Header>
                <Suggest
                  suggest={suggestPlaces}
                  onClick={suggestOnclick}
                  show={show}
                  name={name}
                />
              </>
            )}
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
            value={value}
            onChange={onChange}
            autoComplete="off"
          />
        </FloatingLabel>
      </OverlayTrigger>
    </div>
  );
}
