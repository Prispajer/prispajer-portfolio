import { Link } from "react-scroll";

export default function Home() {
  return (
    <section
      id="home"
      className="flex flex-col items-center justify-center text-white text-center gap-10 min-h-[100vh]"
    >
      <div className="flex flex-col items-center justify-center text-left gap-10">
        <div className="text-7xl xs:text-8xl sm:text-9xl font-bold">
          <div className="text-center">WELCOME</div>
          <div className="text-center">TO MY</div>
          <div className="text-center">CODING</div>
          <div className="text-center">WORLD.</div>
        </div>
        <div className="">
          <p className="text-4xl">Frontend Developer</p>
        </div>
        <div className="w-[300px] xs:w-[400px] sm:w-[500px] text-justify">
          <p className="text-sm">
            Welcome to my portfolio! I'm a self-taught enthusiast in the realm
            of web development. My journey into the world of programming started
            out of pure passion, and today, I strive to expand my skill set and
            deliver innovative solutions. Join me in exploring my realm of
            creativity and dedication reflected in each website I craft.
          </p>
        </div>
      </div>
      <div>
        <Link to="about" spy={true} smooth={true} offset={-70} duration={2000}>
          <button>View more</button>
        </Link>
      </div>
    </section>
  );
}
