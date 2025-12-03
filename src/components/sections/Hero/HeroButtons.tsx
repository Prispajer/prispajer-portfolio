import {Button} from "@/components/ui/button.tsx";
import {handleScroll} from "@/utils/scroll.ts";
import {ArrowRight, Download} from "lucide-react";

const HeroButtons = () => {
    return (
        <div className="flex flex-col justify-center sm:flex-row gap-4 pt-4">
            <Button
                onClick={() => handleScroll("portfolio")}
                size="xl"
                className="group bg-gradient-to-r from-primary to-accent
                             hover:shadow-glow-accent text-primary-foreground font-black
                             tracking-widest transition-all duration-300 hover:scale-105 cursor-pointer"
            >
                <span className="relative z-10 font-buttons">VIEW MISSIONS</span>
                <ArrowRight
                    className="ml-2 h-5 w-5 relative z-10 group-hover:translate-x-1 transition-transform"
                />
            </Button>
            <Button
                size="xl"
                className="border-2 bg-accent border-primary/50 text-foreground hover:bg-primary/20
                             hover:border-primary hover:shadow-glow backdrop-blur-sm font-display
                             font-black tracking-widest transition-all duration-300 hover:scale-105
                             font-navbar cursor-pointer"
            >
                <Download className="mr-2 h-5 w-5" />
                DOWNLOAD CV
            </Button>
        </div>
    )
}

export default HeroButtons;