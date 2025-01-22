import React from "react";
import { RxHamburgerMenu } from "react-icons/rx";

export default function Navbar({
  activeElement,
  setActiveElement,
  homeRef,
  aboutRef,
  portfolioRef,
  contactRef,
  activeRef,
  toggleScrollToSection,
}) {
  const [isHamburger, setIsHamburger] = React.useState(false);

  const scrollPosition = React.useRef(window.scrollY);

  const handleScroll = () => {
    scrollPosition.current = window.scrollY;
  };

  const handleResize = () => {
    if (window.innerWidth > 768) {
      setIsHamburger(false);
    }
  };

  React.useEffect(() => {
    window.addEventListener("resize", handleResize);
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className="fixed min-w-[100vw] px-[15px] ti:px-[30px] md:px-[40px] z-50 overflow-x-hidden">
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
              ? "fixed flex flex-col items-center justify-center w-full h-full gap-10 top-0 left-0 bg-secondary text-primary"
              : "hidden gap-10 md:flex"
          }
        >
          <li
            onClick={(event) => {
              setActiveElement(event.target.innerHTML);
              toggleScrollToSection(homeRef);
              setIsHamburger(false);
            }}
            className={activeElement === "HOME" ? "active" : ""}
          >
            HOME
          </li>
          <li
            onClick={(event) => {
              setActiveElement(event.target.innerHTML);
              toggleScrollToSection(aboutRef);
              setIsHamburger(false);
            }}
            className={activeElement === "ABOUT" ? "active" : ""}
          >
            ABOUT
          </li>
          <li
            onClick={(event) => {
              setActiveElement(event.target.innerHTML);
              toggleScrollToSection(portfolioRef);
              setIsHamburger(false);
            }}
            className={activeElement === "PORTFOLIO" ? "active" : ""}
          >
            PORTFOLIO
          </li>
          <li
            onClick={(event) => {
              setActiveElement(event.target.innerHTML);
              toggleScrollToSection(contactRef);
              setIsHamburger(false);
            }}
            className={activeElement === "CONTACT" ? "active" : ""}
          >
            CONTACT
          </li>
        </ul>
        <div className="flex font-buttons">
          <button
            onClick={() => {
              toggleScrollToSection(contactRef);
              setActiveElement("CONTACT");
            }}
            className="buttons"
          >
            Work with me
          </button>
        </div>
      </nav>
    </header>
  );
}
