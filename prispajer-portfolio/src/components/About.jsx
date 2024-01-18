import technologyData from "../data/technologyData";

export default function About({ aboutRef }) {
  return (
    <section
      ref={aboutRef}
      id="about"
      className="flex flex-col lg:flex-row items-center justify-center min-h-[100vh] sm:max-w-[540px] md:max-w-[720px] lg:max-w-[960px] xxl:max-w-[1320px] xl:max-w-[1140px] mx-auto"
    >
      <div className="flex flex-col  gap-y-12">
        <div className="flex items-center sm:items-left flex-col">
          <h2 className="text-secondary text-[50px] font-bold">
            LET ME INTRODUCE <span className="text-thirdy">MYSELF!</span>
          </h2>
        </div>
        <div className="text-primary text-[22px] text-justify ">
          My name is Adrian, and my coding journey began when I crafted a
          portfolio website for a company. As I explored the nuances of HTML,
          CSS, and JS, a hunger for knowledge took root. Gradually, I embraced
          React and Tailwind, expanding my toolkit to include TypeScript,
          Next.js, and Express. Beyond the screen, I find joy in the melody of
          music, the excitement of gaming on my computer, and the enchanting
          worlds found within the pages of a good book. With every line of code
          and every webpage, my goal is to tell a story that resonates,
          captivates, and pushes the boundaries of innovation.
        </div>
        <div className="grid grid-cols-4 gap-4 mt-10">
          {technologyData.map((technology, index) => (
            <div className="flex justify-center">
              <img
                key={index}
                className={technology.styles}
                src={technology.image}
                alt={technology.alt}
              />
            </div>
          ))}
        </div>
        <div className="flex justify-around mt-10">
          <button className="text-primary bg-transparent">My Portfolio</button>
          <button className="text-primary">Contact Me</button>
        </div>
      </div>
    </section>
  );
}
