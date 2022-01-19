import React, { useState } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import DatePicker from "./DatePicker";
import InputPlace from "./InputPlace";
import Rooms from "./Rooms";
import "../style/experiencias.css"
import Hospedaje from "./Hospedaje";

export default function Experiencias() {
  let screenWidth = window.screen.width;
  
  return (
    <div className="d-flex flex-column">
      <div></div>
      <h2>Experiencias</h2>
      <Row>
        <Col md={6}>
          <Form.Group className={()=>"d-flex" + (window.screen.width >= 768 ? "flex-column":"flex-row")}>
            <InputPlace name="Destino" />
            <InputPlace name="Origen" />
          </Form.Group>
        </Col>
        <Col md={3}>
          <Form.Group>
            <DatePicker />
          </Form.Group>
        </Col>
        <Col md={3}>
          <Form.Group>
            <Rooms />
          </Form.Group>
        </Col>
      </Row>
    </div>
  );
}
