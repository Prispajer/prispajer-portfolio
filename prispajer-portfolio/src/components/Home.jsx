import React from "react";
import { motion } from "framer-motion";
import { fadeWhileLoading } from "../data/variants";
import animationProps from "../data/animationProps";

export default function Home({
  homeRef,
  aboutRef,
  portfolioRef,
  toggleScrollToSection,
}) {
  const { animationControls } = animationProps(homeRef);

  return (
    <section
      ref={homeRef}
      id="home"
      className="screens flex flex-col items-center justify-between  pt-28 pb-24  lg:flex-row mx-auto min-h-[100vh]"
    >
      <motion.div
        variants={fadeWhileLoading("right", 0)}
        initial="hidden"
        animate={animationControls}
        className="flex items-left flex-col gap-10 "
      >
        <div className="flex flex-col items-center sm:items-start text-[50px] xs:text-[50px] sm:text-[50px] font-bold text-secondary">
          <p className="text-[50px]">Hi!</p>
          <p className="text-[30px] sm:text-[50px]">I'M ADRIAN KOZIEŁ</p>
          <p className="text-[30px] text-thirdy">Front-End Developer</p>
        </div>
        <div className="xs:w-[400px] sm:w-[500px] text-justify">
          <p className="text-[22px] text-primary">
            Hello from the digital side! Thank you for stopping by my portfolio.
            I'm elated to share my projects with you. Whether you're here for
            inspiration or exploration, I hope you find something that
            resonates. Let's embark on this digital adventure together!
          </p>
          <div className="flex items-center mt-10 gap-x-10 cursor-pointer justify-between lg:justify-start">
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
