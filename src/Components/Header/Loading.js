import React from "react";
import "../../style/loading.css";

export default function Loading() {
  return (
    <div className="modal-loader d-flex justify-content-center align-items-center">
      <div className="w-auto d-flex flex-column align-items-center">
        <div className="loader"></div>
        <span>
          <strong>Loading...</strong>
        </span>
      </div>
    </div>
  );
}
