import { motion } from "framer-motion";
import { fadeWhileLoading } from "../data/variants";
import useAnimationControls from "../data/useAnimationControls ";

export default function Home({
  homeRef,
  aboutRef,
  portfolioRef,
  toggleScrollToSection,
}) {
  const { animationControls } = useAnimationControls(homeRef);

  return (
    <section
      ref={homeRef}
      id="home"
      className="screens flex flex-col items-center justify-between pt-28 pb-28 lg:flex-row mx-auto min-h-[100vh]"
    >
      <motion.div
        variants={fadeWhileLoading("right", 0)}
        initial="hidden"
        animate={animationControls}
        className="flex flex-col gap-10 xs:w-[400px] sm:w-[500px]"
      >
        <div className="flex flex-col items-center sm:items-start font-bold font-headers text-secondary ">
          <p className="text-[30px] sm:text-[40px] md:text-[50px]">Hi!</p>
          <p className="text-[30px] sm:text-[40px] md:text-[50px]">
            I'M ADRIAN KOZIEŁ
          </p>
          <p className="text-[30px] text-thirdy">Front-End Developer</p>
        </div>
        <div className=" text-justify">
          <p className="text-[22px] font-description text-primary">
            Hello from the digital side! Thank you for stopping by my portfolio.
            I'm elated to share my projects with you. Whether you're here for
            inspiration or exploration, I hope you find something that
            resonates. Let's embark on this digital adventure together!
          </p>
          <div className="flex items-center mt-10 gap-x-10 cursor-pointer justify-between lg:justify-start font-buttons">
            <button
              className="buttons"
              onClick={() => toggleScrollToSection(aboutRef)}
            >
              View more
            </button>
            <p
              className="secondary-buttons"
              onClick={() => toggleScrollToSection(portfolioRef)}
            >
              My Portfolio
            </p>
          </div>
        </div>
      </motion.div>
      <motion.div
        variants={fadeWhileLoading("left", 0)}
        initial="hidden"
        animate={animationControls}
        className="min-w-[300px] mt-20 xl:min-w-[500px] flex items-center justify-center"
      >
        <img
          className="logo  sm:flex h-[300px] sm:h-[350px] xl:h-[400px] xxl:h-[500px] border-8 rounded-full border-[#d85e2a]"
          src="../../public/images/Prispajer.png"
          alt="It's meee"
        />
      </motion.div>
    </section>
  );
}
