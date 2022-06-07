import experiencias from "../../assets/nav/experiencias.svg";
import hospedaje from "../../assets/nav/hospedaje.svg";
import traslado from "../../assets/nav/traslado.svg";
import actividades from "../../assets/nav/actividades.svg";
import asistencia from "../../assets/nav/asistencia.svg";

export const MenuItems = [
  {
    name_category: "Planes",
    url: "/planes",
    img: experiencias,
    cName: "nav-links",
  },
  {
    name_category: "Traslados",
    url: "/traslados",
    img: traslado,
    cName: "nav-links",
  },
  {
    name_category: "Actividades",
    url: "/actividades",
    img: actividades,
    cName: "nav-links",
  },
  {
    name_category: "Asistencia",
    url: "/asistencias",
    img: asistencia,
    cName: "nav-links",
  },
];
