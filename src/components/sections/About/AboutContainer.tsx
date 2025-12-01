import AboutBackground from "@/components/sections/About/AboutBackground.tsx";
import {technologyItems} from "@/data/data.ts";
import {Card, CardContent, CardTitle} from "@/components/ui/card.tsx";


const AboutContainer = () => {
    return (
        <section id="about" className="relative grid grid-cols-1 pt-40">
            <AboutBackground />
            <h2 className="relative text-center text-5xl md:text-6xl font-black tracking-wider">
                <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text font-headers text-transparent drop-shadow-[0_0_30px_rgba(220,38,38,0.5)] cursor-default">
                    ABOUT
                </span>
                <div className="w-32 h-1 mt-6 bg-gradient-to-r from-primary to-accent mx-auto shadow-glow"></div>
            </h2>
            <div className="grid grid-cols-1 xl:grid-cols-2 gap-20 max-w-9/12 xl:max-w-10/12 mx-auto">
                <div className="mx-auto pt-20">
                    <div className="flex flex-col items-center justify-center relative backdrop-blur-sm bg-gradient-to-br from-card/90 to-muted/60 p-8 md:p-12 shadow-[0_0_50px_rgba(220,38,38,0.3)] border-2 border-primary/30 mb-16 group hover:shadow-glow-accent transition-all duration-500">
                        {/*<div className="absolute inset-0 bg-gradient-to-b from-background via-card/30 to-background"></div>*/}
                        {/*<div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>*/}
                        {/*<div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl"></div>*/}
                        <div className="absolute top-2 left-2 w-16 h-16 border-t-2 border-l-2 border-primary/60 rounded-tl-lg" />
                        <div className="absolute bottom-2 right-2 w-16 h-16 border-b-2 border-r-2 border-accent/60 rounded-br-lg" />

                        <img className="h-100" src="./images/Prispajer.png" alt="Prispajer"></img>
                        <div className="relative z-10 space-y-8 mt-10 font-gothic text-justify cursor-default">
                            <p className="text-lg md:text-xl text-foreground/90 leading-relaxed">
                                I walk the path as a <span className="text-primary font-display font-black tracking-wider">freelance developer</span>,
                                forging solutions across both <span className="text-accent font-bold">frontend and backend</span>.
                                My journey is driven not only by technology, but by the art of {""} <span className="text-primary font-bold">creative thinking</span>
                                {""} and the pursuit of clarity in every line of code.
                            </p>

                            <p className="text-lg md:text-xl text-foreground/90 leading-relaxed">
                                I believe in <span className="text-accent font-display font-black">clean, maintainable architecture</span>,
                                where elegance meets discipline. Guided by the principle of {""}
                                <span className="text-primary font-bold">DRY — Don’t Repeat Yourself</span>,
                                I craft systems that are modular, reusable, and built to last.
                            </p>

                            <p className="text-lg md:text-xl text-foreground/90 leading-relaxed">
                                Each project is more than just a task — it is a {""}
                                <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent
                   font-display font-black tracking-wide drop-shadow-[0_0_20px_rgba(220,38,38,0.6)]">
    MISSION
  </span>,
                                a chance to transform ideas into reality with precision and imagination.
                            </p>
                        </div>
                    </div>
                </div>
                <div className=" xl:pt-40">
                    <h3 className="relative text-center text-5xl md:text-4xl font-black mb-10 tracking-wider">
        <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text font-headers text-transparent drop-shadow-[0_0_30px_rgba(220,38,38,0.5)] cursor-default">
            ARSENAL OF TECHNOLOGIES
        </span>
                        <div className="w-32 h-1 mt-6 bg-gradient-to-r from-primary to-accent mx-auto shadow-glow"></div>
                    </h3>

                    <div className="backdrop-blur-sm bg-gradient-to-br from-card/90 to-muted/60 p-8 shadow-[0_0_50px_rgba(220,38,38,0.3)] border-2 border-primary/30 mb-16 group hover:shadow-glow-accent transition-all duration-500">
                        {/*<div className="absolute inset-0 bg-gradient-to-b from-background via-card/30 to-background"></div>*/}
                        {/*<div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>*/}
                        {/*<div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl"></div>*/}
                        <div className="absolute top-2 left-2 w-16 h-16 border-t-2 border-l-2 border-primary/60 rounded-tl-lg" />
                        <div className="absolute bottom-2 right-2 w-16 h-16 border-b-2 border-r-2 border-accent/60 rounded-br-lg" />

                        <div className="flex flex-wrap items-center justify-center gap-6 cursor-default">
                            {technologyItems.map((technology, index) => (
                                <Card
                                    key={index}
                                    className="min-w-45 min-h-22 border-0 py-2 z-10"
                                    style={{
                                        boxShadow: `
                  4px 4px 10px ${technology.borderColor},
                  -4px 4px 10px ${technology.borderColor},
                  4px -4px 10px ${technology.borderColor},
                  -4px -4px 10px ${technology.borderColor}
                `,
                                        opacity: 1,
                                    }}
                                >
                                    <CardContent className="flex flex-col items-center justify-center">
                                        <img className="max-w-15" alt={technology.alt} src={technology.image} />
                                        <CardTitle className="font-buttons">{technology.name}</CardTitle>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>

                    </div>
                    <div className="relative z-10 w-full h-1 mt-6 bg-gradient-to-r from-transparent via-primary to-transparent mx-auto"></div>
                </div>
            </div>
        </section>
    );
};

export default AboutContainer;