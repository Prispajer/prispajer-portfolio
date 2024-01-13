import Home from "./components/Home";
import About from "./components/About";
import Navbar from "./components/Navbar";
import Skills from "./components/Skills";
import Portfolio from "./components/Portfolio";

function App() {
  return (
    <div className="mx-auto w-4/5 overflow-hidden">
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Portfolio />
    </div>
  );
}

export default App;
