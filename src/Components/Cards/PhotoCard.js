import React from "react";
import SpanCard from "./SpanCard";
import "../../style/card.css";
import { Card } from "react-bootstrap";

export default function PhotoCard({
  pricipalText,
  photo,
  listSpanText,
  subtitleText,
}) {
  return (
    <div className="photo-card">
      <img className="img-card" src={photo} alt="photoCard"></img>
      <div className="text-card p-2 d-flex flex-column justify-content-center">
        <div className="mx-2">
          <h3>{pricipalText && pricipalText}</h3>
          <span>{subtitleText && subtitleText}</span>
        </div>
        <div className="my-1 d-flex flex-row">
          {listSpanText &&
            listSpanText.map((text, index) => (
              <div key={index} className=" m-1 span-card ">
                <SpanCard  text={text}></SpanCard>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}
