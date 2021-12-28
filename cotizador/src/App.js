import './App.css';
import CardCategory from './Components/CardCategory';
import Cards from './Components/Cards';
import Footer from './Components/Footer';
import Header from './Components/Header.js';
import Nav from"./Components/Nav.js";


function App() {
  return (
    <div className="App">
      <Header/>
      <br/>
      <br/>
      <br/>
      <Nav/>
      <CardCategory/>
      <Cards/>
      <Footer/>
    </div>
  );
}

export default App;
