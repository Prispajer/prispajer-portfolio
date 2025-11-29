import {smoothScrollTo} from "@/utils/scroll.ts";
import {navigationItems} from "@/data/data.ts";
import NavbarBackground from "@/components/sections/Navbar/NavbarBackground.tsx";


const handleScroll = (id: string) => {
    const element = document.getElementById(id);
    const distance = element && element.getBoundingClientRect().top + window.scrollY;
    element && smoothScrollTo(distance!, 1000);
}

const NavbarContainer = () => {
    return (
        <nav
            className="fixed w-100 top-10 left-1/2 -translate-x-1/2 flex mx-auto bg-gradient-to-t from-transparent to-black rounded-[50%] z-10"
        >
            <div className="relative w-full border-t-10 border-b-4 border-x-4 rounded-[50%] border-primary/20 z-10">
                <NavbarBackground/>
                <div className="flex items-center justify-center gap-10 pt-6 pb-8 z-10">
                    {navigationItems.map((item, _) => (
                        <div onClick={() => handleScroll(item.id)} className="group relative w-12 h-12 flex items-center justify-center cursor-pointer z-10 hover:animate-[var(--animate-scale-in),var(--animate-glow)] animate-scale-out">
                            <div className="absolute inset-0 rounded-full border-2 border-primary/30 group-hover:border-primary transition-colors duration-300" />
                            <div className="absolute inset-0 rounded-full bg-primary/0 group-hover:bg-primary/20 transition-colors duration-300" />
                            <item.icon className="w-6 h-6 text-muted-foreground group-hover:text-primary transition-colors duration-300 relative z-10" />
                        </div>
                    ))}
                </div>
            </div>
        </nav>
    );
};

export default NavbarContainer;