import React, { useState } from "react";
import { Form } from "react-bootstrap";
import FloatingInput from "./FloatingInput";

export default function RoomPriceSeasson({
  handleOnChangePriceAdult,
  form,
  indexRoom,
}) {
  const [selectRoom, setSelectRoom] = useState("Habitación 1");
  const [priceRoomTA, setPriceRoomTA] = useState();
  const [priceRoomTB, setPriceRoomTB] = useState();
  const typeRooms = ["Sencilla", "Doble", "Triple", "Cuadruple", "Quintuple"];

  function handleOnChangeTypeRooms(e) {
    const currentSelectRoom = `${e.target.value}-${indexRoom}`;
    if (
      selectRoom &&
      priceRoomTA &&
      priceRoomTB &&
      currentSelectRoom !== selectRoom
    ) {
      handleOnChangePriceAdult(
        currentSelectRoom,
        [priceRoomTA, priceRoomTB],
        selectRoom
      );
    }
    setSelectRoom(currentSelectRoom);
  }
  function handleOnChangeRoomPrice(e) {
    const nameInput = e.target.name;
    const priceTA = e.target.name.includes("TA") ? e.target.value : priceRoomTA;
    const priceTB = e.target.name.includes("TB") ? e.target.value : priceRoomTB;

    setPriceRoomTA(priceTA);
    setPriceRoomTB(priceTB);
    console.log(priceTA, priceTB);
    if (priceTA && priceTB) {
      let room = nameInput.slice(0, -5);

      handleOnChangePriceAdult(room, [priceTA, priceTB]);
    }
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
        labelName={`Habitación ${indexRoom} (TB)`}
        name={`${selectRoom} (TB)`}
        type="number"
        min="0"
        onChange={(e) => handleOnChangeRoomPrice(e)}
        value={form.priceAdult.selectRoom}
      ></FloatingInput>
      <FloatingInput
        labelName={`Habitación ${indexRoom} (TA)`}
        name={`${selectRoom} (TA)`}
        type="number"
        min="0"
        onChange={(e) => handleOnChangeRoomPrice(e)}
        value={form.priceAdult.selectRoom}
      ></FloatingInput>
    </div>
  );
}
