import React, { useEffect, useState } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import DatePicker from "../Components/DatePicker";
import InputPlace from "../Components/InputPlace";
import Rooms from "../Components/Rooms";
import "../style/experiencias.css";
import axios from "axios";
import Cards from "../Components/Cards";
import { Button, Container } from "react-bootstrap";
import lupa from "../assets/card_product/lupa.svg";
import { getSearch, getSearchPlaces } from "../Redux/action";
import { useDispatch, useSelector } from "react-redux";
import NewProduct from "../Components/NewProduct";

export default function Experiencias() {
  const dispatch = useDispatch();
  const [experiencias, setExperiencias] = useState([]);
  const [suggest, setSuggest] = useState([]);
  const { querySearch, queryPlaces } = useSelector((state) => state);
  const query = querySearch.querySearch;
  const suggestPlaces = queryPlaces.queryPlaces;

  const [form, setForm] = useState({
    origin: "",
    destination: "",
  });

  useEffect(() => {
    setExperiencias(query);
  }, [query]);
  useEffect(() => {
    setSuggest(suggestPlaces);
  }, [suggestPlaces]);

  useEffect(() => {
    setExperiencias([]);
    window.scroll({
      top: 700,
      behavior: "smooth",
    });
  }, []);

  console.log("suggest", suggest);
  const handleOnSubmit = (e) => {
    e.preventDefault();
    dispatch(getSearch(form.origin, form.destination, "experiencias"));
  };

  function handleOnChange(e) {
    const name = e.target.name;
    const value = e.target.value;

    if (name === "origin" || name === "destination")
      dispatch(getSearchPlaces(value));

    setForm({
      ...form,
      [name]: value,
    });
  }
  return (
    <div className="w-100 d-flex flex-column">
      <div className="card-product p-3 h-100">
        <h2>Planes</h2>
        <Form onSubmit={handleOnSubmit} className="p-3">
          <Row>
            <Col md={5} className="p-2">
              <Form.Group className="place d-flex flex-row justify-content-between gap-2">
                <InputPlace
                  name="origin"
                  labelName="Origen"
                  value={form.origin}
                  onChange={handleOnChange}
                  suggest={suggest}
                />
                
                <InputPlace
                  name="destination"
                  labelName="Destino"
                  value={form.destination}
                  onChange={handleOnChange}
                  suggest={suggest}
                />
              </Form.Group>
            </Col>
            <Col md={3} className="p-2">
              <Form.Group className="date">
                <DatePicker />
              </Form.Group>
            </Col>
            <Col md={3} className="p-2">
              <Form.Group>
                <Rooms />
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
      <div className="d-flex flex-wrap justify-content-evenly m-5 w-inherit ">
        <Cards data={experiencias} />
        <NewProduct typeProduct="experiencias" />
      </div>
    </div>
  );
}
