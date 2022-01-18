import React, { useState } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import DatePicker from "./DatePicker";
import InputPlace from "./InputPlace";
import Rooms from "./Rooms";
import "../style/experiencias.css"

export default function Experiencias() {
  let screenWidth = window.screen.width;
  
  return (
    <div className="d-flex" style={{ width: 1000 }}>
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
