import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Col, FloatingLabel, Modal, Row, ToggleButton } from "react-bootstrap";

import StepTwoFormHospedajes from "./StepTwoFormHospedajes.js";
import StepOneFormHospedajes from "./StepOneFormHospedajes";
import StepThreeFormHospedajes from "./StepThreeFormHospedajes.js";

export default function FormHospedajes({ handleSave, edit, data }) {
  const labelStep = [
    { step: "1", label: "Información Hospedaje" },
    { step: "2", label: "Precios" },
    { step: "3", label: "Descripción del Hospedaje" },
  ];
  const [currentIndexForm, updateIndexForm] = useState(1);
  const [validated, setValidated] = useState(false);
  const initialForm = {
    title: "",
    destinationName: "",
    providerUser: "",
    categoryAccommodation: "",
    priceKids: {},
    priceAdult: {},
    highSeassonDate: "",
    description: "",
  };
  const editData = {
    ...data,
    priceAdult: {},
    priceKids: {},
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

  function handleOnChangePriceKids(room, price) {
    setForm({
      ...form,
      priceKids: {
        ...form.priceKids,
        [room]: price,
      },
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

  function handleOnChangeDestination(name, destination) {
    setForm({
      ...form,
      [name]: destination,
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
            <StepOneFormHospedajes
              form={form}
              handleOnChangeForm={handleOnChangeForm}
              handleOnChangeDestination={handleOnChangeDestination}
            />
          )}
          {labelStep[currentIndexForm - 1].step === "2" && (
            <StepTwoFormHospedajes
              form={form}
              handleOnChangePriceKids={handleOnChangePriceKids}
              handleOnChangePriceAdult={handleOnChangePriceAdult}
              handleOnChangeForm={handleOnChangeForm}
            />
          )}
          {labelStep[currentIndexForm - 1].step === "3" && (
            <StepThreeFormHospedajes
              form={form}
              handleOnChangeForm={handleOnChangeForm}
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
