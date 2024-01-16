import data from "../data/data";
import { v4 as uuidv4 } from "uuid";

export default function Portfolio({ portfolioRef }) {
  return (
    <section id="portfolio" ref={portfolioRef}>
      <div className="flex justify-center items-center mt-10 text-[36px] mb-[40px]  text-white font-bold">
        Projects
      </div>
      <div className="grid grid-cols-1 gap-10">
        {data.map((data) => (
          <div key={uuidv4()} className="my-2">
            <a href={data.link}>
              <img
                className="min-h-[200px] rounded-[10px] cover"
                src={data.image}
                alt={data.name}
              />
            </a>
            <div className="mt-10 text-white text-justify ">
              <h2 className="text-white-200 text-[22px] font-bold">
                {data.name}
              </h2>
              <p className="text-[20px] mt-4 text-white">{data.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
