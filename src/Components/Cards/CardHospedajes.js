import React from "react";
import CardHorizontal from "./CardHorizontal";

export default function CardHospedajes({ data, typeProduct }) {
  return (
    <div className="d-flex flex-column">
      {data.length > 0 &&
        data.map((card, index) => (
          <CardHorizontal
            id={card._id}
            photo="https://i.pinimg.com/564x/d4/e6/d8/d4e6d84e0fc58034951f7555a092a6ae.jpg"
            key={index}
            title={card.title}
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
