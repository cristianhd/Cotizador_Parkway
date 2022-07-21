import React, { useEffect, useState } from "react";
import Pax from "../Components/Pax.js";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import InputPlace from "../Components/InputPlace";
import Rooms from "../Components/Rooms";
import DatePicker from "../Components/DatePicker";
import axios from "axios";
import Cards from "../Components/Cards.js";
import { Button } from "react-bootstrap";
import lupa from "../assets/card_product/lupa.svg";
import { getSearch } from "../Redux/action/index.js";
import { useDispatch, useSelector } from "react-redux";
import NewProduct from "../Components/NewProduct";

export default function Traslados() {
  const dispatch = useDispatch();
  const typeProduct = "traslados"
  const [validated, setValidated] = useState(false);
  const { querySearch } = useSelector((state) => state);
  const type = window.location.pathname.slice(1);
  const query = querySearch.querySearch;

  const [form, setForm] = useState({
    origin: "",
    destination: "",
  });

 
  const handleOnSubmit = (e) => {
    const formEvent = e.currentTarget;
    e.preventDefault();
    if (formEvent.checkValidity() === false) {
      e.stopPropagation();
    } else {
      dispatch(getSearch(form.origin, form.destination, typeProduct));
    }
    setValidated(true);
  };

  function handleOnChange(e) {
    const name = e.target.name;
    const value = e.target.value;

    setForm({
      ...form,
      [name]: value,
    });
  }

  return (
    <div className="w-100 d-flex flex-column">
      <div className="card-product p-3 h-100">
        <h2>Traslados</h2>
        <Form
          noValidate
          validated={validated}
          onSubmit={handleOnSubmit}
          className=""
        >
          <Row className="p-1">
            <Form.Group
              className="gap-1 p-1 d-flex flex-row justify-content-between"
              as={Col}
              md={6}
            >
              <InputPlace
                name="origin"
                labelName="Origen"
                value={form.origin}
                onChange={handleOnChange}
               
              />
              <InputPlace
                name="destination"
                labelName="Destino"
                value={form.destination}
                onChange={handleOnChange}
             
              />
            </Form.Group>

            <Col md={3} className="p-2">
              <Form.Group className="date">
                <DatePicker />
              </Form.Group>
            </Col>
            <Col md={2} className="p-2">
              <Form.Group>
                <Pax />
              </Form.Group>
            </Col>
            <Col md={1} className="align-self-end p-2">
              <div className="lupa-wrap">
                <Button
                  className="button-submit"
                  variant="primary"
                  type="submit"
                >
                  <img src={lupa} alt="lupa"></img>
                </Button>
              </div>
            </Col>
          </Row>
        </Form>
      </div>
    </div>
  );
}
