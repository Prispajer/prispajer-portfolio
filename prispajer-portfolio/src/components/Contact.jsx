import useClipboard from "react-use-clipboard";
import { fadeWhileLoading, scaleOnHover } from "../data/variants";
import { motion } from "framer-motion";
import useAnimationControls from "../data/useAnimationControls ";

export default function Contact({ contactRef }) {
  const [isCopied, setCopied] = useClipboard("koziel.adrian98@gmail.com", {
    successDuration: 2000,
  });
  const { animationControls } = useAnimationControls(contactRef);

  return (
    <section
      ref={contactRef}
      className="screens flex flex-col items-center justify-center min-h-[100vh]  px-[15px] ti:px-[30px] md:px-[40px] py-[105px] md:pt-[0px] mx-auto"
    >
      <motion.div
        variants={fadeWhileLoading(-160, 0, 0)}
        initial="hidden"
        animate={animationControls}
        className="mb-10"
      >
        <h2 className="text-[30px] sm:text-[35px] md:text-[45px] text-secondary font-bold font-headers">
          Contact me
        </h2>
      </motion.div>
      <motion.div
        variants={scaleOnHover(0, 1)}
        initial="initial"
        animate={animationControls}
        transition={{
          duration: 2,
        }}
        className="flex flex-col justify-center sm:flex-row items-center gap-x-4 gap-y-6 sm:gap-y-0 mt-4"
      >
        <button onClick={setCopied} className="buttons ">
          {isCopied ? "Copied!" : "E-mail"}
        </button>
        <a href="https://discord.com/users/Prispajer">
          <button className="buttons ">Discord</button>
        </a>
        <a href="https://linkedin.com/in/adrian-kozieł-9413142b0">
          <button className="buttons font-buttons ">LinkedIn</button>
        </a>
      </motion.div>
    </section>
  );
}
