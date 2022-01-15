import './App.css';
import CardCategory from './Components/CardCategory';
import Cards from './Components/Cards';
import Footer from './Components/Footer';
import Header from './Components/Header.js';
import Nav from "./Components/Nav/Nav.js";
import {Container} from 'react-bootstrap'


function App() {
  return (
    <div fluid className="App">
      <Header/>
      
    <section className='main'>

     
      <Nav/>
      <br/>
      <br/>
      <CardCategory/>
     
      <br/>
      <br/>
      <Cards/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
    
    </section>
    <Footer></Footer>
    </div>
  );
}

export default App;
