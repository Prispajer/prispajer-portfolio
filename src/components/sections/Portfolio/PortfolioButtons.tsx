import {Button} from "@/components/ui/button.tsx";

const PortfolioButtons = () => {
    return (
        <div className="mt-auto flex flex-col sm:flex-row gap-4 pt-6">
            <Button className="flex-1 px-4 py-2 text-sm font-bold text-silver
               border border-primary/40 rounded-md
               bg-gradient-to-r from-primary/20 to-primary/40
               hover:from-primary/40 hover:to-primary/60
               hover:translate-y-[-2px] transition-all
               shadow-[0_0_20px_rgba(220,38,38,0.4)] cursor-pointer">
                View Live
            </Button>
            <Button className="flex-1 px-4 py-2 text-sm font-bold text-silver
               border border-primary/40 rounded-md
               bg-gradient-to-r from-primary/20 to-primary/40
               hover:from-primary/40 hover:to-primary/60
               hover:translate-y-[-2px] transition-all
               shadow-[0_0_20px_rgba(220,38,38,0.4)] cursor-pointer">
                View Code
            </Button>
        </div>
    )
}

export default PortfolioButtons;