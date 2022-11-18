import React, { useEffect, useState } from "react";
import { Button, Col, Form, InputGroup, Row } from "react-bootstrap";
import { UpperCaseStr } from "../../utils/UpperCaseStr";
import FloatingInput from "./FloatingInput";

export default function RoomsFormPlanes({
  handleOnChangePriceAdult,
  handleOnChangeForm,
  form,
}) {
  const [numberNigths, setNumberNigths] = useState("0");
  const [checkedItem, setCheckedItem] = useState({});
  const [currentChecked, setCurrentChecked] = useState([]);

  const typeRooms = ["sencilla", "doble", "triple", "cuadruple", "quintuple"];

  // handlers
  function handleOnChangeTypeRooms(e) {
    const name = e.target.name;
    const checked = e.target.checked;

    if (currentChecked.includes(name)) {
      setCurrentChecked(currentChecked.filter((item) => item !== name));
    } else {
      setCurrentChecked([...currentChecked, name]);
    }

    setCheckedItem({
      ...checkedItem,
      [name]: checked,
    });
  }
  console.log(checkedItem);

  function handelOnChangePriceRooms(e) {
    const room = e.target.name;
    const price = e.target.value;

    handleOnChangePriceAdult(room, price);
  }

  function handleOnChangeNumberNights(e) {
    let newNumberNigths = e.target.value;

    setNumberNigths(newNumberNigths);
  }

  return (
    <>
      <Row className="m-1">
        <Form.Group className="" as={Col}>
          <FloatingInput
            name="nameAccommodation"
            labelName="Nombre Hospedaje"
            value={form.nameAccommodation}
            onChange={(e) => handleOnChangeForm(e)}
          />
        </Form.Group>
      </Row>
      <Row className="m-1">
        <Form.Group className="w-100" as={Col}>
          <Form.Label className="p-1">Categoria Hospedaje</Form.Label>
          <Form.Group className="d-flex justify-content-between w-100 p-1">
            <Form.Check type="radio" label="Superior" />
            <Form.Check type="radio" label="Turista" />
            <Form.Check type="radio" label="Ecoturismo" />
            <Form.Check type="radio" label="Boutique" />
          </Form.Group>
        </Form.Group>
      </Row>
      <Row className="m-1">
        <Form.Group className="w-100" as={Col}>
          <Form.Label>
            Número de Noches
            <span> {numberNigths}</span>
          </Form.Label>
          <Form.Range
            onChange={handleOnChangeNumberNights}
            value={numberNigths}
            min="0"
            max="10"
          ></Form.Range>
        </Form.Group>
      </Row>
      <Form.Label>Habitaciones</Form.Label>

      {typeRooms.map((typeRoom, index) => {
        return (
          <Col key={index}>
            <Form.Check
              name={typeRoom}
              type="checkbox"
              label={UpperCaseStr(typeRoom)}
              onChange={handleOnChangeTypeRooms}
            />
            <InputGroup>
              <InputGroup.Text>$</InputGroup.Text>
              <Form.Control
                required
                name={typeRoom}
                type="number"
                value={form.priceAdult.typeRoom}
                onChange={handelOnChangePriceRooms}
                disabled={!currentChecked.includes(typeRoom)}
                className="shadow-none"
              />
            </InputGroup>
          </Col>
        );
      })}
      <Button variant="warning">
        {" "}
        Editar{" "}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          className="bi bi-pencil-fill"
          viewBox="0 0 16 16"
        >
          <path d="M12.854.146a.5.5 0 0 0-.707 0L10.5 1.793 14.207 5.5l1.647-1.646a.5.5 0 0 0 0-.708l-3-3zm.646 6.061L9.793 2.5 3.293 9H3.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.207l6.5-6.5zm-7.468 7.468A.5.5 0 0 1 6 13.5V13h-.5a.5.5 0 0 1-.5-.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.5-.5V10h-.5a.499.499 0 0 1-.175-.032l-.179.178a.5.5 0 0 0-.11.168l-2 5a.5.5 0 0 0 .65.65l5-2a.5.5 0 0 0 .168-.11l.178-.178z" />
        </svg>
      </Button>
      <Button variant="success">
        {" "}
        Hecho{" "}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          className="bi bi-check-circle-fill"
          viewBox="0 0 16 16"
        >
          <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />
        </svg>
      </Button>
    </>
  );
}
