import "./App.css";
import React, { useState } from "react";
import Nav from "./components/Nav/Navbar";
import Contact from "./components/Contact/Contact";
import Resume from "./components/Resume/Resume";
import Portfolio from "./components/Porfolio/Portfolio";
import About from "./components/About/About";
import Footer from "./components/Footer/Footer";

function App() {
  const [selectedPage, setSelectedPage] = useState("home");
  function getPage() {
    if (selectedPage === "about" || selectedPage === "home") {
      return <About></About>;
    } else if (selectedPage === "portfolio") {
      return <Portfolio></Portfolio>;
    } else if (selectedPage === "resume") {
      return <Resume></Resume>;
    } else if (selectedPage === "contact") {
      return <Contact></Contact>;
    }
  }
  return (
    <div className="App">
      <div className="app-content">
        <Nav pageSelect={setSelectedPage} selectedPage={selectedPage}></Nav>

        {getPage()}
        <Footer></Footer>
      </div>
    </div>
  );
}

export default App;
