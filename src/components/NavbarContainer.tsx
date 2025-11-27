import { Home, User, Briefcase, Mail } from "lucide-react";
import {smoothScrollTo} from "@/utils/scroll.ts";

const navigation = [
    {id: "hero", name: "Hero", icon: Home},
    {id: "about", name: "About", icon: User},
    {id: "projects", name: "Projects", icon: Briefcase},
    {id: "contact", name: "Contact", icon: Mail},
]

const handleScroll = (id: string) => {
    const element = document.getElementById(id);
    const distance = element && element.getBoundingClientRect().top + window.scrollY;
    element && smoothScrollTo(distance!, 1000);
}

const NavbarContainer = () => {
    return (
        <div
            className="fixed w-100 top-10 left-1/2 -translate-x-1/2 flex mx-auto bg-gradient-to-t from-transparent to-black rounded-[50%] z-10"
        >
            <div className="relative w-full border-t-10 border-b-4 border-x-4 rounded-[50%] border-primary/20 z-10">
                <div className="flex items-center justify-center gap-10 pt-6 pb-8 z-10">
                    {navigation.map((item, _) => (
                            <div onClick={() => handleScroll(item.id)} className="group relative w-12 h-12 flex items-center justify-center cursor-pointer z-10 hover:animate-[var(--animate-scale-in),var(--animate-glow)] animate-scale-out">
                                <div className="absolute inset-0 rounded-full border-2 border-primary/30 group-hover:border-primary transition-colors duration-300" />
                                <div className="absolute inset-0 rounded-full bg-primary/0 group-hover:bg-primary/20 transition-colors duration-300" />
                                <item.icon className="w-6 h-6 text-muted-foreground group-hover:text-primary transition-colors duration-300 relative z-10" />
                            </div>
                    ))}
                </div>

                <div className="absolute top-0 left-1/2 w-full -translate-x-1/2 h-full">
                    <div className="w-full h-full bg-transparent border-b-0 border-t-4 border-x-2 border-accent rounded-full animate-pulse" />
                </div>
                <div className="absolute top-0 left-1/2 w-40 -translate-x-1/2 h-full">
                    <div className="w-full h-full bg-transparent border-b-0 border-t-4 border-x-2 border-accent rounded-full animate-pulse" />
                </div>
                <div className="absolute top-1/4 left-1/2 -translate-x-1/2 h-full">
                    <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                </div>
                <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-2 h-32 bg-gradient-to-b from-accent/40 via-primary/40 to-transparent" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 w-1 h-40 bg-gradient-to-b from-primary/40 via-secondary/40 to-transparent" />
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-32 bg-gradient-to-b from-secondary/40 via-secondary/40 to-transparent" />
            </div>
        </div>
    );
};

export default NavbarContainer;