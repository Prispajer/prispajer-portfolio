import { Link } from "react-scroll";

export default function Home({ homeRef }) {
  return (
    <section
      ref={homeRef}
      id="home"
      className="flex  items-center justify-between text-[#efe0ca]   pt-28 pb-24 sm:max-w-[540px] md:max-w-[720px] lg:max-w-[960px] xxl:max-w-[1320px] xl:max-w-[1140px] mx-auto"
    >
      <div className="flex items-center flex-col gap-10 ">
        <div className="text-[50px] xs:text-[50px] sm:text-[50px] font-bold text-[#fe5000]">
          <p className="text-[50px]">Hi! I'm Adrian</p>
          <p className="text-[30px]">I am front-end developer</p>
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
            <button>View more</button>
          </div>
        </div>
      </div>
      <div>
        <p>XAD</p>
        <p>XAD</p>
        <p>XAD</p>
        <p>XAD</p>
      </div>
    </section>
  );
}
