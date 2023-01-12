import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Col, FloatingLabel, Modal, Row, ToggleButton } from "react-bootstrap";

import StepTwoFormPlanes from "./StepTwoFormPlanes";
import StepOneFormPlanes from "./StepOneFormPlanes";
import StepThreeFormPlanes from "./StepThreeFormPlanes";
import StepFourFormPlanes from "./StepFourFormPlanes";

export default function FormPlanes({ handleSave, edit, data }) {
  const labelStep = [
    { step: "1", label: "Información General" },
    { step: "2", label: "Información Hospedaje" },
    { step: "3", label: "Seleccionar Fechas" },
    { step: "4", label: "Descripción del Plan" },
  ];
  const [currentIndexForm, updateIndexForm] = useState(1);
  const [validated, setValidated] = useState(false);
  const initialForm = {
    title: "",
    destinationName: {},
    transport: "",
    providerUser: "",
    nameAccommodation: "",
    categoryAccommodation: "",
    numberNigths: "",
    priceKids: {},
    priceAdult: {},
    activeDate: [],
    description: "",
  };
  const editData = {
    ...data,
    destinationName: {},
    priceAdult: {},
    priceKids: {},
  };
  console.log(edit);
  const [form, setForm] = useState(edit ? editData : initialForm);

  const isFirstStep = currentIndexForm === 1;
  const isLastStep = currentIndexForm === labelStep.length;
  console.log(form);
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
      if (isLastStep) {
        if (Object.keys(form.priceAdult).length && form.activeDate.length) {
          handleSave(form);
        } else {
          if (!Object.keys(form.priceAdult).length)
            alert("falta Precio Adultos");
          if (!form.activeDate.length) alert("falta fechas");
        }
      }
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

  function handleOnChangePriceAdult(room, price, changeRoom) {
    console.log(room, price, changeRoom);
    if (changeRoom) {
      setForm({
        ...form,
        priceAdult: {
          ...form.priceAdult,
          [changeRoom]: undefined,
          [room]: price,
        },
      });
    } else {
      setForm({
        ...form,
        priceAdult: {
          ...form.priceAdult,
          [room]: price,
        },
      });
    }
  }
  function handleOnChangePriceKids(room, price) {
    setForm({
      ...form,
      priceKids: {
        ...form.priceKids,
        [room]: price,
      },
    });
  }

  function handleOnChangeDestination(label, destination) {
    setForm({
      ...form,
      destinationName: { ...form.destinationName, [label]: destination },
    });
  }

  function handleCleanPriceAdult() {
    setForm({
      ...form,
      priceAdult: {},
    });
  }

  function handleOnChangeDate(e) {
    const value = e.target.value.toString();

    if (value === "0") {
      if (form.activeDate.includes("0")) {
        setForm({
          ...form,
          activeDate: [],
        });
      } else {
        setForm({
          ...form,
          activeDate: ["0"],
        });
      }
    } else {
      if (form.activeDate.includes(value)) {
        setForm({
          ...form,
          activeDate: form.activeDate.filter((item) => item !== value),
        });
      } else {
        setForm({
          ...form,
          activeDate: [...form.activeDate, value],
        });
      }
    }
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
            <StepOneFormPlanes
              handleOnChangeForm={handleOnChangeForm}
              handleOnChangeDestination={handleOnChangeDestination}
              form={form}
            />
          )}
          {labelStep[currentIndexForm - 1].step === "2" && (
            <StepTwoFormPlanes
              handleOnChangePriceAdult={handleOnChangePriceAdult}
              handleOnChangePriceKids={handleOnChangePriceKids}
              handleOnChangeForm={handleOnChangeForm}
              form={form}
            />
          )}
          {labelStep[currentIndexForm - 1].step === "3" && (
            <StepThreeFormPlanes
              handleonChangeDate={handleOnChangeDate}
              form={form}
            />
          )}
          {labelStep[currentIndexForm - 1].step === "4" && (
            <StepFourFormPlanes
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
