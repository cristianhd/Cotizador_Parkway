import React, { useState } from "react";
import FloatingInput from "./FloatingInput";

export default function RangePrice({
  handleOnChangePriceAdult,
  form,
  indexRange,
  typeRange,
}) {
  const [minRange, setMinRange] = useState();
  const [maxRange, setMaxRange] = useState();
  const [priceRange, setPriceRange] = useState();
  const label = `Range-${indexRange}`;

  function handleOnChangeRangePrice(e) {
    const min = e.target.name.includes("min") ? e.target.value : minRange;
    const max = e.target.name.includes("max") ? e.target.value : maxRange;
    const price = e.target.name.includes("precio")
      ? e.target.value
      : priceRange;

    setMaxRange(max);
    setMinRange(min);
    setPriceRange(price);

    console.log(min, max, price);
    if (min && max && price) {
      handleOnChangePriceAdult(label, [min, max, price]);
    }
  }

  return (
    <div className="d-flex">
      <FloatingInput
        labelName={`min ${typeRange}`}
        name={`min-${indexRange}`}
        type="text"
        onChange={(e) => handleOnChangeRangePrice(e)}
        value={form.priceAdult.label}
      ></FloatingInput>
      <FloatingInput
        labelName={`max ${typeRange}`}
        name={`max-${indexRange}`}
        type="text"
        onChange={(e) => handleOnChangeRangePrice(e)}
        value={form.priceAdult.label}
      ></FloatingInput>
      <FloatingInput
        labelName={"Precio"}
        name={`precio-${indexRange}`}
        type="text"
        onChange={(e) => handleOnChangeRangePrice(e)}
        value={form.priceAdult.label}
      ></FloatingInput>
    </div>
  );
}
