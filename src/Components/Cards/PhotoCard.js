import React from "react";
import SpanCard from "./SpanCard";
import "../../style/card.css";

export default function PhotoCard({ pricipalText, photo, listSpanText }) {
  return (
    <div className="photo-card  d-flex-column">
      <img className="img-card" src={photo} alt="photoCard"></img>
      <div className="text-card p-1">
        <h3>{pricipalText}</h3>
        {listSpanText.map((text) => (
          <SpanCard text={text}></SpanCard>
        ))}
      </div>
    </div>
  );
}
