import React, { useEffect } from "react";
import CardComponent from "./Card";
import NewProduct from "../NewProduct";
import "../../style/cards.css";

export default function Cards({ data, typeProduct }) {
  useEffect(() => {
    if(data && data.length > 0) window.scroll({ top: 750, behavior: "smooth" });
  },[data]);
  return (
    <div className="cards-flex m-auto gap-5">
      {data &&
        data.map((data, index) => (
          <CardComponent key={index} data={data}></CardComponent>
        ))}
      <NewProduct typeProduct={typeProduct}></NewProduct>
    </div>
  );
}
