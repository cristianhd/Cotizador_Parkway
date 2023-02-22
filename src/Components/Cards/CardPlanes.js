import React from "react";
import CardHorizontal from "./CardHorizontal";

export default function CardPlanes({ data, typeProduct }) {
  const photo =
    "http://drive.google.com/uc?export=view&id=1PEpLiDAuR0GPjLxJZ1s35fpADM-jYHNU";

  return (
    <div className="m-1 p-1 d-flex flex-column align-items-center justify-content-center gap-3">
      {data.length > 0 &&
        data.map((card, index) => (
          <CardHorizontal
            id={card._id}
            photos={card.photos}
            key={index}
            title={card.title}
            categoryAccommodation={card.categoryAccommodation}
            destinationName={card.destinationName}
            numberNigths={card.numberNigths}
            transport={card.transport}
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
