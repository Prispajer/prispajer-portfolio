import {motion} from "motion/react";
import ContactBackground from "@/components/sections/Contact/ContactBackground.tsx";
import ContactEmail from "@/components/sections/Contact/ContactEmail.tsx";
import ContactOverlay from "@/components/sections/Contact/ContactOverlay.tsx";
import ContactHeading from "@/components/sections/Contact/ContactHeading.tsx";
import ContactSocials from "@/components/sections/Contact/ContactSocials.tsx";
import {fadeWhileLoading} from "@/data/animations.ts";


const ContactSection = () => {
    return (
        <section id="contact" className="relative flex items-center justify-center pt-30 pb-105 overflow-hidden">
            <ContactBackground/>
            <motion.div initial="hidden" whileInView="show" variants={fadeWhileLoading(-160, 0, 0)} viewport={{ once: true, amount: 0 }} className="container mx-auto max-w-11/12 sm:max-w-4xl sm:px-18 relative">
                <ContactHeading/>
                <div className="relative backdrop-blur-sm bg-card/80 p-8 md:p-12 rounded-lg border-2 border-primary/30 hover:border-primary/50 transition-all duration-500 shadow-[0_0_50px_rgba(220,38,38,0.2)] hover:shadow-[0_0_70px_rgba(220,38,38,0.4)] group">
                    <ContactOverlay/>
                    <div className="relative space-y-10">
                        <ContactEmail/>
                        <div className="w-full h-px bg-gradient-to-r from-transparent via-primary to-transparent" />
                        <div className="space-y-6">
                            <ContactSocials/>
                        </div>
                    </div>
                </div>
            </motion.div>
        </section>
    );
};

export default ContactSection;
