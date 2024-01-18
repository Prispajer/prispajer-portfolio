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
          <h2 className="text-white text-[36px] font-bold">Adrian</h2>
          <h2 className="text-white text-[36px] font-bold">Kozieł</h2>
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
        <div className="flex justify-between items-center"></div>
        <div className="sm:min-w-[500px] grid grid-cols-7 gap-4 mt-10 md:mt-0">
          {technologyData.map((technology, index) => (
            <img
              key={index}
              className={technology.styles}
              src={technology.image}
              alt={technology.alt}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
