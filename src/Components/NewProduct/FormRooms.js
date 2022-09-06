import React, { useEffect, useState } from "react";
import { Col, Form, InputGroup } from "react-bootstrap";

import { UpperCaseStr } from "../../utils/UpperCaseStr";

export default function FormRooms({ handleOnChangeRoom }) {
  const [checkedItem, setCheckedItem] = useState({});
  const [currentChecked, setCurrentChecked] = useState([]);
  const [room, setRoom] = useState({});
  const typeRooms = ["sencilla", "doble", "triple", "cuadruple", "quintuple"];

  function handleOnChangeCheckbox(e) {
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

  function handleOnChangeInput(e) {
    const name = e.target.name;
    const price = e.target.value;

    setRoom({
      ...room,
      [name]: price,
    });
    handleOnChangeRoom(room);
  }

  return (
    <>
      <Form.Label>Habitaciones</Form.Label>

      {typeRooms.map((typeRoom, index) => {
        return (
          <Col>
            <Form.Check
              name={typeRoom}
              type="checkbox"
              label={UpperCaseStr(typeRoom)}
              onChange={handleOnChangeCheckbox}
            />
            <InputGroup>
              <InputGroup.Text>$</InputGroup.Text>
              <Form.Control
                required
                name={typeRoom}
                type="number"
                value={room.typeRoom}
                onChange={handleOnChangeInput}
                disabled={!currentChecked.includes(typeRoom)}
                className="shadow-none"
              />
            </InputGroup>
          </Col>
        );
      })}
    </>
  );
}
