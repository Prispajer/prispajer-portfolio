import { Link } from "react-scroll";

export default function Home({ homeRef }) {
  return (
    <section
      ref={homeRef}
      id="home"
      className="flex flex-col items-center justify-center text-white text-center gap-10 pt-28 pb-24 xs:pt-36"
    >
      <div className="flex flex-col items-center justify-center gap-10">
        <div className="text-7xl xs:text-8xl sm:text-9xl font-bold">
          <p>WELCOME</p>
          <p>TO MY</p>
          <p>CODING</p>
          <p>WORLD.</p>
        </div>
        <>
          <p className="text-4xl">Frontend Developer</p>
        </>
        <div className="xs:w-[400px] sm:w-[500px] text-justify">
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
