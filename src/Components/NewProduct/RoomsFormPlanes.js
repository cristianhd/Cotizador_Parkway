import React, { useEffect, useState } from "react";
import { Button, Col, Form, InputGroup, Row } from "react-bootstrap";
import { UpperCaseStr } from "../../utils/UpperCaseStr";
import FloatingInput from "./FloatingInput";

export default function RoomsFormPlanes({
  handleOnChangePriceAdult,
  handleOnChangeForm,
  handleOnChangeCategory,
  handleOnChangePriceKids,
  form,
}) {
  const [checkedItem, setCheckedItem] = useState({});
  const [checkKids, setCheckKids] = useState(false);
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

  function handleOnChangePriceRooms(e) {
    const room = e.target.name;
    const price = e.target.value;

    handleOnChangePriceAdult(room, price);
  }

  function handleOnChangeCheckCategory(e) {
    const name = e.target.name;

    handleOnChangeCategory(name);
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
        <Form.Group className="m-2" as={Col}>
          <Form.Label className="">Categoria Hospedaje</Form.Label>
          <Form.Group className="p-1">
            <Form.Check
              name="Superior"
              type="radio"
              label="Superior"
              onChange={(e) => handleOnChangeCheckCategory(e)}
              value={form.categoryAccomodation === "Superior"}
              checked={form.categoryAccomodation === "Superior"}
            />
            <Form.Check
              name="Turista"
              type="radio"
              label="Turista"
              onChange={(e) => handleOnChangeCheckCategory(e)}
              value={form.categoryAccomodation === "Turista"}
              checked={form.categoryAccomodation === "Turista"}
            />
            <Form.Check
              name="Ecoturismo"
              type="radio"
              label="Ecoturismo"
              onChange={(e) => handleOnChangeCheckCategory(e)}
              value={form.categoryAccomodation === "Ecoturismo"}
              checked={form.categoryAccomodation === "Ecoturismo"}
            />
            <Form.Check
              name="Boutique"
              type="radio"
              label="Boutique"
              onChange={(e) => handleOnChangeCheckCategory(e)}
              value={form.categoryAccomodation === "Boutique"}
              checked={form.categoryAccomodation === "Boutique"}
            />
          </Form.Group>
        </Form.Group>
        <Form.Group
          className="m-2 d-flex flex-column align-items-center"
          as={Col}
        >
          <Form.Label className="">Número de Noches:</Form.Label>
          <Form.Range
            className="w-50 m-1"
            name="numberNigths"
            onChange={(e) => handleOnChangeForm(e)}
            value={form.numberNigths}
            min="0"
            max="10"
          ></Form.Range>
          <span className="m-1"> {form.numberNigths} noche/s</span>
        </Form.Group>
      </Row>
      <Row className="m-1">
        <Form.Group as={Col}>
          <Form.Check
            className="m-1"
            type="switch"
            label="Precio Niños"
            onChange={() => setCheckKids(!checkKids)}
          ></Form.Check>
          <div className="p-1 d-flex justify-content-between ">
            <InputGroup className="p-1">
              <InputGroup.Text>$</InputGroup.Text>
              <Form.Control
                name="priceKids"
                value={form.priceKids}
                type="number"
                className="shadow-none"
                disabled={!checkKids}
                onChange={(e) => handleOnChangeForm(e)}
              />
            </InputGroup>
            <div className="px-1 d-flex ">
              <Form.Label>Rango Edad</Form.Label>
              <InputGroup className=" p-1 d-flex jutify-content-center">
                <Form.Control
                  name="minRangeKids"
                  value={form.minRangeKids}
                  type="number"
                  className="shadow-none"
                  disabled={!checkKids}
                  onChange={(e) => handleOnChangeForm(e)}
                />
                <InputGroup.Text>-</InputGroup.Text>
                <Form.Control
                  name="maxRangeKids"
                  value={form.maxRangeKids}
                  type="number"
                  className="shadow-none"
                  disabled={!checkKids}
                  onChange={(e) => handleOnChangeForm(e)}
                />
              </InputGroup>
            </div>
          </div>
        </Form.Group>
      </Row>
      <Row className="m-1 p-1 d-flex ">
        <Form.Label>Precio Habitaciones</Form.Label>

        {typeRooms.map((typeRoom, index) => {
          return (
            <div className="d-flex-row mx-1" key={index}>
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
                  onChange={handleOnChangePriceRooms}
                  disabled={!currentChecked.includes(typeRoom)}
                  className="shadow-none"
                />
              </InputGroup>
            </div>
          );
        })}
      </Row>
    </>
  );
}
