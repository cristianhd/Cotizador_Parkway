import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Col, FloatingLabel, Modal, Row, ToggleButton } from "react-bootstrap";
import FormRooms from "./FormRooms";
import FloatingInput from "./FloatingInput";
import InfoGeneralFormPlanes from "./InfoGeneralFormPlanes";
import RoomsFormPlanes from "./RoomsFormPlanes";

export default function FormPlanes({ handleSave }) {
  const [currentChecked, setCurrentChecked] = useState([]);
  const [validated, setValidated] = useState(false);
  const [form, setForm] = useState({
    title: "",
    destination: "",
    transport: "",
    providerUser: "",
    nameAccomodation: "",
    categoryAccomodation: "",
    numberNigths: "",
    priceKids: "",
    priceAdult: [],
  });

  
  const [checkedItem, setCheckedItem] = useState({});

  const meses = [
    "Ene",
    "Feb",
    "Mar",
    "Abr",
    "May",
    "Jun",
    "Jul",
    "Agos",
    "Sep",
    "Oct",
    "Nov",
    "Dic",
    "Todo el Año",
  ];

  const eventuales = [
    "Semana Santa",
    "Mitad Año",
    "Semana Receso",
    "Fin Año",
    "Temporada Ballenas",
  ];

  //handlers
  function handleOnSubmitForm(e) {
    const formEvent = e.currentTarget;
    e.preventDefault();
    if (formEvent.checkValidity() === false) {
      e.stopPropagation();
    } else {
      handleSave(form);
    }
    setValidated(true);
  }

  function handleOnChangeForm(e) {
    const name = e.target.name;
    const value = e.target.value;

    setForm({
      ...form,
      [name]: value,
    });
  }

  function handleonChange(e) {
    const name = e.target.name;
    const value = e.target.value;
    const checked = e.target.checked;

    if (currentChecked.includes(value)) {
      setCurrentChecked(currentChecked.filter((item) => item !== value));
      setForm({
        ...form,
        [name]: form[name].filter((item) => item !== value),
      });
    } else {
      setCurrentChecked([...currentChecked, value]);
      setForm({
        ...form,
        [name]: form[name] ? [...form[name], value] : [value],
      });
    }
    setCheckedItem({
      ...checkedItem,
      [value]: checked,
    });
  }

  function handleOnChangePriceAdult(room, price) {

    setForm({
      ...form,
      priceAdult: { ...form.priceAdult, [room]: price },
    });
  }

  return (
    <>
      <Modal.Body>
        <Form
          noValidate
          validated={validated}
          onSubmit={handleOnSubmitForm}
          autoComplete="off"
        >
          <InfoGeneralFormPlanes
            handleOnChangeForm={handleOnChangeForm}
            form={form}
          />
          <RoomsFormPlanes
            handleOnChangePriceAdult={handleOnChangePriceAdult}
            form={form}
          />
          <Modal.Footer>
            <Button variant="primary" type="submit">
              Guardar
            </Button>
          </Modal.Footer>
        </Form>
      </Modal.Body>
    </>
  );
}
