import { Link } from "react-scroll";

export default function About({ aboutRef }) {
  return (
    <section
      ref={aboutRef}
      id="about"
      className="flex flex-col lg:flex-row items-center justify-center min-h-[100vh] gap-x-32 relative"
    >
      <div className=" left-[40%] top-[36%]  rotation-text">
        <p className="text-gray text-4xl"> ABOUT ME </p>
      </div>
      <div className="min-w-[300px] xl:min-w-[600px]">
        <img
          className=" logo h-[300px] xl:h-[500px] rounded-full"
          src="../../public/images/Prispajer.png"
          alt="It's meee"
        />
      </div>
      <div className="flex flex-col max-w-[600px] xl:min-w-[600px] gap-y-12 relative">
        <div className="flex flex-col">
          <h2 className="text-white text-8xl font-bold">Adrian</h2>
          <h2 className="text-white text-8xl font-bold">Kozieł</h2>
        </div>
        <div className="text-white text-xl text-justify ">
          Hi, I'm Adrian, and my programming journey commenced when I undertook
          the development of a website for our family business. The process
          ignited a passion for the creative aspects of web design and
          functionality, marking the beginning of my coding adventure. Now, I'm
          continually honing my frontend skills, striving to evolve into a
          seasoned developer. Join me on this exploration of turning ideas into
          innovative web experiences!
        </div>
        <div className="">
          <Link
            className="link cursor-pointer text-white"
            to="contact"
            spy={true}
            smooth={true}
            offset={-70}
            duration={2000}
          >
            <button className="text-white mr-10">Contact me</button>
          </Link>
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
    </section>
  );
}
