import React, { useEffect, useState } from "react";
import { Col, Form } from "react-bootstrap";

export default function RoomForm({ handleOnChangeRoom }) {
  const [checkedItem, setCheckedItem] = useState({});
  const [currentChecked, setCurrentChecked] = useState(["sencilla"]);
  const [room, setRoom] = useState({});
  const [valueRoom, setValueRoom] = useState([]);

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
    const price = e.target.value;

    setRoom({
      ...room,
      [name]: price,
    });
    handleOnChangeRoom(room);
  }

  // useEffect(() => {
  //   for (const type in room) {
  //     setValueRoom(...valueRoom, { type: type, price: room[type] });
  //   }
  //   console.log(valueRoom)
  // }, [valueRoom,room]);

  console.log(room, currentChecked);
  return (
    <>
      <Form.Label>ACOMODACIÓN</Form.Label>
      <Form.Group as={Col} className="p-3">
        <Form.Check
          name="sencilla"
          type="checkbox"
          label="Sencilla"
          checked
          onChange={handleOnChangeCheckbox}
        />
        <Form.Control
          required
          type="text"
          name="sencilla"
          placeholder="$"
          onChange={handleOnChangeControl}
          disabled={!currentChecked.includes("sencilla")}
        />
      </Form.Group>
      <Form.Group as={Col} className="p-3">
        <Form.Check
          name="doble"
          type="checkbox"
          label="Doble"
          onChange={handleOnChangeCheckbox}
        />
        <Form.Control
          type="text"
          name="doble"
          placeholder="$"
          onChange={handleOnChangeControl}
          disabled={!currentChecked.includes("doble")}
        />
      </Form.Group>
      <Form.Group as={Col} className="p-3">
        <Form.Check
          name="triple"
          type="checkbox"
          label="Triple"
          onChange={handleOnChangeCheckbox}
        />
        <Form.Control
          type="text"
          name="triple"
          placeholder="$"
          onChange={handleOnChangeControl}
          disabled={!currentChecked.includes("triple")}
        />
      </Form.Group>
      <Form.Group as={Col} className="p-3">
        <Form.Check
          name="cuadruple"
          type="checkbox"
          label="Cuadruple"
          onChange={handleOnChangeCheckbox}
        />
        <Form.Control
          type="text"
          name="cuadruple"
          placeholder="$"
          onChange={handleOnChangeControl}
          disabled={!currentChecked.includes("cuadruple")}
        />
      </Form.Group>
      <Form.Group as={Col} className="p-3">
        <Form.Check
          name="quintuple"
          type="checkbox"
          label="Quintuple"
          onChange={handleOnChangeCheckbox}
        />
        <Form.Control
          type="text"
          name="quintuple"
          placeholder="$"
          onChange={handleOnChangeControl}
          disabled={!currentChecked.includes("quintuple")}
        />
      </Form.Group>
      <Form.Group as={Col} className="p-3">
        <Form.Check
          name="niños"
          type="checkbox"
          label="Niños"
          onChange={handleOnChangeCheckbox}
        />

        <Form.Control
          type="text"
          placeholder="$"
          disabled={!currentChecked.includes("niños")}
        />
      </Form.Group>
    </>
  );
}
