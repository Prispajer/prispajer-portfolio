import { Link } from "react-scroll";

export default function Skills({ skillsRef }) {
  return (
    <section
      ref={skillsRef}
      id="skills"
      className="flex flex-col lg:flex-row items-center justify-center min-h-[100vh] gap-x-32 mt-10 relative sm:max-w-[540px]"
    >
      <div className="flex flex-col gap-y-12 ">
        <div className="flex sm:flex-col justify-center gap-4 sm:gap-0">
          <h2 className=" text-white text-[36px] font-bold">My</h2>
          <h2 className="text-white text-[36px] font-bold">skills</h2>
        </div>
        <div className="text-white text-[20px] text-justify">
          My coding journey began with developing a company website, sparking a
          growing passion for coding. Continuously refining my skills through
          diverse portfolio projects brings me immense joy. Starting with HTML
          and CSS, I progressed to mastering JavaScript, exploring its solid
          features through various projects. Currently, my focus is on mastering
          React and TypeScript to enhance my professional capabilities.
        </div>
        <div className="flex justify-between items-center">
          <button className="text-white mr-10">Contact me</button>
          <Link
            className="link cursor-pointer text-white"
            to="portfolio"
            spy={true}
            smooth={true}
            offset={-70}
            duration={2000}
          >
            My projects
          </Link>
        </div>
      </div>
      <div className="sm:min-w-[500px] grid grid-cols-3 gap-4 mt-10 md:mt-0">
        <img
          className="col-span-1 flex justify-center items-center sm:min-h-[80px] sm:min-w-[80px]"
          src="../../public/images/icons8-html.svg"
          alt=""
        />
        <img
          className=" sm:min-h-[80px] sm:min-w-[80px]"
          src="../../public/images/icons8-css.svg"
          alt=""
        />
        <img
          className=" sm:min-h-[80px] sm:min-w-[80px]"
          src="../../public/images/icons8-javascript.svg"
          alt=""
        />
        <img
          className=" sm:min-h-[80px] sm:min-w-[80px]"
          src="../../public/images/icons8-react.svg"
          alt=""
        />
        <img
          className=" sm:min-h-[80px] sm:min-w-[80px]"
          src="../../public/images/icons8-sass.svg"
          alt=""
        />
        <img
          className=" sm:min-h-[80px] sm:min-w-[80px]"
          src="../../public/images/icons8-tailwind-css.svg"
          alt=""
        />
      </div>
    </section>
  );
}
