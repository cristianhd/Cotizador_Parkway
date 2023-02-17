import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Modal, Row } from "react-bootstrap";

import StepTwoFormHospedajes from "./StepTwoFormHospedajes.js";
import StepOneFormHospedajes from "./StepOneFormHospedajes";
import StepThreeFormHospedajes from "./StepThreeFormHospedajes.js";
import StepFourFormHospedajes from "./StepFourFormHospedajes.js";

export default function FormHospedajes({ handleSave, edit, data }) {
  const labelStep = [
    { step: "1", label: "Información Hospedaje" },
    { step: "2", label: "Precios" },
    { step: "3", label: "Carga de Fotografías" },
    { step: "4", label: "Descripción del Hospedaje" },
  ];
  const initialForm = {
    title: "",
    destinationName: "",
    photos: [],
    providerUser: "",
    categoryAccommodation: "",
    priceKids: {},
    priceAdult: {},
    highSeassonDate: "",
    description: "",
    includesForm: {},
  };
  const editData = {
    ...data,
    priceAdult: {},
    priceKids: {},
  };
  const [form, setForm] = useState(edit ? editData : initialForm);
  console.log(form);
  const [validated, setValidated] = useState(false);
  const [includesForm, setIncludesForm] = useState({
    transport: "",
    route: "",
    visit: "",
    food: "",
  });

  const [currentIndexForm, updateIndexForm] = useState(1);
  const isFirstStep = currentIndexForm === 1;
  const isLastStep = currentIndexForm === labelStep.length;

  const existPriceAdult = Object.keys(form.priceAdult).length;
  const existPhotos = form.photos.length;

  //handlers
  function handleOnSubmitForm(e) {
    const formEvent = e.currentTarget;
    e.preventDefault();

    if (formEvent.checkValidity() === false) {
      e.stopPropagation();
      setValidated(true);
    } else {
      setForm({
        ...form,
        includesForm,
      });
      setValidated(false);
      if (!isLastStep) updateIndexForm(currentIndexForm + 1);
      if (isLastStep) {
        errorFieldsEmpty();
      }
    }
  }

  function errorFieldsEmpty() {
    const fieldsEmpty = {
      photos: existPhotos ? "" : "fotografías",
      priceAdult: existPriceAdult ? "" : "precios",
    };
    const message = `Llenar los siguientes campos obligatorios: \n ${fieldsEmpty.photos} \n ${fieldsEmpty.activeDate} \n ${fieldsEmpty.priceAdult}`;

    if (existPhotos && existPriceAdult) {
      handleSave(form);
    } else {
      alert(message);
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

  function handleSavePhotos(photos) {
    setForm({
      ...form,
      photos,
    });
  }

  function handleOnChangeIncludes(name, includesInput) {
    setIncludesForm({
      ...includesForm,
      [name]: includesInput,
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
              handleSavePhotos={handleSavePhotos}
            />
          )}
          {labelStep[currentIndexForm - 1].step === "4" && (
            <StepFourFormHospedajes
              form={form}
              includesForm={includesForm}
              handleOnChangeForm={handleOnChangeForm}
              handleOnChangeIncludes={handleOnChangeIncludes}
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
