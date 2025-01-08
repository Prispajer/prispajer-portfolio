import React from "react";
import { FiGithub } from "react-icons/fi";
import { fadeWhileLoading } from "../data/variants";
import { motion } from "framer-motion";
import portfolioData from "../data/portfolioData";
import useAnimationControls from "../data/useAnimationControls ";

export default function Portfolio({ portfolioRef }) {
  const [hoveredIndex, setHoveredIndex] = React.useState(null);

  const { animationControls } = useAnimationControls(portfolioRef);

  const handlePortfolioRepositoryClick = (link) => {
    window.location.href = link;
  };

  return (
    <section
      ref={portfolioRef}
      className="screens overflow-hidden flex flex-col justify-center items-center min-h-[100vh] py-[105px] px-[15px] ti:px-[30px] md:px-[40px] lg:px-[45px] xxxl:px-[0px] mx-auto "
    >
      <motion.div
        variants={fadeWhileLoading(0, 80, 0)}
        initial={"hidden"}
        animate={animationControls}
        className="text-center pb-[50px] text-white"
      >
        <div className="flex flex-col gap-y-4">
          <p className="text-secondary text-[30px] sm:text-[35px] md:text-[45px] font-bold font-headers ">
            MY RECENT <span className="text-[#fcb045]">WORKS</span>
          </p>
          <p className="text-[22px] text-primary font-description text-center">
            Below here are a few projects I&apos;ve worked recently.
          </p>
        </div>
      </motion.div>
      <div className="relative grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3">
        {portfolioData.map((data, index) => (
          <motion.div
            key={index}
            variants={fadeWhileLoading(0, 80, 0)}
            className="shadow-[0_0_16px_2px_rgba(0,0,0,0.3)] shadow-secondary border-[1px] border-secondary  cursor-pointer overflow-hidden relative"
            initial="hidden"
            animate={animationControls}
            onClick={() => handlePortfolioRepositoryClick(data.link)}
          >
            <motion.img
              whileHover={{ opacity: 0.2 }}
              transition={{ duration: 1 }}
              className="h-[600px] w-full"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              src={data.image}
              alt={data.name}
            />
            <a
              href={data.github}
              target="_blank"
              rel="noreferrer"
              onClick={(event) => event.stopPropagation()}
              className="absolute top-[10px] right-[10px] bg-primary hover:bg-[#f0e6d8] transition duration-300 p-2 rounded-full shadow-lg cursor-pointer"
            >
              <motion.i
                transition={{ duration: 1 }}
                className="fab fa-github text-black"
              >
                <FiGithub className="text-black" size="30px" />
              </motion.i>
            </a>
            {hoveredIndex === index && (
              <div className="absolute bottom-[0] p-4 text-justify pointer-events-none">
                <div className="flex flex-col justify-between">
                  <motion.div
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 1, delay: 0.2 }}
                    className="text-thirdy text-[22px] font-bold text-center"
                  >
                    <div className="flex flex-wrap w-full items-center justify-center pb-[10px]">
                      {data.technologies.map((technology, index) => (
                        <span
                          key={index}
                          className="m-[4px] p-[6px] bg-secondary text-white text-[12px] font-semibold rounded-md"
                        >
                          {technology}
                        </span>
                      ))}
                    </div>
                  </motion.div>
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
              </div>
            )}
          </motion.div>
        ))}
      </div>
    </section>
  );
}
