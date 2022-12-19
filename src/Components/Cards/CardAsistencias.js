import React from "react";
import NavigationCard from "./NavigationCard";
import PhotoCard from "./PhotoCard";

export default function CardAsistencias({ data, typeProduct }) {
  return (
    <div className="d-flex flex-column">
      {data.length > 0 &&
        data.map((card, index) => (
          <div className="card-vertical">
            <div className="d-flex flex-column w-100">
              <PhotoCard
                photo="https://i.pinimg.com/564x/32/43/ee/3243ee7b772f95d751578e43e23bc443.jpg"
                pricipalText={card.title}
                subtitleText={card.destinationName}
              ></PhotoCard>
              <NavigationCard
                priceAdult={card.priceAdult}
                typeProduct={typeProduct}
                description={card.description}
              ></NavigationCard>
            </div>
          </div>
        ))}
    </div>
  );
}
