import React, { useRef } from "react";
import Form from "react-bootstrap/Form";
import "../style/datePicker.css";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-daterangepicker/daterangepicker.css";
import DateRangePicker from "react-bootstrap-daterangepicker";
import FloatingLabel from "react-bootstrap/esm/FloatingLabel";
import moment from "moment";

export default function DatePicker({ handleOnChange, value }) {
  var today = moment();
  var tomorrow = moment(today).add(1, "days");

  return (
    <div
      className="date-picker p-1 d-flex flex-row align-items-center rounded"
      style={{ backgroundColor: "white" }}
    >
      <div className="px-2 py-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          fill="currentColor"
          className="bi bi-calendar2-range-fill"
          viewBox="0 0 16 16"
        >
          <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zm9.954 3H2.545c-.3 0-.545.224-.545.5v1c0 .276.244.5.545.5h10.91c.3 0 .545-.224.545-.5v-1c0-.276-.244-.5-.546-.5zM10 7a1 1 0 0 0 0 2h5V7h-5zm-4 4a1 1 0 0 0-1-1H1v2h4a1 1 0 0 0 1-1z" />
        </svg>
      </div>

      <DateRangePicker
        onApply={handleOnChange}
        initialSettings={{
          startDate: today,
          endDate: tomorrow,
          locale: {
            format: "DD-MM-YYYY",
          },
        }}
      >
        <FloatingLabel className="p-0 w-100  " label="Fechas">
          <Form.Control
            required
            name="date"
            value={value}
            type="text"
            placeholder="Ingrese las fechas"
            className="text-center border-0 shadow-none"
          ></Form.Control>
        </FloatingLabel>
      </DateRangePicker>
    </div>
  );
}
