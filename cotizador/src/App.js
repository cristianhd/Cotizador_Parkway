import "./App.css";
import CardCategory from "./Components/CardCategory";
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
        <CardCategory />
        <Cards/>
      </section>
      <Footer></Footer>
    </div>
  );
}

export default App;
