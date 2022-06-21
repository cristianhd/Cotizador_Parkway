import React, { useEffect, useState } from "react";
import { Form } from "react-bootstrap";

export default function RoomForm({handleOnChangeRoom}) {
  const [checkedItem, setCheckedItem] = useState({});
  const [currentChecked, setCurrentChecked] = useState([]);
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
    handleOnChangeRoom(room)
  }

  // useEffect(() => {
  //   for (const type in room) {
  //     setValueRoom(...valueRoom, { type: type, price: room[type] });
  //   }
  //   console.log(valueRoom)
  // }, [valueRoom,room]);

  console.log(room, currentChecked);
  return (
    <Form.Group className="mb-3">
      <Form.Label>ACOMODACIÓN</Form.Label>
      <Form.Check
        name="sencilla"
        type="checkbox"
        label="Sencilla"
        onChange={handleOnChangeCheckbox}
      />
      <Form.Control
        type="text"
        name="sencilla"
        placeholder="Precio"
        onChange={handleOnChangeControl}
        disabled={!currentChecked.includes("sencilla")}
      />
      <Form.Check
        name="doble"
        type="checkbox"
        label="Doble"
        onChange={handleOnChangeCheckbox}
      />
      <Form.Control
        type="text"
        name="doble"
        placeholder="Precio"
        onChange={handleOnChangeControl}
        disabled={!currentChecked.includes("doble")}
      />
      <Form.Check
        name="triple"
        type="checkbox"
        label="Triple"
        onChange={handleOnChangeCheckbox}
      />
      <Form.Control
        type="text"
        name="triple"
        placeholder="Precio"
        onChange={handleOnChangeControl}
        disabled={!currentChecked.includes("triple")}
      />
      <Form.Check
        name="cuadruple"
        type="checkbox"
        label="Cuadruple"
        onChange={handleOnChangeCheckbox}
      />
      <Form.Control
        type="text"
        name="cuadruple"
        placeholder="Precio"
        onChange={handleOnChangeControl}
        disabled={!currentChecked.includes("cuadruple")}
      />
      <Form.Check
        name="quintuple"
        type="checkbox"
        label="Quintuple"
        onChange={handleOnChangeCheckbox}
      />
      <Form.Control
        type="text"
        name="quintuple"
        placeholder="Precio"
        onChange={handleOnChangeControl}
        disabled={!currentChecked.includes("quintuple")}
      />
      <Form.Check
        name="niños"
        type="checkbox"
        label="Niños"
        onChange={handleOnChangeCheckbox}
      />

      <Form.Control
        type="text"
        placeholder="Precio"
        disabled={!currentChecked.includes("niños")}
      />
    </Form.Group>
  );
}
