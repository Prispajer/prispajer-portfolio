import {Button} from "@/components/ui/button.tsx";

const PortfolioButtons = ({liveApp, sourceCode, videoDemo} : {liveApp?: string, sourceCode: string, videoDemo?: string}) => {
    return (
        <div className="mt-auto flex flex-col sm:flex-row gap-4 pt-6">
            {liveApp && <Button asChild className="flex-1 px-4 py-2 text-sm font-bold text-silver
               border border-primary/40 rounded-md
               bg-gradient-to-r from-primary/20 to-primary/40
               hover:from-primary/40 hover:to-primary/60
               hover:translate-y-[-2px] transition-all
               shadow-[0_0_20px_rgba(220,38,38,0.4)] cursor-pointer">
                <a href={liveApp} target="_blank" rel="noopener noreferrer">View Live</a>
            </Button>}
            <Button asChild className="flex-1 px-4 py-2 text-sm font-bold text-silver
               border border-primary/40 rounded-md
               bg-gradient-to-r from-primary/20 to-primary/40
               hover:from-primary/40 hover:to-primary/60
               hover:translate-y-[-2px] transition-all
               shadow-[0_0_20px_rgba(220,38,38,0.4)] cursor-pointer">
                <a href={sourceCode} target="_blank" rel="noopener noreferrer">View Code</a>
            </Button>
            {videoDemo && <Button asChild className="flex-1 px-4 py-2 text-sm font-bold text-silver
               border border-primary/40 rounded-md
               bg-gradient-to-r from-primary/20 to-primary/40
               hover:from-primary/40 hover:to-primary/60
               hover:translate-y-[-2px] transition-all
               shadow-[0_0_20px_rgba(220,38,38,0.4)] cursor-pointer">
                <a href={videoDemo} target="_blank" rel="noopener noreferrer">View Video</a>
            </Button>}
        </div>
    )
}

export default PortfolioButtons;