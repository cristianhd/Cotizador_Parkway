import React, { useEffect, useState } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import DatePicker from "../Components/DatePicker";
import InputPlace from "../Components/InputPlace";
import Rooms from "../Components/Rooms";
import Cards from "../Components/Cards";
import axios from "axios";
import { Button } from "react-bootstrap";
import lupa from "../assets/card_product/lupa.svg";

export default function Hospedajes() {
  const [hospedajes, setHospedajes] = useState();

  useEffect(() => {
    axios
      .get("http://localhost:3001/products/hospedajes")
      .then((response) => {
        setHospedajes(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [setHospedajes]);

  const handleOnSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div className="w-100 d-flex flex-column">
      <div className="card-product p-3 h-100">
        <h2>Hospedaje</h2>
        <Form onSubmit={handleOnSubmit} className="p-3">
          <Row>
            <Col md={5} className="p-2">
              <Form.Group className="place d-flex flex-row justify-content-between gap-2">
                <InputPlace className="" name="Destino" />
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
      <div>
        <Cards data={undefined} />
      </div>
    </div>
  );
}
