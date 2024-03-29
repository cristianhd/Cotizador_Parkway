import React, { useState } from "react";
import { Col, Form, Row } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { getSuggestCities, getSuggestPlaces } from "../../../Redux/action";
import InputPlace from "../../SearchForm/InputPlace";
import FloatingInput from "../FloatingInput";

export default function StepOneFormHospedajes({
  form,
  handleOnChangeForm,
  handleOnChangeDestination,
}) {
  const dispatch = useDispatch();
  const [showSuggest, setShowSuggest] = useState(false);

  function handleOnChangeInputDestination(e) {
    const destination = e.target.value;
    dispatch(getSuggestPlaces(destination));
    dispatch(getSuggestCities(destination));
    handleOnChangeForm(e);
    setShowSuggest(true);
  }
  const handleSuggestOnClick = (label, destination, id) => {
    handleOnChangeDestination(label, destination);
    setShowSuggest(false);
  };

  return (
    <>
      <Row className="m-1">
        <Form.Group className="" as={Col}>
          <FloatingInput
            name="title"
            labelName="Nombre Hospedaje"
            value={form.title}
            onChange={(e) => handleOnChangeForm(e)}
          />
        </Form.Group>
      </Row>

      <Row className="m-1">
        <Form.Group className="m-1" as={Col}>
          <Form.Select
            required
            className="shadow-none"
            name="categoryAccommodation"
            value={form.categoryAccommodation}
            onChange={(e) => handleOnChangeForm(e)}
          >
            <option defaultValue selected disabled value="">
              Categoria Hospedaje
            </option>
            <option value="Superior">Superior</option>
            <option value="Turista">Turista</option>
            <option value="Ecoturismo">Ecoturismo</option>
            <option value="Boutique">Boutique</option>
          </Form.Select>
        </Form.Group>
      </Row>
      <Row className="m-1">
        <Form.Group className="m-1" as={Col}>
          <InputPlace
            name="destinationName"
            labelName="Destino"
            value={form.destinationName}
            onChange={(e) => handleOnChangeInputDestination(e)}
            suggestOnclick={handleSuggestOnClick}
            show={showSuggest}
          />
        </Form.Group>
      </Row>
      <Row className="m-1">
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
