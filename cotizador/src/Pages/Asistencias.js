import React, { useEffect, useState } from "react";
import Pax from "../Components/Pax.js";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import InputPlace from "../Components/InputPlace";
import Rooms from "../Components/Rooms";
import DatePicker from "../Components/DatePicker";
import Cards from "../Components/Cards.js";
import axios from "axios";
import { Button } from "react-bootstrap";
import lupa from "../assets/card_product/lupa.svg";
import { getSearch } from "../Redux/action/index.js";
import { useDispatch, useSelector } from "react-redux";
import NewProduct from "../Components/NewProduct";

export default function Asistencias() {
  const dispatch = useDispatch();
  const [asistencias, setAsistencias] = useState([]);
  const { querySearch } = useSelector((state) => state);
  const query = querySearch.querySearch;

  const [form, setForm] = useState({
    destination: "",
  });

  useEffect(() => {
    setAsistencias(query);
  }, [query]);

  const handleOnSubmit = (e) => {
    e.preventDefault();
    dispatch(getSearch(form.origin,form.destination, "asistencias"));
  };

  useEffect(()=>{
    setAsistencias([])
  },[])

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
        <h2>Asistencia</h2>
        <Form onSubmit={handleOnSubmit} className="p-3">
          <Row>
            <Col md={9} className="p-2">
              <Form.Group className="place d-flex flex-row justify-content-between gap-2">
                <InputPlace
                  name="destination"
                  labelName="Destino"
                  value={form.destination}
                  onChange={handleOnChange}
                />
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
      <div>
        <Cards data={asistencias} />
        <NewProduct typeProduct="asistencias"/>
      </div>
    </div>
  );
}
