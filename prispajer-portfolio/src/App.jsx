import React from "react";
import About from "./components/About";
import Navbar from "./components/Navbar";
import Hamburger from "./components/Hamburger";

function App() {
  const [showMenu, setShowMenu] = React.useState(true);
  const toggleView = () => {
    setShowMenu((prevView) => !prevView);
  };
  return (
    <div className="flex">
      <Hamburger toggleView={toggleView} />
      <Navbar showMenu={showMenu} />
      <About />
    </div>
  );
}

export default App;
