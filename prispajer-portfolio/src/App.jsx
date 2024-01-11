import Home from "./components/Home";
import About from "./components/About";
import Navbar from "./components/Navbar";
import Skills from "./components/Skills";

function App() {
  return (
    <div className="mx-auto w-4/5">
      <Navbar />
      <Home />
      <About />
      <Skills />
    </div>
  );
}

export default App;
