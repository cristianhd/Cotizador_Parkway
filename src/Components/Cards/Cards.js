import React, { useEffect } from "react";

import NewProduct from "../NewProduct/NewProduct";
import "../../style/cards.css";
import CardPlanes from "./CardPlanes";
import CardHospedajes from "./CardHospedajes";
import CardTraslados from "./CardTraslados";
import CardActividades from "./CardActividades";
import CardAsistencias from "./CardAsistencias";

export default function Cards({ data, typeProduct }) {
  // window scroll top-smooth
  useEffect(() => {
    if (data && data.length > 0)
      window.scroll({ top: 750, behavior: "smooth" });
  }, [data]);
  console.log(data);

  return (
    <>
      {data && typeProduct === "planes" && (
        <CardPlanes data={data} typeProduct={typeProduct} />
      )}
      {data && typeProduct === "hospedajes" && (
        <CardHospedajes data={data} typeProduct={typeProduct} />
      )}
      {data && typeProduct === "traslados" && (
        <CardTraslados data={data} typeProduct={typeProduct} />
      )}
      {data && typeProduct === "actividades" && (
        <CardActividades data={data} typeProduct={typeProduct} />
      )}
      {data && typeProduct === "asistencias" && (
        <CardAsistencias data={data} typeProduct={typeProduct} />
      )}

      <NewProduct typeProduct={typeProduct}></NewProduct>
    </>
  );
}
