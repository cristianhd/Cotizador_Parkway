import React from "react";
import "../../style/card.css";
import CarrouselCard from "./CarrouselCard";
import CaptionPhotoCard from "./CaptionPhotoCard";

export default function PhotoCard({
  id,
  principalText,
  photos,
  subtitleText,
  typeProduct,
}) {
  return (
    <div className="photo-card">
      <CarrouselCard photos={photos} typeProduct={typeProduct} />
      <CaptionPhotoCard
        id={id}
        principalText={principalText}
        subtitleText={subtitleText}
        typeProduct={typeProduct}
      />
    </div>
  );
}
