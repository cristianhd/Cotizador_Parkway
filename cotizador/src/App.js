import './App.css';
import CardCategory from './Components/CardCategory';
import Cards from './Components/Cards';
import Footer from './Components/Footer';
import Header from './Components/Header.js';
import Nav from"./Components/Nav.js";
import {Container} from 'react-bootstrap'


function App() {
  return (
    <div fluid className="App">
      <Header/>
    
      <div className='main'>
      <Nav/>
      <CardCategory/>
      <Cards/>
      </div>
    <Footer></Footer>
    </div>
  );
}

export default App;
