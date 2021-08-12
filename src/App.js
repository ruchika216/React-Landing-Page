import React from 'react';
import Navbar from "./Component/Navbar/Navbar";
import MultiTheme from "./Component/Theme/MutliTheme";
import Footer from "./Component/Footer/Footer";
import './App.css';
import Carosel from "./Component/Carousel/Carosel";
import './Check.css';
import Feature from './Component/Features/Feature';
import Contact from './Component/Contact/Contact';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Carosel />
      <MultiTheme />
      <hr style={{ color: "#f0e7e7" }} />
      <Feature />
      <Contact />

      <Footer />
    </div >
  );
};

export default App;
