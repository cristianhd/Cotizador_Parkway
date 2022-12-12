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

  handleCleanPriceAdult,
}) {
  const [roundTrip, setRoundTrip] = useState(false);
  const [amountRangePrice, setamountRangePrice] = useState([1]);

  function handleOnChangeInput(e) {
    const nameInput = e.target.name;
    const price = e.target.value;
    if (nameInput === "going") handleOnChangePriceAdult(nameInput, price);
    if (nameInput === "return") handleOnChangePriceAdult(nameInput, price);
  }
  function handleOnChangeSwitchRoundTrip(e) {
    setRoundTrip(!roundTrip);
    handleCleanPriceAdult();
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
        name="priceAdult"
        onChange={handleOnChangeSwitchRoundTrip}
        checked={roundTrip}
      ></Form.Check>
      {roundTrip ? (
        <>
          {amountRangePrice.map((range) => (
            <div key={range}>
              <RangePrice
                handleOnChangePrice={handleOnChangePriceAdult}
                form={form}
                indexRange={range}
                typeRange="personas"
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
            labelName="Ida"
            name="going"
            type="text"
            value={form.priceAdult.going}
            onChange={(e) => handleOnChangeInput(e)}
          ></FloatingInput>
          <FloatingInput
            labelName="Vuelta"
            name="return"
            type="text"
            value={form.priceAdult.return}
            onChange={(e) => handleOnChangeInput(e)}
          ></FloatingInput>
        </>
      )}
    </>
  );
}
