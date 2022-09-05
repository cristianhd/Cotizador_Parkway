import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useDispatch } from "react-redux";
import photos from "../../assets/card/camara-fotografica.svg";
import ModalNewProduct from "./ModalNewProduct";


export default function NewProduct({ typeProduct }) {
  return (
    <Card className="p-1">
      <Card.Header className="w-100">
        <div className="container-img d-flex justify-content-center">
          <Card.Img variant="top" src={photos} />
        </div>
      </Card.Header>
      <Card.Body className="w-100">
        <ModalNewProduct typeProduct={typeProduct} />
      </Card.Body>
    </Card>
  );
}
