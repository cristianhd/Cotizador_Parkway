import React, { useState } from "react";
import FloatingInput from "./FloatingInput";

export default function RangePrice({
  handleOnChangePrice,
  form,
  indexRange,
  typeRange,
  price,
  disabled,
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
      handleOnChangePrice(label, [min, max, price]);
    }
  }
  console.log(disabled);
  return (
    <div className="d-flex">
      <FloatingInput
        disabled={disabled}
        labelName={`min ${typeRange}`}
        name={`min-${indexRange}`}
        type="text"
        onChange={(e) => handleOnChangeRangePrice(e)}
        value={price === "kids" ? form.priceKids.label : form.priceAdult.label}
      ></FloatingInput>
      <FloatingInput
        disabled={disabled}
        labelName={`max ${typeRange}`}
        name={`max-${indexRange}`}
        type="text"
        onChange={(e) => handleOnChangeRangePrice(e)}
        value={price === "kids" ? form.priceKids.label : form.priceAdult.label}
      ></FloatingInput>
      <FloatingInput
        disabled={disabled}
        labelName={"Precio"}
        name={`precio-${indexRange}`}
        type="text"
        onChange={(e) => handleOnChangeRangePrice(e)}
        value={price === "kids" ? form.priceKids.label : form.priceAdult.label}
      ></FloatingInput>
    </div>
  );
}
