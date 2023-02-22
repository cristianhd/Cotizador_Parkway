import React, { useEffect, useState } from "react";
import { Form } from "react-bootstrap";
import "../../../src/style/includes.css";

export default function Includes({ form, handleOnChangeIncludes }) {
  const includesItems = [
    { label: "Transporte", name: "transport" },
    { label: "Alimentación", name: "food" },
    { label: "Recorridos", name: "route" },
    { label: "Visitas", name: "visit" },
  ];

  const [currentCheck, setCurrentCheck] = useState([]);

  useEffect(() => {
    let includesCheck = [];
    for (const categoryIncludes in form.includes) {
      if (form.includes[categoryIncludes] !== "") {
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
      handleOnChangeIncludes(nameCheck, "");
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

    if (nameInput === "transport" && form.includes)
      return form.includes.transport;
    if (nameInput === "food" && form.includes) return form.includes.food;
    if (nameInput === "route" && form.includes) return form.includes.route;
    if (nameInput === "visit" && form.includes) return form.includes.visit;
  }

  return (
    <>
      <h6>Incluye:</h6>
      <div className="m-1 d-flex flex-wrap gap-2">
        {includesItems.map((item, index) => (
          <div key={index} className="includes py-1">
            <Form.Check
              type="switch"
              label={item.label}
              name={item.name}
              onChange={(e) => handleOnCheck(e)}
              checked={currentCheck.includes(item.name)}
            />
            <Form.Control
              required
              as="textarea"
              maxLength="390"
              className="includes-control shadow-none"
              name={item.name}
              value={setValueInput(item)}
              onChange={(e) => handleOnChangeInput(e)}
              disabled={!currentCheck.includes(item.name)}
            />
          </div>
        ))}
      </div>
    </>
  );
}
