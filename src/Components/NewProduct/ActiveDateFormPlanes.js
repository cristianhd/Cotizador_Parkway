import React, { useState } from "react";
import { Col, FloatingLabel, Form, Row, ToggleButton } from "react-bootstrap";
import FloatingInput from "./FloatingInput";

export default function ActiveDateFormPlanes({ form, handleOnChangeForm }) {
  const [currentChecked, setCurrentChecked] = useState(["0"]);
  const meses = [
    "Todo el Año",
    "Enero",
    "Febrero",
    "Marzo",
    "Abril",
    "Mayo",
    "Junio",
    "Julio",
    "Agosto",
    "Septiembre",
    "Octubre",
    "Noviembre",
    "Diciembre",
  ];

  function handleonChange(e) {
    const name = e.target.name;
    const value = e.target.value.toString();

    if (value === "0") {
      if (currentChecked.includes("0")) {
        setCurrentChecked([]);
      } else {
        setCurrentChecked(["0"]);
      }
    } else {
      if (currentChecked.includes(value)) {
        setCurrentChecked(currentChecked.filter((item) => item !== value));
      } else {
        setCurrentChecked([...currentChecked, value]);
      }
    }
  }

  return (
    <>
      <Row className="m-1">
        <Form.Group className="p-1 m-1">
          {meses.map((mes, index) => {
            let value = mes.replace(/\s/g, "");
            return (
              <ToggleButton
                className="p-3 m-1 shadow-none"
                id={`toggle-check-${index.toString()}`}
                name="activeDate"
                type="checkbox"
                size="sm"
                variant="outline-primary"
                checked={currentChecked.includes(index.toString())}
                value={index.toString()}
                key={index}
                onChange={(e) => handleonChange(e)}
                disabled={
                  currentChecked.includes("0") && index.toString() !== "0"
                }
              >
                {mes}
              </ToggleButton>
            );
          })}
        </Form.Group>
      </Row>
    </>
  );
}
