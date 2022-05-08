import axios from "axios";
import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import CardProduct from "./Components/CardProduct";
import Cards from "./Components/Cards";
import Footer from "./Components/Footer";
import Header from "./Components/Header.js";
import Nav from "./Components/Nav/Nav.js";
import Admin from "./Pages/Admin";
import Home from "./Pages/Home";
import Provider from "./Pages/Provider";

function App() {
  return (
    <div className="App">
      <Header />

      <section className="main">
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route path="/admin" element={<Admin />}></Route>
          <Route path="/provider" element={<Provider />}></Route>
        </Routes>
      </section>
      <Footer></Footer>
    </div>
  );
}

export default App;
