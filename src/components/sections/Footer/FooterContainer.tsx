import {motion} from "motion/react";
import {fadeWhileLoading} from "@/data/animations.ts";

const FooterContainer = () => {
    return (
        <footer className="relative w-full h-full">
            <motion.div initial="hidden" whileInView="show" variants={fadeWhileLoading(-160, 0, 0)} viewport={{ once: true, amount: 0 }} className="w-full h-1 bg-gradient-to-r from-crimson/40 via-crimson/40 to-crimson/40"></motion.div>
            <p className="text-xs sm:text-base my-8 mx-2 text-center text-foreground/80 cursor-default">
                © Copyright 2025. Developed by Adrian Kozieł. All rights reserved.
            </p>
        </footer>
    )
}

export default FooterContainer;