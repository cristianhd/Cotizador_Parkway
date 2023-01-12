import React from "react";
import CardVertical from "./CardVertical";

export default function CardTraslados({ data, typeProduct }) {
  return (
    <div className="d-flex flex-row flex-wrap justify-content-center">
      {data.length > 0 &&
        data.map((card, index) => (
          <CardVertical
            id={card._id}
            photo="https://i.pinimg.com/564x/23/de/c8/23dec89bc595891cdce353b7ec905fd4.jpg"
            key={index}
            title={card.title}
            priceKids={card.priceKids}
            priceAdult={card.priceAdult}
            typeProduct={typeProduct}
            description={card.description}
            roundTrip={card.roundTrip}
            maxPeople={card.maxPeople}
            minPeople={card.minPeople}
          ></CardVertical>
        ))}
    </div>
  );
}
