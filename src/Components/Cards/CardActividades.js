import React from "react";
import CardHorizontal from "./CardHorizontal";

export default function CardActividades({ data, typeProduct }) {
  return (
    <div className="d-flex flex-column">
      {data.length > 0 &&
        data.map((card, index) => (
          <CardHorizontal
            photo="https://i.pinimg.com/564x/dc/a2/04/dca2046e6525ed56ca76c76f724cae0c.jpg"
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
