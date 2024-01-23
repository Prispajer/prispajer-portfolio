import React, { useEffect, useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";

export default function Navbar({
  homeRef,
  aboutRef,
  portfolioRef,
  contactRef,
  activeRef,
  toggleScrollToSection,
}) {
  const [scroll, setScroll] = useState(window.scrollY);
  const [isActiveElement, setIsActiveElement] = React.useState("HOME");
  const [isHamburger, setIsHamburger] = useState(true);
  const [isHamburgerClosed, setIsHamburgerClosed] = React.useState(isHamburger);

  const handleScroll = () => {
    setScroll(window.scrollY);
  };

  const handleActive = (element) => {
    setIsActiveElement(element.target.innerHTML);
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
    <header className="fixed py-5 w-full z-50 ">
      <nav
        ref={activeRef}
        className="flex items-center justify-between text-primary font-bold"
      >
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
              : "fixed flex-col items-center justify-center w-full bg-secondary text-primary h-full md:gap-10 top-0 left-0 flex gap-10"
          }
        >
          <li
            onClick={(event) => {
              handleActive(event);
              toggleScrollToSection(homeRef);
              closeMenu();
            }}
            className={isActiveElement === "HOME" ? "active" : ""}
          >
            HOME
          </li>
          <li
            onClick={(event) => {
              handleActive(event);
              toggleScrollToSection(aboutRef);
              closeMenu();
            }}
            className={isActiveElement === "ABOUT" ? "active" : ""}
          >
            ABOUT
          </li>
          <li
            onClick={(event) => {
              handleActive(event);
              toggleScrollToSection(portfolioRef);
              closeMenu();
            }}
            className={isActiveElement === "PORTFOLIO" ? "active" : ""}
          >
            PORTFOLIO
          </li>
          <li
            onClick={(event) => {
              handleActive(event);
              toggleScrollToSection(contactRef);
              closeMenu();
            }}
            className={isActiveElement === "CONTACT" ? "active" : ""}
          >
            CONTACT
          </li>
        </ul>
        <div className="flex flex-1 justify-end">
          <button
            onClick={() => toggleScrollToSection(contactRef)}
            className="buttons mr-20"
          >
            Work with me
          </button>
        </div>
      </nav>
    </header>
  );
}
