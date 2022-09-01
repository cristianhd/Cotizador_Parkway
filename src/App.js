import { Route, Routes } from "react-router-dom";
import Footer from "./Components/Footer";
import Header from "./Components/Header/Header.js";
import Nav from "./Components/Nav/Nav.js";
import Actividades from "./Pages/Actividades";
import Asistencias from "./Pages/Asistencias";
import Experiencias from "./Pages/Experiencias";
import Traslados from "./Pages/Traslados";
import Cards from "./Components/Cards";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import "./App.css";

function App() {
  const [data, setData] = useState([]);
  const { querySearch} = useSelector((state) => state);
  const query = querySearch.querySearch;
  const currentTypeProduct = window.location.pathname === "/" ? "experiencias" : window.location.pathname.slice(1);
  console.log(currentTypeProduct)

  useEffect(() => {
    setData(query);
  }, [query]);

 
  return (
    <div className="App m-0">
      <section>
        <Header />
      </section>
      <section className="mx-3">
        <nav className="mt-5 p-1 d-flex justify-content-center align-item-center">
          <Nav />
        </nav>
      </section>
      <section className="m-3 p-1">
        <Routes>
          <Route path="/" element={<Experiencias />}></Route>
          <Route path="/experiencias" element={<Experiencias />}></Route>
          <Route path="/traslados" element={<Traslados />}></Route>
          <Route path="/actividades" element={<Actividades />}></Route>
          <Route path="/asistencias" element={<Asistencias />}></Route>
        </Routes>
      </section>
      <section className="m-5 p-1">
        <Cards data={data} typeProduct={currentTypeProduct} />
      </section>
      <section className="">
        <footer>
          <Footer />
        </footer>
      </section>
    </div>
  );
}

export default App;
