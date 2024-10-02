// import { useState, useEffect } from 'react'
import "./App.css";
import About from "./components/About";
// import Footer from "./components/Footer";
import Home from "./components/Home";
// import Projects from "./components/Projects";
import Navbar from "./components/Navbar";


function App() {
  return (
    <>
      <Navbar />
      <div className="pt-4 md:pt-12 px-4 md:px-4 md:max-w-5xl mx-auto h-1/2 md:h-screen">
        <div className="pb-4 md:pb-12 flex flex-col md:flex-row justify-between">
          <Home />
          <div className="w-full mt-8 md:mt-0">
            <About />
            {/* <div className="pt-4 md:pt-8 flex flex-col md:flex-row justify-between">
              <Projects />
              
            </div> */}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
