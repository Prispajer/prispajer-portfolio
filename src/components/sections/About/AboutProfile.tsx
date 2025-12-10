import AboutOverlay from "@/components/sections/About/AboutOverlay.tsx";

const AboutProfile = () => {
    return (
        <div className="mx-auto pt-20">
            <div
                className="flex flex-col items-center justify-center relative
                   backdrop-blur-sm bg-gradient-to-br from-card/90 to-muted/60
                   p-8 md:p-12 shadow-[0_0_50px_rgba(220,38,38,0.3)]
                   border-2 border-primary/30 mb-16 group
                   hover:shadow-glow-accent transition-all duration-500"
            >
                <AboutOverlay/>

                <img className="h-50 sm:h-100" src="/public/images/Prispajer.png" alt="Prispajer" />

                <div className="relative z-10 space-y-8 mt-10 font-gothic text-justify cursor-default">
                    <p className="text-lg md:text-xl text-foreground/90 leading-relaxed">
                        I walk the path as a{" "}
                        <span className="text-primary font-display font-black tracking-wider">
              freelance developer
            </span>, forging solutions across both{" "}
                        <span className="text-accent font-bold">frontend and backend</span>.
                        My journey is driven not only by technology, but by the art of{" "}
                        <span className="text-primary font-bold">creative thinking</span>{" "}
                        and the pursuit of clarity in every line of code.
                    </p>

                    <p className="text-lg md:text-xl text-foreground/90 leading-relaxed">
                        I believe in{" "}
                        <span className="text-accent font-display font-black">
              clean, maintainable architecture
            </span>, where elegance meets discipline. Guided by the principle of{" "}
                        <span className="text-primary font-bold">
              DRY — Don’t Repeat Yourself
            </span>, I craft systems that are modular, reusable, and built to last.
                    </p>

                    <p className="text-lg md:text-xl text-foreground/90 leading-relaxed">
                        Each project is more than just a task — it is a{" "}
                        <span
                            className="bg-gradient-to-r from-primary via-accent to-primary
                         bg-clip-text text-transparent font-display font-black
                         tracking-wide drop-shadow-[0_0_20px_rgba(220,38,38,0.6)]"
                        >
              MISSION
            </span>, a chance to transform ideas into reality with precision and imagination.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default AboutProfile;