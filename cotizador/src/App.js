import axios from "axios";
import { useEffect, useState } from "react";
import "./App.css";
import CardProduct from "./Components/CardProduct";
import Cards from "./Components/Cards";
import Footer from "./Components/Footer";
import Header from "./Components/Header.js";
import Nav from "./Components/Nav/Nav.js";
import Home from "./Pages/Home";

function App() {
 
  
  return (
    <div className="App">
      <Header />

      <section className="main">
       
        <Home></Home>
      </section>
      <Footer></Footer>
    </div>
  );
}

export default App;
