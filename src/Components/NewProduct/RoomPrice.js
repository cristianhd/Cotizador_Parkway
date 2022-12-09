import React, { useState } from "react";
import { Form } from "react-bootstrap";
import FloatingInput from "./FloatingInput";

export default function RoomPrice({
  handleOnChangePriceAdult,
  form,
  indexRoom,
}) {
  const [selectRoom, setSelectRoom] = useState("Habitación 1");
  const [priceRoom, setPriceRoom] = useState();
  const typeRooms = ["sencilla", "doble", "triple", "cuadruple", "quintuple"];

  function handleOnChangeTypeRooms(e) {
    const currentSelectRoom = `${e.target.value}-${indexRoom}`;

    if (selectRoom && currentSelectRoom !== selectRoom) {
      handleOnChangePriceAdult(currentSelectRoom, priceRoom, selectRoom);
    }

    setSelectRoom(currentSelectRoom);
  }
  function handleOnChangeRoomPrice(e) {
    const room = e.target.name;
    const price = e.target.value;

    setPriceRoom(price);
    handleOnChangePriceAdult(room, price);
  }
  console.log(selectRoom);
  return (
    <div className="d-flex">
      <Form.Select
        required
        className="shadow-none m-1"
        onChange={(e) => handleOnChangeTypeRooms(e)}
      >
        <option defaultValue selected disabled>
          Tipo Habitación
        </option>
        {typeRooms.map((typeRoom, index) => (
          <option key={index} value={typeRoom}>
            {typeRoom}
          </option>
        ))}
      </Form.Select>
      <FloatingInput
        labelName={`Habitación ${indexRoom}`}
        name={selectRoom}
        type="text"
        onChange={(e) => handleOnChangeRoomPrice(e)}
        value={form.priceAdult.selectRoom}
      ></FloatingInput>
    </div>
  );
}
