

import './App.css';

import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Home from './Components/Home';
import Header from './Components/Header';
import Footer from './Components/Footer';
import About from './Components/About';
import Contact from './Components/Contact';
import Portfolio from './Components/Portfolio';


const App = () => {
  return (
    <Router >
      <Header />
      <Routes>
      
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Portfolio />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<Home />} /> 
      </Routes>
      <Footer />
      
    </Router>
   

  );
}

export default App;
