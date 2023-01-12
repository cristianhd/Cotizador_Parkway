import { Route, Routes } from "react-router-dom";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import Nav from "./Components/Nav/Nav";
import Actividades from "./Components/SearchForm/Actividades";
import Asistencias from "./Components/SearchForm/Asistencias";
import Planes from "./Components/SearchForm/Planes";
import Traslados from "./Components/SearchForm/Traslados";
import Cards from "./Components/Cards/Cards";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import "./App.css";
import Hospedajes from "./Components/SearchForm/Hospedajes";

import ModalNewProduct from "./Components/NewProduct/ModalNewProduct";
import AllProducts from "./Components/SearchForm/AllProducts";

function App() {
  // local state
  const [data, setData] = useState([]);
  const { querySearch } = useSelector((state) => state);

  // global states (Redux)
  const query = querySearch.querySearch;
  const currentTypeProduct =
    window.location.pathname === "/"
      ? "planes"
      : window.location.pathname.slice(1);

  // set result query data in local state
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
          <Route path="/" element={<Planes />}></Route>
          <Route path="/planes" element={<Planes />}></Route>
          <Route path="/Hospedajes" element={<Hospedajes />}></Route>
          <Route path="/traslados" element={<Traslados />}></Route>
          <Route path="/actividades" element={<Actividades />}></Route>
          <Route path="/asistencias" element={<Asistencias />}></Route>
        </Routes>
      </section>
      <section className="mx-5 px-5 d-flex justify-content-between">
        <ModalNewProduct typeProduct={currentTypeProduct} />
        <AllProducts typeProduct={currentTypeProduct}></AllProducts>
        
      </section>
      <section className="m-5">
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
