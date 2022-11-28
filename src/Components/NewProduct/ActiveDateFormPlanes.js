import React, { useEffect, useState } from "react";
import { Col, FloatingLabel, Form, Row, ToggleButton } from "react-bootstrap";
import FloatingInput from "./FloatingInput";

export default function ActiveDateFormPlanes({ form, handleonChangeDate }) {
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
                checked={form.activeDate.includes(index.toString())}
                value={index.toString()}
                key={index}
                onChange={(e) => handleonChangeDate(e)}
                disabled={
                  form.activeDate.includes("0") && index.toString() !== "0"
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
