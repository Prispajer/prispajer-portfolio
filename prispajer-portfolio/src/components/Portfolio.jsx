import data from "../data/data";
import { v4 as uuidv4 } from "uuid";

export default function Portfolio({ portfolioRef }) {
  return (
    <section
      id="portfolio"
      ref={portfolioRef}
      className="overflow-hidden flex justify-center items-center flex-col min-h-[100vh]"
    >
      <div className="text-center text-[36px] py-[50px] px-[25px] text-white ">
        <p className="font-bold">
          My Recent <span className="text-black">Works</span>
        </p>
        <p className="text-[16px]">
          Below here are a few projects I've worked recently.
        </p>
      </div>
      <div className="grid grid-cols-1 gap-10 sm:max-w-[540px] md:max-w-[720px] lg:max-w-[960px] xxl:max-w-[1320px] xl:max-w-[1140px] md:grid-cols-3">
        {data.map((data) => (
          <div key={uuidv4()} className="border border-red-500 shadow-md p-2 ">
            <div className="w-full">
              <a href={data.link}>
                <img
                  className="h-[300px] md:h-[120px] lg:h-[180px] xxl:h-[250px] xl:h-[220px] w-full rounded-[10px]"
                  src={data.image}
                  alt={data.name}
                />
              </a>
            </div>
            <div className="mt-10 text-white text-justify px-2">
              <h2 className="text-white-200 text-[20px] font-bold text-center">
                {data.name}
              </h2>
              <p className="text-[16px] mt-4 text-white">{data.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
