import React from "react";
import CardHorizontal from "./CardHorizontal";

export default function CardPlanes({ data, typeProduct }) {
  // const listSpanText = [
  //   data.categoryAccomodation && data.categoryAccomodation,
  //   data.numberNight && data.numberNight,
  //   data.transport && data.transport,
  // ];
  console.log(data);

  return (
    <div className="d-flex flex-column">
      {data.length > 0 &&
        data.map((card, index) => (
          <CardHorizontal
            photo="https://i.pinimg.com/564x/dc/a2/04/dca2046e6525ed56ca76c76f724cae0c.jpg"
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
          ></CardHorizontal>
        ))}
    </div>
  );
}
