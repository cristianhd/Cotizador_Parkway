import React from "react";

export default function AddPriceButton({ handleOnClick }) {
  return (
    <div className="m-1">
      <span onClick={handleOnClick}> + agregar</span>
    </div>
  );
}
