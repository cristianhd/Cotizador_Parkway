import React, { useState } from "react";
import { Form } from "react-bootstrap";

export default function Includes({ includes, handleOnChangeIncludes }) {
  console.log(handleOnChangeIncludes);
  const includesItems = [
    { label: "Tranporte", name: "transport" },
    { label: "Alimentación", name: "food" },
    { label: "Recorridos", name: "route" },
    { label: "Visitas", name: "visit" },
  ];
  const [currentCheck, setCurrentCheck] = useState([]);

  function handleOnCheck(e) {
    const nameCheck = e.target.name;
    if (currentCheck.includes(nameCheck)) {
      setCurrentCheck(currentCheck.filter((item) => item !== nameCheck));
    } else {
      setCurrentCheck([...currentCheck, nameCheck]);
    }
  }
  function handleOnChangeInput(e) {
    const name = e.target.name;
    const includesInput = e.target.value;
    handleOnChangeIncludes(name, includesInput);
  }

  return (
    <div className="m-1">
      {includesItems.map((item, index) => (
        <div
          key={index}
          className="d-flex flex-sm-column flex-md-row justify-content-between py-1 gap-2"
        >
          <Form.Check
            type="switch"
            label={item.label}
            name={item.name}
            onChange={(e) => handleOnCheck(e)}
          />
          <Form.Control
            required
            name={item.name}
            onChange={(e) => handleOnChangeInput(e)}
            className="w-75 shadow-none"
            disabled={!currentCheck.includes(item.name)}
          />
        </div>
      ))}
    </div>
  );
}
