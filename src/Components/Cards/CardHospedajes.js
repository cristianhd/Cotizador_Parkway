import React from "react";
import CardHorizontal from "./CardHorizontal";

export default function CardHospedajes({ data, typeProduct }) {
  console.log(data);
  return (
    <div className="m-1 p-1 d-flex flex-column align-items-center justify-content-center gap-3">
      {data.length > 0 &&
        data.map((card, index) => (
          <CardHorizontal
            id={card._id}
            title={card.title}
            photos={card.photos}
            key={index}
            categoryAccommodation={card.categoryAccommodation}
            destinationName={card.destinationName}
            priceKids={card.priceKids}
            priceAdult={card.priceAdult}
            typeProduct={typeProduct}
            description={card.description}
            includes={card.includes}
          ></CardHorizontal>
        ))}
    </div>
  );
}
