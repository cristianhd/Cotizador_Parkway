import React from 'react'
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import DatePicker from "./DatePicker";
import InputPlace from "./InputPlace";
import Rooms from "./Rooms";

export default function Actividades() {
    return (
        <div className="d-flex flex-column">
      <div></div>
      <h2>Actividades</h2>
      <Row>
        <Col md={12} className="p-2">
          <Form.Group className="place d-flex flex-row justify-content-between gap-2">
            <InputPlace className="" name="Destino" />
          </Form.Group>
        </Col>
        
      </Row>
    </div>
    )
}
