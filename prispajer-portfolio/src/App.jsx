import React from "react";
import Home from "./components/Home";
import About from "./components/About";
import Navbar from "./components/Navbar";
import Skills from "./components/Skills";
import Portfolio from "./components/Portfolio";

function App() {
  const homeRef = React.useRef(null);
  const aboutRef = React.useRef(null);
  const skillsRef = React.useRef(null);
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
        skillsRef={skillsRef}
        portfolioRef={portfolioRef}
        contactRef={contactRef}
        toggleScrollToSection={toggleScrollToSection}
      />
      <Home homeRef={homeRef} />
      <About aboutRef={aboutRef} />
      <Skills skillsRef={skillsRef} />
      <Portfolio portfolioRef={portfolioRef} />
    </div>
  );
}

export default App;
