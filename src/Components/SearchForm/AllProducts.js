import React from "react";
import { useDispatch } from "react-redux";
import { getSearch } from "../../Redux/action";

export default function AllProducts({ typeProduct }) {
  const dispatch = useDispatch();

  function handleShowAllProducts() {
    dispatch(getSearch("", "", "", typeProduct));
  }

  return <span onClick={handleShowAllProducts}>Mostrar todos</span>;
}
