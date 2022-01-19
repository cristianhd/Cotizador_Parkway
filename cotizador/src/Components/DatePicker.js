import React from "react";
import Form from "react-bootstrap/Form";
import "../style/datePicker.css";

export default function DatePicker() {
  return (
    <div className="date-wrap d-flex flex-row">
      <div className="check-in">
        <span>Check-out</span>
        <Form.Control
          className="input-date"
          placeholder="20-01-2022"
        ></Form.Control>
      </div>
      <div className="check-out">
        <span>Check-in</span>
        <Form.Control
          className="input-date"
          placeholder="20-01-2022"
        ></Form.Control>
      </div>
    </div>
  );
}
