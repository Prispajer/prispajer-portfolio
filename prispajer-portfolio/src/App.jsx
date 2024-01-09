import React from "react";
import About from "./components/About";
import Navbar from "./components/Navbar";
import Hamburger from "./components/Hamburger";

function App() {
  const [showMenu, setShowMenu] = React.useState(true);
  const toggleView = () => {
    setShowMenu((prevShowMenu) => !prevShowMenu);
  };

  return (
    <div className="flex bg-black border">
      <Hamburger toggleView={toggleView} />
      <Navbar showMenu={showMenu} />
      <About showMenu={showMenu} />
    </div>
  );
}

export default App;
