import { motion } from "motion/react";
import HeroButtons from "@/components/sections/Hero/HeroButtons";
import HeroHeading from "@/components/sections/Hero/HeroHeading";
import HeroBackground from "@/components/sections/Hero/HeroBackground";
import HeroSocials from "@/components/sections/Hero/HeroSocials";
import { parentFade, fadeWhileLoading } from "@/data/animations";

const HeroContainer = () => {
    return (
        <section
            id="hero"
            className="relative min-h-screen flex items-center justify-center overflow-hidden"
        >
            <HeroBackground />
            <motion.div
                initial="hidden"
                whileInView="show"
                variants={parentFade}
                viewport={{ once: true, amount: 0 }}
                className="container mx-auto py-20 relative"
            >
                <div className="max-w-5xl mx-auto pt-24">
                    <div className="grid place-items-center">
                        <div className="max-w-2xl space-y-8">
                            <motion.div variants={fadeWhileLoading(-160, 0)}>
                                <HeroHeading />
                            </motion.div>
                            <motion.div variants={fadeWhileLoading(-760, 0)}>
                                <HeroButtons />
                            </motion.div>
                            <motion.div variants={fadeWhileLoading(-160, 0)}>
                                <HeroSocials />
                            </motion.div>
                        </div>
                    </div>
                </div>
            </motion.div>
        </section>
    );
};

export default HeroContainer;