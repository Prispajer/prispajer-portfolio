import {Button} from "@/components/ui/button";
import {socialItems} from "@/data/data.ts";
import {Mail} from "lucide-react";
import ContactBackground from "@/components/sections/Contact/ContactBackground.tsx";

const ContactSection = () => {
    return (
        <section id="contact" className="relative min-h-screen flex items-center justify-center overflow-hidden">
            <ContactBackground/>
            <div className="container mx-auto px-4 max-w-4xl relative z-10">
                <div className="text-center mb-16 space-y-6">
                    <h2 className="text-5xl md:text-6xl font-black font-headers tracking-wider">
            <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent font-headers drop-shadow-[0_0_30px_rgba(220,38,38,0.6)]">
              CONTACT
            </span>
                    </h2>
                    <div className="w-32 h-1 bg-gradient-to-r from-primary to-accent mx-auto shadow-[0_0_20px_rgba(220,38,38,0.6)]" />
                    <p className="text-xl text-foreground/80 max-w-2xl mx-auto">
                        Ready to start your next mission? Let's connect.
                    </p>
                </div>

                {/* Content */}
                <div className="relative backdrop-blur-sm bg-card/80 p-8 md:p-12 rounded-lg border-2 border-primary/30 hover:border-primary/50 transition-all duration-500 shadow-[0_0_50px_rgba(220,38,38,0.2)] hover:shadow-[0_0_70px_rgba(220,38,38,0.4)] group">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/10 blur-xl rounded-lg opacity-60 group-hover:opacity-100 transition-opacity duration-500" />

                    <div className="relative space-y-10">
                        {/* Email Section */}
                        <div className="text-center space-y-4">
                            <div className="flex items-center justify-center gap-3 mb-6">
                                <Mail className="w-8 h-8 text-primary" />
                                <h3 className="text-3xl font-black tracking-wider text-primary">
                                    EMAIL
                                </h3>
                            </div>
                            <a
                                href="mailto:contact@example.com"
                                className="text-2xl md:text-3xl font-bold text-foreground/90 hover:text-primary transition-colors block"
                            >
                                koziel.adrian98@gmail.com
                            </a>
                        </div>

                        {/* Divider */}
                        <div className="w-full h-px bg-gradient-to-r from-transparent via-primary to-transparent" />

                        {/* Social Links */}
                        <div className="space-y-6">
                            <h3 className="text-2xl font-black tracking-wider text-center text-accent">
                                FIND ME ON
                            </h3>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                {socialItems.map((social, index) => {
                                    const Icon = social.icon;
                                    return (
                                        <a
                                            key={index}
                                            href={social.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="group/link"
                                        >
                                            <Button
                                                variant="outline"
                                                className="w-full h-auto py-4 px-6 border-2 border-primary/30 hover:border-primary/60 bg-background/50 backdrop-blur-sm hover:bg-primary/10 transition-all duration-300 group-hover/link:scale-105"
                                            >
                                                <div className="flex items-center gap-4 w-full">
                                                    <Icon className="w-6 h-6 text-primary group-hover/link:text-accent transition-colors" />
                                                    <div className="text-left flex-1">
                                                        {/*<div className="font-bold text-foreground group-hover/link:text-primary transition-colors">*/}
                                                        {/*    {social.icon}*/}
                                                        {/*</div>*/}
                                                        {/*<div className="text-sm text-foreground/60">*/}
                                                        {/*    {social.handle}*/}
                                                        {/*</div>*/}
                                                    </div>
                                                </div>
                                            </Button>
                                        </a>
                                    );
                                })}
                            </div>
                        </div>
                    </div>

                    {/* Corner accents */}
                    <div className="absolute top-0 left-0 w-16 h-16 border-t-2 border-l-2 border-primary/60 rounded-tl-lg" />
                    <div className="absolute bottom-0 right-0 w-16 h-16 border-b-2 border-r-2 border-accent/60 rounded-br-lg" />
                </div>
            </div>
        </section>
    );
};

export default ContactSection;
