import { useState } from "react";
import useClipboard from "react-use-clipboard";
import { fadeWhileLoading, scaleOnHover } from "../data/variants";
import { motion } from "framer-motion";
import animationProps from "../data/animationProps";

export default function Contact({ contactRef }) {
  const [email, setEmail] = useState("koziel.adrian98@gmail.com");
  const [isCopied, setCopied] = useClipboard(email, { successDuration: 2000 });

  const { animationControls } = animationProps(contactRef);

  const handleCopyEmail = () => {
    setCopied();
  };

  return (
    <section
      ref={contactRef}
      className="screens flex flex-col items-center justify-center mt-10 mx-auto min-h-[100vh]"
    >
      <motion.div
        variants={fadeWhileLoading("down", 0)}
        initial="hidden"
        animate={animationControls}
        className="mb-10"
      >
        <h2 className="text-[30px] sm:text-[50px] text-secondary font-bold">
          Contact me
        </h2>
      </motion.div>
      <motion.div
        variants={scaleOnHover(0, 1)}
        initial="initial"
        animate={animationControls}
        transition={{
          duration: 1,
        }}
        className="flex flex-col justify-center sm:flex-row items-center gap-x-4 gap-y-6 sm:gap-y-0 mt-4"
      >
        <button onClick={handleCopyEmail} className="buttons ">
          {isCopied ? "Copied!" : "E-mail"}
        </button>
        <a href="https://discord.com/users/Prispajer">
          <button className="buttons ">Discord</button>
        </a>
        <a href="https://linkedin.com/in/adrian-kozieł-9413142b0">
          <button className="buttons ">LinkedIn</button>
        </a>
      </motion.div>
    </section>
  );
}
