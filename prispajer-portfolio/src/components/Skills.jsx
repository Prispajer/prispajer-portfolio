import { Link } from "react-scroll";

export default function About() {
  return (
    <section
      id="about"
      className="flex items-center justify-center min-h-[100vh] gap-x-32 relative"
    >
      <div className="flex flex-col max-w-[500px] gap-y-12 relative">
        <div className="flex flex-col">
          <h2 className="text-white text-8xl font-bold">My</h2>
          <h2 className="text-white text-8xl font-bold">skills</h2>
        </div>
        <div className="text-white text-xl ">
          My journey into coding began with a request to develop a company
          website, and since then, my passion for coding has only grown. I find
          immense joy in continuously honing my skills through the creation of
          diverse portfolio projects. This ongoing process of skill development
          not only fuels my enthusiasm but also contributes to the refinement of
          my professional capabilities. My adventure has started with HTML and
          CSS. Then I started learning JS, creating various of projects helped
          me to understand solid features of this language. React is my purpose
          right now to master including TypeScript.
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
      <div className="min-h-[500px] grid grid-cols-3 gap-4">
        <img
          className="min-h-[160px]"
          src="../../public/images/icons8-html.svg"
          alt=""
        />
        <img
          className="min-h-[160px]"
          src="../../public/images/icons8-css.svg"
          alt=""
        />
        <img
          className="min-h-[160px]"
          src="../../public/images/icons8-javascript.svg"
          alt=""
        />
        <img
          className="min-h-[160px]"
          src="../../public/images/icons8-react.svg"
          alt=""
        />
        <img
          className="min-h-[160px]"
          src="../../public/images/icons8-sass.svg"
          alt=""
        />
        <img
          className="min-h-[160px]"
          src="../../public/images/icons8-tailwind-css.svg"
          alt=""
        />
      </div>
    </section>
  );
}
