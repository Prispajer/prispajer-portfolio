import {motion} from "motion/react";
import AboutOverlay from "@/components/sections/About/AboutOverlay.tsx";
import AboutTechnologyCard from "@/components/sections/About/AboutTechnologyCard.tsx";
import {technologyItems} from "@/data/data.ts";
import {fadeWhileLoading} from "@/data/animations.ts";

const AboutStack = () => {
    return (
        <motion.div initial="hidden"
                    whileInView="show"
                    variants={fadeWhileLoading(0, 300)}
                    viewport={{ once: true, amount: 0 }}
                    className="pt-0 xl:pt-20">
            <h3 className="relative pb-10 text-center text-3xl md:text-4xl font-black tracking-wider">
            <span className="bg-heading-2 bg-clip-text font-headers text-transparent
                             drop-shadow-[0_0_30px_rgba(220,38,38,0.5)] cursor-default ">
              ARSENAL OF TECHNOLOGIES
            </span>
                <div className="w-32 h-1 mt-6 bg-gradient-to-r from-primary to-accent mx-auto shadow-glow"></div>
            </h3>

            <div className="backdrop-blur-sm bg-gradient-to-br from-card/90 to-muted/60
                          p-8 shadow-[0_0_50px_rgba(220,38,38,0.3)] border-2 border-primary/30
                          sm:mb-16 group hover:shadow-glow-accent transition-all duration-500">

                <AboutOverlay />

                <div className="flex flex-wrap items-center justify-center gap-6 cursor-default">
                    {technologyItems.map((technology, index) => (
                        <AboutTechnologyCard key={technology.name} technology={technology} index={index} />
                    ))}
                </div>
            </div>

            <div className="relative z-10 w-full h-1 mt-6 bg-gradient-to-r
                          from-transparent via-primary to-transparent mx-auto animate-pulse"></div>
        </motion.div>
    )
}

export default AboutStack;