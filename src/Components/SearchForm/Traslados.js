import React, { useEffect, useState } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import InputPlace from "./InputPlace";
import Pax from "./Pax";
import lupa from "../../assets/card_product/lupa.svg";
import { getSearch, getSearchPlaces } from "../../Redux/action";
import { useDispatch } from "react-redux";
import "../../style/cardProduct.css";

export default function Traslados() {
  const typeProduct = window.location.pathname.slice(1);
  const title = typeProduct.charAt(0).toUpperCase() + typeProduct.slice(1);
  const dispatch = useDispatch();

  // local states
  const [form, setForm] = useState({});
  const [showOrigin, setShowOrigin] = useState(false);
  const [showDestination, setShowDestination] = useState(false);
  const [validated, setValidated] = useState(false);

  // window scroll top-smooth
  useEffect(() => {
    window.scroll({
      top: 625,
      behavior: "smooth",
    });
  }, []);

  // handlers
  const handleOnSubmit = (e) => {
    const formEvent = e.currentTarget;
    e.preventDefault();
    if (formEvent.checkValidity() === false) {
      setValidated(true);
      e.stopPropagation();
    } else {
      dispatch(getSearch(form.origin, form.destination, typeProduct));
      setValidated(false);
    }
  };

  const handleSuggestOnclick = (name, value) => {
    setForm({
      ...form,
      [name]: value,
    });
    setShowOrigin(false);
    setShowDestination(false);
  };

  const handleOnChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    if (name === "origin" && value !== "") {
      setShowOrigin(true);
    } else {
      setShowOrigin(false);
    }
    if (name === "destination" && value !== "") {
      setShowDestination(true);
    } else {
      setShowDestination(false);
    }

    dispatch(getSearchPlaces(value));

    setForm({
      ...form,
      [name]: value,
    });
  };

  return (
    <div className="d-flex flex-column align-items-center">
      <div className="card-product p-3">
        <h2>{title}</h2>
        <Form
          noValidate
          validated={validated}
          onSubmit={handleOnSubmit}
          autoComplete="off"
        >
          <Row className="p-1">
            <Form.Group
              className="gap-1 p-1 d-flex flex-row justify-content-between"
              as={Col}
              md={8}
            >
              <InputPlace
                name="origin"
                labelName="Origen"
                value={form.origin}
                onChange={handleOnChange}
                suggestOnclick={handleSuggestOnclick}
                show={showOrigin}
              />
              <InputPlace
                name="destination"
                labelName="Destino"
                value={form.destination}
                onChange={handleOnChange}
                suggestOnclick={handleSuggestOnclick}
                show={showDestination}
              />
            </Form.Group>

            <Form.Group
              as={Col}
              md={3}
              className="gap-1 p-1 d-flex flex-row justify-content-between"
            >
              <Pax handleOnChange={handleOnChange} value={form.pax} />
            </Form.Group>
            <Form.Group as={Col} md={1} className="p-1 ">
              <div className="w-100 h-100 d-flex justify-content-center align-items-center">
                <Button
                  className=" shadow-none border-0 w-100 h-100"
                  variant="primary"
                  type="submit"
                >
                  <img src={lupa} alt="lupa"></img>
                </Button>
              </div>
            </Form.Group>
          </Row>
        </Form>
      </div>
    </div>
  );
}
