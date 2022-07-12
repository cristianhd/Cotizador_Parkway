import React from "react";
import { Button } from "react-bootstrap";

export default function SuggestPlaces({ suggest, onClick, name}) {
    console.log(onClick)
  return (
    <>
      {suggest &&
        suggest.map((place, index) => {
          return <Button variant="light" onClick={()=>onClick(name,place.name)}>{place.name}</Button>;
        })}
    </>
  );
}
