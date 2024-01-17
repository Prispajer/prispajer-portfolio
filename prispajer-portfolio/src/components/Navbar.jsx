import React from "react";
import { RxHamburgerMenu } from "react-icons/rx";

export default function Navbar({
  homeRef,
  aboutRef,
  skillsRef,
  portfolioRef,
  contactRef,
  toggleScrollToSection,
}) {
  const [scroll, setScroll] = React.useState(window.scrollY);
  const [activeSubPage, setActiveSubPage] = React.useState("home");
  const [isHamburger, setIsHamburger] = React.useState(true);

  const showMenu = () => {
    setIsHamburger((prevShow) => !prevShow);
  };

  React.useEffect(() => {
    const scrollHandle = () => {
      const currentScrollRange = window.scrollY;
      setScroll(currentScrollRange);
    };

    const handleResize = () => {
      if (window.innerWidth >= 768 && !isHamburger) {
        setIsHamburger(true);
      }
    };

    window.addEventListener("scroll", scrollHandle);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", scrollHandle);
    };
  }, [isHamburger]);

  React.useEffect(() => {
    const homeSubPagePosition = homeRef.current;
    homeRef.current.offsetTop;
    const aboutSubPagePosition = aboutRef.current;
    aboutRef.current.offsetTop;
    const skillsSubPagePosition = skillsRef.current;
    const portfolioSubPagePosition = portfolioRef.current;
    const contactSubPagePosition = contactRef.current;

    const homeSection = scroll >= 0 && scroll < aboutSubPagePosition;
    const aboutSection =
      scroll >= homeSubPagePosition && scroll < aboutSubPagePosition;
    const skillsSection =
      scroll >= aboutSubPagePosition && scroll < portfolioSubPagePosition;
    const portfolioSection =
      scroll >= portfolioSubPagePosition && scroll < contactSubPagePosition;
    const contactSection = scroll >= contactSubPagePosition;

    if (homeSection) {
      setActiveSubPage("home");
    } else if (aboutSection) {
      setActiveSubPage("about");
    } else if (skillsSection) {
      setActiveSubPage("skills");
    } else if (portfolioSection) {
      setActiveSubPage("portfolio");
    } else if (contactSection) {
      setActiveSubPage("contact");
    }
  }, [scroll]);

  return (
    <header className="fixed py-5 w-full z-50  ">
      <nav className="flex items-center justify-between text-[#efe0ca] font-bold">
        <div className="md:hidden">
          <RxHamburgerMenu
            size="30px"
            className="cursor-pointer"
            onClick={showMenu}
          />
        </div>
        <ul
          className={
            isHamburger
              ? "hidden gap-10 md:flex md:flex-1 "
              : "fixed flex-col items-center justify-center w-full bg-white text-black h-full md:gap-10 top-0 left-0 flex gap-10"
          }
        >
          <li
            onClick={() => toggleScrollToSection(homeRef)}
            className={activeSubPage === "home" ? "active" : ""}
          >
            HOME
          </li>
          <li
            onClick={() => toggleScrollToSection(aboutRef)}
            className={activeSubPage === "about" ? "active" : ""}
          >
            ABOUT
          </li>
          <li
            onClick={() => toggleScrollToSection(skillsRef)}
            className={activeSubPage === "skills" ? "active" : ""}
          >
            SKILLS
          </li>
          <li
            onClick={() => toggleScrollToSection(portfolioRef)}
            className={activeSubPage === "portfolio" ? "active" : ""}
          >
            PORTFOLIO
          </li>
          <li
            onClick={() => toggleScrollToSection(contactRef)}
            className={activeSubPage === "contact" ? "active" : ""}
          >
            CONTACT
          </li>
        </ul>
        <div className="flex flex-1 justify-end">
          <button className="bg-[#fe5000] mr-20">Work with me</button>
        </div>
      </nav>
    </header>
  );
}
