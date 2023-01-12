import React, { useState } from "react";
import { Col, Form, Row } from "react-bootstrap";
import AddPriceButton from "../AddPriceButton";
import FloatingInput from "../FloatingInput";
import RangePrice from "../RangePrice";
import RemovePriceButton from "../RemovePriceButton";

export default function StepTwoFormActividades({
  form,
  handleOnChangePriceKids,
  handleOnChangePriceAdult,
  handleOnChangeForm,
}) {
  const [checkKids, setCheckKids] = useState(false);
  const [amountRangePrice, setamountRangePrice] = useState([1]);

  function addRange() {
    setamountRangePrice([...amountRangePrice, amountRangePrice.length + 1]);
  }
  function removeRange() {
    const range = Object.keys(form.priceAdult).find((range) =>
      range.includes(amountRangePrice.length)
    );
    const price = undefined;
    setamountRangePrice(amountRangePrice.slice(0, amountRangePrice.length - 1));
    handleOnChangePriceKids(range, price);
  }

  return (
    <>
      <Row className="m-1">
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
          <Form.Check
            className="m-1"
            type="switch"
            label="Precio Niños"
            onChange={() => setCheckKids(!checkKids)}
          ></Form.Check>

          {amountRangePrice.map((range) => (
            <RangePrice
              disabled={!checkKids}
              key={range}
              form={form}
              handleOnChangePrice={handleOnChangePriceKids}
              indexRange={range}
              typeRange="Edad"
              typePrice="kids        "
            ></RangePrice>
          ))}
          {checkKids && (
            <div className="m-1 p-1 d-flex justify-content-between">
              <AddPriceButton handleOnClick={addRange}></AddPriceButton>
              <RemovePriceButton
                handleOnClick={removeRange}
              ></RemovePriceButton>
            </div>
          )}
        </Form.Group>
      </Row>
      <Row className="m-1">
        <Form.Group className="m-1" as={Col}>
          <Form.Label className="p-1">Precio Adulto</Form.Label>
          {amountRangePrice.map((range) => (
            <div key={range}>
              <RangePrice
                handleOnChangePrice={handleOnChangePriceAdult}
                form={form}
                indexRange={range}
                typeRange="Personas"
                typePrice="adult"
              ></RangePrice>
            </div>
          ))}
          <div className="m-1 p-1 d-flex justify-content-between">
            <AddPriceButton handleOnClick={addRange}></AddPriceButton>
            <RemovePriceButton handleOnClick={removeRange}></RemovePriceButton>
          </div>
        </Form.Group>
      </Row>
    </>
  );
}
