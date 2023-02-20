import React from "react";

export default function SpanCard({ text }) {
  return (
    <div className=" m-1 span-card d-flex align-items-center rounded ">
      <span className="m-1 p-1 ">{text.toUpperCase()}</span>
    </div>
  );
}
