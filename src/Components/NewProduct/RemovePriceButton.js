import React from "react";

export default function RemovePriceButton({ handleOnClick }) {
  return (
    <>
      <span onClick={handleOnClick}> - eliminar</span>
    </>
  );
}
