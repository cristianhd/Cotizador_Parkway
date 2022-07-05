import React, { useEffect, useState } from "react";
import { Col, Form, InputGroup } from "react-bootstrap";

export default function RoomForm({ handleOnChangeRoom }) {
  const [checkedItem, setCheckedItem] = useState({});
  const [currentChecked, setCurrentChecked] = useState([]);
  const [room, setRoom] = useState({});
  const Regex = /^[a-zA-ZñÑáéíóúÁÉÍÓÚ]+$/g;

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

  function handleOnChangeControl(e) {
    const name = e.target.name;
    const price = e.target.value.replace(/[.$]/g, "");

    setRoom({
      ...room,
      [name]: price,
    });
    handleOnChangeRoom(room);
  }

  return (
    <>
      <Form.Label>ACOMODACIÓN</Form.Label>
      <InputGroup hasValidation as={Col} className="p-3">
        <Form.Check
          name="sencilla"
          type="checkbox"
          label="Sencilla"
          onChange={handleOnChangeCheckbox}
          required
        />
        <InputGroup>
          <InputGroup.Text>$ COP</InputGroup.Text>
          <Form.Control
            name="sencilla"
            onChange={handleOnChangeControl}
            disabled={!currentChecked.includes("sencilla")}
            required
          />
        </InputGroup>
      </InputGroup>
      <InputGroup hasValidation as={Col} className="p-3">
        <Form.Check
          name="doble"
          type="checkbox"
          label="Doble"
          onChange={handleOnChangeCheckbox}
        />
        <InputGroup>
          <InputGroup.Text>$ COP</InputGroup.Text>
          <Form.Control
            name="doble"
            onChange={handleOnChangeControl}
            disabled={!currentChecked.includes("doble")}
          />
        </InputGroup>
      </InputGroup>
      <InputGroup hasValidation as={Col} className="p-3">
        <Form.Check
          name="triple"
          type="checkbox"
          label="Triple"
          onChange={handleOnChangeCheckbox}
        />
        <InputGroup>
          <InputGroup.Text>$ COP</InputGroup.Text>
          <Form.Control
            name="triple"
            onChange={handleOnChangeControl}
            disabled={!currentChecked.includes("triple")}
          />
        </InputGroup>
      </InputGroup>
      <InputGroup hasValidation as={Col} className="p-3">
        <Form.Check
          name="cuadruple"
          type="checkbox"
          label="Cuadruple"
          onChange={handleOnChangeCheckbox}
        />
        <InputGroup>
          <InputGroup.Text>$ COP</InputGroup.Text>
          <Form.Control
            name="cuadruple"
            onChange={handleOnChangeControl}
            disabled={!currentChecked.includes("cuadruple")}
          />
        </InputGroup>
      </InputGroup>
      <InputGroup hasValidation as={Col} className="p-3">
        <Form.Check
          name="quintuple"
          type="checkbox"
          label="Quintuple"
          onChange={handleOnChangeCheckbox}
        />
        <InputGroup>
          <InputGroup.Text>$ COP</InputGroup.Text>
          <Form.Control
            name="quintuple"
            onChange={handleOnChangeControl}
            disabled={!currentChecked.includes("quintuple")}
          />
        </InputGroup>
      </InputGroup>
    </>
  );
}
