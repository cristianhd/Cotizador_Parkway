import React from "react";
import { Col, Form, Row } from "react-bootstrap";
import FloatingInput from "../FloatingInput";
import RoutePrice from "../RoutePrice";

export default function StepTwoFormTraslados({
  form,
  handleCleanPriceAdult,
  handleOnChangePriceAdult,
  handleOnChangeForm,
}) {
  return (
    <>
      <Row className="m-1 d-flex">
        <Form.Group className="m-1" as={Col}>
          <FloatingInput
            name="minPeople"
            type="number"
            min="1"
            labelName="Min Personas"
            value={form.minPeople}
            onChange={(e) => handleOnChangeForm(e)}
          />
        </Form.Group>
        <Form.Group className="m-1" as={Col}>
          <FloatingInput
            name="maxPeople"
            type="number"
            min="1"
            labelName="Max Personas"
            value={form.maxPeople}
            onChange={(e) => handleOnChangeForm(e)}
          />
        </Form.Group>
      </Row>
      <Row className="m-1">
        <Form.Group className="m-1" as={Col}>
          <RoutePrice
            form={form}
            handleCleanPriceAdult={handleCleanPriceAdult}
            handleOnChangePriceAdult={handleOnChangePriceAdult}
          ></RoutePrice>
        </Form.Group>
      </Row>
    </>
  );
}
