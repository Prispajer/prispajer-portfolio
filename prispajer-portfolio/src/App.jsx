import React from "react";
import Home from "./components/Home";
import About from "./components/About";
import Navbar from "./components/Navbar";
import Portfolio from "./components/Portfolio";
import Sidebar from "./components/Sidebar";
import Contact from "./components/Contact";

function App() {
  const homeRef = React.useRef(null);
  const aboutRef = React.useRef(null);
  const portfolioRef = React.useRef(null);
  const contactRef = React.useRef(null);
  const activeRef = React.useRef(null);

  const toggleScrollToSection = (sectionRef) => {
    window.scrollTo({
      top: sectionRef.current.offsetTop,
      behavior: "smooth",
    });
  };

  return (
    <div className="grid grid-cols-1 mx-auto gap-[300px]">
      <Navbar
        homeRef={homeRef}
        aboutRef={aboutRef}
        portfolioRef={portfolioRef}
        contactRef={contactRef}
        activeRef={activeRef}
        toggleScrollToSection={toggleScrollToSection}
      />
      <Home
        homeRef={homeRef}
        portfolioRef={portfolioRef}
        aboutRef={aboutRef}
        toggleScrollToSection={toggleScrollToSection}
      />
      <About
        aboutRef={aboutRef}
        contactRef={contactRef}
        portfolioRef={portfolioRef}
        toggleScrollToSection={toggleScrollToSection}
      />
      <Portfolio portfolioRef={portfolioRef} />
      <Sidebar />
      <Contact contactRef={contactRef} />
    </div>
  );
}

export default App;
