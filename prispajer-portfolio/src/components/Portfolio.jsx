import portfolioData from "../data/portfolioData";
import { fade, scale } from "../data/variants";
import { motion } from "framer-motion";

export default function Portfolio({ portfolioRef }) {
  const handlePortfolioItemClick = (link) => {
    window.location.href = link;
  };

  return (
    <section
      id="portfolio"
      ref={portfolioRef}
      className="screens overflow-hidden flex justify-center items-center flex-col min-h-[100vh] mx-auto pt-28"
    >
      <motion.div
        variants={fade("down", 0)}
        initial={"hidden"}
        animate={"show"}
        className="text-center text-[50px] py-[50px] px-[25px] text-white "
      >
        <p className="text-secondary font-bold">
          MY RECENT <span className="text-[#fcb045]">WORKS</span>
        </p>
        <p className="text-[22px] text-primary">
          Below here are a few projects I've worked recently.
        </p>
      </motion.div>
      <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
        {portfolioData.map((data, index) => (
          <motion.div
            key={index}
            variants={fade("right", 0)}
            className="shadow-lg bg-white border border-gray-300 cursor-pointer"
            initial={"hidden"}
            animate={"show"}
            transition={{
              duration: 1,
            }}
            whileHover={{ scale: 1.1, opacity: 0.4 }}
            onClick={() => handlePortfolioItemClick(data.link)}
          >
            <div className="w-full">
              <img
                className="h-[300px] md:h-[120px] lg:h-[180px] xxl:h-[250px] xl:h-[220px] w-full"
                src={data.image}
                alt={data.name}
              />
            </div>
            <div className="p-4 text-justify">
              <h2 className="text-thirdy text-[20px] font-bold text-center">
                {data.name}
              </h2>
              <p className="text-[16px] mt-4 text-primary">
                {data.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
