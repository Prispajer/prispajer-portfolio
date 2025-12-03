import {Button} from "@/components/ui/button.tsx";
import {socialItems} from "@/data/data.ts";

const ContactSocials = () => {
    return (
        <>
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
                                className="w-full h-auto py-4 px-6 border-2 border-primary/30
                           hover:border-primary/60 bg-background/50 backdrop-blur-sm
                           hover:bg-primary/10 transition-all duration-300
                           group-hover/link:scale-105"
                            >
                                <div className="flex items-center gap-4 w-full">
                                    <Icon className="w-6 h-6 text-primary group-hover/link:text-accent transition-colors" />
                                    <div className="text-left flex-1">
                                    </div>
                                </div>
                            </Button>
                        </a>
                    );
                })}
            </div>
        </>
    );
};

export default ContactSocials;