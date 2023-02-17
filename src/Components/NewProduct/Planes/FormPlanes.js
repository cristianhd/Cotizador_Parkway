import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Modal, Row } from "react-bootstrap";

import StepTwoFormPlanes from "./StepTwoFormPlanes";
import StepOneFormPlanes from "./StepOneFormPlanes";
import StepThreeFormPlanes from "./StepThreeFormPlanes";
import StepFourFormPlanes from "./StepFourFormPlanes";
import StepFiveFormPlanes from "./StepFiveFormPlanes";

export default function FormPlanes({ handleSave, edit, data }) {
  const labelStep = [
    { step: "1", label: "Información General" },
    { step: "2", label: "Información Hospedaje" },
    { step: "3", label: "Seleccionar Fechas" },
    { step: "4", label: "Carga de Fotografías" },
    { step: "5", label: "Descripción del Plan" },
  ];
  const initialForm = {
    title: "",
    destinationName: {},
    photos: [],
    transport: "",
    providerUser: "",
    nameAccommodation: "",
    categoryAccommodation: "",
    numberNigths: "",
    priceKids: {},
    priceAdult: {},
    activeDate: [],
    description: "",
    includesForm: {},
  };
  const editData = {
    ...data,
    destinationName: {},
    priceAdult: {},
    priceKids: {},
  };

  const [validated, setValidated] = useState(false);
  const [form, setForm] = useState(edit ? editData : initialForm);
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
  const existActiveDate = form.activeDate.length;
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
      activeDate: existActiveDate ? "" : "fechas",
      priceAdult: existPriceAdult ? "" : "precios",
    };
    const message = `Llenar los siguientes campos obligatorios: \n ${fieldsEmpty.photos} \n ${fieldsEmpty.activeDate} \n ${fieldsEmpty.priceAdult}`;

    if (existPhotos && existActiveDate && existPriceAdult) {
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
              handleSavePhotos={handleSavePhotos}
              form={form}
            />
          )}
          {labelStep[currentIndexForm - 1].step === "5" && (
            <StepFiveFormPlanes
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
