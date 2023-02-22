import React from "react";
import EditProduct from "./EditProduct";
export default function CaptionPhotoCard({
  id,
  principalText,
  subtitleText,
  typeProduct,
}) {
  return (
    <div
      className={
        (typeProduct === "traslados" || typeProduct === "asistencias"
          ? "caption-vertical"
          : "caption-horizontal") +
        " p-2 d-flex flex-column justify-content-around"
      }
    >
      {principalText && (
        <div className="principal-text">
          <h4>{principalText}</h4>
          <EditProduct
            id={id}
            typeProduct={typeProduct}
            nameItemEdit="Título"
            principalText={principalText}
          />
        </div>
      )}

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
