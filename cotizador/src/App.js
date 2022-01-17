import { Route, Routes, useLocation } from "react-router-dom";
import "./App.css";
import CardCategory from "./Components/CardCategory";
import Cards from "./Components/Cards";
import Footer from "./Components/Footer";
import Header from "./Components/Header.js";
import Nav from "./Components/Nav/Nav.js";
import Hospedaje from "./Components/Hospedaje";
import Traslado from "./Components/Traslado";
import Experiencias from "./Components/Experiencias";
import Actividades from "./Components/Actividades";
import Asistencia from "./Components/Asistencia";
import { MenuItems } from "./Components/Nav/MenuItems.js";

function App() {


  return (
    <div className="App">
      <Header />

      <section className="main">
        <Nav />

        <CardCategory/>

       
        <br />
        <br />
        <Cards />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
      </section>
      <Footer></Footer>
    </div>
  );
}

export default App;
