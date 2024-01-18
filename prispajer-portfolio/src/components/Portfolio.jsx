import portfolioData from "../data/portfolioData";
import { motion } from "framer-motion";

export default function Portfolio({ portfolioRef }) {
  return (
    <section
      id="portfolio"
      ref={portfolioRef}
      className="overflow-hidden flex justify-center items-center flex-col min-h-[100vh]"
    >
      <div className="text-center text-[50px] py-[50px] px-[25px] text-white ">
        <p className="text-secondary font-bold">
          MY RECENT <span className="text-[#fcb045]">WORKS</span>
        </p>
        <p className="text-[22px] text-primary">
          Below here are a few projects I've worked recently.
        </p>
      </div>
      <motion.div
        // initial={{ x: -1000 }}
        // animate={{ x: [0, 900, 0] }}
        // transition={{
        //   duration: "1",
        // }}
        // whileInView={"show"}
        // whileHover={{ scale: 1.1, opacity: 0.2 }}
        className="grid grid-cols-1 gap-10 sm:max-w-[540px] md:max-w-[720px] lg:max-w-[960px] xxl:max-w-[1320px] xl:max-w-[1140px] md:grid-cols-3"
      >
        {portfolioData.map((data, index) => (
          <div
            key={index}
            className="border border-red-500 shadow-md portfolio-container relative curso"
          >
            <div className="w-full">
              <a href={data.link}>
                <img
                  className="h-[300px] md:h-[120px] lg:h-[180px] xxl:h-[250px] xl:h-[220px] w-full "
                  src={data.image}
                  alt={data.name}
                />
              </a>
            </div>
            <div className="mt-4 mb-2 text-white text-justify px-2">
              <h2 className="text-thirdy text-[20px] font-bold text-center">
                {data.name}
              </h2>
              <p className="text-[16px] mt-4 text-primary">
                {data.description}
              </p>
            </div>
          </div>
        ))}
      </motion.div>
    </section>
  );
}
