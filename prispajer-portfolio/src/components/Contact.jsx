import { useState } from "react";
import useClipboard from "react-use-clipboard";
import { fade, scale } from "../data/variants";
import { motion } from "framer-motion";

export default function Contact({ contactRef }) {
  const [email, setEmail] = useState("koziel.adrian98@gmail.com");
  const [isCopied, setCopied] = useClipboard(email, { successDuration: 2000 });

  const handleCopyEmail = () => {
    setCopied();
  };

  return (
    <section
      ref={contactRef}
      className="screens flex flex-col items-center justify-center mt-10 mx-auto min-h-[90vh]"
    >
      <motion.div
        variants={fade("down", 0)}
        initial="hidden"
        animate="show"
        className="mb-10"
      >
        <h2 className="text-[50px] text-secondary font-bold">Contact me</h2>
      </motion.div>
      <motion.div
        variants={scale(0, 1)}
        initial="initial"
        animate="final"
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
        <a href="https://discord.com/users/Prispajer">
          <button className="buttons ">LinkedIn</button>
        </a>
      </motion.div>
    </section>
  );
}
