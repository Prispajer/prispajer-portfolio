import React from "react";
import ReactPlayer from "react-player";
import portfolioData from "../data/portfolioData";
import { fadeWhileLoading } from "../data/variants";
import { motion } from "framer-motion";
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
      className="screens overflow-hidden flex flex-col justify-center items-center min-h-[100vh] px-[15px] ti:px-[30px] md:px-[40px] py-[105px] mx-auto "
    >
      <motion.div
        variants={fadeWhileLoading(0, 80, 0)}
        initial={"hidden"}
        animate={animationControls}
        className="text-center pb-[50px]  text-white"
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
        <div className="video-player">
          <ReactPlayer
            url="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
            playing={false}
            controls={true}
            width="100%"
            height="100%"
          />
        </div>
        {portfolioData.map((data, index) => (
          <motion.div
            key={index}
            variants={fadeWhileLoading(0, 80, 0)}
            className="shadow-md shadow-secondary border border-gray-300 cursor-pointer overflow-hidden relative"
            initial={"hidden"}
            animate={animationControls}
            onClick={() => handlePortfolioRepositoryClick(data.link)}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <motion.img
              whileHover={{ opacity: 0.2 }}
              transition={{ duration: 1 }}
              className="h-[400px] md:h-[300px] lg:h-[400px] xxl:h-[350px] xl:h-[500px] w-full"
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
