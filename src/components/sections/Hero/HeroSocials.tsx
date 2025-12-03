import {socialItems} from "@/data/data.ts";

const HeroSocials = () => {
    return (
        <div className="flex justify-center items-center space-x-4 pt-6">
            {socialItems.map((social, index) => (
                <a
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    key={index}
                    className="group relative w-12 h-12 bg-transparent
                               backdrop-blur-sm border-2 border-primary/30 hover:border-primary
                               flex items-center justify-center cursor-pointer transition-all
                               duration-300 hover:scale-110 hover:shadow-glow"
                >
                    <div
                        className="w-full z-10 flex items-center justify-center
                                 text-foreground group-hover:text-primary transition-colors duration-300"
                        aria-label={social.link}
                    >
                        <social.icon className="w-6 h-6 sm:w-7 sm:h-7" />
                    </div>
                </a>
            ))}
        </div>
    )
}

export default HeroSocials;