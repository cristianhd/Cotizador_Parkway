import axios from "axios";
import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import CardProduct from "./Components/CardProduct";
import Cards from "./Components/Cards";
import Footer from "./Components/Footer";
import Header from "./Components/Header.js";
import Loading from "./Components/Loading";
import Nav from "./Components/Nav/Nav.js";
import Actividades from "./Pages/Actividades";
import Admin from "./Pages/Admin";
import Asistencias from "./Pages/Asistencias";
import Experiencias from "./Pages/Experiencias";
import Home from "./Pages/Home";
import Hospedajes from "./Pages/Hospedajes";
import Provider from "./Pages/Provider";
import Traslados from "./Pages/Traslados";
import { useAuth0 } from "@auth0/auth0-react";

function App() {
 
 
  return (
    <div className="App">
      <Header />



      <section className="main">
        <Nav/>
        <Routes>
          <Route exact path="/" element={<Experiencias/>}></Route>
          <Route path="/planes" element={<Experiencias />}></Route>
          <Route path="/hospedajes" element={<Hospedajes />}></Route>
          <Route path="/traslados" element={<Traslados />}></Route>
          <Route path="/actividades" element={<Actividades />}></Route>
          <Route path="/asistencias" element={<Asistencias />}></Route>
        
        </Routes>
      </section>
      <Footer></Footer>
    </div>
  );
}

export default App;
