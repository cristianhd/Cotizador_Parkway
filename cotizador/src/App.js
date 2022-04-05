import axios from "axios";
import { useEffect, useState } from "react";
import "./App.css";
import CardProduct from "./Components/CardProduct";
import Cards from "./Components/Cards";
import Footer from "./Components/Footer";
import Header from "./Components/Header.js";
import Nav from "./Components/Nav/Nav.js";

function App() {
 
  
  return (
    <div className="App">
      <Header />

      <section className="main">
        <Nav />
        <CardProduct />
        
      </section>
      <Footer></Footer>
    </div>
  );
}

export default App;
