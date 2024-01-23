import React from "react";
import portfolioData from "../data/portfolioData";
import { fadeWhileLoading } from "../data/variants";
import { motion } from "framer-motion";
import animationProps from "../data/animationProps";

export default function Portfolio({ portfolioRef }) {
  const { animationControls } = animationProps(portfolioRef);

  const [hoveredIndex, setHoveredIndex] = React.useState(null);

  const handlePortfolioItemClick = (link) => {
    window.location.href = link;
  };

  const handleMouseEnter = (index) => {
    setHoveredIndex(index);
  };

  const cancelMouseEnter = () => {
    setHoveredIndex(null);
  };

  return (
    <section
      id="portfolio"
      ref={portfolioRef}
      className="screens overflow-hidden flex justify-center items-center flex-col min-h-[100vh] mt-10 pt-8 mx-auto"
    >
      <motion.div
        variants={fadeWhileLoading("down", 0)}
        initial={"hidden"}
        animate={animationControls}
        className="text-center text-[50px] py-[50px] px-[25px] text-white"
      >
        <p className="text-secondary font-bold">
          MY RECENT <span className="text-[#fcb045]">WORKS</span>
        </p>
        <p className="text-[22px] text-primary">
          Below here are a few projects I've worked recently.
        </p>
      </motion.div>
      <div className="relative grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3">
        {portfolioData.map((data, index) => (
          <motion.div
            key={index}
            variants={fadeWhileLoading("right", 0)}
            className="shadow-lg border border-gray-300 cursor-pointer overflow-hidden relative"
            initial={"hidden"}
            animate={animationControls}
            onClick={() => handlePortfolioItemClick(data.link)}
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={cancelMouseEnter}
          >
            <motion.img
              whileHover={{ opacity: 0.2 }}
              transition={{ duration: 1 }}
              className="h-[500px] md:h-[300px] lg:h-[400px] xxl:h-[700px] xl:h-[700px] w-full"
              src={data.image}
              alt={data.name}
            />
            {hoveredIndex === index && (
              <div className="absolute bottom-[0] p-4 text-justify pointer-events-none">
                <motion.h2
                  initial={{ y: 50, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 1, delay: 0.2 }}
                  className="text-thirdy text-[20px] font-bold text-center"
                >
                  {data.technologies}
                </motion.h2>
                <motion.h2
                  initial={{ y: -50, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 1, delay: 0.2 }}
                  className="text-thirdy text-[20px] font-bold text-center"
                >
                  {data.name}
                </motion.h2>
                <motion.p
                  initial={{ y: -50, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 1, delay: 0.4 }}
                  className="text-[16px] mt-4 text-primary"
                >
                  {data.description}
                </motion.p>
              </div>
            )}
          </motion.div>
        ))}
      </div>
    </section>
  );
}
