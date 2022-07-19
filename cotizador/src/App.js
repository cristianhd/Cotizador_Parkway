import { Route, Routes } from "react-router-dom";
import Footer from "./Components/Footer";
import Header from "./Components/Header.js";
import Nav from "./Components/Nav/Nav.js";
import Actividades from "./Pages/Actividades";
import Asistencias from "./Pages/Asistencias";
import Experiencias from "./Pages/Experiencias";
import Traslados from "./Pages/Traslados";
import "./App.css";

function App() {
  return (
    <div className="m-0">
      <section>
        <Header />
      </section>
      <section className=" mx-3 p-1 border border-dark">
        <nav>
          <Nav />
        </nav>
        <section className="searchBar">
          <Routes>
            <Route path="/planes" element={<Experiencias />}></Route>
            <Route path="/traslados" element={<Traslados />}></Route>
            <Route path="/actividades" element={<Actividades />}></Route>
            <Route path="/asistencias" element={<Asistencias />}></Route>
          </Routes>
        </section>
      </section>
      <section>
        <Footer />
      </section>
    </div>
  );
}

export default App;
