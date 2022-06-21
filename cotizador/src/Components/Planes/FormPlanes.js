import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import {
  ButtonGroup,
  Modal,
  ToggleButton,
  ToggleButtonGroup,
} from "react-bootstrap";
import RoomForm from "./RoomForm";

export default function FormPlanes({ handleSave }) {
  const [currentChecked, setCurrentChecked] = useState([]);
  const [disabled, setDisabled] = useState(false);

  const [form, setForm] = useState({
    title: "",
    description: "",
    destination: "",
    transport: "",
    room: [],
    activeDate: [],
    disableDate: [],
  });
  const [checkedItem, setCheckedItem] = useState({});
  const meses = [
    "Ene",
    "Feb",
    "Mar",
    "Abr",
    "May",
    "Jun",
    "Jul",
    "Agos",
    "Sep",
    "Oct",
    "Nov",
    "Dic",
    "Todo el Año",
  ];

  const Eventuales = [
    "Semana Santa",
    "Mitad Año",
    "Semana Receso",
    "Fin Año",
    "Temporada Ballenas",
  ];

  function handleonChange(e) {
    const name = e.target.name;
    const value = e.target.value;
    console.log(name);
    const checked = e.target.checked;

    

    if (currentChecked.includes(value)) {
      setCurrentChecked(currentChecked.filter((item) => item !== value));
      setForm({
        ...form,
        [name]: form[name].filter((item)=> item !== value)
      });
    } else {
      setCurrentChecked([...currentChecked, value]);
    }
    setCheckedItem({
      ...checkedItem,
      [value]: checked,
    });

    setForm({
      ...form,
      [name]: [...form[name], value],
    });

  }

  function handleOnChangeForm(e) {
    const name = e.target.name;
    const value = e.target.value;
    console.log(name, value);
    setForm({
      ...form,
      [name]: value.toUpperCase(),
    });
  }

  function handleOnChangeRoom(rooms) {
    var room = Object.keys(rooms).map(function (type) {
      return { type: type, Price: rooms[type] };
    });

    setForm({
      ...form,
      room,
    });
  }
  console.log(form);

  return (
    <>
      <Modal.Body>
        <Form>
          <Form.Group className="mb-3">
            <Form.Label>Titulo</Form.Label>
            <Form.Control
              name="title"
              type="input"
              placeholder=""
              value={form.title}
              onChange={handleOnChangeForm}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Proveedor</Form.Label>
            <Form.Control
              name="provider"
              type="input"
              placeholder=""
              value={form.provider}
              onChange={handleOnChangeForm}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Origen</Form.Label>
            <Form.Control
              name="origin"
              type="input"
              placeholder=""
              value={form.origin}
              onChange={handleOnChangeForm}
            />
            <Form.Label>Destino</Form.Label>
            <Form.Control
              name="destination"
              type="input"
              placeholder=""
              value={form.destination}
              onChange={handleOnChangeForm}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Trasporte</Form.Label>
            <Form.Control
              name="transport"
              type="input"
              placeholder=""
              value={form.transport}
              onChange={handleOnChangeForm}
            />
          </Form.Group>

          <RoomForm handleOnChangeRoom={handleOnChangeRoom} />

          <Form.Group className="mb-3">
            <Form.Label>Aplica</Form.Label>
            <div>
              <ButtonGroup>
                {meses.map((mes, index) => {
                  let value = mes.replace(/\s/g, "");
                  return (
                    <ToggleButton
                      className="mb-2"
                      id={`toggle-check-${value}`}
                      name="activeDate"
                      type="checkbox"
                      variant="outline-primary"
                      checked={currentChecked.includes(value)}
                      value={value}
                      key={index}
                      onChange={handleonChange}
                      disabled={checkedItem.TodoelAño && value !== "TodoelAño"}
                    >
                      {mes}
                    </ToggleButton>
                  );
                })}
              </ButtonGroup>
            </div>
          </Form.Group>
          <Form.Label>No Aplica</Form.Label>
          <div>
            <ButtonGroup>
              {Eventuales.map((evento, index) => {
                let value = evento.replace(/\s/g, "");
                return (
                  <ToggleButton
                    className="mb-2"
                    id={`toggle-check-${value}`}
                    name="disableDate"
                    type="checkbox"
                    variant="outline-primary"
                    checked={currentChecked.includes(value)}
                    value={value}
                    key={index}
                    onChange={handleonChange}
                  >
                    {evento}
                  </ToggleButton>
                );
              })}
            </ButtonGroup>
          </div>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="primary" onClick={handleSave()}>
          Guardar
        </Button>
      </Modal.Footer>
    </>
  );
}
