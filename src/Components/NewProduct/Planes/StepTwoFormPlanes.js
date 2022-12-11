import { type } from "@testing-library/user-event/dist/type";
import React, { useEffect, useState } from "react";
import { Button, Col, Form, InputGroup, Row } from "react-bootstrap";

import AddPriceButton from "../AddPriceButton";
import FloatingInput from "../FloatingInput";
import RemovePriceButton from "../RemovePriceButton";
import RoomPrice from "../RoomPrice";

export default function StepTwoFormPlanes({
  handleOnChangePriceAdult,
  handleOnChangeForm,

  form,
}) {
  const [checkedItem, setCheckedItem] = useState({});
  const [checkKids, setCheckKids] = useState(false);
  const [currentChecked, setCurrentChecked] = useState([]);
  const [amountRoomPrice, setamountRoomPrice] = useState([1]);

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
  function AddRoom() {
    setamountRoomPrice([...amountRoomPrice, amountRoomPrice.length + 1]);
  }
  function RemoveRoom() {
    const room = Object.keys(form.priceAdult).find((room) =>
      room.includes(amountRoomPrice.length)
    );
    const price = undefined;
    setamountRoomPrice(amountRoomPrice.slice(0, amountRoomPrice.length - 1));
    handleOnChangePriceAdult(room, price);
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
        <Form.Group className="m-1" as={Col}>
          <Form.Select
            required
            className="shadow-none"
            name="categoryAccommodation"
            value={form.categoryAccommodation}
            onChange={(e) => handleOnChangeForm(e)}
          >
            <option defaultValue selected disabled value="">
              Categoria Hospedaje
            </option>
            <option value="Superior">Superior</option>
            <option value="Turista">Turista</option>
            <option value="Ecoturismo">Ecoturismo</option>
            <option value="Boutique">Boutique</option>
          </Form.Select>
        </Form.Group>
        <Form.Group className="d-flex flex-column align-items-center" as={Col}>
          <FloatingInput
            name="numberNigths"
            type="number"
            labelName="Numero de Noches"
            value={form.numberNigths}
            onChange={(e) => handleOnChangeForm(e)}
          />
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
                required
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
                  required
                  name="minRangeKids"
                  value={form.minRangeKids}
                  type="number"
                  className="shadow-none"
                  disabled={!checkKids}
                  onChange={(e) => handleOnChangeForm(e)}
                />
                <InputGroup.Text>-</InputGroup.Text>
                <Form.Control
                  required
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
      <Row className="m-1">
        <Form.Label>Precio Habitaciones</Form.Label>

        {amountRoomPrice.map((room) => (
          <RoomPrice
            key={room}
            handleOnChangePriceAdult={handleOnChangePriceAdult}
            form={form}
            indexRoom={room}
          ></RoomPrice>
        ))}
        <div className="m-1 p-1 d-flex justify-content-between">
          <AddPriceButton handleOnClick={AddRoom}></AddPriceButton>
          <RemovePriceButton handleOnClick={RemoveRoom}></RemovePriceButton>
        </div>
      </Row>
    </>
  );
}
