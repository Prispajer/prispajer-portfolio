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

  const toggleScrollToSection = (sectionRef) => {
    window.scrollTo({
      top: sectionRef.current.offsetTop,
      behavior: "smooth",
    });
  };

  return (
    <div
      className="px-10 mx-auto
    "
    >
      <Navbar
        homeRef={homeRef}
        aboutRef={aboutRef}
        portfolioRef={portfolioRef}
        contactRef={contactRef}
        toggleScrollToSection={toggleScrollToSection}
      />
      <Home
        homeRef={homeRef}
        aboutRef={aboutRef}
        toggleScrollToSection={toggleScrollToSection}
      />
      <About aboutRef={aboutRef} />
      <Portfolio portfolioRef={portfolioRef} />
      <Sidebar />
      <Contact contactRef={contactRef} />
    </div>
  );
}

export default App;
