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
}) {
  return (
    <>
      <FloatingLabel
        className="w-100 p-1"
        id={`input-${labelName}`}
        label={labelName}
      >
        <Form.Control
          required
          className="shadow-none"
          name={name}
          type={type}
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
