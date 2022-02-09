import React from "react";
import { Route, Routes } from "react-router-dom";
import Actividades from "./Actividades";
import Asistencia from "./Asistencia";
import Experiencias from "./Experiencias";
import Hospedaje from "./Hospedaje";
import Traslado from "./Traslado";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import lupa from "../assets/card_product/lupa.svg";
import "../style/cardCategory.css";

export default function CardCategory() {
  const handleOnSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="card-product p-3">
      <Form onSubmit={handleOnSubmit} className="p-3">
        <Row>
          <Col md={11}>
            <Routes>
              <Route path="/" element={<Experiencias />}></Route>
              <Route path="/Experiencias" element={<Experiencias />}></Route>
              <Route path="/Hospedaje" element={<Hospedaje />}></Route>
              <Route path="/Traslados" element={<Traslado />}></Route>
              <Route path="/Actividades" element={<Actividades />}></Route>
              <Route path="/Asistencia" element={<Asistencia />}></Route>
            </Routes>
          </Col>
          <Col md={1} className="align-self-end p-2">
            <Button className="button-submit" variant="primary" type="submit">
              <div className="lupa-wrap">
                <img src={lupa} alt="lupa"></img>
              </div>
            </Button>
          </Col>
        </Row>
      </Form>
    </div>
  );
}
