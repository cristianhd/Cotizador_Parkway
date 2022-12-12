import React from "react";
import { Button } from "react-bootstrap";

export default function Suggest({ suggest, onClick, name }) {
  return (
    <div className="suggest d-flex flex-column">
      {suggest &&
        suggest.map((suggest, index) => {
          return (
            <Button
              className="w-100 rounded-0 bg-gray"
              key={index}
              variant="dark"
              onClick={() => onClick(name, suggest.name, suggest._id)}
            >
              {suggest.name}{" "}
              {suggest.nameDepartment && ` , ${suggest.nameDepartment}`}{" "}
              {suggest.typePlace && ` ( ${suggest.typePlace} )`}{" "}
            </Button>
          );
        })}
    </div>
  );
}
