import React from "react";
import { Button} from "react-bootstrap";

export default function SuggestPlaces({ suggest, onClick, name }) {
  return (
    <div className="suggest d-fle flex-column">
      {suggest &&
        suggest.map((place, index) => {
          return (
            <Button className="w-100 rounded-0 bg-gray" key={index} variant="dark" onClick={() => onClick(name, place.name)}>
              {place.name}
            </Button>
          );
        })}
    </div>
  );
}
