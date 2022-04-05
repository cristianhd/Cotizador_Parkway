import React from "react";
import { Route, Routes } from "react-router-dom";
import Actividades from "./Actividades";
import Asistencia from "./Asistencia";
import Experiencias from "./Experiencias";
import Hospedaje from "./Hospedaje";
import Traslado from "./Traslado";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import "../style/cardProduct.css";

export default function CardProduct() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Experiencias />}></Route>
        <Route path="/Experiencias" element={<Experiencias />}></Route>
        <Route path="/Hospedaje" element={<Hospedaje />}></Route>
        <Route path="/Traslados" element={<Traslado />}></Route>
        <Route path="/Actividades" element={<Actividades />}></Route>
        <Route path="/Asistencia" element={<Asistencia />}></Route>
      </Routes>
    </div>
  );
}
