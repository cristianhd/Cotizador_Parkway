import React, { useEffect, useState } from "react";
import {
  Button,
  Col,
  FloatingLabel,
  Form,
  OverlayTrigger,
  Popover,
  Row,
  Tooltip,
} from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { getSuggestCities, getSuggestPlaces } from "../../../Redux/action";
import InputPlace from "../../SearchForm/InputPlace";

import FloatingInput from "../FloatingInput";

export default function StepOneFormActividades({
  handleOnChangeForm,
  handleOnChangeDestination,
  form,
}) {
  const [checkedMultiDestination, updateCheckedMultiDestination] =
    useState(false);
  const [multiDestination, setMultiDestination] = useState([1]);

  const [showSuggest, setShowSuggest] = useState("");
  const [suggest, setSuggest] = useState([]);
  const { suggest5Places, suggest5Cities } = useSelector((state) => state);
  const suggestPlaces = suggest5Places.suggest5Places;
  const suggestCities = suggest5Cities.suggest5Cities;
  const dispatch = useDispatch();

  function handleOnChangeCheck(e) {
    const checked = e.target.checked;
    if (checked) {
      setMultiDestination([...multiDestination, 2]);
    } else {
      setMultiDestination([1]);
    }
    updateCheckedMultiDestination(checked);
  }

  function AddDestination() {
    setMultiDestination([...multiDestination, multiDestination.length + 1]);
  }
  function RemoveDestination() {
    const label = "destino-" + multiDestination[multiDestination.length - 1];
    const destination = undefined;

    setMultiDestination(multiDestination.slice(0, multiDestination.length - 1));

    handleOnChangeDestination(label, destination);
  }
  function handleOnChangeMultiDestination(e, index) {
    const label = e.target.name;
    const destination = e.target.value;

    dispatch(getSuggestPlaces(destination));
    dispatch(getSuggestCities(destination));

    handleOnChangeDestination(label, destination);
    setShowSuggest(index);
  }
  const handleSuggestOnClick = (label, destination, id) => {
    handleOnChangeDestination(label, destination);
    setShowSuggest("");
  };

  // useEffect(() => {
  //   setSuggest(suggestPlaces);
  // }, [suggestPlaces]);

  return (
    <>
      <Row className="m-1">
        <Form.Group className="m-1" as={Col}>
          <FloatingInput
            name="title"
            labelName="Titulo"
            value={form.title}
            onChange={(e) => handleOnChangeForm(e)}
          />
        </Form.Group>
      </Row>

      <Row className="m-1">
        <Form.Group className="m-1" as={Col}>
          {multiDestination.map((destination, index) => (
            <InputPlace
              key={index}
              name={`destino-${destination}`}
              labelName={`Destino ${destination}`}
              value={Object.values(form.destinationName)[index]}
              onChange={(e) => handleOnChangeMultiDestination(e, index)}
              suggestOnclick={handleSuggestOnClick}
              show={showSuggest === index}
            />
          ))}

          <div className="p-1 d-flex justify-content-between">
            {checkedMultiDestination && multiDestination.length > 1 && (
              <span onClick={RemoveDestination}> - eliminar</span>
            )}
            {checkedMultiDestination && multiDestination.length < 5 && (
              <span onClick={AddDestination}> + agregar</span>
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
        <Form.Group className="m-1" as={Col}>
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
