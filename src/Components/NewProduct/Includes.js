import React, { useEffect, useState } from "react";
import { Form } from "react-bootstrap";

export default function Includes({ includesForm, handleOnChangeIncludes }) {
  console.log(handleOnChangeIncludes);
  const includesItems = [
    { label: "Tranporte", name: "transport" },
    { label: "Alimentación", name: "food" },
    { label: "Recorridos", name: "route" },
    { label: "Visitas", name: "visit" },
  ];

  const [currentCheck, setCurrentCheck] = useState([]);

  useEffect(() => {
    let includesCheck = [];
    for (const categoryIncludes in includesForm) {
      if (includesForm[categoryIncludes] !== "") {
        includesCheck.push(categoryIncludes);
      }
    }
    setCurrentCheck(currentCheck.concat(includesCheck));
  }, []);
  console.log(currentCheck);

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

  function setValueInput(item) {
    const nameInput = item.name;

    if (nameInput === "transport") return includesForm.transport;
    if (nameInput === "food") return includesForm.food;
    if (nameInput === "route") return includesForm.route;
    if (nameInput === "visit") return includesForm.visit;
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
            checked={currentCheck.includes(item.name)}
          />
          <Form.Control
            className="w-75 shadow-none"
            required
            name={item.name}
            value={setValueInput(item)}
            onChange={(e) => handleOnChangeInput(e)}
            disabled={!currentCheck.includes(item.name)}
          />
        </div>
      ))}
    </div>
  );
}
