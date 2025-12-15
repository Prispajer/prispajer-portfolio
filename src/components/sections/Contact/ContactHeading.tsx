import {motion} from "motion/react";
import {fadeWhileLoading} from "@/data/animations.ts";

const ContactHeading = () => {
    return (
        <motion.div variants={fadeWhileLoading(-160, 0, 0)} className="pb-10 sm:pb-0 text-center space-y-6">
            <h2 className="relative text-center text-5xl md:text-6xl font-headers tracking-wider overflow-hidden">
            <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent font-headers drop-shadow-[0_0_30px_rgba(220,38,38,0.6)]">
              CONTACT
            </span>
            </h2>
            <div className="w-32 h-1 mt-6 bg-gradient-to-r from-primary to-accent mx-auto shadow-[0_0_20px_rgba(220,38,38,0.6)]" />
            <p className="max-w-2xl mx-auto text-xl text-foreground/80 cursor-default">
                Ready to start your next mission? Let's connect.
            </p>
        </motion.div>
    )
}

export default ContactHeading;