import React, { useEffect, useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import FloatingInput from "./FloatingInput";

export default function InfoGeneralFormPlanes({
  handleOnChangeForm,
  handleOnChangeDestination,
  form,
}) {
  const [checkedMultiDestination, updateCheckedMultiDestination] =
    useState(false);
  const [multiDestination, addMultiDestination] = useState([1]);
  const [newDestination, setNewDestination] = useState({});

  function handleOnChangeCheck(e) {
    const checked = e.target.checked;
    if (checked) {
      addMultiDestination([...multiDestination, 2]);
    } else {
      addMultiDestination([1]);
    }
    updateCheckedMultiDestination(checked);
  }

  function AddDestination() {
    addMultiDestination([...multiDestination, multiDestination.length + 1]);
  }
  function RemoveDestination() {
    const label = "destino-" + multiDestination[multiDestination.length - 1];
    const destination = undefined;

    addMultiDestination(multiDestination.slice(0, multiDestination.length - 1));
    setNewDestination({ ...newDestination, [label]: " " });
    handleOnChangeDestination(label, destination);
  }
  function handleOnChangeMultiDestination(e) {
    const label = e.target.name;
    const destination = e.target.value;
    setNewDestination({ ...newDestination, [label]: destination });
    handleOnChangeDestination(label, destination);
  }

  // handleOnChangeDestination(newDestination);

  console.log(newDestination);
  return (
    <>
      <Row className="m-1">
        <Form.Group className="" as={Col}>
          <FloatingInput
            name="title"
            labelName="Titulo"
            value={form.title}
            onChange={(e) => handleOnChangeForm(e)}
          />
        </Form.Group>
      </Row>

      <Row className="m-1">
        <Form.Group className="" as={Col}>
          {multiDestination.map((destination, index) => (
            <FloatingInput
              key={index}
              name={`destino-${destination}`}
              labelName={`Destino ${destination}`}
              value={Object.values(form.destination)[index]}
              onChange={(e) => handleOnChangeMultiDestination(e)}
            />
          ))}
          <div className="p-1 d-flex justify-content-between">
            {checkedMultiDestination && multiDestination.length > 1 && (
              <span onClick={RemoveDestination}> - eliminar destino</span>
            )}
            {checkedMultiDestination && multiDestination.length < 5 && (
              <span onClick={AddDestination}> + agregar destino</span>
            )}
          </div>
          <Form.Group className="ps-1">
            <Form.Check
              type="switch"
              label="Multidestino"
              onChange={handleOnChangeCheck}
              checked={multiDestination.length > 1}
            />
          </Form.Group>
        </Form.Group>
      </Row>

      <Row className="m-1">
        <Form.Group className="" as={Col}>
          <FloatingInput
            name="transport"
            labelName="Transporte"
            value={form.transport}
            onChange={(e) => handleOnChangeForm(e)}
          />
        </Form.Group>

        <Form.Group className="" as={Col}>
          <FloatingInput
            name="providerUser"
            labelName="Proveedor"
            value={form.providerUser}
            onChange={(e) => handleOnChangeForm(e)}
          />
        </Form.Group>
      </Row>
    </>
  );
}
