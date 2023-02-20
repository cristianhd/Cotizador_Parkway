import React from "react";
import SpanCard from "./SpanCard";

export default function CaptionPhotoCard({
  principalText,
  subtitleText,
  typeProduct,
}) {
  console.log(principalText);
  return (
    <div
      className={
        (typeProduct === "traslados"
          ? "caption-vertical"
          : "caption-horizontal") +
        " p-2 d-flex flex-column justify-content-around"
      }
    >
      <h4>{principalText && principalText}</h4>
      <div className="location">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="14"
          height="14"
          fill="gray"
          class="bi bi-geo-alt-fill"
          viewBox="0 0 16 16"
        >
          <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z" />
        </svg>
        <span className="m-1 fst-italic">{subtitleText && subtitleText}</span>
      </div>
    </div>
  );
}
