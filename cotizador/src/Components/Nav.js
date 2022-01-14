import React from "react";
import experiencias from "../assets/nav/experiencias.svg";
import hospedaje from "../assets/nav/hospedaje.svg";
import traslado from "../assets/nav/traslado.svg";
import actividades from "../assets/nav/actividades.svg";
import asistencia from "../assets/nav/asistencia.svg";
import selected from "../assets/nav/selected.svg";
import "../style/nav.css";

export default function Nav() {
  return (
    <div className="nav">
      <ul className="wrap">
        <li>
          <img src={experiencias} alt="experiencias" className="img"></img>
          <img src={selected} alt="selected" className="select"></img>
          <a href="/#">Experiencias</a>
        </li>
        <li>
          <img src={hospedaje} alt="hospedaje" className="img"></img>
          <img src={selected} alt="selected" className="select"></img>
          <a href="/#">Hospedaje</a>
        </li>
        <li>
          <img src={traslado} alt="traslado" className="img"></img>
          <img src={selected} alt="selected" className="select"></img>
          <a href="/#">Traslados</a>
        </li>
        <li>
          <img src={actividades} alt="actividades" className="img"></img>
          <img src={selected} alt="selected" className="select"></img>
          <a href="/#">Actividades</a>
        </li>
        <li>
          <img src={asistencia} alt="asistencia" className="img"></img>
          <img src={selected} alt="selected" className="select"></img>
          <a href="/#">Asistencia</a>
        </li>
      </ul>
    </div>
  );
}
