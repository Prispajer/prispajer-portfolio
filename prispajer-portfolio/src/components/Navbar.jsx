import React from "react";
import { Link } from "react-scroll";
import { RxHamburgerMenu } from "react-icons/rx";

export default function Navbar() {
  const [isHamburger, setIsHamburger] = React.useState(true);

  const showMenu = () => {
    setIsHamburger((prevShow) => !prevShow);
  };

  React.useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 640 && !isHamburger) {
        setIsHamburger(true);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [isHamburger]);

  return (
    <header className="fixed py-5 w-full">
      <nav className="flex items-center justify-between text-white">
        <div className="sm:hidden">
          <RxHamburgerMenu
            size="30px"
            className="cursor-pointer"
            onClick={showMenu}
          />
        </div>
        <ul
          className={
            isHamburger
              ? "hidden gap-10 sm:flex sm:flex-1 "
              : "fixed sm:gap-10 top-20 flex gap-10"
          }
        >
          <Link
            className="cursor-pointer"
            to="home"
            spy={true}
            smooth={true}
            offset={-70}
            duration={2000}
          >
            <li className="cursor-pointer">Home</li>
          </Link>
          <Link
            className="cursor-pointer"
            to="about"
            spy={true}
            smooth={true}
            offset={-70}
            duration={2000}
          >
            <li className="cursor-pointer">About</li>
          </Link>
          <Link
            className="cursor-pointer"
            to="portfolio"
            spy={true}
            smooth={true}
            offset={-70}
            duration={2000}
          >
            <li className="cursor-pointer">Portfolio</li>
          </Link>
          <Link
            className="cursor-pointer"
            to="contact"
            spy={true}
            smooth={true}
            offset={-70}
            duration={2000}
          >
            <li className="cursor-pointer">Contact </li>
          </Link>
        </ul>
        <div className="flex flex-1 justify-end">
          <button className="bg-transparent mr-20">Work with me</button>
        </div>
      </nav>
    </header>
  );
}
