import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import { ButtonGroup, ToggleButton, ToggleButtonGroup } from "react-bootstrap";

export default function FormPlanes() {
  const [currentChecked, setCurrentChecked] = useState([]);
  const [disabled, setDisabled] = useState(false);
  const [form, setForm] = useState({});
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
    "Fin de Año",
    "Temporada de Ballenas",
    "otro",
  ];

  function handleonChange(e) {
    const value = e.target.value;
    const checked = e.target.checked;

    if (value === "Todo el Año") {
      setCurrentChecked([value]);
      setDisabled(true);
    }

    if (currentChecked.includes(value)) {
      setCurrentChecked(currentChecked.filter((item) => item !== value));
    } else {
      setCurrentChecked([...currentChecked, value]);
    }

    setForm({
      ...form,
      [value]: checked,
    });
  }

  return (
    <div>
      <Form>
        <Form.Group className="mb-3">
          <Form.Label>Titulo</Form.Label>
          <Form.Control type="input" placeholder="" />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Proveedor</Form.Label>
          <Form.Control type="text" placeholder="" />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Origen</Form.Label>
          <Form.Control type="text" placeholder="" />
          <Form.Label>Destino</Form.Label>
          <Form.Control type="input" placeholder="" />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Trasporte</Form.Label>
          <Form.Control type="text" placeholder="" />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>HABITACIONES</Form.Label>
          <Form.Check type="checkbox" label="Sencilla" />
          <Form.Control type="text" placeholder="Precio" />
          <Form.Check type="checkbox" label="Doble" />
          <Form.Control type="text" placeholder="Precio" />
          <Form.Check type="checkbox" label="Triple" />
          <Form.Control type="text" placeholder="Precio" />
          <Form.Check type="checkbox" label="Cuadruple" />
          <Form.Control type="text" placeholder="Precio" />
          <Form.Check type="checkbox" label="Quintuple" />
          <Form.Control type="text" placeholder="Precio" />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Check type="checkbox" label="Niños" />
          <Form.Label>Price</Form.Label>
          <Form.Control type="text" placeholder="" />
        </Form.Group>
        <Form.Group className="mb-3"></Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Aplica</Form.Label>
          <div>
            <ButtonGroup>
              {meses.map((mes, index) => {
                return (
                  <ToggleButton
                    className="mb-2"
                    id={`toggle-check-${mes}`}
                    type="checkbox"
                    variant="outline-primary"
                    checked={currentChecked.includes(mes)}
                    value={mes}
                    key={index}
                    onChange={handleonChange}
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
              return (
                <ToggleButton
                  className="mb-2"
                  id={`toggle-check-${evento}`}
                  type="checkbox"
                  variant="outline-primary"
                  checked={currentChecked.includes(evento)}
                  value={evento}
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
    </div>
  );
}
