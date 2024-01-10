import React from "react";
import About from "./components/About";
import Navbar from "./components/Navbar";
import Hamburger from "./components/Hamburger";
import Skills from "./components/Skills";

function App() {
  const [showMenu, setShowMenu] = React.useState(true);
  const toggleView = () => {
    setShowMenu((prevShowMenu) => !prevShowMenu);
  };

  return (
    <div className="bg-black border">
      <Hamburger toggleView={toggleView} />
      <Navbar showMenu={showMenu} />
      <About showMenu={showMenu} />
      <Skills showMenu={showMenu} />
    </div>
  );
}

export default App;
