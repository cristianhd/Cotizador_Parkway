import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

import {
  ButtonGroup,
  Col,
  FloatingLabel,
  InputGroup,
  Modal,
  Row,
  ToggleButton,
  ToggleButtonGroup,
} from "react-bootstrap";
import RoomForm from "./RoomForm";

export default function FormPlanes({ handleSave }) {
  const [currentChecked, setCurrentChecked] = useState([]);
  const [validated, setValidated] = useState(false);
  const [form, setForm] = useState({});
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

  function handleOnSubmitForm(e) {
    const formEvent = e.currentTarget;
    e.preventDefault();
    if (formEvent.checkValidity() === false) {
      e.stopPropagation();
    } else {
      handleSave(form);
    }
    setValidated(true);
  }

  function handleOnChangeForm(e) {
    const name = e.target.name;
    const value = e.target.value;
    console.log(name, value);
    setForm({
      ...form,
      [name]: value,
    });
  }

  function handleonChange(e) {
    const name = e.target.name;
    const value = e.target.value;
    console.log(name);
    const checked = e.target.checked;

    if (currentChecked.includes(value)) {
      setCurrentChecked(currentChecked.filter((item) => item !== value));
      setForm({
        ...form,
        [name]: form[name].filter((item) => item !== value),
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
        <Form noValidate validated={validated} onSubmit={handleOnSubmitForm}>
          <Row className="m-1">
            <Form.Group as={Col}>
              <InputGroup className="p-3">
                <InputGroup.Text>Titulo</InputGroup.Text>
                <Form.Control
                  required
                  name="title"
                  type="input"
                  placeholder=""
                  value={form.title}
                  onChange={handleOnChangeForm}
                />
              </InputGroup>
            </Form.Group>
            <Form.Group as={Col}>
              <InputGroup className="p-3">
                <InputGroup.Text>Origen</InputGroup.Text>
                <Form.Control
                  required
                  name="origin"
                  type="input"
                  placeholder=""
                  value={form.origin}
                  onChange={handleOnChangeForm}
                />
              </InputGroup>
            </Form.Group>
            <Form.Group as={Col}>
              <InputGroup className="p-3">
                <InputGroup.Text>Destino</InputGroup.Text>
                <Form.Control
                  required
                  name="destination"
                  type="input"
                  placeholder=""
                  value={form.destination}
                  onChange={handleOnChangeForm}
                />
              </InputGroup>
            </Form.Group>
          </Row>
          <Row className="m-1">
            <Form.Group as={Col}>
              <InputGroup className="p-3">
                <InputGroup.Text>Transporte</InputGroup.Text>
                <Form.Control
                  required
                  name="transport"
                  type="input"
                  placeholder=""
                  value={form.transport}
                  onChange={handleOnChangeForm}
                />
              </InputGroup>
            </Form.Group>
            <Form.Group as={Col}>
              <InputGroup className="p-3">
                <InputGroup.Text>Proveedor</InputGroup.Text>
                <Form.Control
                  required
                  name="provider"
                  type="input"
                  placeholder=""
                  value={form.provider}
                  onChange={handleOnChangeForm}
                />
              </InputGroup>
            </Form.Group>
          </Row>
          <Row className="m-1">
            <RoomForm handleOnChangeRoom={handleOnChangeRoom} />
          </Row>
          <Row className="m-1">
            <Col className="p-3">
              <Form.Label>APLICA</Form.Label>
              <Form.Group className="p-1 m-1">
                {meses.map((mes, index) => {
                  let value = mes.replace(/\s/g, "");
                  return (
                    <ToggleButton
                      className="p-3 m-1"
                      id={`toggle-check-${value}`}
                      name="activeDate"
                      type="checkbox"
                      size="sm"
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
              </Form.Group>
            </Col>
            <Col className="p-3">
              <Form.Label>NO APLICA</Form.Label>

              <Form.Group className="p-1 m-1 ">
                {Eventuales.map((evento, index) => {
                  let value = evento.replace(/\s/g, "");
                  return (
                    <ToggleButton
                      className="p-3 m-1"
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
              </Form.Group>
            </Col>
          </Row>
          <Row className="m-1">
            <Form.Group as={Col} className="p-3">
              <FloatingLabel required label="DESCRIPCION" className="m-1">
                <Form.Control
                  required
                  as="textarea"
                  placeholder="Escribe una descripción"
                  name="description"
                  value={form.description}
                  onChange={handleOnChangeForm}
                />
              </FloatingLabel>
            </Form.Group>
            <Col className="p-3">
              <Form.Label>FOTOS</Form.Label>
              <Form.Group className="p-1 m-1">
                <Form.Control
                  type="file"
                  accept=".jpg,.png"
                  name="photo"
                  value={form.photo}
                  onChange={handleOnChangeForm}
                />
              </Form.Group>
            </Col>
          </Row>

          <Modal.Footer>
            <Button variant="primary" type="submit">
              Guardar
            </Button>
          </Modal.Footer>
        </Form>
      </Modal.Body>
    </>
  );
}
