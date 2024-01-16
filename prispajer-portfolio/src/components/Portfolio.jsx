import data from "../data/data";
import { v4 as uuidv4 } from "uuid";

export default function Portfolio({ portfolioRef }) {
  return (
    <section id="portfolio" ref={portfolioRef}>
      <div className="flex justify-center items-center text-[50px] mb-[40px] text-white">
        Projects
      </div>
      <div className="grid grid-cols-1">
        {data.map((project) => (
          <div key={uuidv4()} className="">
            <h2>{project.name}</h2>
            <a href={project.link}>
              <img src={project.image} alt={project.name} />
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
