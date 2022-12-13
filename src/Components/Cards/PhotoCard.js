import React from "react";
import SpanCard from "./SpanCard";
import "../../style/card.css";

export default function PhotoCard({ pricipalText, photo, listSpanText }) {
  return (
    <div className="photo-card">
      <img className="img-card" src={photo} alt="photoCard"></img>
      <div className="text-card p-2 d-flex flex-column justify-content-center">
        <h3>{pricipalText}</h3>
        <div className="m-1 span-card d-flex flex-row">
          {listSpanText &&
            listSpanText.map((text) => <SpanCard text={text}></SpanCard>)}
        </div>
      </div>
    </div>
  );
}
