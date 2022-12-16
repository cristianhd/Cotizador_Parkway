import React from "react";

export default function SpanCard({ text }) {
  return (
    <div className=" m-1 span-card ">
      <span className="m-1 p-1 border border-primary rounded">{text}</span>
    </div>
  );
}
