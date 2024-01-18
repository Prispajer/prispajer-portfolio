import { Link } from "react-scroll";

export default function Home({ homeRef, aboutRef, toggleScrollToSection }) {
  return (
    <section
      ref={homeRef}
      id="home"
      className="flex flex-col items-center justify-between text-primary pt-28 pb-24 sm:max-w-[540px] lg:flex-row  md:max-w-[720px] lg:max-w-[960px] xxl:max-w-[1320px] xl:max-w-[1140px] mx-auto h-[100vh]"
    >
      <div className="flex items-left flex-col gap-10 ">
        <div className="text-[50px] xs:text-[50px] sm:text-[50px] font-bold text-secondary">
          <p className="text-[50px]">Hi!</p>
          <p className="text-[50px]">I'M ADRIAN KOZIEŁ</p>
          <p className="text-[30px]">Front-End Developer</p>
        </div>
        <div className="xs:w-[400px] sm:w-[500px] text-justify">
          <p className="text-[22px]">
            Welcome to my portfolio! I'm a self-taught enthusiast in the realm
            of web development. My journey into the world of programming started
            out of pure passion, and today, I strive to expand my skill set and
            deliver innovative solutions. Join me in exploring my realm of
            creativity and dedication reflected in each website I craft.
          </p>
          <div>
            <button
              onClick={() => toggleScrollToSection(aboutRef)}
              className="mt-10"
            >
              View more
            </button>
          </div>
        </div>
      </div>
      <div className="min-w-[300px] mt-20 xl:min-w-[500px] flex items-center justify-center">
        <img
          className="hidden sm:flex logo h-[350px] xl:h-[400px] xxl:h-[500px] rounded-full mb-6"
          src="../../public/images/Prispajer.png"
          alt="It's meee"
        />
      </div>
    </section>
  );
}
