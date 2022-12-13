import React from "react";

export default function SpanCard({ text }) {
  return (
    <span className="m-1 p-2 h-100 border border-primary rounded">{text}</span>
  );
}
