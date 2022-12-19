import React from "react";
import { useState } from "react";
import { Form } from "react-bootstrap";
import FloatingInput from "./FloatingInput";
import RangePrice from "../NewProduct/RangePrice";
import AddPriceButton from "./AddPriceButton";
import RemovePriceButton from "./RemovePriceButton";

export default function RoutePrice({
  form,
  handleOnChangePriceAdult,
  handleOnChangeRoundTrip,
  handleCleanPriceAdult,
}) {
  const [roundTrip, setRoundTrip] = useState(false);
  const [amountRangePrice, setamountRangePrice] = useState([1]);

  function handleOnChangeInput(e) {
    const nameInput = e.target.name;
    const price = e.target.value;
    if (nameInput === "going") handleOnChangePriceAdult("ida", price);
    if (nameInput === "return") handleOnChangePriceAdult("vuelta", price);
  }
  function handleOnChangeSwitchRoundTrip(e) {
    setRoundTrip(!roundTrip);
    handleOnChangeRoundTrip(!roundTrip);
  }
  function addRange() {
    setamountRangePrice([...amountRangePrice, amountRangePrice.length + 1]);
  }
  function removeRange() {
    const range = Object.keys(form.priceAdult).find((range) =>
      range.includes(amountRangePrice.length)
    );
    const price = undefined;
    setamountRangePrice(amountRangePrice.slice(0, amountRangePrice.length - 1));
    handleOnChangePriceAdult(range, price);
  }

  return (
    <>
      <Form.Check
        type="switch"
        label="Ida y Vuelta"
        name="roundTrip"
        onChange={handleOnChangeSwitchRoundTrip}
        checked={form.roundTrip}
      ></Form.Check>
      {roundTrip ? (
        <>
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
        </>
      ) : (
        <>
          <FloatingInput
            labelName="Precio Ida"
            name="going"
            type="number"
            min="0"
            value={form.priceAdult.going}
            onChange={(e) => handleOnChangeInput(e)}
          ></FloatingInput>
          <FloatingInput
            labelName="Precio Vuelta"
            name="return"
            type="number"
            min="0"
            value={form.priceAdult.return}
            onChange={(e) => handleOnChangeInput(e)}
          ></FloatingInput>
        </>
      )}
    </>
  );
}
