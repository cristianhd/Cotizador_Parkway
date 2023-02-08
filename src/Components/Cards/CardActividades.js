import React from "react";
import CardHorizontal from "./CardHorizontal";

export default function CardActividades({ data, typeProduct }) {
  const photo =
    "http://drive.google.com/uc?export=view&id=1PEpLiDAuR0GPjLxJZ1s35fpADM-jYHNU";
  return (
    <div className="d-flex flex-column">
      {data.length > 0 &&
        data.map((card, index) => (
          <CardHorizontal
            id={card._id}
            photo={photo}
            key={index}
            title={card.title}
            destinationName={card.destinationName}
            priceKids={card.priceKids}
            priceAdult={card.priceAdult}
            typeProduct={typeProduct}
            description={card.description}
            maxPeople={card.maxPeople}
            minPeople={card.minPeople}
          ></CardHorizontal>
        ))}
    </div>
  );
}
