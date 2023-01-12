import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Modal, Row } from "react-bootstrap";

import StepTwoFormAsistencias from "./StepTwoFormAsistencias";
import StepOneFormAsistencias from "./StepOneFormAsistencias";

export default function FormAsistencias({ handleSave, edit, data }) {
  const labelStep = [
    { step: "1", label: "Información Asistencia y Precio" },
    { step: "2", label: "Descripción de la Asistencia" },
  ];
  const [currentIndexForm, updateIndexForm] = useState(1);
  const [validated, setValidated] = useState(false);
  const initialForm = {
    title: "",
    destinationName: "",
    description: "",
    priceAdult: "",
    providerUser: "",
  };
  const editData = {
    ...data,
  };
  const [form, setForm] = useState(edit ? editData : initialForm);

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

  function handleOnChangeDestination(name, destination) {
    setForm({
      ...form,
      [name]: destination,
    });
  }

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
            <StepOneFormAsistencias
              handleOnChangeDestination={handleOnChangeDestination}
              handleOnChangeForm={handleOnChangeForm}
              form={form}
            />
          )}
          {labelStep[currentIndexForm - 1].step === "2" && (
            <StepTwoFormAsistencias
              handleOnChangeForm={handleOnChangeForm}
              form={form}
            />
          )}
        </Modal.Body>
        <Modal.Footer className="d-flex-column">
          <Row className="m-1 p-1">
            <div className="w-100 p-1 d-flex justify-content-end">
              {!isFirstStep && (
                <Button onClick={() => updateIndexForm(currentIndexForm - 1)}>
                  Anterior
                </Button>
              )}
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
