import axios from "axios";
import { useEffect, useState } from "react";
import "./App.css";
import CardCategory from "./Components/CardCategory";
import Cards from "./Components/Cards";
import Footer from "./Components/Footer";
import Header from "./Components/Header.js";
import Nav from "./Components/Nav/Nav.js";

function App() {
  const [data, setData] = useState([]);
  
  // useEffect(() => {
  //   axios
  //     .get('http://localhost:3000/api/experiencias')
  //     .then((response) => {
  //       setData(response.data);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // }, [setData]);
console.log(data)
  
  return (
    <div className="App">
      <Header />

      <section className="main">
        <Nav />
        <CardCategory />
        <Cards data ={data}/>
      </section>
      <Footer></Footer>
    </div>
  );
}

export default App;
