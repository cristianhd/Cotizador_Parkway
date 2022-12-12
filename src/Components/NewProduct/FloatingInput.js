import React from "react";
import { FloatingLabel, Form } from "react-bootstrap";
import { UpperCaseStr } from "../../utils/UpperCaseStr";

export default function FloatingInput({
  name,
  labelName,
  value,
  onChange,
  disabled,
  type,
  min,
}) {
  return (
    <>
      <FloatingLabel
        className="w-100"
        id={`input-${labelName}`}
        label={labelName}
      >
        <Form.Control
          required
          className="shadow-none"
          name={name}
          type={type}
          min={min}
          placeholder={`Ingrese el ${labelName}`}
          value={value}
          onChange={onChange}
          autoComplete="off"
          disabled={disabled}
        />
      </FloatingLabel>
    </>
  );
}
