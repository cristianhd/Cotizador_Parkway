import React from "react";
import Form from "react-bootstrap/Form";
import "../style/datePicker.css";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-daterangepicker/daterangepicker.css";
import DateRangePicker from "react-bootstrap-daterangepicker";

export default function DatePicker() {
  const tiempoTranscurrido = Date.now();
  const hoy = new Date(tiempoTranscurrido);

  return (
    <div className="date-wrap d-flex flex-colum">
      <div className="dates">
        <div className="d-flex flex-row justify-content-around">
          <span>Entrada</span>
          <span>Salida</span>
        </div>
        <div className="picker">

        <DateRangePicker initialSettings={{ startDate: hoy }}>
          <Form.Control type="text" className="input-c">
          </Form.Control>
        </DateRangePicker>
      </div>
        </div>
    </div>
  );
}
