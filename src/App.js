import logo from './logo.svg';
import './App.css';
import Navbar from "./Navbar";
import Hero from "./Hero";
import Cards from "./Cards";
// import Card from "./Card";

function App() {
  return (
    <div className="body">
      <header>
          <Navbar/>
          <Hero/>
          <Cards/>

      </header>
    </div>
  );
}

export default App;
