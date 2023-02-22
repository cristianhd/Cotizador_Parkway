import React, { useState } from "react";
import CardVertical from "./CardVertical";

export default function CardAsistencias({ data, typeProduct }) {
  console.log(data);
  return (
    <div className="d-flex flex-row flex-wrap justify-content-center gap-3">
      {data.asistencias.length > 0 &&
        data.asistencias.map((card, index) => (
          <CardVertical
            id={card._id}
            days={data.days}
            pax={data.pax}
            photos={[
              "https://i.pinimg.com/564x/32/43/ee/3243ee7b772f95d751578e43e23bc443.jpg",
            ]}
            key={index}
            title={card.title}
            destinationName={card.destinationName}
            typeProduct={typeProduct}
            priceAdult={card.priceAdult}
            description={card.description}
          ></CardVertical>
        ))}
    </div>
  );
}
