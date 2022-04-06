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

export default function Traslados() {
  const [traslados, setTraslados] = useState();

  useEffect(() => {
    axios
      .get("http://localhost:3001/products/traslados")
      .then((response) => {
        setTraslados(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [setTraslados]);

  const handleOnSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div className="w-100 d-flex flex-column">
      <div className="card-product p-3 h-100">
        <h2>Traslados</h2>
        <Form onSubmit={handleOnSubmit} className="p-3">
          <Row>
            <Col md={6} className="p-2">
              <Form.Group className="place d-flex flex-row justify-content-between gap-2">
                <InputPlace className="" name="Destino" />
                <InputPlace name="Origen" />
              </Form.Group>
            </Col>
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
      <div>
        <Cards data={undefined} />
      </div>
    </div>
  );
}
