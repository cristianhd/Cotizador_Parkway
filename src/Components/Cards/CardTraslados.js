import React from "react";
import CardVertical from "./CardVertical";

export default function CardTraslados({ data, typeProduct }) {
  console.log(data);
  return (
    <div className="d-flex flex-column">
      {data.length > 0 &&
        data.map((card, index) => (
          <CardVertical
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
