import {socialItems} from "@/data/data.ts";

const HeroSocials = () => {
    return (
        <div className="flex justify-center items-center space-x-4 pt-6">
            {socialItems.map((social, index) => (
                <div
                    key={index}
                    className="group relative w-12 h-12 bg-transparent
                               backdrop-blur-sm border-2 border-primary/30 hover:border-primary
                               flex items-center justify-center cursor-pointer transition-all
                               duration-300 hover:scale-110 hover:shadow-glow"
                >
                    <a
                        href={social.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full z-10 flex items-center justify-center h-5
                                 text-foreground group-hover:text-primary transition-colors duration-300"
                        aria-label="GitHub"
                    >
                        <social.icon />
                    </a>

                    <div
                        className={`absolute inset-0 bg-gradient-to-b 
                        opacity-0 group-hover:opacity-30 transition-opacity duration-300`}
                    />
                </div>
            ))}
        </div>
    )
}

export default HeroSocials;