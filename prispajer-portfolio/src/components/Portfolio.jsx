import React from "react";
import portfolioData from "../data/portfolioData";
import { fadeWhileLoading } from "../data/variants";
import { motion } from "framer-motion";
import useAnimationControls from "../data/useAnimationControls ";

export default function Portfolio({ portfolioRef }) {
  const { animationControls } = useAnimationControls(portfolioRef);

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
      className="screens overflow-hidden flex justify-center items-center px-[30px] md:px-[40px] flex-col min-h-[100vh] mt-10 pt-8 mx-auto"
    >
      <motion.div
        variants={fadeWhileLoading(0, 80, 0)}
        initial={"hidden"}
        animate={animationControls}
        className="text-center text-[50px] py-[50px] px-[25px] text-white"
      >
        <p className="text-secondary text-[30px] sm:text-[50px] font-bold font-headers">
          MY RECENT <span className="text-[#fcb045]">WORKS</span>
        </p>
        <p className="text-[22px] text-primary font-description">
          Below here are a few projects I&apos;ve worked recently.
        </p>
      </motion.div>
      <div className="relative grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3">
        {portfolioData.map((data, index) => (
          <motion.div
            key={index}
            variants={fadeWhileLoading(0, 80, 0)}
            className="shadow-md shadow-secondary border border-gray-300 cursor-pointer overflow-hidden relative"
            initial={"hidden"}
            animate={animationControls}
            onClick={() => handlePortfolioItemClick(data.link)}
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={cancelMouseEnter}
          >
            <motion.img
              whileHover={{ opacity: 0.2 }}
              transition={{ duration: 1 }}
              className="h-[400px] md:h-[300px] lg:h-[400px] xxl:h-[500px] xl:h-[500px] w-full"
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
