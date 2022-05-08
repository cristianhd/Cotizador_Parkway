import React, { useEffect, useState } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import DatePicker from "../Components/DatePicker";
import InputPlace from "../Components/InputPlace";
import Rooms from "../Components/Rooms";
import Cards from "../Components/Cards";
import axios from "axios";
import { getSearch } from "../Redux/action";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "react-bootstrap";
import lupa from "../assets/card_product/lupa.svg";

export default function Actividades() {
  const dispatch = useDispatch();
  const [actividades, setActividades] = useState();
  const { querySearch } = useSelector((state) => state);
  const query = querySearch.querySearch;

  const [form, setForm] = useState({
    destination: "",
  });

  useEffect(() => {
    setActividades(query);
  }, [query]);

  useEffect(()=>{
    setActividades([])
  },[])

  const handleOnSubmit = (e) => {
    e.preventDefault();
    dispatch(getSearch(form.origin,form.destination, "actividades"));
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
        <h2>Actividades</h2>
        <Form onSubmit={handleOnSubmit} className="p-3">
          <Row>
            <Col md={11} className="p-2">
              <Form.Group className="place d-flex flex-row justify-content-between gap-2">
                <InputPlace
                  name="destination"
                  labelName="Destino"
                  value={form.destination}
                  onChange={handleOnChange}
                />
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
        <Cards data={actividades} />
      </div>
    </div>
  );
}