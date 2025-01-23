import technologyData from "../data/technologyData";
import { motion } from "framer-motion";
import { fadeWhileLoading, scaleOnHover } from "../data/variants";

export default function About({
  setActiveElement,
  aboutRef,
  portfolioRef,
  contactRef,
  toggleScrollToSection,
}) {
  return (
    <section
      ref={aboutRef}
      className="screens flex flex-col lg:flex-row items-center justify-center min-h-[100vh] py-[105px] px-[15px] ti:px-[30px] md:px-[40px] lg:px-[45px] xxxl:px-[0px] mx-auto"
    >
      <div className="flex flex-col gap-y-12">
        <motion.div
          variants={fadeWhileLoading(160, 0, 0)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: true }}
          className="flex items-center sm:items-left flex-col"
        >
          <h2 className="text-secondary text-[30px] sm:text-[35px] md:text-[45px] font-bold font-headers text-center">
            LET ME INTRODUCE <span className="text-thirdy">MYSELF!</span>
          </h2>
        </motion.div>
        <motion.div
          variants={fadeWhileLoading(160, 0, 0)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: true }}
          transition={{
            duration: 1,
          }}
          className="text-primary text-[22px] text-justify font-description"
        >
          My name is Adrian, and my coding journey began when I crafted a
          portfolio website for a company. As I explored the nuances of HTML,
          CSS, and JS, a hunger for knowledge took root. Gradually, I embraced
          React and Tailwind, expanding my toolkit to include TypeScript,
          Next.js, and Express. Beyond the screen, I find joy in the melody of
          music, the excitement of gaming on my computer, and the enchanting
          worlds found within the pages of a good book. With every line of code
          and every webpage, my goal is to tell a story that resonates,
          captivates, and pushes the boundaries of innovation.
        </motion.div>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 xxl:grid-cols-8 gap-4 mt-10">
          {technologyData.map((technology, index) => (
            <motion.div
              key={index}
              variants={scaleOnHover(0, 1)}
              initial="initial"
              whileInView="final"
              viewport={{ once: true }}
              transition={{
                duration: 2,
              }}
              whileHover={{ scale: 1.1, opacity: 0.8 }}
            >
              <div className="flex justify-center items-center">
                <img
                  className="icon-border"
                  style={{
                    borderColor: technology.borderColor,
                  }}
                  src={technology.image}
                  alt={technology.alt}
                />
              </div>
            </motion.div>
          ))}
        </div>
        <motion.div
          variants={fadeWhileLoading(160, 0, 0)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: true }}
          className="flex items-center mt-10 gap-x-10 cursor-pointer justify-between lg:justify-around font-buttons"
        >
          <button
            onClick={() => {
              toggleScrollToSection(portfolioRef);
              setActiveElement("PORTFOLIO");
            }}
            className="secondary-buttons"
          >
            My Portfolio
          </button>
          <button
            onClick={() => {
              toggleScrollToSection(contactRef);
              setActiveElement("CONTACT");
            }}
            className="text-primary buttons "
          >
            Contact me
          </button>
        </motion.div>
      </div>
    </section>
  );
}
