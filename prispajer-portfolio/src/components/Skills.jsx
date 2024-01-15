import { Link } from "react-scroll";

export default function Skills({ skillsRef }) {
  return (
    <section
      ref={skillsRef}
      id="skills"
      className="flex flex-col lg:flex-row items-center justify-center min-h-[100vh] gap-x-32 relative"
    >
      <div className="flex flex-col max-w-[600px] gap-y-12 ">
        <div className="flex flex-col">
          <h2 className="sm:min-w-[500px]  text-white text-8xl font-bold">
            My
          </h2>
          <h2 className="text-white text-8xl font-bold">skills</h2>
        </div>
        <div className="text-white text-xl text-justify">
          My coding journey began with developing a company website, sparking a
          growing passion for coding. Continuously refining my skills through
          diverse portfolio projects brings me immense joy. Starting with HTML
          and CSS, I progressed to mastering JavaScript, exploring its solid
          features through various projects. Currently, my focus is on mastering
          React and TypeScript to enhance my professional capabilities.
        </div>
        <div className="">
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
      <div className="absolute left-[40%] top-[36%]  rotate-[270deg] rotation-text">
        <p className="text-gray text-4xl">∕ MY SKILLS ∕</p>
      </div>
      <div className="sm:min-w-[500px] grid grid-cols-3 gap-4 ">
        <img
          className="col-span-1 flex justify-center items-center sm:min-h-[160px] sm:min-w-[160px]"
          src="../../public/images/icons8-html.svg"
          alt=""
        />
        <img
          className=" sm:min-h-[160px] sm:min-w-[160px]"
          src="../../public/images/icons8-css.svg"
          alt=""
        />
        <img
          className=" sm:min-h-[160px] sm:min-w-[160px]"
          src="../../public/images/icons8-javascript.svg"
          alt=""
        />
        <img
          className=" sm:min-h-[160px] sm:min-w-[160px]"
          src="../../public/images/icons8-react.svg"
          alt=""
        />
        <img
          className=" sm:min-h-[160px] sm:min-w-[160px]"
          src="../../public/images/icons8-sass.svg"
          alt=""
        />
        <img
          className=" sm:min-h-[160px] sm:min-w-[160px]"
          src="../../public/images/icons8-tailwind-css.svg"
          alt=""
        />
      </div>
    </section>
  );
}
