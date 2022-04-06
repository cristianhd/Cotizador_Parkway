import React from "react";
import { Route, Routes } from "react-router-dom";
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
  return (

      <Routes>
        <Route path="/" element={<Experiencias />}></Route>
        <Route path="/experiencias" element={<Experiencias />}></Route>
        <Route path="/hospedajes" element={<Hospedajes />}></Route>
        <Route path="/traslados" element={<Traslados />}></Route>
        <Route path="/actividades" element={<Actividades />}></Route>
        <Route path="/asistencias" element={<Asistencias />}></Route>
      </Routes>
  
  );
}
