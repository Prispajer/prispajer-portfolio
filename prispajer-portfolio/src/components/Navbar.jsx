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
    <header className="fixed min-w-full px-[30px] md:px-[40px] z-50">
      <nav
        ref={activeRef}
        className="flex items-center justify-between min-w-full min-h-[90px] text-primary font-headers font-bold"
      >
        <div className="md:hidden">
          <RxHamburgerMenu
            size="25px"
            className="cursor-pointer"
            onClick={() => setIsHamburger((prevShow) => !prevShow)}
          />
        </div>
        <ul
          className={
            isHamburger
              ? "hidden gap-10 md:flex"
              : "fixed flex flex-col items-center justify-center w-full h-full gap-10 top-0 left-0 bg-secondary text-primary"
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
        <div className="flex font-buttons">
          <button
            onClick={() => toggleScrollToSection(contactRef)}
            className="buttons"
          >
            Work with me
          </button>
        </div>
      </nav>
    </header>
  );
}
