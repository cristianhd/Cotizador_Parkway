import React from "react";
import { Route, Routes, useParams } from "react-router-dom";
import Actividades from "../Pages//Actividades";
import Asistencias from "../Pages//Asistencias";
import Experiencias from "../Pages//Experiencias";
import Hospedajes from "../Pages//Hospedajes";
import Traslados from "../Pages/Traslados";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import "../style/cardProduct.css";

export default function CardProduct() {

  const {category} = useParams();
  console.log(category);
  return (

      <>
      {category}
      </>
  
  );
}
