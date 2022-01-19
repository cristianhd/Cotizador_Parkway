import React from 'react'
import Pax from "./Pax.js"
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import InputPlace from "./InputPlace";
import Rooms from "./Rooms";
import DatePicker from './DatePicker';

export default function Traslado() {
    return (
        <div className="d-flex flex-column">
        <div></div>
        <h2>Traslado</h2>
        <Row>
          <Col md={6} className="p-2">
            <Form.Group className="place d-flex flex-row justify-content-between gap-2">
              <InputPlace className=""name="Destino" />
              <InputPlace name="Origen" />
            </Form.Group>
          </Col>
          <Col md={3} className="p-2">
            <Form.Group className="date">
             <DatePicker/>
            </Form.Group>
          </Col>
          <Col md={3} className="p-2">
            <Form.Group>
            <Pax/>
            </Form.Group>
          </Col>
        </Row>
      </div>
    )
}
