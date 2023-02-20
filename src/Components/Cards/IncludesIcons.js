import React from "react";
import food from "../../assets/card/food.svg";
import route from "../../assets/card/route.svg";
import visit from "../../assets/card/visit.svg";
import MessageIncludes from "./MessageIncludes.js";

export default function IncludesIcons({ includes }) {
  const existFood = includes && includes.food.length > 0 ? includes.food : false;
  const existRoute = includes && includes.route.length > 0 ? includes.route : false;
  const existVisit = includes && includes.visit.length > 0 ? includes.visit : false;

  return (
    <div className="p-1 border-bottom d-flex gap-3">
      {existFood && <MessageIncludes message={includes.food} imageUrl={food} />}
      {existRoute && (
        <MessageIncludes message={includes.route} imageUrl={route} />
      )}
      {existVisit && (
        <MessageIncludes message={includes.visit} imageUrl={visit} />
      )}
    </div>
  );
}
