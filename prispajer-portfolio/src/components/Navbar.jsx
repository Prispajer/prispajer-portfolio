import React, { useEffect, useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";

export default function Navbar({
  homeRef,
  aboutRef,
  portfolioRef,
  contactRef,
  toggleScrollToSection,
}) {
  const [scroll, setScroll] = useState(window.scrollY);
  const [activeSubPage, setActiveSubPage] = useState("home");
  const [isHamburger, setIsHamburger] = useState(true);
  const [isHamburgerClosed, setIsHamburgerClosed] = React.useState(isHamburger);

  const handleScroll = () => {
    setScroll(window.scrollY);
  };

  const handleResize = () => {
    if (window.innerWidth > 768) {
      setIsHamburger(true);
    }
  };

  const closeMenu = () => {
    setIsHamburger(isHamburgerClosed);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className="fixed py-5 w-full z-50">
      <nav className="flex items-center justify-between text-[#efe0ca] font-bold">
        <div className="md:hidden">
          <RxHamburgerMenu
            size="30px"
            className="cursor-pointer"
            onClick={() => setIsHamburger((prevShow) => !prevShow)}
          />
        </div>
        <ul
          className={
            isHamburger
              ? "hidden gap-10 md:flex md:flex-1"
              : "fixed flex-col items-center justify-center w-full bg-white text-black h-full md:gap-10 top-0 left-0 flex gap-10"
          }
        >
          <li
            onClick={() => {
              toggleScrollToSection(homeRef);
              closeMenu();
            }}
            className={activeSubPage === "home" ? "active" : ""}
          >
            HOME
          </li>
          <li
            onClick={() => {
              toggleScrollToSection(aboutRef);
              closeMenu();
            }}
            className={activeSubPage === "about" ? "active" : ""}
          >
            ABOUT
          </li>
          <li
            onClick={() => {
              toggleScrollToSection(portfolioRef);
              closeMenu();
            }}
          >
            PORTFOLIO
          </li>
          <li
            onClick={() => {
              toggleScrollToSection(contactRef);
              closeMenu();
            }}
          >
            CONTACT
          </li>
        </ul>
        <div className="flex flex-1 justify-end">
          <button onClick={closeMenu} className="bg-[#fe5000] mr-20">
            Work with me
          </button>
        </div>
      </nav>
    </header>
  );
}
