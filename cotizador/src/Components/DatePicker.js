import React from "react";
import Form from "react-bootstrap/Form";
import "../style/datePicker.css";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-daterangepicker/daterangepicker.css";
import DateRangePicker from "react-bootstrap-daterangepicker";
import FloatingLabel from "react-bootstrap/esm/FloatingLabel";

export default function DatePicker() {
  var today = new Date().toLocaleDateString("en-GB"); // en-GB Formato ingles DD/MM/YYYY

  return (
    <FloatingLabel className="" label="Fechas">
      <DateRangePicker
      className=""
        initialSettings={{
          startDate: today,
          locale: {
            format: "DD-MM-YYYY",
          },
        }}
      >
        <Form.Control type="text" placeholder="sadsa" className="text-center"></Form.Control>
      </DateRangePicker>
    </FloatingLabel>
  );
}
