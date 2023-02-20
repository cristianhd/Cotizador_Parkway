import React from "react";
import CardHorizontal from "./CardHorizontal";

export default function CardHospedajes({ data, typeProduct }) {
  const photo =
    "http://drive.google.com/uc?export=view&id=1PEpLiDAuR0GPjLxJZ1s35fpADM-jYHNU";
  return (
    <div className="d-flex flex-column align-items-center justify-content-center gap-3">
      {data.length > 0 &&
        data.map((card, index) => (
          <CardHorizontal
            id={card._id}
            photo={photo}
            key={index}
            categoryAccommodation={card.categoryAccommodation}
            destinationName={card.destinationName}
            priceKids={card.priceKids}
            priceAdult={card.priceAdult}
            typeProduct={typeProduct}
            description={card.description}
          ></CardHorizontal>
        ))}
    </div>
  );
}
