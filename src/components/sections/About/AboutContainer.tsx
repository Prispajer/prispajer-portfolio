import {motion} from "motion/react";
import AboutBackground from "@/components/sections/About/AboutBackground.tsx";
import AboutStack from "@/components/sections/About/AboutStack.tsx";
import AboutHeading from "@/components/sections/About/AboutHeading.tsx";
import AboutProfile from "@/components/sections/About/AboutProfile.tsx";
import {fadeWhileLoading} from "@/data/animations.ts";

const AboutContainer = () => {
    return (
        <section id="about" className="relative grid grid-cols-1 pt-15 sm:pt-30 pb-15 sm:pb-30 overflow-hidden">
            <AboutBackground/>
                <AboutHeading/>
            <motion.div initial="hidden"
                        whileInView="show"
                        variants={fadeWhileLoading(-160, 0, 0)}
                        viewport={{ once: true, amount: 0 }}
                        className="container grid grid-cols-1 xl:grid-cols-2 max-w-11/12 sm:max-w-9/12 xl:max-w-10/12 mx-auto gap-10 sm:gap-20">
                <AboutProfile/>
                <AboutStack/>
            </motion.div>
        </section>
    );
};

export default AboutContainer;