import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useDispatch } from "react-redux";
import photos from "../assets/card/camara-fotografica.svg";
import ModalPlanes from "./Planes/ModalPlanes";

export default function NewProduct({ typeProduct }) {
  console.log(typeProduct);
  return (
    <Card>
      <div className="container-img d-flex justify-content-center">
        <Card.Img variant="top" src={photos} />
      </div>
      <div className=" d-flex justify-content-start">
        <Card.Body className="container-body">
          <ModalPlanes typeProduct={typeProduct} />
        </Card.Body>
      </div>
    </Card>
  );
}
