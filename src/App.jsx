import React from "react";
import Home from "./components/Home";
import About from "./components/About";
import Navbar from "./components/Navbar";
import Portfolio from "./components/Portfolio";
import Sidebar from "./components/Sidebar";
import Contact from "./components/Contact";

function App() {
  const [activeElement, setActiveElement] = React.useState("HOME");

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
    <div className="flex flex-col items-center gap-[200px] mx-auto overflow-y-auto">
      <Navbar
        activeElement={activeElement}
        setActiveElement={setActiveElement}
        homeRef={homeRef}
        aboutRef={aboutRef}
        portfolioRef={portfolioRef}
        contactRef={contactRef}
        activeRef={activeRef}
        toggleScrollToSection={toggleScrollToSection}
      />
      <Home
        activeElement={activeElement}
        setActiveElement={setActiveElement}
        homeRef={homeRef}
        portfolioRef={portfolioRef}
        aboutRef={aboutRef}
        toggleScrollToSection={toggleScrollToSection}
      />
      <About
        activeElement={activeElement}
        setActiveElement={setActiveElement}
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
