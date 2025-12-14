import {motion} from "motion/react";
import AboutBackground from "@/components/sections/About/AboutBackground.tsx";
import AboutStack from "@/components/sections/About/AboutStack.tsx";
import AboutHeading from "@/components/sections/About/AboutHeading.tsx";
import AboutProfile from "@/components/sections/About/AboutProfile.tsx";
import {fadeWhileLoading} from "@/data/animations.ts";

const AboutContainer = () => {
    return (
        <section id="about" className="relative grid grid-cols-1 pt-30 sm:pt-40">
            <AboutBackground/>
            <AboutHeading/>
            <motion.div initial="hidden" whileInView="show" variants={fadeWhileLoading(-160, 0, 0)} viewport={{ once: true, amount: 0 }} className="grid grid-cols-1 xl:grid-cols-2 gap-10 sm:gap-20 max-w-11/12 sm:max-w-9/12 xl:max-w-10/12 mx-auto">
                <AboutProfile/>
                <AboutStack/>
            </motion.div>
        </section>
    );
};

export default AboutContainer;