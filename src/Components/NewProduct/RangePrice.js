import React, { useState } from "react";
import FloatingInput from "./FloatingInput";

export default function RangePrice({
  handleOnChangePrice,
  form,
  indexRange,
  typeRange,
  typePrice,
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

    if (min && max && price) {
      handleOnChangePrice(label, [min, max, price]);
    }
  }

  return (
    <div className="d-flex">
      <FloatingInput
        disabled={disabled}
        labelName={`Min ${typeRange}`}
        name={`min-${indexRange}`}
        type="number"
        min={typeRange === "Edad" ? 0 : 1}
        onChange={(e) => handleOnChangeRangePrice(e)}
        value={
          typePrice === "kids" ? form.priceKids.label : form.priceAdult.label
        }
      ></FloatingInput>
      <FloatingInput
        disabled={disabled}
        labelName={`Max ${typeRange}`}
        name={`max-${indexRange}`}
        type="number"
        min="1"
        onChange={(e) => handleOnChangeRangePrice(e)}
        value={
          typePrice === "kids" ? form.priceKids.label : form.priceAdult.label
        }
      ></FloatingInput>
      <FloatingInput
        disabled={disabled}
        labelName={"Precio"}
        name={`precio-${indexRange}`}
        type="number"
        min="0"
        onChange={(e) => handleOnChangeRangePrice(e)}
        value={
          typePrice === "kids" ? form.priceKids.label : form.priceAdult.label
        }
      ></FloatingInput>
    </div>
  );
}
