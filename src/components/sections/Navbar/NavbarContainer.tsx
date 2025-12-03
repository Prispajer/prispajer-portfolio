import {handleScroll} from "@/utils/scroll.ts";
import NavbarBackground from "@/components/sections/Navbar/NavbarBackground.tsx";
import {navigationItems} from "@/data/data.ts";

const NavbarContainer = () => {
    return (
        <nav
            className="fixed top-10 left-1/2 -translate-x-1/2 mx-auto z-10"
        >
            <div>
            <div className="relative w-100 max-w-85 sm:max-w-100 border-t-10 border-b-4 border-x-4 border-primary/20 bg-gradient-to-t from-transparent to-black rounded-[50%]  z-10">
                <NavbarBackground/>
                <div className="flex items-center justify-center gap-10 pt-4 pb-6 sm:pt-6 sm:pb-8 z-10">
                    {navigationItems.map((item, _) => (
                        <div onClick={() => handleScroll(item.id)} className="group relative w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center cursor-pointer z-10 hover:animate-[var(--animate-scale-in),var(--animate-glow)] animate-scale-out">
                            <div className="absolute inset-0 rounded-full border-2 border-primary/30 group-hover:border-primary transition-colors duration-300" />
                            <div className="absolute inset-0 rounded-full bg-primary/0 group-hover:bg-primary/20 transition-colors duration-300" />
                            <item.icon className="w-6 h-6 sm:w-7 sm:h-7 text-muted-foreground group-hover:text-primary transition-colors duration-300 relative z-10" />
                        </div>
                    ))}
                </div>
            </div>
            </div>
        </nav>
    );
};

export default NavbarContainer;