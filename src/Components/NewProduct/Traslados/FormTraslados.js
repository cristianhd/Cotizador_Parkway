import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Col, FloatingLabel, Modal, Row, ToggleButton } from "react-bootstrap";

import StepTwoFormTraslados from "./StepTwoFormTraslados";
import StepOneFormTraslados from "./StepOneFormTraslados";
import StepThreeFormTraslados from "./StepThreeFormTraslados";

export default function FormTraslados({ handleSave }) {
  const labelStep = [
    { step: "1", label: "Información Traslado" },
    { step: "2", label: "Precios" },
    { step: "3", label: "Descripción del Hospedaje" },
  ];
  const [currentIndexForm, updateIndexForm] = useState(1);
  const [validated, setValidated] = useState(false);
  const [form, setForm] = useState({
    originName: "",
    destinationName: {},
    description: "",
    minPeople: "",
    maxPeople: "",
    priceAdult: {},
    rountrip: false,
    providerUser: "",
  });

  const isFirstStep = currentIndexForm === 1;
  const isLastStep = currentIndexForm === labelStep.length;

  //handlers
  function handleOnSubmitForm(e) {
    const formEvent = e.currentTarget;

    e.preventDefault();
    if (formEvent.checkValidity() === false) {
      e.stopPropagation();
      setValidated(true);
    } else {
      setValidated(false);
      if (!isLastStep) updateIndexForm(currentIndexForm + 1);
      if (isLastStep) handleSave(form);
    }
  }

  function handleOnChangeForm(e) {
    const name = e.target.name;
    const value = e.target.value;

    setForm({
      ...form,
      [name]: value,
    });
  }

  function handleOnChangePriceAdult(name, price, changeRoom) {
    setForm({
      ...form,
      priceAdult: {
        ...form.priceAdult,
        [name]: price,
      },
    });
  }

  function handleOnChangeDestination(label, destination) {
    setForm({
      ...form,
      destinationName: { ...form.destinationName, [label]: destination },
    });
  }
  function handleOnChangeOrigin(origin) {
    setForm({
      ...form,
      originName: origin,
    });
  }
  function handleCleanPriceAdult() {
    setForm({
      ...form,
      priceAdult: {},
    });
  }

  console.log(form);

  return (
    <>
      <Form
        noValidate
        validated={validated}
        onSubmit={handleOnSubmitForm}
        autoComplete="off"
      >
        <Modal.Body>
          {labelStep[currentIndexForm - 1].step}
          {". "}
          {labelStep[currentIndexForm - 1].label}
          {labelStep[currentIndexForm - 1].step === "1" && (
            <StepOneFormTraslados
              handleOnChangeForm={handleOnChangeForm}
              handleOnChangeDestination={handleOnChangeDestination}
              handleOnChangeOrigin={handleOnChangeOrigin}
              form={form}
            />
          )}
          {labelStep[currentIndexForm - 1].step === "2" && (
            <StepTwoFormTraslados
              handleCleanPriceAdult={handleCleanPriceAdult}
              handleOnChangePriceAdult={handleOnChangePriceAdult}
              handleOnChangeForm={handleOnChangeForm}
              form={form}
            />
          )}
          {labelStep[currentIndexForm - 1].step === "3" && (
            <StepThreeFormTraslados
              handleOnChangeForm={handleOnChangeForm}
              form={form}
            />
          )}
        </Modal.Body>
        <Modal.Footer className="d-flex-column">
          <Row className="m-1 p-1">
            <div className="w-100 p-1 d-flex justify-content-end">
              <Button variant="warning" className="m-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-pencil-fill"
                  viewBox="0 0 16 16"
                >
                  <path d="M12.854.146a.5.5 0 0 0-.707 0L10.5 1.793 14.207 5.5l1.647-1.646a.5.5 0 0 0 0-.708l-3-3zm.646 6.061L9.793 2.5 3.293 9H3.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.207l6.5-6.5zm-7.468 7.468A.5.5 0 0 1 6 13.5V13h-.5a.5.5 0 0 1-.5-.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.5-.5V10h-.5a.499.499 0 0 1-.175-.032l-.179.178a.5.5 0 0 0-.11.168l-2 5a.5.5 0 0 0 .65.65l5-2a.5.5 0 0 0 .168-.11l.178-.178z" />
                </svg>{" "}
                Editar{" "}
              </Button>
              <Button
                disabled={isFirstStep}
                onClick={() => updateIndexForm(currentIndexForm - 1)}
              >
                Anterior
              </Button>
              {isLastStep ? (
                <Button variant="primary" type="submit">
                  Guardar
                </Button>
              ) : (
                <Button type="submit">Siguiente</Button>
              )}
            </div>
          </Row>
        </Modal.Footer>
      </Form>
    </>
  );
}
